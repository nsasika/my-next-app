import { describe, expect, it } from 'vitest';
import {
  frontendTestingByLocale,
  oauthLessonByLocale,
} from './foundationsLocalized';
import { javaContentByLocale } from './java/localized';
import { nextjsLessonsByLocale } from './nextjsLocalized';

describe('localized learning content', () => {
  it.each(['si', 'ta'] as const)(
    'localizes foundation lessons in %s',
    (locale) => {
      expect(frontendTestingByLocale[locale].header.title).not.toBe(
        frontendTestingByLocale.en.header.title,
      );
      expect(oauthLessonByLocale[locale].theory.summary).not.toBe(
        oauthLessonByLocale.en.theory.summary,
      );
    },
  );

  it.each(['si', 'ta'] as const)(
    'localizes every Java chapter topic and backend testing in %s',
    (locale) => {
      expect(javaContentByLocale[locale].chapterOne).toHaveLength(
        javaContentByLocale.en.chapterOne.length,
      );
      expect(javaContentByLocale[locale].chapterTwo).toHaveLength(
        javaContentByLocale.en.chapterTwo.length,
      );
      expect(javaContentByLocale[locale].chapterOne[0].answer).not.toBe(
        javaContentByLocale.en.chapterOne[0].answer,
      );
      expect(javaContentByLocale[locale].backendTesting.header.title).not.toBe(
        javaContentByLocale.en.backendTesting.header.title,
      );
    },
  );

  it.each(['si', 'ta'] as const)(
    'localizes every Next.js lesson in %s',
    (locale) => {
      expect(Object.keys(nextjsLessonsByLocale[locale])).toEqual(
        Object.keys(nextjsLessonsByLocale.en),
      );

      Object.keys(nextjsLessonsByLocale.en).forEach((key) => {
        const lessonKey = key as keyof typeof nextjsLessonsByLocale.en;
        expect(
          nextjsLessonsByLocale[locale][lessonKey].theory.summary,
        ).not.toBe(nextjsLessonsByLocale.en[lessonKey].theory.summary);
      });
    },
  );
});
