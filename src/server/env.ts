function requireEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

export const serverEnv = {
  jwtSecret: requireEnv('JWT_SECRET'),
} as const;
