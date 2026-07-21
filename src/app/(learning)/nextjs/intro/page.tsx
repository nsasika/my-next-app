import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function IntroToNextjsPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale.en.intro,
        si: nextjsLessonsByLocale.si.intro,
        ta: nextjsLessonsByLocale.ta.intro,
      }}
    />
  );
}
