import React, { useState, useEffect } from 'react';
import { useAuth, PRIMARY_ADMIN_EMAIL } from '../context/AuthContext';
import { GoogleSignInButton } from './GoogleSignInButton';
import {
  ShieldCheck,
  Send,
  CheckCircle2,
  Lock,
  X,
  UserCheck
} from 'lucide-react';

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestAccessModal: React.FC<RequestAccessModalProps> = ({
  isOpen,
  onClose
}) => {
  const {
    currentUser,
    submitAccessRequest,
    switchUser,
    signInWithGoogle,
    isAuthenticatingGoogle,
    hasFullAccess
  } = useAuth();

  const [email, setEmail] = useState(
    currentUser.email !== 'guest.visitor@example.com' ? currentUser.email : ''
  );
  const [name, setName] = useState(currentUser.name || '');
  const [reason, setReason] = useState(
    'Enrolled in UI/UX sprint class. Requesting full access to Days 2–10 presentation slides and workshop deliverables.'
  );
  const [submitted, setSubmitted] = useState(false);

  // Update defaults when currentUser changes
  useEffect(() => {
    if (currentUser.email && currentUser.email !== 'guest.visitor@example.com') {
      setEmail(currentUser.email);
      setName(currentUser.name || '');
    }
  }, [currentUser]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    submitAccessRequest(email.trim(), name.trim(), reason.trim());
    setSubmitted(true);
  };

  const handleGoogleConnect = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Course Permissions
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Request Full Presentation Rights
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {hasFullAccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Full Access Active!</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                Your authenticated account (<strong className="text-slate-900 dark:text-white font-mono">{currentUser.email}</strong>) has active presentation rights across all 10 sprint days.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
            >
              Continue to Presentation
            </button>
          </div>
        ) : submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Access Request Submitted</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                Your request has been routed to designated instructor{' '}
                <strong className="text-amber-700 dark:text-amber-300 font-mono">{PRIMARY_ADMIN_EMAIL}</strong>.
                Once approved, your email will automatically unlock all 52 slides and sprint exercises.
              </p>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <p className="text-purple-700 dark:text-purple-300 font-medium mb-1">Testing the Administrator Approval Workflow?</p>
              <button
                onClick={() => {
                  switchUser(PRIMARY_ADMIN_EMAIL, 'Roushan UX (Primary Admin)');
                  onClose();
                }}
                className="mt-1 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Switch to Admin Account & Approve
              </button>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Quick 1-Click Google Sign-In Card */}
            {!currentUser.isGoogleAuth && (
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Sign in with your Google Account
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Fast Verification</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Signing in with your university or personal Google Account pre-fills your verified email address and authenticates your profile.
                </p>
                <GoogleSignInButton
                  onClick={handleGoogleConnect}
                  isLoading={isAuthenticatingGoogle}
                  className="w-full py-2"
                  label="Connect Google Account"
                />
              </div>
            )}

            {currentUser.isGoogleAuth && (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 flex items-center gap-3">
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.name}
                    className="w-8 h-8 rounded-full border border-emerald-400/40"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs font-bold">
                    G
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Google Account Connected</p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 font-mono truncate">{currentUser.email}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                Users on the Basic Tier can view <strong>Day 1 (Introduction & Capstone Brief)</strong>.
                Submitting this request notifies the administrator to grant you full access to Days 2 through 10.
              </p>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  Your Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. yourname@university.edu"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  Reason / Student Cohort Details
                </label>
                <textarea
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Briefly state your purpose or course squad..."
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 text-xs"
                />
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  Admin Approver:
                </span>
                <span className="font-mono text-amber-700 dark:text-amber-300 font-semibold">{PRIMARY_ADMIN_EMAIL}</span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
