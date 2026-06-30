import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import ContentCard from '@/components/ui/ContentCard';
import DownloadPanel from '@/components/DownloadPanel/index';
import InfoCard from '@/components/InfoCard';
import { HighlightBadge, SocialLink } from '@/components/ProfileLinks/index';
import {
  academyImpactStats,
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
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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

        <ContentCard className="mx-auto w-full max-w-sm overflow-hidden p-0">
          <div className="relative">
            <Image
              src="/profilepic.png"
              alt="Nalin Padmasiri"
              width={420}
              height={420}
              className="aspect-square w-full object-cover"
              priority
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/40 bg-white/90 p-4 shadow-sm backdrop-blur">
              <p className="text-sm font-bold text-slate-950">
                React, TypeScript, Java
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Enterprise delivery
              </p>
            </div>
          </div>
        </ContentCard>
      </section>

      <section className="mt-12 grid gap-5 rounded-lg border border-sky-200 bg-sky-50 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            Academy purpose
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
            {academyOriginContent.title}
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            {academyOriginContent.body}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {academyImpactStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-lg border border-white/70 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-3xl font-black text-slate-950">{stat.value}</p>
              <p className="mt-1 text-sm font-bold text-slate-600">
                {stat.label}
              </p>
            </article>
          ))}
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
    </div>
  );
}
