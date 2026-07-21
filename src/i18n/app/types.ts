export type AppCopy = {
  auth: {
    backLinkLabel: string;
    checkingLabel: string;
    connectionError: string;
    credentialsHint: string;
    credentialsTitle: string;
    description: string;
    emailLabel: string;
    eyebrow: string;
    loginButtonLabel: string;
    loginFailureLabel: string;
    loginSuccessLabel: string;
    oauthDescription: string;
    oauthDividerLabel: string;
    oauthProviders: readonly {
      id: 'google' | 'apple' | 'linkedin';
      label: string;
    }[];
    oauthTodoLabel: string;
    passwordLabel: string;
    publicSiteLabel: string;
    redirectingLabel: string;
    title: string;
  };
  buildLab: {
    deliveryModelLabel: string;
    eyebrow: string;
    flow: readonly { body: string; title: string }[];
    heading: string;
    heroBody: string;
    labels: Readonly<Record<string, string>>;
    releaseEyebrow: string;
    releaseTitle: string;
    stackEyebrow: string;
    stackUsageBody: string;
    stackTitle: string;
  };
  shell: {
    closeNavigation: string;
    deleteAccount: string;
    editProfile: string;
    learningAccount: string;
    learningMap: string;
    learningMapBody: string;
    learningWorkspace: string;
    lessonPromise: string;
    logout: string;
    openNavigation: string;
    openUserProfile: string;
    soon: string;
    subscribeServices: string;
  };
  sidebarLabels: Readonly<Record<string, string>>;
};
