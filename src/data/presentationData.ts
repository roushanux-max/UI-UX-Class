import { Slide, SprintDay } from '../types';
import { DAY_RICH_CONTENT } from './sprintEnrichmentData';
import { SLIDE_VISUALS } from './slideVisualsData';

export const RAW_SPRINT_DAYS: SprintDay[] = [
  {
    dayNumber: 1,
    title: 'Introduction & The Real-World Brief',
    subtitle: 'From Brief to Handoff • Kickoff',
    phase: 'Discover',
    theme: 'Foundations & Live Client Brief',
    isBasic: true,
    slideCount: 7,
    description: 'Understand modern UX dynamics, the modern product trio, AI in product design, and unpack the live EcoTrack capstone challenge.',
    deliverables: ['Team Charter & Role Assignments', 'Initial Assumption Map for Gen Z & Finance'],
    activities: ['Form Teams of 3', 'Lead Researcher / Interaction / Visual Assignments', '30-minute Assumption Mapping']
  },
  {
    dayNumber: 2,
    title: 'Empathize – Modern User Research',
    subtitle: 'You are not the user',
    phase: 'Discover',
    theme: 'Qualitative User Research & Discovery',
    isBasic: false,
    slideCount: 5,
    description: 'Learn modern qualitative research methods, how to conduct unbiased interviews with the 5 Whys, and practice active listening.',
    deliverables: ['5-Question Unbiased Interview Script', '2 Real User Interview Transcripts & Raw Notes'],
    activities: ['Mock Interviews in Pairs (20 mins)', 'Active Listening & Follow-up Prompting']
  },
  {
    dayNumber: 3,
    title: 'Define – Synthesis & Problem Framing',
    subtitle: 'Making sense of the mess',
    phase: 'Define',
    theme: 'Affinity Mapping & Jobs-to-be-Done',
    isBasic: false,
    slideCount: 5,
    description: 'Synthesize raw interview findings into actionable insights using Affinity Mapping, Jobs-to-be-Done (JTBD), and How Might We (HMW) statements.',
    deliverables: ['1 Affinity Map', '1 Primary Persona', '3 Prioritized HMW Statements', '3 Rough Solution Sketches'],
    activities: ['Sticky Note Synthesis & Pattern Grouping (45 mins)', 'Drafting HMW Questions']
  },
  {
    dayNumber: 4,
    title: 'Ideate – Divergent & Convergent Thinking',
    subtitle: 'Quantity leads to quality',
    phase: 'Develop',
    theme: 'Crazy 8s & User Journey Mapping',
    isBasic: false,
    slideCount: 5,
    description: 'Separate idea generation from critique. Map the drop-off drop points in the user journey and sketch high-velocity solutions with Crazy 8s.',
    deliverables: ['Current vs Future User Journey Map', '1 Winning Concept Sketch ready for Figma'],
    activities: ['User Journey Drop-off Mapping', 'Crazy 8s Rapid Sketching (8 sketches in 8 mins)', 'Dot-voting Decision Matrix']
  },
  {
    dayNumber: 5,
    title: 'Information Architecture & Low-Fi Wireframing',
    subtitle: 'Structure before style',
    phase: 'Develop',
    theme: 'Navigation Schemas & Grayscale Blueprints',
    isBasic: false,
    slideCount: 5,
    description: 'Architect mobile navigation schemas through card sorting, understand low-fidelity principles, and create grayscale wireframe flows.',
    deliverables: ['3 Grayscale Low-Fidelity Screens in Figma', 'Clickable Basic Arrow Prototyping Flow'],
    activities: ['Card Sorting Exercise (Open vs Closed)', 'Paper to Figma Translation (60 mins)']
  },
  {
    dayNumber: 6,
    title: 'Prototyping & Interaction Design',
    subtitle: 'Making it feel real',
    phase: 'Develop',
    theme: 'Figma Auto Layout, Components & Smart Animate',
    isBasic: false,
    slideCount: 4,
    description: 'Master industry-standard Figma techniques: reusable components, responsive Auto Layout, global design tokens/variables, and Smart Animate.',
    deliverables: ['Mid-Fidelity Clickable Interactive Prototype', 'Mobile Device Real-world Testing via Figma Mirror'],
    activities: ['Component Library Architecture', 'Auto Layout Conversion', 'Smart Animate Transitions (90 mins)']
  },
  {
    dayNumber: 7,
    title: 'Usability Testing & Inclusive Design',
    subtitle: 'Prove it works',
    phase: 'Deliver',
    theme: 'WCAG 2.2 Accessibility & User Testing',
    isBasic: false,
    slideCount: 5,
    description: 'Run moderated peer usability tests, evaluate metrics (task success rate, time-on-task, errors), and ensure strict WCAG 2.2 compliance.',
    deliverables: ['Usability Test Raw Notes & Bug Severity Matrix', '1-Page Usability Report with Top 3 Critical Fixes'],
    activities: ['Test Script Creation (3 Core Tasks)', 'Peer Swap 15-Minute Moderated Test', 'Stark Accessibility Contrast Audit']
  },
  {
    dayNumber: 8,
    title: 'Iterate & Refine (High-Fidelity)',
    subtitle: 'Polishing the diamond',
    phase: 'Deliver',
    theme: 'Visual Design System & Micro-Interactions',
    isBasic: false,
    slideCount: 5,
    description: 'Prioritize UX debt with an Impact/Effort matrix, establish a refined visual design system (typography, color, micro-interactions), and polish the prototype.',
    deliverables: ['High-Fidelity Polished Prototype', 'Edge Case Identification Documentation'],
    activities: ['UX Debt Prioritization', 'Mini Design System & UI Kit Styling', 'Interactive Prototype Final Polish (90 mins)']
  },
  {
    dayNumber: 9,
    title: 'Developer Handoff & UX Writing',
    subtitle: 'Bridging the gap',
    phase: 'Handoff',
    theme: 'Design Specs, Microcopy & Edge Cases',
    isBasic: false,
    slideCount: 5,
    description: 'Bridge the design-development gap with Figma Dev Mode, craft clear and humane microcopy, and spec edge states (empty, error, loading, offline).',
    deliverables: ['Finalized Dev-Ready Figma File', '1-Page Engineering Handoff Spec Doc', '5-Slide Stakeholder Pitch Deck'],
    activities: ['Edge Case Audit (Error & Empty States)', 'Handoff Spec Documentation Writing (60 mins)', 'Figma Dev Mode Inspection']
  },
  {
    dayNumber: 10,
    title: 'Portfolio Presentation & Critique',
    subtitle: 'Selling your work',
    phase: 'Handoff',
    theme: 'Stakeholder Pitching & Case Study Framework',
    isBasic: false,
    slideCount: 6,
    description: 'Present your completed capstone sprint to stakeholders using the narrative arc (Problem -> Insights -> Solution -> Impact) and engage in peer critique.',
    deliverables: ['Live 5-Minute Stakeholder Presentation', 'Complete Portfolio Case Study Draft'],
    activities: ['5-Minute Stakeholder Pitch (3 min presentation + 2 min Q&A)', 'Peer Critique Session (I like, I wish, What if)']
  }
];

export const SPRINT_DAYS: SprintDay[] = RAW_SPRINT_DAYS.map((day) => {
  const enrichment = DAY_RICH_CONTENT[day.dayNumber];
  return {
    ...day,
    featuredExample: enrichment?.featuredExample,
    featuredTopActivity: enrichment?.featuredTopActivity,
    campusTestingGuide: enrichment?.campusTestingGuide
  };
});

const RAW_ALL_SLIDES: Slide[] = [
  // DAY 1: Introduction & The Real-World Brief (Basic Access)
  {
    id: 1,
    dayNumber: 1,
    dayTitle: 'Introduction & The Real-World Brief',
    slideNumberInDay: 1,
    title: 'DAY 1: Introduction & The Real-World Brief',
    subtitle: 'Kickoff: From Problem Space to Product Reality',
    category: 'title',
    contentPoints: [
      'UX Design Sprint: From Brief to Handoff',
      'Day 1: Introduction & The Product Brief',
      'Interactive Product Design Studio Curriculum'
    ],
    speakerNotes: "Welcome to the 10-day UX sprint. Over the next two weeks, you won't just learn theory; you will act as a real product design team solving a live brief.",
    keyTakeaway: 'Product design is an active, iterative team sport centered on delivering human and business value.',
    isBasic: true
  },
  {
    id: 2,
    dayNumber: 1,
    dayTitle: 'Introduction & The Real-World Brief',
    slideNumberInDay: 2,
    title: 'Course Overview: From Brief to Handoff',
    subtitle: 'The 10-Day Journey from Ambiguity to Production Prototype',
    category: 'concept',
    contentPoints: [
      'UX Design Sprint: From Brief to Handoff',
      'Day 1: Introduction & The Product Brief',
      'Hands-on practical execution simulating top tech product teams'
    ],
    speakerNotes: "Welcome to the 10-day UX sprint. Over the next two weeks, you won't just learn theory; you will act as a real product design team solving a live brief.",
    keyTakeaway: 'You will experience the complete end-to-end design lifecycle within two intensive weeks.',
    isBasic: true
  },
  {
    id: 3,
    dayNumber: 1,
    dayTitle: 'Introduction & The Real-World Brief',
    slideNumberInDay: 3,
    title: 'What is Modern UX?',
    subtitle: 'Strategic problem solving at the intersection of humans and business',
    category: 'concept',
    contentPoints: [
      'UX is not just UI: It is not about simply "making things pretty" or adding decorative visual flair.',
      'UX is root problem-solving for humans, communities, and sustainable business models.',
      'The Modern Product Trio: Product Manager (Why & What), Product Designer (How & Who), Software Engineer (Build & Feasibility).'
    ],
    speakerNotes: "Designers don't work in a vacuum. We balance user needs with business goals and technical constraints.",
    keyTakeaway: 'Great design balances user desirability, business viability, and technical feasibility.',
    isBasic: true
  },
  {
    id: 4,
    dayNumber: 1,
    dayTitle: 'Introduction & The Real-World Brief',
    slideNumberInDay: 4,
    title: 'The Latest Landscape: AI in UX',
    subtitle: 'Leveraging AI as an augmentative collaborator, not a replacement',
    category: 'methodology',
    contentPoints: [
      'AI is a collaborator, not a replacement: Amplifies your productivity and analytical speed.',
      'Tactical AI Applications: Fast divergence ideation, clustering and summarizing qualitative research, generating realistic placeholder copy and user scenarios.',
      'The Indispensable Human Edge: Deep empathetic intuition, ethical responsibility, and strategic context framing.'
    ],
    speakerNotes: 'You will be encouraged to use AI tools during this sprint to speed up tedious tasks, but your critical thinking is what makes you a designer.',
    keyTakeaway: 'AI accelerates repetitive synthesis, freeing designers to focus on strategic judgment and empathy.',
    isBasic: true
  },
  {
    id: 5,
    dayNumber: 1,
    dayTitle: 'Introduction & The Real-World Brief',
    slideNumberInDay: 5,
    title: 'The 10-Day Sprint Overview',
    subtitle: 'Structured around the Double Diamond framework of Divergence & Convergence',
    category: 'methodology',
    contentPoints: [
      'Days 1–3 (Discover & Define): Problem space immersion, research interviews, synthesis, and problem framing.',
      'Days 4–6 (Develop): Rapid divergent ideation, Information Architecture (IA), and interactive prototyping.',
      'Days 7–8 (Deliver): Usability testing, accessibility audits, data-driven iteration, and high-fidelity polish.',
      'Days 9–10 (Handoff & Present): Developer specifications, edge cases, UX writing, stakeholder pitch, and portfolio critique.',
      'Methodology: The British Design Council Double Diamond (Diverge -> Converge -> Diverge -> Converge).'
    ],
    speakerNotes: 'We are following the Double Diamond process. We will diverge (explore widely) and converge (narrow down) multiple times.',
    keyTakeaway: 'Resist jumping straight to solutions. Fall in love with the problem before designing the interface.',
    isBasic: true
  },
  {
    id: 6,
    dayNumber: 1,
    dayTitle: 'Introduction & The Real-World Brief',
    slideNumberInDay: 6,
    title: 'REVEAL: The Capstone Brief',
    subtitle: 'Your Live Client Project for the 10-Day Sprint',
    category: 'concept',
    contentPoints: [
      'Client: "EcoTrack" (A high-growth sustainable personal finance app).',
      'Problem Statement: Gen Z users actively download the app, but abandon it after 3 days. Onboarding is perceived as overly complex and dry.',
      'Sprint Goal: Redesign the onboarding and initial habit-formation flow to increase Day-7 user retention by 20%.',
      'Constraints: Must be mobile-first (iOS & Android guidelines), fully accessible (WCAG 2.2 AA), and scoped to launch within 4 engineering weeks.'
    ],
    speakerNotes: "This is your real-world brief. Read it carefully. Your goal isn't just to make a cool screen; it's to solve this specific business problem.",
    keyTakeaway: 'Design success is judged by user retention and behavior change, not aesthetic complexity.',
    isBasic: true
  },
  {
    id: 7,
    dayNumber: 1,
    dayTitle: 'Introduction & The Real-World Brief',
    slideNumberInDay: 7,
    title: 'Activity: Team Charter & Assumptions',
    subtitle: 'Unpack your biases before speaking to users',
    category: 'activity',
    contentPoints: [
      'Task 1: Form teams of 3. Formally assign roles (Lead Researcher, Lead Interaction Designer, Lead Visual & Strategy).',
      'Task 2: Create an "Assumption Map". What do we think we know about Gen Z and sustainable finance? What do we urgently need to find out?',
      'Allocated Time: 30 Minutes.'
    ],
    activityTasks: [
      'Split into squads of 3 and establish team norms',
      'Map 10+ assumptions regarding Gen Z mental models around money and carbon tracking',
      'Highlight top 3 riskiest assumptions that will break the product if incorrect'
    ],
    speakerNotes: 'Get into your teams. Write down your biases and assumptions about Gen Z. We will test these tomorrow.',
    keyTakeaway: 'Assumptions are dangerous when unacknowledged. Documenting them turns guesses into hypotheses.',
    isBasic: true
  },

  // DAY 2: Empathize – Modern User Research (Full Access)
  {
    id: 8,
    dayNumber: 2,
    dayTitle: 'Empathize – Modern User Research',
    slideNumberInDay: 1,
    title: 'DAY 2: Empathize – Modern User Research',
    subtitle: '"You are not the user."',
    category: 'title',
    contentPoints: [
      'The foundational law of human-centered design: You are not your user.',
      'Uncovering hidden motivations, unspoken anxieties, and real everyday workflows.',
      'Transitioning from personal assumptions to empirical behavioral insights.'
    ],
    speakerNotes: 'Welcome to Day 2. Remember: design intuition is trained, but design empathy requires direct user engagement.',
    keyTakeaway: 'Your personal preferences are irrelevant. The customer’s reality is the single source of truth.',
    isBasic: false
  },
  {
    id: 9,
    dayNumber: 2,
    dayTitle: 'Empathize – Modern User Research',
    slideNumberInDay: 2,
    title: 'Modern Research Methods',
    subtitle: 'Balancing the Qualitative "Why" with the Quantitative "What"',
    category: 'methodology',
    contentPoints: [
      'Qualitative (The "Why"): 1-on-1 semi-structured interviews, contextual inquiry, diary studies, observational ethnography.',
      'Quantitative (The "What"): Product telemetry, analytics funnels, drop-off heatmaps, A/B testing, structured survey validation.',
      'Modern Tooling Stack: Maze (unmoderated validation), UserTesting (remote live sessions), Dovetail (qualitative tag synthesis & insight repository).'
    ],
    speakerNotes: 'Today we focus on Qualitative research. We want deep insights, not just broad statistics.',
    keyTakeaway: 'Numbers tell you where users get stuck; qualitative interviews tell you why.',
    isBasic: false
  },
  {
    id: 10,
    dayNumber: 2,
    dayTitle: 'Empathize – Modern User Research',
    slideNumberInDay: 3,
    title: 'Writing Unbiased Interview Scripts',
    subtitle: 'Techniques for extracting raw truth instead of flattering polite answers',
    category: 'framework',
    contentPoints: [
      '❌ Leading Question: "Don\'t you hate how slow and confusing this financial app is?" (Biases the participant to agree).',
      '✅ Open Question: "Walk me through the last time you opened a finance app. Where were you, and what were you trying to achieve?"',
      'The "5 Whys" Technique: Continually peel back surface statements to discover the underlying emotional driver or friction.'
    ],
    speakerNotes: 'If you ask leading questions, you get biased data. Ask about past behaviors, not hypothetical future behaviors.',
    keyTakeaway: 'Humans are terrible at predicting future behavior. Always anchor questions in past factual experiences.',
    isBasic: false
  },
  {
    id: 11,
    dayNumber: 2,
    dayTitle: 'Empathize – Modern User Research',
    slideNumberInDay: 4,
    title: 'Activity: Mock Interviews',
    subtitle: 'Practicing active listening without solution pitching',
    category: 'activity',
    contentPoints: [
      'Task: Pair up. One person assumes the role of Interviewer, while the partner acts as the target Gen Z user.',
      'Goal: Practice conversational active listening, comfortable silence, and asking non-directive follow-up questions.',
      'Time: 20 Minutes (10 minutes per round with role swap).'
    ],
    activityTasks: [
      'Conduct 10-minute interview using your open-ended guide',
      'Capture verbatim quotes and emotional friction moments',
      'Swap roles and evaluate whether the interviewer led the witness'
    ],
    speakerNotes: "Treat this like a real interview. Don't pitch your idea. Just listen and take notes on their pain points.",
    keyTakeaway: 'Master the power of the 3-second pause: when you stay silent, users reveal their genuine pain points.',
    isBasic: false
  },
  {
    id: 12,
    dayNumber: 2,
    dayTitle: 'Empathize – Modern User Research',
    slideNumberInDay: 5,
    title: 'Deliverables & Homework',
    subtitle: 'Gathering field evidence for Day 3 synthesis',
    category: 'deliverables',
    contentPoints: [
      'In-Class: Finalize your squad\'s rigorous 5-question interview script.',
      'Homework: Conduct 2 real interviews (target demographic users or peer cohort) using your standardized script.',
      'Documentation: Record audio (with explicit consent) or log detailed verbatim transcripts and emotional inflection points.'
    ],
    homeworkTasks: [
      'Finalize 5-question interview guide in team workspace',
      'Conduct 2 user interviews with genuine participants',
      'Transcribe key quotes ready for sticky-note synthesis'
    ],
    speakerNotes: 'For homework, you must talk to actual humans. Bring your raw notes tomorrow for synthesis.',
    keyTakeaway: 'Real user quotes are the most persuasive tool in design meetings.',
    isBasic: false
  },

  // DAY 3: Define – Synthesis & Problem Framing (Full Access)
  {
    id: 13,
    dayNumber: 3,
    dayTitle: 'Define – Synthesis & Problem Framing',
    slideNumberInDay: 1,
    title: 'DAY 3: Define – Synthesis & Problem Framing',
    subtitle: 'Making sense of the mess',
    category: 'title',
    contentPoints: [
      'Transforming unstructured customer transcripts into sharp behavioral patterns.',
      'Synthesizing empathy data into actionable problem definitions.',
      'Framing problems so they naturally unlock creative design explorations.'
    ],
    speakerNotes: 'Welcome to Day 3. Now we take the chaos of raw qualitative interviews and extract gold.',
    keyTakeaway: 'Synthesis is the bridge that converts raw noise into product strategy.',
    isBasic: false
  },
  {
    id: 14,
    dayNumber: 3,
    dayTitle: 'Define – Synthesis & Problem Framing',
    slideNumberInDay: 2,
    title: 'From Data to Insights',
    subtitle: 'Distinguishing surface observations from psychological insights',
    category: 'concept',
    contentPoints: [
      'Raw data is useless without synthesis and pattern recognition.',
      'Affinity Mapping: Clustering qualitative sticky notes into emergent thematic groups.',
      'Observation vs Insight: An observation is "Users forget their passwords." An insight is "Users feel anxious about financial security, so they create complex passwords they can\'t remember."'
    ],
    speakerNotes: 'An observation is "Users forget their passwords." An insight is "Users feel anxious about financial security, so they create complex passwords they can\'t remember."',
    keyTakeaway: 'Observations state what happened; insights reveal why people feel and act the way they do.',
    isBasic: false
  },
  {
    id: 15,
    dayNumber: 3,
    dayTitle: 'Define – Synthesis & Problem Framing',
    slideNumberInDay: 3,
    title: 'Modern Frameworks: Jobs-to-be-Done (JTBD)',
    subtitle: 'Uncovering the underlying job customers hire products to perform',
    category: 'framework',
    contentPoints: [
      'People don\'t buy products; they "hire" them to make progress in specific circumstances.',
      'The JTBD Formula: When I [Trigger / Situation], I want to [Action / Motivation], so I can [Expected Emotional or Functional Outcome].',
      'Example for EcoTrack: "When I get paid on Friday, I want to automatically allocate 5% to vetted climate projects, so I can feel confident I\'m living my values without doing manual math."'
    ],
    speakerNotes: 'JTBD keeps us focused on the user\'s core motivation, preventing us from building unnecessary features.',
    keyTakeaway: 'Feature requests are transient; the fundamental job-to-be-done remains consistent across decades.',
    isBasic: false
  },
  {
    id: 16,
    dayNumber: 3,
    dayTitle: 'Define – Synthesis & Problem Framing',
    slideNumberInDay: 4,
    title: 'Activity: Affinity Mapping & HMW',
    subtitle: 'Clustering quotes and reframing obstacles into launchpads',
    category: 'activity',
    contentPoints: [
      'Task 1: Place all user interview quotes and field observations on sticky notes (FigJam or physical). Cluster into themes.',
      'Task 2: Draft 3 sharp "How Might We" (HMW) opportunity questions targeted at the biggest friction points discovered.',
      'Time: 45 Minutes.'
    ],
    activityTasks: [
      'Write 30+ individual quote stickies with team',
      'Cluster silently into 4-6 emergent themes',
      'Craft 3 HMW questions targeting the steepest drop-off friction'
    ],
    speakerNotes: 'Look for patterns. If 3 users mentioned the same frustration, that\'s a core theme. Turn that theme into a "How Might We" question.',
    keyTakeaway: 'A well-crafted HMW question is neither too narrow to stifle creativity nor too broad to lack focus.',
    isBasic: false
  },
  {
    id: 17,
    dayNumber: 3,
    dayTitle: 'Define – Synthesis & Problem Framing',
    slideNumberInDay: 5,
    title: 'Deliverables & Homework',
    subtitle: 'Synthesized foundations ready for ideation',
    category: 'deliverables',
    contentPoints: [
      'In-Class: 1 Affinity Map, 1 Primary Persona archetype, and 3 finalized HMW statements.',
      'Homework: Vote as a team on the #1 single HMW statement you will solve for EcoTrack.',
      'Sketch 3 rough divergent concepts individually before tomorrow\'s workshop.'
    ],
    homeworkTasks: [
      'Synthesize team FigJam affinity map into clean summary',
      'Vote on the #1 HMW statement driving Day-7 retention',
      'Sketch 3 thumbnail ideas on paper'
    ],
    speakerNotes: 'You can\'t solve every problem. Pick the one HMW that has the highest impact on the business goal (Day-7 retention).',
    keyTakeaway: 'Focus is saying no to twenty good ideas to obsess over the single transformational one.',
    isBasic: false
  },

  // DAY 4: Ideate – Divergent & Convergent Thinking (Full Access)
  {
    id: 18,
    dayNumber: 4,
    dayTitle: 'Ideate – Divergent & Convergent Thinking',
    slideNumberInDay: 1,
    title: 'DAY 4: Ideate – Divergent & Convergent Thinking',
    subtitle: 'Quantity leads to quality',
    category: 'title',
    contentPoints: [
      'Unleashing rapid creative divergence without premature critique.',
      'Exploring radical layout, interaction, and narrative possibilities.',
      'Applying objective convergence filters to isolate breakthrough solutions.'
    ],
    speakerNotes: 'Welcome to Day 4. Today we unlock creativity by separating the gas pedal (divergence) from the brake pedal (critique).',
    keyTakeaway: 'The best way to get a good idea is to get a lot of ideas.',
    isBasic: false
  },
  {
    id: 19,
    dayNumber: 4,
    dayTitle: 'Ideate – Divergent & Convergent Thinking',
    slideNumberInDay: 2,
    title: 'Divergent vs. Convergent Thinking',
    subtitle: 'The rhythm of creative problem solving',
    category: 'methodology',
    contentPoints: [
      'Diverge: Generate as many distinct ideas as possible. Defer judgment, encourage wild ideas, build on others\' concepts.',
      'Converge: Switch to analytical mode. Critique, cluster, stress-test against constraints, and select the most viable concepts.',
      'The Golden Rule: Never diverge and converge at the same moment. Critique kills nascent ideas before they develop.'
    ],
    speakerNotes: 'The biggest mistake teams make is judging ideas while generating them. Separate the two phases.',
    keyTakeaway: 'Premature judgment kills innovation. Let ideas breathe before editing them down.',
    isBasic: false
  },
  {
    id: 20,
    dayNumber: 4,
    dayTitle: 'Ideate – Divergent & Convergent Thinking',
    slideNumberInDay: 3,
    title: 'Ideation Techniques',
    subtitle: 'High-speed design sprints under deliberate constraints',
    category: 'framework',
    contentPoints: [
      'Crazy 8s: Fold a sheet of paper into 8 panels. Sketch 8 distinct visual variations in exactly 8 minutes (60 seconds per frame).',
      'Impact vs. Effort Matrix: Plot concepts across a 2x2 grid to immediately identify "Quick Wins" and high-leverage strategic features.',
      'Why it works: Crazy 8s rapidly exhausts your default, clichéd ideas by frame 3, forcing original thinking in frames 6, 7, and 8.'
    ],
    speakerNotes: 'Crazy 8s forces you past your first, most obvious idea. Your 7th and 8th ideas are usually the most innovative.',
    keyTakeaway: 'Speed and constraints bypass overthinking and unlock subconscious design intuition.',
    isBasic: false
  },
  {
    id: 21,
    dayNumber: 4,
    dayTitle: 'Ideate – Divergent & Convergent Thinking',
    slideNumberInDay: 4,
    title: 'Activity: Crazy 8s & Journey Mapping',
    subtitle: 'Mapping friction points and ideating targeted onboarding fixes',
    category: 'activity',
    contentPoints: [
      'Task 1: Map the Current EcoTrack User Journey to pinpoint exactly where Gen Z users drop off during Day 1-3.',
      'Task 2: Run a team Crazy 8s sprint designing the Future State onboarding delight moment.',
      'Task 3: Conduct a silent dot-voting session (3 votes per designer) to elect the winning concept direction.',
      'Time: 40 Minutes.'
    ],
    activityTasks: [
      'Map 5 key touchpoints in current EcoTrack onboarding',
      'Run individual 8-minute Crazy 8s exercise',
      'Present concepts (1 min each) and place dot-votes'
    ],
    speakerNotes: 'Focus your sketches specifically on the drop-off point you identified in your journey map.',
    keyTakeaway: 'A great onboarding flow demonstrates product value within the first 60 seconds.',
    isBasic: false
  },
  {
    id: 22,
    dayNumber: 4,
    dayTitle: 'Ideate – Divergent & Convergent Thinking',
    slideNumberInDay: 5,
    title: 'Deliverables & Homework',
    subtitle: 'Moving from paper napkin concepts to digital wireframes',
    category: 'deliverables',
    contentPoints: [
      'In-Class: Current vs. Future User Journey Map and 1 selected winning team concept.',
      'Homework: Clean up your winning sketch with explicit annotations.',
      'Bring your finalized paper wireframe to class tomorrow ready to build digital assets in Figma.'
    ],
    homeworkTasks: [
      'Annotate your team\'s chosen paper wireframe with user intent labels',
      'Define micro-copy tone and value propositions for the 3 key screens',
      'Prepare Figma project workspace for Day 5'
    ],
    speakerNotes: 'You now have a validated direction. Tomorrow, we move from paper to pixels.',
    keyTakeaway: 'Paper sketches are cheap to throw away; code and high-fi mockups are expensive to undo.',
    isBasic: false
  },

  // DAY 5: Information Architecture & Low-Fi Wireframing (Full Access)
  {
    id: 23,
    dayNumber: 5,
    dayTitle: 'Information Architecture & Low-Fi Wireframing',
    slideNumberInDay: 1,
    title: 'DAY 5: Information Architecture & Low-Fi Wireframing',
    subtitle: 'Structure before style',
    category: 'title',
    contentPoints: [
      'Designing structural pathways before touching visual aesthetics.',
      'How mental models govern user orientation, cognitive load, and discovery.',
      'Building grayscale digital wireframes that communicate hierarchy instantly.'
    ],
    speakerNotes: 'Welcome to Day 5. Today we lay the structural steel before we pick out paint colors.',
    keyTakeaway: 'If the information architecture is broken, no amount of gorgeous UI can save the product.',
    isBasic: false
  },
  {
    id: 24,
    dayNumber: 5,
    dayTitle: 'Information Architecture & Low-Fi Wireframing',
    slideNumberInDay: 2,
    title: 'Information Architecture (IA)',
    subtitle: 'How users navigate, locate content, and build mental models',
    category: 'concept',
    contentPoints: [
      'Information Architecture defines how content is organized, labeled, and discovered.',
      'Card Sorting Methods: Open (users generate categories and labels) vs Closed (users categorize into predetermined buckets).',
      'Mobile-First Navigation Patterns: Persistent bottom tab bars (primary top-level destinations) vs Drawer menus (secondary administrative settings).'
    ],
    speakerNotes: "If users can't find the feature, the feature doesn't exist. Good IA is invisible.",
    keyTakeaway: 'Good IA feels natural and effortless; bad IA makes users feel foolish.',
    isBasic: false
  },
  {
    id: 25,
    dayNumber: 5,
    dayTitle: 'Information Architecture & Low-Fi Wireframing',
    slideNumberInDay: 3,
    title: 'Low-Fidelity Principles',
    subtitle: 'Blueprint discipline: keep it grayscale and structural',
    category: 'methodology',
    contentPoints: [
      'Grayscale Only: Absolutely no brand colors, gradients, or photography allowed at this stage.',
      'Laser Focus on Content Hierarchy: Typography scale, whitespace rhythm, CTA positioning, and user flow direction.',
      'Prevents Stakeholder Distraction: Stops stakeholders from derailing review meetings by debating button colors or font shades.'
    ],
    speakerNotes: "Low-fi wireframes are blueprints. You wouldn't paint the walls before building the foundation.",
    keyTakeaway: 'Restricting colors forces you to solve real usability, contrast, and layout problems.',
    isBasic: false
  },
  {
    id: 26,
    dayNumber: 5,
    dayTitle: 'Information Architecture & Low-Fi Wireframing',
    slideNumberInDay: 4,
    title: 'Activity: Paper to Figma',
    subtitle: 'Digitizing the 3 core onboarding screens in basic shapes',
    category: 'activity',
    contentPoints: [
      'Task: Translate your paper winning sketches into digital grayscale wireframes in Figma.',
      'Required Deliverable: 3 core screens (e.g., Welcome Value Prop, Account Setup / Connection, and Day-1 First Win / Success).',
      'Time: 60 Minutes.'
    ],
    activityTasks: [
      'Setup 3 mobile frames (393 x 852 pt for standard modern device)',
      'Use only 3 shades of gray (#111827, #6B7280, #F3F4F6) and system typography',
      'Review layout with team and verify thumb-zone reachability'
    ],
    speakerNotes: "Don't get stuck in Figma details. Use the rectangle and text tools. Move fast.",
    keyTakeaway: 'Focus on clear screen headings, one primary call-to-action per screen, and low friction.',
    isBasic: false
  },
  {
    id: 27,
    dayNumber: 5,
    dayTitle: 'Information Architecture & Low-Fi Wireframing',
    slideNumberInDay: 5,
    title: 'Deliverables & Homework',
    subtitle: 'Connecting the low-fidelity interactive flow',
    category: 'deliverables',
    contentPoints: [
      'In-Class: 3 grayscale, low-fi screens built in Figma.',
      'Homework: Link the 3 screens together using Figma\'s native prototyping connector arrows.',
      'Ensure the interactive click-through can be stepped through from Start to Completion.'
    ],
    homeworkTasks: [
      'Wireframe onboarding screens 1, 2, and 3 in Figma',
      'Add prototype connections (On Click -> Navigate To)',
      'Share viewable Figma prototype link with squad'
    ],
    speakerNotes: 'By tomorrow, your app needs to be clickable, even if it looks like a blueprint.',
    keyTakeaway: 'A clickable wireframe brings abstract flows to life in seconds.',
    isBasic: false
  },

  // DAY 6: Prototyping & Interaction Design (Full Access)
  {
    id: 28,
    dayNumber: 6,
    dayTitle: 'Prototyping & Interaction Design',
    slideNumberInDay: 1,
    title: 'DAY 6: Prototyping & Interaction Design',
    subtitle: 'Making it feel real',
    category: 'title',
    contentPoints: [
      'Mastering Figma Auto Layout, responsive constraints, and design tokens.',
      'Building reusable component architectures that scale across features.',
      'Injecting dynamic tactile realism through Smart Animate transitions.'
    ],
    speakerNotes: 'Welcome to Day 6. Today we advance from static rectangles to fluid, responsive interactive prototypes.',
    keyTakeaway: 'Prototypes are the common language between product managers, engineers, and users.',
    isBasic: false
  },
  {
    id: 29,
    dayNumber: 6,
    dayTitle: 'Prototyping & Interaction Design',
    slideNumberInDay: 2,
    title: 'Figma Mastery: Auto Layout & Components',
    subtitle: 'The professional toolset separating junior designers from mid/senior practitioners',
    category: 'methodology',
    contentPoints: [
      'Components: Reusable UI elements (buttons, inputs, cards, navigation bars). Edit the master component once, and every instance updates automatically.',
      'Auto Layout: Dynamic box-model alignment that flexes and scales predictably as copy lengths, localized languages, or screen widths change.',
      'Variables & Design Tokens: Central management of color hexes, typography scales, corner radii, and padding tokens globally.'
    ],
    speakerNotes: 'This is what separates junior designers from mid-level. Learn Auto Layout today; it will save you hundreds of hours in your career.',
    keyTakeaway: 'Design with code-like structures in mind. Auto Layout mirrors CSS flexbox directly.',
    isBasic: false
  },
  {
    id: 30,
    dayNumber: 6,
    dayTitle: 'Prototyping & Interaction Design',
    slideNumberInDay: 3,
    title: 'Activity: Build the Clickable Prototype',
    subtitle: 'Assembling interactive flows with Smart Animate and components',
    category: 'activity',
    contentPoints: [
      'Task 1: Convert basic shape primitives into reusable Figma Components with button states (Default, Pressed, Disabled).',
      'Task 2: Apply Auto Layout constraints to all screen containers and card layouts.',
      'Task 3: Configure "Smart Animate" transitions for natural sliding panels, expanding modals, and card elevations.',
      'Time: 90 Minutes.'
    ],
    activityTasks: [
      'Build Master Primary Button and Input components with Auto Layout',
      'Apply vertical / horizontal hug & fill constraints to all screens',
      'Configure Smart Animate (Ease Out, 300ms) across screen transitions'
    ],
    speakerNotes: 'Use Smart Animate to make elements slide or fade. It makes the prototype feel like a real app.',
    keyTakeaway: 'Smooth, subtle animations give users orientation and spatial continuity.',
    isBasic: false
  },
  {
    id: 31,
    dayNumber: 6,
    dayTitle: 'Prototyping & Interaction Design',
    slideNumberInDay: 4,
    title: 'Deliverables & Homework',
    subtitle: 'Validating real handheld ergonomics on actual hardware',
    category: 'deliverables',
    contentPoints: [
      'In-Class: Mid-fidelity clickable prototype running in Figma presentation mode.',
      'Homework: Test the prototype yourself on your actual physical phone using the Figma Mirror / Figma mobile app.',
      'Identify and fix broken links, awkward thumb reaches, or tap targets that are too small.'
    ],
    homeworkTasks: [
      'Download Figma mobile app and test prototype on real device',
      'Evaluate thumb ergonomics and reachability',
      'Fix broken navigation links and awkward transition easing'
    ],
    speakerNotes: 'Always test on the actual device. What looks good on a desktop monitor might have buttons that are too small for a thumb.',
    keyTakeaway: 'Desktop screens distort physical mobile scale. Always test in the palm of your hand.',
    isBasic: false
  },

  // DAY 7: Usability Testing & Inclusive Design (Full Access)
  {
    id: 32,
    dayNumber: 7,
    dayTitle: 'Usability Testing & Inclusive Design',
    slideNumberInDay: 1,
    title: 'DAY 7: Usability Testing & Inclusive Design',
    subtitle: 'Prove it works',
    category: 'title',
    contentPoints: [
      'Stress-testing your prototype in real user hands to uncover hidden friction.',
      'Measuring task success, comprehension speed, and error rates objectively.',
      'Integrating WCAG 2.2 accessibility standards to ensure inclusive design.'
    ],
    speakerNotes: 'Welcome to Day 7. Today is reality check day. We test whether our design actually works for human beings.',
    keyTakeaway: 'Usability testing is not a performance review of your creativity; it is a search for truth.',
    isBasic: false
  },
  {
    id: 33,
    dayNumber: 7,
    dayTitle: 'Usability Testing & Inclusive Design',
    slideNumberInDay: 2,
    title: 'Modern Usability Testing',
    subtitle: 'Moderated coaching vs unmoderated quantitative telemetry',
    category: 'methodology',
    contentPoints: [
      'Moderated Testing: You guide the participant in real-time, observing micro-expressions and asking thoughtful follow-ups.',
      'Unmoderated Testing: Participants execute predefined tasks asynchronously via platforms like Maze or UserTesting.',
      'Core Quantitative Usability Metrics: Task Success Rate (%), Time on Task (seconds), and Error Rate / Misclicks.'
    ],
    speakerNotes: 'Watch what they do, not what they say. If they click the wrong button, the design failed, not the user.',
    keyTakeaway: 'Never blame the user for clicking the wrong button. The design led them there.',
    isBasic: false
  },
  {
    id: 34,
    dayNumber: 7,
    dayTitle: 'Usability Testing & Inclusive Design',
    slideNumberInDay: 3,
    title: 'WCAG 2.2 & Inclusive Design',
    subtitle: 'Accessibility is a fundamental civil right and commercial requirement',
    category: 'framework',
    contentPoints: [
      'Legal and Moral Mandate: Ensuring digital products are usable by people of all abilities, neurological profiles, and temporary impairments.',
      'Color Contrast: Body text must strictly satisfy a minimum 4.5:1 contrast ratio against its surrounding background (WCAG AA).',
      'Touch Targets: Interactive elements must measure at least 44x44 CSS pixels to accommodate real thumbs and motor tremors.',
      'Screen Reader Semantics: Structured heading hierarchies (H1 -> H2 -> H3) and meaningful descriptive alt text for UI assets.'
    ],
    speakerNotes: 'Use the Stark plugin in Figma to check your contrast. If it fails WCAG, it fails the project.',
    keyTakeaway: 'Designing for accessibility creates cleaner, more readable products for every single user.',
    isBasic: false
  },
  {
    id: 35,
    dayNumber: 7,
    dayTitle: 'Usability Testing & Inclusive Design',
    slideNumberInDay: 4,
    title: 'Activity: Peer Testing & Audit',
    subtitle: 'Cross-team prototype evaluation and accessibility check',
    category: 'activity',
    contentPoints: [
      'Task 1: Write a concise test script detailing 3 specific tasks (e.g., "Complete onboarding and connect your first bank").',
      'Task 2: Swap interactive prototypes with a peer team. Run a 15-minute moderated usability session.',
      'Task 3: Execute an automated accessibility audit on your Figma design system using the Stark plugin.',
      'Time: 60 Minutes.'
    ],
    activityTasks: [
      'Draft 3 concrete, non-leading user scenario tasks',
      'Facilitate 15-minute moderated test with peer squad',
      'Log contrast ratios and touch target dimensions in audit sheet'
    ],
    speakerNotes: 'When testing, do not help the user. If they get stuck, ask, "What are you trying to do?" and take notes.',
    keyTakeaway: 'Bite your tongue when users hesitate. Their confusion is your most valuable roadmap.',
    isBasic: false
  },
  {
    id: 36,
    dayNumber: 7,
    dayTitle: 'Usability Testing & Inclusive Design',
    slideNumberInDay: 5,
    title: 'Deliverables & Homework',
    subtitle: 'Documenting usability failures into actionable bug reports',
    category: 'deliverables',
    contentPoints: [
      'In-Class: Raw usability test notes with severity ratings (Critical Blocker, Major Friction, Minor Cosmetic).',
      'Homework: Compile a 1-page Usability Report highlighting the top 3 critical issues discovered during testing.',
      'Outline concrete design solutions for each blocker before Day 8.'
    ],
    homeworkTasks: [
      'Synthesize peer testing notes and assign severity ratings (P0, P1, P2)',
      'Author 1-page concise Usability Report',
      'Draft proposed fixes for the top 3 friction points'
    ],
    speakerNotes: 'Tomorrow is all about fixing the mess we found today.',
    keyTakeaway: 'The value of testing is not finding bugs; it is prioritizing the fixes that rescue retention.',
    isBasic: false
  },

  // DAY 8: Iterate & Refine (High-Fidelity) (Full Access)
  {
    id: 37,
    dayNumber: 8,
    dayTitle: 'Iterate & Refine (High-Fidelity)',
    slideNumberInDay: 1,
    title: 'DAY 8: Iterate & Refine (High-Fidelity)',
    subtitle: 'Polishing the diamond',
    category: 'title',
    contentPoints: [
      'Translating usability feedback into high-leverage product improvements.',
      'Establishing a cohesive visual design system (Color, Typography, Elevation).',
      'Infusing micro-interactions and tactile state feedback into every control.'
    ],
    speakerNotes: 'Welcome to Day 8. Today we fix the critical usability flaws and elevate our prototype to production-grade visual fidelity.',
    keyTakeaway: 'Great visual design reinforces usability; it never disguises poor interaction architecture.',
    isBasic: false
  },
  {
    id: 38,
    dayNumber: 8,
    dayTitle: 'Iterate & Refine (High-Fidelity)',
    slideNumberInDay: 2,
    title: 'Data-Driven Iteration',
    subtitle: 'Prioritizing UX debt: fix what matters, not everything',
    category: 'methodology',
    contentPoints: [
      'Don\'t try to fix everything at once. Focus relentlessly on what moves the business metric.',
      'Use the Impact vs. Effort matrix to prioritize UX debt and engineering scope.',
      'Severity Tiers: Critical Blocker = Prevents task completion or breaks trust; Minor = Cosmetic or slightly annoying but entirely usable.'
    ],
    speakerNotes: 'You will never have enough time to fix every minor issue. Focus on the critical blockers first.',
    keyTakeaway: 'Ruthless prioritization separates shipping designers from perpetual perfectionists.',
    isBasic: false
  },
  {
    id: 39,
    dayNumber: 8,
    dayTitle: 'Iterate & Refine (High-Fidelity)',
    slideNumberInDay: 3,
    title: 'Moving to High-Fidelity',
    subtitle: 'Infusing visual hierarchy, brand identity, and micro-delight',
    category: 'concept',
    contentPoints: [
      'Visual Design System: Harmonious typography scales, distinct color tokens with purposeful semantic meanings (Success, Warning, Neutral).',
      'Authentic Imagery & Vector Assets: Replace placeholder gray boxes with intentional product visuals and illustrations.',
      'Micro-Interactions: Design deliberate hover, pressed, focused, and loading states for every interactive component.'
    ],
    speakerNotes: 'High-fi is where the brand comes to life. Ensure your typography hierarchy is clear (H1, H2, Body).',
    keyTakeaway: 'Micro-interactions communicate system state and build emotional confidence.',
    isBasic: false
  },
  {
    id: 40,
    dayNumber: 8,
    dayTitle: 'Iterate & Refine (High-Fidelity)',
    slideNumberInDay: 4,
    title: 'Activity: Iterate & Polish',
    subtitle: 'Fixing the top 3 usability bugs and applying high-fidelity styling',
    category: 'activity',
    contentPoints: [
      'Task 1: Resolve the top 3 critical usability blockers identified in yesterday\'s test report.',
      'Task 2: Apply high-fidelity visual design tokens (color palette, refined typography scale, spacing rhythm).',
      'Task 3: Finalize the interactive clickable prototype for executive review.',
      'Time: 90 Minutes.'
    ],
    activityTasks: [
      'Implement fixes for P0 usability blockers',
      'Construct a mini design system token board (Typography, Colors, Spacing)',
      'Refine interactive states and test prototype flows end-to-end'
    ],
    speakerNotes: 'This is your final product. Make it look professional enough to show a stakeholder.',
    keyTakeaway: 'Consistency in padding, typography, and corner radius is the secret to visual polish.',
    isBasic: false
  },
  {
    id: 41,
    dayNumber: 8,
    dayTitle: 'Iterate & Refine (High-Fidelity)',
    slideNumberInDay: 5,
    title: 'Deliverables & Homework',
    subtitle: 'Preparing for engineering handoff and edge case stress-testing',
    category: 'deliverables',
    contentPoints: [
      'In-Class: High-fidelity, polished, fully clickable interactive prototype.',
      'Homework: Prepare for tomorrow\'s developer handoff.',
      'Anticipate edge cases: What happens when the network fails? What does an empty bank feed look like? What if an error occurs?'
    ],
    homeworkTasks: [
      'Finalize all screen visual treatments in Figma',
      'List 4 edge cases (No internet, invalid credentials, zero data state, timeout)',
      'Prepare Figma workspace for developer inspection'
    ],
    speakerNotes: "A pretty design is useless if developers can't build it. Tomorrow, we prepare for handoff.",
    keyTakeaway: 'Designers who understand engineering constraints earn the immediate trust of developers.',
    isBasic: false
  },

  // DAY 9: Developer Handoff & UX Writing (Full Access)
  {
    id: 42,
    dayNumber: 9,
    dayTitle: 'Developer Handoff & UX Writing',
    slideNumberInDay: 1,
    title: 'DAY 9: Developer Handoff & UX Writing',
    subtitle: 'Bridging the gap',
    category: 'title',
    contentPoints: [
      'Eliminating ambiguity between design vision and software engineering.',
      'Mastering Figma Dev Mode, layout specs, and token export.',
      'Writing humane, concise, and empowering UX microcopy for edge cases.'
    ],
    speakerNotes: 'Welcome to Day 9. Today we turn designs into buildable specifications and craft the exact words users will read.',
    keyTakeaway: 'Handoff is not a one-time ceremony; it is a shared contract between design and code.',
    isBasic: false
  },
  {
    id: 43,
    dayNumber: 9,
    dayTitle: 'Developer Handoff & UX Writing',
    slideNumberInDay: 2,
    title: 'The Design-Dev Gap',
    subtitle: 'Developers need actionable specifications, not just static art',
    category: 'concept',
    contentPoints: [
      'Engineers need unambiguous specs: Spacing measurements, layout constraints, variable token names, responsive breakpoints, and assets.',
      'Figma Dev Mode: Inspecting CSS/React code, box-model spacing, component properties, and exporting SVG/PNG assets.',
      'Designing the Non-Happy Path: Empty states, error states, slow loading skeletons, and offline resilience.'
    ],
    speakerNotes: 'Junior designers only design the "happy path." Senior designers design the edge cases.',
    keyTakeaway: 'The quality of a product is revealed when things go wrong. Design the edge cases with love.',
    isBasic: false
  },
  {
    id: 44,
    dayNumber: 9,
    dayTitle: 'Developer Handoff & UX Writing',
    slideNumberInDay: 3,
    title: 'UX Writing & Microcopy',
    subtitle: 'Words are interface elements: make them clear, concise, and useful',
    category: 'framework',
    contentPoints: [
      'The 3 Pillars of UX Writing: Clear (jargon-free), Concise (scannable in seconds), and Useful (guides next action).',
      '❌ Bad / Robotic Error: "Error 404: Database connection timeout. Null exception."',
      '✅ Empathetic / Actionable Error: "We couldn\'t load your carbon savings. Please check your connection and try again. [Retry Button]"'
    ],
    speakerNotes: 'Words are design. If the user is confused by the text, the design failed.',
    keyTakeaway: 'Good copy gives users peace of mind and clarity in high-stress moments.',
    isBasic: false
  },
  {
    id: 45,
    dayNumber: 9,
    dayTitle: 'Developer Handoff & UX Writing',
    slideNumberInDay: 4,
    title: 'Activity: Edge Case Audit & Handoff',
    subtitle: 'Specifying error states, empty states, and engineering notes',
    category: 'activity',
    contentPoints: [
      'Task 1: Audit your prototype. Design 1 polished Error State and 1 inviting Empty State screen.',
      'Task 2: Author a 1-page Engineering Handoff Document (Interaction specs, animation timing curves, UX copy rules).',
      'Task 3: Practice inspecting your Figma file using Figma Dev Mode to ensure clean token names.',
      'Time: 60 Minutes.'
    ],
    activityTasks: [
      'Create 1 empty state with encouraging illustration & primary action',
      'Create 1 inline error message and alert banner',
      'Write 1-page Handoff Spec detailing interaction rules and asset links'
    ],
    speakerNotes: 'Imagine you are handing this to a developer who has zero context. What do they need to know to build it perfectly?',
    keyTakeaway: 'Every piece of ambiguity in a Figma file results in a guess in the codebase.',
    isBasic: false
  },
  {
    id: 46,
    dayNumber: 9,
    dayTitle: 'Developer Handoff & UX Writing',
    slideNumberInDay: 5,
    title: 'Deliverables & Homework',
    subtitle: 'Preparing the 5-slide stakeholder presentation deck',
    category: 'deliverables',
    contentPoints: [
      'In-Class: Finalized developer-ready Figma file + 1-page Handoff Document.',
      'Homework: Assemble a focused 5-slide presentation deck for tomorrow\'s stakeholder pitch.',
      'Narrative Focus: Frame the journey from research insights to validated solution, highlighting business impact (Day-7 retention).'
    ],
    homeworkTasks: [
      'Finalize Figma handoff documentation and dev-ready frame labels',
      'Build 5-slide stakeholder pitch deck',
      'Rehearse 3-minute oral presentation with team members'
    ],
    speakerNotes: "Tomorrow is presentation day. Focus on the story of how you solved the problem, not just the final screens.",
    keyTakeaway: 'Stakeholders remember the narrative of how you unlocked business value.',
    isBasic: false
  },

  // DAY 10: Portfolio Presentation & Critique (Full Access)
  {
    id: 47,
    dayNumber: 10,
    dayTitle: 'Portfolio Presentation & Critique',
    slideNumberInDay: 1,
    title: 'DAY 10: Portfolio Presentation & Critique',
    subtitle: 'Selling your work',
    category: 'title',
    contentPoints: [
      'Articulating design rationale persuasively to executive stakeholders.',
      'Structuring a case study that demonstrates strategic business thinking.',
      'Receiving and delivering constructive, actionable design critique.'
    ],
    speakerNotes: 'Welcome to Day 10! You made it. Today is about telling your story and pitching your solution like seasoned design leaders.',
    keyTakeaway: 'Your design skills get you in the door; your storytelling skills get your designs built.',
    isBasic: false
  },
  {
    id: 48,
    dayNumber: 10,
    dayTitle: 'Portfolio Presentation & Critique',
    slideNumberInDay: 2,
    title: 'Storytelling for Stakeholders',
    subtitle: 'Stakeholders invest in outcomes, not output or raw aesthetic effort',
    category: 'framework',
    contentPoints: [
      'Outcome vs Output: Stakeholders don\'t care how many screens you drew; they care how your design improves Day-7 retention and revenue.',
      'The Narrative Arc: Problem (The Crisis) -> Insights (The Discovery) -> Solution (The Breakthrough) -> Measurable Impact (The Result).',
      'Discipline: Keep presentations concise, punchy, and grounded in data. Exactly 5 minutes max per team.'
    ],
    speakerNotes: "Don't just show screens. Explain why you made those design decisions based on your research.",
    keyTakeaway: 'Frame every design decision around customer empathy and business return on investment.',
    isBasic: false
  },
  {
    id: 49,
    dayNumber: 10,
    dayTitle: 'Portfolio Presentation & Critique',
    slideNumberInDay: 3,
    title: 'Structuring a Case Study',
    subtitle: 'The 4-part framework that gets designers hired at top companies',
    category: 'methodology',
    contentPoints: [
      '1. The Challenge: What was the business crisis and customer friction point? (The EcoTrack brief).',
      '2. The Discovery: What did user research interviews uncover that surprised you? (Insights & JTBD).',
      '3. The Design: Show your messy iterative evolution—sketches, failures, and usability pivot moments.',
      '4. The Outcome: Usability test results, validated metrics (+20% Day-7 retention trajectory), and next steps.'
    ],
    speakerNotes: 'Showing your failures and iterations proves you are a strategic thinker, not just a pixel pusher.',
    keyTakeaway: 'Hiring managers hire problem solvers who learn from failures, not designers who pretend their first draft was flawless.',
    isBasic: false
  },
  {
    id: 50,
    dayNumber: 10,
    dayTitle: 'Portfolio Presentation & Critique',
    slideNumberInDay: 4,
    title: 'Activity: Stakeholder Pitch',
    subtitle: 'Live capstone pitches and board-level defenses',
    category: 'activity',
    contentPoints: [
      'Task: Each team delivers their 5-minute capstone pitch to the class.',
      'Format: Exactly 3 minutes presenting the narrative arc + 2 minutes answering sharp stakeholder Q&A.',
      'Total Session Time: 60–90 Minutes depending on cohort size.'
    ],
    activityTasks: [
      'Deliver 3-minute tight narrative pitch',
      'Demo high-fidelity clickable prototype in action',
      'Defend design choices during 2 minutes of stakeholder Q&A'
    ],
    speakerNotes: 'Treat the classroom like the boardroom. Speak confidently and defend your design choices with data.',
    keyTakeaway: 'Confidence comes from having real user quotes and testing data in your back pocket.',
    isBasic: false
  },
  {
    id: 51,
    dayNumber: 10,
    dayTitle: 'Portfolio Presentation & Critique',
    slideNumberInDay: 5,
    title: 'Peer Critique Framework',
    subtitle: 'Delivering constructive, actionable, and objective design feedback',
    category: 'framework',
    contentPoints: [
      '"I Like": Highlight specific moments where design solutions directly tackled the user problem effectively.',
      '"I Wish": Identify areas where cognitive load, accessibility, or visual hierarchy could be elevated.',
      '"What If": Offer lateral ideas or alternative explorations for future product iterations.',
      'Core Rule: Critique the design system and user outcomes, never the designer personally.'
    ],
    speakerNotes: 'Give constructive, actionable feedback. Critique the design, not the designer.',
    keyTakeaway: 'Giving insightful feedback to peers is the fastest way to sharpen your own design eye.',
    isBasic: false
  },
  {
    id: 52,
    dayNumber: 10,
    dayTitle: 'Portfolio Presentation & Critique',
    slideNumberInDay: 6,
    title: 'Course Wrap-Up & Next Steps',
    subtitle: 'Congratulations: You completed a full product design cycle!',
    category: 'deliverables',
    contentPoints: [
      'You navigated an entire 10-day sprint: From ambiguous brief to tested high-fidelity prototype.',
      'Next Steps: Polish this project into a portfolio case study highlighting your research and handoff rigor.',
      'Recommended Curated Resources: "The Design of Everyday Things" (Don Norman), "Refactoring UI" (Adam Wathan & Steve Schoger), and Figma Community.',
      'Thank you for an incredible 10 days of intense craft, empathy, and innovation!'
    ],
    speakerNotes: 'You now have a real-world case study. Polish it, add it to your portfolio, and start applying. Thank you for a great 10 days!',
    keyTakeaway: 'Design is not a destination; it is a lifelong habit of curiosity, empathy, and craft.',
    isBasic: false
  }
];

export const ALL_SLIDES: Slide[] = RAW_ALL_SLIDES.map((slide) => {
  const dayEnrichment = DAY_RICH_CONTENT[slide.dayNumber];
  const slideVisual = SLIDE_VISUALS[slide.id];
  const slideWithVisual: Slide = slideVisual
    ? { ...slide, visual: slideVisual }
    : slide;

  // If the slide is an activity slide, attach the full top activity
  if (slide.category === 'activity' && dayEnrichment) {
    return {
      ...slideWithVisual,
      topActivity: dayEnrichment.featuredTopActivity
    };
  }
  // If the slide is a concept/framework/methodology slide (typically slide 2 or 3 of the day), attach the real-world case study example
  if ((slide.slideNumberInDay === 2 || (slide.slideNumberInDay === 3 && slide.dayNumber === 1)) && dayEnrichment) {
    return {
      ...slideWithVisual,
      realWorldExample: dayEnrichment.featuredExample
    };
  }
  return slideWithVisual;
});
