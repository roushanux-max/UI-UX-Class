import { DayQuiz, QuizResult } from '../types';

export const SPRINT_QUIZZES: DayQuiz[] = [
  // DAY 1
  {
    dayNumber: 1,
    dayTitle: 'Introduction & The Real-World Brief',
    summary: 'Test your understanding of modern UX foundations, the product trio, the Double Diamond, and the EcoTrack capstone challenge.',
    questions: [
      {
        id: 'd1_q1',
        scenario: 'Your company is launching a new health-tracking feature. The team consists of a Product Manager, a Product Designer, and a Lead Software Engineer.',
        question: 'According to the Modern Product Trio model, what is the primary strategic responsibility of the Product Designer?',
        options: [
          'Deciding the marketing launch date and executive budget allocation',
          'Balancing user desirability, usability, and intuitive interaction flows ("How & Who")',
          'Writing the production database schema and backend APIs',
          'Simply applying color palettes and illustrations after engineers finish building'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'The Modern Product Trio',
        explanation: 'In the modern product trio, Product Designers lead the exploration of user desirability, ergonomic flows, and holistic experience ("How & Who"), partnering with Product Managers (viability/value) and Engineers (feasibility).'
      },
      {
        id: 'd1_q2',
        scenario: 'You are reviewing the EcoTrack capstone brief with your 3-person squad before kicking off research.',
        question: 'What is the primary customer drop-off problem identified in the EcoTrack brief?',
        options: [
          'The mobile app crashes on older Android smartphones due to memory leaks',
          'Over 70% of Gen Z users abandon the app within 3 days because onboarding is long, invasive, and fails to deliver instant value',
          'Users refuse to sign up because the app requires paying a monthly subscription immediately',
          'The app does not support social media sharing to TikTok and Instagram'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Live Brief Problem Statement',
        explanation: 'The EcoTrack brief specifically highlights that Gen Z users download the app with high enthusiasm, but 70%+ abandon it within 72 hours due to an overwhelming, invasive onboarding flow that delays the "aha!" emotional reward.'
      },
      {
        id: 'd1_q3',
        scenario: 'Before interviewing college students, your squad conducts an Assumption Mapping exercise.',
        question: 'Why is creating an Assumption Map a critical first step before conducting user research?',
        options: [
          'It proves to stakeholders that the team already knows what users want without testing',
          'It reveals unacknowledged biases and converts team guesses into high-risk hypotheses to test during interviews',
          'It generates the final UI color scheme and typography hierarchy',
          'It replaces the need to conduct any real-world user interviews'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Assumption Mapping',
        explanation: 'Designers inevitably hold assumptions. Documenting them in an Assumption Map surfaces internal biases and pinpoints the riskiest unknowns so user interviews can empirically validate or debunk them.'
      },
      {
        id: 'd1_q4',
        scenario: 'Your team is debating how to integrate AI tools (like Gemini or ChatGPT) into the 10-day UX sprint.',
        question: 'What represents the most professional and tactical application of AI in the modern UX design workflow?',
        options: [
          'Letting AI auto-generate the final prototype and shipping it directly without user testing',
          'Using AI as an augmentative collaborator to rapidly explore diverse ideas, cluster messy notes, and draft realistic copy while humans provide empathy and strategic judgment',
          'Forbidding all AI usage because computer algorithms cannot comprehend digital interfaces',
          'Using AI exclusively to replace all user research participants with simulated synthetic bots'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'AI in Modern UX',
        explanation: 'Modern UX embraces AI as a high-velocity collaborator that accelerates repetitive synthesis, scenario generation, and divergent ideation—while relying on human designers for ethical judgment, deep user empathy, and contextual strategy.'
      }
    ]
  },

  // DAY 2
  {
    dayNumber: 2,
    dayTitle: 'Empathize – Modern User Research',
    summary: 'Evaluate your mastery of qualitative user research, unbiased interview techniques, the 5 Whys, and observational listening.',
    questions: [
      {
        id: 'd2_q1',
        scenario: 'A designer says during a sprint meeting: "I personally find carbon offset calculations super fun, so our Gen Z users will definitely love inputting 15 transaction receipts every evening."',
        question: 'Which foundational law of Human-Centered Design does this statement directly violate?',
        options: [
          'Fitts’s Law of Target Acquisition',
          '"You Are Not The User" (False-Consensus Bias)',
          'Miller’s Law of Working Memory',
          'The Law of Uniform Connectedness'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'You Are Not The User',
        explanation: 'The cardinal rule of UX is "You Are Not The User." Designers must never project their personal habits, enthusiasm, or cognitive models onto the diverse audience they are designing for.'
      },
      {
        id: 'd2_q2',
        scenario: 'You are drafting the 5-question interview guide to intercept college students on campus regarding their spending habits.',
        question: 'Which of the following questions is completely UNBIASED and encourages authentic storytelling?',
        options: [
          '"Don’t you agree that existing banking apps are terrible at calculating carbon emissions?"',
          '"Wouldn’t you love our awesome new app that saves you money on sustainable snacks?"',
          '"Walk me through the last time you bought lunch or groceries: what factors influenced your choice?"',
          '"Why don’t you care more about your environmental footprint when shopping online?"'
        ],
        correctAnswerIndex: 2,
        coreConcept: 'Unbiased Interview Questioning',
        explanation: 'Option C is non-leading and focuses on actual past behavior rather than hypothetical intentions. Asking users to recount a specific real past event yields rich, honest behavioral evidence.'
      },
      {
        id: 'd2_q3',
        scenario: 'During an interview, a student tells you: "I stopped using EcoTrack after day two because it was just too annoying."',
        question: 'Using Sakichi Toyoda’s "5 Whys" root cause technique, how should you follow up?',
        options: [
          'Say: "Well, we fixed that bug, so you should try it again tomorrow."',
          'Ask: "Can you tell me more about what specifically felt annoying or interrupted what you were doing at that moment?"',
          'Immediately change the subject to their favorite social media app',
          'Conclude that the student is not tech-savvy and discard the interview'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'The 5 Whys Technique',
        explanation: 'The 5 Whys technique involves gently drilling down beneath superficial emotional labels (like "annoying") to uncover the concrete friction point, cognitive barrier, or unmet need that triggered the reaction.'
      },
      {
        id: 'd2_q4',
        scenario: 'Product analytics show that 68% of users tap "Skip" on the third onboarding screen.',
        question: 'What is the primary advantage of conducting 1-on-1 qualitative interviews over looking only at quantitative analytics data?',
        options: [
          'Analytics numbers reveal WHERE drop-offs happen, but qualitative interviews reveal the underlying psychological WHY',
          'Qualitative interviews can easily measure statistical significance across 100,000 active users',
          'Qualitative interviews are completely automated and require no human interpretation',
          'Analytics data is always inaccurate in modern mobile software'
        ],
        correctAnswerIndex: 0,
        coreConcept: 'Qualitative vs. Quantitative Research',
        explanation: 'Quantitative analytics tell you *what* is happening (drop-off rates, conversion percentages), while qualitative interviews reveal *why* people feel confused, overwhelmed, or unmotivated.'
      }
    ]
  },

  // DAY 3
  {
    dayNumber: 3,
    dayTitle: 'Define – Synthesis & Problem Framing',
    summary: 'Test your understanding of qualitative synthesis, Affinity Mapping, Jobs-to-be-Done (JTBD), and How Might We (HMW) statements.',
    questions: [
      {
        id: 'd3_q1',
        scenario: 'Your squad has finished 6 student interviews and has 80 sticky notes containing direct quotes and observed behaviors.',
        question: 'How should an Affinity Mapping synthesis session be conducted?',
        options: [
          'Sort sticky notes alphabetically based on the first letter of the quote',
          'Silently group notes based on natural thematic similarities and behavioral patterns, then label each emerging cluster',
          'Have only the team lead organize the notes while the other two team members watch',
          'Force all notes into predefined boxes before reading the actual interview quotes'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Affinity Mapping Synthesis',
        explanation: 'Affinity Mapping is an inductive, collaborative clustering exercise where team members group raw observations by organic patterns without imposing rigid preconceived categories.'
      },
      {
        id: 'd3_q2',
        scenario: 'Applying Clayton Christensen’s Jobs-to-be-Done (JTBD) framework to Gen Z college students using financial tools.',
        question: 'According to JTBD theory, why do users "hire" a sustainable finance product?',
        options: [
          'Simply because their demographic age bracket is between 18 and 24 years old',
          'To make tangible emotional and functional progress in a specific life situation with less anxiety',
          'Because they are deeply fascinated by reading complex terms-of-service contracts',
          'To help software companies increase their quarterly investor earnings'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Jobs-to-be-Done (JTBD)',
        explanation: 'JTBD posits that customers don’t buy products based on superficial demographic tags; they "hire" products to make functional, social, and emotional progress in a specific life struggle.'
      },
      {
        id: 'd3_q3',
        scenario: 'Your squad is crafting "How Might We" (HMW) statements to prepare for brainstorming.',
        question: 'Which of the following HMW statements hits the optimal "Goldilocks" altitude (neither too narrow nor too broad)?',
        options: [
          '"How might we solve global climate change through an iPhone app?" (Too broad)',
          '"How might we put a green button in the top-right corner of screen 2?" (Too narrow)',
          '"How might we help busy college students feel instant pride about their daily micro-savings within their first 60 seconds?"',
          '"How might we force every university student to stop eating fast food?" (Coercive & unachievable)'
        ],
        correctAnswerIndex: 2,
        coreConcept: 'How Might We (HMW) Altitude',
        explanation: 'A great HMW statement focuses on a specific user need and desired emotional outcome without dictating a pre-baked technical solution, allowing wide creative divergence.'
      },
      {
        id: 'd3_q4',
        scenario: 'A stakeholder suggests designing the app for college students, retirees, corporate CFOs, and toddlers simultaneously.',
        question: 'Why does professional UX practice emphasize focusing on ONE primary persona during a sprint cycle?',
        options: [
          'Because Figma cannot store more than one artboard at a time',
          'Designing for everyone creates a bloated, fragmented experience that delights no one',
          'Designers are only legally allowed to test with people of one age group',
          'Personas have no practical purpose in modern product development'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Primary Persona Focus',
        explanation: 'Alan Cooper famously noted that designing for everyone results in designing for no one. A razor-sharp primary persona provides a definitive filter for prioritizing trade-offs.'
      }
    ]
  },

  // DAY 4
  {
    dayNumber: 4,
    dayTitle: 'Ideate – Divergent & Convergent Thinking',
    summary: 'Evaluate your ability to lead Crazy 8s rapid sketching, map user journey drop-offs, and facilitate dot-voting decision matrices.',
    questions: [
      {
        id: 'd4_q1',
        scenario: 'Your squad is about to start the Crazy 8s exercise with a folded sheet of paper and a sharpie.',
        question: 'What is the golden rule during the 8 minutes of Crazy 8s rapid sketching?',
        options: [
          'Spend 7 minutes drawing one pixel-perfect high-detail illustration',
          'Sketch 8 distinct concept variations in 8 minutes, prioritizing quantity and completely deferring internal critique',
          'Erase any sketch that looks messy or unconventional',
          'Search Pinterest for existing competitor screenshots and copy them verbatim'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Crazy 8s Rapid Ideation',
        explanation: 'Crazy 8s is a fast-paced divergent sketching exercise (1 minute per frame) designed to push past your first obvious idea and explore novel, diverse solutions without fear of judgment.'
      },
      {
        id: 'd4_q2',
        scenario: 'You are mapping the emotional curve on a User Journey Map for the current EcoTrack onboarding experience.',
        question: 'What is the primary purpose of tracking the user’s emotional highs and lows across a journey map?',
        options: [
          'To identify the exact moments of friction, confusion, or anxiety where design intervention will create the highest positive impact',
          'To generate decorative aesthetic charts for client marketing brochures',
          'To calculate the physical battery consumption of the user’s smartphone',
          'To prove that users are always happy with the current product'
        ],
        correctAnswerIndex: 0,
        coreConcept: 'User Journey Mapping',
        explanation: 'Journey maps visually correlate touchpoints with user sentiment. Emotional dips pinpoint critical churn risks where UX interventions will yield the greatest boost in retention.'
      },
      {
        id: 'd4_q3',
        scenario: 'In the British Design Council’s Double Diamond framework, Day 4 represents the opening of the second diamond.',
        question: 'What is the core distinction between "Divergent Thinking" and "Convergent Thinking"?',
        options: [
          'Divergent thinking eliminates ideas, while convergent thinking creates messy chaos',
          'Divergent thinking expands options and generates alternatives; convergent thinking analyzes, evaluates, and selects the best path forward',
          'Divergent thinking is done by engineers; convergent thinking is done by graphic designers',
          'There is no difference; both terms mean the exact same thing'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Divergence vs. Convergence',
        explanation: 'Divergent thinking goes wide to generate numerous unexpected possibilities. Convergent thinking narrows down, using criteria to focus on the most viable and impactful concept.'
      },
      {
        id: 'd4_q4',
        scenario: 'Your squad has 24 Crazy 8 sketches posted on the whiteboard and each person has 3 sticky voting dots.',
        question: 'Which criterion should guide your team’s dot votes when choosing the winning concept to prototype?',
        options: [
          'Whichever drawing used the most colorful pens',
          'Alignment with the HMW sprint goal, user persona needs, and 4-week engineering feasibility',
          'Whichever concept requires the user to do the most work and read the most text',
          'Voting exclusively for your own personal sketch regardless of relevance'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Decision Matrix & Dot-Voting',
        explanation: 'Dot voting must be disciplined: ideas are evaluated against the sprint’s problem statement, user persona needs, and technical constraints, avoiding vanity votes.'
      }
    ]
  },

  // DAY 5
  {
    dayNumber: 5,
    dayTitle: 'Information Architecture & Low-Fi Wireframing',
    summary: 'Test your grasp of navigation schemas, card sorting methodologies, grayscale wireframing principles, and mobile touch ergonomics.',
    questions: [
      {
        id: 'd5_q1',
        scenario: 'You want to understand how college students mentally group banking categories (e.g., Dining, Sustainable Transport, Campus Fees).',
        question: 'When should a UX designer use an OPEN Card Sort instead of a CLOSED Card Sort?',
        options: [
          'When you already have fixed categories and just want users to file cards into them',
          'When you want participants to create their own category labels to discover their natural mental models',
          'When you want to test the color contrast of your UI components',
          'When the engineering team has already finished building the production database'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Open vs. Closed Card Sorting',
        explanation: 'In an Open Card Sort, participants create their own category names for cards, revealing authentic mental models and vocabulary rather than fitting into pre-existing team assumptions.'
      },
      {
        id: 'd5_q2',
        scenario: 'A junior designer presents low-fidelity wireframes that feature custom neon colors, high-res stock photos, and decorative gradients.',
        question: 'Why do seasoned UX teams strictly enforce GRAYSCALE wireframes during the early Information Architecture phase?',
        options: [
          'Because computer monitors cannot render colors during preliminary wireframing',
          'Grayscale keeps stakeholders and users focused on layout hierarchy, content flow, and IA without being distracted by visual aesthetics',
          'Using color in low-fidelity wireframes violates international software copyright laws',
          'To make the design look intentionally boring so clients pay more money later'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Grayscale Low-Fi Wireframing',
        explanation: 'Color introduces emotional subjectivity. Keeping early wireframes in grayscale ensures feedback targets content priority, layout clarity, and navigational logic rather than color tastes.'
      },
      {
        id: 'd5_q3',
        scenario: 'You are designing the primary navigation bar and primary Call to Action (CTA) buttons for a mobile smartphone app.',
        question: 'According to Steven Hoober’s mobile thumb-zone research, where should critical primary actions be placed on screen?',
        options: [
          'In the extreme top-left corner where users must use both hands to reach it',
          'Within the natural, comfortable bottom-third arc accessible by one-handed thumb interaction',
          'Hidden inside a multi-level nested menu at the top of the viewport',
          'Constantly floating randomly across the screen to catch user attention'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Mobile Thumb Zone Ergonomics',
        explanation: 'Over 75% of smartphone interactions are single-handed thumb taps. Placing primary navigation and CTAs in the lower natural thumb zone minimizes ergonomic strain and accidental drops.'
      },
      {
        id: 'd5_q4',
        scenario: 'You are optimizing the tap targets for the "Confirm Pledge" button in the EcoTrack onboarding flow.',
        question: 'What does Fitts’s Law mathematically predict regarding button sizing and placement?',
        options: [
          'Smaller buttons take less time to tap because they occupy fewer screen pixels',
          'The time required to rapidly move to a target is a function of the target’s distance and its size (larger, closer targets are faster to acquire)',
          'Users will always tap buttons located on the left side before buttons on the right side',
          'Text length has no correlation with user reading speed'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Fitts’s Law in UI Ergonomics',
        explanation: 'Fitts’s Law proves that targets that are larger and situated closer to the user’s resting pointer/finger require significantly less cognitive effort and motor time to target accurately.'
      }
    ]
  },

  // DAY 6
  {
    dayNumber: 6,
    dayTitle: 'Prototyping & Interaction Design',
    summary: 'Evaluate your technical proficiency with Figma Auto Layout, reusable component variants, Smart Animate transitions, and clickable prototypes.',
    questions: [
      {
        id: 'd6_q1',
        scenario: 'You are building a button component in Figma that will display text in English ("Get Started") and Spanish ("Comenzar ahora").',
        question: 'Why is Figma Auto Layout essential when building modular UI components?',
        options: [
          'It automatically writes JavaScript backend code to upload to GitHub',
          'It allows components and containers to dynamically expand, contract, and maintain consistent padding as content changes',
          'It forces all screens to stay locked at a fixed 375px width without flexing',
          'It turns static vector graphics into 3D polygon meshes'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Figma Auto Layout Dynamics',
        explanation: 'Auto Layout provides CSS Flexbox-like behaviors in Figma, ensuring buttons, cards, and list items dynamically adapt padding, spacing, and wrapping when copy length changes.'
      },
      {
        id: 'd6_q2',
        scenario: 'You have a Button component that needs default, hover, focused, and disabled appearances across light and dark modes.',
        question: 'What is the industry-standard Figma architectural pattern to organize these states cleanly?',
        options: [
          'Duplicate 20 disconnected loose rectangles on arbitrary artboards',
          'Create a single Master Component Set with structured Component Properties & State Variants',
          'Create a brand new Figma file for every single button state',
          'Flatten the button into a raster PNG image'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Component Sets & Variants',
        explanation: 'Using Figma Component Sets with Variants allows designers to switch states (e.g., `State=Default/Hover/Disabled`, `Theme=Light/Dark`) via a dropdown while inheriting global updates.'
      },
      {
        id: 'd6_q3',
        scenario: 'You want a progress bar in your onboarding prototype to smoothly animate from 25% to 50% width when the user taps "Continue".',
        question: 'What is the foundational requirement for Figma’s "Smart Animate" engine to seamlessly morph an element between two frames?',
        options: [
          'The element must have completely different names on each frame',
          'The element must share identical layer names and matching layer hierarchy positions on both frames',
          'Both frames must be exported as GIF animations first',
          'Smart Animate only works on text layers, never vector shapes'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Figma Smart Animate Requirements',
        explanation: 'Figma’s Smart Animate looks for matching layer names in identical frame hierarchies. When it recognizes the same layer with different properties (e.g., width or position), it interpolates smooth motion.'
      },
      {
        id: 'd6_q4',
        scenario: 'Your squad has 2 days before the usability testing session and is tempted to prototype every single settings submenu in the app.',
        question: 'What should be the scope of a sprint usability prototype?',
        options: [
          'Every possible screen, error state, and terms-of-service page must be 100% interactive',
          'Focus exclusively on the "Happy Path" and critical hypothesis flows necessary to test the sprint brief goals',
          'Only build static screenshot slides without any clickable hotspots',
          'Ask the user to imagine what happens when clicking non-functional buttons'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Prototype Scope & Fidelity',
        explanation: 'A sprint prototype is an experimental instrument, not a shipping app. Focus energy on the primary user journey needed to validate or invalidate the core hypothesis.'
      }
    ]
  },

  // DAY 7
  {
    dayNumber: 7,
    dayTitle: 'Usability Testing & Inclusive Design',
    summary: 'Test your understanding of moderated usability testing protocols, WCAG 2.2 AA accessibility standards, and the 5-user testing rule.',
    questions: [
      {
        id: 'd7_q1',
        scenario: 'During a moderated think-aloud test of EcoTrack, a participant looks at the screen in silence for 15 seconds, clearly puzzled.',
        question: 'What is the moderator’s proper intervention in accordance with the "Think-Aloud" testing protocol?',
        options: [
          'Say: "Just tap that green button in the middle, it’s really obvious!"',
          'Say: "What are you looking at right now, and what thoughts are going through your head?"',
          'Grab the phone from the user and tap the correct screen for them',
          'End the test immediately and mark the participant as a failure'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Think-Aloud Testing Moderation',
        explanation: 'Moderators must remain neutral observers. Rather than giving instructions or defending the UI, gently prompt the participant with open questions like "What are you thinking right now?"'
      },
      {
        id: 'd7_q2',
        scenario: 'You are auditing the color contrast of dark gray text (#71717A) on a white background (#FFFFFF) for standard 16px body copy.',
        question: 'Under the Web Content Accessibility Guidelines (WCAG 2.2 Level AA), what is the minimum required contrast ratio for regular body text?',
        options: [
          '1.5 : 1',
          '3.0 : 1',
          '4.5 : 1',
          '10.0 : 1'
        ],
        correctAnswerIndex: 2,
        coreConcept: 'WCAG 2.2 AA Contrast Standards',
        explanation: 'WCAG 2.2 AA requires a minimum contrast ratio of 4.5:1 for normal body text (under 18pt or under 14pt bold). Large text requires at least 3.0:1.'
      },
      {
        id: 'd7_q3',
        scenario: 'Your team conducts usability tests with 5 college students on the redesigned EcoTrack onboarding flow.',
        question: 'According to Jakob Nielsen and Tom Landauer’s empirical research, why is testing with 5 users typically sufficient for qualitative discovery?',
        options: [
          'Testing with more than 5 users is illegal under academic guidelines',
          '5 representative users will reveal approximately 85% of core usability issues, after which returns diminish as the same problems repeat',
          '5 users will provide 99.9% statistical certainty for conversion rate forecasting',
          'College students get bored if more than 5 people participate in a study'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'The 5-User Usability Testing Rule',
        explanation: 'Nielsen Norman Group research shows that testing 5 users uncovers ~85% of critical usability problems. It is far more effective to test 5 users, iterate, and test 5 again than test 20 once.'
      },
      {
        id: 'd7_q4',
        scenario: 'You are summarizing the quantitative metrics from your squad’s 5 moderated usability sessions.',
        question: 'Which of the following is considered an objective usability metric?',
        options: [
          'Whether the moderator personally liked the participant’s attitude',
          'Task Completion Rate (Success Rate) and Time-on-Task',
          'How many followers the participant has on social media',
          'The participant’s astrological sign'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Usability Evaluation Metrics',
        explanation: 'Objective usability metrics include Task Completion Rate (did they finish without help?), Time-on-Task (how long did it take?), and Error Frequency (how many wrong turns occurred?).'
      }
    ]
  },

  // DAY 8
  {
    dayNumber: 8,
    dayTitle: 'Iterate & Refine (High-Fidelity)',
    summary: 'Evaluate your ability to prioritize usability bugs using Impact vs. Effort matrices, apply design tokens, and address UX debt.',
    questions: [
      {
        id: 'd8_q1',
        scenario: 'Your usability testing revealed 12 distinct user issues. The team has 2 days to implement fixes before developer handoff.',
        question: 'Using the 2x2 Impact vs. Effort Prioritization Matrix, which issues should the squad address FIRST?',
        options: [
          'Low Impact / High Effort items ("Thankless Tasks")',
          'High Impact / Low Effort items ("Quick Wins" that remove severe friction with minimal dev cost)',
          'Low Impact / Low Effort items exclusively',
          'Whichever bug was discovered by the loudest squad member'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Impact vs. Effort Matrix',
        explanation: 'High Impact / Low Effort items represent high-leverage "quick wins" that immediately eliminate serious usability bottlenecks while preserving team bandwidth for critical deliverables.'
      },
      {
        id: 'd8_q2',
        scenario: 'When a user taps "Connect Bank Account" in EcoTrack, the screen takes 2.5 seconds to authenticate.',
        question: 'How does an intentional micro-interaction (like an animated loader or checkmark) improve the user experience?',
        options: [
          'It distracts users so they don’t notice their phone battery draining',
          'It provides immediate system status feedback (Jakob’s 1st Heuristic), preventing double-taps and reducing user anxiety',
          'It makes the application look like an arcade video game',
          'It prevents the operating system from going to sleep'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'System Status Visibility & Micro-Interactions',
        explanation: 'Jakob Nielsen’s first heuristic ("Visibility of System Status") states that the system should always keep users informed about what is going on through prompt, meaningful feedback.'
      },
      {
        id: 'd8_q3',
        scenario: 'You are finalizing the typography and color styles in Figma to make sure the app feels cohesive across all 20 screens.',
        question: 'What is a "Design Token"?',
        options: [
          'A cryptocurrency coin issued to designers upon completing a project',
          'A centralized semantic variable (e.g., `color-primary-600` or `space-md`) that stores design decisions for both Figma and code',
          'A physical badge worn by lead UI designers in the studio',
          'A proprietary watermark stamped onto exported JPEG mockups'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Design Tokens & Design Systems',
        explanation: 'Design tokens are platform-agnostic variables that store visual design attributes (colors, typography, spacing). They create a single source of truth shared seamlessly between designers and engineers.'
      },
      {
        id: 'd8_q4',
        scenario: 'A squad member suggests skipping empty states and error illustrations to save time.',
        question: 'What is "UX Debt"?',
        options: [
          'Money owed to a university for taking a design class',
          'The accumulation of unaddressed design compromises, shortcuts, and inconsistent states that slowly degrades user trust and product quality over time',
          'The financial cost of purchasing a Figma software subscription',
          'A tax penalty imposed on software companies by regulatory bodies'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Understanding UX Debt',
        explanation: 'Similar to technical debt in engineering, UX debt is the hidden cost of cutting corners on edge cases, accessibility, or consistency. If left unaddressed, it creates friction that drives user churn.'
      }
    ]
  },

  // DAY 9
  {
    dayNumber: 9,
    dayTitle: 'Developer Handoff & Edge Cases',
    summary: 'Test your understanding of Figma Dev Mode, component redlining, responsive breakpoints, edge case modeling, and empathetic UX writing.',
    questions: [
      {
        id: 'd9_q1',
        scenario: 'You are preparing the Figma file for the engineering team using Figma Dev Mode.',
        question: 'Which of the following is essential to provide in an engineering handoff specification beyond static artboards?',
        options: [
          'Only exported flat PNG images with no measurements',
          'Interactive component states (hover, active, disabled), spacing tokens, responsive breakpoint behaviors, and error handling rules',
          'A playlist of ambient background music for developers to listen to',
          'Personal opinions on which programming language the backend engineers should use'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Figma Dev Mode & Handoff Specs',
        explanation: 'Thorough developer handoff includes interactive states (hover/active/error), explicit spacing and padding tokens, responsive layout rules across breakpoints, and edge case handling.'
      },
      {
        id: 'd9_q2',
        scenario: 'A user opens the EcoTrack app for the very first time, before logging any transactions or linking any bank accounts.',
        question: 'What is the role of an "Empty State" screen in modern UX design?',
        options: [
          'Displaying a completely blank white screen with no text or buttons',
          'Welcoming the user, reassuring them that nothing is wrong, and providing a clear, engaging call-to-action to take their first step',
          'Displaying a red error alert warning the user that their account is broken',
          'Immediately logging the user out to protect their privacy'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Empty States as Engagement Opportunities',
        explanation: 'First-use empty states are golden onboarding opportunities. Rather than presenting a dead end, they guide the user, explain the value of taking action, and provide a clear primary CTA.'
      },
      {
        id: 'd9_q3',
        scenario: 'A user’s internet connection drops while they are in the middle of onboarding step 3.',
        question: 'Which UX writing approach best exemplifies empathetic and constructive error messaging?',
        options: [
          '"FATAL EXCEPTION 0x8849: CONNECTION FAILED."',
          '"You made a mistake with your Wi-Fi network. Fix it immediately."',
          '"Unable to connect right now. Your progress is safely saved! Check your connection and tap Retry."',
          '"Oops! Something went wrong somewhere in the universe."'
        ],
        correctAnswerIndex: 2,
        coreConcept: 'Empathetic UX Writing & Error Recovery',
        explanation: 'Great error copy avoids technical jargon or blaming the user. It calmly states what occurred, reassures them their data is intact, and offers a straightforward path to recovery.'
      },
      {
        id: 'd9_q4',
        scenario: 'Your design system uses a standard 8-point spatial grid system (4px, 8px, 16px, 24px, 32px, 48px).',
        question: 'Why do leading product design systems strictly utilize an 8pt spatial grid for padding and margins?',
        options: [
          'Because 8 is a lucky number in international marketing',
          'It provides mathematical visual rhythm, scales consistently across high-DPI displays (1x, 2x, 3x), and reduces arbitrary guesswork between designers and developers',
          'Because CSS code only allows dimensions that end in an even number',
          'To prevent mobile phone screens from overheating'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'The 8pt Spatial Grid System',
        explanation: 'An 8pt grid ensures geometric harmony across screen resolutions. Most screen dimensions are divisible by 8, preventing half-pixel blurriness on @2x or @3x displays while streamlining design-dev handoff.'
      }
    ]
  },

  // DAY 10
  {
    dayNumber: 10,
    dayTitle: 'Stakeholder Pitch & Presentation',
    summary: 'Evaluate your ability to structure a 5-minute executive pitch, defend design decisions with evidence, and document process for your UX portfolio.',
    questions: [
      {
        id: 'd10_q1',
        scenario: 'Your squad has 5 minutes to present the redesigned EcoTrack experience to senior executive stakeholders.',
        question: 'What is the most persuasive narrative structure for an executive UX design pitch?',
        options: [
          'Spend 4 minutes listing every Figma plugin used, then show one final screen for 10 seconds',
          'Problem Context (The Drop-off) -> Empirical User Insights -> The Redesigned Solution Demo -> Projected Business & Retention Impact',
          'Argue with stakeholders about why artistic vision should never be questioned',
          'Read every single line of the terms-of-service agreement aloud'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Executive Pitch Storytelling Arc',
        explanation: 'Executive storytelling connects business pain to human insight, shows the working solution in context, and quantifies the anticipated return on investment (ROI) in retention or conversion.'
      },
      {
        id: 'd10_q2',
        scenario: 'During your presentation, an executive asks: "Why did you place the carbon footprint preview on screen 1 instead of screen 4?"',
        question: 'How should a professional UX designer defend this decision?',
        options: [
          'Say: "Because I am the designer and I think it looks way more modern that way."',
          'Anchor your defense in research: "Our Day 2 user interviews and Day 7 usability tests proved that delaying the footprint insight caused 70% of Gen Z users to abandon the app before reaching screen 4."',
          'Apologize immediately and change it back during the meeting without explanation',
          'Ignore the executive and skip to the next slide'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Defending Design with Evidence',
        explanation: 'Strong designers defend choices not with subjective aesthetic preference, but by citing empirical user research, observed behavioral drop-offs, and usability test evidence.'
      },
      {
        id: 'd10_q3',
        scenario: 'You are documenting this 10-day sprint as a case study for your UX design portfolio to interview for junior designer jobs.',
        question: 'What makes a junior designer’s portfolio case study truly stand out to hiring managers?',
        options: [
          'Only showing 15 glamorous, static mockups on floating 3D iPhone mockups with zero explanation of what problem was solved',
          'Documenting the messy problem framing, failed initial hypotheses, synthesis pivots, usability test discoveries, and measurable impact',
          'Claiming that you did 100% of the project alone without acknowledging your team squad members',
          'Copying and pasting text directly from a design textbook'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'UX Case Study Craftsmanship',
        explanation: 'Hiring managers don’t hire mockups; they hire problem solvers. Showcasing your critical thinking, how you reacted when an assumption failed, and how user testing guided pivots proves authentic seniority.'
      },
      {
        id: 'd10_q4',
        scenario: 'At the end of Day 10, your squad conducts a sprint retrospective with the columns: "What went well?", "What was challenging?", and "What will we improve next sprint?"',
        question: 'What is the purpose of conducting a team retrospective after shipping a product milestone?',
        options: [
          'To assign blame and point fingers at who made the most design mistakes',
          'To foster psychological safety, celebrate squad wins, and identify continuous workflow improvements for subsequent sprints',
          'It is a purely mandatory corporate ritual with no functional benefit',
          'To decide who gets to keep the Figma software license'
        ],
        correctAnswerIndex: 1,
        coreConcept: 'Sprint Retrospectives & Continuous Learning',
        explanation: 'Retrospectives build team trust and continuous operational excellence. Product teams openly discuss what worked and refine communication and handoff processes for the next cycle.'
      }
    ]
  }
];

// Helper Functions & Local Storage Management
const QUIZ_STORAGE_KEY = 'uiux_sprint_quiz_results';

export function getDayQuiz(dayNumber: number): DayQuiz | undefined {
  return SPRINT_QUIZZES.find((q) => q.dayNumber === dayNumber);
}

export function getAllQuizzes(): DayQuiz[] {
  return SPRINT_QUIZZES;
}

export function getStoredQuizResults(): { [dayNumber: number]: QuizResult } {
  try {
    const data = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!data) return {};
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to parse stored quiz results', err);
    return {};
  }
}

export function saveQuizResult(result: QuizResult): void {
  try {
    const existing = getStoredQuizResults();
    existing[result.dayNumber] = result;
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.error('Failed to save quiz result', err);
  }
}

export function getQuizResultForDay(dayNumber: number): QuizResult | null {
  const allResults = getStoredQuizResults();
  return allResults[dayNumber] || null;
}

export function getCompletedQuizzesSummary(): {
  completedCount: number;
  totalDays: number;
  averageScore: number;
} {
  const results = getStoredQuizResults();
  const keys = Object.keys(results);
  if (keys.length === 0) {
    return { completedCount: 0, totalDays: 10, averageScore: 0 };
  }

  let totalScorePercentage = 0;
  keys.forEach((key) => {
    const res = results[Number(key)];
    if (res && res.totalQuestions > 0) {
      totalScorePercentage += (res.score / res.totalQuestions) * 100;
    }
  });

  return {
    completedCount: keys.length,
    totalDays: 10,
    averageScore: Math.round(totalScorePercentage / keys.length)
  };
}
