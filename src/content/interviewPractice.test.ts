import { describe, expect, it } from 'vitest';
import {
  getInterviewExperience,
  interviewExperiences,
} from './interviewPractice';

describe('interviewPractice', () => {
  it('lists the DBS via NCS React Lead interview as the newest experience', () => {
    const experience = interviewExperiences[0];

    expect(experience.slug).toBe('dbs-ncs-react-lead');
    expect(experience.company).toBe('DBS via NCS');
    expect(experience.items).toHaveLength(10);
    expect(experience.items[0].question).toMatch(/Introduce yourself/);
    expect(experience.items.at(-1)?.question).toMatch(/in-app WebView/);
  });

  it('finds every experience by the slug used for static navigation', () => {
    for (const experience of interviewExperiences) {
      expect(getInterviewExperience(experience.slug)).toBe(experience);
    }

    expect(getInterviewExperience('missing-experience')).toBeUndefined();
  });
});
