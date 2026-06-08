import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import StepList from '.';

describe('StepList', () => {
  it('renders ordered steps with their titles and descriptions', () => {
    render(
      <StepList
        steps={[
          {
            icon: <span aria-hidden="true">Icon</span>,
            title: 'Choose a topic',
            body: 'Start with a focused learning track.',
          },
          {
            icon: <span aria-hidden="true">Icon</span>,
            title: 'Practice the answer',
            body: 'Explain the idea in interview-ready language.',
          },
        ]}
      />,
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Choose a topic' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Explain the idea in interview-ready language.'),
    ).toBeInTheDocument();
  });
});
