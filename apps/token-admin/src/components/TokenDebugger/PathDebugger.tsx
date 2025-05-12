import React from 'react';

interface PathDebuggerProps {
  path: string;
  tokens: Record<string, any>;
}

export const PathDebugger: React.FC<PathDebuggerProps> = ({ path, tokens }) => {
  const pathParts = path.split('.');
  let current: any = tokens;
  const steps: string[] = ['Root tokens:'];
  
  steps.push(JSON.stringify(current, null, 2));
  
  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    steps.push(`\nNavigating to: ${part}`);
    
    if (current && current[part]) {
      current = current[part];
      steps.push(`Found:`);
      steps.push(JSON.stringify(current, null, 2));
    } else {
      steps.push(`Not found! Current structure:`);
      steps.push(JSON.stringify(current, null, 2));
      break;
    }
  }
  
  return (
    <div className="mt-8 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Path Debug: {path}</h3>
      <pre className="text-sm overflow-auto max-h-96 whitespace-pre-wrap">
        {steps.join('\n')}
      </pre>
    </div>
  );
};
