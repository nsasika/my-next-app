import { describe, expect, it } from 'vitest';
import {
  APP_PATHS,
  LESSON_NAV_ITEMS,
  RECRUITER_AUTH_NAV_ITEM,
  RECRUITER_NAV_BASE_ITEMS,
  SIDEBAR_NAV_GROUPS,
  SIDEBAR_TECHNOLOGIES,
  createLessonNavigationItems,
  getLocalizedLearningNavigation,
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

  it('shows DBS via NCS under the renamed interview experience section', () => {
    const interviewTrack = SIDEBAR_NAV_GROUPS[1].technologies[0];
    const realExperiences = interviewTrack.sections[0];

    expect(realExperiences.title).toBe('Real interview experience');
    expect(realExperiences.links[0]).toEqual({
      href: APP_PATHS.dbsNcsReactLeadInterview,
      label: 'DBS via NCS — React Lead',
    });
  });

  it('localizes authenticated navigation and preserves lesson order', () => {
    const sinhala = getLocalizedLearningNavigation('si');
    const tamil = getLocalizedLearningNavigation('ta');

    expect(sinhala.groups[1].label).toBe('සම්මුඛ පරීක්ෂණ');
    expect(sinhala.groups[1].technologies[0].sections[0].title).toBe(
      'සැබෑ සම්මුඛ පරීක්ෂණ අත්දැකීම්',
    );
    expect(tamil.groups[0].label).toBe('அடிப்படைகள்');
    expect(tamil.lessonItems.map((item) => item.href)).toEqual(
      sinhala.lessonItems.map((item) => item.href),
    );
  });
});
