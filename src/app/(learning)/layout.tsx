import LearningShell from '@/components/layout/LearningShell';
import { getRequestLocale } from '@/i18n/server';

export default async function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getRequestLocale();

  return <LearningShell locale={locale}>{children}</LearningShell>;
}
