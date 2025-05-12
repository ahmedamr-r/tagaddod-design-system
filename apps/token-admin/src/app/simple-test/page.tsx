'use client';

import { useState, useEffect } from 'react';

export default function SimpleTest() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('/api/tokens')
      .then(res => {
        if (!res.ok) throw new Error('API call failed');
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="p-4">
      <h1>Simple Test</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
