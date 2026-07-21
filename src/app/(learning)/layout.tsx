import LearningShell from '@/components/layout/LearningShell';
import { getRequestLocale } from '@/i18n/server';
import { APP_COPY } from '@/i18n/app';
import { getLocalizedLearningNavigation } from '@/i18n/learning/navigation';

export default async function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getRequestLocale();
  const navigation = getLocalizedLearningNavigation(locale);

  return (
    <LearningShell
      copy={APP_COPY[locale].shell}
      locale={locale}
      navigation={navigation}
    >
      {children}
    </LearningShell>
  );
}
