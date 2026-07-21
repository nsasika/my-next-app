import { API_ROUTES } from '@/config/api';
import { AUTH_COOKIE_NAME, AUTH_SESSION_MAX_AGE_SECONDS } from '@/config/auth';
import { APP_PATHS } from '@/config/routes';
import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';

export const foundationLessons = {
  currentAuthenticationFlow: {
    header: {
      description:
        'How this academy currently protects learning routes using a demo credential check, a signed JWT, an HTTP-only cookie, and a Next.js proxy.',
      eyebrow: 'Foundations / Authentication',
      tags: ['Authentication', 'JWT', 'HTTP-only Cookie', 'Next.js Proxy'],
      title: 'Current Authentication Flow',
    },
    theory: {
      title: 'Authentication answers who the user is',
      summary:
        'This implementation is intentionally simple for learning: it proves identity with demo credentials, creates a signed session token, and lets the server decide whether protected routes may load.',
      points: [
        'The browser submits credentials to the login API route.',
        'The server validates the demo user and signs a short-lived JWT.',
        `The JWT is stored in the ${AUTH_COOKIE_NAME} cookie with HTTP-only protection.`,
        'Next.js proxy checks the cookie before rendering protected learning pages.',
        'Logout expires the cookie so future protected navigation returns to login.',
      ],
      code: `identity -> signed session -> server-checked route access`,
      whatToTry: [
        'Log in, refresh a protected page, then log out and try that page again.',
        'Open browser dev tools and notice JavaScript cannot read the HTTP-only cookie.',
      ],
    },
    flow: {
      title: 'Current login sequence',
      steps: [
        {
          label: 'Submit credentials',
          description: `The login form posts email and password to ${API_ROUTES.auth.login}.`,
        },
        {
          label: 'Create token',
          description:
            'The route handler signs a JWT only when the demo user matches.',
        },
        {
          label: 'Set cookie',
          description: `The token is saved for ${AUTH_SESSION_MAX_AGE_SECONDS / 3600} hours in an HTTP-only cookie.`,
        },
        {
          label: 'Protect routes',
          description:
            'The proxy verifies the cookie before protected lesson routes load.',
        },
      ],
    },
    codeExamples: [
      {
        title: 'Demo login route',
        filePath: 'src/app/api/auth/login/route.ts',
        language: 'ts',
        code: `const token = await createToken({
  id: demoAuthUser.id,
  email,
  role: demoAuthUser.role,
});

response.cookies.set(AUTH_COOKIE_NAME, token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/',
  maxAge: AUTH_SESSION_MAX_AGE_SECONDS,
});`,
      },
      {
        title: 'Protected route proxy',
        filePath: 'src/proxy.ts',
        language: 'ts',
        code: `const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
const verifiedUser = token ? await verifyToken(token) : null;

if (!verifiedUser && !isPublicRoute) {
  const loginUrl = new URL(APP_PATHS.login, request.url);
  loginUrl.searchParams.set('next', pathname);
  return NextResponse.redirect(loginUrl);
}`,
      },
    ],
    references: [
      {
        href: 'https://nextjs.org/docs/app/guides/authentication',
        label: 'Next.js authentication guide',
      },
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies',
        label: 'MDN HTTP cookies',
      },
      {
        href: 'https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html',
        label: 'OWASP session management',
      },
    ],
  },
  oauth2Authorization: {
    header: {
      description:
        'OAuth 2.0 is primarily an authorization framework. OpenID Connect adds the identity layer commonly used when users click Continue with Google, Apple, or LinkedIn.',
      eyebrow: 'Foundations / Authorization',
      tags: ['OAuth 2.0', 'OIDC', 'Authorization Code', 'PKCE'],
      title: 'OAuth 2.0 and OpenID Connect',
    },
    theory: {
      title: 'OAuth authorizes access; OIDC authenticates users',
      summary:
        'OAuth lets a user grant one application limited access to another system without sharing their password. For login, modern apps usually use OpenID Connect on top of OAuth to receive an ID token that proves the user identity.',
      points: [
        'Authentication: who are you?',
        'Authorization: what are you allowed to access?',
        'OAuth 2.0 issues access tokens for delegated access to resources.',
        'OpenID Connect adds ID tokens and user identity claims for login.',
        'For browser apps, Authorization Code with PKCE is the recommended modern flow.',
      ],
      code: `OAuth 2.0: delegated access
OpenID Connect: login identity on top of OAuth`,
      whatToTry: [
        'When you see Continue with Google, think OIDC login plus OAuth consent.',
        'When you see scopes like profile or email, think limited authorization.',
      ],
    },
    flow: {
      title: 'Authorization Code with PKCE mental model',
      steps: [
        {
          label: 'Start login',
          description:
            'The app redirects the user to a trusted identity provider.',
        },
        {
          label: 'User consents',
          description:
            'The provider authenticates the user and asks for requested scopes.',
        },
        {
          label: 'Receive code',
          description:
            'The provider redirects back with a short-lived authorization code.',
        },
        {
          label: 'Exchange tokens',
          description:
            'The server exchanges the code for tokens and creates an app session.',
        },
      ],
    },
    codeExamples: [
      {
        title: 'Provider callback shape',
        filePath: 'app/api/auth/callback/[provider]/route.ts',
        language: 'ts',
        code: `export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');
  const state = request.nextUrl.searchParams.get('state');

  assertValidState(state);
  const tokens = await exchangeCodeForTokens(code);
  const profile = await verifyIdToken(tokens.id_token);

  return createApplicationSession(profile);
}`,
      },
    ],
    references: [
      { href: 'https://oauth.net/2/', label: 'OAuth 2.0 overview' },
      {
        href: 'https://www.rfc-editor.org/rfc/rfc6749',
        label: 'RFC 6749 OAuth 2.0',
      },
      {
        href: 'https://openid.net/developers/how-connect-works/',
        label: 'OpenID Connect flow',
      },
      {
        href: 'https://developers.google.com/identity/protocols/oauth2',
        label: 'Google OAuth 2.0',
      },
      {
        href: 'https://developer.apple.com/sign-in-with-apple/',
        label: 'Sign in with Apple',
      },
      {
        href: 'https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow',
        label: 'LinkedIn authorization code flow',
      },
    ],
  },
} as const satisfies Record<string, ConceptLessonContent>;

export const legacyAuthStrategyRedirectPath =
  APP_PATHS.currentAuthenticationFlow;
