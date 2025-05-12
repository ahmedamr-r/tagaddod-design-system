import React from 'react';

interface TokenDebuggerProps {
  tokens: Record<string, any>;
}

export const TokenDebugger: React.FC<TokenDebuggerProps> = ({ tokens }) => {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Token Structure Debug</h3>
      <pre className="text-sm overflow-auto max-h-96">
        {JSON.stringify(tokens, null, 2)}
      </pre>
    </div>
  );
};
