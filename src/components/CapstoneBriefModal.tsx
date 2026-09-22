import React, { useState } from 'react';
import { exportCapstoneBriefToPdf } from '../utils/pdfExport';
import {
  FileText,
  Target,
  AlertTriangle,
  Clock,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Users,
  X,
  FileDown,
  Check
} from 'lucide-react';

interface CapstoneBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToBriefSlide: () => void;
}

export const CapstoneBriefModal: React.FC<CapstoneBriefModalProps> = ({
  isOpen,
  onClose,
  onJumpToBriefSlide
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleExport = () => {
    exportCapstoneBriefToPdf();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Live Client Project Brief
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                EcoTrack: Sustainable Personal Finance
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

        {/* The Brief Details */}
        <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
          <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-slate-950/80 border border-rose-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              The Business Problem
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Gen Z users actively download <strong>EcoTrack</strong> from the App Store, but over <strong>70% abandon the app within 3 days</strong>.
              Qualitative feedback reveals that the existing onboarding questionnaire is perceived as overly complex, rigid, and tedious, with too much manual data entry before any value is delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-slate-950/80 border border-emerald-200 dark:border-emerald-900/40 space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Primary Goal
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Redesign onboarding to increase Day-7 retention by +20%.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Deliver emotional value and immediate feedback within the first 60 seconds.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-slate-950/80 border border-indigo-200 dark:border-indigo-900/40 space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                Sprint Constraints
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                4-Week Engineering Launch Window
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Designs must be developer-ready with accessible WCAG 2.2 specs.
              </p>
            </div>
          </div>

          {/* Squad Roles */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              The Modern Product Trio Squad Roles:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                <p className="font-semibold text-sky-600 dark:text-sky-400">Lead Researcher</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Conducts interviews, JTBD synthesis, and usability testing.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                <p className="font-semibold text-indigo-600 dark:text-indigo-400">Lead Interaction</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Information architecture, wireframes, and clickable prototyping.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                <p className="font-semibold text-purple-600 dark:text-purple-400">Lead Visual & Strategy</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Design systems, microcopy, accessibility audit, and pitch deck.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={handleExport}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/60 dark:hover:bg-sky-900 border border-sky-300 dark:border-sky-500/40 text-sky-800 dark:text-sky-200 transition-colors cursor-pointer flex items-center gap-1.5"
            title="Download formatted offline PDF brief"
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-300" />
                <span>PDF Downloaded!</span>
              </>
            ) : (
              <>
                <FileDown className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Export Offline PDF</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onJumpToBriefSlide();
              }}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              Go to Brief Slide (Day 1, Slide 6)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
