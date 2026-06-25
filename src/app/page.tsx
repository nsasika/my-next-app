import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SchoolIcon from '@mui/icons-material/School';
import StorageIcon from '@mui/icons-material/Storage';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import InfoCard from '@/components/InfoCard';
import StepList from '@/components/StepList';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import {
  homeHeroContent,
  learningPillars,
  platformDirectionContent,
  platformSteps,
} from './content';

const platformStepIcons = {
  code: <CodeIcon fontSize="small" />,
  groups: <GroupsIcon fontSize="small" />,
  track: <TrackChangesIcon fontSize="small" />,
} as const;

const learningPillarIcons = {
  java: <StorageIcon fontSize="small" />,
  react: <IntegrationInstructionsIcon fontSize="small" />,
  recruiter: <SchoolIcon fontSize="small" />,
} as const;

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
            {homeHeroContent.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            {homeHeroContent.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            {homeHeroContent.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AppButton
              href={homeHeroContent.primaryAction.href}
              className="px-6 py-3"
            >
              {homeHeroContent.primaryAction.label}
            </AppButton>
            <AppButton
              href={homeHeroContent.secondaryAction.href}
              className="px-6 py-3"
              variant="secondary"
            >
              {homeHeroContent.secondaryAction.label}
            </AppButton>
          </div>
        </div>

        <ContentCard className="p-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
            {platformDirectionContent.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950">
            {platformDirectionContent.heading}
          </h2>
          <div className="mt-6">
            <StepList
              steps={platformSteps.map((item) => ({
                ...item,
                icon: platformStepIcons[item.icon],
              }))}
            />
          </div>
        </ContentCard>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {learningPillars.map((item) => (
          <InfoCard
            key={item.title}
            body={item.body}
            icon={learningPillarIcons[item.icon]}
            title={item.title}
          />
        ))}
      </section>
    </div>
  );
}
