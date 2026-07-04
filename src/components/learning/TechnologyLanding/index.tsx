import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HistoryIcon from '@mui/icons-material/History';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PublicIcon from '@mui/icons-material/Public';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Image from 'next/image';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import type { TechnologyLandingContent } from '@/content/technologies';

const logoClasses: Record<TechnologyLandingContent['accent'], string> = {
  angular: 'bg-red-50 text-red-700 ring-red-100',
  interviews: 'bg-violet-50 text-violet-700 ring-violet-100',
  java: 'bg-orange-50 text-orange-700 ring-orange-100',
  nextjs: 'bg-white text-slate-950 ring-slate-200',
  react: 'bg-cyan-50 text-cyan-700 ring-cyan-100',
};

function TechnologyLogo({
  accent,
  logo,
  title,
}: {
  accent: TechnologyLandingContent['accent'];
  logo?: TechnologyLandingContent['logo'];
  title: string;
}) {
  if (logo) {
    return (
      <div
        aria-label={`${title} logo`}
        className={`flex size-24 shrink-0 items-center justify-center rounded-lg p-5 ring-1 ${logoClasses[accent]}`}
        role="img"
      >
        <Image
          alt={logo.alt}
          className="max-h-full max-w-full object-contain"
          height={56}
          src={logo.src}
          unoptimized
          width={56}
        />
      </div>
    );
  }

  return (
    <div
      aria-label={`${title} logo`}
      className={`flex size-24 shrink-0 items-center justify-center rounded-lg ring-1 ${logoClasses[accent]}`}
      role="img"
    >
      <span className="text-4xl font-black tracking-normal">
        {title.charAt(0)}
      </span>
    </div>
  );
}

export default function TechnologyLanding({
  content,
}: {
  content: TechnologyLandingContent;
}) {
  return (
    <>
      <PageHeader
        actions={
          content.primaryAction ? (
            <AppButton href={content.primaryAction.href}>
              {content.primaryAction.label}
              <ArrowForwardIcon fontSize="small" />
            </AppButton>
          ) : null
        }
        description={content.description}
        eyebrow="Technology landing"
        tags={content.tags}
        title={content.title}
      />

      <section className="mb-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <ContentCard className="border-sky-200">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <TechnologyLogo
              accent={content.accent}
              logo={content.logo}
              title={content.title}
            />
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
                Start here
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">
                What {content.title} is for
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                {content.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </ContentCard>

        <ContentCard>
          <div className="flex items-center gap-2 text-sm font-black text-slate-950">
            <PublicIcon className="text-sky-700" fontSize="small" />
            Official websites
          </div>
          <div className="mt-4 grid gap-2">
            {content.officialLinks.map((link) => (
              <a
                key={link.href}
                className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-slate-950"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                <span>{link.label}</span>
                <OpenInNewIcon fontSize="small" />
              </a>
            ))}
          </div>
        </ContentCard>
      </section>

      <section className="mb-6 grid gap-4 md:grid-cols-2">
        <ContentCard>
          <div className="flex items-center gap-2 text-sm font-black text-slate-950">
            <WorkspacesIcon className="text-sky-700" fontSize="small" />
            Common usages
          </div>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            {content.usages.map((usage) => (
              <li key={usage} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>{usage}</span>
              </li>
            ))}
          </ul>
        </ContentCard>

        <ContentCard>
          <div className="flex items-center gap-2 text-sm font-black text-slate-950">
            <HistoryIcon className="text-sky-700" fontSize="small" />
            Evolution
          </div>
          <div className="mt-4 space-y-4">
            {content.history.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </ContentCard>
      </section>
    </>
  );
}
