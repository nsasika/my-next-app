import type { ReadingListItem } from '@/components/learning/ReadingList';

export type InterviewExperience = {
  company: string;
  description: string;
  items: readonly ReadingListItem[];
  slug: string;
  tags: readonly string[];
  title: string;
};

const virtusaSingaporeQuestions = [
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

const bankOfSingaporeQuestions = [
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

export const interviewExperiences = [
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
