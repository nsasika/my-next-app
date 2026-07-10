import { describe, expect, it } from 'vitest';
import { searchLessons, type SearchableLesson } from './search';
import { APP_PATHS } from '@/config/routes';

const lessons = [
  {
    href: APP_PATHS.currentAuthenticationFlow,
    label: 'Current Authentication Flow',
    searchText: 'Foundations Authentication Current Authentication Flow JWT',
    section: 'Authentication',
    technology: 'Foundations',
  },
  {
    href: APP_PATHS.oauth2Authorization,
    label: 'OAuth 2.0 + OIDC',
    searchText: 'Foundations Authorization OAuth 2.0 OIDC PKCE',
    section: 'Authorization',
    technology: 'Foundations',
  },
  {
    href: APP_PATHS.react,
    label: 'React',
    searchText: 'React components hooks state technology landing page',
    section: 'Technology landing',
    technology: 'React',
  },
] as const satisfies readonly SearchableLesson[];

describe('lesson search ranking', () => {
  it('returns authorization-specific results without unrelated lessons', () => {
    const results = searchLessons(lessons, 'authorization');

    expect(results).toEqual([lessons[1]]);
  });

  it('requires every query term to match', () => {
    const results = searchLessons(lessons, 'react authorization');

    expect(results).toEqual([]);
  });

  it('ranks label matches above broad search text matches', () => {
    const results = searchLessons(lessons, 'authentication');

    expect(results[0]).toEqual(lessons[0]);
  });
});
