import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

const publicRoutes = [
  '/',
  '/about',
  '/interview-questions',
  '/login',
  '/api/auth/login',
  '/nalinsacademy.png',
  '/profilepic.png',
];

export async function middleware(request: NextRequest) {
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
    const response = NextResponse.redirect(new URL('/login', request.url));

    // Clear invalid or expired tokens so route gating cannot be bypassed.
    if (token) {
      response.cookies.delete('access_token');
    }

    return response;
  }

  if (isAuthenticated && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico).*)'],
};
