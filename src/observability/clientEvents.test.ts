import { describe, expect, it } from 'vitest';
import { isClientTelemetryEvent } from './clientEvents';

describe('client telemetry validation', () => {
  it('accepts the intentionally small Web Vitals schema', () => {
    expect(
      isClientTelemetryEvent({
        eventType: 'web-vital',
        id: 'v4-123',
        name: 'INP',
        path: '/interviews',
        rating: 'good',
        value: 120,
      }),
    ).toBe(true);
  });

  it('rejects unknown event types and unsafe paths', () => {
    expect(
      isClientTelemetryEvent({
        eventType: 'credentials',
        id: '1',
        name: 'password',
        path: '/login',
      }),
    ).toBe(false);
    expect(
      isClientTelemetryEvent({
        eventType: 'browser-error',
        id: '1',
        name: 'TypeError',
        path: 'https://evil.example',
      }),
    ).toBe(false);
  });
});
