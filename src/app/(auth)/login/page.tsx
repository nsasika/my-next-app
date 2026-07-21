import LoginClient from './LoginClient';
import { APP_COPY } from '@/i18n/app';
import { getRequestLocale } from '@/i18n/server';

export default async function LoginPage() {
  const locale = await getRequestLocale();

  return <LoginClient copy={APP_COPY[locale].auth} locale={locale} />;
}
