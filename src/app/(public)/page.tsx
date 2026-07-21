import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE, localizePath } from '@/i18n/config';

export default function HomePage() {
  redirect(localizePath(DEFAULT_LOCALE, '/'));
}
