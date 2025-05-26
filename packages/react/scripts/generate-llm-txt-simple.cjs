#!/usr/bin/env node

/**
 * Simple LLM.txt Generator for Tagaddod Design System
 * 
 * Lightweight version that uses regex parsing instead of AST parsing.
 * Requires only built-in Node.js modules.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../src/components');
const OUTPUT_FILE = path.join(__dirname, '../llms.txt');
const PACKAGE_NAME = '@tagaddod/react';

/**
 * Extract component information using regex patterns
 */
function extractComponentInfoSimple(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(path.dirname(filePath));
    
    const componentInfo = {
      name: fileName,
      description: '',
      import: '',
      examples: [],
      props: [],
      rtlSupport: false,
      accessibility: false
    };
    
    // Extract main heading (component name)
    const headingMatch = content.match(/^#\s+(.+?)$/m);
    if (headingMatch) {
      componentInfo.name = headingMatch[1].replace(' Component', '').trim();
    }
    
    // Extract description from Overview section
    const overviewMatch = content.match(/## Overview\s*\n\s*(.+?)(?=\n\n|\n#)/m);
    if (overviewMatch) {
      componentInfo.description = overviewMatch[1].trim().substring(0, 200);
    }
    
    // Extract import statement
    const importMatch = content.match(/import\s+.*?\s+from\s+['"`]@tagaddod\/react['"`]/);
    if (importMatch) {
      componentInfo.import = importMatch[0];
    }
    
    // Extract code examples
    const codeBlocks = content.match(/```jsx\n([\s\S]*?)\n```/g);
    if (codeBlocks) {
      componentInfo.examples = codeBlocks
        .map(block => block.replace(/```jsx\n/, '').replace(/\n```/, ''))
        .filter(code => code.includes('<') && !code.includes('import'))
        .slice(0, 3); // Limit to 3 examples
    }
    
    // Check for RTL support
    if (content.toLowerCase().includes('rtl') || content.toLowerCase().includes('right-to-left')) {
      componentInfo.rtlSupport = true;
    }
    
    // Check for accessibility mentions
    if (content.toLowerCase().includes('accessibility') || content.toLowerCase().includes('aria')) {
      componentInfo.accessibility = true;
    }
    
    // Extract props from Props section
    const propsMatch = content.match(/## Props\s*\n([\s\S]*?)(?=\n##|\n#|$)/);
    if (propsMatch) {
      const propsSection = propsMatch[1];
      const propMatches = propsSection.match(/- `(\w+)`[:\s]*(.+?)$/gm);
      if (propMatches) {
        componentInfo.props = propMatches.map(prop => prop.replace(/^- /, ''));
      }
    }
    
    return componentInfo;
  } catch (error) {
    console.warn(`Warning: Could not parse ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Find all MDX files in components directory
 */
function findMdxFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith('.mdx')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not scan directory ${currentDir}:`, error.message);
    }
  }
  
  scanDirectory(dir);
  return files;
}

/**
 * Generate the complete LLM.txt content
 */
function generateLlmTxtSimple(components) {
  const validComponents = components.filter(c => c && c.name);
  
  let content = `# Tagaddod Design System - React Components Library

A comprehensive React component library for building modern, accessible user interfaces with support for RTL languages and multiple brand themes.

## Installation

\`\`\`bash
npm install ${PACKAGE_NAME}
# or
yarn add ${PACKAGE_NAME}
\`\`\`

## Setup

\`\`\`jsx
import '${PACKAGE_NAME}/styles.css';
import { ThemeProvider } from '${PACKAGE_NAME}';

function App() {
  return (
    <ThemeProvider theme="tagaddod" direction="ltr">
      {/* Your app content */}
    </ThemeProvider>
  );
}
\`\`\`

## Key Features

- **Accessibility First**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **RTL Support**: Full right-to-left language support for Arabic interfaces
- **Multi-Brand Theming**: Support for Tagaddod and GreenPan brand themes
- **TypeScript Ready**: Comprehensive type definitions included
- **Modern React**: Built for React 18+ with hooks and concurrent features

## Components

`;

  // Generate component sections
  for (const component of validComponents) {
    content += `### ${component.name}\n`;
    
    if (component.description) {
      content += `${component.description}\n\n`;
    }
    
    if (component.import) {
      content += `**Import:** \`${component.import}\`\n\n`;
    }
    
    // Add features
    const features = [];
    if (component.rtlSupport) features.push('RTL support');
    if (component.accessibility) features.push('Fully accessible');
    if (component.examples.length > 0) features.push(`${component.examples.length} usage examples`);
    
    if (features.length > 0) {
      content += `**Features:** ${features.join(', ')}\n\n`;
    }
    
    // Add first example
    if (component.examples.length > 0) {
      content += '**Example:**\n```jsx\n';
      content += component.examples[0];
      content += '\n```\n\n';
    }
  }
  
  // Add common usage patterns
  content += `## Common Usage Patterns

### Form Components
\`\`\`jsx
import { TextInput, Checkbox, Select, Button } from '${PACKAGE_NAME}';

<form onSubmit={handleSubmit}>
  <TextInput label="Name" required />
  <Select label="Country" options={countryOptions} />
  <Checkbox label="I agree to terms" required />
  <Button type="submit" variant="primary">Submit</Button>
</form>
\`\`\`

### Dashboard Layout
\`\`\`jsx
import { Table, Tabs, TabsList, TabsTrigger, TabsContent, Badge } from '${PACKAGE_NAME}';

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="users" badge="5">Users</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <Table data={dashboardData} columns={columns} />
  </TabsContent>
</Tabs>
\`\`\`

### Modal Interactions
\`\`\`jsx
import { Modal, Button } from '${PACKAGE_NAME}';

<Modal
  trigger={<Button>Open Dialog</Button>}
  title="Confirm Action"
  cancelLabel="Cancel"
  confirmLabel="Confirm"
  onConfirm={handleConfirm}
>
  Are you sure you want to continue?
</Modal>
\`\`\`

## Theming

### Theme Provider Setup
\`\`\`jsx
<ThemeProvider theme="tagaddod" direction="ltr">
  <App />
</ThemeProvider>
\`\`\`

### Available Themes
- \`tagaddod\` - Default Tagaddod brand (primary colors: purple/green)
- \`greenpan\` - GreenPan brand (primary colors: green variants)

### Direction Support
- \`ltr\` - Left-to-right (English, default)
- \`rtl\` - Right-to-left (Arabic)

## Accessibility Features

All components follow WCAG 2.1 AA guidelines:
- Semantic HTML structure
- Keyboard navigation support
- Focus management and visible focus indicators
- Screen reader compatibility with ARIA labels
- Color contrast compliance
- Reduced motion support

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile: iOS Safari, Android Chrome

## TypeScript Support

Full TypeScript definitions are included:

\`\`\`tsx
import { ButtonProps, SelectOption, TableColumn } from '${PACKAGE_NAME}';

interface MyComponentProps {
  variant: ButtonProps['variant'];
  options: SelectOption[];
}
\`\`\`

## Performance

- Tree-shakable ES modules
- CSS-in-JS free (uses CSS modules)
- Minimal runtime overhead
- Optimized for modern bundlers
- Lazy loading support for large components

---

*This documentation was automatically generated from component MDX files.*
*Generated: ${new Date().toISOString()}*
*Components documented: ${validComponents.length}*
`;

  return content;
}

/**
 * Main execution function
 */
async function main() {
  try {
    console.log('🔍 Scanning for MDX files...');
    
    if (!fs.existsSync(COMPONENTS_DIR)) {
      throw new Error(`Components directory not found: ${COMPONENTS_DIR}`);
    }
    
    const mdxFiles = findMdxFiles(COMPONENTS_DIR);
    console.log(`📄 Found ${mdxFiles.length} MDX files`);
    
    if (mdxFiles.length === 0) {
      console.warn('⚠️ No MDX files found. Make sure component documentation exists.');
      return;
    }
    
    const components = [];
    
    for (const filePath of mdxFiles) {
      console.log(`📖 Parsing ${path.basename(filePath)}...`);
      const componentInfo = extractComponentInfoSimple(filePath);
      if (componentInfo) {
        components.push(componentInfo);
      }
    }
    
    const validComponents = components.filter(c => c && c.name);
    console.log(`✅ Successfully parsed ${validComponents.length} components`);
    
    if (validComponents.length === 0) {
      console.warn('⚠️ No valid components found. Check MDX file format.');
      return;
    }
    
    console.log('📝 Generating llm.txt file...');
    const llmContent = generateLlmTxtSimple(validComponents);
    
    fs.writeFileSync(OUTPUT_FILE, llmContent, 'utf8');
    
    const stats = fs.statSync(OUTPUT_FILE);
    console.log(`🎉 Successfully generated llm.txt at ${OUTPUT_FILE}`);
    console.log(`📊 File size: ${(stats.size / 1024).toFixed(1)} KB`);
    
    // Log summary
    console.log('\n📋 Components included:');
    validComponents.forEach(comp => {
      const features = [];
      if (comp.rtlSupport) features.push('RTL');
      if (comp.accessibility) features.push('A11Y');
      if (comp.examples.length > 0) features.push(`${comp.examples.length} examples`);
      
      console.log(`  - ${comp.name}${features.length > 0 ? ` (${features.join(', ')})` : ''}`);
    });
    
    console.log(`\n✅ Generated documentation for ${validComponents.length} components`);
    
  } catch (error) {
    console.error('❌ Error generating llm.txt:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  extractComponentInfoSimple,
  generateLlmTxtSimple,
  findMdxFiles
};
