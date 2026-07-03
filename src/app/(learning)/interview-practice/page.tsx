import ReadingList from '@/components/learning/ReadingList';
import PageHeader from '@/components/ui/PageHeader';

const interviewQuestions = [
  {
    answer:
      'Start with role, years, strongest stack, recent domain, and one measurable project result. Keep it under one minute, then invite deeper questions.',
    eyebrow: 'Opening',
    question: 'Give me a brief intro about you.',
  },
  {
    answer:
      'Explain route structure, component boundaries, state management, API layer, error/loading handling, performance choices, testing, and deployment. Use one recent project as the story.',
    eyebrow: 'Frontend architecture',
    question:
      'Explain front end architecture in a recent project you worked on.',
  },
  {
    answer:
      'Cover controller/API layer, service layer, repository/data access, validation, transaction boundary, async integrations, logging, security, and deployment/runtime concerns.',
    eyebrow: 'Backend architecture',
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
      'A database save and an email are not one normal ACID transaction because email is an external side effect. If DB save succeeds and email fails, the DB commit usually remains. Use an outbox table, retry worker, status column, or compensating action so notification delivery is reliable without rolling back committed business data.',
    eyebrow: 'External side effects',
    question:
      'If DB save succeeds and then notification email fails, what happens as per ACID?',
  },
  {
    answer:
      'Use idempotency keys, unique constraints, request tokens, distributed locks only when necessary, and database-level guards. The API should return the existing result for repeated equivalent requests instead of executing the mutation again.',
    eyebrow: 'Idempotency',
    question:
      'If the same API call is triggered multiple times, how do you avoid multiple executions in the backend?',
  },
  {
    answer:
      'Common causes include missing indexes, wrong index order, full table scans, large joins, stale statistics, N+1 queries, fetching too many rows, locks, network latency, expensive sorting/grouping, and poor query plans. Check EXPLAIN, slow query logs, row counts, and indexes.',
    eyebrow: 'Database performance',
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
      'Unit tests check isolated functions/components with mocked dependencies. Integration tests verify modules working together, such as component plus store plus API mock or service plus repository using a test database. Explain arrange, act, assert and CI coverage.',
    eyebrow: 'Testing',
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
      'Optimistic locking assumes conflicts are rare and checks a version/timestamp during update. Pessimistic locking assumes conflicts are likely and locks rows before update. Optimistic is better for read-heavy systems; pessimistic is useful for high-contention critical updates.',
    eyebrow: 'Locking',
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
