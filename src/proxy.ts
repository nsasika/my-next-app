import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME } from '@/config/auth';
import { PUBLIC_ROUTE_PREFIXES } from '@/config/publicAccess';
import { APP_PATHS } from '@/config/routes';
import { verifyToken } from '@/server/auth/session';
import {
  DEFAULT_LOCALE,
  getLegacyPathLocale,
  getPathLocale,
  localizePath,
  LOCALE_COOKIE_NAME,
  LOCALE_REQUEST_HEADER,
  normalizeLocale,
  stripLocaleFromPathname,
  type Locale,
} from '@/i18n/config';

const NATIVE_LOCALIZED_PATHS = new Set<string>([
  APP_PATHS.home,
  APP_PATHS.academy,
  APP_PATHS.nalin,
]);

function isPageRequest(pathname: string): boolean {
  return !pathname.startsWith('/api/') && !pathname.includes('.');
}

function persistResolvedLocale(
  response: NextResponse,
  locale: Locale,
  currentCookie?: string,
) {
  if (currentCookie === locale) return;

  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const localeCookie = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const preferredLocale = normalizeLocale(localeCookie) ?? DEFAULT_LOCALE;
  const pathLocale = getPathLocale(pathname);
  const legacyPathLocale = getLegacyPathLocale(pathname);
  const locale = pathLocale ?? preferredLocale;
  const applicationPath = stripLocaleFromPathname(pathname);

  // Preserve bookmarks using the former language-only URLs while making the
  // language-region locale the single canonical URL and cookie representation.
  if (legacyPathLocale) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.pathname = localizePath(legacyPathLocale, applicationPath);
    const response = NextResponse.redirect(canonicalUrl, 308);
    persistResolvedLocale(response, legacyPathLocale, localeCookie);
    return response;
  }

  // Page URLs use the locale as their source of truth. Unprefixed legacy links
  // are redirected once; localized URLs are rewritten to the existing App
  // Router route files without exposing the internal path to the browser.
  if (isPageRequest(pathname) && !pathLocale) {
    const localizedUrl = request.nextUrl.clone();
    localizedUrl.pathname = localizePath(locale, pathname);
    const response = NextResponse.redirect(localizedUrl);
    persistResolvedLocale(response, locale, localeCookie);
    return response;
  }

  const isPublicRoute = PUBLIC_ROUTE_PREFIXES.some((route) => {
    if (route === APP_PATHS.home) {
      return applicationPath === route;
    }

    return applicationPath.startsWith(route);
  });

  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const verifiedUser = token ? await verifyToken(token) : null;
  const isAuthenticated = Boolean(verifiedUser);

  if (!isAuthenticated && !isPublicRoute) {
    const loginUrl = new URL(
      localizePath(locale, APP_PATHS.login),
      request.url,
    );
    loginUrl.searchParams.set('next', `${pathname}${request.nextUrl.search}`);

    const response = NextResponse.redirect(loginUrl);
    response.headers.set('Cache-Control', 'no-store');

    // Clear invalid or expired tokens so route gating cannot be bypassed.
    if (token) {
      response.cookies.delete(AUTH_COOKIE_NAME);
    }

    return response;
  }

  // Downstream layouts receive a trusted locale derived from the path/cookie.
  // Overwriting the request header prevents clients from spoofing this value.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_REQUEST_HEADER, locale);

  const response =
    pathLocale && !NATIVE_LOCALIZED_PATHS.has(applicationPath)
      ? NextResponse.rewrite(
          new URL(applicationPath + request.nextUrl.search, request.url),
          { request: { headers: requestHeaders } },
        )
      : NextResponse.next({ request: { headers: requestHeaders } });

  persistResolvedLocale(response, locale, localeCookie);
  return response;
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico).*)'],
};
