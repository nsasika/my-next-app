import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/server/auth/session';

const publicRoutes = [
  '/',
  '/about',
  '/build-lab',
  '/engineering-blueprint',
  '/interview-questions',
  '/login',
  '/api/auth/login',
  '/nalinsacademy.png',
  '/profilepic.png',
  '/resume/',
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicRoute = publicRoutes.some((route) => {
    if (route === '/') {
      return pathname === route;
    }

    return pathname.startsWith(route);
  });

  const token = request.cookies.get('access_token')?.value;
  const verifiedUser = token ? await verifyToken(token) : null;
  const isAuthenticated = Boolean(verifiedUser);

  if (!isAuthenticated && !isPublicRoute) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname);

    const response = NextResponse.redirect(loginUrl);
    response.headers.set('Cache-Control', 'no-store');

    // Clear invalid or expired tokens so route gating cannot be bypassed.
    if (token) {
      response.cookies.delete('access_token');
    }

    return response;
  }

  if (isAuthenticated && pathname === '/login') {
    const response = NextResponse.redirect(new URL('/', request.url));
    response.headers.set('Cache-Control', 'no-store');

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico).*)'],
};
