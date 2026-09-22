import { jsPDF } from 'jspdf';
import { GeneratedProjectBrief } from '../types';

/**
 * Generates a clean, professionally formatted multi-page PDF document
 * for offline student use during campus fieldwork and sprint activities.
 */
export function exportBriefToPdf(brief: GeneratedProjectBrief) {
  // Initialize A4 document (210mm x 297mm)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 14;
  const marginTop = 14;
  const marginBottom = 16;
  const contentWidth = pageWidth - marginX * 2; // 182mm
  const maxY = pageHeight - marginBottom;

  let currentY = marginTop;
  let pageNumber = 1;

  // Helper: check if space needed, if not add page
  const ensureSpace = (neededHeight: number) => {
    if (currentY + neededHeight > maxY) {
      drawFooter(pageNumber);
      doc.addPage();
      pageNumber++;
      currentY = marginTop + 10;
      drawHeaderMinimal();
    }
  };

  // Header minimal on subsequent pages
  const drawHeaderMinimal = () => {
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(marginX, marginTop, contentWidth, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(
      `10-DAY UX SPRINT BRIEF: ${brief.title.toUpperCase()} • OFFLINE FIELDWORK GUIDE`,
      marginX + 4,
      marginTop + 5.5
    );
  };

  // Footer on each page
  const drawFooter = (num: number) => {
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.line(marginX, pageHeight - 12, marginX + contentWidth, pageHeight - 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text(
      '10-Day UX Design Sprint • Instructor: Roushan Kumar (roushan.ux@gmail.com) • Student Fieldwork Edition',
      marginX,
      pageHeight - 8
    );
    doc.text(`Page ${num}`, pageWidth - marginX - 12, pageHeight - 8);
  };

  // ================= PAGE 1 =================

  // Top Course Banner
  doc.setFillColor(15, 23, 42); // #0f172a slate-900
  doc.roundedRect(marginX, currentY, contentWidth, 24, 3, 3, 'F');

  // Top Tag
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(56, 189, 248); // sky-400
  doc.text('10-DAY UX SPRINT • STUDENT FIELDWORK PROJECT BRIEF', marginX + 6, currentY + 7);

  // Brief Title
  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  const truncatedTitle =
    brief.title.length > 58 ? brief.title.slice(0, 55) + '...' : brief.title;
  doc.text(truncatedTitle, marginX + 6, currentY + 14);

  // Meta Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(203, 213, 225); // slate-300
  doc.text(
    `Domain: ${brief.domain}   |   Client Type: ${brief.clientType}   |   Format: Offline Student Handout`,
    marginX + 6,
    currentY + 20
  );

  currentY += 28;

  // Problem Statement Card
  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.3);

  // Estimate Problem Statement height
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const problemLines = doc.splitTextToSize(brief.problemStatement, contentWidth - 14);
  const probHeight = Math.max(22, 14 + problemLines.length * 4.2);

  doc.roundedRect(marginX, currentY, contentWidth, probHeight, 2, 2, 'FD');

  // Left red accent strip
  doc.setFillColor(225, 29, 72); // rose-600
  doc.rect(marginX, currentY, 2.5, probHeight, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(190, 18, 60); // rose-700
  doc.text('1. THE CAMPUS PROBLEM & USER FRICTION', marginX + 6, currentY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85); // slate-700
  doc.text(problemLines, marginX + 6, currentY + 12);

  currentY += probHeight + 5;

  // Sprint Goal & Metrics Box
  ensureSpace(40);
  const goalBoxWidth = contentWidth * 0.58;
  const metricsBoxWidth = contentWidth * 0.40;
  const boxesX2 = marginX + goalBoxWidth + (contentWidth - goalBoxWidth - metricsBoxWidth);

  // Left Goal Box
  doc.setFillColor(240, 253, 244); // emerald-50
  doc.setDrawColor(187, 247, 208); // emerald-200
  doc.roundedRect(marginX, currentY, goalBoxWidth, 38, 2, 2, 'FD');

  doc.setFillColor(16, 185, 129); // emerald-500
  doc.rect(marginX, currentY, 2.5, 38, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(4, 120, 87); // emerald-700
  doc.text('2. 10-DAY SPRINT CHALLENGE GOAL', marginX + 6, currentY + 6);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  const goalLines = doc.splitTextToSize(brief.sprintChallengeGoal, goalBoxWidth - 10);
  doc.text(goalLines, marginX + 6, currentY + 13);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text(
    'Target Users: ' + (brief.targetCollegeUsers.length > 55 ? brief.targetCollegeUsers.slice(0, 52) + '...' : brief.targetCollegeUsers),
    marginX + 6,
    currentY + 29
  );
  doc.text('Core Focus: Discover -> Define -> Wireframe -> Prototype -> Test', marginX + 6, currentY + 34);

  // Right Metrics Box
  doc.setFillColor(238, 242, 255); // indigo-50
  doc.setDrawColor(199, 210, 254); // indigo-200
  doc.roundedRect(boxesX2, currentY, metricsBoxWidth, 38, 2, 2, 'FD');

  doc.setFillColor(99, 102, 241); // indigo-500
  doc.rect(boxesX2, currentY, 2.5, 38, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(67, 56, 202); // indigo-700
  doc.text('KEY METRICS TO MOVE', boxesX2 + 5, currentY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(30, 41, 59);
  let metricY = currentY + 12;
  brief.metricsToMove.forEach((metric) => {
    const wrappedMetric = doc.splitTextToSize(`• ${metric}`, metricsBoxWidth - 8);
    doc.text(wrappedMetric, boxesX2 + 5, metricY);
    metricY += wrappedMetric.length * 3.8 + 2;
  });

  currentY += 43;

  // Section 3: Campus User Testing Blueprint (Crucial for Day 2 & Day 7 Fieldwork)
  ensureSpace(65);
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(marginX, currentY, contentWidth, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text(
    '3. CAMPUS USER TESTING BLUEPRINT: WHERE TO INTERVIEW & TEST (DAY 2 & DAY 7)',
    marginX + 4,
    currentY + 4.2
  );

  currentY += 8;

  // Intercept Locations List / Table
  brief.campusTestingLocations.forEach((loc, idx) => {
    ensureSpace(16);
    doc.setFillColor(idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 250, idx % 2 === 0 ? 255 : 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(marginX, currentY, contentWidth, 14, 1.5, 1.5, 'FD');

    // Number pill
    doc.setFillColor(14, 165, 233); // sky-500
    doc.roundedRect(marginX + 3, currentY + 3, 5, 8, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(255, 255, 255);
    doc.text(String(idx + 1), marginX + 4.5, currentY + 7.5);

    // Location name & time
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(loc.location, marginX + 11, currentY + 5.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(180, 83, 9); // amber-700
    doc.text(`Best Time: ${loc.bestTimeToIntercept}`, marginX + 115, currentY + 5.5);

    // Target profiles
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    const profileText = doc.splitTextToSize(`Target: ${loc.targetProfiles}`, contentWidth - 16);
    doc.text(profileText[0] || '', marginX + 11, currentY + 10.5);

    currentY += 16;
  });

  // Intercept Question Box
  ensureSpace(20);
  doc.setFillColor(254, 243, 199); // amber-100
  doc.setDrawColor(251, 191, 36); // amber-400
  doc.roundedRect(marginX, currentY, contentWidth, 16, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(146, 64, 14); // amber-800
  doc.text('DAY 2 INTERCEPT QUESTION (Fieldwork Icebreaker):', marginX + 5, currentY + 5);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(120, 53, 15);
  const icebreakerLines = doc.splitTextToSize(`"${brief.interviewIcebreaker}"`, contentWidth - 10);
  doc.text(icebreakerLines, marginX + 5, currentY + 10);

  currentY += 21;

  // ================= PAGE 2 =================
  // Draw footer for page 1 before advancing
  drawFooter(pageNumber);
  doc.addPage();
  pageNumber++;
  currentY = marginTop + 10;
  drawHeaderMinimal();
  currentY += 5;

  // Section 4: Target Personas & User Hypotheses
  ensureSpace(38);
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(marginX, currentY, contentWidth, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text('4. PERSONA HYPOTHESES & CAMPUS USER GROUPS', marginX + 4, currentY + 4.2);

  currentY += 9;

  brief.threePersonaHunches.forEach((hunch, idx) => {
    ensureSpace(12);
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(marginX, currentY, contentWidth, 10, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(79, 70, 229); // indigo-600
    doc.text(`Persona ${idx + 1}:`, marginX + 4, currentY + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    const personaLines = doc.splitTextToSize(hunch, contentWidth - 32);
    doc.text(personaLines, marginX + 24, currentY + 6);

    currentY += 13;
  });

  currentY += 2;

  // Section 5: Design Constraints & Clickable Prototype Scope
  ensureSpace(45);
  const colWidth = (contentWidth - 6) / 2;

  // Left Column: Constraints
  doc.setFillColor(255, 241, 242); // rose-50
  doc.setDrawColor(254, 205, 211); // rose-200
  doc.roundedRect(marginX, currentY, colWidth, 42, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(190, 18, 60); // rose-700
  doc.text('5. SPRINT CONSTRAINTS', marginX + 4, currentY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  let constraintY = currentY + 12;
  brief.constraints.forEach((c) => {
    const wrappedC = doc.splitTextToSize(`• ${c}`, colWidth - 8);
    doc.text(wrappedC, marginX + 4, constraintY);
    constraintY += wrappedC.length * 3.8 + 2;
  });

  // Right Column: Prototype Scope
  const rightColX = marginX + colWidth + 6;
  doc.setFillColor(239, 246, 255); // blue-50
  doc.setDrawColor(191, 219, 254); // blue-200
  doc.roundedRect(rightColX, currentY, colWidth, 42, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(29, 78, 216); // blue-700
  doc.text('6. PROTOTYPE MVP SCOPE (DAYS 5-8)', rightColX + 4, currentY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  let scopeY = currentY + 12;
  brief.prototypeScope.forEach((s) => {
    const wrappedS = doc.splitTextToSize(`✓ ${s}`, colWidth - 8);
    doc.text(wrappedS, rightColX + 4, scopeY);
    scopeY += wrappedS.length * 3.8 + 1.8;
  });

  currentY += 48;

  // Section 6: Offline Student Fieldwork Worksheet (For taking clipboard notes)
  ensureSpace(68);
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(marginX, currentY, contentWidth, 68, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('7. STUDENT FIELDWORK OBSERVATIONS & INTERVIEW LOG (Print & Take On Campus)', marginX + 4, currentY + 6);

  // Metadata lines
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Student / Trio Team Names: _________________________________________', marginX + 4, currentY + 13);
  doc.text('Interview Date: _______________   Campus Spot: _______________________', marginX + 4, currentY + 19);

  // Ruled lines for notes
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.2);
  let lineY = currentY + 26;
  const questions = [
    'User #1 Quotes / Frustrations observed:',
    'User #2 Quotes / Frustrations observed:',
    'Surprising insight or workaround user showed us:',
    'Immediate feature idea or hypothesis validated:'
  ];

  questions.forEach((q) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text(q, marginX + 4, lineY);
    doc.line(marginX + 4, lineY + 5, marginX + contentWidth - 4, lineY + 5);
    lineY += 9.5;
  });

  // Final footer for Page 2
  drawFooter(pageNumber);

  // Trigger download
  const safeFilename = `${brief.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .slice(0, 32)}_brief.pdf`;

  doc.save(safeFilename);
}

/**
 * Exports the flagship Capstone Brief (EcoTrack) to PDF
 */
export function exportCapstoneBriefToPdf() {
  const capstoneBrief: GeneratedProjectBrief = {
    id: 'capstone-ecotrack',
    title: 'EcoTrack: Sustainable Personal Finance Onboarding',
    domain: 'FinTech & Climate Tech',
    emoji: '🌱',
    clientType: 'Campus Venture',
    problemStatement:
      'Gen Z users actively download EcoTrack from the App Store, but over 70% abandon the app within 3 days. Qualitative feedback reveals that the existing onboarding questionnaire is perceived as overly complex, rigid, and tedious, with too much manual financial data entry before any value is experienced.',
    currentPainPoint:
      '70%+ dropoff during onboarding, invasive banking link demands upfront, and lack of instant feedback within 60 seconds.',
    targetCollegeUsers:
      'Gen Z college students & young alumni who want to align spending with climate action but have zero tolerance for complex financial forms.',
    sprintChallengeGoal:
      'Redesign the complete mobile onboarding flow and initial habit hook to increase Day-7 user retention by +20% with value delivered in under 60 seconds.',
    metricsToMove: [
      'Day-7 User Retention: Increase by +20%',
      'Onboarding Completion Rate: Reach > 78%',
      'Time to First Carbon Offset Action < 60 seconds'
    ],
    constraints: [
      'Strict 4-week engineering implementation window after design handoff',
      'Must follow WCAG 2.2 AA accessibility standards (minimum 44x44px touch targets)',
      'Design token system must align with native iOS Human Interface Guidelines and Material 3'
    ],
    campusTestingLocations: [
      {
        location: 'Campus Student Union & Dining Halls',
        targetProfiles: 'Students actively buying meals using mobile payment apps (Apple Pay / Google Wallet)',
        bestTimeToIntercept: '12:00 PM – 2:30 PM (lunch peak)'
      },
      {
        location: 'Campus Environmental Center / Green Quad',
        targetProfiles: 'Eco-conscious students, sustainability club members, and climate activists',
        bestTimeToIntercept: '2:00 PM – 4:30 PM'
      },
      {
        location: 'Business & Economics School Atrium',
        targetProfiles: 'Students tracking personal budgets, freelance gigs, or student loan expenses',
        bestTimeToIntercept: '10:00 AM – 1:00 PM'
      }
    ],
    interviewIcebreaker:
      '"Hey! We are testing a quick concept for a student sustainable finance app—do you currently track how your everyday purchases impact your carbon footprint?"',
    threePersonaHunches: [
      'The Eco-Curious Freshman: Wants to do good, easily distracted, needs instant micro-rewards like tree-planting badges.',
      'The Strict Budgeter: Tracks every dollar, worried about bank privacy, needs transparent security assurances.',
      'The Passive Commuter: Uses transit daily, wants automatic background carbon calculation without manual receipts.'
    ],
    prototypeScope: [
      '60-second interactive value hook before asking for account credentials',
      'Gamified carbon budget quiz with personalized monthly impact summary',
      'Trust & privacy reassurance sheet detailing 256-bit bank encryption',
      'Dynamic dashboard with Day-1 achievable sustainability challenge'
    ]
  };

  exportBriefToPdf(capstoneBrief);
}

