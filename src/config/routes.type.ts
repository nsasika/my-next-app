export const APP_PATHS = {
  home: '/',
  about: '/about',
  engineeringBlueprint: '/engineering-blueprint',
  login: '/login',

  interviewQuestions: '/interview-questions',

  useRefTest: '/use-ref',
  useMemoTest: '/use-memo',
  useCallback: '/use-callback',
  customHooks: '/custom-hooks',

  react18Batching: '/react18/batching',
  react18DeferredValue: '/react18/deferred-value',
  react18ExternalStore: '/react18/external-store',
  react18Id: '/react18/id',
  react18Transitions: '/react18/transitions',
  react19Changes: '/react19',
  react19ActionState: '/react19/action-state',
  react19Optimistic: '/react19/optimistic',
  react19Use: '/react19/use',

  javaExamples: '/java-examples',
  javaChapter1: '/java-examples/chapter-1',
  javaChapter2: '/java-examples/chapter-2',
  interviewPractice: '/interview-practice',
  authStrategy: '/authentication-strategy',
  counterSlice: '/counter-slice',
  reduxThunk: '/redux-thunk',
  reduxSaga: '/redux-saga',
  rtkQuery: '/rtk-query',
  zustand: '/zustand',

  takeEvery: '/practice/take-every',
  takeLatest: '/practice/take-latest',
  debounce: '/practice/debounce',

  performance: '/performance',
  performanceGuide: '/performance-guide',
  reactMemo: '/react-memo',
  ssr: '/ssr',
  csr: '/csr',

  authLogout: '/api/auth/logout',
} as const;

export type AppPath = (typeof APP_PATHS)[keyof typeof APP_PATHS];

export type NavItem = {
  children?: NavItem[];
  href: AppPath;
  label: string;
};

export type SidebarSection = {
  title: string;
  links: NavItem[];
};

export type SidebarTechnology = {
  description: string;
  href?: AppPath;
  label: string;
  sections: SidebarSection[];
  status?: 'available' | 'planned';
  value: 'react' | 'java' | 'angular' | 'interviews';
};
