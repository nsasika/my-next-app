'use client';

import LearningExamplePage from '@/components/learning/LearningExamplePage';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import StatusMessage from '@/components/ui/StatusMessage';
import { learningContent } from '@/content/learning';
import { fetchUsersSagaRequest } from '@/lib/features/user/usersSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const ReduxSagaPage = () => {
  const dispatch = useAppDispatch();
  const { loading, users, error } = useAppSelector((state) => state.users);
  return (
    <LearningExamplePage
      codeFilePath="src/lib/features/user/sagas/watchers.ts"
      header={learningContent.reduxSaga.header}
      theory={learningContent.reduxSaga.theory}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <ContentCard>
          <h2 className="text-xl font-bold text-slate-950">
            Why Choose Redux Saga?
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>
              <strong>Cancellation:</strong> cancel ongoing tasks cleanly.
            </li>
            <li>
              <strong>Parallel calls:</strong> coordinate multiple effects.
            </li>
            <li>
              <strong>Retry and debounce:</strong> model timing behavior
              explicitly.
            </li>
            <li>
              <strong>Complex workflows:</strong> keep multi-step flows
              testable.
            </li>
          </ul>
        </ContentCard>

        <ContentCard>
          <h2 className="text-xl font-bold text-slate-950">Enterprise fit</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Teams in domains like banking often prefer deterministic async flows
            because reliability and traceability matter during critical
            operations.
          </p>
        </ContentCard>
      </div>

      <ContentCard className="mt-6">
        <AppButton onClick={() => dispatch(fetchUsersSagaRequest())}>
          Fetch Saga Users
        </AppButton>

        <div className="mt-5 space-y-3">
          {loading ? <StatusMessage>Loading users...</StatusMessage> : null}
          {error ? (
            <StatusMessage tone="error">Error: {error}</StatusMessage>
          ) : null}
          {users.length > 0 ? (
            <ul className="grid gap-2 sm:grid-cols-2">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </ContentCard>
    </LearningExamplePage>
  );
};

export default ReduxSagaPage;
