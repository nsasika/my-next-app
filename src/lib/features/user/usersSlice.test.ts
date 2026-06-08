import axios from 'axios';
import { describe, expect, it, vi } from 'vitest';
import reducer, {
  fetchUsers,
  fetchUsersSagaFailure,
  fetchUsersSagaRequest,
  fetchUsersSagaSuccess,
  resetUsers,
  userLogEvent,
} from './usersSlice';

vi.mock('axios');

const mockedAxios = vi.mocked(axios);

describe('usersSlice', () => {
  it('tracks saga loading state', () => {
    const state = reducer(undefined, fetchUsersSagaRequest());

    expect(state.loading).toBe(true);
    expect(state.error).toBeUndefined();
  });

  it('stores saga users and clears loading', () => {
    const state = reducer(
      { users: [], loading: true },
      fetchUsersSagaSuccess([{ id: 1, name: 'Nalin' }]),
    );

    expect(state.loading).toBe(false);
    expect(state.users).toEqual([{ id: 1, name: 'Nalin' }]);
  });

  it('stores saga failures', () => {
    const state = reducer(
      { users: [], loading: true },
      fetchUsersSagaFailure('Unable to load users'),
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe('Unable to load users');
  });

  it('resets users', () => {
    const state = reducer(
      { users: [{ id: 1, name: 'Nalin' }], loading: true, error: 'Old error' },
      resetUsers(),
    );

    expect(state).toEqual({ users: [], loading: false, error: undefined });
  });

  it('keeps state stable when logging user events', () => {
    const state = reducer(
      { users: [], loading: false },
      userLogEvent({ type: 'clicked', at: 1 }),
    );

    expect(state).toEqual({ users: [], loading: false });
  });

  it('handles async thunk success', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        { id: 1, name: 'Nalin', username: 'nalin' },
        { id: 2, name: 'Academy', username: 'academy' },
      ],
    });

    const action = await fetchUsers()(vi.fn(), vi.fn(), undefined);
    const state = reducer({ users: [], loading: true }, action);

    expect(action.payload).toEqual([
      { id: 1, name: 'Nalin' },
      { id: 2, name: 'Academy' },
    ]);
    expect(state.users).toEqual([
      { id: 1, name: 'Nalin' },
      { id: 2, name: 'Academy' },
    ]);
    expect(state.loading).toBe(false);
  });

  it('handles async thunk failures', async () => {
    mockedAxios.get.mockRejectedValueOnce({
      response: { data: { message: 'Network failed' } },
    });

    const action = await fetchUsers()(vi.fn(), vi.fn(), undefined);
    const state = reducer({ users: [], loading: true }, action);

    expect(action.type).toBe('user/fetchUsers/rejected');
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Network failed');
  });

  it('falls back to the default async thunk failure message', async () => {
    mockedAxios.get.mockRejectedValueOnce({});

    const action = await fetchUsers()(vi.fn(), vi.fn(), undefined);
    const state = reducer({ users: [], loading: true }, action);

    expect(action.type).toBe('user/fetchUsers/rejected');
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Failed to fetch users');
  });
});
