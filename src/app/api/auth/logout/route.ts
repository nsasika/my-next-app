import { NextResponse } from 'next/server';

export async function POST() {
  // Return a success response after clearing the auth cookie.
  const response = NextResponse.json({ message: 'Logout successful' });

  response.cookies.set('access_token', '', {
    httpOnly: true, // Prevent client-side JavaScript from reading the cookie
    secure: process.env.NODE_ENV === 'production', // Send only over HTTPS in production
    sameSite: 'lax', // Helps reduce CSRF while still allowing top-level navigation flows
    path: '/', // Ensure cookie clearing applies to the whole site
    maxAge: 0, // Expire the cookie immediately
  });

  return response;
}
