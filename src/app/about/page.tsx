import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import ContentCard from '@/components/ui/ContentCard';
import DownloadPanel from '@/components/DownloadPanel/index';
import InfoCard from '@/components/InfoCard';
import { HighlightBadge, SocialLink } from '@/components/ProfileLinks/index';
import {
  academyOriginContent,
  expertiseCards,
  highlightLinks,
  heroContent,
  resumeFiles,
  socialLinks,
  targetRoleContent,
  targetRoles,
} from './content';

const getPublicFilePath = (filePath: string) =>
  path.join(process.cwd(), 'public', filePath);

export default function AboutMePage() {
  const availableResumeOptions = resumeFiles
    .filter((file) => fs.existsSync(getPublicFilePath(file.filePath)))
    .map((file) => ({
      href: file.filePath,
      label: file.label,
    }));

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <ContentCard className="mx-auto w-full max-w-sm p-5">
          <Image
            src="/profilepic.png"
            alt="Nalin Padmasiri"
            width={420}
            height={420}
            className="aspect-square w-full rounded-lg object-cover"
            priority
          />
        </ContentCard>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
            {heroContent.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            {heroContent.heading}
          </h1>
          {heroContent.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`text-lg leading-8 text-slate-700 ${
                index === 0 ? 'mt-6' : 'mt-4'
              }`}
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-2">
            {highlightLinks.map((highlight) => (
              <HighlightBadge
                key={highlight.label}
                href={'href' in highlight ? highlight.href : undefined}
                label={highlight.label}
              />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {expertiseCards.map((item) => (
          <InfoCard key={item.title} body={item.body} title={item.title} />
        ))}
      </section>

      <section className="mt-14">
        <ContentCard className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            {targetRoleContent.title}
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            {targetRoleContent.body}
          </p>
          <ul className="mt-6 space-y-3">
            {targetRoles.map((role) => (
              <li
                key={role}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {role}
              </li>
            ))}
          </ul>
          <DownloadPanel
            emptyHint="Resume upload pending. Add a PDF or DOCX to enable downloads."
            emptyPathLabel="public/resume/"
            options={availableResumeOptions}
            title="Resume"
          />
        </ContentCard>
      </section>

      <section className="mt-14 rounded-lg border border-sky-200 bg-sky-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-950">
          {academyOriginContent.title}
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          {academyOriginContent.body}
        </p>
      </section>
    </div>
  );
}
