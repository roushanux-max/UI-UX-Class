import React, { useState } from 'react';
import { useAuth, PRIMARY_ADMIN_EMAIL } from '../context/AuthContext';
import { GoogleSignInButton } from './GoogleSignInButton';
import {
  Shield,
  ShieldCheck,
  UserPlus,
  UserCheck,
  UserX,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  Users,
  RotateCcw,
  AlertCircle,
  Eye,
  Sparkles,
  Check
} from 'lucide-react';

export const AdminConsole: React.FC = () => {
  const {
    currentUser,
    isAdmin,
    usersList,
    accessRequests,
    grantAccess,
    revokeAccess,
    approveRequest,
    rejectRequest,
    switchUser,
    resetToDefaults,
    signInWithGoogle,
    isAuthenticatingGoogle
  } = useAuth();

  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleManualGrant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEmail.trim()) return;

    const email = inputEmail.trim();
    const name = inputName.trim() || undefined;

    grantAccess(email, name);
    setFeedbackMessage({
      type: 'success',
      text: `Successfully granted Full Presentation Access rights to ${email}`
    });
    setInputEmail('');
    setInputName('');

    setTimeout(() => {
      setFeedbackMessage(null);
    }, 4000);
  };

  const pendingRequests = accessRequests.filter((r) => r.status === 'pending');
  const pastRequests = accessRequests.filter((r) => r.status !== 'pending');

  const filteredUsers = usersList.filter(
    (u) =>
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fullAccessCount = usersList.filter((u) => u.role === 'full_access' || u.role === 'admin').length;
  const basicCount = usersList.filter((u) => u.role === 'basic').length;
  const googleUsersCount = usersList.filter((u) => u.isGoogleAuth).length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Admin Authorization Notice */}
      {!isAdmin && (
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/40 text-amber-900 dark:text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Viewing as Non-Admin ({currentUser.email})</p>
              <p className="text-xs text-amber-800 dark:text-amber-300">
                You are currently in read-only preview mode. To approve requests or modify rights, sign in with the primary instructor account ({PRIMARY_ADMIN_EMAIL}) or connect with your Google Admin account.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GoogleSignInButton
              onClick={signInWithGoogle}
              isLoading={isAuthenticatingGoogle}
              label="Sign in with Google"
              className="py-1.5 px-3 text-xs"
            />
            <button
              onClick={() => switchUser(PRIMARY_ADMIN_EMAIL, 'Roushan UX (Primary Admin)')}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0 cursor-pointer shadow-xs"
            >
              Simulate Instructor Admin
            </button>
          </div>
        </div>
      )}

      {/* Top Banner & Stats */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Course Permissions & Admin Console
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Manage student access tiers, approve pending enrollment requests, and view Google-authenticated participants
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {!currentUser.isGoogleAuth ? (
            <GoogleSignInButton
              onClick={signInWithGoogle}
              isLoading={isAuthenticatingGoogle}
              label="Google Sign In"
              className="py-1.5 px-3 text-xs"
            />
          ) : (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Google Connected: {currentUser.email}</span>
            </div>
          )}

          <button
            onClick={resetToDefaults}
            className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer"
            title="Reset sandbox access state to initial demo defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo State</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Authorized Full Access</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{fullAccessCount}</div>
          <div className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Days 1–10 fully unlocked</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Pending Requests</span>
            <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-2xl font-bold text-amber-600 dark:text-amber-300">{pendingRequests.length}</div>
          <div className="mt-1 text-[11px] text-amber-600 dark:text-amber-400 font-medium">Awaiting instructor approval</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Restricted Basic Viewers</span>
            <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{basicCount}</div>
          <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-500">Day 1 capstone brief preview only</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Google Verified</span>
            <div className="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{googleUsersCount}</div>
          <div className="mt-1 text-[11px] text-sky-600 dark:text-sky-400 font-medium">Connected via Google OAuth</div>
        </div>
      </div>

      {feedbackMessage && (
        <div
          className={`p-3.5 rounded-xl border text-xs flex items-center gap-2 animate-in fade-in duration-200 ${
            feedbackMessage.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-200'
              : 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-500/40 text-rose-800 dark:text-rose-200'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>{feedbackMessage.text}</span>
        </div>
      )}

      {/* Main Dual Grid: Manual Grant Form + Pending Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Instant Grant Form */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400 flex items-center justify-center">
              <UserPlus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Manual Grant Access</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Directly authorize a student or colleague email</p>
            </div>
          </div>

          <form onSubmit={handleManualGrant} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Student / Colleague Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="e.g. student.ux@gmail.com"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                disabled={!isAdmin}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                User Full Name / Note (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Jordan Lee (Product Fellow)"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                disabled={!isAdmin}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:opacity-50"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={!isAdmin}
                className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              >
                <UserCheck className="w-4 h-4" />
                Grant Full Presentation Access
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2">
                This grants instantaneous access to all 10 days, 52 slides, and speaker notes.
              </p>
            </div>
          </form>
        </div>

        {/* Right: Pending Access Requests */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Pending Access Requests</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Users requesting full presentation rights</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30">
              {pendingRequests.length} Pending
            </span>
          </div>

          <div className="flex-1 overflow-y-auto max-h-[300px] space-y-3 pr-1">
            {pendingRequests.length === 0 ? (
              <div className="h-44 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center text-center p-4">
                <CheckCircle2 className="w-8 h-8 text-slate-400 dark:text-slate-600 mb-2" />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">No pending access requests</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mt-0.5">
                  When basic users request access while viewing locked presentation slides, their requests will appear here for your 1-click approval.
                </p>
              </div>
            ) : (
              pendingRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 dark:text-white text-xs">{req.name}</span>
                      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">({req.email})</span>
                    </div>
                    {req.reason && (
                      <p className="text-xs text-slate-700 dark:text-slate-300 italic bg-white dark:bg-slate-900/60 p-2 rounded border border-slate-200 dark:border-slate-800/80">
                        "{req.reason}"
                      </p>
                    )}
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      Requested {new Date(req.requestedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {new Date(req.requestedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => approveRequest(req.id)}
                      disabled={!isAdmin}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50 shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Approve
                    </button>
                    <button
                      onClick={() => rejectRequest(req.id)}
                      disabled={!isAdmin}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-rose-100 dark:bg-slate-800 dark:hover:bg-rose-950/60 text-slate-600 hover:text-rose-700 dark:text-slate-400 dark:hover:text-rose-300 font-medium text-xs transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      Decline
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Full Users Directory Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">User Access & Rights Directory</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Authorized accounts with full presentation privileges vs restricted basic viewers
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search user or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Status & Access Tier</th>
                <th className="py-3 px-4">Auth Provider</th>
                <th className="py-3 px-4">Granted Date</th>
                <th className="py-3 px-4">Authorized By</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {filteredUsers.map((u) => {
                const isPrimaryAdmin = u.email.toLowerCase() === PRIMARY_ADMIN_EMAIL.toLowerCase();
                const isCurrent = u.email.toLowerCase() === currentUser.email.toLowerCase();

                return (
                  <tr key={u.email} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        {u.photoURL ? (
                          <img
                            src={u.photoURL}
                            alt={u.name}
                            className="w-7 h-7 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white uppercase ${
                              u.role === 'admin'
                                ? 'bg-purple-600'
                                : u.role === 'full_access'
                                ? 'bg-emerald-600'
                                : 'bg-slate-500 dark:bg-slate-700'
                            }`}
                          >
                            {u.name.slice(0, 1) || u.email.slice(0, 1)}
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                            {u.name}
                            {isCurrent && (
                              <span className="px-1.5 py-0.2 rounded text-[10px] bg-sky-100 dark:bg-sky-500/20 text-sky-800 dark:text-sky-300 font-medium border border-sky-200 dark:border-transparent">
                                You
                              </span>
                            )}
                          </div>
                          <div className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">{u.email}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      {u.role === 'admin' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
                          <ShieldCheck className="w-3 h-3" />
                          {isPrimaryAdmin ? 'Primary Admin' : 'Admin'}
                        </span>
                      ) : u.role === 'full_access' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                          <UserCheck className="w-3 h-3" />
                          Full Presentation Rights
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                          Basic Tier (Day 1 Only)
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      {u.isGoogleAuth ? (
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/30">
                          <Check className="w-3 h-3" />
                          Google OAuth
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">Simulated</span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                      {u.grantedAt ? new Date(u.grantedAt).toLocaleDateString() : '—'}
                    </td>

                    <td className="py-3 px-4 text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                      {u.grantedBy || '—'}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Switch account button for rapid testing */}
                        <button
                          onClick={() => switchUser(u.email, u.name, u.photoURL)}
                          className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
                          title="Preview the site from this user's perspective"
                        >
                          <Eye className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                          Test View
                        </button>

                        {/* Grant or Revoke button */}
                        {u.role === 'basic' ? (
                          <button
                            onClick={() => grantAccess(u.email, u.name)}
                            disabled={!isAdmin}
                            className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors text-[11px] cursor-pointer disabled:opacity-50"
                          >
                            Grant Rights
                          </button>
                        ) : isPrimaryAdmin ? (
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 italic px-2">Primary Admin</span>
                        ) : (
                          <button
                            onClick={() => revokeAccess(u.email)}
                            disabled={!isAdmin}
                            className="px-2 py-1 rounded bg-rose-100 hover:bg-rose-200 dark:bg-rose-950/60 dark:hover:bg-rose-900 border border-rose-200 dark:border-rose-800/60 text-rose-800 dark:text-rose-300 hover:text-rose-950 dark:hover:text-white transition-colors text-[11px] flex items-center gap-1 cursor-pointer disabled:opacity-50"
                          >
                            <UserX className="w-3 h-3" />
                            Revoke
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
