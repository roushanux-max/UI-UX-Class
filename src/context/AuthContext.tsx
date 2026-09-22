import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AccessRequest, UserRole } from '../types';
import {
  auth,
  googleProvider,
  signInWithRedirect,
  getRedirectResult,
  firebaseSignOut,
  onAuthStateChanged,
  FirebaseUser
} from '../lib/firebase';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

export const PRIMARY_ADMIN_EMAIL = 'roushan.ux@gmail.com';
export const SECONDARY_ADMIN_EMAIL = 'roushankr.it@gmail.com';

interface AuthContextType {
  currentUser: User;
  isAdmin: boolean;
  hasFullAccess: boolean;
  usersList: User[];
  accessRequests: AccessRequest[];
  firebaseUser: FirebaseUser | null;
  isAuthenticatingGoogle: boolean;
  googleAuthError: string | null;
  signInWithGoogle: () => Promise<void>;
  signOutGoogle: () => Promise<void>;
  switchUser: (email: string, name?: string, photoURL?: string) => void;
  loginWithEmail: (email: string, name?: string) => void;
  grantAccess: (email: string, name?: string) => void;
  revokeAccess: (email: string) => void;
  submitAccessRequest: (email: string, name: string, reason?: string) => boolean;
  approveRequest: (requestId: string) => void;
  rejectRequest: (requestId: string) => void;
  resetToDefaults: () => void;
  pendingRequestsCount: number;
}

const DEFAULT_USERS: User[] = [
  {
    email: 'roushan.ux@gmail.com',
    name: 'Roushan UX (Primary Admin)',
    role: 'admin',
    grantedAt: new Date(Date.now() - 86400000 * 30).toISOString(),
    grantedBy: 'System Architecture'
  },
  {
    email: 'roushankr.it@gmail.com',
    name: 'Roushan Kumar (Dev Account)',
    role: 'admin',
    grantedAt: new Date(Date.now() - 86400000 * 15).toISOString(),
    grantedBy: 'roushan.ux@gmail.com'
  },
  {
    email: 'sarah.designer@example.com',
    name: 'Sarah Chen (UX Fellow)',
    role: 'full_access',
    grantedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    grantedBy: 'roushan.ux@gmail.com'
  },
  {
    email: 'marcus.student@university.edu',
    name: 'Marcus Miller (Student)',
    role: 'full_access',
    grantedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    grantedBy: 'roushan.ux@gmail.com'
  }
];

const DEFAULT_REQUESTS: AccessRequest[] = [
  {
    id: 'req-1',
    email: 'alexandra.ux@studio.org',
    name: 'Alexandra Vance',
    reason: 'Enrolled in Spring cohort. Need to complete Days 4-10 sprint activities.',
    requestedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    status: 'pending'
  },
  {
    id: 'req-2',
    email: 'david.dev@fintech.io',
    name: 'David Kim',
    reason: 'Product engineer collaborating on EcoTrack capstone handoff module.',
    requestedAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    status: 'pending'
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [usersList, setUsersList] = useState<User[]>(() => {
    try {
      const saved = localStorage.getItem('uiux_users_list');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_USERS;
  });

  const [accessRequests, setAccessRequests] = useState<AccessRequest[]>(() => {
    try {
      const saved = localStorage.getItem('uiux_access_requests');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_REQUESTS;
  });

  // Current logged in user (default to roushan.ux@gmail.com as designated admin)
  const [currentUserEmail, setCurrentUserEmail] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('uiux_current_user_email');
      if (saved) return saved;
    } catch {
      // ignore
    }
    return PRIMARY_ADMIN_EMAIL;
  });

  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [isAuthenticatingGoogle, setIsAuthenticatingGoogle] = useState(false);
  const [googleAuthError, setGoogleAuthError] = useState<string | null>(null);

  const syncProfileToDatabase = async (fUser: FirebaseUser, role: UserRole) => {
    if (!supabase || !fUser.email) return;
    const { error } = await supabase.from('profiles').upsert({
      id: fUser.uid,
      email: fUser.email.trim().toLowerCase(),
      display_name: fUser.displayName,
      photo_url: fUser.photoURL,
      role
    }, { onConflict: 'id' });
    if (error) console.error('Supabase profile sync failed:', error);
  };

  const loadDatabaseState = async (fUser: FirebaseUser) => {
    if (!supabase || !fUser.email) return;
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('*');
    if (profilesError) {
      console.error('Supabase profile load failed:', profilesError);
    } else if (profiles) {
      setUsersList(profiles.map((profile) => ({
        email: profile.email,
        name: profile.display_name || profile.email.split('@')[0],
        role: profile.role as UserRole,
        photoURL: profile.photo_url || undefined,
        grantedAt: profile.granted_at || undefined,
        grantedBy: profile.granted_by || undefined,
        isGoogleAuth: true
      })));
    }

    const { data: requests, error: requestsError } = await supabase
      .from('access_requests')
      .select('*')
      .order('requested_at', { ascending: false });
    if (requestsError) {
      console.error('Supabase access request load failed:', requestsError);
    } else if (requests) {
      setAccessRequests(requests.map((request) => ({
        id: request.id,
        email: request.email,
        name: request.name,
        reason: request.reason,
        requestedAt: request.requested_at,
        status: request.status
      })));
    }
  };

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fUser) => {
      setFirebaseUser(fUser);
      if (fUser?.email) {
        const cleanEmail = fUser.email.trim().toLowerCase();
        const existingUser = usersList.find((user) => user.email.toLowerCase() === cleanEmail);
        const isDesignatedAdmin =
          cleanEmail === PRIMARY_ADMIN_EMAIL.toLowerCase() ||
          cleanEmail === SECONDARY_ADMIN_EMAIL.toLowerCase();
        const syncedRole = existingUser?.role || (isDesignatedAdmin ? 'admin' : 'basic');
        setCurrentUserEmail(cleanEmail);

        setUsersList((prev) => {
          const idx = prev.findIndex((u) => u.email.toLowerCase() === cleanEmail);
          const isAdm =
            cleanEmail === PRIMARY_ADMIN_EMAIL.toLowerCase() ||
            cleanEmail === SECONDARY_ADMIN_EMAIL.toLowerCase();

          const updated: User = {
            email: cleanEmail,
            name: fUser.displayName || (idx >= 0 ? prev[idx].name : cleanEmail.split('@')[0]),
            role: idx >= 0 ? prev[idx].role : ((isAdm ? 'admin' : 'basic') as UserRole),
            photoURL: fUser.photoURL || (idx >= 0 ? prev[idx].photoURL : undefined),
            isGoogleAuth: true,
            grantedAt: idx >= 0 ? prev[idx].grantedAt : isAdm ? new Date().toISOString() : undefined,
            grantedBy: idx >= 0 ? prev[idx].grantedBy : isAdm ? 'System' : undefined
          };

          if (idx >= 0) {
            const next = [...prev];
            next[idx] = { ...next[idx], ...updated };
            return next;
          }
          return [...prev, updated];
        });
        if (isSupabaseConfigured) {
          void syncProfileToDatabase(fUser, syncedRole);
          void loadDatabaseState(fUser);
        }
      }
    });

    getRedirectResult(auth).catch((err: unknown) => {
      const errorCode =
        typeof err === 'object' && err !== null && 'code' in err
          ? String((err as { code?: unknown }).code)
          : '';
      if (errorCode && errorCode !== 'auth/popup-closed-by-user') {
        setGoogleAuthError(
          errorCode === 'auth/unauthorized-domain'
            ? `Google sign-in is not enabled for ${window.location.hostname}. Add this host to Firebase Authentication > Settings > Authorized domains.`
            : 'Google sign-in could not be completed. Please try again.'
        );
        console.error('Google redirect sign-in error:', err);
      }
    });

    return () => unsubscribe();
  }, []);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('uiux_users_list', JSON.stringify(usersList));
    } catch (e) {
      console.error(e);
    }
  }, [usersList]);

  useEffect(() => {
    try {
      localStorage.setItem('uiux_access_requests', JSON.stringify(accessRequests));
    } catch (e) {
      console.error(e);
    }
  }, [accessRequests]);

  useEffect(() => {
    try {
      localStorage.setItem('uiux_current_user_email', currentUserEmail);
    } catch (e) {
      console.error(e);
    }
  }, [currentUserEmail]);

  // Derive current user profile
  const matchedUser = usersList.find(
    (u) => u.email.toLowerCase() === currentUserEmail.toLowerCase()
  );

  const isAdminEmail =
    currentUserEmail.toLowerCase() === PRIMARY_ADMIN_EMAIL.toLowerCase() ||
    currentUserEmail.toLowerCase() === SECONDARY_ADMIN_EMAIL.toLowerCase();

  const currentUser: User = matchedUser || {
    email: currentUserEmail,
    name: currentUserEmail.split('@')[0],
    role: isAdminEmail ? 'admin' : 'basic',
    isGoogleAuth: !!firebaseUser && firebaseUser.email?.toLowerCase() === currentUserEmail.toLowerCase()
  };

  const isAdmin = currentUser.role === 'admin' || isAdminEmail;
  const hasFullAccess = isAdmin || currentUser.role === 'full_access';

  // Google Sign-In action
  const signInWithGoogle = async () => {
    setIsAuthenticatingGoogle(true);
    setGoogleAuthError(null);
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (err: unknown) {
      console.error('Google sign-in error:', err);
      const errorCode =
        typeof err === 'object' && err !== null && 'code' in err
          ? String((err as { code?: unknown }).code)
          : '';

      if (errorCode === 'auth/unauthorized-domain') {
        setGoogleAuthError(
          `Google sign-in is not enabled for ${window.location.hostname}. Add this host to Firebase Authentication > Settings > Authorized domains.`
        );
      } else {
        const errorMsg = err instanceof Error ? err.message : 'Google sign-in could not be completed.';
        setGoogleAuthError(errorMsg);
      }
    } finally {
      setIsAuthenticatingGoogle(false);
    }
  };

  // Google Sign-Out action
  const signOutGoogle = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      console.error('Sign-out error:', err);
    }
    // Switch to guest after signing out
    switchUser('guest.visitor@example.com', 'Guest Visitor');
  };

  const switchUser = (email: string, name?: string, photoURL?: string) => {
    const cleanEmail = email.trim().toLowerCase();
    setCurrentUserEmail(cleanEmail);
    // If not in list, add as basic (or admin if it's designated admin)
    setUsersList((prev) => {
      const exists = prev.some((u) => u.email.toLowerCase() === cleanEmail);
      if (exists) return prev;
      const isAdm =
        cleanEmail === PRIMARY_ADMIN_EMAIL.toLowerCase() ||
        cleanEmail === SECONDARY_ADMIN_EMAIL.toLowerCase();
      return [
        ...prev,
        {
          email: cleanEmail,
          name: name || cleanEmail.split('@')[0],
          role: (isAdm ? 'admin' : 'basic') as UserRole,
          photoURL,
          grantedAt: isAdm ? new Date().toISOString() : undefined,
          grantedBy: isAdm ? 'System' : undefined
        }
      ];
    });
  };

  const loginWithEmail = (email: string, name?: string) => {
    switchUser(email, name);
  };

  const grantAccess = (email: string, name?: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const isDesignatedAdmin = cleanEmail === PRIMARY_ADMIN_EMAIL.toLowerCase();
    setUsersList((prev) => {
      const idx = prev.findIndex((u) => u.email.toLowerCase() === cleanEmail);
      const updatedUser: User = {
        email: cleanEmail,
        name: name || (idx >= 0 ? prev[idx].name : cleanEmail.split('@')[0]),
        role: isDesignatedAdmin ? 'admin' : 'full_access',
        photoURL: idx >= 0 ? prev[idx].photoURL : undefined,
        grantedAt: new Date().toISOString(),
        grantedBy: currentUser.email
      };

      if (idx >= 0) {
        const next = [...prev];
        next[idx] = updatedUser;
        return next;
      }
      return [...prev, updatedUser];
    });

    // Also mark any pending requests as approved
    setAccessRequests((prev) =>
      prev.map((req) =>
        req.email.toLowerCase() === cleanEmail ? { ...req, status: 'approved' } : req
      )
    );
    if (supabase) {
      void supabase.from('profiles').update({
        role: isDesignatedAdmin ? 'admin' : 'full_access',
        display_name: name || cleanEmail.split('@')[0],
        granted_at: new Date().toISOString(),
        granted_by: currentUser.email
      }).eq('email', cleanEmail).then(({ error }) => {
        if (error) console.error('Supabase access grant failed:', error);
      });
    }
  };

  const revokeAccess = (email: string) => {
    const cleanEmail = email.trim().toLowerCase();
    if (cleanEmail === PRIMARY_ADMIN_EMAIL.toLowerCase()) {
      alert('Cannot revoke rights of Primary Admin (roushan.ux@gmail.com)');
      return;
    }

    setUsersList((prev) =>
      prev.map((u) =>
        u.email.toLowerCase() === cleanEmail
          ? { ...u, role: 'basic', grantedAt: undefined, grantedBy: undefined }
          : u
      )
    );
  };

  const submitAccessRequest = (email: string, name: string, reason?: string): boolean => {
    const cleanEmail = email.trim().toLowerCase();
    // Check if already approved
    const existingUser = usersList.find((u) => u.email.toLowerCase() === cleanEmail);
    if (existingUser && (existingUser.role === 'full_access' || existingUser.role === 'admin')) {
      return false; // already has access
    }

    // Add or update request
    setAccessRequests((prev) => {
      const existingReqIndex = prev.findIndex((r) => r.email.toLowerCase() === cleanEmail);
      const newReq: AccessRequest = {
        id: `req-${Date.now()}`,
        email: cleanEmail,
        name: name || cleanEmail.split('@')[0],
        reason: reason || 'Requested full presentation rights for UI UX course.',
        requestedAt: new Date().toISOString(),
        status: 'pending'
      };

      if (existingReqIndex >= 0) {
        const updated = [...prev];
        updated[existingReqIndex] = newReq;
        return updated;
      }
      return [newReq, ...prev];
    });
    if (supabase && firebaseUser) {
      void supabase.from('access_requests').insert({
        requester_id: firebaseUser.uid,
        email: cleanEmail,
        name: name || cleanEmail.split('@')[0],
        reason: reason || 'Requested full presentation rights for UI UX course.',
        status: 'pending'
      }).then(({ error }) => {
        if (error) console.error('Supabase access request save failed:', error);
      });
    }

    return true;
  };

  const approveRequest = (requestId: string) => {
    const targetReq = accessRequests.find((r) => r.id === requestId);
    if (!targetReq) return;
    grantAccess(targetReq.email, targetReq.name);
  };

  const rejectRequest = (requestId: string) => {
    setAccessRequests((prev) =>
      prev.map((r) => (r.id === requestId ? { ...r, status: 'rejected' } : r))
    );
    if (supabase) {
      void supabase.from('access_requests').update({ status: 'rejected' }).eq('id', requestId).then(({ error }) => {
        if (error) console.error('Supabase request rejection failed:', error);
      });
    }
  };

  const resetToDefaults = () => {
    setUsersList(DEFAULT_USERS);
    setAccessRequests(DEFAULT_REQUESTS);
    setCurrentUserEmail(PRIMARY_ADMIN_EMAIL);
  };

  const pendingRequestsCount = accessRequests.filter((r) => r.status === 'pending').length;

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin,
        hasFullAccess,
        usersList,
        accessRequests,
        firebaseUser,
        isAuthenticatingGoogle,
        googleAuthError,
        signInWithGoogle,
        signOutGoogle,
        switchUser,
        loginWithEmail,
        grantAccess,
        revokeAccess,
        submitAccessRequest,
        approveRequest,
        rejectRequest,
        resetToDefaults,
        pendingRequestsCount
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
