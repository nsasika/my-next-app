import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import {
  PublicHero,
  PublicPageShell,
  SectionIntro,
  StatStrip,
} from '@/components/public/CompactPublicLayout';
import CompactPublicSlider from '@/components/public/CompactPublicSlider';
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
  const primaryResume = availableResumeOptions[0];

  return (
    <PublicPageShell>
      <PublicHero
        actions={
          <>
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
                  src="/profilepic.png"
                  width={180}
                />
              </div>
              <div className="min-w-0 self-center">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                  Enterprise delivery
                </p>
                <h2 className="mt-2 text-xl font-black leading-tight text-slate-950">
                  React, TypeScript, Java
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Practical engineering experience shaped into academy lessons.
                </p>
              </div>
            </div>
            <div className="border-t border-slate-100 p-4">
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.label}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                  />
                ))}
                {primaryResume ? (
                  <SocialLink
                    download
                    href={primaryResume.href}
                    icon="resume"
                    label={`Resume ${primaryResume.label}`}
                  />
                ) : null}
              </div>
            </div>
          </section>
        }
        body={heroContent.paragraphs.join(' ')}
        eyebrow={heroContent.eyebrow}
        title={heroContent.heading}
      />

      <section className="mt-10 rounded-lg border border-sky-200 bg-sky-50 p-5">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <SectionIntro
            body={academyOriginContent.body}
            eyebrow="Academy purpose"
            title={academyOriginContent.title}
          />
          <StatStrip stats={academyImpactStats} />
        </div>
      </section>

      <section className="mt-8 min-w-0">
        <CompactPublicSlider
          eyebrow="Engineering profile"
          panels={[
            {
              body: expertiseCards[0].body,
              icon: 'code',
              id: expertiseCards[0].title,
              items: ['React', 'TypeScript', 'Modern UI'],
              label: expertiseCards[0].title,
              tone: 'typescript',
              title: expertiseCards[0].title,
            },
            {
              body: expertiseCards[1].body,
              icon: 'architecture',
              id: expertiseCards[1].title,
              items: ['Java', 'Spring Boot', 'Node.js'],
              label: expertiseCards[1].title,
              tone: 'emerald',
              title: expertiseCards[1].title,
            },
            {
              body: expertiseCards[2].body,
              icon: 'business',
              id: expertiseCards[2].title,
              items: ['DBS Bank', 'GIC', 'EMC Singapore'],
              label: expertiseCards[2].title,
              tone: 'blue',
              title: expertiseCards[2].title,
            },
            {
              body: targetRoleContent.body,
              icon: 'psychology',
              id: targetRoleContent.title,
              items: targetRoles,
              label: 'Target roles',
              tone: 'purple',
              title: targetRoleContent.title,
            },
          ]}
          title="Capability map"
        />
      </section>
    </PublicPageShell>
  );
}
