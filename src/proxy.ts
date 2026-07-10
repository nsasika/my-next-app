import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME } from '@/config/auth';
import { PUBLIC_ROUTE_PREFIXES } from '@/config/publicAccess';
import { APP_PATHS } from '@/config/routes';
import { verifyToken } from '@/server/auth/session';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicRoute = PUBLIC_ROUTE_PREFIXES.some((route) => {
    if (route === APP_PATHS.home) {
      return pathname === route;
    }

    return pathname.startsWith(route);
  });

  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const verifiedUser = token ? await verifyToken(token) : null;
  const isAuthenticated = Boolean(verifiedUser);

  if (!isAuthenticated && !isPublicRoute) {
    const loginUrl = new URL(APP_PATHS.login, request.url);
    loginUrl.searchParams.set('next', pathname);

    const response = NextResponse.redirect(loginUrl);
    response.headers.set('Cache-Control', 'no-store');

    // Clear invalid or expired tokens so route gating cannot be bypassed.
    if (token) {
      response.cookies.delete(AUTH_COOKIE_NAME);
    }

    return response;
  }

  if (isAuthenticated && pathname === APP_PATHS.login) {
    const response = NextResponse.redirect(
      new URL(APP_PATHS.home, request.url),
    );
    response.headers.set('Cache-Control', 'no-store');

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico).*)'],
};
