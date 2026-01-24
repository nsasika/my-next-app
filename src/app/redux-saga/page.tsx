'use client';

import { CustomBtn } from '@/components';
import { fetchUsersSagaRequest } from '@/lib/features/user/usersSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const ReduxSagaPage = () => {
  const dispatch = useAppDispatch();
  const {loading, users, error} = useAppSelector((state)=> state.users);
  return (
    <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif' }}>
      <h1
        style={{
          textDecoration: 'underline',
          backgroundColor: '#f0f8ff',
          padding: '4px',
        }}
      >
        Redux Saga Example Page
      </h1>
      <p>
        This page explains when and why you might choose Redux Saga for managing
        side effects in a Redux application.
      </p>

      <h2
        style={{
          textDecoration: 'underline',
          backgroundColor: '#f0f8ff',
          padding: '4px',
        }}
      >
        Why Choose Redux Saga?
      </h2>
      <ul>
        <li>
          <strong>Cancellation:</strong> Easily cancel ongoing tasks.
        </li>
        <li>
          <strong>Parallel API Calls:</strong> Handle multiple API calls in
          parallel.
        </li>
        <li>
          <strong>Retry/Debounce/Throttle:</strong> Manage retries, debouncing,
          and throttling of actions.
        </li>
        <li>
          <strong>Complex Workflows:</strong> Handle workflows like step 1 →
          step 2 → step 3.
        </li>
        <li>
          <strong>Long-Running Background Tasks:</strong> Manage tasks that need
          to run in the background.
        </li>
        <li>
          <strong>Better Testability:</strong> Write deterministic and testable
          async flows.
        </li>
      </ul>

      <h2
        style={{
          textDecoration: 'underline',
          backgroundColor: '#f0f8ff',
          padding: '4px',
        }}
      >
        Why Banks Love Redux Saga
      </h2>
      <p>
        Banks and financial institutions often prefer Redux Saga because async
        flows must be deterministic and controllable. This ensures reliability
        and predictability in critical systems.
      </p>
      <CustomBtn
        title="Fetch Saga Users"
        onClick={() => dispatch(fetchUsersSagaRequest())}
      />
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {users.length > 0 && (
        <div>
          <h3>Fetched Users:</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReduxSagaPage;
