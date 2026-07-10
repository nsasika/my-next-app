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
    oauthDividerLabel: 'or continue with',
    oauthTitle: 'Federated login options',
    oauthDescription:
      'These buttons are ready UI placeholders. The next production step is wiring provider callbacks, PKCE, state validation, and app session creation.',
    oauthTodoLabel: 'TODO',
    oauthProviders: [
      { id: 'google', label: 'Continue with Google' },
      { id: 'apple', label: 'Continue with Apple' },
      { id: 'linkedin', label: 'Continue with LinkedIn' },
    ],
  },
} as const;
