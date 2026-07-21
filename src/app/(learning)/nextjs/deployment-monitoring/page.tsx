import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsDeploymentMonitoringPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale['en-US'].deploymentMonitoring,
        si: nextjsLessonsByLocale['si-LK'].deploymentMonitoring,
        ta: nextjsLessonsByLocale['ta-LK'].deploymentMonitoring,
      }}
    />
  );
}
