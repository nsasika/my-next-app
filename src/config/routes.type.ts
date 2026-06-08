export const APP_PATHS = {
  home: '/',
  about: '/about',
  login: '/login',

  interviewQuestions: '/interview-questions',
  interviewReactHooks: '/interview-questions/react-hooks',
  interviewUseState: '/interview-questions/react-hooks/use-state',

  useRefTest: '/use-ref-test',
  useMemoTest: '/use-memo-test',
  customHooks: '/custom-hooks',

  react18Batching: '/react18/batching',
  react18Transitions: '/react18/transitions',

  counterSlice: '/counterSlice',
  reduxThunk: '/redux-thunk',
  reduxSaga: '/redux-saga',

  takeEvery: '/practice/takeEvery',
  takeLatest: '/practice/takeLatest',
  debounce: '/practice/debounce',

  performance: '/performance',
  ssr: '/ssr',
  csr: '/csr',

  authMe: '/api/auth/me',
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
