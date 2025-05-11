import { NextResponse } from 'next/server';

export async function GET() {
  // Test: simulate the exact update flow with the fix
  const testTokens: Record<string, any> = {
    'primitives.color': {
      'color': {
        'green': {
          '500': {
            value: '#25b24b',
            type: 'color'
          }
        }
      }
    }
  };
  
  // Simulate updating a token
  const path = 'primitives.color.color.green.500';
  const newValue = {
    value: '#00ff00',
    type: 'color',
    description: 'Updated green'
  };
  
  const pathParts = path.split('.');
  let current: any = testTokens;
  
  // Handle the file prefix specially (e.g., 'primitives.color')
  if (pathParts.length >= 2) {
    const fileKey = `${pathParts[0]}.${pathParts[1]}`; // e.g., 'primitives.color'
    if (testTokens[fileKey]) {
      current = testTokens[fileKey];
      // Remove the file prefix from the path parts
      pathParts.splice(0, 2);
    }
  }
  
  // Navigate to the correct location
  for (let i = 0; i < pathParts.length - 1; i++) {
    const part = pathParts[i];
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part];
  }
  
  // Update the value
  const lastKey = pathParts[pathParts.length - 1];
  current[lastKey] = newValue;
  
  return NextResponse.json({
    originalPath: path,
    pathParts,
    updatedTokens: testTokens,
    currentAfterNavigation: current,
    updateKey: lastKey,
    updateValue: newValue
  });
}
