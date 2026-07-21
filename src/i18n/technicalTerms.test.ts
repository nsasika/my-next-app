import { describe, expect, it } from 'vitest';
import { APP_PATHS, SIDEBAR_TECHNOLOGIES } from '@/config/routes';
import { REACT_LESSONS_BY_LOCALE } from '@/content/react/localized';
import { TechnicalTerm } from './technicalTerms';

describe('technical terminology', () => {
  it('defines unique, non-empty English terms', () => {
    const technicalTerms = Object.values(TechnicalTerm);

    expect(new Set(technicalTerms).size).toBe(technicalTerms.length);
    expect(technicalTerms.every((term) => term.trim().length > 0)).toBe(true);
  });

  it('reuses exact technical names in navigation and localized lessons', () => {
    const reactTrack = SIDEBAR_TECHNOLOGIES.find(
      (technology) => technology.value === 'react',
    );
    const navigationLabels = JSON.stringify(reactTrack);

    expect(navigationLabels).toContain(TechnicalTerm.AUTOMATIC_BATCHING);
    expect(navigationLabels).toContain(TechnicalTerm.REDUX_TOOLKIT);
    expect(navigationLabels).toContain(TechnicalTerm.SSR);
    expect(navigationLabels).toContain(TechnicalTerm.CSR);

    for (const locale of ['si-LK', 'ta-LK'] as const) {
      expect(
        REACT_LESSONS_BY_LOCALE[APP_PATHS.react18Batching]?.[locale]?.header
          .title,
      ).toBe(TechnicalTerm.AUTOMATIC_BATCHING);
      expect(
        REACT_LESSONS_BY_LOCALE[APP_PATHS.rtkQuery]?.[locale]?.header.title,
      ).toBe(TechnicalTerm.RTK_QUERY);
    }
  });
});
