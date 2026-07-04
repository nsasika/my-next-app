import { chromium } from 'playwright';

const baseUrl = process.env.RESPONSIVE_QA_BASE_URL ?? 'http://localhost:3000';
const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];
const publicRoutes = [
  '/',
  '/about',
  '/engineering-blueprint',
  '/interview-questions',
  '/login',
];
const protectedRoutes = [
  '/react',
  '/java',
  '/java/book',
  '/java/chapter-1',
  '/java/chapter-2',
  '/nextjs',
  '/angular',
  '/interviews',
  '/interview-practice',
  '/authentication-strategy',
  '/counter-slice',
  '/csr',
  '/custom-hooks',
  '/performance-guide',
  '/performance',
  '/practice/debounce',
  '/practice/take-every',
  '/practice/take-latest',
  '/react-memo',
  '/react18',
  '/react18/batching',
  '/react18/deferred-value',
  '/react18/external-store',
  '/react18/id',
  '/react18/transitions',
  '/react19',
  '/react19/action-state',
  '/react19/optimistic',
  '/react19/use',
  '/redux-saga',
  '/redux-thunk',
  '/rtk-query',
  '/ssr',
  '/use-callback',
  '/use-memo',
  '/use-ref',
  '/zustand',
  '/java-examples',
  '/java-examples/chapter-1',
  '/java-examples/chapter-2',
];

async function collectPageMetrics(page, route, viewportName) {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(350);
  return page.evaluate(
    ({ route, viewportName }) => {
      const doc = document.documentElement;
      const body = document.body;
      const overlay = Boolean(
        document.querySelector(
          '[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay',
        ),
      );
      const bodyText = body.innerText.trim();
      const viewportWidth = window.innerWidth;
      const overflowers = Array.from(document.querySelectorAll('body *'))
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            className:
              typeof el.className === 'string'
                ? el.className.slice(0, 120)
                : '',
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            tag: el.tagName.toLowerCase(),
            text: (el.textContent || '')
              .trim()
              .replace(/\s+/g, ' ')
              .slice(0, 80),
            width: Math.round(rect.width),
          };
        })
        .filter(
          (item) =>
            item.width > 0 &&
            (item.right > viewportWidth + 2 || item.left < -2),
        )
        .slice(0, 6);

      return {
        clientWidth: doc.clientWidth,
        hasContent: bodyText.length > 40,
        hasOverlay: overlay,
        horizontalOverflow:
          Math.max(doc.scrollWidth, body.scrollWidth) > doc.clientWidth + 2,
        overflowers,
        route,
        scrollWidth: Math.max(doc.scrollWidth, body.scrollWidth),
        textLength: bodyText.length,
        title: document.title,
        urlPath: location.pathname,
        viewport: viewportName,
      };
    },
    { route, viewportName },
  );
}

const browser = await chromium.launch({ headless: true });
const results = [];

for (const viewport of viewports) {
  const context = await browser.newContext({
    deviceScaleFactor: viewport.name === 'mobile' ? 2 : 1,
    isMobile: viewport.name === 'mobile',
    viewport,
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (error) => pageErrors.push(error.message));
  const emailInput = page.locator('input[type="email"]');
  const passwordInput = page.locator('input[type="password"]');

  await page.goto(`${baseUrl}/login`, { waitUntil: 'domcontentloaded' });
  await emailInput.fill('wrong@example.com');
  await passwordInput.fill('WrongPass123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page
    .getByText(/To test failure/i)
    .waitFor({ timeout: 5000 })
    .catch(() => {});
  const failureBannerVisible = await page
    .getByText(/To test failure/i)
    .isVisible()
    .catch(() => false);
  const failureStillOnLogin = page.url().includes('/login');
  await page.waitForFunction(
    () => {
      const input = document.querySelector('input[type="email"]');
      return input instanceof HTMLInputElement && !input.disabled;
    },
    null,
    { timeout: 5000 },
  );

  await emailInput.fill('analyst@aurorabank.test');
  await passwordInput.fill('BankDemo@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page
    .getByText(/Redirecting to the learning workspace/i)
    .waitFor({ timeout: 1000 })
    .catch(() => {});
  const successBannerVisible = await page
    .getByText(/Redirecting to the learning workspace/i)
    .isVisible()
    .catch(() => false);
  await page
    .waitForURL(/authentication-strategy/, { timeout: 5000 })
    .catch(() => {});
  const loginSuccessPath = new URL(page.url()).pathname;

  results.push({
    consoleErrors: consoleErrors.slice(),
    failureBannerVisible,
    failureStillOnLogin,
    loginSuccessPath,
    pageErrors: pageErrors.slice(),
    route: '/login interaction',
    successBannerVisible,
    viewport: viewport.name,
  });

  for (const route of [
    ...publicRoutes.filter((item) => item !== '/login'),
    ...protectedRoutes,
  ]) {
    consoleErrors.length = 0;
    pageErrors.length = 0;
    await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' });
    const metrics = await collectPageMetrics(page, route, viewport.name);
    metrics.consoleErrors = consoleErrors.slice(0, 5);
    metrics.pageErrors = pageErrors.slice(0, 5);
    results.push(metrics);
  }

  if (viewport.name !== 'desktop') {
    consoleErrors.length = 0;
    pageErrors.length = 0;
    await page.goto(`${baseUrl}/react`, { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await page.waitForTimeout(250);
    const navReactVisible = await page
      .getByRole('link', { name: /React/ })
      .first()
      .isVisible()
      .catch(() => false);
    const navJavaVisible = await page
      .getByRole('link', { name: /Java/ })
      .first()
      .isVisible()
      .catch(() => false);
    results.push({
      consoleErrors: consoleErrors.slice(),
      navJavaVisible,
      navReactVisible,
      pageErrors: pageErrors.slice(),
      route: '/react mobile nav',
      viewport: viewport.name,
    });
  }

  await context.close();
}

await browser.close();

const issues = results.filter(
  (item) =>
    item.hasOverlay ||
    item.horizontalOverflow ||
    item.hasContent === false ||
    (item.consoleErrors &&
      item.consoleErrors.filter(
        (error) => !error.includes('401 (Unauthorized)'),
      ).length > 0) ||
    (item.pageErrors && item.pageErrors.length > 0) ||
    item.failureBannerVisible === false ||
    item.failureStillOnLogin === false ||
    item.successBannerVisible === false ||
    (item.route === '/react mobile nav' &&
      (!item.navReactVisible || !item.navJavaVisible)),
);

console.log(
  JSON.stringify(
    {
      issueCount: issues.length,
      issues: issues.map((issue) => ({
        ...issue,
        overflowers: issue.overflowers?.slice(0, 3),
      })),
      totalChecks: results.length,
      viewports,
    },
    null,
    2,
  ),
);

process.exitCode = issues.length > 0 ? 1 : 0;
