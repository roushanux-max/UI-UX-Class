import { GeneratedProjectBrief } from '../types';

export const PRESET_COLLEGE_BRIEFS: GeneratedProjectBrief[] = [
  {
    id: 'brief-canteen-rush',
    title: 'QuickBite: College Canteen Pre-Order & Crowd Tracker',
    domain: 'Food & Campus Operations',
    emoji: '🍱',
    clientType: 'Local College Business',
    problemStatement:
      'Between 1:00 PM and 1:45 PM, 1,200+ students swarm the central campus cafeteria simultaneously. Lines stretch out the door, 35% of students skip lunch or eat junk snacks because they cannot afford a 30-minute queue, and cafeteria kitchen staff experience extreme order chaos and food spoilage.',
    currentPainPoint:
      'Disorganized token lines, zero visibility into real wait times, out-of-stock menu surprises at the counter, and delayed group orders.',
    targetCollegeUsers:
      'College students with tight 15–40 min lecture breaks, student club organizers buying bulk snacks, cafeteria cashiers & kitchen workers.',
    sprintChallengeGoal:
      'Design a hyper-fast mobile ordering & pickup interface that lets students order in under 20 seconds between classes and pick up their food without waiting in line.',
    metricsToMove: [
      'Day-7 Active Order Retention > 55%',
      'Average Counter Pickup Time < 90 seconds',
      'Cart Abandonment during Rush Hour < 12%'
    ],
    constraints: [
      'Must work smoothly on spotty campus Wi-Fi (offline-first UI caching)',
      'Token display must be readable from 10 feet away on students’ screens',
      'Accessible for students carrying bags/books (one-thumb reachability)'
    ],
    campusTestingLocations: [
      {
        location: 'Central Campus Cafeteria & Food Court',
        targetProfiles: 'Students actively waiting in line or eating lunch with friends',
        bestTimeToIntercept: '12:45 PM – 2:15 PM (peak lunch rush)'
      },
      {
        location: 'Engineering & Arts Quad Lawn',
        targetProfiles: 'Groups hanging out between lectures eating quick snacks',
        bestTimeToIntercept: '11:00 AM – 1:00 PM'
      },
      {
        location: 'Library Lobby Coffee Kiosk',
        targetProfiles: 'Students seeking quick caffeine boosts between study blocks',
        bestTimeToIntercept: '3:30 PM – 5:30 PM'
      }
    ],
    interviewIcebreaker:
      '"Hey! We are doing a 3-minute UX sprint project on the campus cafeteria rush—when was the last time you gave up on getting food here because the line was insane?"',
    threePersonaHunches: [
      'The Rushed Commuter: Has 15 mins between lab and lecture, needs grab-and-go with zero hesitation.',
      'The Budget-Conscious Senior: Calculates daily lunch cost, splits bill with 3 friends, wants loyalty discount tokens.',
      'The Cafeteria Head Cook: Overwhelmed by random manual paper slips, needs an idiot-proof visual pickup queue screen.'
    ],
    prototypeScope: [
      'Rush-hour dynamic menu with live dish availability status',
      '1-Tap quick re-order of user’s favorite meal combos',
      'Animated pickup token ticket with dynamic estimated prep countdown',
      'Live cafeteria queue density indicator (Low / Moderate / Swarmed)'
    ]
  },
  {
    id: 'brief-study-spots',
    title: 'SilentSpace: Campus Study Spot & Power Outlet Finder',
    domain: 'Student Life & Campus Facilities',
    emoji: '📚',
    clientType: 'Campus Venture',
    problemStatement:
      'During midterm and finals weeks, college libraries and study halls are completely overwhelmed. Students spend an average of 22 minutes walking between academic buildings searching for an empty table with an accessible charging outlet, generating high academic anxiety and wasted study time.',
    currentPainPoint:
      'Unpredictable library occupancy, "ghost reservation" chairs where jackets hold empty seats for hours, and dead phone/laptop batteries.',
    targetCollegeUsers:
      'Undergraduate and graduate students, study groups, commuter students who stay on campus all day.',
    sprintChallengeGoal:
      'Design a community-powered spot locator where students can instantly find, report, and navigate to quiet study spaces with available power outlets in < 45 seconds.',
    metricsToMove: [
      'Time to find an open study spot reduced from 22 mins to < 3 mins',
      'Community crowd-reporting participation > 28% of active users',
      'User satisfaction score (CSAT) > 4.6 / 5.0'
    ],
    constraints: [
      'Must incorporate real-time noise-level ratings (Silent Zone vs Group Collab)',
      'Privacy-first: Cannot track individual students, only aggregate seat zones',
      'High contrast dark mode for late-night library study conditions'
    ],
    campusTestingLocations: [
      {
        location: 'Main University Library (1st & 3rd Floors)',
        targetProfiles: 'Solo students studying with laptops plugged into walls',
        bestTimeToIntercept: '2:00 PM – 6:00 PM (peak library occupancy)'
      },
      {
        location: 'Student Union Study Pods & Balcony',
        targetProfiles: 'Study groups working on collaborative presentations',
        bestTimeToIntercept: '11:00 AM – 3:00 PM'
      },
      {
        location: 'Science & Tech Building Atrium',
        targetProfiles: 'Commuters charging devices between lab sections',
        bestTimeToIntercept: '4:00 PM – 7:00 PM'
      }
    ],
    interviewIcebreaker:
      '"Excuse me! We\'re running a student UX study on finding quiet study spots around campus—how long did it take you to find this specific desk today?"',
    threePersonaHunches: [
      'The Cramming Solo Student: Needs absolute silence, nearby 3-prong outlet, and natural lighting.',
      'The Capstone Project Squad: Needs whiteboard access, talking permissions, and space for 4 laptops.',
      'The Commuter Wanderer: Has 2-hour gaps between lectures, carries heavy backpack, needs comfortable seating near transit.'
    ],
    prototypeScope: [
      'Interactive campus floor-by-floor heat map with noise indicators',
      'Filter pill bar: "Has Power Outlet", "Dead Silent", "Group Friendly", "Natural Light"',
      '10-second community tap report: "Seats available right now: Plenty / Few / Packed"',
      'Bookmark and share study nook pin with squad'
    ]
  },
  {
    id: 'brief-dorm-marketplace',
    title: 'CampusSwap: Student Peer-to-Peer Secondhand Exchange',
    domain: 'Sustainability & Student Economy',
    emoji: '♻️',
    clientType: 'Student Tech Initiative',
    problemStatement:
      'At the start and end of every college semester, thousands of textbooks, mini-fridges, desk lamps, lab coats, and monitors are either dumped into campus dumpsters or posted into noisy, unverified WhatsApp/Discord groups where scammers and ghosting buyers waste students’ time.',
    currentPainPoint:
      'Sketchy off-campus meetups, ghosting buyers/sellers, excessive shipping fees on commercial marketplaces, and massive campus waste.',
    targetCollegeUsers:
      'Dorm residents moving in/out, international students furnishing rooms on tight budgets, upperclassmen selling textbooks.',
    sprintChallengeGoal:
      'Create a verified .edu campus marketplace that makes buying and selling dorm gear within walking distance 100% safe, verified, and effortless.',
    metricsToMove: [
      'List-to-Sold completion rate within 48 hours > 40%',
      'Buyer & seller meetup attendance rate > 92% (zero ghosting)',
      'Weekly peer-to-peer active browsing engagement > 3.2 sessions/week'
    ],
    constraints: [
      'Authentication gated by verified university email or campus student ID',
      'Safe designated campus meetup zones (e.g. Campus Police Station, Library Front)',
      'Cashless in-app escrow or tap-to-verify handover confirmation'
    ],
    campusTestingLocations: [
      {
        location: 'Freshman Dorm Lounge & Mailroom',
        targetProfiles: 'Students picking up packages or moving gear',
        bestTimeToIntercept: '4:30 PM – 7:30 PM'
      },
      {
        location: 'College Bookstore Entrance & Bulletin Boards',
        targetProfiles: 'Students checking textbook prices or bulletin flyers',
        bestTimeToIntercept: '10:00 AM – 2:00 PM'
      },
      {
        location: 'Campus Laundromat & Common Room',
        targetProfiles: 'Students waiting on laundry cycles with downtime',
        bestTimeToIntercept: '6:00 PM – 9:00 PM'
      }
    ],
    interviewIcebreaker:
      '"Hey! Quick question: Have you ever tried buying or selling used textbooks, dorm furniture, or calculators on campus? What was the most annoying part?"',
    threePersonaHunches: [
      'The Graduating Senior: Moving out in 4 days, needs to liquidate a mini-fridge and monitor today, zero patience for flaky messages.',
      'The Frugal First-Year: Needs Organic Chemistry textbook and desk fan without paying $180 at the university store.',
      'The Campus Eco-Advocate: Wants zero student furniture sent to landfills, tracks carbon avoided via secondhand swaps.'
    ],
    prototypeScope: [
      '15-Second Snap-and-List dorm item camera flow with auto-categorization',
      'Campus Geo-Map showing items available in specific dorm halls',
      'Safe-Zone Meetup Scheduler with integrated campus security landmark pins',
      'Verified Student badge with mutual rating & review history'
    ]
  },
  {
    id: 'brief-club-hub',
    title: 'HypeCampus: College Events & Club Discovery Experience',
    domain: 'Community & Student Engagement',
    emoji: '🎪',
    clientType: 'Campus Venture',
    problemStatement:
      'Over 200 registered student clubs print thousands of paper flyers that clutter college pinboards and trash bins. Meanwhile, 68% of first- and second-year students report feeling lonely or disconnected, constantly missing interesting hackathons, cultural fests, and guest lectures because event notices are buried across chaotic email newsletters.',
    currentPainPoint:
      'Information overload across scattered social media handles, paper flyers turning into campus litter, FOMO on events with free food, and intimidating club signups.',
    targetCollegeUsers:
      'First-year students looking for friends, student club board members struggling with recruitment, campus activity directors.',
    sprintChallengeGoal:
      'Design a vibrant, personalized mobile event discovery feed that connects students with like-minded campus communities and boosts event attendance by 30%.',
    metricsToMove: [
      'RSVP-to-Show attendance conversion > 65%',
      'Student club membership signups per event +35%',
      'First-year student community onboarding satisfaction > 4.7/5'
    ],
    constraints: [
      'Filter for "Free Food Provided" (the #1 attendance motivator for college students)',
      'Sync with Google Calendar / Apple Calendar in 1-tap',
      'Anti-spam: Only verified student organizations can publish events'
    ],
    campusTestingLocations: [
      {
        location: 'Student Union Plaza & Walkway',
        targetProfiles: 'Students passing through club promo tables and banners',
        bestTimeToIntercept: '11:30 AM – 2:30 PM'
      },
      {
        location: 'First-Year Dorm Courtyard',
        targetProfiles: 'Freshmen talking about weekend plans or finding things to do',
        bestTimeToIntercept: '5:00 PM – 7:30 PM'
      },
      {
        location: 'Gym / Sports Complex Bleachers',
        targetProfiles: 'Students involved in intramural sports or campus recreational clubs',
        bestTimeToIntercept: '4:00 PM – 7:00 PM'
      }
    ],
    interviewIcebreaker:
      '"Hey! We are running a quick 2-minute design test on college club events—how do you usually find out what cool stuff is happening on campus this weekend?"',
    threePersonaHunches: [
      'The Introverted Freshman: Wants to join clubs and make friends, but feels intimidated walking into crowded general meetings alone.',
      'The Busy Club President: Spends 8 hours a week designing posters and begging people to RSVP on Instagram stories.',
      'The Free-Food Hunter: Hungry student on a budget who attends tech talks and cultural mixers primarily for complimentary pizza and networking.'
    ],
    prototypeScope: [
      'Personalized interest swipe deck ("Tech", "Design", "Dance", "Gaming", "Outdoors")',
      '"Happening Today on Campus" interactive visual timeline with distance in walking minutes',
      '1-Tap RSVP with live "Free Food Status" badge & calendar sync',
      '"Go With a Friend" invite link generating instant WhatsApp squad RSVP'
    ]
  },
  {
    id: 'brief-ride-share',
    title: 'CampusCommute: College Carpool & Safe Late-Night Escort',
    domain: 'Mobility & Campus Safety',
    emoji: '🚗',
    clientType: 'Community Partner',
    problemStatement:
      'Commuter students spend up to $25/day on solo Uber rides or waste 45 minutes searching for campus parking permits. Meanwhile, students studying late in architecture, design, and computer labs after 10 PM feel unsafe walking across dark parking lots or to suburban apartments alone.',
    currentPainPoint:
      'Exorbitant parking permit costs, isolated late-night walks, high rideshare surge pricing, and empty car seats driven by neighboring classmates.',
    targetCollegeUsers:
      'Commuter students living in college neighborhoods, late-night lab/library researchers, campus security aides.',
    sprintChallengeGoal:
      'Design a student-to-student trusted carpool & walking buddy companion app that cuts commute costs in half and eliminates late-night travel fears.',
    metricsToMove: [
      'Carpool match rate between students living in same postal code > 70%',
      'Night-walk companion safe-arrival confirmation rate 100%',
      'Carbon emissions saved per campus commuter cohort > 25%'
    ],
    constraints: [
      'Driver license and student ID mandatory verification',
      'Emergency SOS one-press button with live campus police dispatch',
      'Simple gas-money split integration with no platform surcharge'
    ],
    campusTestingLocations: [
      {
        location: 'Commuter Parking Structure & Pay Stations',
        targetProfiles: 'Students walking to/from cars or paying for parking permits',
        bestTimeToIntercept: '8:30 AM – 10:30 AM & 4:30 PM – 6:30 PM'
      },
      {
        location: 'Campus Bus / Shuttle Transit Stop',
        targetProfiles: 'Students waiting for municipal buses or university shuttles',
        bestTimeToIntercept: '1:00 PM – 5:00 PM'
      },
      {
        location: 'Design & Engineering 24/7 Labs (Late Evening)',
        targetProfiles: 'Students packing up laptops after dark facing the walk home',
        bestTimeToIntercept: '8:00 PM – 10:30 PM'
      }
    ],
    interviewIcebreaker:
      '"Hi! We are working on a campus mobility UX project—how do you usually get to college every day, and have you ever had trouble getting home late at night?"',
    threePersonaHunches: [
      'The Suburban Commuter: Drives 35 mins alone every morning, pays $400/semester for parking, would love someone to chip in for gas.',
      'The Night-Owl Lab Student: Stays until 11 PM finishing physical models or code, dreads walking through the dark underpass alone.',
      'The Transit Reliant: Misses the last 9:15 PM campus shuttle and gets stranded without affordable options.'
    ],
    prototypeScope: [
      'Commuter route matching feed based on class schedule times',
      '1-Tap "Walk With Me" late-night beacon connecting with verified peers heading in the same direction',
      'Gas expense auto-splitter calculation ($2 per ride token)',
      'Real-time live trip tracking with trusted friends'
    ]
  },
  {
    id: 'brief-roommate-agreement',
    title: 'RoomSync: College Dorm Chores & Roommate Harmony App',
    domain: 'Living & Wellness',
    emoji: '🧹',
    clientType: 'Campus Venture',
    problemStatement:
      'Over 60% of college roommate conflicts stem from passive-aggressive disputes over dirty dishes, unpaid shared toilet paper/groceries, and quiet hour boundaries. Resident Assistants (RAs) spend 40% of their time mediating petty apartment squabbles instead of supporting student wellness.',
    currentPainPoint:
      'Passive-aggressive sticky notes on fridges, awkward money requests, chore procrastination, and unresolved lifestyle clashes.',
    targetCollegeUsers:
      'Undergraduate dorm roommates, off-campus student apartment housemates, campus housing RAs.',
    sprintChallengeGoal:
      'Design a gamified, respectful roommate coordination app that turns chores and shared expenses into a transparent, drama-free team game.',
    metricsToMove: [
      'Chore completion rate on scheduled date > 80%',
      'Shared expense settlement within 48 hours > 85%',
      'Reported roommate conflict score reduced by > 50%'
    ],
    constraints: [
      'Tone of voice must be playful, non-confrontational, and empathetic',
      'Quick photo-proof verification for completed chores',
      'Quiet-mode status ("Studying for Midterm", "Sleeping", "Guests Over")'
    ],
    campusTestingLocations: [
      {
        location: 'College Dormitory Lounges & Common Kitchens',
        targetProfiles: 'Students cooking or washing dishes in shared residence halls',
        bestTimeToIntercept: '5:30 PM – 8:30 PM'
      },
      {
        location: 'Campus Housing & Residential Life Office',
        targetProfiles: 'Resident Assistants (RAs) and students asking about housing',
        bestTimeToIntercept: '1:00 PM – 4:00 PM'
      },
      {
        location: 'University Grocery Store / Mini-Mart',
        targetProfiles: 'Students shopping for shared groceries and household supplies',
        bestTimeToIntercept: '3:00 PM – 6:30 PM'
      }
    ],
    interviewIcebreaker:
      '"Hey! We\'re designing a student living tool—what\'s the most awkward conversation you’ve had to have with a roommate about chores, bills, or noise?"',
    threePersonaHunches: [
      'The Cleanliness Enthusiast: Cannot focus when sink is full of dishes, hates nagging roommates because it feels like parenting.',
      'The Forgetful Free-Spirit: Intends to clean, but gets distracted by exams and forgets whose turn it was to buy trash bags.',
      'The Resident Assistant (RA): Exhausted from arbitrating arguments between freshmen who have never shared a room before.'
    ],
    prototypeScope: [
      'Visual chore wheel with turn rotation and instant "Done!" photo snap',
      'Shared grocery & supply kitty with auto split calculation',
      'Status beacon: "Do Not Disturb / Exam Tomorrow" or "Music & Friends Welcome"',
      'Karma points & weekly reward badge system for top roommate'
    ]
  }
];
