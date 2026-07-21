import { describe, expect, it } from 'vitest';
import { rejectCrossOriginMutation } from './security';

describe('rejectCrossOriginMutation', () => {
  it('allows same-origin mutations', () => {
    const request = new Request('https://academy.test/api/auth/logout', {
      headers: {
        origin: 'https://academy.test',
      },
      method: 'POST',
    });

    expect(rejectCrossOriginMutation(request)).toBeNull();
  });

  it('rejects cross-origin mutations', () => {
    const request = new Request('https://academy.test/api/auth/logout', {
      headers: {
        origin: 'https://evil.test',
      },
      method: 'POST',
    });

    const response = rejectCrossOriginMutation(request);

    expect(response?.status).toBe(403);
  });

  it('rejects mutations without origin or referer proof', () => {
    const request = new Request('https://academy.test/api/auth/logout', {
      method: 'POST',
    });

    const response = rejectCrossOriginMutation(request);

    expect(response?.status).toBe(403);
  });
});
