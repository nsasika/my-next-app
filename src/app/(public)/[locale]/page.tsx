import { notFound } from 'next/navigation';
import HomePageContent from '@/components/public/pages/HomePageContent';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/config';

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <HomePageContent dictionary={await getDictionary(locale)} locale={locale} />
  );
}
