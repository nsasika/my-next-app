import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import type { ElementType } from 'react';

export type SocialIconName = 'youtube' | 'github' | 'linkedin';

const icons: Record<SocialIconName, ElementType> = {
  youtube: YouTubeIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

type SocialLinkProps = {
  href: string;
  icon: SocialIconName;
  label: string;
};

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  const Icon = icons[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-sky-400 hover:bg-sky-50"
    >
      <Icon fontSize="small" aria-hidden="true" />
      {label}
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
