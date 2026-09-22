import React, { useState } from 'react';
import { useAuth, PRIMARY_ADMIN_EMAIL } from '../context/AuthContext';
import { GoogleSignInButton } from './GoogleSignInButton';
import { ThemeToggle } from './ThemeToggle';
import {
  Shield,
  ShieldCheck,
  Lock,
  Unlock,
  UserCheck,
  ChevronDown,
  Sparkles,
  Presentation,
  MapPin,
  FileText,
  UserPlus,
  LogOut,
  Check
} from 'lucide-react';

interface NavbarProps {
  currentTab: 'presentation' | 'roadmap' | 'brief' | 'brief_generator' | 'admin';
  onSelectTab: (tab: 'presentation' | 'roadmap' | 'brief' | 'brief_generator' | 'admin') => void;
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
    firebaseUser,
    isAuthenticatingGoogle,
    googleAuthError,
    signInWithGoogle,
    signOutGoogle,
    switchUser,
    loginWithEmail
  } = useAuth();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [customEmailInput, setCustomEmailInput] = useState('');
  const [customNameInput, setCustomNameInput] = useState('');

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmailInput.trim()) return;
    loginWithEmail(customEmailInput.trim(), customNameInput.trim() || undefined);
    setCustomEmailInput('');
    setCustomNameInput('');
    setShowUserMenu(false);
  };

  const handleGoogleSignInClick = async () => {
    await signInWithGoogle();
    setShowUserMenu(false);
  };

  const handleSignOutClick = async () => {
    await signOutGoogle();
    setShowUserMenu(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-sm backdrop-blur-md transition-colors">
      {/* Top Banner Notice for Role & Google Auth Status */}
      <div className="bg-slate-50/90 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800/80 px-4 py-1.5 text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2 transition-colors">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            UI/UX 10-Day Sprint Course
          </span>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">
            Admin: <strong className="text-amber-600 dark:text-amber-300 font-mono">{PRIMARY_ADMIN_EMAIL}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Automatic Theme Adapter Control */}
          <ThemeToggle />

          {/* Main Google Sign-In button if not currently logged in with Google */}
          {!currentUser.isGoogleAuth && (
            <div className="relative group">
              <GoogleSignInButton
                onClick={handleGoogleSignInClick}
                isLoading={isAuthenticatingGoogle}
                className="py-1 px-2.5 text-[11px] h-7"
                label="Sign in with Google"
              />
              {googleAuthError && (
                <div
                  role="alert"
                  className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-rose-200 bg-rose-50 p-3 text-[11px] leading-relaxed text-rose-800 shadow-lg dark:border-rose-900/70 dark:bg-rose-950/90 dark:text-rose-200 z-50"
                >
                  {googleAuthError}
                </div>
              )}
            </div>
          )}

          {isAdmin ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Rights</span>
            </span>
          ) : hasFullAccess ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
              <Unlock className="w-3.5 h-3.5" />
              <span>Full Access</span>
            </span>
          ) : (
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30">
                <Lock className="w-3.5 h-3.5" />
                <span>Basic Tier</span>
              </span>
              <button
                onClick={onRequestAccess}
                className="text-xs text-sky-600 dark:text-sky-400 hover:underline font-medium cursor-pointer"
              >
                Request Access
              </button>
            </div>
          )}

          {/* User Account Switcher Button */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
              id="user-account-switcher-btn"
              title="Manage account profile & switch users"
            >
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt={currentUser.name}
                  className="w-4 h-4 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span
                  className={`w-2 h-2 rounded-full ${
                    currentUser.isGoogleAuth ? 'bg-emerald-400' : 'bg-sky-400'
                  }`}
                />
              )}
              <span className="max-w-[110px] truncate">{currentUser.email}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-3 z-50 text-slate-800 dark:text-slate-200 animate-in fade-in zoom-in-95 duration-150">
                {/* Active Account Profile */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-2 mb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Active Account Profile
                    </p>
                    {currentUser.isGoogleAuth && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/30">
                        <Check className="w-3 h-3" />
                        Google Verified
                      </span>
                    )}
                  </div>

                  <div className="mt-2 flex items-center gap-2.5">
                    {currentUser.photoURL ? (
                      <img
                        src={currentUser.photoURL}
                        alt={currentUser.name}
                        className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-600 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xs font-bold text-sky-600 dark:text-sky-400">
                        {currentUser.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{currentUser.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono truncate">{currentUser.email}</p>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 dark:text-slate-400">Enrolled Permission:</span>
                    <span
                      className={`font-semibold px-2 py-0.5 rounded ${
                        currentUser.role === 'admin'
                          ? 'text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/30'
                          : currentUser.role === 'full_access'
                          ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30'
                          : 'text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-500/30'
                      }`}
                    >
                      {currentUser.role.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Google Sign In / Sign Out Action */}
                <div className="mb-3 space-y-1.5">
                  <p className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
                    Google Authentication
                  </p>
                  {currentUser.isGoogleAuth ? (
                    <button
                      onClick={handleSignOutClick}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-rose-600 dark:text-rose-300 flex items-center justify-between transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
                    >
                      <span className="flex items-center gap-1.5">
                        <LogOut className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
                        Sign Out of Google
                      </span>
                      <span className="text-[10px] text-slate-400">Switch to Guest</span>
                    </button>
                  ) : (
                    <GoogleSignInButton
                      onClick={handleGoogleSignInClick}
                      isLoading={isAuthenticatingGoogle}
                      className="w-full py-2"
                      label="Sign in with your Google Account"
                    />
                  )}
                </div>

                {/* Quick Simulation Presets */}
                <div className="space-y-1 mb-3 border-t border-slate-200 dark:border-slate-800 pt-2">
                  <p className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider mb-1">
                    Quick-Switch for Classroom Testing
                  </p>

                  <button
                    onClick={() => {
                      switchUser(PRIMARY_ADMIN_EMAIL, 'Roushan UX (Primary Admin)');
                      setShowUserMenu(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                      currentUser.email.toLowerCase() === PRIMARY_ADMIN_EMAIL.toLowerCase()
                        ? 'bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-purple-200'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-medium flex items-center gap-1 text-purple-700 dark:text-purple-300">
                        <Shield className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                        roushan.ux@gmail.com
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Designated Instructor (Full control)</div>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 font-semibold">
                      Admin
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      switchUser('roushankr.it@gmail.com', 'Roushan Kumar (Dev Account)');
                      setShowUserMenu(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                      currentUser.email.toLowerCase() === 'roushankr.it@gmail.com'
                        ? 'bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-purple-200'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-medium flex items-center gap-1 text-purple-700 dark:text-purple-300">
                        <Shield className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                        roushankr.it@gmail.com
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Connected Google Dev (Admin)</div>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 font-semibold">
                      Admin
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      switchUser('sarah.designer@example.com', 'Sarah Chen (Student)');
                      setShowUserMenu(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                      currentUser.email.toLowerCase() === 'sarah.designer@example.com'
                        ? 'bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-200'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-medium flex items-center gap-1 text-emerald-700 dark:text-emerald-300">
                        <UserCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        sarah.designer@example.com
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Approved Student (Full Access)</div>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold">
                      Full
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      switchUser('guest.visitor@example.com', 'Guest Visitor');
                      setShowUserMenu(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                      currentUser.email.toLowerCase() === 'guest.visitor@example.com'
                        ? 'bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-500/40 text-amber-900 dark:text-amber-200'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-medium flex items-center gap-1 text-amber-700 dark:text-amber-300">
                        <Lock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                        guest.visitor@example.com
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Restricted Viewer (Day 1 Only)</div>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold">
                      Basic
                    </span>
                  </button>
                </div>

                {/* Custom Email Sign In */}
                <form onSubmit={handleCustomLogin} className="border-t border-slate-200 dark:border-slate-800 pt-2 space-y-2">
                  <p className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
                    Sign in with any email
                  </p>
                  <input
                    type="email"
                    placeholder="Enter email address..."
                    value={customEmailInput}
                    onChange={(e) => setCustomEmailInput(e.target.value)}
                    required
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                  <input
                    type="text"
                    placeholder="Your name (optional)"
                    value={customNameInput}
                    onChange={(e) => setCustomNameInput(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white rounded py-1 text-xs font-medium transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <UserPlus className="w-3 h-3" />
                    Sign In
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Course Branding */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-md shadow-sky-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                UI UX CLASS
              </h1>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                10-Day Sprint
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[240px] sm:max-w-none">
              UX Design Sprint: From Brief to Handoff
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => onSelectTab('presentation')}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              currentTab === 'presentation'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Presentation className="w-4 h-4" />
            <span className="hidden sm:inline">Presentation</span> Deck
          </button>

          <button
            onClick={() => onSelectTab('roadmap')}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              currentTab === 'roadmap'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">Sprint</span> Roadmap
          </button>

          <button
            onClick={() => onSelectTab('brief')}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              currentTab === 'brief'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Capstone</span> Brief
          </button>

          <button
            onClick={() => onSelectTab('brief_generator')}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              currentTab === 'brief_generator'
                ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                : 'text-emerald-700 dark:text-emerald-300 hover:text-emerald-950 dark:hover:text-white hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Brief Generator</span>
          </button>

          <button
            onClick={() => onSelectTab('admin')}
            className={`relative px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              currentTab === 'admin'
                ? 'bg-purple-600 text-white shadow-sm shadow-purple-600/30'
                : 'text-purple-700 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-purple-300 dark:border-purple-500/30'
            }`}
          >
            <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Admin Rights</span>
            {pendingRequestsCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-rose-500 text-white animate-bounce">
                {pendingRequestsCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
