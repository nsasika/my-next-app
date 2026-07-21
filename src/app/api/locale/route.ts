import { NextResponse } from 'next/server';
import { isLocale, LOCALE_COOKIE_NAME } from '@/i18n/config';

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const locale =
    typeof body === 'object' && body !== null && 'locale' in body
      ? body.locale
      : null;

  if (typeof locale !== 'string' || !isLocale(locale)) {
    return NextResponse.json(
      { message: 'Unsupported locale.' },
      { status: 400 },
    );
  }

  const response = NextResponse.json({ locale });
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
