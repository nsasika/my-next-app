import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HighlightBadge, ResumeDownloadLink, SocialLink } from '.';

describe('ProfileLinks', () => {
  it('renders a social link with its profile URL', () => {
    render(
      <SocialLink
        href="https://github.com/nsasika"
        icon="github"
        label="GitHub"
      />,
    );

    const link = screen.getByRole('link', { name: 'GitHub' });

    expect(link).toHaveAttribute('href', 'https://github.com/nsasika');
    expect(link).toHaveTextContent('GitHub');
  });

  it('renders all supported social icons', () => {
    render(
      <>
        <SocialLink href="https://youtube.com" icon="youtube" label="YouTube" />
        <SocialLink href="https://github.com" icon="github" label="GitHub" />
        <SocialLink
          href="https://linkedin.com"
          icon="linkedin"
          label="LinkedIn"
        />
      </>,
    );

    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
  });

  it('renders a compact resume download link', () => {
    render(
      <ResumeDownloadLink
        accessibleLabel="Download résumé as PDF"
        format="pdf"
        href="/resume/nalin-padmasiri-resume.pdf"
      />,
    );

    const link = screen.getByRole('link', { name: 'Download résumé as PDF' });

    expect(link).toHaveAttribute('download');
    expect(link).not.toHaveAttribute('target');
    expect(link).toHaveTextContent('PDF');
  });

  it('renders company highlights as external links', () => {
    render(
      <HighlightBadge
        href="https://www.dbs.com/default.page"
        label="DBS Bank"
      />,
    );

    expect(screen.getByRole('link', { name: 'DBS Bank' })).toHaveAttribute(
      'href',
      'https://www.dbs.com/default.page',
    );
  });

  it('renders location highlights as text when no URL is provided', () => {
    render(<HighlightBadge label="Singapore" />);

    expect(screen.getByText('Singapore')).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'Singapore' }),
    ).not.toBeInTheDocument();
  });
});
