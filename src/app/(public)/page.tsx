import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import StepList from '@/components/StepList';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import {
  homeHeroContent,
  homeImpactStats,
  platformDirectionContent,
  platformSteps,
} from './content';

const platformStepIcons = {
  code: <CodeIcon fontSize="small" />,
  groups: <GroupsIcon fontSize="small" />,
  track: <TrackChangesIcon fontSize="small" />,
} as const;

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8">
      <section className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="animate-fade-rise">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">
            {homeHeroContent.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl">
            {homeHeroContent.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
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
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {homeImpactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300"
              >
                <p className="text-2xl font-black text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ContentCard className="relative overflow-hidden p-6 animate-fade-rise [animation-delay:140ms]">
          <div className="relative">
            <span className="inline-flex rounded-lg bg-sky-100 p-3 text-sky-800">
              <RocketLaunchIcon fontSize="small" />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              {platformDirectionContent.eyebrow}
            </p>
            <h2 className="mt-3 max-w-sm text-2xl font-black leading-tight text-slate-950">
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
          </div>
        </ContentCard>
      </section>
    </div>
  );
}
