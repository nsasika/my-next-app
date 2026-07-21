export const DEFAULT_LOCALE = 'en-US';
export const FALLBACK_LOCALE = 'en-US';
export const SUPPORTED_LOCALES = ['en-US', 'si-LK', 'ta-LK'] as const;
export const LOCALE_COOKIE_NAME = 'nalins-academy-locale';
export const LOCALE_REQUEST_HEADER = 'x-nalins-academy-locale';

export type Locale = (typeof SUPPORTED_LOCALES)[number];
export type Language = 'en' | 'si' | 'ta';

const LEGACY_LOCALE_MAPPINGS: Readonly<Record<Language, Locale>> = {
  en: 'en-US',
  si: 'si-LK',
  ta: 'ta-LK',
};

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function normalizeLocale(
  value: string | null | undefined,
): Locale | null {
  if (!value) return null;
  if (isLocale(value)) return value;

  return LEGACY_LOCALE_MAPPINGS[value as Language] ?? null;
}

export function getLanguageForLocale(locale: Locale): Language {
  return locale.split('-')[0] as Language;
}

function getLocaleSegment(pathname: string): string | undefined {
  return pathname.split('/')[1];
}

export function resolveLocale(
  pathname: string,
  initialLocale: Locale = DEFAULT_LOCALE,
): Locale {
  const pathLocale = normalizeLocale(getLocaleSegment(pathname));

  return pathLocale ?? initialLocale;
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] && normalizeLocale(segments[0])) {
    const pathWithoutLocale = `/${segments.slice(1).join('/')}`;
    return pathWithoutLocale === '/'
      ? '/'
      : pathWithoutLocale.replace(/\/$/, '');
  }

  return pathname || '/';
}

export function getPathLocale(pathname: string): Locale | null {
  const locale = getLocaleSegment(pathname);

  return locale && isLocale(locale) ? locale : null;
}

export function getLegacyPathLocale(pathname: string): Locale | null {
  const locale = getLocaleSegment(pathname);

  return locale && !isLocale(locale) ? normalizeLocale(locale) : null;
}

export function localizePath(locale: Locale, pathname: string): string {
  const basePath = stripLocaleFromPathname(pathname);

  return basePath === '/' ? `/${locale}` : `/${locale}${basePath}`;
}

/**
 * Builds a same-origin URL that changes the locale and then returns the user to
 * the matching page. The route handler owns cookie persistence and redirect
 * validation, so client components do not need to coordinate two async steps.
 */
export function createLocaleSwitchPath(
  locale: Locale,
  pathname: string,
): string {
  const params = new URLSearchParams({
    locale,
    redirect: localizePath(locale, pathname),
  });

  return `/api/locale?${params.toString()}`;
}
