import type { Locale } from '../config';

export type LearningUiCopy = {
  lessonNavigation: string;
  lessonResults: string;
  loadingResults: string;
  next: string;
  nextQuestion: string;
  previous: string;
  readingPosition: string;
  referenceLinks: string;
  searchClear: string;
  searchClose: string;
  searchEmpty: string;
  searchFiltering: string;
  searchNoResults: string;
  searchPlaceholder: string;
  tapToExpand: string;
  theoryFirst: string;
  tryThis: string;
};

export const LEARNING_UI: Record<Locale, LearningUiCopy> = {
  en: {
    lessonNavigation: 'Lesson navigation',
    lessonResults: 'Lesson results',
    loadingResults: 'Loading lesson results...',
    next: 'Next',
    nextQuestion: 'Next question',
    previous: 'Previous',
    readingPosition: 'Reading {current} of {total}',
    referenceLinks: 'Reference links',
    searchClear: 'Clear lesson search',
    searchClose: 'Close lesson results',
    searchEmpty:
      'Start typing to search by technology, version, hook, state management, Java chapter, or interview topic.',
    searchFiltering: 'Filtering...',
    searchNoResults:
      'No lessons found. Try a broader search such as React, Java, performance, or interview.',
    searchPlaceholder: 'Search lessons',
    tapToExpand: 'Tap to expand',
    theoryFirst: 'Theory first',
    tryThis: 'Try this in the example',
  },
  si: {
    lessonNavigation: 'පාඩම් සංචාලනය',
    lessonResults: 'පාඩම් ප්‍රතිඵල',
    loadingResults: 'පාඩම් ප්‍රතිඵල පූරණය කරමින්...',
    next: 'ඊළඟ',
    nextQuestion: 'ඊළඟ ප්‍රශ්නය',
    previous: 'පෙර',
    readingPosition: '{total}න් {current} වන කොටස',
    referenceLinks: 'යොමු සබැඳි',
    searchClear: 'පාඩම් සෙවුම ඉවත් කරන්න',
    searchClose: 'පාඩම් ප්‍රතිඵල වසන්න',
    searchEmpty:
      'තාක්ෂණය, version එක, hook එක, state management හෝ interview මාතෘකාව අනුව සෙවීමට ටයිප් කරන්න.',
    searchFiltering: 'ප්‍රතිඵල පෙරමින්...',
    searchNoResults:
      'පාඩම් හමු නොවීය. React, Java, performance හෝ interview වැනි පුළුල් වචනයක් භාවිතා කරන්න.',
    searchPlaceholder: 'පාඩම් සොයන්න',
    tapToExpand: 'විවෘත කිරීමට තට්ටු කරන්න',
    theoryFirst: 'පළමුව න්‍යාය',
    tryThis: 'උදාහරණයේ මෙය අත්හදා බලන්න',
  },
  ta: {
    lessonNavigation: 'பாட வழிசெலுத்தல்',
    lessonResults: 'பாட முடிவுகள்',
    loadingResults: 'பாட முடிவுகள் ஏற்றப்படுகின்றன...',
    next: 'அடுத்து',
    nextQuestion: 'அடுத்த கேள்வி',
    previous: 'முந்தையது',
    readingPosition: '{total}-இல் {current}-ஐப் படிக்கிறீர்கள்',
    referenceLinks: 'மேற்கோள் இணைப்புகள்',
    searchClear: 'பாடத் தேடலை அழிக்கவும்',
    searchClose: 'பாட முடிவுகளை மூடவும்',
    searchEmpty:
      'தொழில்நுட்பம், version, hook, state management அல்லது interview தலைப்பின்படி தேட தட்டச்சு செய்யவும்.',
    searchFiltering: 'முடிவுகள் வடிகட்டப்படுகின்றன...',
    searchNoResults:
      'பாடங்கள் கிடைக்கவில்லை. React, Java, performance அல்லது interview போன்ற பொதுவான சொல்லை முயலவும்.',
    searchPlaceholder: 'பாடங்களைத் தேடுங்கள்',
    tapToExpand: 'விரிக்கத் தட்டவும்',
    theoryFirst: 'முதலில் கோட்பாடு',
    tryThis: 'எடுத்துக்காட்டில் முயற்சிக்கவும்',
  },
};

export function formatReadingPosition(
  template: string,
  current: number,
  total: number,
): string {
  return template
    .replace('{current}', String(current))
    .replace('{total}', String(total));
}
