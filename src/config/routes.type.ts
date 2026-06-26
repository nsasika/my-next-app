export const APP_PATHS = {
  home: '/',
  about: '/about',
  login: '/login',

  interviewQuestions: '/interview-questions',

  useRefTest: '/use-ref-test',
  useMemoTest: '/use-memo-test',
  customHooks: '/custom-hooks',

  react18Batching: '/react18/batching',
  react18Transitions: '/react18/transitions',

  javaExamples: '/java-examples',
  counterSlice: '/counter-slice',
  reduxThunk: '/redux-thunk',
  reduxSaga: '/redux-saga',
  zustand: '/zustand',

  takeEvery: '/practice/take-every',
  takeLatest: '/practice/take-latest',
  debounce: '/practice/debounce',

  performance: '/performance',
  ssr: '/ssr',
  csr: '/csr',

  authLogout: '/api/auth/logout',
} as const;

export type AppPath = (typeof APP_PATHS)[keyof typeof APP_PATHS];

export type NavItem = {
  href: AppPath;
  label: string;
};

export type SidebarSection = {
  title: string;
  links: NavItem[];
};
