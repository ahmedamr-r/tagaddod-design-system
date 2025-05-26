# LLM.txt Generation Scripts

This directory contains scripts to automatically generate `llm.txt` files for the Tagaddod Design System React component library. The `llm.txt` file helps Large Language Models understand how to use the components effectively.

## Scripts Available

### 1. `generate-llm-txt-simple.cjs` (Recommended)

A lightweight script that uses regex parsing to extract component information from MDX files. This is the **recommended** approach as it requires no additional dependencies.

**Usage:**
```bash
yarn generate-llm-txt:simple
```

**Features:**
- ✅ No additional dependencies required (uses only Node.js built-ins)
- ✅ Fast execution
- ✅ Extracts component names, descriptions, imports, and examples
- ✅ Detects RTL and accessibility support
- ✅ Generates comprehensive usage patterns
- ✅ Simple regex-based parsing

### 2. `generate-llm-txt.cjs` (Advanced)

A more sophisticated script that uses AST parsing with unified/remark to extract detailed component information.

**Usage:**
```bash
yarn generate-llm-txt
```

**Features:**
- 🔧 Requires additional dependencies (gray-matter, unified, remark-*)
- 🔧 More detailed AST-based parsing
- 🔧 Better handling of complex MDX structures
- 🔧 More accurate prop extraction
- 🔧 Extracts variants and states information

**Required Dependencies:**
- `gray-matter`: Parse frontmatter from MDX files
- `unified`: Text processing framework
- `remark-parse`: Markdown parser
- `remark-mdx`: MDX syntax support
- `remark-stringify`: Markdown stringifier

## What Gets Generated

Both scripts generate an `llm.txt` file in the package root that includes:

### 📋 Component Documentation
- Component names and descriptions
- Import statements
- Basic usage examples
- Props information (when available)
- Feature highlights (RTL support, accessibility, etc.)

### 🎯 Usage Patterns
- Form component examples
- Dashboard layout patterns
- Modal interaction examples
- Theming setup instructions

### 🔧 Integration Information
- Installation instructions
- Theme provider setup
- TypeScript support details
- Browser compatibility
- Performance considerations

## How It Works

### Input Sources
The scripts scan the `/src/components` directory for `.mdx` files and extract:

1. **Component Names**: From headings like `# Button Component`
2. **Descriptions**: From "Overview" sections
3. **Import Statements**: From code blocks containing imports
4. **Examples**: From `jsx` code blocks
5. **Features**: By detecting keywords like "RTL", "accessibility", "ARIA"

### Output Structure
The generated `llm.txt` follows this structure:
```
# Library Header
## Installation & Setup
## Key Features
## Components (individual documentation)
## Common Usage Patterns
## Theming Information
## Accessibility Features
## Browser Support
## TypeScript Support
## Performance Notes
```

## Integration with Build Process

The scripts are integrated into the build process:

```json
{
  "scripts": {
    "prebuild:docs": "yarn generate-llm-txt:simple"
  }
}
```

This ensures the `llm.txt` file is automatically updated whenever documentation is built.

## Package.json Configuration

The generated `llm.txt` file is:

1. **Included in published package**:
   ```json
   {
     "files": ["dist/**/*", "llm.txt"]
   }
   ```

2. **Exported for easy access**:
   ```json
   {
     "exports": {
       "./llm.txt": "./llm.txt"
     }
   }
   ```

## Usage by LLM Tools

Once published, LLM tools can access the documentation via:

```javascript
// Direct import
import llmDocs from '@tagaddod/react/llm.txt';

// Or fetch from CDN
fetch('https://unpkg.com/@tagaddod/react/llm.txt')
```

## Customization

### Adding New Components

When you add a new component:
1. Create a `.mdx` file in `/src/components/YourComponent/`
2. Follow the existing documentation structure
3. Run the script to regenerate `llm.txt`

### Extending the Scripts

To customize the extraction logic:

**For simple script:** Modify the regex patterns in `extractComponentInfoSimple()`
**For advanced script:** Modify the AST visitor logic in `visitNode()`

### Output Customization

To change the output format, modify the `generateLlmTxt*()` functions in either script.

## Troubleshooting

### Common Issues

1. **No MDX files found**
   - Check that `.mdx` files exist in `/src/components/*/`
   - Verify the `COMPONENTS_DIR` path in the script

2. **Missing component information**
   - Ensure MDX files follow the expected structure
   - Check for proper heading formats (`# ComponentName Component`)
   - Verify code blocks use `jsx` language specifier

3. **Script errors**
   - For advanced script: Run `yarn install` to ensure all dependencies are installed
   - Check file permissions on the scripts directory
   - Verify Node.js version compatibility

### Debug Mode

Add logging to debug parsing issues:

```javascript
// Add this to see what's being extracted
console.log('Component info:', componentInfo);
```

## Contributing

When adding new extraction features:

1. Test with existing component documentation
2. Ensure both scripts handle edge cases gracefully
3. Update this README with new features
4. Consider backwards compatibility

## Examples

### Generated Content Preview

Here's what the output looks like for a typical component:

```markdown
### Button
Interactive element for triggering actions and events.

**Import:** `import { Button } from '@tagaddod/react';`

**Features:** RTL support, Fully accessible, 3 usage examples

**Example:**
```jsx
<Button variant="primary">Primary Button</Button>
```
```

This format is optimized for LLM consumption while remaining human-readable.
