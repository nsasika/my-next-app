import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';

export const nextjsLessons = {
  intro: {
    header: {
      description:
        'Why modern React projects often start with a framework, how Create React App was deprecated for new apps, and where Next.js fits.',
      eyebrow: 'Next.js / Fundamentals',
      tags: ['React Framework', 'CRA Migration', 'App Router'],
      title: 'Intro to Next.js',
    },
    theory: {
      title: 'React builds UI; Next.js builds the application shell around it',
      summary:
        'Create React App helped developers avoid hand-wiring tooling in 2016, but production apps now need routing, data loading, rendering choices, caching, errors, accessibility, auth, SEO, and deployment patterns working together.',
      points: [
        'React now recommends starting new production apps with a framework when the app needs routing or production infrastructure.',
        'Create React App was deprecated for new apps on February 14, 2025 and remains mainly in maintenance mode.',
        'Next.js adds file-system routing, Server Components, route handlers, metadata, caching, middleware/proxy, and deployment workflows.',
        'You can still build a React app with Vite or another build tool when you intentionally want a client-only setup.',
      ],
      code: `React: component model
Next.js: routing + rendering + data + APIs + deployment`,
      whatToTry: [
        'Compare a single React component with this app route: src/app/(learning)/nextjs/page.tsx.',
        'Notice that each route owns its URL, rendering boundary, and metadata opportunity.',
      ],
    },
    flow: {
      title: 'Why the ecosystem moved beyond CRA',
      steps: [
        {
          label: 'Tooling starter',
          description:
            'CRA bundled JSX, linting, dev server, and production build.',
        },
        {
          label: 'Production needs',
          description:
            'Apps needed routing, data fetching, code splitting, SSR, SSG, auth, and caching.',
        },
        {
          label: 'Framework layer',
          description:
            'Frameworks integrate those concerns so teams do not rebuild them each time.',
        },
        {
          label: 'Next.js fit',
          description:
            'Next.js gives React a production framework with App Router and deployment patterns.',
        },
      ],
    },
    references: [
      {
        href: 'https://react.dev/blog/2025/02/14/sunsetting-create-react-app',
        label: 'React: Sunsetting Create React App',
      },
      {
        href: 'https://react.dev/learn/creating-a-react-app',
        label: 'React: Creating a React App',
      },
      {
        href: 'https://nextjs.org/docs/app/guides/migrating/from-create-react-app',
        label: 'Next.js: Migrate from CRA',
      },
    ],
  },
  routers: {
    header: {
      description:
        'How the App Router differs from the older Pages Router and why new Next.js work should generally use the app directory.',
      eyebrow: 'Next.js / Routing',
      tags: ['App Router', 'Pages Router', 'File-system Routing'],
      title: 'App Router vs Pages Router',
    },
    theory: {
      title: 'App Router is the modern route model',
      summary:
        'Both routers map files to URLs, but the App Router uses React Server Components, nested layouts, route groups, loading states, server actions, and route handlers in a more composable model.',
      points: [
        'Pages Router uses files in pages and data functions such as getServerSideProps.',
        'App Router uses app folders with page.tsx, layout.tsx, loading.tsx, error.tsx, and route.ts.',
        'Layouts persist across navigation, which is useful for sidebars, shells, and shared context.',
        'Use Pages Router mainly for legacy projects unless the project already depends on it.',
      ],
      code: `app/dashboard/page.tsx -> /dashboard
app/dashboard/layout.tsx -> persistent dashboard shell
app/api/users/route.ts -> route handler`,
    },
    references: [
      { href: 'https://nextjs.org/docs/app', label: 'Next.js App Router docs' },
      {
        href: 'https://nextjs.org/docs/pages',
        label: 'Next.js Pages Router docs',
      },
    ],
  },
  components: {
    header: {
      description:
        'How Server Components and Client Components split work between the server and the browser.',
      eyebrow: 'Next.js / Components',
      tags: ['Server Components', 'Client Components', 'use client'],
      title: 'Server Components and Client Components',
    },
    theory: {
      title: 'Keep server work on the server, push interactivity down',
      summary:
        'In the App Router, components are Server Components by default. Add use client only when a component needs browser APIs, state, effects, or event handlers.',
      points: [
        'Server Components can fetch data and keep secrets away from the browser.',
        'Client Components are needed for click handlers, useState, useEffect, forms with local state, and browser APIs.',
        'A Server Component can render a Client Component and pass serializable props to it.',
        'Smaller Client Component boundaries usually mean less JavaScript sent to the browser.',
      ],
      code: `// Server Component by default
export default async function Page() {
  const data = await getData();
  return <InteractiveChart data={data} />;
}

// InteractiveChart.tsx
'use client';`,
    },
    references: [
      {
        href: 'https://nextjs.org/docs/app/getting-started/server-and-client-components',
        label: 'Server and Client Components',
      },
      {
        href: 'https://react.dev/reference/rsc/server-components',
        label: 'React Server Components',
      },
    ],
  },
  rendering: {
    header: {
      description:
        'When to use SSR, SSG, ISR, and CSR in practical application pages.',
      eyebrow: 'Next.js / Rendering',
      tags: ['SSR', 'SSG', 'ISR', 'CSR'],
      title: 'SSR, SSG, ISR, and CSR',
    },
    theory: {
      title: 'Choose rendering per route, not once for the whole app',
      summary:
        'Next.js lets one app mix static pages, server-rendered pages, incrementally regenerated pages, and client-rendered interactive islands.',
      points: [
        'SSG is best for content that can be generated at build time.',
        'ISR updates static content after deployment without rebuilding the whole app.',
        'SSR is useful when each request needs fresh server data or user-specific checks.',
        'CSR is useful for highly interactive widgets after the main page is already useful.',
      ],
      code: `SSG: docs, marketing, public lessons
ISR: articles or catalog pages that refresh
SSR: account pages and request-specific data
CSR: charts, filters, local interactions`,
    },
    flow: {
      title: 'Rendering decision path',
      steps: [
        {
          label: 'Can build once?',
          description: 'Use SSG when content is known ahead of time.',
        },
        {
          label: 'Can refresh later?',
          description: 'Use ISR when static content needs periodic updates.',
        },
        {
          label: 'Need each request?',
          description: 'Use SSR for request-specific server work.',
        },
        {
          label: 'Need browser state?',
          description: 'Use CSR for interactive client-only behavior.',
        },
      ],
    },
    references: [
      {
        href: 'https://nextjs.org/docs/app/guides/rendering',
        label: 'Next.js rendering',
      },
      {
        href: 'https://nextjs.org/docs/app/guides/incremental-static-regeneration',
        label: 'Next.js ISR',
      },
    ],
  },
  caching: {
    header: {
      description:
        'How caching and revalidation reduce repeated work while still keeping pages fresh.',
      eyebrow: 'Next.js / Data',
      tags: ['Caching', 'Revalidation', 'Performance'],
      title: 'Caching and Revalidation',
    },
    theory: {
      title: 'Cache the right work and revalidate intentionally',
      summary:
        'Caching stores expensive results so future requests can reuse them. Revalidation tells the app when cached data should be refreshed.',
      points: [
        'Static rendering is a form of caching at the page level.',
        'fetch requests and cached functions can reuse data instead of repeating work.',
        'Revalidate by time for predictable freshness windows.',
        'Revalidate by path or tag after mutations that change known content.',
      ],
      code: `fetch('/api/products', {
  next: { revalidate: 3600 },
});

revalidatePath('/products');`,
    },
    references: [
      {
        href: 'https://nextjs.org/docs/app/getting-started/caching-and-revalidating',
        label: 'Caching and revalidating',
      },
      {
        href: 'https://nextjs.org/docs/app/api-reference/functions/revalidatePath',
        label: 'revalidatePath',
      },
    ],
  },
  middleware: {
    header: {
      description:
        'How Next.js proxy logic can run before a route loads for auth gating, redirects, and request shaping.',
      eyebrow: 'Next.js / Request Flow',
      tags: ['Proxy', 'Middleware', 'Route Protection'],
      title: 'Middleware and Proxy',
    },
    theory: {
      title: 'Proxy code runs before matching route content',
      summary:
        'This app uses proxy.ts to check the session cookie before protected learning routes render. That makes route protection a server-side decision rather than a client-side redirect after content loads.',
      points: [
        'Use proxy/middleware for lightweight request decisions.',
        'Keep heavy business logic in route handlers or server functions.',
        'Auth proxy should allow public assets and login routes while protecting private routes.',
        'Set no-store headers on redirects that depend on session state.',
      ],
      code: `export async function proxy(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const verifiedUser = token ? await verifyToken(token) : null;
  return verifiedUser ? NextResponse.next() : redirectToLogin(request);
}`,
    },
    references: [
      {
        href: 'https://nextjs.org/docs/app/api-reference/file-conventions/proxy',
        label: 'Next.js proxy file convention',
      },
      {
        href: 'https://nextjs.org/docs/app/guides/authentication',
        label: 'Next.js authentication',
      },
    ],
  },
  layouts: {
    header: {
      description:
        'How layouts, route groups, and nested segments organize an App Router project.',
      eyebrow: 'Next.js / Structure',
      tags: ['Layouts', 'Route Groups', 'Nested Routes'],
      title: 'Layouts and Route Groups',
    },
    theory: {
      title: 'Layouts preserve shared UI across navigation',
      summary:
        'A layout wraps child routes and stays mounted while users move inside that segment. Route groups organize code without changing the URL.',
      points: [
        'layout.tsx is ideal for sidebars, headers, providers, and page shells.',
        'Route groups such as (learning) keep files organized without adding URL segments.',
        'Nested layouts let each part of the app own its own shell.',
        'Keep layouts focused so unrelated route groups do not inherit unnecessary UI.',
      ],
      code: `src/app/(learning)/layout.tsx
src/app/(auth)/login/page.tsx
src/app/(public)/nalin/page.tsx
src/app/(public)/academy/page.tsx`,
    },
    references: [
      {
        href: 'https://nextjs.org/docs/app/getting-started/layouts-and-pages',
        label: 'Layouts and pages',
      },
      {
        href: 'https://nextjs.org/docs/app/api-reference/file-conventions/route-groups',
        label: 'Route groups',
      },
    ],
  },
  authentication: {
    header: {
      description: 'How authentication fits into a Next.js App Router project.',
      eyebrow: 'Next.js / Security',
      tags: ['Authentication', 'Cookies', 'Route Handlers'],
      title: 'Authentication in Next.js',
    },
    theory: {
      title:
        'Authenticate on the server and keep session checks close to routes',
      summary:
        'A production Next.js app typically validates identity through a provider or backend, stores a secure session, and checks that session before rendering protected content.',
      points: [
        'Use route handlers or server actions to process login and logout.',
        'Use HTTP-only cookies for sessions so browser JavaScript cannot read tokens.',
        'Use proxy for broad route gating and server components for page-specific data checks.',
        'Use OAuth/OIDC providers when you need real user identity and delegated login.',
      ],
      code: `login route -> verify user -> set secure cookie
proxy -> verify cookie -> allow or redirect
server page -> fetch user-specific data`,
    },
    references: [
      {
        href: 'https://nextjs.org/docs/app/guides/authentication',
        label: 'Next.js authentication guide',
      },
      {
        href: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',
        label: 'OWASP authentication cheat sheet',
      },
    ],
  },
  seo: {
    header: {
      description:
        'How Next.js metadata, server rendering, and structured content improve discovery and sharing.',
      eyebrow: 'Next.js / Discovery',
      tags: ['SEO', 'Metadata', 'Open Graph'],
      title: 'SEO and Metadata',
    },
    theory: {
      title: 'SEO starts with useful HTML and accurate metadata',
      summary:
        'Next.js can generate metadata per route, render crawlable HTML, and produce Open Graph data for better search and social previews.',
      points: [
        'Use metadata for title, description, canonical URLs, and social previews.',
        'Use server-rendered or static content for pages that search engines and users should read immediately.',
        'Use semantic HTML headings and link text before thinking about advanced SEO tricks.',
        'Use sitemap and robots metadata for larger public sites.',
      ],
      code: `export const metadata = {
  title: 'Intro to Next.js',
  description: 'Learn App Router fundamentals.',
};`,
    },
    references: [
      {
        href: 'https://nextjs.org/docs/app/getting-started/metadata-and-og-images',
        label: 'Metadata and OG images',
      },
      {
        href: 'https://nextjs.org/docs/app/api-reference/functions/generateMetadata',
        label: 'generateMetadata',
      },
    ],
  },
  deploymentMonitoring: {
    header: {
      description:
        'What production readiness means after the app builds: deploys, environment variables, logs, analytics, performance, and quality gates.',
      eyebrow: 'Next.js / Production',
      tags: ['Vercel', 'Monitoring', 'Quality Gates'],
      title: 'Deployment and Production Monitoring',
    },
    theory: {
      title: 'Production is build, deploy, observe, and improve',
      summary:
        'A healthy Next.js deployment has repeatable builds, environment-specific configuration, quality checks, runtime logs, performance monitoring, and alerting for user-impacting issues.',
      points: [
        'Use CI to run lint, type-check, tests, coverage, and SonarQube analysis before merging.',
        'Store secrets in deployment environment variables, not in source code.',
        'Watch build logs, function logs, web vitals, errors, and traffic trends.',
        'Use production monitoring to catch slow pages, failed auth flows, and broken API calls.',
      ],
      code: `pull request -> CI checks -> preview deploy
merge -> production deploy -> logs + analytics + alerts`,
    },
    references: [
      {
        href: 'https://nextjs.org/docs/app/getting-started/deploying',
        label: 'Next.js deploying',
      },
      {
        href: 'https://vercel.com/docs/observability',
        label: 'Vercel observability',
      },
      {
        href: 'https://docs.sonarsource.com/sonarqube-cloud/',
        label: 'SonarQube Cloud docs',
      },
    ],
  },
} as const satisfies Record<string, ConceptLessonContent>;
