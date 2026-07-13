import { describe, expect, it } from 'vitest';
import {
  getLocaleFromPathname,
  isLocale,
  isLocalizedPublicPath,
  localizePath,
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

  it('removes locale prefixes without changing ordinary paths', () => {
    expect(stripLocaleFromPathname('/si/nalin')).toBe('/nalin');
    expect(stripLocaleFromPathname('/en')).toBe('/');
    expect(stripLocaleFromPathname('/build-lab')).toBe('/build-lab');
  });

  it('identifies the pages available in every language', () => {
    expect(isLocalizedPublicPath('/ta/academy')).toBe(true);
    expect(isLocalizedPublicPath('/en/nalin')).toBe(true);
    expect(isLocalizedPublicPath('/build-lab')).toBe(false);
  });

  it('switches locales while preserving supported public routes', () => {
    expect(localizePath('si', '/en/nalin')).toBe('/si/nalin');
    expect(localizePath('ta', '/academy')).toBe('/ta/academy');
    expect(localizePath('en', '/')).toBe('/en');
    expect(localizePath('si', '/build-lab')).toBe('/si');
  });
});
