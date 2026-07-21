import { describe, expect, it } from 'vitest';
import {
  frontendTestingByLocale,
  oauthLessonByLocale,
} from './foundationsLocalized';
import { javaContentByLocale } from './java/localized';
import { nextjsLessonsByLocale } from './nextjsLocalized';

describe('localized learning content', () => {
  it.each(['si-LK', 'ta-LK'] as const)(
    'localizes foundation lessons in %s',
    (locale) => {
      expect(frontendTestingByLocale[locale].header.title).not.toBe(
        frontendTestingByLocale['en-US'].header.title,
      );
      expect(oauthLessonByLocale[locale].theory.summary).not.toBe(
        oauthLessonByLocale['en-US'].theory.summary,
      );
    },
  );

  it.each(['si-LK', 'ta-LK'] as const)(
    'localizes every Java chapter topic and backend testing in %s',
    (locale) => {
      expect(javaContentByLocale[locale].chapterOne).toHaveLength(
        javaContentByLocale['en-US'].chapterOne.length,
      );
      expect(javaContentByLocale[locale].chapterTwo).toHaveLength(
        javaContentByLocale['en-US'].chapterTwo.length,
      );
      expect(javaContentByLocale[locale].chapterOne[0].answer).not.toBe(
        javaContentByLocale['en-US'].chapterOne[0].answer,
      );
      expect(javaContentByLocale[locale].backendTesting.header.title).not.toBe(
        javaContentByLocale['en-US'].backendTesting.header.title,
      );
    },
  );

  it.each(['si-LK', 'ta-LK'] as const)(
    'localizes every Next.js lesson in %s',
    (locale) => {
      expect(Object.keys(nextjsLessonsByLocale[locale])).toEqual(
        Object.keys(nextjsLessonsByLocale['en-US']),
      );

      Object.keys(nextjsLessonsByLocale['en-US']).forEach((key) => {
        const lessonKey = key as keyof (typeof nextjsLessonsByLocale)['en-US'];
        expect(
          nextjsLessonsByLocale[locale][lessonKey].theory.summary,
        ).not.toBe(nextjsLessonsByLocale['en-US'][lessonKey].theory.summary);
      });
    },
  );
});
