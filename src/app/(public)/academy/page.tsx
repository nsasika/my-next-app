import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE, localizePath } from '@/i18n/config';

export default function AcademyPage() {
  redirect(localizePath(DEFAULT_LOCALE, '/academy'));
}
