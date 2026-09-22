import React, { useState } from 'react';
import { AuthProvider, useAuth, PRIMARY_ADMIN_EMAIL } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { SlideViewer } from './components/SlideViewer';
import { CourseRoadmap } from './components/CourseRoadmap';
import { AdminConsole } from './components/AdminConsole';
import { CapstoneBriefModal } from './components/CapstoneBriefModal';
import { RequestAccessModal } from './components/RequestAccessModal';
import { BriefGenerator } from './components/BriefGenerator';
import { ALL_SLIDES } from './data/presentationData';
import { GeneratedProjectBrief } from './types';
import { exportBriefToPdf, exportCapstoneBriefToPdf } from './utils/pdfExport';
import {
  ShieldCheck,
  Sparkles,
  Presentation,
  MapPin,
  FileText,
  Lock,
  Unlock,
  CheckCircle2,
  ExternalLink,
  Target,
  AlertTriangle,
  Clock,
  Users,
  FileDown,
  Check
} from 'lucide-react';

function AppContent() {
  const { currentUser, isAdmin, hasFullAccess } = useAuth();
  const [currentTab, setCurrentTab] = useState<'presentation' | 'roadmap' | 'brief' | 'brief_generator' | 'admin'>('presentation');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [activeSprintBrief, setActiveSprintBrief] = useState<GeneratedProjectBrief | null>(null);
  const [capstonePdfDownloaded, setCapstonePdfDownloaded] = useState(false);
  const [activeBriefPdfDownloaded, setActiveBriefPdfDownloaded] = useState(false);

  const handleExportCapstonePdf = () => {
    exportCapstoneBriefToPdf();
    setCapstonePdfDownloaded(true);
    setTimeout(() => setCapstonePdfDownloaded(false), 3000);
  };

  const handleExportActiveSprintBriefPdf = () => {
    if (!activeSprintBrief) return;
    exportBriefToPdf(activeSprintBrief);
    setActiveBriefPdfDownloaded(true);
    setTimeout(() => setActiveBriefPdfDownloaded(false), 3000);
  };

  const handleSelectDay = (dayNum: number) => {
    const targetIdx = ALL_SLIDES.findIndex((s) => s.dayNumber === dayNum);
    if (targetIdx !== -1) {
      setCurrentSlideIndex(targetIdx);
      setCurrentTab('presentation');
    }
  };

  const handleJumpToBriefSlide = () => {
    // Day 1 Slide 6 is the Capstone Brief reveal (index 5)
    setCurrentSlideIndex(5);
    setCurrentTab('presentation');
  };

  const handleSelectBriefFromGenerator = (brief: GeneratedProjectBrief) => {
    setActiveSprintBrief(brief);
    // Jump straight to Day 1 kickoff / brief discussion
    setCurrentSlideIndex(5);
    setCurrentTab('presentation');
  };

  const handleJumpToDay2Research = () => {
    // Day 2 Slide 1 is index 7
    const day2Idx = ALL_SLIDES.findIndex((s) => s.dayNumber === 2);
    if (day2Idx !== -1) {
      setCurrentSlideIndex(day2Idx);
      setCurrentTab('presentation');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onRequestAccess={() => setIsRequestModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentTab === 'presentation' && (
          <SlideViewer
            currentSlideIndex={currentSlideIndex}
            onSlideChange={setCurrentSlideIndex}
            onRequestAccess={() => setIsRequestModalOpen(true)}
          />
        )}

        {currentTab === 'roadmap' && (
          <CourseRoadmap
            onSelectDay={handleSelectDay}
            onRequestAccess={() => setIsRequestModalOpen(true)}
          />
        )}

        {currentTab === 'brief' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            {activeSprintBrief && (
              <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/40 flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{activeSprintBrief.emoji}</span>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 tracking-wider block">
                      Active Customized Sprint Challenge:
                    </span>
                    <strong className="text-slate-900 dark:text-white text-sm">{activeSprintBrief.title}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportActiveSprintBriefPdf}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-100 dark:bg-sky-900/60 hover:bg-sky-200 dark:hover:bg-sky-800 border border-sky-300 dark:border-sky-500/40 text-sky-700 dark:text-sky-200 cursor-pointer flex items-center gap-1.5"
                    title="Export active sprint brief to PDF"
                  >
                    {activeBriefPdfDownloaded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-300" />
                        <span>Downloaded!</span>
                      </>
                    ) : (
                      <>
                        <FileDown className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                        <span>Export PDF</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setCurrentTab('brief_generator')}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer shadow-sm"
                  >
                    Change Brief
                  </button>
                </div>
              </div>
            )}
            <div className="bg-gradient-to-br from-emerald-50 via-white to-indigo-50 dark:from-emerald-950/50 dark:via-slate-900 dark:to-indigo-950/50 border border-emerald-200 dark:border-emerald-800/40 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                    <Target className="w-3.5 h-3.5" />
                    Capstone Project Brief • 10-Day Sprint Challenge
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Client: "EcoTrack" (Sustainable Finance)
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Presented on Day 1: Introduction & The Product Brief
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleExportCapstonePdf}
                    className="px-3.5 py-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/60 hover:bg-sky-200 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-500/40 text-sky-800 dark:text-sky-200 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    title="Export EcoTrack Brief to PDF for offline student use"
                  >
                    {capstonePdfDownloaded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-300" />
                        <span>PDF Saved!</span>
                      </>
                    ) : (
                      <>
                        <FileDown className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                        <span>Export Offline PDF</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleJumpToBriefSlide}
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                  >
                    <Presentation className="w-4 h-4" />
                    View in Slide Deck
                  </button>
                </div>
              </div>

              {/* Problem & Goal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 dark:bg-slate-950/80 border border-rose-200 dark:border-rose-900/40 rounded-2xl p-6 space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    The Problem
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Gen Z Users Drop Off After 3 Days
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Gen Z users are eager to align personal finances with carbon reduction and actively download EcoTrack.
                    However, over 70% abandon the app after 3 days. User research points to an onboarding experience that is too long, asks for invasive data too early, and fails to demonstrate instant personal value.
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-slate-950/80 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl p-6 space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <Target className="w-4 h-4" />
                    The Sprint Goal
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Increase Day-7 Retention by +20%
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Redesign the complete mobile onboarding flow and initial habit-formation hook.
                    Provide immediate emotional reward within the first 60 seconds of install, creating sustainable user engagement.
                  </p>
                </div>
              </div>

              {/* Constraints & Team Structure */}
              <div className="bg-white/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  Engineering & Design Constraints
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Mobile-First Architecture</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Optimized for iOS and Android touch ergonomics, adhering strictly to 44x44px minimum tap targets.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">WCAG 2.2 AA Compliance</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Color contrast must pass 4.5:1 for body copy with accessible font hierarchies and screen reader tags.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">4-Week Engineering Launch</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Handoff specifications in Figma Dev Mode must be modular, componentized, and feasible for quick deployment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Squad Formation */}
              <div className="bg-white/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  Class Squad Roles
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-sky-600 dark:text-sky-400">Lead Researcher</p>
                    <p className="text-slate-700 dark:text-slate-300">Days 1–3 Focus</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                      Conducts user interviews, leads sticky-note affinity mapping, and drafts prioritized HMW questions.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-indigo-600 dark:text-indigo-400">Lead Interaction</p>
                    <p className="text-slate-700 dark:text-slate-300">Days 4–6 Focus</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                      Maps user journey drop-offs, executes Crazy 8s sketching, and builds the clickable Figma prototype.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-purple-600 dark:text-purple-400">Lead Visual & Strategy</p>
                    <p className="text-slate-700 dark:text-slate-300">Days 7–10 Focus</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                      Enforces WCAG contrast, authors engineering handoff specs, and delivers the 5-minute stakeholder pitch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'brief_generator' && (
          <BriefGenerator
            onSelectBriefForSprint={handleSelectBriefFromGenerator}
            onJumpToDay2Research={handleJumpToDay2Research}
          />
        )}

        {currentTab === 'admin' && <AdminConsole />}
      </main>

      {/* Persistent Bottom Bar with Access Status */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 px-4 py-4 text-xs text-slate-600 dark:text-slate-400 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-semibold text-slate-800 dark:text-slate-300">UI UX Class Presentation Website</span>
            <span className="mx-2 text-slate-400 dark:text-slate-600">•</span>
            <span>10-Day Sprint Curriculum: From Brief to Handoff</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-500 dark:text-slate-400">
              Admin: <strong className="text-amber-600 dark:text-amber-300 font-mono">{PRIMARY_ADMIN_EMAIL}</strong>
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <button
              onClick={() => setCurrentTab('admin')}
              className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-medium underline underline-offset-2 transition-colors cursor-pointer"
            >
              Access Rights Console
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <CapstoneBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
        onJumpToBriefSlide={handleJumpToBriefSlide}
      />

      <RequestAccessModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
