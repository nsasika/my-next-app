import { describe, expect, it } from 'vitest';
import { APP_PATHS, SIDEBAR_TECHNOLOGIES } from '@/config/routes';
import type { AppPath } from '@/config/routes';
import { REACT_LESSONS_BY_LOCALE } from './localized';

function getReactLessonPaths(): AppPath[] {
  const reactTrack = SIDEBAR_TECHNOLOGIES.find(
    (technology) => technology.value === 'react',
  );

  if (!reactTrack) throw new Error('React learning track is missing.');

  return [
    ...new Set(
      reactTrack.sections.flatMap((section) =>
        section.links.flatMap((link) => [
          link.href,
          ...(link.children?.map((child) => child.href) ?? []),
        ]),
      ),
    ),
    APP_PATHS.react19Changes,
  ] as AppPath[];
}

describe('localized React lessons', () => {
  it('provides Sinhala and Tamil content for every React lesson route', () => {
    for (const pathname of getReactLessonPaths()) {
      expect(REACT_LESSONS_BY_LOCALE[pathname]?.['si-LK']).toBeDefined();
      expect(REACT_LESSONS_BY_LOCALE[pathname]?.['ta-LK']).toBeDefined();
    }
  });

  it('uses native explanations while preserving technical terminology', () => {
    for (const lessonByLocale of Object.values(REACT_LESSONS_BY_LOCALE)) {
      const sinhalaLesson = lessonByLocale?.['si-LK'];
      const tamilLesson = lessonByLocale?.['ta-LK'];

      expect(JSON.stringify(sinhalaLesson)).toMatch(/[අ-ෆ]/u);
      expect(JSON.stringify(tamilLesson)).toMatch(/[அ-ஹ]/u);
      expect(sinhalaLesson?.header.tags).toContain('React');
      expect(tamilLesson?.header.tags).toContain('React');
    }
  });
});
