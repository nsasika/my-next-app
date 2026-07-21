import { redirect } from 'next/navigation';
import { localizePath } from './config';
import { getRequestLocale } from './server';

/** Redirects an obsolete route to its canonical equivalent without losing locale. */
export async function redirectToLocalizedPath(
  pathname: string,
): Promise<never> {
  const locale = await getRequestLocale();
  redirect(localizePath(locale, pathname));
}
