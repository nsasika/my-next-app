import {
  APP_PATHS,
  type NavItem,
  type SidebarSection,
  type SidebarTechnology,
} from './routes.type';

export { APP_PATHS };
export type {
  AppPath,
  NavItem,
  SidebarSection,
  SidebarTechnology,
} from './routes.type';

export const RECRUITER_NAV_BASE_ITEMS: NavItem[] = [
  { href: APP_PATHS.home, label: 'Home' },
  { href: APP_PATHS.engineeringBlueprint, label: 'Engineering Blueprint' },
  { href: APP_PATHS.about, label: 'Nalin & Academy' },
];

export const RECRUITER_AUTH_NAV_ITEM: NavItem = {
  href: APP_PATHS.useRefTest,
  label: 'Practical Examples',
};

export const RECRUITER_GUEST_NAV_ITEM: NavItem = {
  href: APP_PATHS.login,
  label: 'Login',
};

const REACT_SECTIONS: SidebarSection[] = [
  {
    title: 'React fundamentals',
    links: [
      { href: APP_PATHS.useRefTest, label: 'useRef' },
      { href: APP_PATHS.customHooks, label: 'Custom Hooks' },
    ],
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
    title: 'State management',
    links: [
      { href: APP_PATHS.counterSlice, label: 'Counter Example' },
      { href: APP_PATHS.reduxThunk, label: 'Redux Thunk Example' },
      { href: APP_PATHS.reduxSaga, label: 'Redux Saga Example' },
      { href: APP_PATHS.zustand, label: 'Zustand Example' },
    ],
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
  {
    title: 'Application security',
    links: [{ href: APP_PATHS.authStrategy, label: 'Authentication Strategy' }],
  },
];

const JAVA_SECTIONS: SidebarSection[] = [
  {
    title: 'Java fundamentals',
    links: [{ href: APP_PATHS.javaExamples, label: 'Java Overview' }],
  },
];

export const SIDEBAR_TECHNOLOGIES: SidebarTechnology[] = [
  {
    description: 'Hooks, rendering, state, side effects, and performance.',
    href: APP_PATHS.useRefTest,
    label: 'React',
    sections: REACT_SECTIONS,
    value: 'react',
  },
  {
    description: 'Core Java examples and interview-ready fundamentals.',
    href: APP_PATHS.javaExamples,
    label: 'Java',
    sections: JAVA_SECTIONS,
    value: 'java',
  },
  {
    description: 'Angular examples will live here when the track is added.',
    label: 'Angular',
    sections: [],
    status: 'planned',
    value: 'angular',
  },
];

export const SIDEBAR_ROUTES: SidebarSection[] = SIDEBAR_TECHNOLOGIES.flatMap(
  (technology) => technology.sections,
);
