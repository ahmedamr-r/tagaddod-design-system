import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Create temporary style-dictionary configs for each theme
const configs = {
  tagaddod: {
    source: ['../tokens/src/**/*.json'],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/css/',
        prefix: 't',
        files: [{
          destination: 'theme-tagaddod.css',
          format: 'css/variables',
          options: { 
            outputReferences: true,
            selector: '.theme-tagaddod'
          }
        }]
      }
    }
  },
  greenpan: {
    source: ['../tokens/src/**/*.json', 'src/greenpan.json'],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/css/',
        prefix: 't',
        files: [{
          destination: 'theme-greenpan.css',
          format: 'css/variables',
          options: { 
            outputReferences: true,
            selector: '.theme-greenpan'
          }
        }]
      }
    }
  }
};

// Ensure dist/css directory exists
fs.mkdirSync(path.join(__dirname, '../dist/css'), { recursive: true });

// Generate CSS for each theme
Object.entries(configs).forEach(([themeName, config]) => {
  const configPath = path.join(__dirname, `../temp-config-${themeName}.json`);
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  
  try {
    execSync(`npx style-dictionary build --config ${configPath}`, {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit'
    });
    console.log(`✔ Built CSS for ${themeName} theme`);
  } catch (error) {
    console.error(`Failed to build CSS for ${themeName}:`, error);
  } finally {
    // Clean up temp file
    if (fs.existsSync(configPath)) {
      fs.unlinkSync(configPath);
    }
  }
});

// Combine all theme CSS files into one
const combinedCss = ['/* Combined theme CSS */'];

// Add base theme
if (fs.existsSync(path.join(__dirname, '../dist/css/theme-tagaddod.css'))) {
  combinedCss.push(fs.readFileSync(path.join(__dirname, '../dist/css/theme-tagaddod.css'), 'utf-8'));
}

// Add override themes
if (fs.existsSync(path.join(__dirname, '../dist/css/theme-greenpan.css'))) {
  combinedCss.push(fs.readFileSync(path.join(__dirname, '../dist/css/theme-greenpan.css'), 'utf-8'));
}

fs.writeFileSync(
  path.join(__dirname, '../dist/css/themes.css'),
  combinedCss.join('\n\n')
);

console.log('✔ Combined all theme CSS into themes.css');
