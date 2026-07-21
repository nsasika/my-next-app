import { describe, expect, it } from 'vitest';
import {
  createLocaleSwitchPath,
  getPathLocale,
  isLocale,
  localizePath,
  resolveLocale,
  stripLocaleFromPathname,
} from './config';

describe('locale routing', () => {
  it('recognizes only supported locale codes', () => {
    expect(isLocale('en-US')).toBe(true);
    expect(isLocale('si-LK')).toBe(true);
    expect(isLocale('ta-LK')).toBe(true);
    expect(isLocale('en')).toBe(false);
    expect(isLocale('fr')).toBe(false);
  });

  it('distinguishes an explicit URL locale from a fallback', () => {
    expect(getPathLocale('/si-LK/login')).toBe('si-LK');
    expect(getPathLocale('/si/login')).toBeNull();
    expect(getPathLocale('/login')).toBeNull();
  });

  it('uses the persisted locale on routes without a locale prefix', () => {
    expect(resolveLocale('/build-lab', 'si-LK')).toBe('si-LK');
    expect(resolveLocale('/login', 'ta-LK')).toBe('ta-LK');
    expect(resolveLocale('/en-US/academy', 'si-LK')).toBe('en-US');
  });

  it('removes locale prefixes without changing ordinary paths', () => {
    expect(stripLocaleFromPathname('/si-LK/nalin')).toBe('/nalin');
    expect(stripLocaleFromPathname('/en')).toBe('/en');
    expect(stripLocaleFromPathname('/build-lab')).toBe('/build-lab');
  });

  it('switches locales while preserving supported public routes', () => {
    expect(localizePath('si-LK', '/en/nalin')).toBe('/si-LK/en/nalin');
    expect(localizePath('ta-LK', '/academy')).toBe('/ta-LK/academy');
    expect(localizePath('en-US', '/')).toBe('/en-US');
    expect(localizePath('si-LK', '/build-lab')).toBe('/si-LK/build-lab');
    expect(localizePath('ta-LK', '/si/login')).toBe('/ta-LK/si/login');
  });

  it('builds a server-handled locale switch URL', () => {
    expect(createLocaleSwitchPath('si-LK', '/')).toBe(
      '/api/locale?locale=si-LK&redirect=%2Fsi-LK',
    );
    expect(createLocaleSwitchPath('ta-LK', '/build-lab')).toBe(
      '/api/locale?locale=ta-LK&redirect=%2Fta-LK%2Fbuild-lab',
    );
  });
});
