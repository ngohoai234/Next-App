'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}
