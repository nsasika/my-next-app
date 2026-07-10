import ReadingList from '@/components/learning/ReadingList';
import PageHeader from '@/components/ui/PageHeader';
import type { InterviewExperience } from '@/content/interviewPractice';

export default function InterviewExperienceView({
  experience,
}: {
  experience: InterviewExperience;
}) {
  return (
    <>
      <PageHeader
        description={experience.description}
        eyebrow={experience.company}
        tags={experience.tags}
        title={experience.title}
      />

      <ReadingList items={experience.items} />
    </>
  );
}
