import { describe, expect, it } from 'vitest';
import { authenticationFlowByLocale } from './authenticationFlow';

describe('localized authentication flow', () => {
  it('provides native titles and complete lesson sections for every locale', () => {
    expect(authenticationFlowByLocale.en.header.title).toBe(
      'Current Authentication Flow',
    );
    expect(authenticationFlowByLocale.si.header.title).toBe(
      'වත්මන් සත්‍යාපන ප්‍රවාහය',
    );
    expect(authenticationFlowByLocale.ta.header.title).toBe(
      'தற்போதைய அங்கீகார ஓட்டம்',
    );

    Object.values(authenticationFlowByLocale).forEach((lesson) => {
      expect(lesson.theory.points.length).toBeGreaterThanOrEqual(5);
      expect(lesson.flow?.steps).toHaveLength(4);
      expect(lesson.codeExamples).toHaveLength(2);
    });
  });
});
