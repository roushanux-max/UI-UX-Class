import React, { useState } from 'react';
import { SPRINT_DAYS } from '../data/presentationData';
import { useAuth } from '../context/AuthContext';
import { DayQuizModal } from './DayQuizModal';
import { getStoredQuizResults } from '../data/quizData';
import {
  Lock,
  Unlock,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  FileCheck,
  HelpCircle
} from 'lucide-react';

interface CourseRoadmapProps {
  onSelectDay: (dayNumber: number) => void;
  onRequestAccess: () => void;
}

export const CourseRoadmap: React.FC<CourseRoadmapProps> = ({
  onSelectDay,
  onRequestAccess
}) => {
  const { hasFullAccess, isAdmin } = useAuth();
  const [activeQuizDay, setActiveQuizDay] = useState<number | null>(null);
  const storedResults = getStoredQuizResults();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Roadmap Intro */}
      <div className="mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-500/10 border border-sky-300 dark:border-sky-500/30 text-sky-800 dark:text-sky-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          The 10-Day Double Diamond Curriculum
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          UX Design Sprint: From Brief to Handoff
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Over the 10 days, students operate as a high-performance product design squad tackling the live{' '}
          <strong className="text-emerald-700 dark:text-emerald-300">"EcoTrack"</strong> client brief.
          Day 1 is accessible to all viewers on the <strong>Basic Tier</strong>.
          Days 2–10 contain the full methodology, active team exercises, and deliverables unlocked by admin authorization.
        </p>
      </div>

      {/* Double Diamond Phases Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8 text-center text-xs">
        <div className="bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-500/30 rounded-xl p-3 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-sky-600 dark:text-sky-400">Phase 1</span>
          <p className="font-semibold text-slate-900 dark:text-white mt-0.5">Discover</p>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">Days 1–2 • Diverge</span>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-500/30 rounded-xl p-3 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400">Phase 2</span>
          <p className="font-semibold text-slate-900 dark:text-white mt-0.5">Define</p>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">Day 3 • Converge</span>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-500/30 rounded-xl p-3 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-purple-600 dark:text-purple-400">Phase 3</span>
          <p className="font-semibold text-slate-900 dark:text-white mt-0.5">Develop</p>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">Days 4–6 • Diverge</span>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-500/30 rounded-xl p-3 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">Phase 4</span>
          <p className="font-semibold text-slate-900 dark:text-white mt-0.5">Deliver</p>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">Days 7–8 • Converge</span>
        </div>
        <div className="col-span-2 md:col-span-1 bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-500/30 rounded-xl p-3 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400">Phase 5</span>
          <p className="font-semibold text-slate-900 dark:text-white mt-0.5">Handoff & Pitch</p>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">Days 9–10 • Ship</span>
        </div>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SPRINT_DAYS.map((day) => {
          const isLocked = !hasFullAccess && !day.isBasic;

          return (
            <div
              key={day.dayNumber}
              className={`rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                isLocked
                  ? 'bg-slate-50/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-sky-500/50 shadow-sm dark:shadow-md'
              }`}
            >
              <div>
                {/* Header: Day number & Access Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-400 border border-slate-200 dark:border-slate-700">
                      DAY {day.dayNumber}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {day.phase} Phase
                    </span>
                  </div>

                  {day.isBasic ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Basic Access (All)
                    </span>
                  ) : hasFullAccess ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                      <Unlock className="w-3.5 h-3.5" />
                      Full Access
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30">
                      <Lock className="w-3.5 h-3.5" />
                      Full Access Required
                    </span>
                  )}
                </div>

                {/* Day Titles */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {day.title}
                </h3>
                <p className="text-xs font-medium text-sky-600 dark:text-sky-300/90 mb-3">
                  "{day.subtitle}"
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {day.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="bg-slate-50 dark:bg-slate-950/70 rounded-xl p-3 border border-slate-200 dark:border-slate-800/80 mb-4 space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    Key Sprint Deliverables:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {day.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-sky-500 dark:text-sky-400 shrink-0">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rich Pedagogical Highlights */}
                {(day.featuredExample || day.featuredTopActivity) && (
                  <div className="mb-4 space-y-1.5 text-xs">
                    {day.featuredExample && (
                      <div className="px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/30 text-amber-900 dark:text-amber-200 flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                          ★ Best Example:
                        </span>
                        <span className="truncate max-w-[220px] text-slate-700 dark:text-slate-300">
                          {day.featuredExample.companyOrProduct}
                        </span>
                      </div>
                    )}
                    {day.featuredTopActivity && (
                      <div className="px-2.5 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/30 text-indigo-900 dark:text-indigo-200 flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-indigo-700 dark:text-indigo-400 flex items-center gap-1">
                          ⚡ Top Activity:
                        </span>
                        <span className="truncate max-w-[220px] text-slate-700 dark:text-slate-300">
                          {day.featuredTopActivity.title} ({day.featuredTopActivity.durationMinutes} mins)
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Footer */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <span className="text-xs text-slate-500 font-mono">
                  {day.slideCount} slides
                </span>

                <div className="flex items-center gap-1.5">
                  {(!isLocked || day.isBasic) && (
                    <button
                      onClick={() => setActiveQuizDay(day.dayNumber)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                        storedResults[day.dayNumber]
                          ? 'bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300'
                          : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                      id={`roadmap-day-${day.dayNumber}-quiz-btn`}
                      title={`Take Day ${day.dayNumber} Knowledge Check Quiz`}
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>Quiz</span>
                      {storedResults[day.dayNumber] && (
                        <span className="font-mono font-bold text-[10px] ml-0.5 text-emerald-700 dark:text-emerald-300">
                          {storedResults[day.dayNumber].score}/{storedResults[day.dayNumber].totalQuestions}
                        </span>
                      )}
                    </button>
                  )}

                  {isLocked ? (
                    <button
                      onClick={onRequestAccess}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-100 hover:bg-amber-200 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Lock className="w-3 h-3" />
                      Request Access
                    </button>
                  ) : (
                    <button
                      onClick={() => onSelectDay(day.dayNumber)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
                    >
                      <span>Slides</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Day Quiz Modal */}
      {activeQuizDay !== null && (
        <DayQuizModal
          isOpen={activeQuizDay !== null}
          dayNumber={activeQuizDay}
          onClose={() => setActiveQuizDay(null)}
          onProceedToNextDay={(nextDay) => {
            setActiveQuizDay(null);
            onSelectDay(nextDay);
          }}
        />
      )}
    </div>
  );
};
