import { describe, expect, it } from 'vitest';
import reducer, {
  fetchClientsSagaFailure,
  fetchClientsSagaRequest,
  fetchClientsSagaSuccess,
  updateQuery,
} from './clientsSlice';

describe('clientsSlice', () => {
  it('updates the search query', () => {
    const state = reducer(undefined, updateQuery('react'));

    expect(state.query).toBe('react');
  });

  it('tracks loading state for saga requests', () => {
    const state = reducer(undefined, fetchClientsSagaRequest());

    expect(state.loading).toBe(true);
    expect(state.error).toBeUndefined();
  });

  it('stores saga results', () => {
    const state = reducer(
      { query: 'java', results: [], loading: true },
      fetchClientsSagaSuccess([{ id: '1', name: 'Nalin' }]),
    );

    expect(state.loading).toBe(false);
    expect(state.results).toEqual([{ id: '1', name: 'Nalin' }]);
  });

  it('stores saga failures', () => {
    const state = reducer(
      { query: '', results: [], loading: true },
      fetchClientsSagaFailure('Failed to fetch clients'),
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe('Failed to fetch clients');
  });
});
