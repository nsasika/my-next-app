import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import InfoCard from '.';

describe('InfoCard', () => {
  it('renders the title and body', () => {
    render(
      <InfoCard
        title="Enterprise frontend"
        body="React.js, TypeScript, and micro-frontends."
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Enterprise frontend' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('React.js, TypeScript, and micro-frontends.'),
    ).toBeInTheDocument();
  });

  it('renders an optional icon', () => {
    render(
      <InfoCard
        title="Cloud native"
        body="Serverless deployment and observability."
        icon={<span data-testid="info-card-icon">Icon</span>}
      />,
    );

    expect(screen.getByTestId('info-card-icon')).toBeInTheDocument();
  });
});
