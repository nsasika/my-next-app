'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { updateQuery } from '@/lib/features/client/clientsSlice';

const DebouncePage = () => {
  const dispatch = useAppDispatch();
  const { query, results, loading, error }= useAppSelector((state) => state.clients);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateQuery(e.target.value)); // Dispatch the query update
  };

  return (
    <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Clients Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search clients..."
        style={{
          padding: '8px',
          width: '100%',
          marginBottom: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {results.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncePage;