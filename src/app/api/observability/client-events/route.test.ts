import { afterEach, describe, expect, it, vi } from 'vitest';
import { POST } from './route';

describe('client observability API', () => {
  afterEach(() => vi.restoreAllMocks());

  it('writes valid Web Vitals as structured runtime logs', async () => {
    const log = vi.spyOn(console, 'info').mockImplementation(() => undefined);
    const response = await POST(
      new Request('http://localhost/api/observability/client-events', {
        body: JSON.stringify({
          eventType: 'web-vital',
          id: 'metric-1',
          name: 'LCP',
          path: '/',
          rating: 'good',
          value: 1200,
        }),
        method: 'POST',
      }),
    );

    expect(response.status).toBe(204);
    expect(log).toHaveBeenCalledWith(
      expect.stringContaining('client_telemetry'),
    );
  });

  it('rejects malformed or oversized browser events', async () => {
    const malformed = await POST(
      new Request('http://localhost/api/observability/client-events', {
        body: '{bad json',
        method: 'POST',
      }),
    );
    const oversized = await POST(
      new Request('http://localhost/api/observability/client-events', {
        body: 'x'.repeat(2_049),
        method: 'POST',
      }),
    );

    expect(malformed.status).toBe(400);
    expect(oversized.status).toBe(413);
  });
});
