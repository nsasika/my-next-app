'use client';

import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import StatusMessage from '@/components/ui/StatusMessage';
import TheoryPanel from '@/components/learning/TheoryPanel';
import { learningContent } from '@/content/learning';
import { fetchUsers, resetUsers } from '@/lib/features/user/usersSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const ReduxThunkPage = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);
  return (
    <>
      <PageHeader {...learningContent.reduxThunk.header} />

      <TheoryPanel {...learningContent.reduxThunk.theory} />

      <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <ContentCard>
          <h2 className="text-xl font-bold text-slate-950">Thunk Use Cases</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>
              Thunks are useful for logic that needs access to{' '}
              <code>dispatch</code> and <code>getState</code>.
            </li>
            <li>
              They work well for one-shot async requests that dispatch results.
            </li>
            <li>
              Redux Toolkit includes <code>createAsyncThunk</code> for request
              and dispatch flows.
            </li>
          </ul>
        </ContentCard>

        <ContentCard>
          <h2 className="text-xl font-bold text-slate-950">Tradeoffs</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>
              <strong>Advantages:</strong> simple functions that may contain any
              logic.
            </li>
            <li>
              <strong>Disadvantages:</strong> imperative and not designed for
              action watching or cancellation.
            </li>
          </ul>
        </ContentCard>
      </div>

      <ContentCard className="mt-6">
        <div className="flex flex-wrap gap-2">
          <AppButton onClick={() => dispatch(fetchUsers())}>
            Fetch Users
          </AppButton>
          <AppButton onClick={() => dispatch(resetUsers())} variant="secondary">
            Reset Users
          </AppButton>
        </div>

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
    </>
  );
};

export default ReduxThunkPage;
