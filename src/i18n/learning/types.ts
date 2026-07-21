import type { TechnologyLandingContent } from '@/content/technologies';

export type TechnologyLandingKey = TechnologyLandingContent['accent'];

export type TechnologyLandingLabels = {
  commonUsages: string;
  evolution: string;
  logoLabel: string;
  officialWebsites: string;
  startHere: string;
  technologyLanding: string;
  whatItIsFor: (technology: string) => string;
};

export type LocalizedLearningContent = {
  labels: TechnologyLandingLabels;
  landings: Record<TechnologyLandingKey, TechnologyLandingContent>;
};
