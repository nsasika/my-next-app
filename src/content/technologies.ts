import { APP_PATHS, type AppPath } from '@/config/routes';

export type TechnologyLandingContent = {
  accent:
    | 'react'
    | 'java'
    | 'nextjs'
    | 'foundations'
    | 'angular'
    | 'interviews';
  description: string;
  history: readonly {
    body: string;
    title: string;
  }[];
  logo?: {
    alt: string;
    src: string;
  };
  officialLinks: readonly {
    href: string;
    label: string;
  }[];
  primaryAction?: {
    href: AppPath;
    label: string;
  };
  summary: readonly string[];
  tags: readonly string[];
  title: string;
  usages: readonly string[];
};

export const technologyLandingContent = {
  angular: {
    accent: 'angular',
    description:
      'Angular is a TypeScript-first application framework for building structured, large-scale web apps with components, templates, services, dependency injection, routing, and forms.',
    history: [
      {
        body: 'Angular grew from the AngularJS ecosystem, then moved into a modern TypeScript framework with stronger tooling and a component-first architecture.',
        title: 'From AngularJS to Angular',
      },
      {
        body: 'Modern Angular focuses on standalone components, signals, faster builds, and a complete framework experience for teams that want clear conventions.',
        title: 'Modern direction',
      },
    ],
    officialLinks: [
      { href: 'https://angular.dev/', label: 'Angular docs' },
      { href: 'https://angular.dev/tutorials', label: 'Angular tutorials' },
      { href: 'https://blog.angular.dev/', label: 'Angular blog' },
    ],
    logo: {
      alt: 'Angular logo',
      src: 'https://cdn.simpleicons.org/angular/DD0031',
    },
    summary: [
      'Angular gives teams a complete framework rather than only a view layer.',
      'It is commonly used when an app needs strong conventions, forms, routing, HTTP, testing patterns, and long-term maintainability.',
      'This track will grow into Angular basics, component communication, services, RxJS, forms, and production architecture.',
    ],
    tags: ['TypeScript', 'Framework', 'Enterprise apps'],
    title: 'Angular',
    usages: [
      'Enterprise dashboards and admin systems',
      'Form-heavy business applications',
      'Applications that benefit from strong project conventions',
      'Teams that want framework-level routing, dependency injection, and testing tools',
    ],
  },
  foundations: {
    accent: 'foundations',
    description:
      'Foundations collects engineering concepts that are useful across frameworks, languages, interviews, and production systems.',
    history: [
      {
        body: 'Every framework changes, but core ideas such as identity, sessions, authorization, HTTP, browser security, and deployment trade-offs keep showing up.',
        title: 'Concepts outlive tools',
      },
      {
        body: 'This area keeps those reusable ideas separate from React, Next.js, Java, and interview tracks so they can be studied once and applied everywhere.',
        title: 'Shared learning space',
      },
    ],
    officialLinks: [
      { href: 'https://oauth.net/2/', label: 'OAuth 2.0' },
      {
        href: 'https://openid.net/developers/how-connect-works/',
        label: 'OpenID Connect',
      },
      {
        href: 'https://cheatsheetseries.owasp.org/',
        label: 'OWASP Cheat Sheet Series',
      },
    ],
    primaryAction: {
      href: APP_PATHS.currentAuthenticationFlow,
      label: 'Open authentication',
    },
    summary: [
      'Use Foundations when the topic is bigger than one frontend framework.',
      'Authentication answers who the user is. Authorization answers what that user, client, or service is allowed to do.',
      'OAuth 2.0 belongs under Authorization. OpenID Connect adds the authentication identity layer commonly used for login.',
    ],
    tags: ['Security', 'Identity', 'Architecture'],
    title: 'Foundations',
    usages: [
      'Explaining login, sessions, cookies, and tokens clearly',
      'Understanding OAuth consent, scopes, and delegated access',
      'Preparing interview answers that are not tied to one framework',
      'Designing production features with security and user trust in mind',
    ],
  },
  java: {
    accent: 'java',
    description:
      'Java is a mature, object-oriented programming language used for backend systems, Android foundations, enterprise applications, distributed services, desktop tools, and long-running platforms.',
    history: [
      {
        body: 'Java was introduced in the 1990s with the promise of portable programs running on the Java Virtual Machine across operating systems.',
        title: 'Portable from the beginning',
      },
      {
        body: 'The platform evolved through generics, lambdas, streams, modules, records, pattern matching, virtual threads, and a large open-source ecosystem.',
        title: 'Steady evolution',
      },
      {
        body: 'OpenJDK is the open-source reference implementation of Java SE, while Oracle and the wider Java community publish documentation, tutorials, and release material.',
        title: 'Open platform',
      },
    ],
    officialLinks: [
      { href: 'https://dev.java/', label: 'dev.java' },
      { href: 'https://www.oracle.com/java/', label: 'Oracle Java' },
      { href: 'https://docs.oracle.com/en/java/', label: 'Java docs' },
      { href: 'https://openjdk.org/', label: 'OpenJDK' },
    ],
    logo: {
      alt: 'Java logo',
      src: 'https://cdn.simpleicons.org/openjdk/000000',
    },
    summary: [
      'Java is a strong first language because it teaches types, classes, methods, object design, collections, errors, and application structure clearly.',
      'Core Java for the Impatient is a very good book to start learning Java from zero; this academy uses it as one guided option inside the Java track.',
      'The landing page stays focused on Java itself. The book chapters live separately in the sidebar so learners can choose that path when ready.',
    ],
    tags: ['Backend', 'OOP', 'JVM'],
    title: 'Java',
    usages: [
      'REST APIs, microservices, and backend systems',
      'Enterprise applications and financial systems',
      'Android ecosystem foundations and JVM-based mobile tooling',
      'Data processing, messaging systems, and long-running server workloads',
    ],
  },
  nextjs: {
    accent: 'nextjs',
    description:
      'Next.js is a React framework for building full-stack web applications with file-based routing, server rendering, static generation, API routes, streaming, and production deployment workflows.',
    history: [
      {
        body: 'Next.js was first released in 2016 to make server-rendered React applications easier to build and deploy.',
        title: 'React on the server',
      },
      {
        body: 'It expanded from pages and server rendering into a full-stack framework with the App Router, Server Components, caching, route handlers, and deployment-focused tooling.',
        title: 'Full-stack framework',
      },
      {
        body: 'Vercel leads Next.js development with the open-source community, and the framework is widely used for production React apps.',
        title: 'Production ecosystem',
      },
    ],
    officialLinks: [
      { href: 'https://nextjs.org/', label: 'Next.js website' },
      { href: 'https://nextjs.org/docs', label: 'Next.js docs' },
      { href: 'https://nextjs.org/learn', label: 'Next.js learn' },
      { href: 'https://vercel.com/', label: 'Vercel' },
    ],
    logo: {
      alt: 'Next.js logo',
      src: 'https://cdn.simpleicons.org/nextdotjs/000000',
    },
    primaryAction: {
      href: APP_PATHS.nextjsIntro,
      label: 'Start with intro',
    },
    summary: [
      'React builds the UI model; Next.js adds application structure around routing, rendering, caching, APIs, and deployment.',
      'It is useful when an app needs SEO, fast first load, server data access, authentication flows, API endpoints, or a clean production path.',
      'This track will introduce Next.js through routing, layouts, Server Components, rendering modes, route handlers, and deployment practice.',
    ],
    tags: ['React framework', 'App Router', 'Full-stack'],
    title: 'Next.js',
    usages: [
      'Marketing sites, documentation, dashboards, and SaaS products',
      'Server-rendered React pages with SEO-sensitive content',
      'Full-stack apps with API routes and server data access',
      'Incrementally rendered apps that mix static, dynamic, and streaming UI',
    ],
  },
  react: {
    accent: 'react',
    description:
      'React is a JavaScript library for building user interfaces from components. It helps developers split complex screens into small, reusable pieces that can manage data, state, and user interaction.',
    history: [
      {
        body: 'React began inside Facebook and was used on Facebook News Feed before being adopted by Instagram.',
        title: 'Early Facebook usage',
      },
      {
        body: 'React was open-sourced in 2013, which helped the wider frontend community adopt component-driven UI development.',
        title: 'Open source release',
      },
      {
        body: 'React later introduced major ideas such as Fiber, Hooks, concurrent rendering improvements, Server Components, and a stronger framework ecosystem.',
        title: 'Modern React',
      },
    ],
    officialLinks: [
      { href: 'https://react.dev/', label: 'React website' },
      { href: 'https://react.dev/learn', label: 'Learn React' },
      { href: 'https://react.dev/reference/react', label: 'API reference' },
      { href: 'https://react.dev/blog', label: 'React blog' },
    ],
    logo: {
      alt: 'React logo',
      src: 'https://cdn.simpleicons.org/react/149ECA',
    },
    primaryAction: {
      href: APP_PATHS.useRefTest,
      label: 'Start with useRef',
    },
    summary: [
      'React teaches you to think in components: each part of the UI receives data, renders output, and updates when state changes.',
      'It can power a small widget, a large dashboard, a mobile app through React Native, or a full-stack app through frameworks such as Next.js.',
      'This track starts with hooks, rendering behavior, state management, performance, and practical interview-ready examples.',
    ],
    tags: ['Components', 'Hooks', 'UI architecture'],
    title: 'React',
    usages: [
      'Interactive web applications and dashboards',
      'Reusable design system components',
      'Single-page applications with client-side state',
      'Native mobile apps through React Native and full-stack apps through frameworks',
    ],
  },
  interviews: {
    accent: 'interviews',
    description:
      'Interview preparation turns technical learning into clear answers, trade-off thinking, and confident communication during real hiring conversations.',
    history: [
      {
        body: 'Strong interviews usually start with fundamentals: explaining concepts clearly, reading code, and connecting answers to practical work.',
        title: 'Foundation first',
      },
      {
        body: 'As candidates grow, interview practice should include architecture, performance, debugging, delivery ownership, and how decisions affect teams.',
        title: 'Beyond syntax',
      },
      {
        body: 'This track collects real interview experiences and turns them into structured practice notes with answer direction.',
        title: 'Experience library',
      },
    ],
    officialLinks: [
      { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
      { href: 'https://github.com/', label: 'GitHub' },
      { href: 'https://stackoverflow.com/', label: 'Stack Overflow' },
    ],
    primaryAction: {
      href: APP_PATHS.interviewPractice,
      label: 'Open experiences',
    },
    summary: [
      'The goal is not memorizing perfect scripts. The goal is answering with enough structure that an interviewer can follow your thinking.',
      'Use the experience pages to practice how you introduce yourself, explain trade-offs, discuss code, and close with the kind of work you want next.',
      'Each interview note should become easier to scan, repeat, and improve over time.',
    ],
    tags: ['Communication', 'Real questions', 'Practice'],
    title: 'Interviews',
    usages: [
      'Practicing real interview questions before a technical round',
      'Turning project experience into concise explanations',
      'Preparing follow-up answers for React, Java, architecture, and delivery topics',
      'Reviewing what went well and what to improve after actual interviews',
    ],
  },
} as const satisfies Record<string, TechnologyLandingContent>;
