import React, { useState } from 'react';
import { SlideVisual } from '../types';
import {
  Maximize2,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  X,
  Sparkles,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Compass,
  Bookmark
} from 'lucide-react';

interface SlideVisualCardProps {
  visual: SlideVisual;
  slideTitle?: string;
}

const SOURCE_LINKS: Record<string, string> = {
  'Nielsen Norman Group (NN/g)': 'https://www.nngroup.com/articles/',
  'Interaction Design Foundation (IxDF)': 'https://www.interaction-design.org/literature',
  'Google Ventures (GV) Design Sprint': 'https://www.gv.com/sprint/',
  'British Design Council': 'https://www.designcouncil.org.uk/our-resources/framework-for-innovation/',
  'W3C / WCAG 2.2': 'https://www.w3.org/WAI/standards-guidelines/wcag/',
  'Figma Dev Mode Architecture': 'https://help.figma.com/hc/en-us/categories/360002051613-Dev-Mode',
  'Google Material Design & Apple HIG': 'https://m3.material.io/foundations',
  'Apple Human Interface Guidelines / Material Design': 'https://developer.apple.com/design/human-interface-guidelines/',
  'Agile Alliance / Atlassian Agile Coach': 'https://www.atlassian.com/agile',
  'Lean UX / Jeff Gothelf & Josh Seiden': 'https://www.leanuxbook.com/'
};

const getSourceLink = (source: string) =>
  Object.entries(SOURCE_LINKS).find(([label]) => source.includes(label))?.[1];

const getStudyPrompt = (diagramType?: SlideVisual['diagramType']) => {
  switch (diagramType) {
    case 'framework':
      return 'Trace the framework from left to right, then explain where your capstone team is currently working.';
    case 'process':
      return 'Follow each step in order and identify the input, decision, and output at every stage.';
    case 'matrix':
      return 'Read both axes first, then place one EcoTrack assumption or idea in the most honest quadrant.';
    case 'heuristic':
      return 'Turn the principle into a design review question you can ask about your own prototype.';
    case 'comparison':
      return 'Compare the two states and name the single change that most improves clarity or confidence.';
    case 'case_study':
      return 'Connect the problem, intervention, and outcome; avoid copying the solution without its context.';
    default:
      return 'Describe what you notice, why it matters to users, and where you could apply it in your project.';
  }
};

export const SlideVisualCard: React.FC<SlideVisualCardProps> = ({
  visual,
  slideTitle
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const sourceLink = getSourceLink(visual.source);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  return (
    <>
      <div
        className="rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-md overflow-hidden flex flex-col group transition-all duration-200 hover:border-sky-300 dark:hover:border-sky-500/50"
        id="slide-visual-card"
      >
        {/* Visual Header / Source attribution badge */}
        <div className="px-4 py-2.5 bg-slate-50/90 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              <BookOpen className="w-3 h-3 text-sky-600 dark:text-sky-400" />
              {visual.source}
            </span>
            {visual.badge && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                <Bookmark className="w-2.5 h-2.5" />
                {visual.badge}
              </span>
            )}
          </div>

          <button
            onClick={() => {
              setZoomLevel(1);
              setIsLightboxOpen(true);
            }}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-200/60 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="Inspect diagram in high-resolution lightbox"
            id="expand-diagram-button"
          >
            <Maximize2 className="w-3 h-3" />
            <span className="hidden sm:inline">Inspect</span>
          </button>
        </div>

        {/* Visual Image Display with Hover Overlay */}
        <div
          className="relative aspect-video sm:aspect-[16/8] bg-slate-100 dark:bg-slate-950 overflow-hidden cursor-pointer"
          onClick={() => {
            setZoomLevel(1);
            setIsLightboxOpen(true);
          }}
        >
          <img
            src={visual.url}
            alt={visual.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex items-center gap-2 text-white text-xs font-semibold drop-shadow-md">
              <Maximize2 className="w-4 h-4 text-sky-400" />
              <span>Click to enlarge diagram & study key concepts</span>
            </div>
          </div>
        </div>

        {/* Diagram Context & Insights Section */}
        <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between bg-white dark:bg-slate-900">
          <div className="space-y-2">
            {visual.sourceArticle && (
              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 italic flex items-center gap-1.5 leading-snug">
                <Compass className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span className="truncate">Reference: {visual.sourceArticle}</span>
              </p>
            )}

            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {visual.caption}
            </p>

            <div className="rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/60 p-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-sky-700 dark:text-sky-400">
                How to study it
              </span>
              <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {getStudyPrompt(visual.diagramType)}
              </p>
            </div>
          </div>

          {/* Key Insights List */}
          {visual.keyInsights && visual.keyInsights.length > 0 && (
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block">
                Key Methodological Insights:
              </span>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                {visual.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-sky-700 dark:text-sky-300 hover:underline"
            >
              Explore {visual.source} resources
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* High-Resolution Diagram Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          id="diagram-lightbox-modal"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl max-w-5xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
            {/* Lightbox Header */}
            <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50/90 dark:bg-slate-950/70">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-300 font-bold text-xs">
                  <BookOpen className="w-4 h-4" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      {visual.source}
                    </span>
                    <span className="text-[10px] text-slate-400">•</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                      {visual.badge || 'Framework Diagram'}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate max-w-md sm:max-w-xl">
                    {slideTitle || visual.alt}
                  </h3>
                </div>
              </div>

              {/* Zoom & Close Controls */}
              <div className="flex items-center gap-1.5">
                <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.75}
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-30 cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono px-1 font-semibold text-slate-600 dark:text-slate-300">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 2.5}
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-30 cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                  id="close-lightbox-modal-button"
                  title="Close diagram lightbox [Esc]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Lightbox Main Image Canvas */}
            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-4 min-h-[320px] max-h-[60vh]">
              <div
                className="transition-transform duration-200 ease-out"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={visual.url}
                  alt={visual.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[55vh] max-w-full rounded-xl object-contain shadow-2xl mx-auto"
                />
              </div>
            </div>

            {/* Lightbox Footer Notes */}
            <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  {visual.caption}
                </p>
                {visual.sourceArticle && (
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    Source: {visual.source} • {visual.sourceArticle}
                  </span>
                )}
              </div>

              {sourceLink && (
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 dark:text-sky-300 hover:underline"
                >
                  Open the publisher’s learning resources
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {visual.keyInsights && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {visual.keyInsights.map((insight, idx) => (
                    <div key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
