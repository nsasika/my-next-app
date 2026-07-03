import ReadingList from '@/components/learning/ReadingList';
import PageHeader from '@/components/ui/PageHeader';

const interviewQuestions = [
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
] as const;

export default function InterviewPracticePage() {
  return (
    <>
      <PageHeader
        description="Read the interview in order. The first question is open; expand the next one when you are ready."
        eyebrow="Interview practice"
        tags={[
          'Virtusa Singapore',
          'Frontend',
          'Backend',
          'Transactions',
          'Testing',
        ]}
        title="Virtusa Singapore Interview Questions"
      />

      <ReadingList items={interviewQuestions} />
    </>
  );
}
