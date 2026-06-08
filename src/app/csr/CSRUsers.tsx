'use client';

import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function CSRUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading users from browser...</p>;
  }

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}
