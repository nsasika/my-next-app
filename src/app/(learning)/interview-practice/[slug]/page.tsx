import { notFound } from 'next/navigation';
import InterviewExperienceView from '@/components/learning/InterviewExperienceView';
import {
  getInterviewExperience,
  interviewExperiences,
} from '@/content/interviewPractice';

type InterviewExperiencePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return interviewExperiences.map((experience) => ({
    slug: experience.slug,
  }));
}

export default async function InterviewExperiencePage({
  params,
}: InterviewExperiencePageProps) {
  const { slug } = await params;
  const experience = getInterviewExperience(slug);

  if (!experience) {
    notFound();
  }

  return <InterviewExperienceView experience={experience} />;
}
