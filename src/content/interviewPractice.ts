import type { ReadingListItem } from '@/components/learning/ReadingList';

export type InterviewExperience = {
  company: string;
  description: string;
  items: readonly ReadingListItem[];
  slug: string;
  tags: readonly string[];
  title: string;
};

export const virtusaSingaporeQuestions = [
  {
    answer:
      'Start with your current role, strongest stack, recent domain, and one measurable project result. Keep it under one minute, then invite deeper questions. Example: I am a full-stack engineer focused on React, TypeScript, Java, and cloud delivery. Recently I worked on a digital platform where I improved frontend structure, backend API boundaries, testing confidence, and release quality.',
    eyebrow: 'Opening',
    points: [
      'Mention stack: React, TypeScript, Java/Spring Boot, databases, CI/CD.',
      'Mention domain: banking, healthcare, enterprise, or the most recent real project.',
      'Close with what you want next: scalable frontend/backend work and ownership.',
    ],
    question: 'Give me a brief intro about you.',
  },
  {
    answer:
      'Explain it as layers. Start from routing, then shared layout, feature components, state/data layer, API client, error/loading states, performance decisions, and tests. For example: pages are split by feature, reusable UI components stay in a components layer, server state is handled through RTK Query or fetch wrappers, local UI state stays close to the component, and critical flows are covered with unit/integration tests.',
    eyebrow: 'Frontend architecture',
    points: [
      'Routing/layout: App Router pages, nested layouts, protected routes.',
      'State: local state for UI, Redux Toolkit/Zustand for shared state, server cache separately.',
      'Quality: linting, TypeScript, component tests, accessibility, performance profiling.',
    ],
    question:
      'Explain front end architecture in a recent project you worked on.',
  },
  {
    answer:
      'Describe backend architecture as request flow. A controller or route handler receives the request, validates input, calls a service layer for business logic, uses repositories/data access for persistence, wraps critical writes in a transaction, publishes async events when needed, and returns a consistent response. Cross-cutting concerns include auth, logging, metrics, error handling, and retries.',
    eyebrow: 'Backend architecture',
    points: [
      'Controller/API: validates request shape and maps HTTP concerns.',
      'Service: owns business rules and transaction boundaries.',
      'Repository/integration: isolates database, email, queues, and external APIs.',
    ],
    question:
      'Explain back end architecture in a recent project you worked on.',
  },
  {
    answer:
      'ACID means atomicity, consistency, isolation, and durability. In a backend service, the database transaction should wrap only the database changes that must succeed or fail together.',
    eyebrow: 'Transactions',
    question: 'How do you handle transactions and ACID?',
  },
  {
    answer:
      'A database save and an email are not one normal ACID transaction because email is an external side effect. If DB save succeeds and email fails, the DB commit usually remains. The reliable pattern is transactional outbox: save the business data and an email event in the same DB transaction, then a worker sends the email and retries failures.',
    code: `BEGIN;
INSERT INTO orders (...) VALUES (...);
INSERT INTO outbox_events (type, payload, status)
VALUES ('ORDER_CREATED_EMAIL', '{...}', 'PENDING');
COMMIT;`,
    eyebrow: 'External side effects',
    points: [
      'Do not keep a database transaction open while waiting for email delivery.',
      'Retry failed notifications from the outbox table.',
      'Expose notification status separately if the business flow needs it.',
    ],
    question:
      'If DB save succeeds and then notification email fails, what happens as per ACID?',
  },
  {
    answer:
      'Use idempotency keys, unique constraints, request tokens, distributed locks only when necessary, and database-level guards. The backend stores the first successful result for a key and returns that same result for repeated equivalent requests instead of executing the mutation again.',
    code: `POST /payments
Idempotency-Key: checkout-123

UNIQUE(user_id, idempotency_key)`,
    eyebrow: 'Idempotency',
    points: [
      'Generate a stable idempotency key from the client or workflow.',
      'Protect with a database unique constraint so race conditions are blocked.',
      'Return the existing created resource for duplicate calls.',
    ],
    question:
      'If the same API call is triggered multiple times, how do you avoid multiple executions in the backend?',
  },
  {
    answer:
      'A query can succeed but still be slow because success only means it returned a result, not that it used the best execution path. Common causes include missing indexes, wrong index order, full table scans, large joins, stale statistics, N+1 queries, fetching too many rows, locks, network latency, expensive sorting/grouping, and poor query plans.',
    eyebrow: 'Database performance',
    points: [
      'Run EXPLAIN/EXPLAIN ANALYZE to inspect the query plan.',
      'Check whether filters and joins use proper indexes.',
      'Look at row counts, lock waits, network time, and whether the app fetches too much data.',
    ],
    question:
      'A DB query runs successfully without exception, but it is really slow. What are the causes?',
  },
  {
    answer:
      'Mention replacing ReactDOM.render with createRoot, checking StrictMode side effects, upgrading testing libraries, validating automatic batching behavior, updating router/build tooling, and running regression tests on critical flows.',
    eyebrow: 'React migration',
    question: 'How did you migrate React 18 from previous versions?',
  },
  {
    answer:
      'Yes, common issues are peer dependency ranges, libraries not ready for concurrent rendering, old test utilities, and side effects exposed by StrictMode. Fix by upgrading compatible versions, replacing abandoned packages, isolating risky components, and adding focused regression tests.',
    eyebrow: 'Third-party dependencies',
    question:
      'Did you face React migration difficulties with third-party libraries? How did you fix them?',
  },
  {
    answer:
      'Unit tests check isolated functions/components with mocked dependencies. Integration tests verify modules working together, such as component plus store plus API mock or service plus repository using a test database. I explain it with arrange, act, assert: prepare state, execute the behavior, assert the visible result or persisted change.',
    eyebrow: 'Testing',
    code: `render(<UserList />);
await user.click(screen.getByRole('button', { name: /fetch/i }));
expect(await screen.findByText('Nalin')).toBeInTheDocument();`,
    question: 'How did you carry out unit testing and integration testing?',
  },
  {
    answer:
      'A deadlock happens when transactions wait on each other in a cycle, so none can continue. Avoid it with consistent lock ordering, shorter transactions, proper indexes, lower isolation where valid, retries, and monitoring blocked queries.',
    eyebrow: 'Concurrency',
    question: 'What is a deadlock, and how do you overcome it?',
  },
  {
    answer:
      'Optimistic locking assumes conflicts are rare and checks a version/timestamp during update. Pessimistic locking assumes conflicts are likely and locks rows before update. Optimistic is better for read-heavy systems; pessimistic is useful for high-contention critical updates such as inventory, account balance changes, or seat booking.',
    eyebrow: 'Locking',
    points: [
      'Optimistic: update where id = ? and version = ?, then increment version.',
      'Pessimistic: select the row for update and hold the lock until commit.',
      'Both still need retry/error handling for real production workflows.',
    ],
    question: 'Explain optimistic vs pessimistic locking.',
  },
] as const satisfies readonly ReadingListItem[];

export const bankOfSingaporeQuestions = [
  {
    answer:
      'Use a short, role-focused answer: current role, years or depth in React/TypeScript, banking or enterprise exposure, strongest frontend areas, and one recent result. For a micro frontend role, mention independently deployable features, shared UI standards, API integration, performance, testing, and collaboration with platform teams.',
    eyebrow: 'Opening',
    points: [
      'Keep it around 60 to 90 seconds.',
      'Connect your story to React, TypeScript, micro frontends, and banking delivery.',
      'End with why this role fits: complex frontend systems, ownership, and production quality.',
    ],
    question: 'Explain about yourself.',
  },
  {
    answer:
      'Pick two or three relevant projects and explain the business goal, your role, frontend stack, architecture decisions, testing, release process, and measurable impact. For banking, emphasize reliability, security awareness, accessibility, performance, and working with APIs or backend teams.',
    eyebrow: 'Project experience',
    question: 'What projects have you worked on?',
  },
  {
    answer:
      'Micro frontend architecture splits a large frontend into independently owned and deployable applications. A shell or host app handles layout, routing, authentication context, and shared platform concerns, while remote apps own specific business domains. Common approaches include Module Federation, single-spa, iframe isolation for special cases, or build-time package composition.',
    eyebrow: 'Architecture',
    points: [
      'Share only stable contracts: routes, events, design tokens, API clients, and auth/session data.',
      'Keep remotes independently testable and deployable.',
      'Avoid tight coupling through shared mutable state or hidden dependencies.',
    ],
    question: 'Explain micro frontend architecture.',
  },
  {
    answer:
      'useState manages state inside one component or a small component tree through props. useContext shares a value across many descendants without prop drilling. useContext is useful for theme, auth user, locale, or feature flags, but it is not a full state-management solution for frequently changing large data because context updates can re-render all consumers.',
    eyebrow: 'React state',
    question: 'useContext vs useState.',
  },
  {
    answer:
      'A custom hook is a function whose name starts with use and that composes React hooks into reusable behavior. Create one when multiple components need the same stateful logic, such as debounce, data fetching, media query detection, form state, or session storage access.',
    code: `function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return width;
}`,
    eyebrow: 'Hooks',
    points: [
      'Custom hooks reuse behavior, not UI.',
      'They make components smaller and easier to test.',
      'They must follow the Rules of Hooks.',
    ],
    question: 'How do you write a custom hook? Why do we need one?',
  },
  {
    answer:
      'Use Flexbox when you need one-dimensional layout across a row or column. To create space between items, set the parent to display: flex and use justify-content: space-between. For responsive mobile and web views, use media queries, responsive CSS utilities, or JavaScript only when layout alone is not enough.',
    code: `.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

@media (max-width: 640px) {
  .toolbar {
    align-items: stretch;
    flex-direction: column;
  }
}`,
    eyebrow: 'CSS layout',
    question:
      'What is Flexbox? How do you make space between items and identify mobile vs web view?',
  },
  {
    answer:
      'localStorage persists until the user clears it or the app removes it. sessionStorage lasts only for the current browser tab session and is cleared when that tab closes. Both are synchronous browser storage APIs and should not hold sensitive tokens unless the security model explicitly accepts that risk.',
    eyebrow: 'Browser storage',
    points: [
      'localStorage is shared across tabs for the same origin.',
      'sessionStorage is isolated per tab.',
      'Cookies with secure flags are usually better for sensitive session handling.',
    ],
    question: 'sessionStorage vs localStorage.',
  },
  {
    answer:
      'git reset moves the current branch pointer and can rewrite local history, depending on --soft, --mixed, or --hard. git revert creates a new commit that undoes an older commit, so revert keeps history and is safer for shared branches.',
    eyebrow: 'Git',
    question: 'git reset vs git revert. Which one keeps history?',
  },
  {
    answer:
      'An async function is declared with the async keyword. Inside it, you normally use await to pause until a Promise resolves. async functions always return a Promise, even when you return a plain value.',
    code: `async function loadUser() {
  const response = await fetch('/api/user');
  return response.json();
}`,
    eyebrow: 'Async JavaScript',
    question:
      'What is asynchronous programming? How do you make a function async, and what is the other keyword?',
  },
  {
    answer:
      'some returns a boolean that tells whether at least one item matches the condition. find returns the first matching item itself, or undefined when nothing matches.',
    code: `const numbers = [1, 2, 3];

numbers.some((value) => value === 2); // true
numbers.find((value) => value === 2); // 2`,
    eyebrow: 'Array methods',
    question: 'some vs find.',
  },
  {
    answer:
      'For the equality output: true == "true" is false because the string "true" is not converted to boolean true. true == 1 is true because loose equality converts true to 1. true === 1 is false because strict equality checks both value and type.',
    code: `const valA = true == 'true'; // false
const valB = true == 1; // true
const valC = true === 1; // false`,
    eyebrow: 'Coding output',
    question: 'What is the output of the equality comparison code?',
  },
  {
    answer:
      'Use filter when the result should remain an array. The strict comparison keeps only the number 2 and avoids matching strings such as "2".',
    code: `const arr = [1.2, 2, 3, 4, 5, 6];
const onlyTwo = arr.filter((value) => value === 2);

console.log(onlyTwo); // [2]`,
    eyebrow: 'Coding',
    question:
      'Given const arr = [1.2, 2, 3, 4, 5, 6], write a function to filter only 2.',
  },
  {
    answer:
      'Common micro frontend problems include version conflicts, duplicated dependencies, inconsistent UI, harder local development, cross-app communication complexity, routing conflicts, performance overhead, and unclear ownership. Reduce the risk with strong contracts, platform standards, shared design tokens, observability, independent tests, and careful dependency governance.',
    eyebrow: 'Trade-offs',
    question: 'What are the problems of using micro frontends?',
  },
  {
    answer:
      'Lazy loading means loading code only when it is needed instead of including everything in the first bundle. In React, use dynamic import with React.lazy and Suspense, or next/dynamic in Next.js. It improves initial load time, but you need good loading states and error handling.',
    code: `const ReportsPage = React.lazy(() => import('./ReportsPage'));

<Suspense fallback={<Spinner />}>
  <ReportsPage />
</Suspense>`,
    eyebrow: 'Performance',
    question: 'Explain lazy loading.',
  },
] as const satisfies readonly ReadingListItem[];

export const dbsReactLeadQuestions = [
  {
    answer:
      'Give a 60-to-90-second role-focused introduction: who you are, your frontend depth, banking experience, leadership scope, and one measurable result. Example: I am a senior frontend engineer specializing in React, TypeScript, and micro frontends. At DBS I contributed to a platform with more than 100 micro frontends, working with domain teams and shared engineering standards for independent delivery. I focus on scalable architecture, performance, testability, and helping teams make sound technical decisions. I am now looking for a React Lead role where I can combine hands-on delivery with technical leadership.',
    eyebrow: 'Opening',
    points: [
      'State your current professional identity and strongest technologies.',
      'Connect your DBS banking and large-scale micro frontend experience to the role.',
      'Use only results and responsibilities that you can explain confidently in follow-up questions.',
    ],
    question: 'Introduce yourself for this React Lead role.',
  },
  {
    answer:
      'Start by naming the actual DBS micro frontends you worked on and the business capability each owned; do not imply ownership of all 100-plus applications. Then explain the platform: a host or shell owned authentication, global layout, top-level navigation, error boundaries, telemetry, and remote discovery. Domain teams owned independently built and deployed remotes. Webpack Module Federation exposed each remote entry at runtime, while shared React, React DOM, the design system, and approved platform libraries were configured as compatible singletons. Contracts covered routes, events, permissions, and shared UI APIs. CI/CD published versioned artifacts, ran contract and integration tests, and supported gradual rollout and rollback.',
    eyebrow: 'Micro frontend architecture',
    points: [
      'Be exact about which micro frontends you personally changed, reviewed, or supported.',
      'Explain team ownership, repository and deployment boundaries, not only webpack configuration.',
      'Mention failure isolation: remote load timeout, fallback UI, logging, and independent rollback.',
      'Avoid a global shared store across all remotes; prefer URL state, typed events, or narrow platform APIs.',
    ],
    question:
      'Which DBS micro frontends did you work on, and how did you implement the architecture across a 100-plus-MFE engineering platform?',
  },
  {
    answer:
      'Treat performance as a measured workflow. First establish business targets such as Core Web Vitals, interaction latency, and route load time. Reproduce on realistic devices and networks, then use Lighthouse, Chrome Performance, React Profiler, bundle analysis, and production telemetry to locate the bottleneck. Reduce JavaScript with route/component splitting, tree shaking, smaller dependencies, and lazy loading. Reduce React work by keeping state local, removing unnecessary effects, stabilizing props only where profiling proves value, virtualizing long lists, and debouncing expensive input. Optimize images, fonts, CSS, API waterfalls, caching, prefetching, and server rendering where appropriate. Finish by re-measuring, adding performance budgets to CI, and monitoring regressions in production.',
    eyebrow: 'React performance',
    points: [
      'Network: compress responses, cache immutable assets, avoid request waterfalls, paginate data, and cancel stale requests.',
      'Rendering: inspect re-renders, normalize expensive computations, virtualize large collections, and schedule non-urgent updates.',
      'Loading: split by route or feature, preload only critical assets, reserve layout space, and use optimized images and fonts.',
      'Governance: define budgets for bundle size and Web Vitals, compare before and after, and prevent regressions in CI.',
    ],
    question:
      'How would you improve performance in a React application from investigation through production monitoring?',
  },
  {
    answer:
      'With react-router-dom, BrowserRouter uses the browser History API: pushState creates a new URL/history entry, replaceState replaces the current entry, and popstate lets the router respond to Back and Forward. The server must return the SPA entry file for unknown application routes, otherwise refreshing /orders/42 gives a 404. MemoryRouter stores entries in memory, does not change the address bar, and is useful for tests, Storybook, native shells, or an embedded micro frontend that must not own the browser URL. In a micro frontend, normally one shell owns BrowserRouter and passes route context or a basename to remotes; nested routers should not compete for global history.',
    code: `import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

// Web application: URL and Back/Forward buttons are synchronized.
<BrowserRouter>
  <Routes>
    <Route path="/customers/:id" element={<CustomerPage />} />
  </Routes>
</BrowserRouter>

// Test, native container, or isolated embedded flow: no address-bar change.
<MemoryRouter initialEntries={['/customers/42']}>
  <Routes>
    <Route path="/customers/:id" element={<CustomerPage />} />
  </Routes>
</MemoryRouter>`,
    eyebrow: 'React Router',
    points: [
      'BrowserRouter creates shareable, refreshable URLs and uses the browser history stack.',
      'MemoryRouter accepts initialEntries and initialIndex, making navigation deterministic in tests.',
      'HashRouter is another option when the server cannot be configured for SPA fallback, but the URL contains #.',
    ],
    question:
      'How did you handle routing, and what is the difference between browser history and memory history in React Router?',
  },
  {
    answer:
      'Module Federation 1 is the original webpack runtime model built around host/remote containers, remoteEntry.js, exposes, remotes, and shared dependency negotiation. Module Federation 2 is the newer enhanced ecosystem: it keeps the same core federation concept but adds a bundler-neutral runtime and tooling, manifest-based remote metadata, runtime plugins, stronger type-generation and type-consumption support, improved debugging, and support across webpack-compatible and other modern build integrations. The practical comparison depends on the exact plugin and bundler versions, so explain the capabilities your project actually used rather than presenting v2 as a completely different architecture.',
    eyebrow: 'Module Federation',
    points: [
      'Both versions support independently deployed hosts and remotes with runtime composition.',
      'V1 commonly relies directly on webpack configuration and remoteEntry.js contracts.',
      'V2 emphasizes enhanced tooling, manifests, runtime extensibility, type safety, and broader bundler integration.',
      'Migration requires checking shared-dependency policy, remote compatibility, deployment URLs, and rollback behavior.',
    ],
    question: 'What is the difference between Module Federation v1 and v2?',
  },
  {
    answer:
      'Nginx can improve application delivery even without a CDN because it sits at the origin as a reverse proxy and static-file server. Enable Brotli or gzip for text assets, serve fingerprinted JavaScript and CSS with long immutable cache headers, keep HTML short-lived, use HTTP/2 or HTTP/3 where supported, reuse upstream connections with keep-alive, buffer or stream responses appropriately, and configure worker and file limits based on measured load. Proxy caching can reduce repeated upstream work for safe cacheable responses, and load balancing can distribute requests. Measure time to first byte, throughput, upstream latency, cache hit ratio, and compression savings before tuning.',
    code: `server {
  listen 443 ssl http2;

  gzip on;
  gzip_types text/css application/javascript application/json image/svg+xml;

  location /_next/static/ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  location /api/ {
    proxy_http_version 1.1;
    proxy_set_header Connection "";
    proxy_pass http://application_upstream;
  }
}`,
    eyebrow: 'Nginx performance',
    points: [
      'A CDN caches near users; Nginx optimizes origin serving and reverse-proxy behavior. They can complement each other.',
      'Do not cache personalized or mutation responses without a deliberate cache key and privacy policy.',
      'Avoid blindly enabling every optimization; validate resource usage and latency under load.',
    ],
    question:
      'Have you used Apache or Nginx, and how can Nginx itself improve application performance?',
  },
  {
    answer:
      'A Promise represents the eventual fulfillment or rejection of one asynchronous operation. The JavaScript Promise behavior is the same in browsers and Node.js, but the host capabilities differ. Browsers provide DOM events, fetch, Web Workers, and Web APIs; Node provides filesystem, sockets, streams, process APIs, and a libuv-based event loop. Browser JavaScript normally runs on a page main thread, while Node can also use worker_threads and a libuv thread pool for selected native operations. In both environments, Promise callbacks run as microtasks after the current call stack, but Node also has process.nextTick, whose queue is processed with higher priority and can starve other work if abused.',
    code: `console.log('start');

setTimeout(() => console.log('timer'), 0);
Promise.resolve().then(() => console.log('promise microtask'));

console.log('end');
// Browser output: start, end, promise microtask, timer

// Node also has:
process.nextTick(() => console.log('nextTick'));`,
    eyebrow: 'Promises and runtimes',
    points: [
      'Promise construction is synchronous; then/catch/finally handlers are scheduled as microtasks.',
      'fetch is available in modern Node versions, but DOM APIs such as document and window are browser-only.',
      'Async work is performed by host APIs; a Promise is the interface for its eventual result, not a thread.',
    ],
    question:
      'Explain Promises and the important differences between JavaScript running in Node.js and in a browser.',
  },
  {
    answer:
      'TypeScript is a statically checked superset of JavaScript that compiles to JavaScript. It adds type annotations and inference, interfaces and type aliases, generics, discriminated unions, utility types, and tooling that can understand contracts across the codebase. It catches many incorrect property accesses, argument types, and unhandled variants before runtime; makes refactoring and navigation safer; and documents component props, API models, and shared micro frontend contracts. It does not validate unknown runtime data or eliminate JavaScript runtime errors, so API responses still need schema validation and tests.',
    eyebrow: 'TypeScript',
    points: [
      'Use strict mode and avoid replacing useful types with any.',
      'Generate or share types only from stable contracts; do not tightly couple domains through internal models.',
      'Pair compile-time types with runtime validation at network, storage, and user-input boundaries.',
    ],
    question:
      'What is TypeScript, and what does it add to a JavaScript application?',
  },
  {
    answer:
      'The event loop coordinates synchronous JavaScript with asynchronous host work. First, the engine runs the current task and call stack to completion. When the stack becomes empty, it drains the microtask queue, including Promise reactions and queueMicrotask callbacks. The browser may then render before taking the next task, such as a timer, message, or user event. This repeats. A long task blocks input and rendering, while an endless microtask chain can delay timers and painting. Node uses event-loop phases for timers, pending callbacks, poll, check, and close callbacks, and processes its nextTick and Promise microtasks at defined checkpoints.',
    code: `button.addEventListener('click', () => {
  console.log('click task');
  queueMicrotask(() => console.log('microtask'));
  setTimeout(() => console.log('next timer task'), 0);
  console.log('task end');
});

// click task -> task end -> microtask -> next timer task`,
    eyebrow: 'Event loop',
    points: [
      'Call stack: currently executing synchronous frames.',
      'Microtasks: Promise handlers, queueMicrotask, and MutationObserver in browsers; drained before the next task.',
      'Tasks: timers, UI events, messages, and other host callbacks.',
      'Rendering is a browser concern and generally happens between tasks, not halfway through synchronous code.',
    ],
    question:
      'Explain the event loop correctly, including the call stack, task queue, and microtask queue.',
  },
  {
    answer:
      'Use a WebView as a clear trust boundary. The native app owns authentication, secure storage, device permissions, navigation policy, and WebView lifecycle; React owns the web UI and web state. Define a small versioned message protocol such as {id, version, type, payload}, validate every message at both ends, allow-list origins and message types, correlate request and response IDs, and return structured errors. React-to-native commonly uses window.ReactNativeWebView.postMessage in React Native or platform message handlers on iOS and Android. Native-to-React can inject JavaScript or dispatch a CustomEvent that a thin bridge adapter consumes. Never expose a general native method executor, secrets, or arbitrary URL loading.',
    code: `// React -> native
window.ReactNativeWebView?.postMessage(JSON.stringify({
  id: crypto.randomUUID(),
  version: 1,
  type: 'OPEN_CAMERA',
  payload: { purpose: 'profile-photo' },
}));

// Native -> React through a deliberately named browser event
window.addEventListener('native-message', (event) => {
  const message = validateNativeMessage(event.detail);
  bridge.resolve(message.id, message);
});`,
    eyebrow: 'In-app WebView architecture',
    points: [
      'Security: HTTPS only, origin allow-list, schema validation, least-privilege commands, and no secrets in messages.',
      'Reliability: handshake when ready, protocol versioning, request IDs, timeouts, retries only for idempotent commands, and lifecycle recovery.',
      'User experience: coordinate Back behavior, loading and offline states, keyboard and safe areas, deep links, and accessibility.',
      'Testing: contract tests for message schemas plus integration tests on both iOS and Android containers.',
    ],
    question:
      'How would you architect an in-app WebView and two-way communication between native code and React?',
  },
] as const satisfies readonly ReadingListItem[];

export const mfeTargetQuestions = [
  {
    eyebrow: 'Architecture',
    question: 'What is a micro frontend, and when should a team use one?',
    answer:
      'A micro frontend divides a large frontend into business-aligned applications that teams can develop, test, and deploy independently. Use it when organizational scale and independent release ownership justify the added runtime, governance, and operational complexity. A modular monolith is usually simpler for one small team or a product that always releases as one unit.',
    points: [
      'Split by stable business domain, not visual widgets.',
      'The team and deployment boundaries are as important as the technical integration.',
      'State the costs: duplicate code, consistency, routing, observability, and version coordination.',
    ],
  },
  {
    eyebrow: 'Composition',
    question:
      'How can micro frontends be composed, and how do you choose an approach?',
    answer:
      'Runtime composition loads independently deployed applications in the browser using Module Federation, single-spa, web components, or occasionally iframes. Build-time composition consumes versioned packages during the host build. Server-side composition joins fragments before HTML reaches the browser. Choose from deployment independence, isolation, SEO, performance, framework compatibility, security, and operational maturity—not popularity alone.',
  },
  {
    eyebrow: 'Routing',
    question: 'Who should own routing in a micro frontend system?',
    answer:
      'One shell should normally own browser history, authentication gates, top-level routes, and 404 behavior. A remote can own routes inside its assigned base path, such as /payments/*. The shell and remote agree on a versioned route contract. This prevents multiple routers from competing for the URL and keeps deep links, refresh, Back, and Forward predictable.',
  },
  {
    eyebrow: 'Communication',
    question: 'How should micro frontends communicate without tight coupling?',
    answer:
      'Prefer the URL for navigable state, explicit props or platform APIs for parent-child data, and typed domain events for loose cross-application notifications. Keep event names, payload schemas, ownership, and compatibility versioned. Avoid a single mutable global store shared by every remote because it removes independent ownership and makes deployments coordinate silently.',
  },
  {
    eyebrow: 'Dependencies',
    question: 'How do you share React and other dependencies safely?',
    answer:
      'Share only expensive or identity-sensitive dependencies that truly require one runtime instance, such as React and React DOM. Configure compatible singleton versions and test version negotiation. Keep domain libraries private unless they are stable platform contracts. Pinning everything centrally reduces duplication but also recreates a monolith where every remote must upgrade together.',
  },
  {
    eyebrow: 'Security',
    question:
      'How do authentication and authorization work across micro frontends?',
    answer:
      'The shell can establish the user session and expose a narrow identity or token-access contract, but every backend must enforce authorization independently. Remotes may use permissions to hide unavailable UI, never as the security boundary. Protect remote origins, apply CSP, validate cross-app messages, avoid leaking tokens through URLs or storage, and treat every remote artifact as executable code in the host.',
  },
  {
    eyebrow: 'Delivery',
    question: 'How do independent deployment, versioning, and rollback work?',
    answer:
      'Each remote publishes an immutable versioned artifact and compatible manifest. Contract, integration, security, and smoke tests run before a controlled rollout. The host resolves an approved version or deployment channel. Keep backward-compatible contracts, feature flags, canary exposure, health signals, and an instant mapping rollback so one bad remote does not require rebuilding the entire platform.',
  },
  {
    eyebrow: 'Performance',
    question:
      'How do you prevent micro frontends from making the application slow?',
    answer:
      'Set platform budgets for JavaScript, CSS, requests, Core Web Vitals, and route transitions. Deduplicate only safe shared dependencies, lazy-load remotes by route, prefetch from evidence, compress and cache immutable assets, prevent request waterfalls, and avoid every remote initializing analytics or design-system code again. Measure by route and remote in real-user monitoring rather than relying only on local Lighthouse runs.',
  },
  {
    eyebrow: 'Resilience',
    question: 'What happens when a remote fails to load?',
    answer:
      'The shell should apply a timeout and error boundary around each remote, show a useful localized fallback, log the remote name and version with a correlation ID, and allow unaffected navigation to continue. Retry only safe transient failures, use circuit-breaking or disablement when failures repeat, and keep a known-good artifact available for rollback.',
  },
  {
    eyebrow: 'Quality and operations',
    question:
      'How do you test, observe, and govern a large micro frontend platform?',
    answer:
      'Teams own unit and component tests for their remote, contract tests for platform APIs and events, integration tests with the shell, and a small set of end-to-end business journeys. Standard telemetry must include route, remote, version, release, Web Vitals, errors, and correlation IDs. A platform team provides templates, design tokens, security rules, dependency policy, CI gates, and dashboards while domain teams retain delivery ownership.',
  },
] as const satisfies readonly ReadingListItem[];

export const interviewExperiences = [
  {
    company: 'DBS via NCS',
    description:
      'React Lead interview experience covering large-scale micro frontends, performance, routing, platform delivery, JavaScript internals, TypeScript, and native WebView integration.',
    items: dbsReactLeadQuestions,
    slug: 'dbs-ncs-react-lead',
    tags: ['DBS', 'NCS', 'React Lead', 'Micro frontend', 'Architecture'],
    title: 'DBS via NCS React Lead Interview Experience',
  },
  {
    company: 'Target interview questions',
    description:
      'Ten common micro frontend architecture questions with concise, lead-level answers covering design, delivery, security, performance, resilience, and operations.',
    items: mfeTargetQuestions,
    slug: 'mfe-top-10',
    tags: ['Micro frontend', 'Architecture', 'React Lead', 'Module Federation'],
    title: 'Top 10 Micro Frontend Interview Questions',
  },
  {
    company: 'Bank of Singapore',
    description:
      'React micro frontend developer interview questions with concise answer direction and coding outputs.',
    items: bankOfSingaporeQuestions,
    slug: 'bank-of-singapore',
    tags: ['Bank of Singapore', 'React', 'Micro frontend', 'Coding'],
    title: 'Bank of Singapore React Micro Frontend Developer Interview',
  },
  {
    company: 'Virtusa Singapore',
    description:
      'Full-stack interview practice covering frontend, backend, transactions, testing, and concurrency.',
    items: virtusaSingaporeQuestions,
    slug: 'virtusa-singapore',
    tags: [
      'Virtusa Singapore',
      'Frontend',
      'Backend',
      'Transactions',
      'Testing',
    ],
    title: 'Virtusa Singapore Interview Questions',
  },
] as const satisfies readonly InterviewExperience[];

export const getInterviewExperience = (slug: string) =>
  interviewExperiences.find((experience) => experience.slug === slug);
