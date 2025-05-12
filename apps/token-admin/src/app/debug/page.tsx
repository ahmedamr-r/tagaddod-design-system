'use client';

import React, { useEffect, useState } from 'react';

export default function DebugPage() {
  const [debugData, setDebugData] = useState<any>(null);
  const [tokens, setTokens] = useState<any>(null);
  
  useEffect(() => {
    // Fetch debug data
    fetch('/api/debug-tokens')
      .then(res => res.json())
      .then(data => setDebugData(data));
      
    // Fetch actual tokens
    fetch('/api/tokens')
      .then(res => res.json())
      .then(data => setTokens(data));
  }, []);
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Token Debug Page</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Debug Data</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {JSON.stringify(debugData, null, 2)}
        </pre>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Actual Tokens Structure</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {JSON.stringify(tokens, null, 2)}
        </pre>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Path Testing</h2>
        {tokens && (
          <div>
            <p>Example token path: primitives.color.color.green.500</p>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">
              {JSON.stringify(tokens.tokens?.['primitives.color']?.color?.green?.['500'], null, 2)}
            </pre>
          </div>
        )}
      </section>
    </div>
  );
}
