import { describe, expect, it } from 'vitest';
import { SUPPORTED_LOCALES } from '../config';
import { getDictionary } from '.';

describe('localized dictionaries', () => {
  it('loads complete dictionaries for every supported locale', async () => {
    const dictionaries = await Promise.all(
      SUPPORTED_LOCALES.map(getDictionary),
    );
    const englishWorkIds = Object.keys(dictionaries[0].portfolio.work);

    dictionaries.forEach((dictionary, index) => {
      expect(dictionary.locale).toBe(SUPPORTED_LOCALES[index]);
      expect(dictionary.home.platform.steps).toHaveLength(3);
      expect(dictionary.academy.tracks.panels).toHaveLength(4);
      expect(dictionary.portfolio.capability.panels).toHaveLength(4);
      expect(Object.keys(dictionary.portfolio.work)).toEqual(englishWorkIds);
      expect(dictionary.portfolio.hero.heading.trim()).not.toBe('');
    });
  });

  it('contains native Sinhala and Tamil navigation copy', async () => {
    const [sinhala, tamil] = await Promise.all([
      getDictionary('si'),
      getDictionary('ta'),
    ]);

    expect(sinhala.nav.home).toBe('මුල් පිටුව');
    expect(tamil.nav.home).toBe('முகப்பு');
  });
});
