import { NextResponse } from 'next/server';
import { isLocale, LOCALE_COOKIE_NAME } from '@/i18n/config';

function isSafeRedirect(pathname: string): boolean {
  return pathname.startsWith('/') && !pathname.startsWith('//');
}

export function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const locale = requestUrl.searchParams.get('locale');
  const redirectPath = requestUrl.searchParams.get('redirect') ?? '/';

  if (!locale || !isLocale(locale) || !isSafeRedirect(redirectPath)) {
    return NextResponse.json(
      { message: 'Invalid locale switch request.' },
      { status: 400 },
    );
  }

  const response = NextResponse.redirect(new URL(redirectPath, request.url));
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
