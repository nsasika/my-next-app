import type { WorkExperience } from '@/components/WorkExperienceTimeline';
import type {
  Dictionary,
  LocalizedPanel,
  WorkExperienceId,
} from '@/i18n/types';
import { academyPanels } from './academy';
import { portfolioPanels, workExperience } from './portfolio';

function mergePanels<T extends readonly { id: string }[]>(
  presentation: T,
  copy: readonly LocalizedPanel[],
) {
  return presentation.map((panel, index) => ({
    ...panel,
    ...copy[index],
  }));
}

export const getLocalizedAcademyPanels = (
  copy: Dictionary['academy']['tracks']['panels'],
) => mergePanels(academyPanels, copy);

export const getLocalizedPortfolioPanels = (
  copy: Dictionary['portfolio']['capability']['panels'],
) => mergePanels(portfolioPanels, copy);

export function getLocalizedWorkExperience(
  copy: Dictionary['portfolio']['work'],
): WorkExperience[] {
  return workExperience.map((experience) => {
    const localized = copy[experience.id as WorkExperienceId];

    return {
      ...experience,
      ...localized,
      country: { ...experience.country, name: localized.countryName },
    };
  });
}
