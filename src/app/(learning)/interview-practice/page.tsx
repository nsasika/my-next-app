import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';

const interviewQuestions = [
  {
    answer:
      'Start with role, years, strongest stack, recent domain, and one measurable project result. Keep it under one minute, then invite deeper questions.',
    question: 'Give me a brief intro about you.',
  },
  {
    answer:
      'Explain route structure, component boundaries, state management, API layer, error/loading handling, performance choices, testing, and deployment. Use one recent project as the story.',
    question:
      'Explain front end architecture in a recent project you worked on.',
  },
  {
    answer:
      'Cover controller/API layer, service layer, repository/data access, validation, transaction boundary, async integrations, logging, security, and deployment/runtime concerns.',
    question:
      'Explain back end architecture in a recent project you worked on.',
  },
  {
    answer:
      'ACID means atomicity, consistency, isolation, and durability. In a backend service, the database transaction should wrap only the database changes that must succeed or fail together.',
    question: 'How do you handle transactions and ACID?',
  },
  {
    answer:
      'A database save and an email are not one normal ACID transaction because email is an external side effect. If DB save succeeds and email fails, the DB commit usually remains. Use an outbox table, retry worker, status column, or compensating action so notification delivery is reliable without rolling back committed business data.',
    question:
      'If DB save succeeds and then notification email fails, what happens as per ACID?',
  },
  {
    answer:
      'Use idempotency keys, unique constraints, request tokens, distributed locks only when necessary, and database-level guards. The API should return the existing result for repeated equivalent requests instead of executing the mutation again.',
    question:
      'If the same API call is triggered multiple times, how do you avoid multiple executions in the backend?',
  },
  {
    answer:
      'Common causes include missing indexes, wrong index order, full table scans, large joins, stale statistics, N+1 queries, fetching too many rows, locks, network latency, expensive sorting/grouping, and poor query plans. Check EXPLAIN, slow query logs, row counts, and indexes.',
    question:
      'A DB query runs successfully without exception, but it is really slow. What are the causes?',
  },
  {
    answer:
      'Mention replacing ReactDOM.render with createRoot, checking StrictMode side effects, upgrading testing libraries, validating automatic batching behavior, updating router/build tooling, and running regression tests on critical flows.',
    question: 'How did you migrate React 18 from previous versions?',
  },
  {
    answer:
      'Yes, common issues are peer dependency ranges, libraries not ready for concurrent rendering, old test utilities, and side effects exposed by StrictMode. Fix by upgrading compatible versions, replacing abandoned packages, isolating risky components, and adding focused regression tests.',
    question:
      'Did you face React migration difficulties with third-party libraries? How did you fix them?',
  },
  {
    answer:
      'Unit tests check isolated functions/components with mocked dependencies. Integration tests verify modules working together, such as component plus store plus API mock or service plus repository using a test database. Explain arrange, act, assert and CI coverage.',
    question: 'How did you carry out unit testing and integration testing?',
  },
  {
    answer:
      'A deadlock happens when transactions wait on each other in a cycle, so none can continue. Avoid it with consistent lock ordering, shorter transactions, proper indexes, lower isolation where valid, retries, and monitoring blocked queries.',
    question: 'What is a deadlock, and how do you overcome it?',
  },
  {
    answer:
      'Optimistic locking assumes conflicts are rare and checks a version/timestamp during update. Pessimistic locking assumes conflicts are likely and locks rows before update. Optimistic is better for read-heavy systems; pessimistic is useful for high-contention critical updates.',
    question: 'Explain optimistic vs pessimistic locking.',
  },
] as const;

export default function InterviewPracticePage() {
  return (
    <>
      <PageHeader
        description="Real interview questions you faced, organized as quick answer notes for future preparation."
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

      <div className="grid gap-4 xl:grid-cols-2">
        {interviewQuestions.map((item, index) => (
          <ContentCard key={item.question}>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
              Question {index + 1}
            </p>
            <h2 className="mt-2 text-lg font-black leading-7 text-slate-950">
              {item.question}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {item.answer}
            </p>
          </ContentCard>
        ))}
      </div>
    </>
  );
}
