import { notFound } from 'next/navigation';
import PortfolioPageContent from '@/components/public/pages/PortfolioPageContent';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/config';

export default async function LocalizedPortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PortfolioPageContent dictionary={await getDictionary(locale)} />;
}
