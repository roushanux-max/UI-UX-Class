import { RealWorldExample, DetailedActivity, CampusUserTestingGuide } from '../types';

export const DAY_RICH_CONTENT: Record<number, {
  featuredExample: RealWorldExample;
  featuredTopActivity: DetailedActivity;
  campusTestingGuide: CampusUserTestingGuide;
}> = {
  1: {
    featuredExample: {
      title: 'Duolingo Redesign: The 30-Second Hook vs Friction',
      companyOrProduct: 'Duolingo Onboarding',
      context: 'Language learning mobile app with hundreds of millions of global downloads.',
      problem: 'Massive early drop-off: New users were forced through tedious 15-question language level surveys and account creation before ever learning a single word.',
      uxSolution: 'Flipped the mental model completely. Removed upfront sign-up and gave users an interactive 20-second translation game ("El gato bebe leche") right on screen 1. Only after tasting immediate fun were they asked to save their streak with an account.',
      impactOrMetric: 'Day-1 activation jumped by +19%, Day-7 retention increased by +8.2%, and Duolingo became the highest-grossing educational app globally.',
      takeaway: 'Value before friction: Never ask users for personal data or effort before providing emotional reward and immediate micro-wins.'
    },
    featuredTopActivity: {
      title: 'Top Activity: Assumption Mapping & Risk Matrix',
      tagline: 'Unpack your biases and spotlight what could kill the product before sketching',
      durationMinutes: 30,
      format: 'Squad (3 People)',
      objective: 'Identify, surface, and categorize all unconscious team assumptions regarding user behaviors, technical limits, and business goals.',
      steps: [
        {
          stepNumber: 1,
          title: 'Individual Brainstorm on Sticky Notes (7 Mins)',
          instructions: 'Each squad member writes 8–10 assumptions on stickies without speaking. E.g., "Students will check the app every day", "Students care about carbon footprint over discounts", "Campus Wi-Fi is reliable".',
          proTip: 'Write assumptions as declarations, not questions. Force yourself to expose dangerous hunches.'
        },
        {
          stepNumber: 2,
          title: 'Plot onto the 2x2 Risk Grid (15 Mins)',
          instructions: 'Draw a 2x2 grid: Horizontal axis = Known vs Unknown. Vertical axis = Low Risk vs High Risk (if we are wrong, the product dies). Debate and place each sticky note.',
          proTip: 'The Top-Right quadrant ("Unknown + High Risk") represents the foundational questions your interviews on Day 2 must investigate.'
        },
        {
          stepNumber: 3,
          title: 'Team Role Alignment & Next Steps (8 Mins)',
          instructions: 'Assign Lead Researcher, Lead Interaction, and Lead Visual. Vote on the top 3 critical hypotheses that need immediate field validation around campus.',
          proTip: 'Document this grid in FigJam or take a high-res photo for the final case study.'
        }
      ],
      templatesAndTools: ['FigJam 2x2 Matrix Template', 'Post-it Notes & Sharpies', 'Assumption Risk Cheat Sheet'],
      deliverableOutput: 'A prioritized 2x2 Assumption Matrix with 3 circled red-alert hypotheses targeted for college user validation.',
      evaluationRubric: [
        { criterion: 'Hypothesis Depth', description: 'Surfaces non-obvious psychological assumptions rather than just UI aesthetic hunches.' },
        { criterion: 'Prioritization Rigor', description: 'Clearly distinguishes existential business risks from trivial nice-to-haves.' }
      ]
    },
    campusTestingGuide: {
      targetUserGroup: 'First-year and senior students with diverse tech habits',
      collegeLocations: [
        {
          spot: 'College Library Atrium / Lobby Entrance',
          whyThisLocation: 'High foot-traffic cross-section of all majors entering and exiting campus.',
          approachScript: '"Hey there! We’re doing a quick 2-minute design sprint check for class—can we ask one quick question about how you navigate campus food/services?"'
        },
        {
          spot: 'Campus Cafeteria Outdoor Benches',
          whyThisLocation: 'Students relaxed in social groups, receptive to conversational icebreakers.',
          approachScript: '"Hi! We’re testing some hypotheses about campus daily routines. Mind if we ask you 3 quick questions while you eat?"'
        }
      ],
      testingPrepItems: ['Clipboard or iPad with assumption list', 'Sticky notes for quick quote capture', 'Small wrapped chocolates/candies as thank-you tokens'],
      ethicsAndIncentives: 'Always ask consent before recording quotes. Let them know it is strictly for a student academic design exercise.',
      quick5MinuteProtocol: [
        'Introduce yourself: "We are UX students testing ideas, not testing you."',
        'Ask about their actual behavior last week, not future hypothetical promises.',
        'Record verbatim quotes and emotional facial expressions.'
      ]
    }
  },
  2: {
    featuredExample: {
      title: 'Airbnb 2009: The 5 Whys Behind "Why Aren\'t Guests Booking?"',
      companyOrProduct: 'Airbnb Founders Crisis',
      context: 'In 2009, Airbnb was making merely $200 per week and facing immediate bankruptcy.',
      problem: 'Listings had hundreds of page views but almost zero booking conversions. The founders assumed guests wanted lower prices or discounts.',
      uxSolution: 'Joe Gebbia and Brian Chesky flew to New York to conduct in-person user interviews and stay in listings. They applied the 5 Whys and discovered: Photos were terrible 40-pixel cell phone shots taken in the dark. Guests didn’t distrust the price; they distrusted what the bedroom actually looked like. The founders rented a $5,000 professional DSLR camera and photographed 40 listings themselves.',
      impactOrMetric: 'Weekly revenue doubled instantly to $400, then $1,000, setting Airbnb on a parabolic trajectory to a $100B+ company.',
      takeaway: 'User research requires "doing things that don\'t scale" to discover the emotional truth behind data analytics.'
    },
    featuredTopActivity: {
      title: 'Top Activity: 5 Whys Laddering & Unbiased Mock Interviews',
      tagline: 'Dig 5 layers deep to uncover psychological root causes without leading questions',
      durationMinutes: 40,
      format: 'Pairs',
      objective: 'Practice unearthing emotional motivations and behavioral triggers using active listening, silent pauses, and the 5 Whys method.',
      steps: [
        {
          stepNumber: 1,
          title: 'Pair Up: Interviewer & User (5 Mins)',
          instructions: 'Partner A selects a real challenge they face on campus (e.g. finding quiet study desks, ordering food before class). Partner B acts as lead UX researcher.',
          proTip: 'Never ask "Would you like an app that does X?" (users will always say yes to be polite). Ask "Tell me about the last time you struggled with X."'
        },
        {
          stepNumber: 2,
          title: 'Run the 5 Whys Laddering (15 Mins)',
          instructions: 'Start with the surface problem. Every time the user gives an answer, gently probe with "Why was that frustrating?" or "What happened next?". Ladder down 5 times until uncovering emotional states (anxiety, embarrassment, fatigue, social pressure).',
          proTip: 'Embrace the 4-second awkward silence. People fill silences with their most authentic, unvarnished thoughts.'
        },
        {
          stepNumber: 3,
          title: 'Role Swap & Debrief (20 Mins)',
          instructions: 'Switch roles and repeat for the second partner. Document the 5-layer ladder into notes and identify the root psychological insight.',
          proTip: 'Highlight the difference between what they said and how their face/body reacted.'
        }
      ],
      templatesAndTools: ['5 Whys Ladder Worksheet', 'Voice Memos on Smartphone', 'Unbiased Question Prompt Cards'],
      deliverableOutput: 'A completed 5-layer Why-Ladder transcript containing at least one surprising emotional root insight.',
      evaluationRubric: [
        { criterion: 'Question Objectivity', description: 'Zero leading questions, zero feature pitching, strictly probing past behaviors.' },
        { criterion: 'Emotional Depth', description: 'Reaches core emotional drivers (status, stress, belonging, autonomy) beyond functional complaints.' }
      ]
    },
    campusTestingGuide: {
      targetUserGroup: 'College peers, campus cafeteria staff, library desk workers',
      collegeLocations: [
        {
          spot: 'College Quad & Central Courtyard Benches',
          whyThisLocation: 'Natural resting spot where students have 10–15 min downtime between classes.',
          approachScript: '"Hey! We’re doing a quick design research project for our UX sprint. Could we ask you about your experience around campus today for 3 minutes? We have mints/treats!"'
        },
        {
          spot: 'Dorm Commons / Study Lounges',
          whyThisLocation: 'Informal atmosphere where students speak frankly about daily friction.',
          approachScript: '"Hey guys, we’re researching student daily habits for a university project—can anyone share what annoys you most about campus scheduling?"'
        }
      ],
      testingPrepItems: ['Audio recorder on phone (with explicit verbal permission)', 'Notepad split into 2 columns: "Facts/Actions" vs "Emotions/Quotes"', 'Snacks to hand out as appreciation'],
      ethicsAndIncentives: 'Clarify that no real names will be published, only anonymized archetypes.',
      quick5MinuteProtocol: [
        'Ask about a specific past incident: "Tell me about yesterday..."',
        'Follow emotional words: When they say "It was chaotic", ask "What made it feel chaotic?"',
        'Say thank you and write down the best direct quote immediately.'
      ]
    }
  },
  3: {
    featuredExample: {
      title: 'Spotify: "Discover Weekly" and the Job-to-be-Done Framework',
      companyOrProduct: 'Spotify Music Recommendation',
      context: 'Music streaming platform with 500M+ active users and millions of catalog tracks.',
      problem: 'Spotify initially thought users wanted extensive search filters: sorting by BPM, genre sub-categories, and release date.',
      uxSolution: 'Discovered the true psychological Job-to-be-Done: "When I sit down at my desk on Monday morning, I want to feel energized and discover music that fits my taste without spending 30 minutes clicking search results, so I can enter a flow state effortlessly." They created Discover Weekly: 30 fresh tracks updated every Monday with zero configuration required.',
      impactOrMetric: 'Over 5 billion songs streamed within the first year; became Spotify\'s primary competitive moat against Apple Music.',
      takeaway: 'People do not want control knobs; they hire your product to solve an emotional struggle in a specific life moment.'
    },
    featuredTopActivity: {
      title: 'Top Activity: Sticky-Note Affinity Mapping & HMW Reframing',
      tagline: 'Turn 50 scattered qualitative quotes into 3 high-impact How-Might-We launchpads',
      durationMinutes: 45,
      format: 'Squad (3 People)',
      objective: 'Synthesize messy interview notes into thematic clusters, extract behavioral insights, and reframe core frictions into creative challenge statements.',
      steps: [
        {
          stepNumber: 1,
          title: 'Post Quotes Silently (10 Mins)',
          instructions: 'Each student writes one interview insight per sticky note (at least 15 per student). Include verbatim quotes in quotation marks.',
          proTip: 'Use color-coding: Yellow = Actions/Behaviors, Pink = Pains/Frustrations, Green = Delights/Surprises.'
        },
        {
          stepNumber: 2,
          title: 'Silent Clustering & Theme Naming (15 Mins)',
          instructions: 'Cluster stickies into organic groups without talking. Once patterns emerge, write a bold headline for each group using a human insight sentence (not just "Pricing" or "UI").',
          proTip: 'If a sticky fits in two groups, duplicate it. If a group gets too big (12+ stickies), sub-divide it.'
        },
        {
          stepNumber: 3,
          title: 'Draft 3 "How Might We" (HMW) Statements (20 Mins)',
          instructions: 'Use the formula: "How might we [Action / Verb] for [User Persona] so that [Desired Emotional/Measurable Outcome]?" Example: "How might we make meal pickup visible from 20 feet away for rushed commuters so they never check their watch anxiously?"',
          proTip: 'Dot-vote with 3 dots per person to select the #1 winning HMW statement for Day 4 ideation.'
        }
      ],
      templatesAndTools: ['FigJam / Miro Board or Physical Whiteboard', '3-color Post-it pack', 'Sticky Voting Dots'],
      deliverableOutput: 'An organized Affinity Diagram with 4–6 clear behavioral themes and 1 prioritized HMW question voted by the squad.',
      evaluationRubric: [
        { criterion: 'Insight Synthesis', description: 'Clusters reveal user mental models and underlying motivations, not just surface interface complaints.' },
        { criterion: 'HMW Calibration', description: 'Neither so narrow that only one solution exists, nor so broad that the team cannot finish in a sprint.' }
      ]
    },
    campusTestingGuide: {
      targetUserGroup: 'College students who match your target persona traits',
      collegeLocations: [
        {
          spot: 'Student Union Cafes & Outdoor Seating',
          whyThisLocation: 'Relaxed atmosphere where students have 5 minutes to review problem statements.',
          approachScript: '"Hey! We synthesized some quotes from students about campus issues. Does this statement resonate with your daily experience?"'
        },
        {
          spot: 'Campus Bus / Shuttle Stops',
          whyThisLocation: 'Students waiting with fixed 5–10 minute idle time.',
          approachScript: '"Excuse me! While waiting for the shuttle, could you take a look at these 3 campus challenges and tell us which one bugs you most?"'
        }
      ],
      testingPrepItems: ['Printed 3 HMW cards on thick index paper', 'Sharpie for quick tally marks', 'Consent & smile'],
      ethicsAndIncentives: 'Keep it snappy: Respect their bus arrival times.',
      quick5MinuteProtocol: [
        'Show 3 index cards with HMW statements.',
        'Ask: "Which one of these makes you say \'Yes, that drives me crazy\'?"',
        'Ask: "Why that one over the others?"'
      ]
    }
  },
  4: {
    featuredExample: {
      title: 'Instagram Stories: The Crazy 8s Divergence from Snapchat',
      companyOrProduct: 'Instagram (Kevin Weil & Design Squad)',
      context: 'In 2016, Instagram users were suffering from "feed anxiety"—only posting once a week after intense editing, causing platform activity to plummet.',
      problem: 'Instagram feeds had become too curated and high-pressure. Users were abandoning Instagram to post raw, goofy daily moments on Snapchat.',
      uxSolution: 'The design team ran rapid divergent ideation cycles exploring how to introduce ephemeral, pressure-free sharing without ruining the classic photo grid. Instead of burying stories in a tab, they placed circular avatar bubbles at the top of the feed and created a tap-to-advance gesture model.',
      impactOrMetric: 'Instagram Stories reached 500 million daily active users within 2 years, completely surpassing Snapchat and revitalizing the core app.',
      takeaway: 'Great solutions often adapt familiar gestures in new spatial layouts to eliminate user performance anxiety.'
    },
    featuredTopActivity: {
      title: 'Top Activity: Crazy 8s Rapid Sketching & Dot-Voting Matrix',
      tagline: '8 distinct visual ideas in 8 intense minutes to break through conventional thinking',
      durationMinutes: 45,
      format: 'Squad (3 People)',
      objective: 'Push past your first, obvious idea and force radical divergence before converging on a single high-potential concept.',
      steps: [
        {
          stepNumber: 1,
          title: 'Fold Paper into 8 Rectangles (2 Mins)',
          instructions: 'Take a plain sheet of A4 printer paper and fold it in half three times to create 8 numbered rectangular panels. Grab a thick black marker.',
          proTip: 'Use a thick pen so you cannot get trapped drawing tiny, fussy UI details.'
        },
        {
          stepNumber: 2,
          title: 'The 8-Minute Sprint: 60 Seconds Per Box (8 Mins)',
          instructions: 'Set a loud timer for 60 seconds. Everyone sketches Idea #1. When the chime sounds, immediately shift to Box #2. Repeat for all 8 boxes. No stopping, no judging.',
          proTip: 'Ideas 1–3 are usually generic copies of existing apps. Ideas 5–8 are where wild, innovative concepts get born.'
        },
        {
          stepNumber: 3,
          title: 'Silent Art Gallery & 3-Dot Voting (15 Mins)',
          instructions: 'Tape all sheets to the wall or take photos into FigJam. Each person gets 3 sticky dots to silently vote on the specific sketches or individual UI micro-mechanisms they love.',
          proTip: 'You can vote on a single clever button or swipe gesture inside someone else\'s sketch.'
        },
        {
          stepNumber: 4,
          title: 'Concept Fusion into The Winning Flow (20 Mins)',
          instructions: 'The squad synthesizes the top-voted elements into a cohesive 3-screen storyboard ready to be wireframed on Day 5.',
          proTip: 'Name your concept (e.g. "The 1-Tap Lunch Ticket Flow").'
        }
      ],
      templatesAndTools: ['A4 White Paper Sheets', 'Pilot Fineliner or Sharpie Pens', 'Color Sticky Dots / FigJam Stamp tool'],
      deliverableOutput: 'A complete set of Crazy 8 sketches (24 total across squad) and 1 consolidated 3-frame solution storyboard.',
      evaluationRubric: [
        { criterion: 'Visual Divergence', description: 'Sketches explore genuinely distinct approaches (e.g. voice, map, swipe, barcode) rather than subtle variations of one button.' },
        { criterion: 'Feasibility vs Ambition', description: 'Concept tackles the core friction while remaining buildable within a 4-week student sprint.' }
      ]
    },
    campusTestingGuide: {
      targetUserGroup: 'Peers in college dining halls, quad lawns, and club tables',
      collegeLocations: [
        {
          spot: 'Campus Quad Lawn & Picnic Tables',
          whyThisLocation: 'Casual setting where students can glance at paper sketches without formal pressure.',
          approachScript: '"Hey! We made 3 rough sketches of an idea to fix campus cafeteria lines. Could you point to the one that makes the most sense to you?"'
        },
        {
          spot: 'College Engineering / Arts Lab Lounge',
          whyThisLocation: 'Creative peers who give candid feedback on layout intuitiveness.',
          approachScript: '"Hey friends, quick 60-second sanity check: Looking at these 3 rough panels, what do you think this screen does?"'
        }
      ],
      testingPrepItems: ['Top 2 winning paper sketches mounted on stiff cardboard', 'Index cards to write down first impressions', 'Highlighter marker'],
      ethicsAndIncentives: 'Praise their critique: Tell them "Tear it apart—the rougher your feedback, the better our grade!"',
      quick5MinuteProtocol: [
        'Hand them the paper sketch with zero explanation.',
        'Ask: "Without me telling you, what do you think happens when you tap here?"',
        'Notice where their eyes linger or where they look confused.'
      ]
    }
  },
  5: {
    featuredExample: {
      title: 'Uber: Stripping the Grayscale Information Architecture to 1 Goal',
      companyOrProduct: 'Uber Mobile Wireframing',
      context: 'Ride-hailing service operating in 10,000+ cities with millions of rides booked hourly.',
      problem: 'Early version had tabs for history, settings, vehicle types, fare calculators, and news updates cluttering the home viewport.',
      uxSolution: 'Radical grayscale wireframe reduction: The entire home screen was simplified into an interactive GPS map and a single prominent input box: "Where to?". Everything else (payment methods, split fare, car size) was deferred progressively until after the destination was established.',
      impactOrMetric: 'Booking completion speed dropped from 4 minutes to under 18 seconds, driving global adoption and setting the benchmark for mobile IA.',
      takeaway: 'Information Architecture is not about organizing everything you have; it is about sequencing decisions so users never feel cognitive overload.'
    },
    featuredTopActivity: {
      title: 'Top Activity: Hybrid Card Sorting & Grayscale Wireflow Blueprint',
      tagline: 'Structure the navigation hierarchy and draw clean grayscale screens before touching colors',
      durationMinutes: 60,
      format: 'Squad (3 People)',
      objective: 'Establish a clear mental model navigation hierarchy using card sorting, and build 3 clean grayscale mobile wireframes in Figma.',
      steps: [
        {
          stepNumber: 1,
          title: 'Card Sort on Feature Priorities (15 Mins)',
          instructions: 'Write 20 potential screen elements on index cards (e.g. "Live wait time", "Price", "Token code", "Nutritional facts", "Chef notes"). Have a peer sort them into: 1. Must see immediately, 2. Secondary tap, 3. Settings/Footer.',
          proTip: 'Items placed in "Must see immediately" become your primary mobile viewport real estate.'
        },
        {
          stepNumber: 2,
          title: 'Wireframe Rules: Grayscale Only (25 Mins)',
          instructions: 'In Figma, build the 3 core screens using ONLY shades of gray (#FFFFFF, #F1F5F9, #94A3B8, #0F172A). Absolute ban on brand colors, photos, or decorative illustrations.',
          proTip: 'Use real placeholder copy instead of "Lorem Ipsum". If copy doesn\'t fit in grayscale, it won\'t work in color.'
        },
        {
          stepNumber: 3,
          title: 'Wireflow Connection & Logic Check (20 Mins)',
          instructions: 'Draw Figma prototype noodles connecting: Screen 1 (Discovery/Input) -> Screen 2 (Action/Decision) -> Screen 3 (Confirmation/State). Test thumb-reach ergonomics.',
          proTip: 'Ensure primary action button is in the natural bottom-thumb zone, not top corners.'
        }
      ],
      templatesAndTools: ['Figma Mobile Wireframe Kit (iOS/Android Frames)', 'Index Cards for Card Sorting', '8pt Grid Starter File'],
      deliverableOutput: 'A 3-screen clickable grayscale wireflow in Figma built strictly on an 8pt grid with zero decorative styling.',
      evaluationRubric: [
        { criterion: 'Visual Hierarchy', description: 'Sizes, weights, and spacing clearly communicate importance without using any color.' },
        { criterion: 'Cognitive Sequencing', description: 'User is prompted for one logical decision at a time without extraneous clutter.' }
      ]
    },
    campusTestingGuide: {
      targetUserGroup: 'Students walking in campus corridors or sitting in library reading rooms',
      collegeLocations: [
        {
          spot: 'College Library 2nd Floor Group Study Tables',
          whyThisLocation: 'Quiet setting where students can look at grayscale Figma screens on a phone.',
          approachScript: '"Hey! We have a quick 2-minute grayscale layout test on my phone. Can you try tapping where you\'d expect to order?"'
        },
        {
          spot: 'Campus Bookstore Lounge',
          whyThisLocation: 'Students browsing or resting between errands.',
          approachScript: '"Hi! We’re testing if this mobile wireframe layout makes sense. Could you try completing one simple action?"'
        }
      ],
      testingPrepItems: ['Figma app installed on phone (Figma Mirror ready)', 'Phone brightness set to 100%', 'Notepad for time-to-first-click notes'],
      ethicsAndIncentives: 'Remind them: "The design is in black-and-white on purpose so we can test the structure, not the colors."' ,
      quick5MinuteProtocol: [
        'Open screen 1 on your phone and place it in their hands.',
        'Give one prompt: "Find food with less than a 5-minute wait and order it."',
        'Observe where their thumb taps first without intervening.'
      ]
    }
  },
  6: {
    featuredExample: {
      title: 'Tinder: The "Swipe Right" Micro-Interaction & Spatial Metaphor',
      companyOrProduct: 'Tinder Interaction Design (Sean Rad & Jonathan Badeen)',
      context: 'Mobile dating application launched on college campuses in 2012.',
      problem: 'Traditional dating sites had 50-field profiles and clunky lists that felt like evaluating corporate resumes. Mobile users hated clicking tiny buttons.',
      uxSolution: 'Badeen noticed how a physical deck of playing cards feels tactile. He engineered the card-swipe gesture: Swiping right = Like, Swiping left = Pass. Paired with immediate visual tilt, spring physics, and celebratory modal animations ("It’s a Match!"), it transformed high-stakes rejection into an addictive, frictionless game.',
      impactOrMetric: 'Over 1 billion daily swipes within 18 months, revolutionizing mobile interaction models across e-commerce, job hunting, and news apps.',
      takeaway: 'Great interaction design uses tactile physical metaphors to reduce cognitive friction and trigger emotional reward loops.'
    },
    featuredTopActivity: {
      title: 'Top Activity: Figma Auto Layout Masterclass & Smart Animate Loop',
      tagline: 'Build fully responsive components and silky smooth micro-interactions in Figma',
      durationMinutes: 90,
      format: 'Squad (3 People)',
      objective: 'Master nested Figma Auto Layout (Shift+A), component variants, state toggles (Default, Hover, Active, Disabled), and Smart Animate screen transitions.',
      steps: [
        {
          stepNumber: 1,
          title: 'Auto Layout Button & Card System (25 Mins)',
          instructions: 'Build a universal Button component with Auto Layout (horizontal padding 16px, vertical 12px). Create variants: Primary, Secondary, Ghost, Loading. Test that changing the label text dynamically resizes the container.',
          proTip: 'Never use fixed width on buttons or cards. Always use "Fill container" or "Hug contents".'
        },
        {
          stepNumber: 2,
          title: 'Interactive Component States (25 Mins)',
          instructions: 'Create an interactive Toggle and Quantity Counter (+ / -). Set up Figma Component Variants with "While hovering" and "While pressing" state changes.',
          proTip: 'Set transition curve to "Ease Out" (200ms) for snappy, professional responsiveness.'
        },
        {
          stepNumber: 3,
          title: 'Smart Animate Screen Transition (40 Mins)',
          instructions: 'Connect Screen 1 (Collapsed Token) to Screen 2 (Expanded Active Live Ticket). Match layer names exactly (e.g. #token-card) on both frames. Set transition to "Smart Animate" with Spring (300ms). Preview on phone via Figma app.',
          proTip: 'Identical layer naming across both frames is required for Figma Smart Animate to morph elements seamlessly.'
        }
      ],
      templatesAndTools: ['Figma Starter File with Pre-built Tokens', 'Figma Mobile App for Live Mirroring', 'Auto Layout Cheat Sheet'],
      deliverableOutput: 'A clickable, physics-responsive mobile prototype in Figma with interactive button states and a morphing Smart Animate transition.',
      evaluationRubric: [
        { criterion: 'Auto Layout Rigor', description: 'Zero floating detached layers; all components dynamically adapt when text labels change length.' },
        { criterion: 'Animation Physics', description: 'Transitions feel natural, swift (150–300ms), and informative rather than sluggish or gimmicky.' }
      ]
    },
    campusTestingGuide: {
      targetUserGroup: 'College students who use popular mobile apps daily',
      collegeLocations: [
        {
          spot: 'College Coffee Shop Counter / Waiting Area',
          whyThisLocation: 'Students waiting 3–5 minutes for latte or sandwich orders.',
          approachScript: '"Hey! We built a prototype interaction on Figma—want to test out this tap animation and tell us if it feels smooth?"'
        },
        {
          spot: 'Student Union Game Room / Pool Tables',
          whyThisLocation: 'Energetic, tech-savvy students eager to test interactive digital toys.',
          approachScript: '"Hey! Quick 1-minute test: Check out this button interaction on our phone and tell us what you feel."'
        }
      ],
      testingPrepItems: ['Figma Mobile App loaded with prototype offline-cached', 'Clean microfiber cloth to wipe phone screen', 'Device in Do-Not-Disturb mode'],
      ethicsAndIncentives: 'Let them play freely: Watch their fingers without giving instructions.',
      quick5MinuteProtocol: [
        'Hand them your device with the Figma prototype running in full screen.',
        'Watch where they attempt to swipe, tap, or drag.',
        'Ask: "Did anything feel sticky, confusing, or surprisingly satisfying?"'
      ]
    }
  },
  7: {
    featuredExample: {
      title: 'Gov.uk & Apple: Inclusive Design and High-Contrast Contrast Audits',
      companyOrProduct: 'GOV.UK Design System & Apple Accessibility',
      context: 'Public sector digital services used by 67 million citizens, including elderly, visually impaired, and neurodivergent individuals.',
      problem: 'Stylish trendy light-gray fonts (#A0AEC0) and tiny 12px links looked elegant to 24-year-old designers on MacBook Retina screens, but were literally invisible in sunlight or to people with low vision or cataracts.',
      uxSolution: 'Instituted mandatory WCAG 2.2 AA testing: 4.5:1 minimum contrast ratio for text, minimum 44x44px touch targets for tremors/arthritis, and clear text labels instead of ambiguous mystery-meat icons. Apple similarly built VoiceOver screen readers directly into iOS core frameworks.',
      impactOrMetric: 'Reduced form completion errors by 41% across tens of millions of users; became the worldwide gold standard for digital accessibility.',
      takeaway: 'Accessibility is not a constraint that limits design; designing for edge cases makes the experience better for everyone under stress, glare, or fatigue.'
    },
    featuredTopActivity: {
      title: 'Top Activity: Moderated 5-Person Usability Test & Severity Matrix',
      tagline: 'Put your prototype in real hands, watch in silence, and document actual failure points',
      durationMinutes: 60,
      format: 'Squad (3 People)',
      objective: 'Run structured usability tests with real students, record task completion rates, track time-on-task, and catalog bugs by business severity.',
      steps: [
        {
          stepNumber: 1,
          title: 'Write 3 Objective Task Scenarios (15 Mins)',
          instructions: 'Never say "Click the green button". Frame as a real human scenario: "You have 10 minutes before class. Order a vegetarian sandwich from the cafeteria and find out when to pick it up."',
          proTip: 'Print or display the task scenario on an index card so the user can re-read it without asking you.'
        },
        {
          stepNumber: 2,
          title: 'Squad Roles for Testing (10 Mins)',
          instructions: 'Assign roles: Person 1 = Moderator (reads prompt, maintains poker face, never helps user), Person 2 = Notetaker (records exact timestamps and clicks), Person 3 = Camera/Observer (records facial frustration and hesitation).',
          proTip: 'When the user asks "Did I do it right?", respond with: "What do you think happened?"'
        },
        {
          stepNumber: 3,
          title: 'Run 3 Test Rounds & Plot Bug Severity (35 Mins)',
          instructions: 'Test with 3 different students around campus. Catalog issues into 3 tiers: Critical Blocker (user gave up), Friction Point (hesitated > 10 seconds), Cosmetic (misread copy).',
          proTip: 'Calculate Task Success Rate: (Completed Tasks / Total Tasks) * 100.'
        }
      ],
      templatesAndTools: ['Usability Test Script Template', 'Stark Accessibility Plugin for Figma', 'Bug Severity 3-Tier Grid'],
      deliverableOutput: 'A 1-page Usability Test Report detailing Task Completion Rate (%), average time-on-task, and top 3 prioritized fixes.',
      evaluationRubric: [
        { criterion: 'Moderator Neutrality', description: 'Moderator gave zero hints or leading coaching; allowed user to experience realistic friction.' },
        { criterion: 'Actionable Reporting', description: 'Identified root causes of failure rather than surface cosmetic preferences.' }
      ]
    },
    campusTestingGuide: {
      targetUserGroup: 'Real students sitting in cafeterias, library commons, or campus benches',
      collegeLocations: [
        {
          spot: 'Central Campus Cafeteria Seating Area',
          whyThisLocation: 'The exact environment where users will face noise, distractions, and multitasking.',
          approachScript: '"Hey! We’re conducting a 5-minute usability test for our UX sprint. Would you be willing to try completing 2 tasks on this app prototype? We have snacks as a thank-you!"'
        },
        {
          spot: 'College Library Group Study Rooms',
          whyThisLocation: 'Students can speak their thoughts aloud without disturbing quiet study areas.',
          approachScript: '"Hey everyone! We have a quick interactive prototype test. Anyone want to take a 4-minute study break to try it out?"'
        }
      ],
      testingPrepItems: ['Printed Task Scenario Card', 'Stopwatch / timer on secondary phone', 'Gift candies or stickers for participants'],
      ethicsAndIncentives: 'Always ask: "May we write down notes on what you do? We are testing our design, not your intelligence."',
      quick5MinuteProtocol: [
        'Hand them the task scenario card and the phone prototype.',
        'Instruct: "Please think out loud as you tap. Tell us what you are looking for."',
        'Do NOT touch the phone or guide their finger. Record timestamp when task succeeds or fails.'
      ]
    }
  },
  8: {
    featuredExample: {
      title: 'Linear & Stripe: Micro-Interactions, Polish, and The Effort/Impact Matrix',
      companyOrProduct: 'Linear Issue Tracker & Stripe Checkout',
      context: 'High-growth developer platforms renowned for obsessive UI polish and keyboard efficiency.',
      problem: 'Competitors had bloated feature lists but sluggish, frustrating interfaces with inconsistent font styles, jarring modal flashes, and broken keyboard navigation.',
      uxSolution: 'Linear prioritized high-leverage polish: 60fps micro-animations, consistent 4px token spacing, keyboard shortcuts (Cmd+K), and subtle haptic feedback. Stripe created the single-line credit card input that auto-formats card numbers, expiry dates, and CVC codes in one continuous fluid motion.',
      impactOrMetric: 'Linear achieved cult status among Silicon Valley engineers with zero marketing spend; Stripe reached a $70B+ valuation with the highest checkout conversion in the world.',
      takeaway: 'Craft is product strategy. When an interface feels instantaneous and respectful of user attention, trust and engagement skyrocket.'
    },
    featuredTopActivity: {
      title: 'Top Activity: The 2x2 UX Debt Matrix & High-Fidelity Design System Tokens',
      tagline: 'Separate must-fix usability bugs from aesthetic nice-to-haves and lock in global tokens',
      durationMinutes: 90,
      format: 'Squad (3 People)',
      objective: 'Triage usability test feedback using an Effort vs Impact matrix, and apply a cohesive design system (color, typography, spatial tokens) across all final screens.',
      steps: [
        {
          stepNumber: 1,
          title: 'Plot Test Feedback on Impact / Effort Grid (20 Mins)',
          instructions: 'Take every bug, friction point, and student quote from Day 7. Plot onto 2x2: Horizontal = Engineering Effort (Low to High). Vertical = User Impact (Low to High). Circle the "Quick Wins" (High Impact, Low Effort).',
          proTip: 'Ignore Low Impact / High Effort requests (the "Money Pit" trap).'
        },
        {
          stepNumber: 2,
          title: 'Establish Global Design Tokens in Figma (30 Mins)',
          instructions: 'Define Figma Color Styles: Primary Accent (e.g. Emerald 500), Surface Neutral (#0F172A), Slate Dark (#020617), Success (#22C55E), Error (#EF4444). Define Typography Scales (Display 28px, H2 20px, Body 16px, Caption 12px).',
          proTip: 'Link all layers to styles. If you change the Primary Color style once, all 15 screens should update instantly.'
        },
        {
          stepNumber: 3,
          title: 'Prototype Final Polish & Micro-Interactions (40 Mins)',
          instructions: 'Update the high-fidelity screens based on the top 3 usability fixes. Add subtle loading spinners, button ripple states, and success toasts.',
          proTip: 'Test contrast in Figma Stark plugin to ensure all final screens remain 100% WCAG 2.2 AA compliant.'
        }
      ],
      templatesAndTools: ['Figma Global Design Tokens Library', 'Effort vs Impact Prioritization Grid', 'Micro-Interaction Easing Guide'],
      deliverableOutput: 'A polished high-fidelity mobile prototype with unified design system tokens and resolved usability bugs.',
      evaluationRubric: [
        { criterion: 'Token Consistency', description: 'All colors, paddings, and font sizes reference global Figma styles with zero hardcoded arbitrary values.' },
        { criterion: 'Evidence of Usability Iteration', description: 'Clear before-and-after proof showing how Day 7 usability failures were fixed.' }
      ]
    },
    campusTestingGuide: {
      targetUserGroup: 'Students previously interviewed or fresh peers in campus dining halls',
      collegeLocations: [
        {
          spot: 'College Campus Coffee Bar Tables',
          whyThisLocation: 'Great spot for visual side-by-side preference testing ("Version A vs Version B").',
          approachScript: '"Hey! We fixed some confusing parts of our app based on student feedback yesterday. Can we show you the before and after for 60 seconds?"'
        },
        {
          spot: 'Design & Architecture Studio Commons',
          whyThisLocation: 'Peers with sharp visual eyes who notice spacing, alignment, and typographic hierarchy.',
          approachScript: '"Hey! Mind doing a 2-minute visual polish review on our high-fi Figma mobile prototype?"'
        }
      ],
      testingPrepItems: ['Phone running high-fi interactive prototype with real images and polished text', 'Comparison screenshot showing the older wireframe vs polished high-fi'],
      ethicsAndIncentives: 'Show them how student quotes directly shaped the new design.',
      quick5MinuteProtocol: [
        'Hand them the updated high-fidelity prototype.',
        'Ask: "Does this feel like a real app from the App Store?"',
        'Ask: "What element feels the highest quality? What feels unpolished?"'
      ]
    }
  },
  9: {
    featuredExample: {
      title: 'Shopify Polaris: The Handoff System That Bridges Design & Engineering',
      companyOrProduct: 'Shopify Polaris Design System',
      context: 'E-commerce platform powering millions of online merchants generating over $200B in GMV.',
      problem: 'Designers handed off beautiful static Figma mockups with no specs for loading states, 404 errors, long German/Japanese product names, or slow 3G network drops. Engineers had to guess, resulting in buggy, inconsistent production code.',
      uxSolution: 'Created the Polaris Design System and Handoff Standard: Every component must document 4 edge states (Empty, Error, Partial, Loading), exact tokens (padding: 16px, border-radius: 8px), and responsive viewport breakpoints. In Figma Dev Mode, engineers inspect exact CSS/React props directly.',
      impactOrMetric: 'Cut sprint delivery cycle times by 35% and virtually eliminated visual regression bugs between Figma and production code.',
      takeaway: 'Design is not complete when Figma looks pretty; design is complete when it is accurately built in code and handles real-world edge cases.'
    },
    featuredTopActivity: {
      title: 'Top Activity: Figma Dev Mode Specs, Edge Case Matrix & UX Microcopy',
      tagline: 'Document error states, loading skeletons, and write human microcopy ready for engineers',
      durationMinutes: 60,
      format: 'Squad (3 People)',
      objective: 'Author production-grade developer specifications using Figma Dev Mode, document the 4 vital edge cases, and refine all microcopy.',
      steps: [
        {
          stepNumber: 1,
          title: 'The 4 Edge Cases Audit (20 Mins)',
          instructions: 'For your core screen, design and document 4 critical edge states: 1. Zero/Empty State (first time opening the app), 2. Loading State (skeleton shimmer while Wi-Fi fetches data), 3. Error State (network dropped or payment failed), 4. Extreme Data (user has a 45-character name or orders 20 items).',
          proTip: 'Never show a generic "Error 500" message. Write helpful recovery copy: "We couldn’t connect to the cafeteria. Check your Wi-Fi or tap to retry."'
        },
        {
          stepNumber: 2,
          title: 'Figma Dev Mode Labeling & Token Redlines (20 Mins)',
          instructions: 'Toggle Figma Dev Mode. Add section marks: "Ready for Dev". Mark component properties, annotate spacing tokens (padding: 16px, gap: 12px), and export SVG asset vectors.',
          proTip: 'Group components logically so a front-end React developer can copy CSS flexbox properties directly.'
        },
        {
          stepNumber: 3,
          title: '1-Page Engineering Handoff Summary (20 Mins)',
          instructions: 'Write a bulleted 1-page Handoff README: Scope, User Flow Links, Asset Exports, API Data Requirements, and Accessibility Specs (alt tags and tap targets).',
          proTip: 'Have your Lead Visual and Lead Interaction sign off on the handoff doc.'
        }
      ],
      templatesAndTools: ['Figma Dev Mode Annotations', '1-Page Developer Handoff Template', 'Edge Case Checklist (Empty, Loading, Error, Extreme)'],
      deliverableOutput: 'A "Ready for Dev" marked Figma file with 4 edge states and a 1-page Engineering Handoff Spec Document.',
      evaluationRubric: [
        { criterion: 'Edge Case Thoroughness', description: 'All error and empty states provide clear, humane paths to recovery without dead ends.' },
        { criterion: 'Dev Readiness', description: 'Specs and tokens are clear enough that an engineer could build the screen without asking questions.' }
      ]
    },
    campusTestingGuide: {
      targetUserGroup: 'Computer science / software engineering students in college labs',
      collegeLocations: [
        {
          spot: 'Computer Science Department Coding Labs / Hub',
          whyThisLocation: 'Real student developers who can review your Figma specs from an engineering perspective.',
          approachScript: '"Hey! We’re doing a UX sprint handoff. As a developer, could you look at our Figma Dev Mode spec and tell us if anything is ambiguous or missing?"'
        },
        {
          spot: 'College Hackathon / Club Room',
          whyThisLocation: 'Students accustomed to building apps from UI designs on tight deadlines.',
          approachScript: '"Hey hackers! Quick 3-minute sanity check: If someone handed you this Figma spec, could you build this component without getting stuck?"'
        }
      ],
      testingPrepItems: ['Laptop with Figma Dev Mode open', 'List of React component names', 'Notepad to record developer questions'],
      ethicsAndIncentives: 'Value their technical feedback: Ask them what makes design files painful to code.',
      quick5MinuteProtocol: [
        'Show the developer the Figma Dev Mode screen.',
        'Ask: "Where would you start coding this? Are the layout rules and spacing clear?"',
        'Ask: "What edge case or error scenario are you unsure how to handle?"'
      ]
    }
  },
  10: {
    featuredExample: {
      title: 'Steve Jobs & The iPhone 2007: The Narrative Arc of Great Pitches',
      companyOrProduct: 'Apple Keynote: The 2007 iPhone Presentation',
      context: 'The most famous product keynote in technological history, introducing the modern smartphone.',
      problem: 'Competitors like BlackBerry, Moto Q, and Nokia had physical plastic keyboards that took up 50% of the phone whether you were typing or watching video.',
      uxSolution: 'Jobs didn’t start by showing circuit boards or technical specifications. He told a 4-part story: 1. The Crisis: "Current phones are not smart, and they are not easy to use." 2. The Discovery: Physical keyboards are rigid; software keyboards can adapt to any app. 3. The Breakthrough: "A widescreen iPod with touch controls, a revolutionary mobile phone, and a breakthrough internet communicator... these are not 3 separate devices: this is one device, and we are calling it iPhone." 4. The Live Demo: Scrolling through music with a single finger swipe.',
      impactOrMetric: 'Over 2.3 billion iPhones sold to date, completely transforming human civilization and business.',
      takeaway: 'Stakeholders and investors never buy technical features; they buy into a transformative story of human progress.'
    },
    featuredTopActivity: {
      title: 'Top Activity: 5-Minute Capstone Pitch & The 3-Part Critique Circle',
      tagline: 'Deliver a high-stakes, data-backed presentation and master the "I Like / I Wish / What If" framework',
      durationMinutes: 90,
      format: 'Class-wide',
      objective: 'Present your completed 10-day capstone design sprint to class stakeholders in exactly 3 minutes + 2 minutes Q&A, and provide professional peer critiques.',
      steps: [
        {
          stepNumber: 1,
          title: 'Squad Rehearsal: The 3-Minute Hard Stop (20 Mins)',
          instructions: 'Rehearse with a live stopwatch. Slide 1: The Crisis (Brief & Assumptions) [30s]. Slide 2: Research & 5 Whys Insight [45s]. Slide 3: The Breakthrough Solution & Interactive Prototype [60s]. Slide 4: Testing Metrics (+20% Day-7 retention) & Next Steps [45s].',
          proTip: 'Designate who clicks the prototype so the speaker never stumbles over screen transitions.'
        },
        {
          stepNumber: 2,
          title: 'Live Pitch to Stakeholder Board (40 Mins)',
          instructions: 'Each squad presents to the class and guest reviewers. At 3 minutes, a gong rings. The next 2 minutes are reserved for sharp stakeholder defense questions ("Why this over a mobile website?", "How does this scale?").',
          proTip: 'Always cite real user quotes and testing data to defend your design choices.'
        },
        {
          stepNumber: 3,
          title: 'Structured Peer Critique Circle (30 Mins)',
          instructions: 'Peers provide written feedback using the professional 3-part formula: "I LIKE" (what worked brilliantly), "I WISH" (where friction or visual confusion remained), "WHAT IF" (visionary lateral suggestions).',
          proTip: 'Never say "I don\'t like this color". Say: "I wish the contrast on the secondary token was higher to pass WCAG AA in bright sunlight."'
        }
      ],
      templatesAndTools: ['5-Slide Stakeholder Pitch Deck Template', 'Live Classroom Stopwatch / Countdown Timer', 'Peer Critique Feedback Slips (I Like, I Wish, What If)'],
      deliverableOutput: 'A delivered 5-minute capstone pitch, recorded prototype walkthrough video, and a compiled peer critique summary.',
      evaluationRubric: [
        { criterion: 'Narrative Storytelling', description: 'Clearly connects initial user research insights to the final prototype and business impact metrics.' },
        { criterion: 'Poise & Defense', description: 'Team defends decisions calmly with empirical user testing evidence rather than personal opinion.' }
      ]
    },
    campusTestingGuide: {
      targetUserGroup: 'College professors, faculty, student club leaders, and campus administrators',
      collegeLocations: [
        {
          spot: 'College Presentation Hall / Seminar Room',
          whyThisLocation: 'The formal environment where final stakeholder pitches take place.',
          approachScript: '"Welcome esteemed panel! Today our product squad is excited to walk you through how we solved a critical campus friction point in 10 days."'
        },
        {
          spot: 'Faculty Lounge & Department Office',
          whyThisLocation: 'Faculty and mentors who can offer portfolio review guidance.',
          approachScript: '"Professor, would you have 5 minutes to review our UX sprint case study before we submit it to our design portfolios?"'
        }
      ],
      testingPrepItems: ['Projector / Large screen connected to phone prototype', 'Printed 1-page Case Study Executive Summary', 'Timer app set to 3:00 hard stop'],
      ethicsAndIncentives: 'Thank your mentors, classmates, and interviewees who supported your research throughout the sprint.',
      quick5MinuteProtocol: [
        'Deliver the 3-minute narrative arc without filler words.',
        'Demo the live prototype on a real phone or mirrored display.',
        'Answer stakeholder questions directly, citing Day 2 and Day 7 test data.'
      ]
    }
  }
};
