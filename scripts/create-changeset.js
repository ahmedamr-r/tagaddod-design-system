#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define available packages
const packages = [
  '@tagaddod-design/tokens',
  '@tagaddod-design/react'
];

// Define available bump types
const bumpTypes = ['major', 'minor', 'patch'];

async function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log('📦 Creating a new changeset for version bumping');
  console.log('----------------------------------------------');

  // Initialize an object to track bump types for each package
  const packageBumps = {};

  // Ask about token package
  console.log('\n🎨 Token Package:');
  const tokenBump = await prompt(`Select bump type for @tagaddod-design/tokens [patch]: `);
  packageBumps['@tagaddod-design/tokens'] = tokenBump.trim() || 'patch';

  // Ask about react package
  console.log('\n⚛️ React Package:');
  const reactBump = await prompt(`Select bump type for @tagaddod-design/react [patch]: `);
  packageBumps['@tagaddod-design/react'] = reactBump.trim() || 'patch';

  // Get summary of changes
  console.log('\n📝 Summary:');
  const summary = await prompt('Enter a summary of the changes: ');

  // Get optional details
  console.log('\n🔍 Details (optional, press Enter to skip):');
  const details = await prompt('Enter detailed description (multiline, press Enter twice to finish):\n');

  // Create the changeset content
  let content = '---\n';
  for (const pkg of packages) {
    if (packageBumps[pkg]) {
      content += `'${pkg}': ${packageBumps[pkg]}\n`;
    }
  }
  content += '---\n\n';
  content += summary + '\n\n';
  if (details.trim()) {
    content += details + '\n';
  }

  // Create a unique ID for the changeset
  const timestamp = new Date().toISOString().replace(/[:\-T.Z]/g, '');
  const id = `changes-${timestamp}`;
  
  // Create the .changeset directory if it doesn't exist
  const changesetDir = path.join(process.cwd(), '.changeset');
  if (!fs.existsSync(changesetDir)) {
    fs.mkdirSync(changesetDir);
  }
  
  // Write the changeset file
  const filePath = path.join(changesetDir, `${id}.md`);
  fs.writeFileSync(filePath, content);
  
  console.log(`\n✅ Created changeset: ${filePath}`);
  console.log('\nNext steps:');
  console.log('1. Commit this changeset with your code changes');
  console.log('2. Push to the main branch to trigger a release');
  console.log('3. The CI workflow will use this changeset to version and publish packages');

  rl.close();
}

main().catch(error => {
  console.error('Error creating changeset:', error);
  process.exit(1);
});
