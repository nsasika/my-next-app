# Nalin's Academy

## Locale-aware routing

Every page has a canonical language-region locale URL, including `/si-LK`,
`/ta-LK/build-lab`, `/si-LK/login`, and `/en-US/foundations`. US English
(`en-US`) is the default and fallback locale. The URL is the source of truth for
the current request, making localized pages shareable and preserving language
through login, logout, browser history, protected-route redirects, and lesson
paging.

Legacy `/en`, `/si`, and `/ta` bookmarks permanently redirect to their
canonical equivalents while preserving the remaining path and query string.
Legacy cookie values are migrated to `en-US`, `si-LK`, or `ta-LK` during the
same request. Unprefixed page URLs redirect to the locale stored in the
preference cookie, with US English as the final fallback.

The language menu links to `/api/locale?locale=...&redirect=...`. That route
validates the locale and same-origin redirect, sets the cookie, and redirects
in one response. The proxy then derives a trusted request locale from the URL
prefix or cookie, internally rewrites canonical localized URLs to the existing
App Router route files, and passes a trusted locale to server layouts. A locale
in the URL also refreshes a stale preference cookie. Server components select
the dictionary; client components receive only the copy they need.

Relevant files:

- `src/i18n/config.ts`: locale types and pure routing helpers
- `src/app/api/locale/route.ts`: validated cookie + redirect boundary
- `src/proxy.ts`: protected routing and trusted locale request header
- `src/i18n/server.ts`: server-side request locale resolution
- `src/i18n/learning/navigation.ts`: localized sidebar graph and canonical URLs

## Production observability

Vercel Analytics and Speed Insights are mounted in the root layout. A small
client observer also sends sanitized Web Vitals and browser failure categories
to `/api/observability/client-events`, which writes structured Vercel Runtime
Logs. Telemetry intentionally excludes form values, tokens, personal data,
request bodies, and arbitrary stack traces.

Welcome to **Nalin's Academy**, a Next.js application designed to showcase my expertise in modern web development technologies. This project demonstrates my skills in building scalable, maintainable, and user-friendly web applications.

---

## **Objectives**

1. To create a platform for learning and sharing knowledge about **Next.js**, **React**, and other modern web technologies.
2. To demonstrate my **9 years of experience** in software engineering, focusing on building scalable and maintainable solutions.
3. To highlight my work in **Singapore** since **2022**, contributing to impactful projects in the **fintech** and **government** sectors.
4. To showcase my ability to collaborate with teams and deliver innovative solutions.

---

## **Features**

- **Dynamic Sidebar**: A collapsible sidebar with centralized route management for easy navigation.
- **About Me Page**: A detailed page highlighting my professional journey, skills, and LinkedIn profile.
- **React 18 Features**: Demonstrates the use of modern React features like `useTransition` and automatic batching.
- **Responsive Design**: Ensures the application is user-friendly across all devices.
- **Prettier and ESLint Integration**: Enforces consistent code formatting and linting.

---

## **Technologies Used**

- **Frontend**:
  - [Next.js](https://nextjs.org/) (React Framework)
  - [TypeScript](https://www.typescriptlang.org/) (Static Typing)
  - [Tailwind CSS](https://tailwindcss.com/) (Utility-First CSS Framework)
  - [Material-UI](https://mui.com/) (React UI Library)

- **Tooling**:
  - [Prettier](https://prettier.io/) (Code Formatter)
  - [ESLint](https://eslint.org/) (Code Linter)
  - [Vitest](https://vitest.dev/) (Unit Testing and Coverage)

---

## **Getting Started**

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/nsasika/my-next-app.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Enable the shared Git hooks:

   ```bash
   npm run prepare
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## **Code Quality and Pre-Commit Checks**

This project uses a pre-commit hook to reduce avoidable errors before code is committed.

When you run:

```bash
git commit -m "your message"
```

Git automatically runs the pre-commit hook first.

The hook checks:

- Staged whitespace issues
- Sensitive environment files such as `.env` and `.env.local`
- Full ESLint and Prettier checks using `npm run lint`
- TypeScript checks using `npm run type-check`

If all checks pass, the commit is created. If any check fails, the commit is blocked until the issue is fixed.

### **Recommended Local Workflow**

Before committing or pushing changes, run:

```bash
npm run lint:fix
npm run check:local
```

Then commit:

```bash
git add .
git commit -m "your message"
git push
```

### **Useful Commands**

```bash
npm run lint
```

Checks ESLint and Prettier formatting.

```bash
npm run lint:fix
```

Automatically fixes ESLint and Prettier issues where possible.

```bash
npm run type-check
```

Runs TypeScript checks without building the app.

```bash
npm run test
```

Runs the unit tests.

```bash
npm run test:coverage
```

Runs unit tests with coverage. The current coverage gate requires at least 80% statements, branches, functions, and lines for the configured unit-test coverage scope.

```bash
npm run check:local
```

Runs the same checks used by the pre-commit hook.

```bash
npm run ci
```

Runs the same quality gate configured for Vercel: lint, type-check, coverage, and production build.

```bash
npm run build
```

Creates a production build and catches build-time issues.

---

## **Vercel Quality Gate**

Vercel does not require a separate custom pipeline for this project. The repository includes `vercel.json`, which tells Vercel to run:

```bash
npm run ci
```

That command runs:

1. `npm run lint`
2. `npm run type-check`
3. `npm run test:coverage`
4. `next build`

If any step fails, the Vercel deployment fails. This is how the project maintains a minimum unit-test coverage standard without a separate CI pipeline.

The current coverage threshold is configured in `vitest.config.ts`:

- Statements: 80%
- Branches: 80%
- Functions: 80%
- Lines: 80%

As more of the application becomes unit-tested, expand the coverage scope in `vitest.config.ts` so the 80% target covers more of the codebase.

---

## **Environment Configuration**

Real environment files are intentionally ignored by Git. Use the committed templates as references:

- `.env.example`
- `.env.development.example`
- `.env.production.example`

For local development, create `.env.local` and set:

```bash
JWT_SECRET=replace-with-at-least-32-characters
NEXT_PUBLIC_JSON_PLACEHOLDER_BASE_URL=https://jsonplaceholder.typicode.com
```

For Vercel production, store the same values in Vercel Environment Variables rather than committing them.

Global app constants live in `src/config/app.ts`, API route/base URL constants live in `src/config/api.ts`, and auth cookie/session constants live in `src/config/auth.ts`.

---

## **SonarQube Cloud**

Because this app is hosted on Vercel, the recommended setup is SonarQube Cloud through GitHub Actions. Vercel should keep handling deployment; Sonar should run as a repository quality/security scan in CI.

This repo includes:

- `sonar-project.properties`
- `.github/workflows/sonarqube.yml`
- LCOV coverage output from `npm run test:coverage`

### SonarQube TODO

1. Create or import the GitHub project in SonarQube Cloud.
2. Confirm `sonar.projectKey` in `sonar-project.properties` matches the project key shown by SonarQube Cloud.
3. Confirm `sonar.organization` in `sonar-project.properties` matches the SonarQube Cloud organization key.
4. Generate a Sonar token from SonarQube Cloud.
5. Add the token to GitHub as a repository secret named `SONAR_TOKEN`.
6. Push to `development` or open a pull request.
7. Open the GitHub Actions run named `SonarQube` and confirm the scan completes.
8. In SonarQube Cloud, review the Quality Gate, coverage import, security hotspots, code smells, duplication, and maintainability issues.
9. If the Quality Gate is too loose or strict, adjust it inside SonarQube Cloud rather than hard-coding quality decisions in the app.
10. Keep Vercel deployment separate: Vercel deploys the app, GitHub Actions runs SonarQube analysis.

SonarQube Server is the self-hosted option. For this project, SonarQube Cloud is simpler because the repo already uses GitHub and Vercel, and there is no need to maintain a separate Sonar server.
