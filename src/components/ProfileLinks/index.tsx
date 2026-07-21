import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import type { ElementType } from 'react';

export type SocialIconName = 'youtube' | 'github' | 'linkedin';

const icons: Record<SocialIconName, ElementType> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

const linkThemes: Record<SocialIconName, string> = {
  github:
    'border-slate-900 bg-slate-950 text-white hover:border-slate-800 hover:bg-slate-800',
  linkedin:
    'border-[#0A66C2] bg-[#0A66C2] text-white hover:border-[#084d93] hover:bg-[#084d93]',
  youtube:
    'border-[#FF0000] bg-[#FF0000] text-white hover:border-[#cc0000] hover:bg-[#cc0000]',
};

type SocialLinkProps = {
  href: string;
  icon: SocialIconName;
  iconOnly?: boolean;
  label: string;
};

export function SocialLink({
  href,
  icon,
  iconOnly = false,
  label,
}: SocialLinkProps) {
  const Icon = icons[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border text-sm font-black shadow-sm transition ${
        iconOnly ? 'size-11 px-0 py-0' : 'px-4 py-2.5'
      } ${linkThemes[icon]}`}
    >
      <Icon fontSize="small" aria-hidden="true" />
      {iconOnly ? <span className="sr-only">{label}</span> : label}
    </a>
  );
}

type ResumeDownloadLinkProps = {
  accessibleLabel: string;
  format: 'docx' | 'pdf';
  href: string;
};

const resumeThemes = {
  docx: 'border-blue-200 bg-blue-50 text-blue-800 hover:border-blue-300 hover:bg-blue-100',
  pdf: 'border-red-200 bg-red-50 text-red-800 hover:border-red-300 hover:bg-red-100',
} as const;

export function ResumeDownloadLink({
  accessibleLabel,
  format,
  href,
}: ResumeDownloadLinkProps) {
  const FormatIcon =
    format === 'pdf' ? PictureAsPdfRoundedIcon : ArticleRoundedIcon;

  return (
    <a
      aria-label={accessibleLabel}
      className={`inline-flex h-11 items-center gap-1.5 rounded-lg border px-3 text-xs font-black tracking-wide shadow-sm transition ${resumeThemes[format]}`}
      download
      href={href}
      title={accessibleLabel}
    >
      <FormatIcon fontSize="small" aria-hidden="true" />
      {format.toUpperCase()}
      <DownloadRoundedIcon sx={{ fontSize: 16 }} aria-hidden="true" />
    </a>
  );
}

type HighlightBadgeProps = {
  href?: string;
  label: string;
};

export function HighlightBadge({ href, label }: HighlightBadgeProps) {
  const className =
    'rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-800 transition hover:bg-sky-200';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return <span className={className}>{label}</span>;
}
