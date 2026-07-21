import { NextResponse } from 'next/server';
import { isClientTelemetryEvent } from '@/observability/clientEvents';

const MAX_EVENT_BYTES = 2_048;

/**
 * Converts browser telemetry into structured Vercel Runtime Logs. The endpoint
 * deliberately accepts only a small allow-listed schema so form data, tokens,
 * stack traces, and other sensitive browser state are never logged.
 */
export async function POST(request: Request) {
  const rawEvent = await request.text();

  if (new TextEncoder().encode(rawEvent).length > MAX_EVENT_BYTES) {
    return NextResponse.json(
      { message: 'Event is too large.' },
      { status: 413 },
    );
  }

  let event: unknown;

  try {
    event = JSON.parse(rawEvent);
  } catch {
    return NextResponse.json({ message: 'Invalid JSON.' }, { status: 400 });
  }

  if (!isClientTelemetryEvent(event)) {
    return NextResponse.json({ message: 'Invalid event.' }, { status: 400 });
  }

  const logEntry = {
    ...event,
    level: event.eventType === 'browser-error' ? 'error' : 'info',
    message: 'client_telemetry',
    release: process.env.VERCEL_GIT_COMMIT_SHA ?? 'local',
    requestId: request.headers.get('x-vercel-id') ?? 'local',
    timestamp: new Date().toISOString(),
  };

  if (event.eventType === 'browser-error') {
    console.error(JSON.stringify(logEntry));
  } else {
    console.info(JSON.stringify(logEntry));
  }

  return new NextResponse(null, { status: 204 });
}
