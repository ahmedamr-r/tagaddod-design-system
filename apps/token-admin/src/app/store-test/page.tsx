'use client';

import { useTokenStore } from '@/lib/tokenStore';

export default function StoreTest() {
  const store = useTokenStore();
  
  const handleTest = () => {
    store.loadSourceTokens();
  };
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Store Test Page</h1>
      <button 
        onClick={handleTest}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Load Tokens
      </button>
      <div className="mt-4">
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify({
            isLoading: store.isLoading,
            error: store.error,
            sourceTokens: store.sourceTokens,
          }, null, 2)}
        </pre>
      </div>
    </div>
  );
}
