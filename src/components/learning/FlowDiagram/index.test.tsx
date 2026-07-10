import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FlowDiagram from '.';

describe('FlowDiagram', () => {
  it('renders each step in order', () => {
    render(
      <FlowDiagram
        title="Login flow"
        steps={[
          { label: 'Submit', description: 'Send credentials.' },
          { label: 'Verify', description: 'Check the session.' },
        ]}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Login flow' }),
    ).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Verify')).toBeInTheDocument();
  });
});
