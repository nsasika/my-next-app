import { notFound } from 'next/navigation';
import AcademyPageContent from '@/components/public/pages/AcademyPageContent';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/config';

export default async function LocalizedAcademyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <AcademyPageContent
      dictionary={await getDictionary(locale)}
      locale={locale}
    />
  );
}
