import { describe, expect, it } from 'vitest';
import {
  createLocaleSwitchPath,
  getLocaleFromPathname,
  getPathLocale,
  isLocale,
  isLocalizedPublicPath,
  localizePath,
  resolveLocale,
  stripLocaleFromPathname,
} from './config';

describe('locale routing', () => {
  it('recognizes only supported locale codes', () => {
    expect(isLocale('en')).toBe(true);
    expect(isLocale('si')).toBe(true);
    expect(isLocale('ta')).toBe(true);
    expect(isLocale('fr')).toBe(false);
  });

  it('finds a locale or falls back to English', () => {
    expect(getLocaleFromPathname('/si/academy')).toBe('si');
    expect(getLocaleFromPathname('/ta')).toBe('ta');
    expect(getLocaleFromPathname('/academy')).toBe('en');
  });

  it('distinguishes an explicit URL locale from a fallback', () => {
    expect(getPathLocale('/si/login')).toBe('si');
    expect(getPathLocale('/login')).toBeNull();
  });

  it('uses the persisted locale on routes without a locale prefix', () => {
    expect(resolveLocale('/build-lab', 'si')).toBe('si');
    expect(resolveLocale('/login', 'ta')).toBe('ta');
    expect(resolveLocale('/en/academy', 'si')).toBe('en');
  });

  it('removes locale prefixes without changing ordinary paths', () => {
    expect(stripLocaleFromPathname('/si/nalin')).toBe('/nalin');
    expect(stripLocaleFromPathname('/en')).toBe('/');
    expect(stripLocaleFromPathname('/build-lab')).toBe('/build-lab');
  });

  it('identifies the pages available in every language', () => {
    expect(isLocalizedPublicPath('/ta/academy')).toBe(true);
    expect(isLocalizedPublicPath('/en/nalin')).toBe(true);
    expect(isLocalizedPublicPath('/build-lab')).toBe(false);
    expect(isLocalizedPublicPath('/si/build-lab')).toBe(true);
  });

  it('switches locales while preserving supported public routes', () => {
    expect(localizePath('si', '/en/nalin')).toBe('/si/nalin');
    expect(localizePath('ta', '/academy')).toBe('/ta/academy');
    expect(localizePath('en', '/')).toBe('/en');
    expect(localizePath('si', '/build-lab')).toBe('/si/build-lab');
    expect(localizePath('ta', '/si/login')).toBe('/ta/login');
  });

  it('builds a server-handled locale switch URL', () => {
    expect(createLocaleSwitchPath('si', '/')).toBe(
      '/api/locale?locale=si&redirect=%2Fsi',
    );
    expect(createLocaleSwitchPath('ta', '/build-lab')).toBe(
      '/api/locale?locale=ta&redirect=%2Fta%2Fbuild-lab',
    );
  });
});
