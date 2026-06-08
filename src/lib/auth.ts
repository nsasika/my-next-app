import { SignJWT, jwtVerify } from 'jose';

function getJwtSecret() {
  const rawSecret = process.env.JWT_SECRET;

  if (!rawSecret) {
    throw new Error('JWT_SECRET is not configured.');
  }

  const secret = new TextEncoder().encode(rawSecret);
  if (secret.length < 32) {
    throw new Error('JWT_SECRET must be at least 32 characters for HS256.');
  }

  return secret;
}

export type UserRole = 'ADMIN' | 'DOCTOR' | 'PATIENT' | 'NURSE';

export type AuthUser = {
  id: string;
  email: string;
  role: UserRole;
};

export async function createToken(user: AuthUser) {
  const secret = getJwtSecret();

  return new SignJWT(user)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('15m')
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const secret = getJwtSecret();

    // Verifies token signature and expiration using the shared secret.
    const { payload } = await jwtVerify(token, secret);

    // Return only the user fields this app expects from the JWT payload.
    return {
        id: payload.id as string,
        email: payload.email as string,
        role: payload.role as UserRole,
    };
  } catch (error) {
    // Any invalid/expired token results in a null auth user.
    console.error('Token verification failed:', error);
    return null;
  }
}
