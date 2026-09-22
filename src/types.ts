export type UserRole = 'admin' | 'full_access' | 'basic';

export interface User {
  email: string;
  name: string;
  role: UserRole;
  photoURL?: string;
  isGoogleAuth?: boolean;
  grantedAt?: string;
  grantedBy?: string;
}

export interface AccessRequest {
  id: string;
  email: string;
  name: string;
  reason?: string;
  requestedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface RealWorldExample {
  title: string;
  companyOrProduct: string;
  context: string;
  problem: string;
  uxSolution: string;
  impactOrMetric: string;
  takeaway: string;
}

export interface DetailedActivity {
  title: string;
  tagline: string;
  durationMinutes: number;
  format: 'Squad (3 People)' | 'Pairs' | 'Individual' | 'Class-wide';
  objective: string;
  steps: {
    stepNumber: number;
    title: string;
    instructions: string;
    proTip?: string;
  }[];
  templatesAndTools: string[];
  deliverableOutput: string;
  evaluationRubric: {
    criterion: string;
    description: string;
  }[];
}

export interface CampusUserTestingGuide {
  targetUserGroup: string;
  collegeLocations: {
    spot: string;
    whyThisLocation: string;
    approachScript: string;
  }[];
  testingPrepItems: string[];
  ethicsAndIncentives: string;
  quick5MinuteProtocol: string[];
}

export interface GeneratedProjectBrief {
  id: string;
  title: string;
  domain: string;
  emoji: string;
  clientType: 'Campus Venture' | 'Local College Business' | 'Student Tech Initiative' | 'Community Partner';
  problemStatement: string;
  currentPainPoint: string;
  targetCollegeUsers: string;
  sprintChallengeGoal: string;
  metricsToMove: string[];
  constraints: string[];
  campusTestingLocations: {
    location: string;
    targetProfiles: string;
    bestTimeToIntercept: string;
  }[];
  interviewIcebreaker: string;
  threePersonaHunches: string[];
  prototypeScope: string[];
}

export interface SlideVisual {
  url: string;
  alt: string;
  caption: string;
  source: string;
  sourceArticle?: string;
  referenceUrl?: string;
  youtubeUrl?: string;
  diagramType?: 'framework' | 'comparison' | 'process' | 'heuristic' | 'interface' | 'matrix' | 'case_study';
  badge?: string;
  keyInsights?: string[];
}

export interface Slide {
  id: number;
  dayNumber: number;
  dayTitle: string;
  slideNumberInDay: number;
  title: string;
  subtitle?: string;
  category: 'title' | 'concept' | 'methodology' | 'framework' | 'activity' | 'deliverables';
  contentPoints: string[];
  subPoints?: { [key: string]: string[] };
  speakerNotes: string;
  keyTakeaway?: string;
  duration?: string;
  activityTasks?: string[];
  homeworkTasks?: string[];
  isBasic: boolean; // Day 1 slides are true, Days 2-10 are false
  realWorldExample?: RealWorldExample;
  topActivity?: DetailedActivity;
  visual?: SlideVisual;
  secondaryVisual?: SlideVisual;
}

export interface SprintDay {
  dayNumber: number;
  title: string;
  subtitle: string;
  phase: 'Discover' | 'Define' | 'Develop' | 'Deliver' | 'Handoff';
  theme: string;
  isBasic: boolean; // Day 1 = basic (accessible to all)
  slideCount: number;
  description: string;
  deliverables: string[];
  activities: string[];
  featuredExample?: RealWorldExample;
  featuredTopActivity?: DetailedActivity;
  campusTestingGuide?: CampusUserTestingGuide;
}

export interface QuizQuestion {
  id: string;
  question: string;
  scenario?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  coreConcept: string;
}

export interface DayQuiz {
  dayNumber: number;
  dayTitle: string;
  summary: string;
  questions: QuizQuestion[];
}

export interface QuizResult {
  dayNumber: number;
  score: number;
  totalQuestions: number;
  passed: boolean;
  completedAt: string;
  userAnswers: { [questionId: string]: number };
}
