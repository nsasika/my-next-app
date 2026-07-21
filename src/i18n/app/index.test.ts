import { describe, expect, it } from 'vitest';
import { APP_COPY } from '.';
import { SUPPORTED_LOCALES } from '../config';

describe('application localization copy', () => {
  it('provides login, Build Lab, and authenticated-shell copy in every locale', () => {
    for (const locale of SUPPORTED_LOCALES) {
      const copy = APP_COPY[locale];

      expect(copy.auth.title.trim()).not.toBe('');
      expect(copy.buildLab.flow).toHaveLength(4);
      expect(copy.shell.learningWorkspace.trim()).not.toBe('');
    }
  });

  it('uses native Sinhala and Tamil copy rather than English fallbacks', () => {
    expect(APP_COPY.si.auth.loginButtonLabel).toBe('පිවිසෙන්න');
    expect(APP_COPY.ta.buildLab.deliveryModelLabel).toBe('வழங்கல் மாதிரி');
    expect(APP_COPY.si.shell.logout).toBe('ඉවත් වන්න');
    expect(APP_COPY.ta.shell.logout).toBe('வெளியேறு');
  });
});
