import TechnologyLanding from '@/components/learning/TechnologyLanding';
import { technologyLandingContent } from '@/content/technologies';

export default function NextjsLandingPage() {
  return <TechnologyLanding content={technologyLandingContent.nextjs} />;
}
