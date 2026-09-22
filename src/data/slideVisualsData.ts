import { SlideVisual } from '../types';

export const SLIDE_VISUALS: Record<number, SlideVisual> = {
  // ==========================================
  // DAY 1: Introduction & The Real-World Brief
  // ==========================================
  1: {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop',
    alt: 'Product design team collaborating on a strategic sprint roadmap with sticky notes and digital wireframes',
    caption: 'Modern product design begins with alignment between strategy, user needs, and cross-functional team execution.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'Design Thinking: A 5-Stage Work Process for Agile Teams',
    diagramType: 'process',
    badge: 'IxDF Core Curriculum',
    keyInsights: [
      'Product design is cross-disciplinary, requiring empathy, visual craft, and strategic rigor.',
      'Sprints condense months of ambiguous debate into focused cycles of testing real prototypes.'
    ]
  },
  2: {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Cross-functional software team collaborating around high-fidelity design prototypes and sprint milestones',
    caption: 'The 10-day sprint workflow mirrors tier-one tech company design studios, guiding projects from brief to handoff.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Agile UX vs. Lean UX: Working Effectively in Cross-Functional Teams',
    diagramType: 'process',
    badge: 'NN/g Agile UX',
    keyInsights: [
      'Iterative sprints reduce project risk by validating assumptions early with real people.',
      'Deliverables build consecutively: research directly informs sketches, which inform Figma tokens and specs.'
    ]
  },
  3: {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    alt: 'The Modern Product Trio diagram showing overlap between Product Manager, Product Designer, and Tech Lead',
    caption: 'The Product Trio model: True product innovation occurs at the intersection of Desirability, Viability, and Feasibility.',
    source: 'Silicon Valley Product Group / Marty Cagan',
    sourceArticle: 'Inspired: How to Create Tech Products Customers Love – Product Trio Framework',
    diagramType: 'framework',
    badge: 'Industry Standard Trio',
    keyInsights: [
      'Product Manager owns the "Why & What" (business viability and market outcome).',
      'Product Designer owns the "Who & How" (user desirability and intuitive interface).',
      'Software Engineer owns the "Can We Build It" (technical feasibility and scalability).'
    ]
  },
  4: {
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    alt: 'AI-assisted design workflow diagram showing human empathy guiding synthetic clustering and generative divergence',
    caption: 'AI in UX: Machine intelligence speeds up divergence and pattern clustering, but human judgment directs intent and ethics.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'AI as a Collaborator in UX Research and Interface Design',
    diagramType: 'process',
    badge: 'NN/g AI UX Framework',
    keyInsights: [
      'AI acts as a copilot for rapid ideation, transcript synthesis, and scenario drafting.',
      'Critical human skills—empathy, ethical nuance, and contextual framing—cannot be outsourced.'
    ]
  },
  5: {
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    alt: 'The British Design Council Double Diamond diagram illustrating Discover, Define, Develop, and Deliver phases',
    caption: 'The Double Diamond: A framework for innovation balancing divergent exploration with convergent decisions.',
    source: 'British Design Council',
    sourceArticle: 'The Double Diamond: 19 Years of Transforming Design and Innovation',
    diagramType: 'framework',
    badge: 'Design Council Standard',
    keyInsights: [
      'Diamond 1: Discover (diverge into problems) -> Define (converge on the right problem to solve).',
      'Diamond 2: Develop (diverge into many solutions) -> Deliver (converge on the optimal tested prototype).'
    ]
  },
  6: {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    alt: 'Mobile analytics dashboard showing drop-off curves and retention cohorts for onboarding flows',
    caption: 'The Capstone Challenge: Deconstructing onboarding friction to convert casual downloads into recurring weekly habits.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'User Onboarding: How to Hook Users in the First 3 Days',
    diagramType: 'case_study',
    badge: 'Live Client Brief',
    keyInsights: [
      'Day-3 retention drops occur when users experience cognitive overload before experiencing the core value proposition.',
      'Onboarding must deliver quick dopamine wins and immediate utility rather than exhaustive tutorials.'
    ]
  },
  7: {
    url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop',
    alt: 'Designers populating a 2x2 Assumption Mapping matrix on a wall with post-it notes',
    caption: 'Assumption Mapping: Organizing beliefs along axes of Importance (High vs Low) and Evidence (Known vs Unknown).',
    source: 'Lean UX / Jeff Gothelf & Josh Seiden',
    sourceArticle: 'Lean UX: Designing with Hypotheses and Assumption Mapping',
    diagramType: 'matrix',
    badge: 'Lean UX Framework',
    keyInsights: [
      'High Importance + Low Evidence assumptions are "Leap of Faith" risks that must be tested first.',
      'Documenting assumptions explicitly prevents designers from designing for their personal biases.'
    ]
  },

  // ==========================================
  // DAY 2: Empathize – Modern User Research
  // ==========================================
  8: {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    alt: 'User researcher conducting an in-depth contextual inquiry interview with a student participant',
    caption: '"You Are Not The User": Cognitive empathy requires setting aside your own mental model to understand real user struggles.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'False-Consensus Effect: Why Designers Overestimate How Many People Think Like Them',
    diagramType: 'heuristic',
    badge: 'NN/g Core Law',
    keyInsights: [
      'The false-consensus effect causes designers to assume their tech fluency matches the target audience.',
      'Contextual observation exposes behavioral workarounds that users forget to mention verbally.'
    ]
  },
  9: {
    url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    alt: 'Research methods matrix comparing Attitudinal vs Behavioral and Qualitative vs Quantitative research',
    caption: 'The NN/g 3D Landscape of UX Research Methods: Balancing what people say vs. what people actually do.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'When to Use Which User-Experience Research Methods (The NN/g Landscape)',
    diagramType: 'framework',
    badge: 'NN/g Research Landscape',
    keyInsights: [
      'Attitudinal (Surveys, Focus Groups) tells you what users believe and articulate.',
      'Behavioral (Usability Testing, Analytics) shows you how users actually interact under real conditions.',
      'Qualitative gives the "Why"; Quantitative proves the "How Many".'
    ]
  },
  10: {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    alt: 'Root cause analysis diagram demonstrating the 5 Whys progression from surface symptom to root motivation',
    caption: 'The 5 Whys Technique: Peeling back superficial excuses to expose foundational anxieties and values.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'Root Cause Analysis in UX: Mastering the 5 Whys Interview Technique',
    diagramType: 'process',
    badge: 'IxDF Interview Method',
    keyInsights: [
      'Symptom: "I forgot to log my spending." -> Why 5: "Looking at bank balances triggers financial shame."',
      'Never ask leading questions ("Don\'t you think this button is clean?"); ask open-ended stories ("Walk me through the last time you...").'
    ]
  },
  11: {
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    alt: 'User interview protocol sheet showing active listening posture, silence pauses, and verbatim note-taking',
    caption: 'Interview Craft: The power of the 3-second silence and verbatim capturing rather than premature interpretation.',
    source: 'IDEO / Stanford d.school',
    sourceArticle: 'Design Research Ethics and Contextual Interview Protocol',
    diagramType: 'process',
    badge: 'IDEO Field Guide',
    keyInsights: [
      'Embrace pregnant pauses: When a participant finishes speaking, pause 3 seconds; they will often disclose their deepest insight.',
      'Capture exact verbatim quotes in quotation marks, not your personal summary.'
    ]
  },
  12: {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Students conducting live guerrilla user interviews across a university campus courtyard',
    caption: 'Campus Fieldwork: Engaging real peers in their natural habitat reveals candid friction and unvarnished feedback.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'Guerrilla Research: How to Conduct Fieldwork on a Dime',
    diagramType: 'case_study',
    badge: 'Fieldwork Protocol',
    keyInsights: [
      'Greet participants with a warm 10-second elevator pitch and clear duration commitment.',
      'Offer small, immediate gratitude incentives (e.g., coffee token, sticker) to establish goodwill.'
    ]
  },

  // ==========================================
  // DAY 3: Define – Synthesis & Problem Framing
  // ==========================================
  13: {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    alt: 'Affinity diagramming board with hundreds of color-coded sticky notes clustered into thematic categories',
    caption: 'Affinity Diagramming: Inductive synthesis that transforms chaotic raw interview quotes into high-signal behavioral patterns.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Affinity Diagramming: Collaboratively Review and Group UX Findings',
    diagramType: 'framework',
    badge: 'NN/g Synthesis Gold Standard',
    keyInsights: [
      'Bottom-up clustering: Group similar observations together before creating the category name.',
      'Colors should distinguish user interview participants, making consensus vs outlier points obvious at a glance.'
    ]
  },
  14: {
    url: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?q=80&w=1200&auto=format&fit=crop',
    alt: 'Empathy Map Canvas showing Says, Thinks, Does, Feels quadrants surrounding a user portrait',
    caption: 'The Empathy Map: Mapping the dissonance between what users declare publicly and what they feel privately.',
    source: 'Dave Gray (XPLANE) / NN/g',
    sourceArticle: 'Empathy Mapping: The First Step in Design Thinking',
    diagramType: 'framework',
    badge: 'Canonical Empathy Canvas',
    keyInsights: [
      '"Says" vs "Does": Users frequently say they want to save money, but their behavioral data shows impulsive food delivery.',
      'The tension between "Thinks" and "Feels" is where the most lucrative product opportunities reside.'
    ]
  },
  15: {
    url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
    alt: 'Jobs to be Done (JTBD) formula diagram contrasting functional, emotional, and social dimensions',
    caption: 'Jobs to be Done (JTBD): "People don\'t want a quarter-inch drill bit; they want a quarter-inch hole." – Theodore Levitt',
    source: 'Clayton Christensen / Harvard Business School',
    sourceArticle: 'Competing Against Luck: The Story of Innovation and Customer Choice',
    diagramType: 'framework',
    badge: 'JTBD Framework',
    keyInsights: [
      'Formula: When [Situation/Context], I want to [Motivation/Action], So that I can [Expected Outcome/Benefit].',
      'Products are "hired" to make progress in specific life moments, not to possess abstract features.'
    ]
  },
  16: {
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    alt: 'Problem framing spectrum comparing overly narrow, overly broad, and "Goldilocks" How Might We statements',
    caption: 'How Might We (HMW): Calibrating problem statements to the "Goldilocks" altitude—broad enough for creative freedom, narrow enough for focus.',
    source: 'Stanford d.school / IDEO',
    sourceArticle: 'How Might We: Framing Questions to Spark Breakthrough Solutions',
    diagramType: 'process',
    badge: 'Stanford d.school Method',
    keyInsights: [
      'Too narrow: "HMW add a red badge to button?" (Prescribes the interface).',
      'Too broad: "HMW fix world poverty?" (Overwhelms the sprint).',
      'Just right: "HMW turn weekly budget reviews into an empowering 60-second celebration?"'
    ]
  },
  17: {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Design team completing user persona archetypes with behavioral goals, quote, and technology proficiency matrix',
    caption: 'Behavioral Persona Archetypes: Anchoring design choices to empirically observed behaviors rather than demographic fluff.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Why Personas Fail and How to Make Them Work in Agile Teams',
    diagramType: 'framework',
    badge: 'NN/g Persona Rules',
    keyInsights: [
      'Ditch superficial demographics (hair color, pet names). Focus on mental models, digital habits, and frustration thresholds.',
      'A primary persona guides trade-off debates when engineering or product constraints require cutting features.'
    ]
  },

  // ==========================================
  // DAY 4: Ideate – Divergent & Convergent Thinking
  // ==========================================
  18: {
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Designer rapid sketching eight distinct screen concepts on an A4 sheet folded into 8 rectangles for Crazy 8s',
    caption: 'Crazy 8s: 8 distinct concept variations in 8 minutes. Bypassing the analytical inner critic to force creative breakthroughs.',
    source: 'Google Ventures (GV) Design Sprint / Jake Knapp',
    sourceArticle: 'Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days',
    diagramType: 'process',
    badge: 'Google Ventures Sprint',
    keyInsights: [
      'The first 2 ideas are almost always obvious clichés. Screens 5 through 8 force radical, innovative divergent approaches.',
      'Drawing speed takes precedence over artistic fidelity; clarity of user intent is what counts.'
    ]
  },
  19: {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    alt: 'User journey map showing touchpoint stages, customer actions, thoughts, and emotional valence highs and lows',
    caption: 'Customer Journey Mapping: Tracking emotional valence over time to pinpoint exactly where users experience peak friction.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Journey Mapping 101: Anatomy of an Experience Map',
    diagramType: 'framework',
    badge: 'NN/g Journey Mapping',
    keyInsights: [
      'The Peak-End Rule: Users remember the highest emotional point (positive or negative) and the final moment of an experience.',
      'Turn the deepest emotional valley into the primary target of your redesign.'
    ]
  },
  20: {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    alt: '2x2 Prioritization Matrix mapping ideas across User Value (Y-axis) and Technical Feasibility (X-axis)',
    caption: 'Idea Prioritization Matrix: Balancing user impact against engineering complexity to select high-leverage sprint candidates.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'How to Prioritize Features Using Value vs Complexity Matrices',
    diagramType: 'matrix',
    badge: 'Decision Framework',
    keyInsights: [
      'Top-Right Quadrant: High Value, High Feasibility = Immediate "Quick Wins" for the sprint prototype.',
      'Dot-voting with silent critique prevents charismatic speakers from dominating team decisions.'
    ]
  },
  21: {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    alt: 'Design team dot-voting with sticky colored circle stickers on a wall of candidate interface concepts',
    caption: 'Dot-Voting & Heatmaps: Aggregating collective team intelligence rapidly without getting trapped in cyclical debates.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Dot Voting: A Method for Democratic UX Prioritization',
    diagramType: 'process',
    badge: 'Collaborative Governance',
    keyInsights: [
      'Each team member receives 3 green dots for user value and 1 star for technical boldness.',
      'Vote silently before discussing to prevent anchoring bias.'
    ]
  },
  22: {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    alt: 'Three-panel solution sketch showing a complete user task flow with callout text explaining UI interaction rules',
    caption: 'Solution Sketching: Turning the winning Crazy 8 idea into an end-to-end 3-screen storyboard with explanatory callouts.',
    source: 'Google Ventures (GV) Design Sprint',
    sourceArticle: 'The Three-Panel Solution Sketch: Making Ideas Concrete',
    diagramType: 'process',
    badge: 'GV Sprint Standard',
    keyInsights: [
      'Self-explanatory design: The sketch must stand alone without a verbal pitch.',
      'Include clear microcopy, button labels, and system responses on each screen.'
    ]
  },

  // ==========================================
  // DAY 5: Information Architecture & Low-Fi Wireframing
  // ==========================================
  23: {
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    alt: 'Information Architecture hierarchy tree diagram showing navigation nodes, parent-child relationships, and taxomony',
    caption: 'Information Architecture (IA): Organizing digital content so navigation feels intuitive rather than like a labyrinth.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'Information Architecture: The Blueprint for Digital Experiences',
    diagramType: 'framework',
    badge: 'IxDF Core Curriculum',
    keyInsights: [
      'Miller\'s Law: Working memory holds 7 ± 2 chunks of data. Cap top-level mobile navigation at 4–5 core destinations.',
      'Card sorting tests whether your categorization matches users\' mental models.'
    ]
  },
  24: {
    url: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Ergonomic diagram of mobile phone screen showing Natural Thumb Zone (bottom), Reach Zone, and Ow Zone (top corners)',
    caption: 'Steven Hoober Mobile Thumb Zone: 49% of smartphone users interact with a single thumb. Primary actions belong in the lower third.',
    source: 'Steven Hoober / UXmatters & IxDF',
    sourceArticle: 'Designing for Mobile: The Realities of One-Handed Smartphone Ergonomics',
    diagramType: 'heuristic',
    badge: 'Mobile Ergonomics',
    keyInsights: [
      'Natural Zone (bottom green): Primary CTAs, tab bars, sheet dismiss handles.',
      'Ow Zone (top corners red): Destructive actions (delete, sign out) requiring deliberate reach to avoid accidental taps.'
    ]
  },
  25: {
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Fitts\'s Law diagram showing how target size and travel distance determine acquisition speed and error rate in touch interfaces',
    caption: 'Fitts\'s Law in Touch UI: Time to acquire a target depends on distance to target and target width. Minimum 48x48dp touch targets.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'Fitts\'s Law: The Importance of Size and Distance in User Interface Design',
    diagramType: 'heuristic',
    badge: 'IxDF Mathematical Law',
    keyInsights: [
      'Touch target rule: Screen elements should be at least 44x44pt (iOS) or 48x48dp (Android Material).',
      'Edge pinning: Mobile bottom screen edges provide infinite height because the thumb stops at the device bezel.'
    ]
  },
  26: {
    url: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?q=80&w=1200&auto=format&fit=crop',
    alt: 'Grayscale low-fidelity wireframe prototype on paper showing structural hierarchy, boxes, and placeholder text',
    caption: 'Grayscale Low-Fi Wireframing: Stripping away typography, color, and imagery to validate content hierarchy first.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Wireframing 101: When to Wireframe and How Low-Fidelity Saves Budgets',
    diagramType: 'process',
    badge: 'NN/g Best Practice',
    keyInsights: [
      'Color in low-fi wireframes distracts stakeholders into subjective debates about shades of blue instead of flow logic.',
      'Use 3 shades of gray: White (canvas), 10% Gray (containers), 80% Gray (text hierarchy).'
    ]
  },
  27: {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop',
    alt: 'Card sorting exercise with index cards organized into categories by user study participants',
    caption: 'Open vs. Closed Card Sorting: Validating nomenclature and category grouping with real university students.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Card Sorting: Uncover Users\' Mental Models for Better Information Architecture',
    diagramType: 'process',
    badge: 'NN/g Research Technique',
    keyInsights: [
      'Open Sort: Participants create their own category names (great for exploratory taxonomy).',
      'Closed Sort: Participants file cards into predefined categories (great for testing existing IA).'
    ]
  },

  // ==========================================
  // DAY 6: Prototyping & Interaction Design
  // ==========================================
  28: {
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    alt: 'Figma Auto Layout interface showing vertical and horizontal stacking, hugging vs filling, and spatial gaps',
    caption: 'Figma Auto Layout: Aligning design canvas constraints directly with CSS Flexbox mental models.',
    source: 'Figma Design Systems Community',
    sourceArticle: 'Figma Auto Layout Deep Dive: Building Responsive, Production-Grade Components',
    diagramType: 'interface',
    badge: 'Figma Production Standard',
    keyInsights: [
      'Hugging content = Button scales with text length. Filling container = Card expands across viewport.',
      'Never manually drag boxes to position them; nesting Auto Layout frames ensures fluid responsiveness.'
    ]
  },
  29: {
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    alt: 'Design tokens 3-layer architecture diagram: Global tokens, Semantic tokens, and Component tokens',
    caption: 'Design Tokens Architecture: Decoupling design decisions (color, spacing, elevation) into reusable variables.',
    source: 'Google Material Design 3 / W3C Design Tokens Community Group',
    sourceArticle: 'Material Design 3 Token Hierarchy: Global to Component Tokens',
    diagramType: 'framework',
    badge: 'W3C Token Spec',
    keyInsights: [
      'Global Token: `blue-600: #0284c7` (raw hex value).',
      'Semantic Token: `color-primary: {blue-600}` (meaningful intent in light mode).',
      'Component Token: `button-cta-bg: {color-primary}` (scoped to a specific UI widget).'
    ]
  },
  30: {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    alt: 'Component variants matrix showing button states across Default, Hover, Pressed, Focused, and Disabled',
    caption: 'Interactive State Matrix: Production components require exhaustive state coverage for every possible interaction.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'User Interface States: Designing Beyond the "Happy Path" Default State',
    diagramType: 'comparison',
    badge: 'Component Hygiene',
    keyInsights: [
      'Disabled buttons should still provide assistive hints explaining why they cannot be pressed yet.',
      'Focus states must have a minimum 3:1 contrast ratio against the surrounding background for keyboard users.'
    ]
  },
  31: {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    alt: 'Figma Smart Animate layers diagram showing matched layer naming and transition easing curves',
    caption: 'Smart Animate Mental Model: Figma matches identical layer names between frames to generate seamless physics-based transitions.',
    source: 'Figma Prototyping Guide',
    sourceArticle: 'Mastering Smart Animate in Figma: Naming Conventions and Easing Math',
    diagramType: 'process',
    badge: 'Figma Prototyping',
    keyInsights: [
      'Rule: If a layer name changes between Frame A and Frame B, Smart Animate defaults to an abrupt dissolve.',
      'Use gentle deceleration easing (ease-out) for entering elements and acceleration (ease-in) for exiting ones.'
    ]
  },
  32: {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Designers testing clickable mobile prototypes on physical smartphones in hand',
    caption: 'Testing on Real Glass: A desktop monitor distorts mobile ergonomics. Always test prototypes directly in Figma Mirror on real phones.',
    source: 'Apple Human Interface Guidelines (HIG)',
    sourceArticle: 'iOS Design Principles: Testing on Device Hardware and Physical Contexts',
    diagramType: 'case_study',
    badge: 'Hardware Reality Check',
    keyInsights: [
      'Fonts that appear readable on a 27-inch desktop monitor can be illegible outdoors under direct sunlight on a smartphone.',
      'Physical device testing reveals thumb fatigue and awkward reach positions immediately.'
    ]
  },

  // ==========================================
  // DAY 7: Usability Testing & Inclusive Design
  // ==========================================
  33: {
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    alt: 'Jakob Nielsen famous 5-user usability testing curve graph showing diminishing returns after 5 participants',
    caption: 'Jakob Nielsen\'s 5-User Law: Testing with 5 users uncovers 85% of usability issues. Zero users uncovers zero.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Why You Only Need to Test with 5 Users (Jakob Nielsen & Tom Landauer)',
    diagramType: 'framework',
    badge: 'NN/g Empirical Law',
    keyInsights: [
      'Math: Usability problems found = N * (1 - (1 - L)^n) where L = 31% chance a single user finds a bug.',
      'Run 3 iterative tests of 5 users rather than 1 giant test of 15 users; test, iterate, and re-test.'
    ]
  },
  34: {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    alt: 'Facilitator conducting a Think-Aloud usability test with a participant interacting with an iPad app',
    caption: 'The Think-Aloud Protocol: Encouraging users to verbalize their unfiltered internal monologue as they navigate.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Thinking Aloud: The #1 Usability Tool (Jakob Nielsen)',
    diagramType: 'process',
    badge: 'NN/g Essential Protocol',
    keyInsights: [
      'Neutral prompting: When a user gets stuck and asks "What should I click?", respond with "What would you expect to happen?"',
      'Never explain the interface during the test; your silence protects testing validity.'
    ]
  },
  35: {
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    alt: 'WCAG 2.2 color contrast compliance diagram demonstrating 4.5:1 ratio for body copy and 3:1 for UI elements',
    caption: 'WCAG 2.2 AA Contrast: Ensuring readability for users with low vision, color blindness, or outdoor glare.',
    source: 'W3C / Web Accessibility Initiative (WAI)',
    sourceArticle: 'Web Content Accessibility Guidelines (WCAG) 2.2 Understanding Conformance',
    diagramType: 'heuristic',
    badge: 'W3C Global Spec',
    keyInsights: [
      'Normal text (< 18pt or < 14pt bold) requires at least 4.5:1 contrast against its background.',
      'UI component borders and active focus rings require at least 3.0:1 contrast against adjacent colors.'
    ]
  },
  36: {
    url: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?q=80&w=1200&auto=format&fit=crop',
    alt: 'Usability severity rating matrix classifying findings from 0 (Cosmetic) to 4 (Usability Catastrophe)',
    caption: 'Usability Severity Ratings: Objectively triaging research findings so teams fix catastrophic blockers before cosmetic tweaks.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Severity Ratings for Usability Problems (Jakob Nielsen)',
    diagramType: 'matrix',
    badge: 'NN/g Severity Scale',
    keyInsights: [
      'Rating 4 (Catastrophe): User cannot complete core task (onboarding fails; sprint blocker).',
      'Rating 2 (Minor): User experiences hesitation but recovers independently.',
      'Evaluate severity via: Frequency (how common?), Impact (how severe?), and Persistence (does it recur?).'
    ]
  },
  37: {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop',
    alt: 'Design team compiling a usability synthesis matrix with video timestamped quotes and task completion rates',
    caption: 'Usability Synthesis: Translating observational testing video timestamps into high-conviction redesign backlog items.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'Analyzing Usability Test Data: From Qualitative Findings to Actionable Backlogs',
    diagramType: 'process',
    badge: 'Synthesis Hygiene',
    keyInsights: [
      'Quantify the qualitative: Track task completion rates and time-on-task alongside user quotes.',
      'Group usability failures by root cause rather than individual screen numbers.'
    ]
  },

  // ==========================================
  // DAY 8: Iterate & Refine (High-Fidelity)
  // ==========================================
  38: {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Impact vs Effort 2x2 matrix categorizing usability fixes into Quick Wins, Major Projects, Fill-ins, and Thankless Tasks',
    caption: 'Action Priority Matrix: Prioritizing post-testing changes to maximize student retention improvements within sprint limits.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'How to Iterate Rapidly: Action Priority Matrix for High-Velocity UX Teams',
    diagramType: 'matrix',
    badge: 'Iteration Framework',
    keyInsights: [
      'Quick Wins (High Impact, Low Effort): Clarifying ambiguous microcopy, enlarging tap targets, removing non-essential input fields.',
      'Avoid Thankless Tasks (Low Impact, High Effort) like custom 3D animations that delay the build.'
    ]
  },
  39: {
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    alt: 'Dan Saffer Microinteractions 4-step diagram showing Trigger, Rules, Feedback, and Loops & Modes',
    caption: 'Dan Saffer Microinteractions: The details that turn a sterile interface into an intuitive, responsive delight.',
    source: 'Dan Saffer / Interaction Design Foundation (IxDF)',
    sourceArticle: 'Microinteractions: Designing with Details – The 4-Part Structure',
    diagramType: 'framework',
    badge: 'IxDF Interaction Architecture',
    keyInsights: [
      '1. Trigger (user tap or system event) -> 2. Rules (what can happen) -> 3. Feedback (visual/haptic response) -> 4. Loops/Modes.',
      'Feedback must occur within 100 milliseconds for the human brain to perceive instantaneous direct manipulation.'
    ]
  },
  40: {
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    alt: 'Gestalt psychology laws of visual perception diagram showing Proximity, Similarity, Continuity, and Common Region',
    caption: 'Gestalt Principles in UI: How the human visual cortex groups visual stimuli automatically without conscious effort.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'Gestalt Principles of Visual Perception: How Designers Direct Visual Attention',
    diagramType: 'heuristic',
    badge: 'IxDF Visual Psychology',
    keyInsights: [
      'Law of Proximity: Elements close together are perceived as belonging to the same functional cluster.',
      'Law of Common Region: Cards and enclosed borders visually isolate distinct items far more effectively than blank space alone.'
    ]
  },
  41: {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    alt: 'UX Debt chart comparing technical debt and user experience friction accumulating over iterative release cycles',
    caption: 'Managing UX Debt: Recognizing inconsistent patterns and outdated components before they degrade the product experience.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'UX Debt: How It Accumulates and How to Measure It in Product Backlogs',
    diagramType: 'comparison',
    badge: 'NN/g Debt Management',
    keyInsights: [
      'UX debt manifests as conflicting button styles, multiple fonts, and orphaned user flows.',
      'Clean up design debt during Day 8 before handing off components to engineering.'
    ]
  },
  42: {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    alt: 'High-fidelity polished mobile app interface displayed with typography scale, elevation shadows, and accent tokens',
    caption: 'High-Fidelity Polish: Harmonizing typographic scale, 8pt spatial rhythm, and subtle depth to build user trust.',
    source: 'Apple Human Interface Guidelines / Material Design',
    sourceArticle: 'Visual Design Craft: Establishing Trust Through Micro-Precision and Consistency',
    diagramType: 'interface',
    badge: 'Visual Craft Benchmark',
    keyInsights: [
      'Visual aesthetics directly influence perceived usability (The Aesthetic-Usability Effect – NN/g).',
      'Users are significantly more tolerant of minor interface hiccups if the design looks polished and trustworthy.'
    ]
  },

  // ==========================================
  // DAY 9: Developer Handoff & Edge Cases
  // ==========================================
  43: {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Figma Dev Mode redlining interface showing CSS box-model paddings, typography styles, and asset export code snippets',
    caption: 'Figma Dev Mode: Eliminating guesswork by providing exact CSS properties, spacing tokens, and component property specs.',
    source: 'Figma Dev Mode Architecture',
    sourceArticle: 'Bridging Design and Engineering: The Modern Developer Handoff Workflow',
    diagramType: 'interface',
    badge: 'Figma Production Standard',
    keyInsights: [
      'Redlines should document tokens (`var(--space-4)` = 16px) rather than arbitrary pixel coordinates.',
      'Engineers shouldn\'t have to inspect raw canvas pixels; annotate layout constraints explicitly.'
    ]
  },
  44: {
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop',
    alt: 'The 8pt spatial grid system overlay on a mobile screen showing modular padding increments of 8, 16, 24, 32, and 48 pixels',
    caption: 'The 8-Point Spatial Grid: A mathematical spacing system that guarantees visual harmony and scales cleanly across screen densities.',
    source: 'Google Material Design & Apple HIG',
    sourceArticle: 'The 8pt Grid: Why Most Top Product Teams Adopt It for Spacing and Layout',
    diagramType: 'heuristic',
    badge: 'Industry Standard Rhythm',
    keyInsights: [
      'Every margin, padding, and component height should be a multiple of 8 (8, 16, 24, 32, 40, 48, 64px).',
      'Use 4px for fine sub-element adjustments (icon-to-text gaps).'
    ]
  },
  45: {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    alt: 'Edge cases matrix showing empty states, offline states, extreme character overflow, and error banners',
    caption: 'The Edge Cases Matrix: Designing for the 10% of atypical conditions that define whether a product feels robust or fragile.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Empty States and Edge Cases: Designing Beyond the Ideal Demo Scenario',
    diagramType: 'comparison',
    badge: 'NN/g Edge Case Guide',
    keyInsights: [
      'Empty State: Provide educational value and a clear primary action button rather than a blank canvas.',
      'Stress test text: Does the card break when a German name (35 characters) replaces "John Doe"?'
    ]
  },
  46: {
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    alt: 'Comparison diagram of poor vs empathetic error messaging in form inputs with inline guidance',
    caption: 'Empathetic Error Messaging: Writing clear, humane microcopy that guides users back to success without blaming them.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Error-Message Guidelines: What to Do and What to Avoid in System Errors',
    diagramType: 'comparison',
    badge: 'NN/g Error UX Rule',
    keyInsights: [
      'Never use technical error codes ("Error 0x4849") or blame users ("Invalid input!").',
      'Formula: Explain what happened plainly, why it happened, and provide an immediate corrective button.'
    ]
  },
  47: {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Design engineer and product designer pairing together at a desk reviewing component edge cases in code',
    caption: 'The Handoff Walkthrough: A collaborative synchronous walkthrough between designer and lead engineer prevents rework.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'Developer Handoff Best Practices: Collaboration Over Documentation Dumps',
    diagramType: 'process',
    badge: 'Cross-Functional Delivery',
    keyInsights: [
      'Never throw Figma links "over the wall". Walk through component variants and prototype flows interactively.',
      'Confirm that typography tokens, icon assets, and responsive breakpoints align with the design system repository.'
    ]
  },

  // ==========================================
  // DAY 10: Stakeholder Pitch & Presentation
  // ==========================================
  48: {
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
    alt: 'Design sprint lead delivering an executive presentation to stakeholders in an amphitheater room',
    caption: 'The 5-Minute Executive Pitch: Framing design solutions around business outcomes, user retention, and risk mitigation.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'How to Present UX Work to Executives and C-Suite Stakeholders',
    diagramType: 'process',
    badge: 'Executive Storytelling',
    keyInsights: [
      'Story Arc: The Problem Reality (Pain) -> Research Evidence (Proof) -> The Tested Prototype (Solution) -> Projected Impact (ROI).',
      'Lead with business impact: Executives care about retention and conversion, not which font you selected.'
    ]
  },
  49: {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Data telemetry graph showing user retention improvement curves comparing baseline app to redesigned sprint flow',
    caption: 'Defending Design with Data: Backing subjective visual decisions with empirical usability test metrics and behavioral data.',
    source: 'Nielsen Norman Group (NN/g)',
    sourceArticle: 'Defending Design Decisions: How to Use Research to Win Stakeholder Support',
    diagramType: 'case_study',
    badge: 'NN/g Data-Driven Design',
    keyInsights: [
      'Cite verbatim user quotes and video clips; stakeholders cannot argue with real customers experiencing friction.',
      'Present before-and-after task completion rates and SUS (System Usability Scale) satisfaction score jumps.'
    ]
  },
  50: {
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    alt: 'UX Portfolio case study layout showing problem statement, messy whiteboard synthesis, wireframes, and final prototype',
    caption: 'Case Study Architecture: Hiring managers look for your messy middle—how you framed trade-offs, discarded bad ideas, and learned.',
    source: 'Interaction Design Foundation (IxDF)',
    sourceArticle: 'How to Structure a UX Case Study That Gets You Hired in Tech',
    diagramType: 'framework',
    badge: 'Career & Portfolio Guide',
    keyInsights: [
      'Process over polish: Avoid showing only glossy final mockups. Document your pivot moments and what failed during testing.',
      'Clearly attribute your individual contributions within your sprint team.'
    ]
  },
  51: {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    alt: 'Design team conducting a 4Ls Sprint Retrospective: Liked, Learned, Lacked, and Longed For',
    caption: 'The Sprint Retrospective: Fostering continuous team growth through the 4Ls framework (Liked, Learned, Lacked, Longed For).',
    source: 'Agile Alliance / Atlassian Agile Coach',
    sourceArticle: 'The 4Ls Retrospective Technique: Continuous Improvement for Design Teams',
    diagramType: 'framework',
    badge: 'Agile Team Culture',
    keyInsights: [
      'Separate personal critiques from systemic process improvements.',
      'Celebrate sprint milestones and identify one workflow habit to optimize for the next product cycle.'
    ]
  },
  52: {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Graduating cohort of product designers celebrating completion of their capstone sprint with high-fives and prototypes',
    caption: 'Sprint Graduation: You now possess the end-to-end practical toolkit used by high-performance product teams worldwide.',
    source: 'Interaction Design Foundation (IxDF) & Nielsen Norman Group',
    sourceArticle: 'The Full-Stack Product Designer: Continuous Learning in a Changing Tech Landscape',
    diagramType: 'case_study',
    badge: 'Sprint Completion',
    keyInsights: [
      'You are now equipped with real-world experience: empathy, qualitative research, rapid ideation, prototyping, and handoff.',
      'Great designers never stop being curious about human behavior and everyday friction.'
    ]
  }
};
