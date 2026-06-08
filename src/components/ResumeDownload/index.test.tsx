import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ResumeDownload from '.';

describe('ResumeDownload', () => {
  it('renders all available resume download formats', () => {
    render(
      <ResumeDownload
        options={[
          { href: '/resume/nalin-padmasiri-resume.pdf', label: 'PDF' },
          { href: '/resume/nalin-padmasiri-resume.docx', label: 'DOCX' },
        ]}
      />,
    );

    expect(screen.getByRole('link', { name: 'PDF' })).toHaveAttribute(
      'href',
      '/resume/nalin-padmasiri-resume.pdf',
    );
    expect(screen.getByRole('link', { name: 'DOCX' })).toHaveAttribute(
      'href',
      '/resume/nalin-padmasiri-resume.docx',
    );
    expect(
      screen.getByText('Download my latest resume in your preferred format.'),
    ).toBeInTheDocument();
  });

  it('shows upload guidance when no resume files are available', () => {
    render(<ResumeDownload options={[]} />);

    expect(
      screen.getByText(
        'Resume upload pending. Add a PDF or DOCX to enable downloads.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('public/resume/')).toBeInTheDocument();
  });
});
