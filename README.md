# Nalin's Academy

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
