import TechnologyLanding from '@/components/learning/TechnologyLanding';
import { technologyLandingContent } from '@/content/technologies';

export default function AngularLandingPage() {
  return <TechnologyLanding content={technologyLandingContent.angular} />;
}
