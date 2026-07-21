import { notFound } from 'next/navigation';
import InterviewExperienceView from '@/components/learning/InterviewExperienceView';
import {
  getInterviewExperience,
  interviewExperiences,
} from '@/content/interviewPractice';
import { getLocalizedInterviewExperience } from '@/content/interviews';
import { getRequestLocale } from '@/i18n/server';

type InterviewExperiencePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return interviewExperiences.map((experience) => ({
    slug: experience.slug,
  }));
}

export default async function InterviewExperiencePage({
  params,
}: InterviewExperiencePageProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const experience =
    getLocalizedInterviewExperience(locale, slug) ??
    getInterviewExperience(slug);

  if (!experience) {
    notFound();
  }

  return <InterviewExperienceView experience={experience} locale={locale} />;
}
