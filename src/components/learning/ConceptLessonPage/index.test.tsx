import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ConceptLessonPage, { type ConceptLessonContent } from '.';

const content = {
  codeExamples: [
    {
      code: 'const token = "demo";',
      filePath: 'src/demo.ts',
      language: 'ts',
      title: 'Token example',
    },
  ],
  flow: {
    title: 'Request flow',
    steps: [{ label: 'Start', description: 'Begin the request.' }],
  },
  header: {
    description: 'A reusable lesson page.',
    eyebrow: 'Foundations',
    tags: ['Auth'],
    title: 'Authentication Lesson',
  },
  references: [{ href: 'https://example.com', label: 'Example docs' }],
  theory: {
    points: ['Keep checks on the server.'],
    summary: 'A short summary.',
    title: 'Theory section',
  },
} as const satisfies ConceptLessonContent;

describe('ConceptLessonPage', () => {
  it('renders lesson content, flow, code, and references', () => {
    render(<ConceptLessonPage content={content} />);

    expect(
      screen.getByRole('heading', { name: 'Authentication Lesson' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Theory section' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Request flow' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Token example' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Example docs' })).toHaveAttribute(
      'href',
      'https://example.com',
    );
  });
});
