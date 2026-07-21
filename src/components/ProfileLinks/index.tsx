import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import type { ElementType } from 'react';

export type SocialIconName = 'youtube' | 'github' | 'linkedin' | 'resume';

const icons: Record<SocialIconName, ElementType> = {
  resume: DescriptionIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

const linkThemes: Record<SocialIconName, string> = {
  github:
    'border-slate-900 bg-slate-950 text-white hover:border-slate-800 hover:bg-slate-800',
  linkedin:
    'border-[#0A66C2] bg-[#0A66C2] text-white hover:border-[#084d93] hover:bg-[#084d93]',
  resume:
    'border-emerald-600 bg-emerald-600 text-white hover:border-emerald-700 hover:bg-emerald-700',
  youtube:
    'border-[#FF0000] bg-[#FF0000] text-white hover:border-[#cc0000] hover:bg-[#cc0000]',
};

type SocialLinkProps = {
  download?: boolean;
  href: string;
  icon: SocialIconName;
  iconOnly?: boolean;
  label: string;
};

export function SocialLink({
  download,
  href,
  icon,
  iconOnly = false,
  label,
}: SocialLinkProps) {
  const Icon = icons[icon];

  return (
    <a
      download={download}
      href={href}
      target={download ? undefined : '_blank'}
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border text-sm font-black shadow-sm transition ${
        iconOnly ? 'size-11 px-0 py-0' : 'px-4 py-2.5'
      } ${linkThemes[icon]}`}
    >
      <Icon fontSize="small" aria-hidden="true" />
      {download ? <DownloadIcon fontSize="small" aria-hidden="true" /> : null}
      {iconOnly ? <span className="sr-only">{label}</span> : label}
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
