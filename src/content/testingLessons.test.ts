import { describe, expect, it } from 'vitest';
import { foundationLessons } from './foundations';
import { javaBackendTesting } from './java/testing';

describe('testing foundation lessons', () => {
  it('covers the frontend testing layers and examples', () => {
    expect(foundationLessons.frontendTesting.theory.points.join(' ')).toMatch(
      /Unit tests.*Integration tests.*End-to-end/,
    );
    expect(foundationLessons.frontendTesting.codeExamples).toHaveLength(2);
  });

  it('covers Java unit, integration, contract, and operational tests', () => {
    const points = javaBackendTesting.theory.points.join(' ');

    expect(points).toMatch(/Unit tests/);
    expect(points).toMatch(/Integration tests/);
    expect(points).toMatch(/Contract tests/);
    expect(points).toMatch(/load and resilience tests/);
  });
});
