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
});
