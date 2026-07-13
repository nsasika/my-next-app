import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE, localizePath } from '@/i18n/config';

export default function PortfolioPage() {
  redirect(localizePath(DEFAULT_LOCALE, '/nalin'));
}
