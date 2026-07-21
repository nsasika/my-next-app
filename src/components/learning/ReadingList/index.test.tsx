import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import ReadingList from '.';

const items = [
  {
    answer: 'First answer',
    question: 'First question',
  },
  {
    answer: 'Second answer',
    question: 'Second question',
  },
] as const;

describe('ReadingList', () => {
  it('hides previous on the first item and next on the last item', async () => {
    const user = userEvent.setup();

    render(<ReadingList items={items} />);

    expect(screen.queryByRole('button', { name: 'Previous' })).toBeNull();
    expect(
      screen.getByRole('button', { name: 'Next question' }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Next question' }));

    expect(
      screen.getByRole('button', { name: 'Previous' }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Next question' })).toBeNull();
  });
});
