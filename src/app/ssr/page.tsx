type User = {
  id: number;
  name: string;
  email: string;
};

const SSRPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const users: User[] = await res.json();

  return (
    <main>
      <h1>SSR Users Page</h1>
      <p>This content is rendered on the server.</p>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </main>
  );
};

export default SSRPage;
