import 'server-only';

import { cookies } from 'next/headers';
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_COOKIE_NAME,
  type Locale,
} from './config';

export async function getRequestLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE_NAME)?.value;

  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}
