import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function ServerClientComponentsPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale['en-US'].components,
        si: nextjsLessonsByLocale['si-LK'].components,
        ta: nextjsLessonsByLocale['ta-LK'].components,
      }}
    />
  );
}
