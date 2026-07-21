'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';
import { API_ROUTES } from '@/config/api';
import type { ClientTelemetryEvent } from '@/observability/clientEvents';

function sendClientEvent(event: ClientTelemetryEvent) {
  const body = JSON.stringify(event);

  if (navigator.sendBeacon?.(API_ROUTES.observability.clientEvents, body)) {
    return;
  }

  void fetch(API_ROUTES.observability.clientEvents, {
    body,
    headers: { 'Content-Type': 'application/json' },
    keepalive: true,
    method: 'POST',
  });
}

/**
 * Reports real-user Web Vitals and sanitized browser failures. Vercel Speed
 * Insights provides dashboards; these structured events also appear in Runtime
 * Logs, allowing a production issue to be correlated by route and release.
 */
export default function ClientObservability() {
  useReportWebVitals((metric) => {
    sendClientEvent({
      eventType: 'web-vital',
      id: metric.id,
      name: metric.name,
      path: window.location.pathname,
      rating: metric.rating,
      value: metric.value,
    });
  });

  useEffect(() => {
    const reportWindowError = (event: ErrorEvent) => {
      sendClientEvent({
        eventType: 'browser-error',
        id: crypto.randomUUID(),
        name: event.error?.name ?? 'WindowError',
        path: window.location.pathname,
      });
    };

    const reportUnhandledRejection = (event: PromiseRejectionEvent) => {
      sendClientEvent({
        eventType: 'browser-error',
        id: crypto.randomUUID(),
        name:
          event.reason instanceof Error
            ? event.reason.name
            : 'UnhandledPromiseRejection',
        path: window.location.pathname,
      });
    };

    window.addEventListener('error', reportWindowError);
    window.addEventListener('unhandledrejection', reportUnhandledRejection);

    return () => {
      window.removeEventListener('error', reportWindowError);
      window.removeEventListener(
        'unhandledrejection',
        reportUnhandledRejection,
      );
    };
  }, []);

  return null;
}
