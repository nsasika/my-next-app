import { APP_PATHS, type NavItem, type SidebarSection } from './routes.type';

export { APP_PATHS };
export type { AppPath, NavItem, SidebarSection } from './routes.type';

export const RECRUITER_NAV_BASE_ITEMS: NavItem[] = [
  { href: APP_PATHS.home, label: 'Home' },
  { href: APP_PATHS.interviewQuestions, label: 'Interview Questions' },
  { href: APP_PATHS.about, label: 'About Nalin' },
];

export const RECRUITER_AUTH_NAV_ITEM: NavItem = {
  href: APP_PATHS.useRefTest,
  label: 'Practical Examples',
};

export const RECRUITER_GUEST_NAV_ITEM: NavItem = {
  href: APP_PATHS.login,
  label: 'Login',
};

export const SIDEBAR_ROUTES: SidebarSection[] = [
  {
    title: 'Hooks',
    links: [
      { href: APP_PATHS.useRefTest, label: 'useRef' },
      { href: APP_PATHS.customHooks, label: 'Custom Hooks' },
    ],
  },
  {
    title: 'Java Examples',
    links: [{ href: APP_PATHS.javaExamples, label: 'Java Overview' }],
  },
  {
    title: 'React 18 Changes',
    links: [
      { href: APP_PATHS.react18Batching, label: 'Automatic Batching' },
      {
        href: APP_PATHS.react18Transitions,
        label: 'Transitions (useTransition)',
      },
    ],
  },
  {
    title: 'State Management',
    links: [
      { href: APP_PATHS.counterSlice, label: 'Counter Example' },
      { href: APP_PATHS.reduxThunk, label: 'Redux Thunk Example' },
      { href: APP_PATHS.reduxSaga, label: 'Redux Saga Example' },
      { href: APP_PATHS.zustand, label: 'Zustand Example' },
    ],
  },
  {
    title: 'Application Security',
    links: [{ href: APP_PATHS.authStrategy, label: 'Authentication Strategy' }],
  },
  {
    title: 'RTK SAGA',
    links: [
      { href: APP_PATHS.takeEvery, label: 'Take Every' },
      { href: APP_PATHS.takeLatest, label: 'Take Latest' },
      { href: APP_PATHS.debounce, label: 'Debounce' },
    ],
  },
  {
    title: 'React Performance',
    links: [
      { href: APP_PATHS.useMemoTest, label: 'useMemo' },
      { href: APP_PATHS.performance, label: 'Performance Testing' },
      { href: APP_PATHS.ssr, label: 'SSR rendering' },
      { href: APP_PATHS.csr, label: 'CSR rendering' },
    ],
  },
];
