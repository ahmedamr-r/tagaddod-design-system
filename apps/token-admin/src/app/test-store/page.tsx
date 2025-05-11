'use client';

import { useEffect, useState } from 'react';
import { useTokenStore } from '@/lib/tokenStore';

export default function TestStore() {
  const { sourceTokens, loadSourceTokens, isLoading, error } = useTokenStore();
  const [apiResponse, setApiResponse] = useState<any>(null);
  
  useEffect(() => {
    console.log('TestStore component mounted');
    loadSourceTokens();
    
    // Also make a direct API call to test
    fetch('/api/tokens')
      .then(res => res.json())
      .then(data => {
        console.log('Direct API response:', data);
        setApiResponse(data);
      })
      .catch(err => console.error('Direct API error:', err));
  }, [loadSourceTokens]);
  
  useEffect(() => {
    console.log('Tokens updated:', sourceTokens);
  }, [sourceTokens]);
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Store Test</h1>
      <div>Loading: {String(isLoading)}</div>
      <div>Error: {error || 'None'}</div>
      <div>Store Tokens: {JSON.stringify(sourceTokens, null, 2)}</div>
      <div>API Response: {JSON.stringify(apiResponse, null, 2)}</div>
    </div>
  );
}
