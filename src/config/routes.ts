import {
  APP_PATHS,
  type LessonNavItem,
  type NavItem,
  type SidebarNavGroup,
  type SidebarSection,
  type SidebarTechnology,
} from './routes.type';

export { APP_PATHS };
export type {
  AppPath,
  LessonNavItem,
  NavItem,
  SidebarNavGroup,
  SidebarSection,
  SidebarTechnology,
} from './routes.type';

export const RECRUITER_NAV_BASE_ITEMS: NavItem[] = [
  { href: APP_PATHS.home, label: 'Home' },
  { href: APP_PATHS.buildLab, label: 'Build Lab' },
  { href: APP_PATHS.about, label: 'Nalin & Academy' },
];

export const RECRUITER_AUTH_NAV_ITEM: NavItem = {
  href: APP_PATHS.react,
  label: 'Learning Workspace',
};

export const RECRUITER_GUEST_NAV_ITEM: NavItem = {
  href: APP_PATHS.login,
  label: 'Login',
};

const REACT_SECTIONS: SidebarSection[] = [
  {
    title: 'React Hooks',
    links: [
      { href: APP_PATHS.customHooks, label: 'Rules of Hooks' },
      { href: APP_PATHS.useRefTest, label: 'useRef' },
      { href: APP_PATHS.useCallback, label: 'useCallback' },
    ],
  },
  {
    title: 'React 18 Changes',
    links: [
      { href: APP_PATHS.react18Changes, label: 'React 18 Overview' },
      { href: APP_PATHS.react18Batching, label: 'Automatic Batching' },
      {
        href: APP_PATHS.react18Transitions,
        label: 'Transitions (useTransition)',
      },
      { href: APP_PATHS.react18DeferredValue, label: 'useDeferredValue' },
      { href: APP_PATHS.react18Id, label: 'useId' },
      { href: APP_PATHS.react18ExternalStore, label: 'useSyncExternalStore' },
    ],
  },
  {
    title: 'React 19 Changes',
    links: [
      { href: APP_PATHS.react19Changes, label: 'React 19 Overview' },
      {
        href: APP_PATHS.react19ActionState,
        label: 'useActionState',
      },
      {
        href: APP_PATHS.react19Optimistic,
        label: 'useOptimistic',
      },
      {
        href: APP_PATHS.react19Use,
        label: 'use() API',
      },
    ],
  },
  {
    title: 'State management',
    links: [
      {
        href: APP_PATHS.counterSlice,
        label: 'Redux Toolkit',
        children: [
          { href: APP_PATHS.counterSlice, label: 'Slice + reducers' },
          { href: APP_PATHS.reduxThunk, label: 'Middleware: Thunk' },
          { href: APP_PATHS.reduxSaga, label: 'Middleware: Saga' },
          { href: APP_PATHS.rtkQuery, label: 'RTK Query' },
          { href: APP_PATHS.takeEvery, label: 'Saga takeEvery' },
          { href: APP_PATHS.takeLatest, label: 'Saga takeLatest' },
          { href: APP_PATHS.debounce, label: 'Saga debounce' },
        ],
      },
      {
        href: APP_PATHS.zustand,
        label: 'Zustand',
        children: [{ href: APP_PATHS.zustand, label: 'Store example' }],
      },
    ],
  },
  {
    title: 'React Performance',
    links: [
      { href: APP_PATHS.performanceGuide, label: 'Why and how to test' },
      { href: APP_PATHS.useMemoTest, label: 'useMemo' },
      { href: APP_PATHS.reactMemo, label: 'React.memo' },
      { href: APP_PATHS.performance, label: 'Render profiling demo' },
      { href: APP_PATHS.ssr, label: 'SSR rendering' },
      { href: APP_PATHS.csr, label: 'CSR rendering' },
    ],
  },
];

const JAVA_SECTIONS: SidebarSection[] = [
  {
    title: 'Java for the Impatient',
    links: [
      { href: APP_PATHS.javaBook, label: 'Book overview' },
      { href: APP_PATHS.javaChapter1, label: 'Chapter 1' },
      { href: APP_PATHS.javaChapter2, label: 'Chapter 2' },
    ],
  },
];

const INTERVIEW_SECTIONS: SidebarSection[] = [
  {
    title: 'Real interviews',
    links: [
      {
        href: APP_PATHS.bankOfSingaporeInterview,
        label: 'Bank of Singapore',
      },
      {
        href: APP_PATHS.virtusaSingaporeInterview,
        label: 'Virtusa Singapore',
      },
    ],
  },
];

const NEXTJS_SECTIONS: SidebarSection[] = [
  {
    title: 'Next.js Fundamentals',
    links: [
      { href: APP_PATHS.nextjsIntro, label: 'Intro to Next.js' },
      { href: APP_PATHS.nextjsRouters, label: 'App Router vs Pages Router' },
      {
        href: APP_PATHS.nextjsComponents,
        label: 'Server and Client Components',
      },
      { href: APP_PATHS.nextjsRendering, label: 'SSR, SSG, ISR' },
      { href: APP_PATHS.nextjsCaching, label: 'Caching and revalidation' },
    ],
  },
  {
    title: 'Production Next.js',
    links: [
      { href: APP_PATHS.nextjsMiddleware, label: 'Middleware and proxy' },
      { href: APP_PATHS.nextjsLayouts, label: 'Layouts and route groups' },
      { href: APP_PATHS.nextjsAuthentication, label: 'Authentication' },
      { href: APP_PATHS.nextjsSeo, label: 'SEO and metadata' },
      {
        href: APP_PATHS.nextjsDeploymentMonitoring,
        label: 'Deployment and monitoring',
      },
    ],
  },
];

const FOUNDATIONS_SECTIONS: SidebarSection[] = [
  {
    title: 'Authentication',
    links: [
      {
        href: APP_PATHS.currentAuthenticationFlow,
        label: 'Current Authentication Flow',
      },
    ],
  },
  {
    title: 'Authorization',
    links: [{ href: APP_PATHS.oauth2Authorization, label: 'OAuth 2.0 + OIDC' }],
  },
];

const FOUNDATIONS_TRACK: SidebarTechnology = {
  description: 'Common engineering theory beyond a single framework.',
  href: APP_PATHS.foundations,
  label: 'Foundations',
  sections: FOUNDATIONS_SECTIONS,
  value: 'foundations',
};

const INTERVIEWS_TRACK: SidebarTechnology = {
  description: 'Real questions faced in interviews, with answer notes.',
  href: APP_PATHS.interviews,
  label: 'Interviews',
  sections: INTERVIEW_SECTIONS,
  value: 'interviews',
};

export const SIDEBAR_TECHNOLOGIES: SidebarTechnology[] = [
  {
    description: 'Core Java examples and interview-ready fundamentals.',
    href: APP_PATHS.java,
    label: 'Java',
    sections: JAVA_SECTIONS,
    value: 'java',
  },
  {
    description: 'Hooks, rendering, state, side effects, and performance.',
    href: APP_PATHS.react,
    label: 'React',
    sections: REACT_SECTIONS,
    value: 'react',
  },
  {
    description: 'Production React routing, rendering, APIs, and deployment.',
    href: APP_PATHS.nextjs,
    label: 'Next.js',
    sections: NEXTJS_SECTIONS,
    value: 'nextjs',
  },
  {
    description: 'Component architecture, TypeScript, templates, and services.',
    href: APP_PATHS.angular,
    label: 'Angular',
    sections: [],
    value: 'angular',
  },
];

export const SIDEBAR_NAV_GROUPS: SidebarNavGroup[] = [
  {
    label: 'Foundations',
    technologies: [FOUNDATIONS_TRACK],
  },
  {
    label: 'Interviews',
    technologies: [INTERVIEWS_TRACK],
  },
  {
    label: 'Technologies',
    technologies: SIDEBAR_TECHNOLOGIES,
  },
];

export const SIDEBAR_TRACKS: SidebarTechnology[] = SIDEBAR_NAV_GROUPS.flatMap(
  (group) => group.technologies,
);

export const SIDEBAR_ROUTES: SidebarSection[] = SIDEBAR_TRACKS.flatMap(
  (technology) => technology.sections,
);

function addUniqueLessonNavItem(
  items: LessonNavItem[],
  seenHrefs: Set<string>,
  item: LessonNavItem,
) {
  if (seenHrefs.has(item.href)) {
    return;
  }

  seenHrefs.add(item.href);
  items.push(item);
}

export function createLessonNavigationItems(
  groups: SidebarNavGroup[],
): LessonNavItem[] {
  const items: LessonNavItem[] = [];
  const seenHrefs = new Set<string>();

  groups.forEach((group) => {
    group.technologies.forEach((technology) => {
      if (technology.href) {
        addUniqueLessonNavItem(items, seenHrefs, {
          href: technology.href,
          label: technology.label,
        });
      }

      technology.sections.forEach((section) => {
        section.links.forEach((link) => {
          addUniqueLessonNavItem(items, seenHrefs, {
            href: link.href,
            label: link.label,
          });

          link.children?.forEach((child) => {
            addUniqueLessonNavItem(items, seenHrefs, {
              href: child.href,
              label: child.label,
            });
          });
        });
      });
    });
  });

  return items;
}

export const LESSON_NAV_ITEMS = createLessonNavigationItems(SIDEBAR_NAV_GROUPS);
