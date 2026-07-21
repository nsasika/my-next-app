export const SUPPORTED_LOCALES = ['en', 'si', 'ta'] as const;
export const DEFAULT_LOCALE = 'en';
export const LOCALE_COOKIE_NAME = 'nalins-academy-locale';
export const LOCALE_REQUEST_HEADER = 'x-nalins-academy-locale';

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const locale = pathname.split('/')[1];

  return locale && isLocale(locale) ? locale : DEFAULT_LOCALE;
}

export function resolveLocale(
  pathname: string,
  initialLocale: Locale = DEFAULT_LOCALE,
): Locale {
  const pathLocale = pathname.split('/')[1];

  return pathLocale && isLocale(pathLocale) ? pathLocale : initialLocale;
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] && isLocale(segments[0])) {
    const pathWithoutLocale = `/${segments.slice(1).join('/')}`;
    return pathWithoutLocale === '/'
      ? '/'
      : pathWithoutLocale.replace(/\/$/, '');
  }

  return pathname || '/';
}

export function isLocalizedPublicPath(pathname: string): boolean {
  return getPathLocale(pathname) !== null;
}

export function getPathLocale(pathname: string): Locale | null {
  const locale = pathname.split('/')[1];

  return locale && isLocale(locale) ? locale : null;
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
