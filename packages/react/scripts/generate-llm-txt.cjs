#!/usr/bin/env node

/**
 * Automatic LLM.txt Generator for Tagaddod Design System
 * 
 * This script parses MDX documentation files and generates an llm.txt file
 * optimized for Large Language Models to understand the component library.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { unified } = require('unified');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkStringify = require('remark-stringify');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../src/components');
const OUTPUT_FILE = path.join(__dirname, '../llm.txt');
const PACKAGE_NAME = '@tagaddod/react';

/**
 * Extract component information from MDX file
 */
function extractComponentInfo(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content: mdxContent } = matter(content);
    
    // Parse MDX content
    const processor = unified()
      .use(remarkParse)
      .use(remarkMdx);
    
    const ast = processor.parse(mdxContent);
    
    const componentInfo = {
      name: '',
      description: '',
      import: '',
      props: [],
      examples: [],
      variants: [],
      states: [],
      accessibility: [],
      rtlSupport: false
    };
    
    // Extract information from AST
    visitNode(ast, componentInfo);
    
    return componentInfo;
  } catch (error) {
    console.warn(`Warning: Could not parse ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Visit AST nodes and extract relevant information
 */
function visitNode(node, componentInfo, currentSection = '') {
  if (!node) return;
  
  if (node.type === 'heading') {
    const headingText = extractTextFromNode(node);
    
    // Extract component name from main heading
    if (node.depth === 1 && headingText.includes('Component')) {
      componentInfo.name = headingText.replace(' Component', '').trim();
    }
    
    // Track current section for context
    currentSection = headingText.toLowerCase();
  }
  
  if (node.type === 'paragraph') {
    const text = extractTextFromNode(node);
    
    // Extract description from overview or first paragraph
    if (!componentInfo.description && (currentSection.includes('overview') || text.length > 50)) {
      componentInfo.description = text.substring(0, 200) + (text.length > 200 ? '...' : '');
    }
    
    // Check for RTL support mention
    if (text.toLowerCase().includes('rtl') || text.toLowerCase().includes('right-to-left')) {
      componentInfo.rtlSupport = true;
    }
  }
  
  if (node.type === 'code' && node.lang === 'jsx') {
    // Extract import statement
    if (node.value.includes('import') && node.value.includes(PACKAGE_NAME)) {
      const importMatch = node.value.match(/import\s+.*?\s+from\s+['"`]@tagaddod\/react['"`]/);
      if (importMatch && !componentInfo.import) {
        componentInfo.import = importMatch[0];
      }
    }
    
    // Extract examples
    if (node.value.includes('<') && !node.value.includes('import')) {
      componentInfo.examples.push({
        code: node.value.trim(),
        section: currentSection
      });
    }
  }
  
  if (node.type === 'list') {
    // Extract props, variants, or states from lists
    const listItems = node.children
      .filter(child => child.type === 'listItem')
      .map(item => extractTextFromNode(item));
    
    if (currentSection.includes('prop')) {
      componentInfo.props.push(...listItems);
    } else if (currentSection.includes('variant')) {
      componentInfo.variants.push(...listItems);
    } else if (currentSection.includes('state')) {
      componentInfo.states.push(...listItems);
    } else if (currentSection.includes('accessibility')) {
      componentInfo.accessibility.push(...listItems);
    }
  }
  
  // Recursively visit children
  if (node.children) {
    node.children.forEach(child => visitNode(child, componentInfo, currentSection));
  }
}

/**
 * Extract plain text from a node
 */
function extractTextFromNode(node) {
  if (!node) return '';
  
  if (node.type === 'text') {
    return node.value;
  }
  
  if (node.type === 'inlineCode') {
    return `\`${node.value}\``;
  }
  
  if (node.children) {
    return node.children.map(child => extractTextFromNode(child)).join('');
  }
  
  return '';
}

/**
 * Find all MDX files in components directory
 */
function findMdxFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
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
  }
  
  scanDirectory(dir);
  return files;
}

/**
 * Generate comprehensive examples section
 */
function generateExamplesSection(components) {
  let examples = '\n## Common Usage Patterns\n\n';
  
  // Form components example
  const formComponents = components.filter(c => 
    c.name && ['TextInput', 'Checkbox', 'Select', 'Button'].includes(c.name)
  );
  
  if (formComponents.length > 0) {
    examples += '### Form Example\n```jsx\n';
    examples += 'import { TextInput, Checkbox, Select, Button } from \'@tagaddod/react\';\n\n';
    examples += '<form onSubmit={handleSubmit}>\n';
    examples += '  <TextInput label="Name" required />\n';
    examples += '  <Select label="Country" options={countryOptions} />\n';
    examples += '  <Checkbox label="I agree to terms" required />\n';
    examples += '  <Button type="submit" variant="primary">Submit</Button>\n';
    examples += '</form>\n```\n\n';
  }
  
  // Dashboard components example
  const dashboardComponents = components.filter(c => 
    c.name && ['Table', 'Tabs', 'Badge', 'Avatar'].includes(c.name)
  );
  
  if (dashboardComponents.length > 0) {
    examples += '### Dashboard Example\n```jsx\n';
    examples += 'import { Table, Tabs, TabsList, TabsTrigger, TabsContent, Badge, Avatar } from \'@tagaddod/react\';\n\n';
    examples += '<Tabs defaultValue="users">\n';
    examples += '  <TabsList>\n';
    examples += '    <TabsTrigger value="users">Users</TabsTrigger>\n';
    examples += '    <TabsTrigger value="analytics" badge="5">Analytics</TabsTrigger>\n';
    examples += '  </TabsList>\n';
    examples += '  <TabsContent value="users">\n';
    examples += '    <Table data={userData} columns={userColumns} />\n';
    examples += '  </TabsContent>\n';
    examples += '</Tabs>\n```\n\n';
  }
  
  return examples;
}

/**
 * Generate the complete LLM.txt content
 */
function generateLlmTxt(components) {
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

## Core Features

- **Accessibility**: Built with ARIA best practices and keyboard navigation
- **RTL Support**: Full right-to-left language support for Arabic interfaces
- **Theming**: Support for multiple brand themes (Tagaddod, GreenPan)
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **Modern React**: Built for React 18+ with hooks and modern patterns

## Components Overview

`;

  // Generate individual component sections
  const validComponents = components.filter(c => c.name && c.description);
  
  for (const component of validComponents) {
    content += `### ${component.name}\n`;
    content += `${component.description}\n\n`;
    
    if (component.import) {
      content += `**Import:** \`${component.import}\`\n\n`;
    }
    
    // Add key features
    const features = [];
    if (component.variants.length > 0) {
      features.push(`${component.variants.length} variants`);
    }
    if (component.states.length > 0) {
      features.push('Multiple states');
    }
    if (component.rtlSupport) {
      features.push('RTL support');
    }
    
    if (features.length > 0) {
      content += `**Features:** ${features.join(', ')}\n\n`;
    }
    
    // Add basic example
    const basicExample = component.examples.find(ex => 
      ex.code.length < 200 && !ex.code.includes('useState')
    );
    
    if (basicExample) {
      content += '**Basic Usage:**\n```jsx\n';
      content += basicExample.code;
      content += '\n```\n\n';
    }
    
    // Add variants if available
    if (component.variants.length > 0 && component.variants.length < 10) {
      content += `**Available Options:**\n`;
      component.variants.slice(0, 5).forEach(variant => {
        content += `- ${variant}\n`;
      });
      content += '\n';
    }
  }
  
  // Add common patterns
  content += generateExamplesSection(validComponents);
  
  // Add integration information
  content += `## Integration Notes

### Theme Provider
Wrap your application with ThemeProvider to enable theming:
\`\`\`jsx
<ThemeProvider theme="tagaddod" direction="ltr">
  <App />
</ThemeProvider>
\`\`\`

### Available Themes
- \`tagaddod\` - Default Tagaddod brand theme
- \`greenpan\` - GreenPan brand theme

### Direction Support
- \`ltr\` - Left-to-right (English, default)
- \`rtl\` - Right-to-left (Arabic)

### CSS Import
Always import the CSS file in your application entry point:
\`\`\`jsx
import '${PACKAGE_NAME}/styles.css';
\`\`\`

## Accessibility Features

- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus management
- ARIA attributes and roles
- Color contrast compliance (WCAG 2.1 AA)

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## TypeScript Support

All components include comprehensive TypeScript definitions. Import types as needed:

\`\`\`tsx
import { ButtonProps, SelectOption, TableColumn } from '${PACKAGE_NAME}';
\`\`\`

## Performance Considerations

- Components use CSS modules for optimal performance
- Minimal runtime JavaScript overhead
- Tree-shaking friendly exports
- Optimized for modern build tools (Vite, Webpack 5+)

## Common Patterns

### Controlled Components
\`\`\`jsx
const [value, setValue] = useState('');
<TextInput value={value} onChange={setValue} />
\`\`\`

### Form Validation
\`\`\`jsx
<TextInput 
  label="Email"
  errorMessage={errors.email}
  required
/>
\`\`\`

### Responsive Design
Components adapt to container sizes automatically. Use CSS Grid or Flexbox for layouts.

### Dark Mode
Themes automatically handle dark/light mode preferences when properly configured.

---

Generated automatically from component MDX documentation files.
Last updated: ${new Date().toISOString()}
`;

  return content;
}

/**
 * Main execution function
 */
async function main() {
  try {
    console.log('🔍 Scanning for MDX files...');
    
    const mdxFiles = findMdxFiles(COMPONENTS_DIR);
    console.log(`📄 Found ${mdxFiles.length} MDX files`);
    
    const components = [];
    
    for (const filePath of mdxFiles) {
      console.log(`📖 Parsing ${path.basename(filePath)}...`);
      const componentInfo = extractComponentInfo(filePath);
      if (componentInfo) {
        components.push(componentInfo);
      }
    }
    
    console.log(`✅ Successfully parsed ${components.length} components`);
    
    console.log('📝 Generating llm.txt file...');
    const llmContent = generateLlmTxt(components);
    
    fs.writeFileSync(OUTPUT_FILE, llmContent, 'utf8');
    
    console.log(`🎉 Successfully generated llm.txt at ${OUTPUT_FILE}`);
    console.log(`📊 File size: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(1)} KB`);
    
    // Log summary
    console.log('\n📋 Summary:');
    components.forEach(comp => {
      if (comp.name) {
        console.log(`  - ${comp.name}: ${comp.examples.length} examples, ${comp.variants.length} variants`);
      }
    });
    
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
  extractComponentInfo,
  generateLlmTxt,
  findMdxFiles
};
