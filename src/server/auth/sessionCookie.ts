import type { NextResponse } from 'next/server';
import { AUTH_SESSION_MAX_AGE_SECONDS } from './session';

const ACCESS_TOKEN_COOKIE = 'access_token';

const authCookieBaseOptions = {
  httpOnly: true,
  path: '/',
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
} as const;

export function setAuthSessionCookie(response: NextResponse, token: string) {
  response.cookies.set(ACCESS_TOKEN_COOKIE, token, {
    ...authCookieBaseOptions,
    maxAge: AUTH_SESSION_MAX_AGE_SECONDS,
  });
}

export function clearAuthSessionCookie(response: NextResponse) {
  response.cookies.set(ACCESS_TOKEN_COOKIE, '', {
    ...authCookieBaseOptions,
    maxAge: 0,
  });
}
