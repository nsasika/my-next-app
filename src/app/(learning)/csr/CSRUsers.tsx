'use client';

import { useEffect, useState } from 'react';
import StatusMessage from '@/components/ui/StatusMessage';
import { EXTERNAL_API_BASE_URLS, EXTERNAL_API_ENDPOINTS } from '@/config/api';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function CSRUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `${EXTERNAL_API_BASE_URLS.jsonPlaceholder}${EXTERNAL_API_ENDPOINTS.jsonPlaceholder.users}`,
      {
        signal: controller.signal,
      },
    )
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <StatusMessage>Loading users from browser...</StatusMessage>;
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {users.map((user) => (
        <div
          key={user.id}
          className="rounded-lg border border-slate-200 bg-slate-50 p-4"
        >
          <h2 className="font-bold text-slate-950">{user.name}</h2>
          <p className="mt-1 text-sm text-slate-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
}
