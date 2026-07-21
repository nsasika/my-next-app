import 'server-only';

import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_COOKIE_NAME,
  LOCALE_REQUEST_HEADER,
  type Locale,
} from './config';

export async function getRequestLocale(): Promise<Locale> {
  const localeHeader = (await headers()).get(LOCALE_REQUEST_HEADER);
  if (localeHeader && isLocale(localeHeader)) return localeHeader;

  const value = (await cookies()).get(LOCALE_COOKIE_NAME)?.value;

  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}
