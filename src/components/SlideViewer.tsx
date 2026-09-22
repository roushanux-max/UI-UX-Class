import React, { useState, useEffect, useRef } from 'react';
import { ALL_SLIDES, SPRINT_DAYS } from '../data/presentationData';
import { Slide } from '../types';
import { useAuth, PRIMARY_ADMIN_EMAIL } from '../context/AuthContext';
import { GoogleSignInButton } from './GoogleSignInButton';
import { DayQuizModal } from './DayQuizModal';
import { SlideVisualCard } from './SlideVisualCard';
import { getQuizResultForDay } from '../data/quizData';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Lock,
  Unlock,
  Volume2,
  Sparkles,
  Clock,
  CheckCircle2,
  BookOpen,
  Layers,
  ArrowRight,
  ShieldCheck,
  Compass,
  FileCheck,
  HelpCircle,
  Share2,
  Lightbulb,
  Building,
  Target,
  MapPin,
  TrendingUp,
  X
} from 'lucide-react';

interface SlideViewerProps {
  currentSlideIndex: number;
  onSlideChange: (index: number) => void;
  onRequestAccess: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  currentSlideIndex,
  onSlideChange,
  onRequestAccess
}) => {
  const {
    currentUser,
    isAdmin,
    hasFullAccess,
    switchUser,
    signInWithGoogle,
    isAuthenticatingGoogle
  } = useAuth();
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(true);
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const [selectedDayFilter, setSelectedDayFilter] = useState<number | 'all'>('all');
  const [showSlideDrawer, setShowSlideDrawer] = useState(false);
  const [showExampleModal, setShowExampleModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showCampusGuideModal, setShowCampusGuideModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentSlide: Slide = ALL_SLIDES[currentSlideIndex] || ALL_SLIDES[0];
  const isLocked = !hasFullAccess && !currentSlide.isBasic;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if focus is in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlideIndex < ALL_SLIDES.length - 1) {
          onSlideChange(currentSlideIndex + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlideIndex > 0) {
          onSlideChange(currentSlideIndex - 1);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        setIsCinemaMode((prev) => !prev);
      } else if (e.key === 'n' || e.key === 'N') {
        setShowSpeakerNotes((prev) => !prev);
      } else if (e.key === 'q' || e.key === 'Q') {
        setShowQuizModal((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, onSlideChange]);

  const goToNextSlide = () => {
    if (currentSlideIndex < ALL_SLIDES.length - 1) {
      onSlideChange(currentSlideIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      onSlideChange(currentSlideIndex - 1);
    }
  };

  const handleDaySelect = (dayNum: number) => {
    setSelectedDayFilter(dayNum);
    const targetIdx = ALL_SLIDES.findIndex((s) => s.dayNumber === dayNum);
    if (targetIdx !== -1) {
      onSlideChange(targetIdx);
    }
  };

  const currentDayInfo = SPRINT_DAYS.find((d) => d.dayNumber === currentSlide.dayNumber);
  const isLastSlideOfDay = currentDayInfo ? currentSlide.slideNumberInDay === currentDayInfo.slideCount : false;
  const dayQuizResult = getQuizResultForDay(currentSlide.dayNumber);

  return (
    <div className={`transition-all duration-200 ${isCinemaMode ? 'fixed inset-0 z-50 bg-slate-100 dark:bg-slate-950 p-4 sm:p-8 flex flex-col justify-between' : 'max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-8'}`}>
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        {/* Day Selector Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
          <button
            onClick={() => setSelectedDayFilter('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors shrink-0 cursor-pointer ${
              selectedDayFilter === 'all'
                ? 'bg-sky-600 text-white'
                : 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            All Days (1–10)
          </button>
          {SPRINT_DAYS.map((d) => {
            const isDayLocked = !hasFullAccess && !d.isBasic;
            const isSelected = currentSlide.dayNumber === d.dayNumber;

            return (
              <button
                key={d.dayNumber}
                onClick={() => handleDaySelect(d.dayNumber)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : isDayLocked
                    ? 'bg-slate-100 dark:bg-slate-900/90 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 border border-slate-200 dark:border-slate-800'
                    : 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>Day {d.dayNumber}</span>
                {isDayLocked ? (
                  <Lock className="w-3 h-3 text-amber-500" />
                ) : (
                  d.isBasic && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Basic Access"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Toggles */}
        <div className="flex items-center gap-2">
          {currentDayInfo?.featuredExample && (
            <button
              onClick={() => setShowExampleModal(true)}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 hover:bg-amber-200 dark:hover:bg-amber-500/30 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="View Best Industry Example for this Day"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span className="hidden sm:inline">Best</span> Example
            </button>
          )}

          {currentDayInfo?.featuredTopActivity && (
            <button
              onClick={() => setShowActivityModal(true)}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-100 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40 hover:bg-indigo-200 dark:hover:bg-indigo-500/30 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="View In-Depth Top Activity for this Day"
            >
              <Target className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span className="hidden sm:inline">Top</span> Activity
            </button>
          )}

          {currentDayInfo?.campusTestingGuide && (
            <button
              onClick={() => setShowCampusGuideModal(true)}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 hover:bg-emerald-200 dark:hover:bg-emerald-500/30 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Campus User Testing Guide: Where to find real students"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">Campus</span> Testing
            </button>
          )}

          <button
            onClick={() => setShowSlideDrawer(!showSlideDrawer)}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Toggle Slide Grid"
          >
            <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Thumbnails</span>
          </button>

          {/* Day Knowledge Check Quiz Button */}
          <button
            onClick={() => setShowQuizModal(true)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              dayQuizResult
                ? 'bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/80 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                : 'bg-sky-100 hover:bg-sky-200 dark:bg-sky-950/80 dark:hover:bg-sky-900 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-800'
            }`}
            title={`Take Day ${currentSlide.dayNumber} Knowledge Check Quiz [Q]`}
            id="toolbar-day-quiz-button"
          >
            <HelpCircle className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span className="hidden sm:inline">Day {currentSlide.dayNumber}</span> Quiz
            {dayQuizResult && (
              <span className="text-[10px] font-mono bg-emerald-200 dark:bg-emerald-900/90 text-emerald-900 dark:text-emerald-200 px-1.5 py-0.2 rounded font-bold">
                {dayQuizResult.score}/{dayQuizResult.totalQuestions}
              </span>
            )}
          </button>

          <button
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              showSpeakerNotes
                ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700'
                : 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
            title="Toggle Speaker Notes [N]"
          >
            <Volume2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="hidden sm:inline">Speaker</span> Notes
          </button>

          <button
            onClick={() => setIsCinemaMode(!isCinemaMode)}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Toggle Cinema / Fullscreen [F]"
          >
            {isCinemaMode ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Exit Cinema</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cinema Mode</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Slide Thumbnails Drawer (if toggled) */}
      {showSlideDrawer && (
        <div className="mb-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 max-h-48 overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Slide Jump Index (52 Total Slides)
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">Click any slide to jump</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {ALL_SLIDES.map((s, idx) => {
              const locked = !hasFullAccess && !s.isBasic;
              const active = idx === currentSlideIndex;

              return (
                <button
                  key={s.id}
                  onClick={() => {
                    onSlideChange(idx);
                  }}
                  className={`p-2 rounded-lg text-left transition-all border cursor-pointer ${
                    active
                      ? 'bg-sky-50 dark:bg-sky-950/80 border-sky-500 text-sky-800 dark:text-sky-200 font-semibold'
                      : locked
                      ? 'bg-slate-100 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] mb-1 font-mono">
                    <span>#{s.id}</span>
                    {locked ? (
                      <Lock className="w-2.5 h-2.5 text-amber-500" />
                    ) : (
                      <span className="text-slate-400">D{s.dayNumber}</span>
                    )}
                  </div>
                  <p className="text-[11px] font-medium line-clamp-1 truncate">{s.title}</p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Slide Card Container */}
      <div
        ref={containerRef}
        key={currentSlide.id}
        aria-live="polite"
        className={`relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden flex flex-col justify-between ${
          isCinemaMode ? 'flex-1 my-2' : 'min-h-[680px]'
        }`}
      >
        {/* Slide Header Ribbon */}
        <div className="bg-slate-50 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-400 border border-slate-200 dark:border-slate-700">
              Day {currentSlide.dayNumber}: {currentDayInfo?.phase} Phase
            </span>

            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              {currentSlide.dayTitle}
            </span>

            <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>

            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Slide {currentSlide.slideNumberInDay} of {currentDayInfo?.slideCount} (Overall #{currentSlide.id}/52)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {currentSlide.isBasic ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                <CheckCircle2 className="w-3 h-3" />
                Basic Course View
              </span>
            ) : hasFullAccess ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                <Unlock className="w-3 h-3" />
                Full Access Unlocked
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30">
                <Lock className="w-3 h-3" />
                Full Access Required
              </span>
            )}

            <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {currentSlide.category}
            </span>
          </div>
        </div>

        {/* Slide Main Body Area */}
        <div className="p-6 sm:p-12 lg:p-16 flex-1 flex flex-col justify-center">
          {isLocked ? (
            /* Locked Content Gate Screen */
            <div className="max-w-xl mx-auto text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-500 dark:text-amber-400 shadow-lg shadow-amber-500/10">
                <Lock className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Full Presentation Access Required
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Day {currentSlide.dayNumber}: {currentSlide.dayTitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  You are currently browsing on the <strong>Basic Access Tier</strong> (which includes Day 1 Introduction & Capstone Brief).
                  To explore Days 2 through 10 (including User Research, JTBD, Crazy 8s, Figma Auto Layout, Usability Testing, and Stakeholder Handoff), rights must be granted by the course administrator.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 text-left space-y-2">
                <div className="flex items-center gap-2 font-medium text-slate-900 dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                  <span>Admin Authority:</span>
                  <span className="font-mono text-amber-600 dark:text-amber-300">{PRIMARY_ADMIN_EMAIL}</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400">
                  The designated administrator can authorize your email to view all 52 presentation slides, interactive activities, and deliverables.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                {!currentUser.isGoogleAuth && (
                  <GoogleSignInButton
                    onClick={signInWithGoogle}
                    isLoading={isAuthenticatingGoogle}
                    label="Sign in with Google"
                    className="w-full sm:w-auto px-4 py-2.5 text-sm"
                  />
                )}

                <button
                  onClick={onRequestAccess}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Request Full Access
                </button>

                <button
                  onClick={() => switchUser(PRIMARY_ADMIN_EMAIL, 'Roushan UX (Primary Admin)')}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/60 dark:hover:bg-purple-800 border border-purple-300 dark:border-purple-600/40 text-purple-900 dark:text-purple-200 font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  title="Test viewing this slide as the primary admin"
                >
                  <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  Evaluate as Admin
                </button>

                <button
                  onClick={() => onSlideChange(0)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors cursor-pointer"
                >
                  Back to Day 1 (Basic)
                </button>
              </div>
            </div>
          ) : (
            /* Unlocked Slide Content */
            <div className="space-y-8 max-w-6xl mx-auto w-full animate-in fade-in duration-200">
              {/* Slide Heading */}
              <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  {currentSlide.title}
                </h2>
                {currentSlide.subtitle && (
                  <p className="text-lg sm:text-2xl font-medium text-sky-600 dark:text-sky-300">
                    {currentSlide.subtitle}
                  </p>
                )}
              </div>

              {currentSlide.visual && (
                <section
                  className="order-first space-y-4"
                  aria-labelledby={`visual-study-heading-${currentSlide.id}`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                    <h3
                      id={`visual-study-heading-${currentSlide.id}`}
                      className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                    >
                      Look at this visual first
                    </h3>
                  </div>
                  <SlideVisualCard
                    visual={currentSlide.visual}
                    slideTitle={currentSlide.title}
                  />
                  {currentSlide.secondaryVisual && (
                    <SlideVisualCard
                      visual={currentSlide.secondaryVisual}
                      slideTitle={currentSlide.title}
                    />
                  )}
                </section>
              )}

              {/* Bullet Points */}
              <div className="space-y-5">
                {currentSlide.contentPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <div className="mt-3 h-3 w-3 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400"></div>
                    <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Activity Details (if category === 'activity') */}
              {currentSlide.activityTasks && currentSlide.activityTasks.length > 0 && (
                <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-slate-950/90 border border-indigo-200 dark:border-indigo-900/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                      <Compass className="w-4 h-4" />
                      Classroom Activity Instructions
                    </div>
                    {currentSlide.duration && (
                      <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        {currentSlide.duration}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {currentSlide.activityTasks.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-950 border border-indigo-300 dark:border-indigo-700 flex items-center justify-center text-[10px] text-indigo-700 dark:text-indigo-300 font-mono font-semibold">
                          {tIdx + 1}
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Homework Tasks (if category === 'deliverables') */}
              {currentSlide.homeworkTasks && currentSlide.homeworkTasks.length > 0 && (
                <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-slate-950/90 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    <FileCheck className="w-4 h-4" />
                    Homework & Sprint Deliverable Checklist
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {currentSlide.homeworkTasks.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Takeaway Banner */}
              {currentSlide.keyTakeaway && (
                <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/40 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 block">
                      Core Design Principle
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 italic font-medium">
                      "{currentSlide.keyTakeaway}"
                    </p>
                  </div>
                </div>
              )}

              {/* In-Slide Real World Case Study Box (if available for this slide or day) */}
              {(currentSlide.realWorldExample || currentDayInfo?.featuredExample) && (
                <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 space-y-3">
                  {(() => {
                    const ex = currentSlide.realWorldExample || currentDayInfo?.featuredExample!;
                    return (
                      <>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                            <Lightbulb className="w-4 h-4" />
                            Best Real-World Example: {ex.companyOrProduct}
                          </div>
                          <span className="text-[11px] font-mono text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800 font-semibold">
                            {ex.context}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-900 dark:text-slate-200 leading-relaxed font-semibold">
                          {ex.title}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs">
                          <div className="p-3 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-1">
                            <span className="font-semibold text-rose-600 dark:text-rose-400 text-[11px] uppercase tracking-wider block">
                              What Went Wrong / The Challenge:
                            </span>
                            <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                              {ex.problem}
                            </p>
                          </div>
                          <div className="p-3 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-1">
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-[11px] uppercase tracking-wider block">
                              The UX Intervention:
                            </span>
                            <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                              {ex.uxSolution}
                            </p>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-amber-100/70 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
                          <span>
                            <strong>Measurable Impact:</strong> {ex.impactOrMetric}
                          </span>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

              {/* In-Slide Top Activity Guide (if activity category or button toggle) */}
              {(currentSlide.topActivity || (currentSlide.category === 'activity' && currentDayInfo?.featuredTopActivity)) && (
                <div className="p-5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/40 space-y-3">
                  {(() => {
                    const act = currentSlide.topActivity || currentDayInfo?.featuredTopActivity!;
                    return (
                      <>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-400">
                            <Target className="w-4 h-4" />
                            Top Hands-On Activity: {act.title}
                          </div>
                          <span className="text-[11px] font-mono text-indigo-800 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-950 px-2 py-0.5 rounded border border-indigo-300 dark:border-indigo-800 flex items-center gap-1 font-semibold">
                            <Clock className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                            {act.durationMinutes} mins • {act.format}
                          </span>
                        </div>

                        <p className="text-xs text-slate-700 dark:text-slate-300">
                          <strong>Objective:</strong> {act.objective}
                        </p>

                        <div className="space-y-2 text-xs">
                          <span className="font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider text-[11px] block">
                            Step-by-Step Instructions:
                          </span>
                          <div className="space-y-1.5">
                            {act.steps.map((s, idx) => (
                              <div key={idx} className="p-2.5 rounded-lg bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 space-y-1">
                                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-xs">
                                  <span className="w-5 h-5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-700/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-mono text-[10px] shrink-0 font-semibold">
                                    {s.stepNumber}
                                  </span>
                                  <span>{s.title}</span>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 text-xs pl-7">{s.instructions}</p>
                                {s.proTip && (
                                  <p className="text-[11px] text-amber-600 dark:text-amber-300 italic pl-7">Pro-Tip: {s.proTip}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                            <strong className="text-indigo-700 dark:text-indigo-300 text-[11px] block mb-0.5">Recommended Tools:</strong>
                            {act.templatesAndTools.join(', ')}
                          </div>
                          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                            <strong className="text-indigo-700 dark:text-indigo-300 text-[11px] block mb-0.5">Final Deliverable:</strong>
                            {act.deliverableOutput}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

              {/* In-Slide College Campus Testing Fieldwork Guide */}
              {currentDayInfo?.campusTestingGuide && (
                <div className="p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      <MapPin className="w-4 h-4" />
                      Day {currentDayInfo.dayNumber} Campus Fieldwork: Where to Test In & Around College
                    </div>
                    <span className="text-[11px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800 font-semibold">
                      {currentDayInfo.campusTestingGuide.targetUserGroup}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                    {currentDayInfo.campusTestingGuide.collegeLocations.map((loc, lIdx) => (
                      <div key={lIdx} className="p-2.5 rounded-xl bg-white dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 space-y-1">
                        <div className="font-bold text-emerald-700 dark:text-emerald-300 text-[11px] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span>{loc.spot}</span>
                        </div>
                        <p className="text-[11px] text-slate-700 dark:text-slate-300">{loc.whyThisLocation}</p>
                        <p className="text-[10px] text-amber-600 dark:text-amber-300 italic pt-0.5">Approach: {loc.approachScript}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
                      Ethics & Incentives:
                    </span>
                    <p className="text-slate-700 dark:text-slate-200 text-xs">
                      {currentDayInfo.campusTestingGuide.ethicsAndIncentives}
                    </p>
                  </div>
                </div>
              )}

              {/* End-of-Day Knowledge Check Card (displayed on the last slide of each sprint day) */}
              {isLastSlideOfDay && (
                <div
                  className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-sky-50 via-indigo-50/70 to-purple-50 dark:from-sky-950/40 dark:via-slate-900 dark:to-indigo-950/40 border-2 border-sky-300 dark:border-sky-500/50 shadow-lg space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-200"
                  id={`end-of-day-${currentSlide.dayNumber}-quiz-card`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500/20 dark:bg-sky-500/30 border border-sky-400 dark:border-sky-500 flex items-center justify-center text-sky-600 dark:text-sky-300 shrink-0">
                        <HelpCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-sky-200 dark:bg-sky-900/80 text-sky-900 dark:text-sky-200 border border-sky-300 dark:border-sky-700">
                            Day {currentSlide.dayNumber} Knowledge Check
                          </span>
                          {dayQuizResult ? (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 flex items-center gap-1 font-mono">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                              Score: {dayQuizResult.score}/{dayQuizResult.totalQuestions} ({Math.round((dayQuizResult.score / dayQuizResult.totalQuestions) * 100)}%)
                            </span>
                          ) : (
                            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                              4 Scenario Questions
                            </span>
                          )}
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-1">
                          Day {currentSlide.dayNumber} Wrap-Up: What Have You Learned?
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                          Test your grasp of today's key UX principles, frameworks, and real-world scenario decisions. Instant explanations provided for every question!
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowQuizModal(true)}
                      className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30 hover:shadow-sky-600/40 transition-all cursor-pointer shrink-0"
                      id={`start-day-${currentSlide.dayNumber}-quiz-btn`}
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{dayQuizResult ? 'Retake / Review Quiz' : 'Take Day Knowledge Check'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal: Best Example View */}
        {showExampleModal && currentDayInfo?.featuredExample && (
          <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => setShowExampleModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30">
                  <Lightbulb className="w-3.5 h-3.5" />
                  Day {currentDayInfo.dayNumber} Featured Best Example
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {currentDayInfo.featuredExample.companyOrProduct}
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-300 font-mono">
                  {currentDayInfo.featuredExample.title} • {currentDayInfo.featuredExample.context}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-rose-200 dark:border-rose-900/40 space-y-1.5">
                  <span className="font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider text-[11px] block">
                    The Problem & Friction:
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentDayInfo.featuredExample.problem}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-emerald-200 dark:border-emerald-900/40 space-y-1.5">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[11px] block">
                    The UX Solution:
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentDayInfo.featuredExample.uxSolution}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-100/70 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-xs text-amber-900 dark:text-amber-200 flex items-center gap-2.5">
                <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                <div>
                  <strong className="block text-amber-800 dark:text-amber-300">Measurable Impact:</strong>
                  {currentDayInfo.featuredExample.impactOrMetric}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                <strong className="text-sky-600 dark:text-sky-300 block mb-1">Key Takeaway for Students:</strong>
                {currentDayInfo.featuredExample.takeaway}
              </div>

              <button
                onClick={() => setShowExampleModal(false)}
                className="w-full py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        )}

        {/* Modal: Top Activity View */}
        {showActivityModal && currentDayInfo?.featuredTopActivity && (
          <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowActivityModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/30">
                  <Target className="w-3.5 h-3.5" />
                  Day {currentDayInfo.dayNumber} Classroom Activity • {currentDayInfo.featuredTopActivity.durationMinutes} mins
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {currentDayInfo.featuredTopActivity.title}
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-300 font-medium">
                  {currentDayInfo.featuredTopActivity.tagline}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  <strong>Objective:</strong> {currentDayInfo.featuredTopActivity.objective}
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px] block">
                  Detailed Step-by-Step Instructions:
                </span>
                <div className="space-y-2">
                  {currentDayInfo.featuredTopActivity.steps.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-xs">
                        <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950 border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-mono text-xs shrink-0 font-semibold">
                          {step.stepNumber}
                        </span>
                        <span>{step.title}</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-200 text-xs leading-relaxed pl-8">{step.instructions}</p>
                      {step.proTip && (
                        <p className="text-[11px] text-amber-600 dark:text-amber-300 italic pl-8">Pro-Tip: {step.proTip}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 space-y-1">
                  <strong className="text-indigo-600 dark:text-indigo-400 block uppercase tracking-wider text-[10px]">Tools Needed:</strong>
                  <p>{currentDayInfo.featuredTopActivity.templatesAndTools.join(', ')}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 space-y-1">
                  <strong className="text-indigo-600 dark:text-indigo-400 block uppercase tracking-wider text-[10px]">Student Deliverable:</strong>
                  <p>{currentDayInfo.featuredTopActivity.deliverableOutput}</p>
                </div>
              </div>

              <button
                onClick={() => setShowActivityModal(false)}
                className="w-full py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Close Activity Guide
              </button>
            </div>
          </div>
        )}

        {/* Modal: Campus Testing Guide View */}
        {showCampusGuideModal && currentDayInfo?.campusTestingGuide && (
          <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => setShowCampusGuideModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                  <MapPin className="w-3.5 h-3.5" />
                  Day {currentDayInfo.dayNumber} Campus Fieldwork Blueprint
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Finding Users to Test In & Around College Area
                </h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-300">
                  Target Group: {currentDayInfo.campusTestingGuide.targetUserGroup}
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px] block">
                  Recommended Campus Intercept Locations:
                </span>
                <div className="space-y-2">
                  {currentDayInfo.campusTestingGuide.collegeLocations.map((loc, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-slate-900 dark:text-white text-xs flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          {loc.spot}
                        </strong>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-xs">{loc.whyThisLocation}</p>
                      <p className="text-[11px] text-amber-600 dark:text-amber-300 italic pt-0.5">Approach: {loc.approachScript}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
                  Ethics & Student Incentives:
                </span>
                <p className="text-slate-600 dark:text-slate-300 text-xs">{currentDayInfo.campusTestingGuide.ethicsAndIncentives}</p>
              </div>

              <button
                onClick={() => setShowCampusGuideModal(false)}
                className="w-full py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Close Fieldwork Guide
              </button>
            </div>
          </div>
        )}

        {/* Modal: Interactive Day Knowledge Check Quiz */}
        <DayQuizModal
          isOpen={showQuizModal}
          dayNumber={currentSlide.dayNumber}
          onClose={() => setShowQuizModal(false)}
          onProceedToNextDay={(nextDayNum) => handleDaySelect(nextDayNum)}
        />

        {/* Collapsible Authentic Speaker Notes Box */}
        {showSpeakerNotes && !isLocked && (
          <div className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 px-6 py-3.5 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3 animate-in slide-in-from-bottom-2 duration-150">
            <Volume2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5 flex-1">
              <span className="font-semibold text-indigo-700 dark:text-indigo-300 text-[11px] uppercase tracking-wider">
                Speaker Notes (Instructor Script):
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {currentSlide.speakerNotes}
              </p>
            </div>
          </div>
        )}

        {/* Slide Navigation Footer & Progress Bar */}
        <div className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevSlide}
              disabled={currentSlideIndex === 0}
              className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Previous Slide (Left Arrow)"
              id="slide-prev-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNextSlide}
              disabled={currentSlideIndex === ALL_SLIDES.length - 1}
              className="p-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center gap-1 shadow-md shadow-sky-600/20"
              title="Next Slide (Right Arrow or Space)"
              id="slide-next-btn"
            >
              <span className="text-xs font-semibold hidden sm:inline">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Tracker */}
          <div className="flex-1 max-w-md mx-4 hidden sm:block">
            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1 font-mono">
              <span>Progress</span>
              <span>{Math.round(((currentSlideIndex + 1) / ALL_SLIDES.length) * 100)}% ({currentSlideIndex + 1}/52)</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full transition-all duration-200"
                style={{ width: `${((currentSlideIndex + 1) / ALL_SLIDES.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
            Slide {currentSlideIndex + 1} / {ALL_SLIDES.length}
          </div>
        </div>
      </div>
    </div>
  );
};
