export const SUPPORTED_LOCALES = ['en', 'si', 'ta'] as const;
export const DEFAULT_LOCALE = 'en';
export const LOCALE_COOKIE_NAME = 'nalins-academy-locale';

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const LOCALIZED_PUBLIC_PATHS = ['/', '/academy', '/nalin'] as const;

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const locale = pathname.split('/')[1];

  return locale && isLocale(locale) ? locale : DEFAULT_LOCALE;
}

export function resolveLocale(
  pathname: string,
  persistedLocale: Locale = DEFAULT_LOCALE,
): Locale {
  const pathLocale = pathname.split('/')[1];

  return pathLocale && isLocale(pathLocale) ? pathLocale : persistedLocale;
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
  const basePath = stripLocaleFromPathname(pathname);
  return LOCALIZED_PUBLIC_PATHS.includes(
    basePath as (typeof LOCALIZED_PUBLIC_PATHS)[number],
  );
}

export function localizePath(locale: Locale, pathname: string): string {
  const basePath = stripLocaleFromPathname(pathname);

  if (!isLocalizedPublicPath(basePath)) {
    return `/${locale}`;
  }

  return basePath === '/' ? `/${locale}` : `/${locale}${basePath}`;
}
