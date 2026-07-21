import type { NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME, AUTH_SESSION_MAX_AGE_SECONDS } from '@/config/auth';

const authCookieBaseOptions = {
  httpOnly: true,
  path: '/',
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
} as const;

export function setAuthSessionCookie(response: NextResponse, token: string) {
  response.cookies.set(AUTH_COOKIE_NAME, token, {
    ...authCookieBaseOptions,
    maxAge: AUTH_SESSION_MAX_AGE_SECONDS,
  });
}

export function clearAuthSessionCookie(response: NextResponse) {
  response.cookies.set(AUTH_COOKIE_NAME, '', {
    ...authCookieBaseOptions,
    maxAge: 0,
  });
}
