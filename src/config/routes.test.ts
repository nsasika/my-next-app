import { describe, expect, it } from 'vitest';
import {
  APP_PATHS,
  LESSON_NAV_ITEMS,
  RECRUITER_AUTH_NAV_ITEM,
  RECRUITER_NAV_BASE_ITEMS,
  SIDEBAR_NAV_GROUPS,
  SIDEBAR_TECHNOLOGIES,
  createLessonNavigationItems,
} from './routes';

describe('learning navigation config', () => {
  it('keeps the requested sidebar group order', () => {
    expect(SIDEBAR_NAV_GROUPS.map((group) => group.label)).toEqual([
      'Foundations',
      'Interviews',
      'Technologies',
    ]);
  });

  it('opens the learning workspace on Foundations by default', () => {
    expect(RECRUITER_AUTH_NAV_ITEM.href).toBe(APP_PATHS.foundations);
  });

  it('keeps the portfolio and academy as separate public destinations', () => {
    expect(RECRUITER_NAV_BASE_ITEMS).toEqual([
      { href: APP_PATHS.home, label: 'Home' },
      { href: APP_PATHS.nalin, label: 'Portfolio' },
      { href: APP_PATHS.academy, label: 'Academy' },
      { href: APP_PATHS.buildLab, label: 'Build Lab' },
    ]);
  });

  it('keeps technology tracks under Technologies in the requested order', () => {
    expect(SIDEBAR_TECHNOLOGIES.map((technology) => technology.label)).toEqual([
      'Java',
      'React',
      'Next.js',
      'Angular',
    ]);
  });

  it('creates a deduplicated lesson navigation sequence', () => {
    const items = createLessonNavigationItems(SIDEBAR_NAV_GROUPS);

    expect(items[0]).toEqual({
      href: APP_PATHS.foundations,
      label: 'Foundations',
    });
    expect(items.map((item) => item.href)).toContain(APP_PATHS.nextjsIntro);
    expect(new Set(items.map((item) => item.href)).size).toBe(items.length);
  });

  it('orders Next.js fundamentals for previous and next paging', () => {
    const introIndex = LESSON_NAV_ITEMS.findIndex(
      (item) => item.href === APP_PATHS.nextjsIntro,
    );

    expect(LESSON_NAV_ITEMS[introIndex + 1]).toEqual({
      href: APP_PATHS.nextjsRouters,
      label: 'App Router vs Pages Router',
    });
  });
});
