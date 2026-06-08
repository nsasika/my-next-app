import { describe, expect, it } from 'vitest';
import reducer, {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from './counterSlice';

describe('counterSlice', () => {
  it('increments and decrements the counter', () => {
    const incrementedState = reducer({ value: 0 }, increment());
    const decrementedState = reducer(incrementedState, decrement());

    expect(incrementedState.value).toBe(1);
    expect(decrementedState.value).toBe(0);
  });

  it('increments by a custom amount and resets', () => {
    const changedState = reducer({ value: 2 }, incrementByAmount(5));
    const resetState = reducer(changedState, reset());

    expect(changedState.value).toBe(7);
    expect(resetState.value).toBe(0);
  });
});
