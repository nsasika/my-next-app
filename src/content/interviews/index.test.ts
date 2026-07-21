import { describe, expect, it } from 'vitest';
import { getLocalizedInterviewExperience } from '.';

describe('localized interview experiences', () => {
  it.each([
    ['en-US', 'DBS via NCS React Lead Interview Experience'],
    ['si-LK', 'NCS හරහා DBS React Lead සම්මුඛ පරීක්ෂණ අත්දැකීම'],
    ['ta-LK', 'NCS வழியாக DBS React Lead நேர்காணல் அனுபவம்'],
  ] as const)('loads all ten DBS questions in %s', (locale, title) => {
    const experience = getLocalizedInterviewExperience(
      locale,
      'dbs-ncs-react-lead',
    );

    expect(experience?.title).toBe(title);
    expect(experience?.items).toHaveLength(10);
    expect(experience?.items.every((item) => item.answer?.trim())).toBe(true);
  });

  it('does not invent localized content for an unknown slug', () => {
    expect(getLocalizedInterviewExperience('si-LK', 'missing')).toBeUndefined();
  });

  it.each(['en-US', 'si-LK', 'ta-LK'] as const)(
    'loads ten localized target MFE questions in %s',
    (locale) => {
      const experience = getLocalizedInterviewExperience(locale, 'mfe-top-10');

      expect(experience?.items).toHaveLength(10);
      expect(experience?.items.every((item) => item.answer?.trim())).toBe(true);
    },
  );

  it('provides native content for every real interview route', () => {
    for (const locale of ['si-LK', 'ta-LK'] as const) {
      expect(
        getLocalizedInterviewExperience(locale, 'bank-of-singapore')?.items,
      ).toHaveLength(14);
      expect(
        getLocalizedInterviewExperience(locale, 'virtusa-singapore')?.items,
      ).toHaveLength(12);
    }
  });
});
