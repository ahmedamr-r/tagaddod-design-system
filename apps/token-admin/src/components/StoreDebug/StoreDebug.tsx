import React from 'react';
import { useTokenStore } from '@/lib/tokenStore';

export const StoreDebug = () => {
  const store = useTokenStore();
  
  return (
    <div className="bg-gray-100 p-4 rounded mb-4">
      <h3 className="font-bold mb-2">Store Debug</h3>
      <pre className="text-xs overflow-auto max-h-96">
        {JSON.stringify(store, (key, value) => {
          if (typeof value === 'function') {
            return '[Function]';
          }
          return value;
        }, 2)}
      </pre>
    </div>
  );
};
