import type { Locale } from '@/i18n/config';
import type { InterviewExperience } from '../interviewPractice';
import { enInterviewExperiences } from './en';
import { siInterviewExperiences } from './si';
import { taInterviewExperiences } from './ta';

const localizedExperiences: Record<
  Locale,
  Readonly<Record<string, InterviewExperience>>
> = {
  'en-US': enInterviewExperiences,
  'si-LK': siInterviewExperiences,
  'ta-LK': taInterviewExperiences,
};

export function getLocalizedInterviewExperience(
  locale: Locale,
  slug: string,
): InterviewExperience | undefined {
  return localizedExperiences[locale][slug];
}
