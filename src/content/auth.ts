export const authContent = {
  login: {
    eyebrow: 'Authentication demo',
    title: 'Login to Nalin’s Academy',
    description:
      'This learning app currently uses a dummy banking user, a signed JWT, and an HTTP-only cookie to protect the practical examples.',
    backLinkLabel: 'Back to public site',
    credentialsTitle: 'Use these demo credentials',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    loginButtonLabel: 'Login',
    currentStrategyTitle: 'Current authentication flow',
    currentStrategyPoints: [
      'The login form posts dummy credentials to /api/auth/login.',
      'The API route signs a JWT with jose when the credentials match.',
      'The JWT is stored in an HTTP-only access_token cookie for 8 hours.',
      'Next.js proxy checks that cookie before allowing protected learning routes.',
    ],
    oauthTitle: 'OAuth2 providers planned',
    oauthDescription:
      'These buttons are mock UI only for now. The next production-style step is OAuth2 sign-in using Google/Gmail, Apple, and LinkedIn.',
    oauthTodoLabel: 'TODO',
    oauthProviders: [
      { id: 'google', label: 'Continue with Google / Gmail' },
      { id: 'apple', label: 'Continue with Apple' },
      { id: 'linkedin', label: 'Continue with LinkedIn' },
    ],
  },
  strategy: {
    header: {
      description:
        'A walkthrough of the authentication strategy currently used by this app, with real code excerpts from the implementation.',
      eyebrow: 'Authentication',
      tags: ['JWT', 'HTTP-only Cookie', 'Next.js Proxy', 'Demo Auth'],
      title: 'Application Authentication Strategy',
    },
    overviewTitle: 'How login works today',
    overviewPoints: [
      'A demo banking user signs in with fixed credentials.',
      'The login route validates the demo credentials and creates a short-lived JWT.',
      'The JWT is stored in an HTTP-only cookie, so browser JavaScript cannot read it.',
      'The root layout reads the cookie to decide whether to show authenticated navigation.',
      'The Next.js proxy verifies the cookie before protected routes load.',
      'Logout clears the cookie by expiring access_token.',
    ],
    importantNoteTitle: 'Important learning note',
    importantNote:
      'This is intentionally not a production identity system yet. It is a teaching implementation for cookies, JWTs, route protection, and auth-aware layouts. OAuth2 with Google/Gmail, Apple, and LinkedIn is planned next.',
    codeExamplesTitle: 'Real implementation excerpts',
    codeExamples: [
      {
        title: 'Demo login route',
        filePath: 'src/app/api/auth/login/route.ts',
        language: 'ts',
        code: `if (email !== demoAuthUser.email || password !== demoAuthUser.password) {
  return NextResponse.json(
    { message: 'Invalid credentials' },
    { status: 401 },
  );
}

const token = await createToken({
  id: demoAuthUser.id,
  email,
  role: demoAuthUser.role,
});

response.cookies.set('access_token', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/',
  maxAge: 60 * 60 * 8,
});`,
      },
      {
        title: 'JWT creation and verification',
        filePath: 'src/server/auth/session.ts',
        language: 'ts',
        code: `export async function createToken(user: AuthUser) {
  const secret = getJwtSecret();

  return new SignJWT(user)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('28800s')
    .sign(secret);
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, secret);
  return {
    id: payload.id as string,
    email: payload.email as string,
    role: payload.role as UserRole,
  };
}`,
      },
      {
        title: 'Protected route proxy',
        filePath: 'src/proxy.ts',
        language: 'ts',
        code: `const token = request.cookies.get('access_token')?.value;
const verifiedUser = token ? await verifyToken(token) : null;
const isAuthenticated = Boolean(verifiedUser);

if (!isAuthenticated && !isPublicRoute) {
  const response = NextResponse.redirect(new URL('/login', request.url));

  if (token) {
    response.cookies.delete('access_token');
  }

  return response;
}`,
      },
      {
        title: 'Logout cookie clearing',
        filePath: 'src/app/api/auth/logout/route.ts',
        language: 'ts',
        code: `response.cookies.set('access_token', '', {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/',
  maxAge: 0,
});`,
      },
    ],
  },
} as const;
