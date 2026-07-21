import BuildLabClient from './BuildLabClient';
import { APP_COPY } from '@/i18n/app';
import { getRequestLocale } from '@/i18n/server';

export default async function BuildLabPage() {
  const locale = await getRequestLocale();

  return <BuildLabClient copy={APP_COPY[locale].buildLab} />;
}
