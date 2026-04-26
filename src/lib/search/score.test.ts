import { describe, it, expect } from 'vitest';
import { scoreArticles } from './score';
import type { ArticleMeta } from '@/lib/content/loader';

const articles: ArticleMeta[] = [
  { slug: 'what-is-a-deductible', title: 'What is a deductible', category: 'coverage', summary: 'Plain-language explanation of how deductibles work.', updated: '2026-04-25' },
  { slug: 'how-to-submit-car-accident-claim', title: 'How to submit a car accident claim', category: 'claims', summary: 'Step-by-step process for filing an auto insurance claim.', updated: '2026-04-25' },
  { slug: 'term-vs-whole-life', title: 'Term vs whole life insurance', category: 'life', summary: 'Differences between term and whole life insurance.', updated: '2026-04-25' },
  { slug: 'lost-luggage-coverage', title: 'Lost luggage coverage', category: 'travel', summary: 'How travel insurance covers lost or delayed luggage.', updated: '2026-04-25' },
  { slug: 'claim-processing-timeline', title: 'How long does a claim take to process', category: 'claims', summary: 'Typical timelines for processing different types of claims.', updated: '2026-04-25' },
];

describe('scoreArticles', () => {
  it('returns empty array for empty query', () => {
    expect(scoreArticles(articles, '')).toEqual([]);
    expect(scoreArticles(articles, '   ')).toEqual([]);
  });

  it('returns empty array when no articles match', () => {
    expect(scoreArticles(articles, 'xyz123notaword')).toEqual([]);
  });

  it('matches a single term in the title', () => {
    const results = scoreArticles(articles, 'deductible');
    expect(results).toHaveLength(1);
    expect(results[0].slug).toBe('what-is-a-deductible');
  });

  it('matches a term in the summary', () => {
    const results = scoreArticles(articles, 'luggage');
    expect(results).toHaveLength(1);
    expect(results[0].slug).toBe('lost-luggage-coverage');
  });

  it('matches a term in the category', () => {
    const results = scoreArticles(articles, 'travel');
    expect(results.some((r) => r.slug === 'lost-luggage-coverage')).toBe(true);
  });

  it('ranks higher-scoring articles first', () => {
    // "claim" appears in title + summary + category for how-to-submit, claim-timeline
    // "accident" only in how-to-submit — so it should rank first
    const results = scoreArticles(articles, 'claim accident');
    expect(results[0].slug).toBe('how-to-submit-car-accident-claim');
  });

  it('is case-insensitive', () => {
    expect(scoreArticles(articles, 'DEDUCTIBLE')).toHaveLength(1);
    expect(scoreArticles(articles, 'Claim')).not.toHaveLength(0);
  });

  it('handles multi-word queries', () => {
    const results = scoreArticles(articles, 'life insurance');
    expect(results.some((r) => r.slug === 'term-vs-whole-life')).toBe(true);
  });
});
