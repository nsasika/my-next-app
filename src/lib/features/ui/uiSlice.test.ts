import { describe, expect, it } from 'vitest';
import reducer, { hideBanner, showBanner } from './uiSlice';

describe('uiSlice', () => {
  it('shows a banner with default values', () => {
    const state = reducer(
      undefined,
      showBanner({
        id: 'memo-banner',
        message: 'Other state changed.',
        title: 'Render explained',
      }),
    );

    expect(state.banner).toEqual({
      id: 'memo-banner',
      message: 'Other state changed.',
      title: 'Render explained',
      tone: 'info',
    });
  });

  it('hides only the matching banner', () => {
    const visibleState = reducer(
      undefined,
      showBanner({
        id: 'active-banner',
        message: 'Memoized value stayed stable.',
        title: 'useMemo',
        tone: 'success',
      }),
    );

    expect(reducer(visibleState, hideBanner('other-banner')).banner).toEqual(
      visibleState.banner,
    );
    expect(
      reducer(visibleState, hideBanner('active-banner')).banner,
    ).toBeNull();
  });
});
