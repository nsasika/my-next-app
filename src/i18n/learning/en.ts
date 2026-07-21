import { technologyLandingContent } from '@/content/technologies';
import type { LocalizedLearningContent } from './types';

export const enLearning = {
  labels: {
    commonUsages: 'Common usages',
    evolution: 'Evolution',
    logoLabel: '{technology} logo',
    officialWebsites: 'Official websites',
    startHere: 'Start here',
    technologyLanding: 'Technology landing',
    whatItIsFor: (technology: string) => `What ${technology} is for`,
  },
  landings: technologyLandingContent,
} satisfies LocalizedLearningContent;
