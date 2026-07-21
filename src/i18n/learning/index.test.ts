import { describe, expect, it } from 'vitest';
import { LEARNING_COPY } from '.';
import { SUPPORTED_LOCALES } from '../config';

describe('localized learning landings', () => {
  it('provides every technology landing and shared UI label per locale', () => {
    const englishKeys = Object.keys(LEARNING_COPY.en.landings);

    for (const locale of SUPPORTED_LOCALES) {
      expect(Object.keys(LEARNING_COPY[locale].landings)).toEqual(englishKeys);
      expect(LEARNING_COPY[locale].labels.startHere.trim()).not.toBe('');
    }
  });

  it('uses native language for the highlighted learning categories', () => {
    expect(LEARNING_COPY.si.landings.foundations.title).toBe('මූලික කරුණු');
    expect(LEARNING_COPY.ta.landings.interviews.title).toBe('நேர்காணல்கள்');
    expect(LEARNING_COPY.si.labels.commonUsages).toBe('සාමාන්‍ය භාවිතයන්');
    expect(LEARNING_COPY.ta.labels.evolution).toBe('பரிணாமம்');
  });
});
