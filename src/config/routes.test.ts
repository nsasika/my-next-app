import { describe, expect, it } from 'vitest';
import {
  APP_PATHS,
  LESSON_NAV_ITEMS,
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
