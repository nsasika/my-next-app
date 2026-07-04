import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SchoolIcon from '@mui/icons-material/School';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AppButton from '@/components/ui/AppButton';
import {
  PublicHero,
  PublicPageShell,
  SectionIntro,
  StatStrip,
} from '@/components/public/CompactPublicLayout';
import {
  homeHeroContent,
  homeImpactStats,
  platformDirectionContent,
  platformSteps,
} from './content';

const platformStepIcons = {
  code: CodeIcon,
  groups: GroupsIcon,
  track: TrackChangesIcon,
} as const;

export default function HomePage() {
  return (
    <PublicPageShell>
      <PublicHero
        actions={
          <>
            <AppButton href={homeHeroContent.primaryAction.href}>
              <RocketLaunchIcon fontSize="small" />
              {homeHeroContent.primaryAction.label}
            </AppButton>
            <AppButton
              href={homeHeroContent.secondaryAction.href}
              variant="secondary"
            >
              <SchoolIcon fontSize="small" />
              {homeHeroContent.secondaryAction.label}
            </AppButton>
          </>
        }
        aside={
          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
                <AutoStoriesIcon fontSize="small" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                  {platformDirectionContent.eyebrow}
                </p>
                <h2 className="mt-1 text-xl font-black leading-tight text-slate-950">
                  {platformDirectionContent.heading}
                </h2>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {platformSteps.map((step, index) => {
                const Icon = platformStepIcons[step.icon];

                return (
                  <div key={step.title} className="flex gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                      <Icon fontSize="small" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-black text-slate-950">
                        {index + 1}. {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-5 text-slate-600">
                        {step.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        }
        body={homeHeroContent.body}
        eyebrow={homeHeroContent.eyebrow}
        title={homeHeroContent.heading}
      />

      <section className="mt-10 grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center">
        <SectionIntro
          body="A compact view of what the platform already offers and the quality bar behind it."
          eyebrow="Academy snapshot"
          title="Learn, practice, and explain with confidence"
        />
        <StatStrip stats={homeImpactStats} />
      </section>
    </PublicPageShell>
  );
}
