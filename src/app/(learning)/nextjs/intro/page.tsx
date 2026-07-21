import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function IntroToNextjsPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale['en-US'].intro,
        si: nextjsLessonsByLocale['si-LK'].intro,
        ta: nextjsLessonsByLocale['ta-LK'].intro,
      }}
    />
  );
}
