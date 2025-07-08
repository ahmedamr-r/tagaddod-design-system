import { FastMCP } from 'fastmcp';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Tagaddod Design System MCP Server
 * Provides semantic search for components and token-aware component generation
 */

interface ComponentSearchResult {
  id: number;
  component_name: string;
  component_type: string;
  file_path: string;
  content: string;
  metadata: any;
  similarity: number;
}

interface TokenData {
  [key: string]: any;
}

class TagaddodMCPServer {
  private mcp: FastMCP;
  private supabase: any;
  private tokens: TokenData = {};

  constructor() {
    // Initialize FastMCP server
    this.mcp = new FastMCP({
      name: 'Tagaddod Design System',
      version: '1.0.0'
    });

    // Initialize Supabase
    const supabaseUrl = process.env.SUPABASE_URL || 'https://ynkrfsaaqhkmoiwyyyqa.supabase.co';
    const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlua3Jmc2FhcWhrbW9pd3l5eXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4ODg3MzAsImV4cCI6MjA2NzQ2NDczMH0.pLo2-Jxm0_r7I6Z-69vHtT68ldNIP8eFR20VkciO1l0';
    
    this.supabase = createClient(supabaseUrl, supabaseKey);
    
    this.loadTokens();
    this.setupTools();
  }

  /**
   * Load design tokens from local file
   */
  private loadTokens(): void {
    try {
      const tokensPath = join(process.cwd(), 'docs', 'tokens.json');
      if (existsSync(tokensPath)) {
        this.tokens = JSON.parse(readFileSync(tokensPath, 'utf8'));
        console.log('✅ Design tokens loaded successfully');
      } else {
        console.warn('⚠️ Design tokens file not found');
      }
    } catch (error) {
      console.error('❌ Failed to load design tokens:', error);
    }
  }

  /**
   * Get all components from the database for client-side analysis
   */
  private async getAllComponents(): Promise<ComponentSearchResult[]> {
    const { data, error } = await this.supabase
      .from('component_docs')
      .select('*')
      .order('component_name');

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    return data as ComponentSearchResult[];
  }

  /**
   * Setup MCP tools
   */
  private setupTools(): void {
    // Component catalog tool for client-side semantic analysis
    this.mcp.addTool({
      name: 'component_catalog',
      description: 'Get the complete catalog of available components with rich metadata for intelligent component discovery and matching',
      parameters: z.object({
        category: z.enum(['all', 'forms', 'navigation', 'layout', 'feedback', 'data', 'media']).optional().default('all').describe('Filter components by category'),
        type: z.enum(['story', 'component', 'token', 'all']).optional().default('all').describe('Filter by component type'),
        include_tokens: z.boolean().optional().default(false).describe('Include design tokens in the catalog'),
      }),
      execute: async ({ category = 'all', type = 'all', include_tokens = false }: { category?: string; type?: string; include_tokens?: boolean }) => {
        try {
          console.log(`📚 Fetching component catalog (category: ${category}, type: ${type})`);
          
          // Get all components from database
          const allComponents = await this.getAllComponents();
          
          // Filter by type if specified
          const filteredComponents = type === 'all' 
            ? allComponents 
            : allComponents.filter(comp => comp.component_type === type);
          
          // Categorize and enrich component data
          const catalog = {
            query_context: {
              category: category,
              type: type,
              include_tokens: include_tokens,
              total_components: filteredComponents.length
            },
            components: filteredComponents.map(comp => ({
              name: comp.component_name,
              type: comp.component_type,
              category: this.categorizeComponent(comp),
              description: this.extractDescription(comp.content),
              usage_patterns: this.extractUsagePatterns(comp),
              props: comp.metadata?.args || {},
              variants: this.extractVariants(comp),
              import_statement: this.generateImportStatement(comp),
              usage_examples: this.generateUsageExamples(comp),
              file_path: comp.file_path,
              tags: comp.metadata?.tags || [],
              accessibility_notes: this.extractAccessibilityNotes(comp),
              related_components: this.findRelatedComponents(comp, allComponents)
            })).filter(comp => category === 'all' || comp.category === category),
            design_tokens: include_tokens ? this.tokens : undefined,
            categories: this.getAvailableCategories(filteredComponents)
          };
          
          return JSON.stringify(catalog, null, 2);
        } catch (error) {
          console.error('Catalog error:', error);
          const errorResult = {
            error: `Failed to fetch catalog: ${error instanceof Error ? error.message : 'Unknown error'}`,
            components: [],
            query_context: { category, type, include_tokens }
          };
          return JSON.stringify(errorResult, null, 2);
        }
      }
    });

    // Component generation tool
    this.mcp.addTool({
      name: 'component_generate',
      description: 'Generate a new React component using Tagaddod Design System tokens',
      parameters: z.object({
        spec: z.string().describe('Detailed specification of the component to generate'),
        component_name: z.string().describe('Name for the new component (PascalCase)'),
        include_styles: z.boolean().optional().default(true).describe('Include CSS Module styles'),
        include_story: z.boolean().optional().default(false).describe('Include Storybook story'),
      }),
      execute: async ({ spec, component_name, include_styles = true, include_story = false }: { spec: string; component_name: string; include_styles?: boolean; include_story?: boolean }) => {
        try {
          console.log(`🛠️ Generating component: ${component_name}`);
          
          const componentCode = this.generateComponentCode(spec, component_name);
          const stylesCode = include_styles ? this.generateStylesCode(spec, component_name) : null;
          const storyCode = include_story ? this.generateStoryCode(spec, component_name) : null;

          const generationResult = {
            component: {
              fileName: `${component_name}.tsx`,
              code: componentCode
            },
            styles: stylesCode ? {
              fileName: `${component_name}.module.css`,
              code: stylesCode
            } : null,
            story: storyCode ? {
              fileName: `${component_name}.stories.tsx`,
              code: storyCode
            } : null,
            usage_instructions: this.generateUsageInstructions(component_name),
            design_tokens_used: this.extractUsedTokens(spec)
          };
          
          return JSON.stringify(generationResult, null, 2);
        } catch (error) {
          console.error('Generation error:', error);
          const errorResult = {
            error: `Component generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
            component: null
          };
          return JSON.stringify(errorResult, null, 2);
        }
      }
    });

    // Health check tool
    this.mcp.addTool({
      name: 'health_check',
      description: 'Check the health status of the MCP server and its dependencies',
      parameters: z.object({}),
      execute: async () => {
        try {
          // Test Supabase connection
          const { data, error } = await this.supabase
            .from('component_docs')
            .select('count(*)')
            .limit(1);

          const dbStatus = error ? 'error' : 'healthy';
          const tokensLoaded = Object.keys(this.tokens).length > 0;

          const healthResult = {
            status: 'healthy',
            database: dbStatus,
            tokens_loaded: tokensLoaded,
            client_side_search: true,
            component_count: data?.[0]?.count || 0,
            timestamp: new Date().toISOString()
          };
          
          return JSON.stringify(healthResult, null, 2);
        } catch (error) {
          const errorResult = {
            status: 'error',
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString()
          };
          return JSON.stringify(errorResult, null, 2);
        }
      }
    });
  }

  /**
   * Categorize component based on its name and metadata
   */
  private categorizeComponent(comp: ComponentSearchResult): string {
    const name = comp.component_name.toLowerCase();
    const content = comp.content.toLowerCase();
    
    if (name.includes('input') || name.includes('select') || name.includes('checkbox') || 
        name.includes('radio') || name.includes('form') || name.includes('textinput') ||
        content.includes('form') || content.includes('input')) {
      return 'forms';
    }
    
    if (name.includes('sidebar') || name.includes('topbar') || name.includes('menu') || 
        name.includes('navigation') || name.includes('tabs') ||
        content.includes('navigation') || content.includes('menu')) {
      return 'navigation';
    }
    
    if (name.includes('modal') || name.includes('drawer') || name.includes('popover') ||
        name.includes('tooltip') || name.includes('sonner') ||
        content.includes('overlay') || content.includes('popup')) {
      return 'feedback';
    }
    
    if (name.includes('table') || name.includes('pagination') || name.includes('listbox') ||
        content.includes('data') || content.includes('list')) {
      return 'data';
    }
    
    if (name.includes('aspectratio') || name.includes('avatar') || name.includes('logo') ||
        content.includes('image') || content.includes('media')) {
      return 'media';
    }
    
    if (name.includes('separator') || content.includes('layout') || content.includes('container')) {
      return 'layout';
    }
    
    return 'layout'; // default category
  }

  /**
   * Extract usage patterns from component content and metadata
   */
  private extractUsagePatterns(comp: ComponentSearchResult): string[] {
    const patterns: string[] = [];
    const content = comp.content.toLowerCase();
    const name = comp.component_name.toLowerCase();
    
    // Common patterns based on component type
    if (name.includes('button')) {
      patterns.push('form submission', 'user actions', 'navigation triggers');
    }
    if (name.includes('input') || name.includes('textinput')) {
      patterns.push('data entry', 'form fields', 'user input');
    }
    if (name.includes('modal') || name.includes('drawer')) {
      patterns.push('overlays', 'dialogs', 'temporary content');
    }
    if (name.includes('table')) {
      patterns.push('data display', 'structured content', 'sortable data');
    }
    if (name.includes('sidebar') || name.includes('topbar')) {
      patterns.push('navigation', 'app layout', 'persistent UI');
    }
    
    // Extract from tags if available
    if (comp.metadata?.tags) {
      patterns.push(...comp.metadata.tags.map((tag: string) => tag.toLowerCase()));
    }
    
    return [...new Set(patterns)]; // Remove duplicates
  }

  /**
   * Extract component variants from metadata
   */
  private extractVariants(comp: ComponentSearchResult): Record<string, any> {
    const variants: Record<string, any> = {};
    
    if (comp.metadata?.args) {
      Object.entries(comp.metadata.args).forEach(([key, value]) => {
        if (key.includes('variant') || key.includes('size') || key.includes('color') || key.includes('type')) {
          variants[key] = value;
        }
      });
    }
    
    return variants;
  }

  /**
   * Generate multiple usage examples for a component
   */
  private generateUsageExamples(comp: ComponentSearchResult): string[] {
    const examples: string[] = [];
    const componentName = comp.component_name.split('/').pop() || comp.component_name;
    
    if (comp.component_type === 'story' && comp.metadata?.args) {
      // Basic example
      const basicProps = Object.entries(comp.metadata.args)
        .map(([key, value]) => `${key}={${typeof value === 'string' ? `"${value}"` : value}}`)
        .join(' ');
      examples.push(`<${componentName} ${basicProps} />`);
      
      // Variations if variants exist
      const variants = this.extractVariants(comp);
      if (Object.keys(variants).length > 0) {
        examples.push(`<${componentName} variant="secondary" size="large" />`);
      }
    } else if (comp.component_type === 'token') {
      examples.push(`style={{ color: 'var(--t-color-text-primary)' }}`);
      examples.push(`className="t-space-400"`);
    } else {
      examples.push(`<${componentName} />`);
    }
    
    return examples;
  }

  /**
   * Extract accessibility notes from component content
   */
  private extractAccessibilityNotes(comp: ComponentSearchResult): string[] {
    const notes: string[] = [];
    const content = comp.content.toLowerCase();
    
    if (content.includes('aria-') || content.includes('accessibility') || content.includes('a11y')) {
      notes.push('Has accessibility support');
    }
    if (content.includes('keyboard') || content.includes('focus')) {
      notes.push('Keyboard navigation supported');
    }
    if (content.includes('screen reader')) {
      notes.push('Screen reader optimized');
    }
    
    return notes;
  }

  /**
   * Find related components based on name patterns and categories
   */
  private findRelatedComponents(comp: ComponentSearchResult, allComponents: ComponentSearchResult[]): string[] {
    const category = this.categorizeComponent(comp);
    const related = allComponents
      .filter(other => 
        other.id !== comp.id && 
        this.categorizeComponent(other) === category
      )
      .map(other => other.component_name)
      .slice(0, 3); // Limit to 3 related components
    
    return related;
  }

  /**
   * Get available categories from components
   */
  private getAvailableCategories(components: ComponentSearchResult[]): string[] {
    const categories = new Set(components.map(comp => this.categorizeComponent(comp)));
    return Array.from(categories).sort();
  }

  /**
   * Generate import statement for a component
   */
  private generateImportStatement(result: ComponentSearchResult): string {
    if (result.component_type === 'story') {
      const componentName = result.component_name.split('/').pop() || result.component_name;
      return `import { ${componentName} } from '@tagaddod-design/react';`;
    } else if (result.component_type === 'token') {
      return `import '@tagaddod-design/tokens/tokens.css';`;
    }
    return `// Import from component file: ${result.file_path}`;
  }

  /**
   * Generate usage example for a component
   */
  private generateUsageExample(result: ComponentSearchResult): string {
    if (result.component_type === 'story' && result.metadata?.args) {
      const componentName = result.component_name.split('/').pop() || result.component_name;
      const props = Object.entries(result.metadata.args)
        .map(([key, value]) => `${key}={${typeof value === 'string' ? `"${value}"` : value}}`)
        .join(' ');
      return `<${componentName} ${props} />`;
    } else if (result.component_type === 'token') {
      return `style={{ color: 'var(--t-color-text-primary)' }}`;
    }
    return '// Usage example not available';
  }

  /**
   * Extract description from content
   */
  private extractDescription(content: string): string {
    const lines = content.split('\n');
    const descriptionLine = lines.find(line => 
      line.toLowerCase().includes('description') || 
      line.toLowerCase().includes('component:')
    );
    return descriptionLine || lines[0] || 'No description available';
  }

  /**
   * Generate React component code
   */
  private generateComponentCode(spec: string, componentName: string): string {
    return `import React from 'react';
import styles from './${componentName}.module.css';

interface ${componentName}Props {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  children,
  className,
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  return (
    <div 
      className={\`\${styles.${componentName.toLowerCase()}} \${styles[\`variant-\${variant}\`]} \${styles[\`size-\${size}\`]} \${className || ''}\`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ${componentName};`;
  }

  /**
   * Generate CSS Module styles using design tokens
   */
  private generateStylesCode(spec: string, componentName: string): string {
    return `.${componentName.toLowerCase()} {
  /* Base styles using Tagaddod design tokens */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--t-border-radius-200);
  font-family: var(--t-font-family-primary);
  transition: all var(--t-motion-duration-150) var(--t-motion-easing-ease);
  border: 1px solid var(--t-color-border-secondary);
  background-color: var(--t-color-fill-base-primary);
  color: var(--t-color-text-primary);
}

.${componentName.toLowerCase()}:hover {
  background-color: var(--t-color-fill-base-secondary);
  border-color: var(--t-color-border-primary);
}

/* Variant styles */
.variant-primary {
  background-color: var(--t-color-fill-brand-primary);
  border-color: var(--t-color-border-brand-primary);
  color: var(--t-color-text-inverse);
}

.variant-secondary {
  background-color: var(--t-color-fill-base-secondary);
  border-color: var(--t-color-border-secondary);
  color: var(--t-color-text-secondary);
}

.variant-tertiary {
  background-color: transparent;
  border-color: transparent;
  color: var(--t-color-text-link);
}

/* Size styles */
.size-small {
  padding: var(--t-space-200) var(--t-space-300);
  font-size: var(--t-font-size-100);
}

.size-medium {
  padding: var(--t-space-300) var(--t-space-400);
  font-size: var(--t-font-size-200);
}

.size-large {
  padding: var(--t-space-400) var(--t-space-500);
  font-size: var(--t-font-size-300);
}

/* RTL support */
:global([dir="rtl"]) .${componentName.toLowerCase()} {
  text-align: right;
  font-family: var(--t-font-family-arabic);
}`;
  }

  /**
   * Generate Storybook story
   */
  private generateStoryCode(spec: string, componentName: string): string {
    return `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '${spec.replace(/'/g, "\\'")}',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '${componentName}',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: '${componentName}',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: '${componentName}',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: '${componentName}',
    variant: 'primary',
    size: 'large',
  },
};`;
  }

  /**
   * Generate usage instructions
   */
  private generateUsageInstructions(componentName: string): string {
    return `## Usage Instructions for ${componentName}

1. **Import the component:**
   \`\`\`tsx
   import { ${componentName} } from '@tagaddod-design/react';
   \`\`\`

2. **Basic usage:**
   \`\`\`tsx
   <${componentName}>Content</${componentName}>
   \`\`\`

3. **With props:**
   \`\`\`tsx
   <${componentName} variant="primary" size="medium">
     Your content here
   </${componentName}>
   \`\`\`

4. **Styling:**
   The component uses Tagaddod design tokens and will automatically adapt to theme changes.

5. **RTL Support:**
   The component includes built-in RTL support and will adapt font families and text direction automatically.`;
  }

  /**
   * Extract design tokens mentioned in the spec
   */
  private extractUsedTokens(spec: string): string[] {
    const tokenPattern = /--t-[\w-]+/g;
    const matches = spec.match(tokenPattern) || [];
    return [...new Set(matches)];
  }

  /**
   * Start the MCP server
   */
  async start(): Promise<void> {
    console.log('🚀 Starting Tagaddod Design System MCP Server...');
    
    try {
      await this.mcp.start({
        transportType: 'stdio'
      });
      
      console.log('✅ MCP Server started successfully!');
      console.log(`📡 Using stdio transport for MCP communication`);
      console.log(`📚 Design tokens loaded: ${Object.keys(this.tokens).length > 0 ? 'Yes' : 'No'}`);
    } catch (error) {
      console.error('❌ Failed to start MCP server:', error);
      process.exit(1);
    }
  }
}

// Start the server
const server = new TagaddodMCPServer();
server.start().catch(console.error);