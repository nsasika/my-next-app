import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CompactPublicSlider from '@/components/public/CompactPublicSlider';
import {
  PublicHero,
  PublicPageShell,
  SectionIntro,
  StatStrip,
} from '@/components/public/CompactPublicLayout';
import AppButton from '@/components/ui/AppButton';
import { APP_PATHS } from '@/config/routes';
import { getLocalizedAcademyPanels } from '@/content/localize';
import { localizePath, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';

const icons = [
  AutoStoriesRoundedIcon,
  BuildRoundedIcon,
  PersonSearchRoundedIcon,
] as const;

export default function AcademyPageContent({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const { academy } = dictionary;
  const panels = getLocalizedAcademyPanels(academy.tracks.panels);

  return (
    <PublicPageShell>
      <PublicHero
        actions={
          <>
            <AppButton href={APP_PATHS.buildLab}>
              <BuildRoundedIcon fontSize="small" />
              {academy.hero.buildLabAction}
            </AppButton>
            <AppButton
              href={localizePath(locale, APP_PATHS.nalin)}
              variant="secondary"
            >
              <PersonSearchRoundedIcon fontSize="small" />
              {academy.hero.portfolioAction}
            </AppButton>
          </>
        }
        aside={
          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
                <SchoolRoundedIcon fontSize="small" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                  {academy.learningPromise.eyebrow}
                </p>
                <h2 className="mt-1 text-xl font-black leading-tight text-slate-950">
                  {academy.learningPromise.heading}
                </h2>
              </div>
            </div>
            <div className="mt-4 grid gap-4">
              {academy.learningPromise.items.map((item, index) => {
                const Icon = icons[index];
                return (
                  <div className="flex gap-3" key={item.title}>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                      <Icon fontSize="small" />
                    </span>
                    <div>
                      <h3 className="text-sm font-black text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        }
        body={academy.hero.body}
        eyebrow={academy.hero.eyebrow}
        title={academy.hero.heading}
      />
      <section className="mt-10 rounded-lg border border-sky-200 bg-sky-50 p-5">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <SectionIntro
            body={academy.purpose.body}
            eyebrow={academy.purpose.eyebrow}
            title={academy.purpose.title}
          />
          <StatStrip stats={academy.purpose.stats} />
        </div>
      </section>
      <section className="mt-8 min-w-0">
        <CompactPublicSlider
          eyebrow={academy.tracks.eyebrow}
          panels={panels}
          title={academy.tracks.title}
        />
      </section>
    </PublicPageShell>
  );
}
