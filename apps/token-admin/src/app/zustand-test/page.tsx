'use client';

import { useSimpleStore } from '@/lib/test/simpleStore';

export default function ZustandTest() {
  const { count, data, increment, loadData } = useSimpleStore();
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Zustand Test</h1>
      
      <div className="mb-4">
        <p>Count: {count}</p>
        <button 
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Increment
        </button>
        <button 
          onClick={loadData}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Load Data
        </button>
      </div>
      
      <div>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}
