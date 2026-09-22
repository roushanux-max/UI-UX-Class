import React, { useState } from 'react';
import { useAuth, PRIMARY_ADMIN_EMAIL } from '../context/AuthContext';
import { GoogleSignInButton } from './GoogleSignInButton';
import { ThemeToggle } from './ThemeToggle';
import {
  Check,
  FileText,
  Lock,
  LogOut,
  Menu,
  MapPin,
  Presentation,
  Shield,
  ShieldCheck,
  Sparkles,
  UserCheck,
  UserPlus,
  X
} from 'lucide-react';

type Tab = 'presentation' | 'roadmap' | 'brief' | 'brief_generator' | 'admin';

interface NavbarProps {
  currentTab: Tab;
  onSelectTab: (tab: Tab) => void;
  onRequestAccess: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onRequestAccess
}) => {
  const {
    currentUser,
    isAdmin,
    hasFullAccess,
    pendingRequestsCount,
    isAuthenticatingGoogle,
    googleAuthError,
    signInWithGoogle,
    signOutGoogle,
    switchUser,
    loginWithEmail
  } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');

  const selectTab = (tab: Tab) => {
    onSelectTab(tab);
    setIsMenuOpen(false);
  };

  const handleCustomLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!customEmail.trim()) return;
    loginWithEmail(customEmail.trim(), customName.trim() || undefined);
    setCustomEmail('');
    setCustomName('');
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 text-slate-900 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 dark:text-white">
      <div className="mx-auto flex min-h-[4.5rem] max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-12">
        <button
          onClick={() => selectTab('presentation')}
          className="flex min-w-0 items-center gap-3 text-left"
          aria-label="Open presentation"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/20">
            <Sparkles className="h-6 w-6 text-white" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-lg font-black tracking-tight sm:text-xl">UI UX CLASS</span>
            <span className="block truncate text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
              10-Day Sprint · From Brief to Handoff
            </span>
          </span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className={`hidden rounded-full px-3 py-1.5 text-xs font-bold sm:inline-flex ${
            isAdmin
              ? 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300'
              : hasFullAccess
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
              : 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300'
          }`}>
            {isAdmin ? 'Instructor' : hasFullAccess ? 'Full access' : 'Basic access'}
          </span>
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label={isMenuOpen ? 'Close course menu' : 'Open course menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute right-4 top-[4.75rem] z-50 w-[min(24rem,calc(100vw-2rem))] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900 sm:right-8">
          <div className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-sky-700 dark:bg-slate-800 dark:text-sky-300">
              {currentUser.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{currentUser.name}</p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">{currentUser.email}</p>
              {currentUser.isGoogleAuth && (
                <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <Check className="h-3 w-3" /> Google Verified
                </span>
              )}
            </div>
          </div>

          <nav className="grid gap-1" aria-label="Course navigation">
            {[
              ['presentation', Presentation, 'Presentation deck'],
              ['roadmap', MapPin, 'Sprint roadmap'],
              ['brief', FileText, 'Capstone brief'],
              ['brief_generator', Sparkles, 'Brief generator'],
              ['admin', Shield, `Admin console${pendingRequestsCount ? ` (${pendingRequestsCount} pending)` : ''}`]
            ].map(([tab, Icon, label]) => (
              <button
                key={tab as string}
                onClick={() => selectTab(tab as Tab)}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition-colors ${
                  currentTab === tab
                    ? 'bg-sky-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="h-5 w-5" />
                {label as string}
              </button>
            ))}
          </nav>

          {!currentUser.isGoogleAuth ? (
            <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-800">
              <GoogleSignInButton
                onClick={() => void signInWithGoogle()}
                isLoading={isAuthenticatingGoogle}
                className="w-full py-3"
                label="Sign in with Google"
              />
              {googleAuthError && (
                <p role="alert" className="mt-2 rounded-lg bg-rose-50 p-2 text-xs text-rose-700 dark:bg-rose-950/50 dark:text-rose-200">
                  {googleAuthError}
                </p>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                void signOutGoogle();
                setIsMenuOpen(false);
              }}
              className="mt-4 flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-3 text-left text-sm font-semibold text-rose-600 hover:bg-rose-50 dark:border-slate-800 dark:hover:bg-rose-950/30"
            >
              <span className="flex items-center gap-2"><LogOut className="h-4 w-4" /> Sign out of Google</span>
              <span className="text-xs font-normal text-slate-400">Guest mode</span>
            </button>
          )}

          {!hasFullAccess && (
            <button
              onClick={() => {
                onRequestAccess();
                setIsMenuOpen(false);
              }}
              className="mt-2 flex w-full items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-3 text-left text-sm font-semibold text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200"
            >
              <Lock className="h-4 w-4" /> Request full presentation access
            </button>
          )}

          {isAdmin && (
            <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-800">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Classroom preview accounts</p>
              <div className="grid gap-1">
                {[
                  [PRIMARY_ADMIN_EMAIL, 'Roushan UX (Instructor)', ShieldCheck],
                  ['sarah.designer@example.com', 'Sarah Chen (Student)', UserCheck],
                  ['guest.visitor@example.com', 'Guest (Day 1 only)', Lock]
                ].map(([email, name, Icon]) => (
                  <button
                    key={email as string}
                    onClick={() => {
                      switchUser(email as string, name as string);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <Icon className="h-4 w-4" /> {name as string}
                  </button>
                ))}
              </div>
              <form onSubmit={handleCustomLogin} className="mt-3 space-y-2">
                <input
                  type="email"
                  value={customEmail}
                  onChange={(event) => setCustomEmail(event.target.value)}
                  placeholder="Classroom test email"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-950"
                  required
                />
                <input
                  type="text"
                  value={customName}
                  onChange={(event) => setCustomName(event.target.value)}
                  placeholder="Student name (optional)"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-950"
                />
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-xs font-semibold text-white dark:bg-slate-700">
                  <UserPlus className="h-4 w-4" /> Preview as student
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
