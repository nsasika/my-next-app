import { NextResponse } from 'next/server';

function getHeaderOrigin(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

export function rejectCrossOriginMutation(request: Request) {
  const requestOrigin = new URL(request.url).origin;
  const origin = getHeaderOrigin(request.headers.get('origin'));
  const referer = getHeaderOrigin(request.headers.get('referer'));
  const callerOrigin = origin ?? referer;

  if (callerOrigin === requestOrigin) {
    return null;
  }

  return NextResponse.json(
    { message: 'Cross-origin request rejected' },
    { status: 403 },
  );
}
