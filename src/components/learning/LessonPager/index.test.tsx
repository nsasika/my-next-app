import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { APP_PATHS, type LessonNavItem } from '@/config/routes';
import LessonPager, { getLessonPagerState } from '.';

const items = [
  { href: APP_PATHS.foundations, label: 'Foundations' },
  {
    href: APP_PATHS.currentAuthenticationFlow,
    label: 'Current Authentication Flow',
  },
  { href: APP_PATHS.oauth2Authorization, label: 'OAuth 2.0 + OIDC' },
] as const satisfies readonly LessonNavItem[];

describe('LessonPager', () => {
  it('returns only a next lesson for the first item', () => {
    expect(getLessonPagerState(APP_PATHS.foundations, items)).toEqual({
      next: items[1],
      previous: null,
    });
  });

  it('returns previous and next lessons for a middle item', () => {
    expect(
      getLessonPagerState(APP_PATHS.currentAuthenticationFlow, items),
    ).toEqual({
      next: items[2],
      previous: items[0],
    });
  });

  it('renders responsive previous and next links', () => {
    render(
      <LessonPager
        currentPath={APP_PATHS.currentAuthenticationFlow}
        items={items}
      />,
    );

    expect(
      screen.getByRole('link', { name: /Previous: Foundations/i }),
    ).toHaveAttribute('href', APP_PATHS.foundations);
    expect(
      screen.getByRole('link', { name: /Next: OAuth 2.0 \+ OIDC/i }),
    ).toHaveAttribute('href', APP_PATHS.oauth2Authorization);
  });
});
