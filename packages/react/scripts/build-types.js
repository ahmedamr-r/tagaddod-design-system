const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Path to the component directories
const componentsDir = path.resolve(__dirname, '../src/components');
const hooksDir = path.resolve(__dirname, '../src/hooks');
const providersDir = path.resolve(__dirname, '../src/providers');
const distDir = path.resolve(__dirname, '../dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

try {
  // Run TypeScript in declaration-only mode
  console.log('Running TypeScript to generate declarations...');
  execSync('npx tsc --project tsconfig.build.json', { stdio: 'inherit' });
  
  console.log('TypeScript declarations should be generated.');
  
  // If tsc doesn't generate declarations properly, create a simple index.d.ts
  if (!fs.existsSync(path.join(distDir, 'index.d.ts'))) {
    console.log('Creating fallback index.d.ts...');
    
    // Get component directories
    const components = fs.readdirSync(componentsDir)
      .filter(file => fs.statSync(path.join(componentsDir, file)).isDirectory());
    
    // Get hook files
    const hooks = fs.readdirSync(hooksDir)
      .filter(file => file.endsWith('.ts') || file.endsWith('.tsx'))
      .map(file => file.replace(/\.(ts|tsx)$/, ''));
    
    // Get provider files
    const providers = fs.readdirSync(providersDir)
      .filter(file => file.endsWith('.ts') || file.endsWith('.tsx'))
      .map(file => file.replace(/\.(ts|tsx)$/, ''));
    
    // Generate declarations
    let declarations = '// Generated fallback type declarations\n\n';
    
    // Add components
    for (const component of components) {
      const indexPath = path.join(componentsDir, component, 'index.ts');
      
      if (fs.existsSync(indexPath)) {
        try {
          const content = fs.readFileSync(indexPath, 'utf8');
          const exportLines = content.split('\n')
            .filter(line => line.trim().startsWith('export'))
            .map(line => line.trim());
            
          if (exportLines.length > 0) {
            declarations += `// ${component} component\n`;
            exportLines.forEach(line => {
              declarations += `${line.replace(/from '\.\/(.*)'/, `from '../src/components/${component}/$1'`)}\n`;
            });
            declarations += '\n';
          }
        } catch (err) {
          console.error(`Error processing ${component}:`, err);
        }
      }
    }
    
    // Add hooks
    declarations += '// Hooks\n';
    for (const hook of hooks) {
      declarations += `export * from '../src/hooks/${hook}';\n`;
    }
    declarations += '\n';
    
    // Add providers
    declarations += '// Providers\n';
    for (const provider of providers) {
      declarations += `export * from '../src/providers/${provider}';\n`;
    }
    
    // Write the declarations file
    fs.writeFileSync(path.join(distDir, 'index.d.ts'), declarations);
    console.log('Created fallback index.d.ts');
  }
  
  console.log('TypeScript declarations built successfully!');
} catch (error) {
  console.error('Error building TypeScript declarations:', error);
  process.exit(1);
}
