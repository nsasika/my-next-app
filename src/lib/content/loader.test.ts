import { describe, it, expect } from 'vitest';
import {
  getAllArticles,
  getArticle,
  getArticlesByCategory,
  getCategories,
} from './loader';

describe('getAllArticles', () => {
  it('returns all 25 articles', () => {
    const articles = getAllArticles();
    expect(articles).toHaveLength(25);
  });

  it('every article has required fields', () => {
    const articles = getAllArticles();
    for (const a of articles) {
      expect(a.slug).toBeTruthy();
      expect(a.title).toBeTruthy();
      expect(a.category).toBeTruthy();
      expect(a.summary).toBeTruthy();
    }
  });

  it('does not include article body (meta only)', () => {
    const articles = getAllArticles();
    for (const a of articles) {
      expect(a).not.toHaveProperty('body');
    }
  });
});

describe('getArticle', () => {
  it('returns correct article by slug', () => {
    const article = getArticle('what-is-a-deductible');
    expect(article).not.toBeNull();
    expect(article?.title).toBe('What is a deductible');
    expect(article?.category).toBe('coverage');
  });

  it('includes body content', () => {
    const article = getArticle('what-is-a-deductible');
    expect(article?.body.length).toBeGreaterThan(0);
  });

  it('returns null for unknown slug', () => {
    expect(getArticle('does-not-exist')).toBeNull();
  });
});

describe('getArticlesByCategory', () => {
  it('returns only articles in that category', () => {
    const claims = getArticlesByCategory('claims');
    expect(claims.length).toBeGreaterThan(0);
    for (const a of claims) {
      expect(a.category).toBe('claims');
    }
  });

  it('returns empty for unknown category', () => {
    expect(getArticlesByCategory('unknown')).toHaveLength(0);
  });

  it('claims category has 5 articles', () => {
    expect(getArticlesByCategory('claims')).toHaveLength(5);
  });
});

describe('getCategories', () => {
  it('returns 8 distinct categories', () => {
    const cats = getCategories();
    expect(cats).toHaveLength(8);
  });

  it('sorts by article count descending', () => {
    const cats = getCategories();
    for (let i = 0; i < cats.length - 1; i++) {
      expect(cats[i].count).toBeGreaterThanOrEqual(cats[i + 1].count);
    }
  });

  it('counts match actual articles per category', () => {
    const cats = getCategories();
    for (const { category, count } of cats) {
      expect(getArticlesByCategory(category)).toHaveLength(count);
    }
  });
});
