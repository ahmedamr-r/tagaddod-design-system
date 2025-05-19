const fs = require('fs');
const path = require('path');

// Create test directory
const testDir = path.resolve(__dirname, '../dist-test');
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
  console.log('Created test directory');
}

// Create a simple test file that imports components both ways
const testFile = path.join(testDir, 'test-imports.js');

const testContent = `
// Test importing from main bundle
import { Button, TextInput } from '@tagaddod-design/react';

// Test importing directly from component paths
import { Avatar } from '@tagaddod-design/react/components/Avatar';
import { Badge } from '@tagaddod-design/react/components/Badge';

// Test importing styles
import '@tagaddod-design/react/styles';

// Log to verify imports worked
console.log('Main bundle imports:', Button ? 'Button ✓' : 'Button ✗', TextInput ? 'TextInput ✓' : 'TextInput ✗');
console.log('Direct imports:', Avatar ? 'Avatar ✓' : 'Avatar ✗', Badge ? 'Badge ✓' : 'Badge ✗');

// Test rendering a component
const button = Button({ children: 'Click me' });
console.log('Button rendering:', button ? 'Working ✓' : 'Broken ✗');
`;

fs.writeFileSync(testFile, testContent);
console.log('Created test import file');

// Create package.json with local dependency
const packageJson = {
  "name": "tagaddod-react-test",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "@tagaddod-design/react": "file:../dist"
  }
};

fs.writeFileSync(path.join(testDir, 'package.json'), JSON.stringify(packageJson, null, 2));
console.log('Created package.json with local dependency');

console.log('\nTest files ready. To test:');
console.log('1. cd dist-test');
console.log('2. yarn install');
console.log('3. node test-imports.js');
