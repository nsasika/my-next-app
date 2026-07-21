import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BadgeIcon from '@mui/icons-material/Badge';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import type { Dictionary } from '@/i18n/types';
import type { Locale } from '@/i18n/config';
import { localizePath } from '@/i18n/config';
import AppButton from '@/components/ui/AppButton';
import {
  PublicHero,
  PublicPageShell,
  SectionIntro,
  StatStrip,
} from '../CompactPublicLayout';

const icons = [TrackChangesIcon, CodeIcon, GroupsIcon] as const;

export default function HomePageContent({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const { home } = dictionary;

  return (
    <PublicPageShell>
      <PublicHero
        actions={
          <>
            <AppButton href={localizePath(locale, '/academy')}>
              <SchoolIcon fontSize="small" />
              {home.hero.primaryAction}
            </AppButton>
            <AppButton
              href={localizePath(locale, '/nalin')}
              variant="secondary"
            >
              <BadgeIcon fontSize="small" />
              {home.hero.secondaryAction}
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
                  {home.platform.eyebrow}
                </p>
                <h2 className="mt-1 text-xl font-black leading-tight text-slate-950">
                  {home.platform.heading}
                </h2>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {home.platform.steps.map((step, index) => {
                const Icon = icons[index];
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
        body={home.hero.body}
        eyebrow={home.hero.eyebrow}
        title={home.hero.heading}
      />
      <section className="mt-10 grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center">
        <SectionIntro
          body={home.snapshot.body}
          eyebrow={home.snapshot.eyebrow}
          title={home.snapshot.title}
        />
        <StatStrip stats={home.snapshot.stats} />
      </section>
    </PublicPageShell>
  );
}
