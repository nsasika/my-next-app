import ReadingList from '@/components/learning/ReadingList';
import PageHeader from '@/components/ui/PageHeader';
import type { InterviewExperience } from '@/content/interviewPractice';
import type { Locale } from '@/i18n/config';
import { LEARNING_UI } from '@/i18n/learning/ui';

export default function InterviewExperienceView({
  experience,
  locale,
}: {
  experience: InterviewExperience;
  locale: Locale;
}) {
  return (
    <>
      <PageHeader
        description={experience.description}
        eyebrow={experience.company}
        tags={experience.tags}
        title={experience.title}
      />

      <ReadingList items={experience.items} labels={LEARNING_UI[locale]} />
    </>
  );
}
