import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { nextjsLessons } from '@/content/nextjsLessons';

export default function NextjsDeploymentMonitoringPage() {
  return <ConceptLessonPage content={nextjsLessons.deploymentMonitoring} />;
}
