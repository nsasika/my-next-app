import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import WorkExperienceTimeline, { type WorkExperience } from '.';

const experiences: readonly WorkExperience[] = [
  {
    client: 'Example Client',
    collaboration: 'Regional delivery: 🇭🇰 Hong Kong',
    company: 'Example Consultancy',
    country: { flag: '🇸🇬', name: 'Singapore' },
    dates: 'Jan 2024 - Jan 2025',
    duration: '1 year',
    highlights: ['Modernized an enterprise application.'],
    id: 'current-role',
    role: 'Senior Software Engineer',
    summary: 'Delivered a modern full-stack platform.',
    technologies: [
      { icon: 'frontend', label: 'React + TypeScript' },
      { icon: 'backend', label: 'Java + Spring Boot' },
    ],
  },
  {
    company: 'Earlier Company',
    country: { flag: '🇱🇰', name: 'Sri Lanka' },
    dates: 'Jan 2023 - Dec 2023',
    duration: '1 year',
    highlights: ['Built reliable services.'],
    id: 'earlier-role',
    role: 'Software Engineer',
    summary: 'Worked on production software.',
    technologies: [{ icon: 'data', label: 'PostgreSQL' }],
  },
];

describe('WorkExperienceTimeline', () => {
  it('renders roles, clients, employers, locations, dates, and durations', () => {
    render(<WorkExperienceTimeline experiences={experiences} />);

    const timeline = screen.getByRole('list', {
      name: 'Nalin Padmasiri work experience',
    });

    expect(
      within(timeline).getByRole('heading', {
        name: 'Senior Software Engineer',
      }),
    ).toBeInTheDocument();
    expect(
      within(timeline).getByText('Example Client via Example Consultancy'),
    ).toBeInTheDocument();
    expect(
      within(timeline).getByLabelText('Singapore work location'),
    ).toHaveTextContent('🇸🇬 Singapore');
    expect(within(timeline).getAllByText('Jan 2024 - Jan 2025')).toHaveLength(
      2,
    );
    expect(within(timeline).getAllByText('1 year')).toHaveLength(4);
  });

  it('renders responsibilities, collaboration regions, and technology chips', () => {
    render(<WorkExperienceTimeline experiences={experiences} />);

    expect(
      screen.getByText('Modernized an enterprise application.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Regional delivery: 🇭🇰 Hong Kong'),
    ).toBeInTheDocument();
    expect(screen.getByText('React + TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Java + Spring Boot')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
  });
});
