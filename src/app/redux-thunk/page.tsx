'use client';

import { CustomBtn } from '@/components';
import { fetchUsers, resetUsers } from '@/lib/features/user/usersSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const headingStyle = {
  textDecoration: 'underline',
  backgroundColor: '#f0f8ff',
  padding: '4px',
};

const ReduxThunkPage = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);
  return (
    <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={headingStyle}>Redux Thunk Example Page</h1>
      <p>
        This page demonstrates the use of Redux Thunk in a Next.js application.
      </p>

      <h2>Thunk Use Cases</h2>
      <ul>
        <li>
          Thunks are best used for complex synchronous logic that needs access
          to <code>dispatch</code> and <code>getState</code>.
        </li>
        <li>
          They are also useful for moderate asynchronous logic, such as one-shot
          &quot;fetch some async data and dispatch an action with the
          result&quot; requests.
        </li>
        <li>
          Redux Toolkit includes the <code>createAsyncThunk</code> API for the
          &quot;request and dispatch&quot; use case.
        </li>
        <li>For other use cases, you can write your own thunk functions.</li>
      </ul>

      <h2 style={headingStyle}>Thunk Tradeoffs</h2>
      <ul>
        <li>
          <strong>👍 Advantages:</strong> Just write functions; may contain any
          logic.
        </li>
        <li>
          <strong>👎 Disadvantages:</strong> Can&apos;t respond to dispatched
          actions; imperative; can&apos;t be cancelled.
        </li>
      </ul>
      <div className="flex flex-row gap-2">
        <CustomBtn title="Fetch Users" onClick={() => dispatch(fetchUsers())} />
        <CustomBtn title="Reset Users" onClick={() => dispatch(resetUsers())} />
      </div>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {users.length > 0 && (
        <div>
          <h3>Fetched Users:</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReduxThunkPage;
