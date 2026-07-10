import { demoAuthUser } from '@/config/demoAuth';
import { createToken } from '@/server/auth/session';
import { setAuthSessionCookie } from '@/server/auth/sessionCookie';
import { rejectCrossOriginMutation } from '@/server/http/security';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const crossOriginResponse = rejectCrossOriginMutation(request);

    if (crossOriginResponse) {
      return crossOriginResponse;
    }

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 },
      );
    }

    if (email !== demoAuthUser.email || password !== demoAuthUser.password) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 },
      );
    }

    // In a real application, you would look up the user in the database and verify the password, then create a token with the user's actual information
    const token = await createToken({
      id: demoAuthUser.id,
      email,
      role: demoAuthUser.role,
    });

    const response = NextResponse.json({
      message: 'Login successful',
      user: {
        id: demoAuthUser.id,
        email,
        role: demoAuthUser.role,
      },
    });

    setAuthSessionCookie(response, token);

    return response;
  } catch (error) {
    console.error('Login route failed:', error);
    return NextResponse.json(
      { message: 'Authentication service is unavailable' },
      { status: 500 },
    );
  }
}
