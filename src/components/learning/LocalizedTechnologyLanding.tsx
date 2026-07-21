import TechnologyLanding from '@/components/learning/TechnologyLanding';
import { LEARNING_COPY } from '@/i18n/learning';
import type { TechnologyLandingKey } from '@/i18n/learning/types';
import { getRequestLocale } from '@/i18n/server';

/**
 * Server boundary for localized learning-track landing pages. Route files only
 * declare which track they represent; locale selection and dictionary lookup
 * remain centralized here.
 */
export default async function LocalizedTechnologyLanding({
  landing,
}: {
  landing: TechnologyLandingKey;
}) {
  const locale = await getRequestLocale();
  const localizedLearning = LEARNING_COPY[locale];

  return (
    <TechnologyLanding
      content={localizedLearning.landings[landing]}
      labels={localizedLearning.labels}
    />
  );
}
