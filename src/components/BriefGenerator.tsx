import React, { useState } from 'react';
import { GeneratedProjectBrief } from '../types';
import { PRESET_COLLEGE_BRIEFS } from '../data/projectBriefsData';
import { exportBriefToPdf } from '../utils/pdfExport';
import {
  Sparkles,
  MapPin,
  Users,
  Target,
  Clock,
  Compass,
  FileText,
  Copy,
  Check,
  RefreshCw,
  Lightbulb,
  Building,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Sliders,
  MessageSquare,
  Download,
  FileDown,
  Printer
} from 'lucide-react';

interface BriefGeneratorProps {
  onSelectBriefForSprint?: (brief: GeneratedProjectBrief) => void;
  onJumpToDay2Research?: () => void;
}

export const BriefGenerator: React.FC<BriefGeneratorProps> = ({
  onSelectBriefForSprint,
  onJumpToDay2Research
}) => {
  const [selectedBrief, setSelectedBrief] = useState<GeneratedProjectBrief>(
    PRESET_COLLEGE_BRIEFS[0]
  );
  const [activeTab, setActiveTab] = useState<'preset' | 'custom'>('preset');
  const [copied, setCopied] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [pdfExportSuccess, setPdfExportSuccess] = useState(false);

  // Custom Generator Form States
  const [customDomain, setCustomDomain] = useState('Campus Food & Dining');
  const [customLocationSpot, setCustomLocationSpot] = useState('Cafeteria & Library Steps');
  const [customUserType, setCustomUserType] = useState('Undergraduate students & Commuters');
  const [customFriction, setCustomFriction] = useState('Excessive wait times during 15-minute lecture breaks');
  const [customTargetGoal, setCustomTargetGoal] = useState('Cut friction by 50% and achieve 60% Day-7 retention');

  const handleSelectPreset = (brief: GeneratedProjectBrief) => {
    setSelectedBrief(brief);
    setCopied(false);
    setPdfExportSuccess(false);
  };

  const handleExportPdf = () => {
    setIsExportingPdf(true);
    try {
      exportBriefToPdf(selectedBrief);
      setPdfExportSuccess(true);
      setTimeout(() => setPdfExportSuccess(false), 3500);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handleGenerateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const newBrief: GeneratedProjectBrief = {
      id: `custom-brief-${Date.now()}`,
      title: `${customDomain.replace('Campus ', '')}: Campus UX Redesign`,
      domain: customDomain,
      emoji: '🎯',
      clientType: 'Campus Venture',
      problemStatement: `Students and campus visitors face recurring friction around ${customDomain.toLowerCase()}. Specifically, ${customFriction}. Because students navigate tight academic schedules, this leads to frustration and missed opportunities.`,
      currentPainPoint: customFriction,
      targetCollegeUsers: customUserType,
      sprintChallengeGoal: `Design an accessible, mobile-first experience to ${customTargetGoal.toLowerCase()}.`,
      metricsToMove: [
        'Day-7 User Retention > 40%',
        'Task Completion Time reduced by 50%',
        'Campus Usability CSAT > 4.5 / 5.0'
      ],
      constraints: [
        'Must be easily testable with real students in/around campus within 5-minute intercepts',
        'Works seamlessly on mobile web and native phones with spotty Wi-Fi',
        'Strict adherence to WCAG 2.2 AA accessibility and 44x44px minimum tap targets'
      ],
      campusTestingLocations: [
        {
          location: customLocationSpot,
          targetProfiles: customUserType,
          bestTimeToIntercept: '11:30 AM – 2:00 PM (peak campus foot traffic)'
        },
        {
          spot: 'College Quad & Student Union Lobby',
          targetProfiles: 'Students relaxing between classes',
          bestTimeToIntercept: '3:00 PM – 5:30 PM'
        } as any,
        {
          location: 'Library Common Study Tables',
          targetProfiles: 'Focused students who experience daily scheduling friction',
          bestTimeToIntercept: '1:00 PM – 4:00 PM'
        }
      ],
      interviewIcebreaker: `"Hey! We are running a 3-minute UX sprint project on ${customDomain.toLowerCase()}—have you experienced ${customFriction.toLowerCase()} recently?"`,
      threePersonaHunches: [
        `The Rushed Student: Tight schedule, high urgency, values instant clarity and zero taps.`,
        `The Budget / Frugal Peer: Careful with money and time, seeks peer validation.`,
        `The Campus Administrator / Staff: Oversees services, seeks order and zero complaints.`
      ],
      prototypeScope: [
        'Quick status check dashboard with live campus indicator',
        '1-Tap fast primary action workflow',
        'Confirmation badge with live progress tracker',
        'Peer feedback rating / review trigger'
      ]
    };

    setSelectedBrief(newBrief);
    setCopied(false);
  };

  const copyBriefToClipboard = () => {
    const text = `
PROJECT SPRINT BRIEF: ${selectedBrief.title}
Domain: ${selectedBrief.domain}
Client Type: ${selectedBrief.clientType}

PROBLEM STATEMENT:
${selectedBrief.problemStatement}

CORE PAIN POINT:
${selectedBrief.currentPainPoint}

TARGET USERS (Testing in & around college area):
${selectedBrief.targetCollegeUsers}

SPRINT CHALLENGE GOAL:
${selectedBrief.sprintChallengeGoal}

KEY SUCCESS METRICS:
${selectedBrief.metricsToMove.map((m) => `• ${m}`).join('\n')}

CAMPUS USER TESTING LOCATIONS:
${selectedBrief.campusTestingLocations
  .map(
    (loc) =>
      `• ${loc.location || (loc as any).spot} (${loc.targetProfiles}) — Best time: ${loc.bestTimeToIntercept}`
  )
  .join('\n')}

INTERVIEW ICEBREAKER QUESTION:
${selectedBrief.interviewIcebreaker}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-sky-50 dark:from-indigo-950/70 dark:via-slate-900 dark:to-sky-950/70 border border-indigo-100 dark:border-indigo-800/40 rounded-3xl p-6 sm:p-10 shadow-xl dark:shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Real Campus User Validation Engine
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              UX Project Brief Generator
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Generate hyper-relevant product design briefs where students can easily find real users
              to interview on Day 2 and run live usability tests on Day 7 right in and around campus!
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('preset')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'preset'
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                  : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent'
              }`}
            >
              Curated Campus Briefs (6)
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'custom'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 inline mr-1" />
              Custom Generator
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Selection / Customizer & Live Brief Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Preset Cards or Custom Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {activeTab === 'preset' ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
                <span className="font-semibold uppercase tracking-wider">
                  Select a Campus-Grounded Brief:
                </span>
                <span>{PRESET_COLLEGE_BRIEFS.length} Ready for Testing</span>
              </div>

              <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
                {PRESET_COLLEGE_BRIEFS.map((brief) => {
                  const isSelected = selectedBrief.id === brief.id;
                  return (
                    <button
                      key={brief.id}
                      onClick={() => handleSelectPreset(brief)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col gap-2 ${
                        isSelected
                          ? 'bg-sky-50 dark:bg-slate-900 border-sky-500 shadow-md shadow-sky-500/10 ring-1 ring-sky-500/50'
                          : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl">{brief.emoji}</span>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                          {brief.domain}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300">
                          {brief.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">
                          {brief.problemStatement}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          {brief.campusTestingLocations[0].location.split('(')[0]}
                        </span>
                        <span className="text-slate-400 dark:text-slate-500">Day 2 & 7 Ready</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Custom Generator Form */
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Customize a College Campus Challenge
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Tailor a brief tailored to your exact college campus facilities and student demographics.
                </p>
              </div>

              <form onSubmit={handleGenerateCustom} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Problem Domain / Campus Service
                  </label>
                  <select
                    value={customDomain}
                    onChange={(e) => setCustomDomain(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 text-xs"
                  >
                    <option value="Campus Food & Dining">Campus Food & Dining</option>
                    <option value="Library & Study Facilities">Library & Study Facilities</option>
                    <option value="Dormitory & Peer Economy">Dormitory & Peer Economy</option>
                    <option value="Student Clubs & Campus Events">Student Clubs & Campus Events</option>
                    <option value="Campus Commute & Parking">Campus Commute & Parking</option>
                    <option value="Printing & Lab Resource Booking">Printing & Lab Resource Booking</option>
                    <option value="Mental Health & Peer Support">Mental Health & Peer Support</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Where will students find users to test?
                  </label>
                  <input
                    type="text"
                    required
                    value={customLocationSpot}
                    onChange={(e) => setCustomLocationSpot(e.target.value)}
                    placeholder="e.g. Central Cafeteria, Science Library Atrium, Quad Benches"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 text-xs"
                  />
                  <span className="text-[11px] text-slate-500 mt-0.5 block">
                    Pick a high-traffic spot with stationary students who have 5 mins of downtime.
                  </span>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Target College User Group
                  </label>
                  <input
                    type="text"
                    required
                    value={customUserType}
                    onChange={(e) => setCustomUserType(e.target.value)}
                    placeholder="e.g. Commuter students, Freshman dorm residents, Graduate TAs"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Core Student Friction / Pain Point
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={customFriction}
                    onChange={(e) => setCustomFriction(e.target.value)}
                    placeholder="e.g. 25-minute wait time for print jobs before 9 AM exam..."
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Desired Measurable Outcome
                  </label>
                  <input
                    type="text"
                    required
                    value={customTargetGoal}
                    onChange={(e) => setCustomTargetGoal(e.target.value)}
                    placeholder="e.g. Cut print wait times by 60% and achieve 85% task completion"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer text-xs"
                >
                  <Sparkles className="w-4 h-4" />
                  Generate Campus Brief & Testing Blueprint
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Right Column: Active Brief Showcase with Campus Testing Locations (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl space-y-6">
            {/* Header of Active Brief */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedBrief.emoji}</span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono uppercase bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-400 border border-slate-200 dark:border-slate-700">
                    {selectedBrief.clientType}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{selectedBrief.domain}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {selectedBrief.title}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleExportPdf}
                  disabled={isExportingPdf}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 disabled:bg-sky-800 text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-sky-600/20"
                  title="Export this brief as a formatted PDF for offline student use"
                >
                  {pdfExportSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>PDF Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <FileDown className="w-3.5 h-3.5" />
                      <span>{isExportingPdf ? 'Generating...' : 'Export Offline PDF'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={copyBriefToClipboard}
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-200 dark:border-slate-700"
                  title="Copy full brief to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Brief</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Problem & Sprint Goal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-slate-950/90 border border-rose-200 dark:border-rose-900/40 space-y-2">
                <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  The Campus Problem
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedBrief.problemStatement}
                </p>
                <div className="pt-2 border-t border-rose-100 dark:border-slate-900 text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-200">Pain Point:</strong> {selectedBrief.currentPainPoint}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-slate-950/90 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5" />
                  10-Day Sprint Challenge
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedBrief.sprintChallengeGoal}
                </p>
                <div className="pt-2 border-t border-emerald-100 dark:border-slate-900 text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-200">Target Audience:</strong> {selectedBrief.targetCollegeUsers}
                </div>
              </div>
            </div>

            {/* Crucial Section: Where to find real users in & around college area */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                  <MapPin className="w-4 h-4" />
                  Where to Find Real Users to Test In & Around College Area
                </div>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">
                  Day 2 & Day 7 Fieldwork
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {selectedBrief.campusTestingLocations.map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-[11px]">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700 flex items-center justify-center font-mono text-[10px]">
                        {idx + 1}
                      </span>
                      <span className="line-clamp-1">{loc.location || (loc as any).spot}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-tight">
                      {loc.targetProfiles}
                    </p>
                    <p className="text-[10px] text-amber-700 dark:text-amber-300 flex items-center gap-1 font-mono pt-1">
                      <Clock className="w-3 h-3 shrink-0" />
                      {loc.bestTimeToIntercept}
                    </p>
                  </div>
                ))}
              </div>

              {/* Ready-to-use Field Icebreaker */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block">
                    Campus Intercept Script (Icebreaker for Students)
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-200 italic">
                    {selectedBrief.interviewIcebreaker}
                  </p>
                </div>
              </div>
            </div>

            {/* Target Metrics & Constraints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px] block">
                  Metrics to Move
                </span>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                  {selectedBrief.metricsToMove.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px] block">
                  Design & Engineering Constraints
                </span>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                  {selectedBrief.constraints.map((c, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0"></span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Scope for Days 5-8 */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Recommended Clickable Prototype Scope (Days 5–8)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedBrief.prototypeScope.map((scope, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-2"
                  >
                    <span className="font-mono text-indigo-600 dark:text-indigo-400 text-[10px]">0{idx + 1}</span>
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Call to Actions */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <span>Selected: </span>
                <strong className="text-slate-900 dark:text-white">{selectedBrief.title}</strong>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleExportPdf}
                  disabled={isExportingPdf}
                  className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl border border-sky-300 dark:border-sky-500/40 bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/60 text-sky-800 dark:text-sky-200 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Export brief to PDF"
                >
                  <FileDown className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>{pdfExportSuccess ? 'PDF Saved!' : 'Offline PDF'}</span>
                </button>

                {onSelectBriefForSprint && (
                  <button
                    onClick={() => onSelectBriefForSprint(selectedBrief)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Lock as Sprint Project
                  </button>
                )}

                {onJumpToDay2Research && (
                  <button
                    onClick={onJumpToDay2Research}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-lg shadow-sky-600/30 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Users className="w-3.5 h-3.5" />
                    Begin Day 2 Field Research
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
