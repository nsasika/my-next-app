import { dummyAuthUser } from '@/content/auth';
import { createToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 },
      );
    }

    if (email !== dummyAuthUser.email || password !== dummyAuthUser.password) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 },
      );
    }

    // In a real application, you would look up the user in the database and verify the password, then create a token with the user's actual information
    const token = await createToken({
      id: dummyAuthUser.id,
      email,
      role: dummyAuthUser.role,
    });

    const response = NextResponse.json({
      message: 'Login successful',
      user: {
        id: dummyAuthUser.id,
        email,
        role: dummyAuthUser.role,
      },
    });

    // Set the token in an HTTP-only cookie
    response.cookies.set('access_token', token, {
      httpOnly: true, // Prevent client-side JavaScript from reading the cookie
      secure: process.env.NODE_ENV === 'production', // Send only over HTTPS in production
      sameSite: 'strict', // Reduce CSRF risk by blocking cross-site cookie sending
      path: '/',
      maxAge: 60 * 15, // 15 minutes
    });

    return response;
  } catch (error) {
    console.error('Login route failed:', error);
    return NextResponse.json(
      { message: 'Authentication service is unavailable' },
      { status: 500 },
    );
  }
}
