import type { LessonSearchResult } from './SearchResults';

export type SearchableLesson = LessonSearchResult & {
  searchText: string;
};

export const normalizeSearchValue = (value: string) =>
  value.trim().toLowerCase();

const getQueryTerms = (query: string) =>
  normalizeSearchValue(query)
    .split(/\s+/)
    .filter((term) => term.length >= 2);

const includesEveryTerm = (value: string, terms: readonly string[]) =>
  terms.every((term) => value.includes(term));

export const getMatchScore = (lesson: SearchableLesson, query: string) => {
  const terms = getQueryTerms(query);

  if (terms.length === 0) {
    return 0;
  }

  const label = normalizeSearchValue(lesson.label);
  const section = normalizeSearchValue(lesson.section);
  const technology = normalizeSearchValue(lesson.technology);
  const searchText = normalizeSearchValue(lesson.searchText);

  if (!includesEveryTerm(searchText, terms)) {
    return 0;
  }

  if (label === terms.join(' ')) {
    return 120;
  }

  if (label.startsWith(terms.join(' '))) {
    return 105;
  }

  if (includesEveryTerm(label, terms)) {
    return 95;
  }

  if (includesEveryTerm(section, terms)) {
    return 80;
  }

  if (includesEveryTerm(technology, terms)) {
    return 65;
  }

  return 30;
};

export function searchLessons(
  lessons: readonly SearchableLesson[],
  query: string,
  limit = 8,
) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    return [];
  }

  return lessons
    .map((lesson) => ({
      lesson,
      score: getMatchScore(lesson, normalizedQuery),
    }))
    .filter(({ score }) => score > 0)
    .sort((first, second) => {
      if (second.score !== first.score) {
        return second.score - first.score;
      }

      return first.lesson.label.localeCompare(second.lesson.label);
    })
    .map(({ lesson }) => lesson)
    .slice(0, limit);
}
