import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import {
  HighlightBadge,
  ResumeDownloadLink,
  SocialLink,
} from '@/components/ProfileLinks';
import CompactPublicSlider from '@/components/public/CompactPublicSlider';
import {
  PublicHero,
  PublicPageShell,
  SectionIntro,
  StatStrip,
} from '@/components/public/CompactPublicLayout';
import AppButton from '@/components/ui/AppButton';
import WorkExperienceTimeline from '@/components/WorkExperienceTimeline';
import { PUBLIC_ASSETS } from '@/config/app';
import {
  getLocalizedPortfolioPanels,
  getLocalizedWorkExperience,
} from '@/content/localize';
import { highlightLinks, resumeFiles, socialLinks } from '@/content/portfolio';
import type { Dictionary } from '@/i18n/types';

const getPublicFilePath = (filePath: string) =>
  path.join(process.cwd(), 'public', filePath);

export default function PortfolioPageContent({
  dictionary,
}: {
  dictionary: Dictionary;
}) {
  const { portfolio } = dictionary;
  const availableResumes = resumeFiles.filter((file) =>
    fs.existsSync(getPublicFilePath(file.filePath)),
  );
  const panels = getLocalizedPortfolioPanels(portfolio.capability.panels);
  const experiences = getLocalizedWorkExperience(portfolio.work);

  return (
    <PublicPageShell>
      <PublicHero
        actions={
          <>
            <AppButton href="#experience">
              <WorkHistoryRoundedIcon fontSize="small" />
              {portfolio.hero.action}
            </AppButton>
            {highlightLinks.map((highlight) => (
              <HighlightBadge
                key={highlight.label}
                href={'href' in highlight ? highlight.href : undefined}
                label={highlight.label}
              />
            ))}
          </>
        }
        aside={
          <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-[8rem_minmax(0,1fr)] gap-4 p-4">
              <div className="relative overflow-hidden rounded-lg bg-slate-100">
                <Image
                  alt="Nalin Padmasiri"
                  className="aspect-square h-full w-full object-cover"
                  height={180}
                  priority
                  src={PUBLIC_ASSETS.profilePhoto}
                  width={180}
                />
              </div>
              <div className="min-w-0 self-center">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                  {portfolio.enterpriseDelivery.eyebrow}
                </p>
                <h2 className="mt-2 text-xl font-black leading-tight text-slate-950">
                  {portfolio.enterpriseDelivery.heading}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {portfolio.enterpriseDelivery.body}
                </p>
              </div>
            </div>
            <div className="border-t border-slate-100 p-4">
              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.label}
                    href={link.href}
                    icon={link.icon}
                    iconOnly
                    label={link.label}
                  />
                ))}
                {availableResumes.length ? (
                  <span
                    aria-hidden="true"
                    className="mx-1 h-7 w-px bg-slate-200"
                  />
                ) : null}
                <span className="sr-only">
                  {portfolio.resume.downloadsLabel}
                </span>
                {availableResumes.map((resume) => (
                  <ResumeDownloadLink
                    accessibleLabel={
                      resume.format === 'pdf'
                        ? portfolio.resume.pdfLabel
                        : portfolio.resume.docxLabel
                    }
                    format={resume.format}
                    href={resume.filePath}
                    key={resume.filePath}
                  />
                ))}
              </div>
            </div>
          </section>
        }
        body={portfolio.hero.paragraphs.join(' ')}
        eyebrow={portfolio.hero.eyebrow}
        title={portfolio.hero.heading}
      />
      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <StatStrip stats={portfolio.stats} />
      </section>
      <section
        aria-label={portfolio.experience.title}
        className="mt-8 scroll-mt-28 rounded-lg border-2 border-sky-200 bg-sky-50/70 p-4 shadow-sm sm:p-6"
        id="experience"
      >
        <SectionIntro
          body={portfolio.experience.body}
          eyebrow={portfolio.experience.eyebrow}
          title={portfolio.experience.title}
        />
        <WorkExperienceTimeline experiences={experiences} />
      </section>
      <section className="mt-10 min-w-0">
        <CompactPublicSlider
          eyebrow={portfolio.capability.eyebrow}
          panels={panels}
          title={portfolio.capability.title}
        />
      </section>
    </PublicPageShell>
  );
}
