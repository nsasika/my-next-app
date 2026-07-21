import { chromium } from 'playwright';

const baseUrl = process.env.RESPONSIVE_QA_BASE_URL ?? 'http://localhost:3000';
const viewports = [
  { height: 900, name: 'desktop', width: 1440 },
  { height: 844, name: 'mobile', width: 390 },
];

const localeScenarios = [
  {
    buildLabHeading: 'ගොඩනැගීමේ පරීක්ෂණාගාරය',
    homeHeading: 'තාක්ෂණික දැනුම සම්මුඛ පරීක්ෂණ විශ්වාසය',
    interviewGroup: 'සම්මුඛ පරීක්ෂණ',
    authenticationTitle: 'වත්මන් සත්‍යාපන ප්‍රවාහය',
    frontendTestingTitle: 'Frontend යෙදුම් පරීක්ෂණ',
    javaChapterTitle: 'Chapter 1: මූලික programming ව්‍යුහ',
    oauthTitle: 'OAuth 2.0 සහ OpenID Connect',
    nextjsTitle: 'Next.js හැඳින්වීම',
    bankInterviewTitle: 'Bank of Singapore සම්මුඛ පරීක්ෂණ අත්දැකීම',
    locale: 'si',
    targetQuestions: 'ඉලක්කගත සම්මුඛ පරීක්ෂණ ප්‍රශ්න',
    targetTitle: 'ප්‍රධාන Micro Frontend සම්මුඛ පරීක්ෂණ ප්‍රශ්න 10',
  },
  {
    buildLabHeading: 'உருவாக்க ஆய்வகம்',
    homeHeading: 'தொழில்நுட்ப அறிவை நேர்முகத் தேர்வு தன்னம்பிக்கையாக',
    interviewGroup: 'நேர்காணல்கள்',
    authenticationTitle: 'தற்போதைய அங்கீகார ஓட்டம்',
    frontendTestingTitle: 'Frontend செயலி சோதனை',
    javaChapterTitle: 'Chapter 1: அடிப்படை programming கட்டமைப்புகள்',
    oauthTitle: 'OAuth 2.0 மற்றும் OpenID Connect',
    nextjsTitle: 'Next.js அறிமுகம்',
    bankInterviewTitle: 'Bank of Singapore நேர்காணல் அனுபவம்',
    locale: 'ta',
    targetQuestions: 'இலக்கு நேர்காணல் கேள்விகள்',
    targetTitle: 'முக்கிய 10 Micro Frontend நேர்காணல் கேள்விகள்',
  },
];

function hasHorizontalOverflow(page) {
  return page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 2,
  );
}

const browser = await chromium.launch({ headless: true });
const results = [];

for (const viewport of viewports) {
  const context = await browser.newContext({
    isMobile: viewport.name === 'mobile',
    viewport,
  });
  const page = await context.newPage();
  const browserErrors = [];

  page.on('pageerror', (error) => browserErrors.push(error.message));

  for (const scenario of localeScenarios) {
    await page.goto(`${baseUrl}/${scenario.locale}`, {
      waitUntil: 'domcontentloaded',
    });
    const homeLocalized = await page
      .getByRole('heading', { name: new RegExp(scenario.homeHeading) })
      .isVisible()
      .catch(() => false);

    // Use the same server-handled URL as the language menu. It sets the locale
    // cookie and preserves Build Lab's stable, unprefixed route.
    await page.goto(
      `${baseUrl}/api/locale?locale=${scenario.locale}&redirect=%2Fbuild-lab`,
      { waitUntil: 'domcontentloaded' },
    );
    const buildLabLocalized = await page
      .getByRole('heading', { name: scenario.buildLabHeading })
      .isVisible()
      .catch(() => false);

    await page.goto(`${baseUrl}/login`, { waitUntil: 'domcontentloaded' });
    await page.locator('input[type="email"]').fill('analyst@aurorabank.test');
    await page.locator('input[type="password"]').fill('BankDemo@123');
    await page.locator('form button[type="submit"]').click();
    await page.waitForURL(/authentication\/current-flow/, { timeout: 5_000 });
    const authenticationLocalized = await page
      .getByRole('heading', { name: scenario.authenticationTitle })
      .isVisible()
      .catch(() => false);

    const localizedLessonChecks = {};
    for (const [checkName, path, title] of [
      ['oauthLocalized', 'authorization/oauth2', scenario.oauthTitle],
      [
        'frontendTestingLocalized',
        'foundations/frontend-testing',
        scenario.frontendTestingTitle,
      ],
      ['javaLocalized', 'java/chapter-1', scenario.javaChapterTitle],
      ['nextjsLocalized', 'nextjs/intro', scenario.nextjsTitle],
      [
        'bankInterviewLocalized',
        'interview-practice/bank-of-singapore',
        scenario.bankInterviewTitle,
      ],
    ]) {
      await page.goto(`${baseUrl}/${scenario.locale}/${path}`, {
        waitUntil: 'domcontentloaded',
      });
      localizedLessonChecks[checkName] = await page
        .getByRole('heading', { name: title })
        .isVisible()
        .catch(() => false);
      localizedLessonChecks[`${checkName}Overflow`] =
        await hasHorizontalOverflow(page);
    }

    await page.goto(`${baseUrl}/interviews`, {
      waitUntil: 'domcontentloaded',
    });

    if (viewport.name === 'mobile') {
      await page
        .getByRole('button', { name: /මෙනුව විවෘත කරන්න|வழிசெலுத்தலைத் திற/ })
        .click();
    }

    const interviewGroupLocalized = await page
      .getByRole('button', { name: scenario.interviewGroup })
      .first()
      .isVisible()
      .catch(() => false);
    const targetQuestionsLocalized = await page
      .getByRole('button', { name: scenario.targetQuestions })
      .isVisible()
      .catch(() => false);

    await page.goto(`${baseUrl}/interview-practice/mfe-top-10`, {
      waitUntil: 'domcontentloaded',
    });
    const targetPageLocalized = await page
      .getByRole('heading', { name: scenario.targetTitle })
      .isVisible()
      .catch(() => false);

    results.push({
      browserErrors: [...browserErrors],
      authenticationLocalized,
      buildLabLocalized,
      homeLocalized,
      horizontalOverflow: await hasHorizontalOverflow(page),
      interviewGroupLocalized,
      locale: scenario.locale,
      ...localizedLessonChecks,
      targetQuestionsLocalized,
      targetPageLocalized,
      viewport: viewport.name,
    });
    browserErrors.length = 0;

    await context.clearCookies();
  }

  await context.close();
}

await browser.close();

const issues = results.filter(
  (result) =>
    result.browserErrors.length > 0 ||
    !result.buildLabLocalized ||
    !result.authenticationLocalized ||
    !result.oauthLocalized ||
    !result.frontendTestingLocalized ||
    !result.javaLocalized ||
    !result.nextjsLocalized ||
    !result.bankInterviewLocalized ||
    result.oauthLocalizedOverflow ||
    result.frontendTestingLocalizedOverflow ||
    result.javaLocalizedOverflow ||
    result.nextjsLocalizedOverflow ||
    result.bankInterviewLocalizedOverflow ||
    !result.homeLocalized ||
    result.horizontalOverflow ||
    !result.interviewGroupLocalized ||
    !result.targetQuestionsLocalized ||
    !result.targetPageLocalized,
);

console.log(
  JSON.stringify({ issueCount: issues.length, issues, results }, null, 2),
);
process.exitCode = issues.length === 0 ? 0 : 1;
