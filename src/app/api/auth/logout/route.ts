import { clearAuthSessionCookie } from '@/server/auth/sessionCookie';
import { rejectCrossOriginMutation } from '@/server/http/security';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const crossOriginResponse = rejectCrossOriginMutation(request);

  if (crossOriginResponse) {
    return crossOriginResponse;
  }

  // Return a success response after clearing the auth cookie.
  const response = NextResponse.json({ message: 'Logout successful' });

  clearAuthSessionCookie(response);

  return response;
}
