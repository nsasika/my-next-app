export const CLIENT_EVENT_TYPES = ['web-vital', 'browser-error'] as const;

export type ClientEventType = (typeof CLIENT_EVENT_TYPES)[number];

export type ClientTelemetryEvent = {
  eventType: ClientEventType;
  id: string;
  name: string;
  path: string;
  rating?: string;
  value?: number;
};

export function isClientTelemetryEvent(
  value: unknown,
): value is ClientTelemetryEvent {
  if (typeof value !== 'object' || value === null) return false;

  const event = value as Partial<ClientTelemetryEvent>;

  return (
    typeof event.eventType === 'string' &&
    CLIENT_EVENT_TYPES.includes(event.eventType as ClientEventType) &&
    typeof event.id === 'string' &&
    event.id.length <= 128 &&
    typeof event.name === 'string' &&
    event.name.length <= 160 &&
    typeof event.path === 'string' &&
    event.path.startsWith('/') &&
    event.path.length <= 500 &&
    (event.rating === undefined || typeof event.rating === 'string') &&
    (event.value === undefined || Number.isFinite(event.value))
  );
}
