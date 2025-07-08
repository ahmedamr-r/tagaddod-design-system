#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';
import { glob } from 'glob';

/**
 * Enhanced Documentation Builder that extracts actual story args from CSF files
 * Instead of relying on index.json, this parses .stories.tsx files directly
 */

interface StorybookStory {
  id: string;
  name: string;
  title: string;
  importPath: string;
  tags: string[];
  args: Record<string, any>;
  parameters: Record<string, any>;
  argTypes: Record<string, any>;
  component: string;
  storyName: string;
  description?: string;
}

interface ComponentDocumentation {
  componentName: string;
  stories: StorybookStory[];
  componentPath: string;
  mdxContent?: string;
  componentInfo: {
    props: Record<string, any>;
    description: string;
    usage: string[];
    variants: Record<string, any>;
  };
}

interface TokenData {
  [key: string]: any;
}

class EnhancedDocumentationBuilder {
  private projectRoot: string;
  private outputDir: string;
  private reactPath: string;

  constructor() {
    this.projectRoot = join(process.cwd(), '..');
    this.outputDir = join(process.cwd(), 'docs');
    this.reactPath = join(this.projectRoot, 'packages', 'react');
  }

  /**
   * Parse CSF story files to extract actual args and metadata
   */
  async extractStorybookComponents(): Promise<ComponentDocumentation[]> {
    console.log('🔍 Parsing CSF story files for real args...');
    
    const components: ComponentDocumentation[] = [];
    
    // Find all story files
    const storyFiles = await glob('**/*.stories.{ts,tsx,js,jsx}', {
      cwd: this.reactPath,
      absolute: true
    });

    console.log(`📁 Found ${storyFiles.length} story files`);

    for (const storyFile of storyFiles) {
      try {
        const componentDoc = await this.parseStoryFile(storyFile);
        if (componentDoc) {
          components.push(componentDoc);
        }
      } catch (error) {
        console.warn(`⚠️ Failed to parse ${storyFile}:`, error);
      }
    }

    return components;
  }

  /**
   * Parse individual story file to extract args and metadata
   */
  private async parseStoryFile(filePath: string): Promise<ComponentDocumentation | null> {
    const content = readFileSync(filePath, 'utf8');
    const relativePath = filePath.replace(this.projectRoot, '..');
    
    // Extract component name from file path
    const componentName = basename(filePath, extname(filePath)).replace('.stories', '');
    
    console.log(`📖 Parsing ${componentName}...`);

    // Parse the story file content
    const stories = this.extractStoriesFromContent(content, componentName, relativePath);
    
    if (stories.length === 0) {
      return null;
    }

    // Look for corresponding MDX file
    const mdxPath = filePath.replace('.stories.tsx', '.mdx').replace('.stories.ts', '.mdx');
    let mdxContent = '';
    if (existsSync(mdxPath)) {
      mdxContent = readFileSync(mdxPath, 'utf8');
    }

    return {
      componentName: `Components/${componentName}`,
      stories,
      componentPath: relativePath,
      mdxContent,
      componentInfo: this.extractComponentInfo(content, mdxContent)
    };
  }

  /**
   * Extract stories from CSF file content using enhanced regex parsing
   */
  private extractStoriesFromContent(content: string, componentName: string, filePath: string): StorybookStory[] {
    const stories: StorybookStory[] = [];
    
    // Extract meta information - handle both typed and satisfies formats
    const metaPatterns = [
      /const\s+meta\s*:\s*Meta<[^>]+>\s*=\s*{([^}]+(?:{[^}]*}[^}]*)*)}/s,
      /const\s+meta\s*=\s*{([^}]+(?:{[^}]*}[^}]*)*)}[\s\S]*?satisfies\s+Meta/s
    ];
    
    let title = `Components/${componentName}`;
    let component = componentName;
    let metaArgs: Record<string, any> = {};
    let metaArgTypes: Record<string, any> = {};
    let metaParameters: Record<string, any> = {};
    
    let metaMatch = null;
    for (const pattern of metaPatterns) {
      metaMatch = content.match(pattern);
      if (metaMatch) break;
    }

    if (metaMatch) {
      const metaContent = metaMatch[1];
      
      // Extract title
      const titleMatch = metaContent.match(/title:\s*['"`]([^'"`]+)['"`]/);
      if (titleMatch) {
        title = titleMatch[1];
      }
      
      // Extract component
      const componentMatch = metaContent.match(/component:\s*(\w+)/);
      if (componentMatch) {
        component = componentMatch[1];
      }

      // Extract meta-level args
      const argsMatch = metaContent.match(/args:\s*({[^}]*})/s);
      if (argsMatch) {
        try {
          metaArgs = this.parseObjectLiteral(argsMatch[1]);
        } catch (e) {
          console.warn(`Failed to parse meta args for ${componentName}`);
        }
      }

      // Extract argTypes
      const argTypesMatch = metaContent.match(/argTypes:\s*({[^}]*(?:{[^}]*}[^}]*)*})/s);
      if (argTypesMatch) {
        try {
          metaArgTypes = this.parseObjectLiteral(argTypesMatch[1]);
        } catch (e) {
          console.warn(`Failed to parse argTypes for ${componentName}`);
        }
      }

      // Extract parameters
      const parametersMatch = metaContent.match(/parameters:\s*({[^}]*(?:{[^}]*}[^}]*)*})/s);
      if (parametersMatch) {
        try {
          metaParameters = this.parseObjectLiteral(parametersMatch[1]);
        } catch (e) {
          console.warn(`Failed to parse parameters for ${componentName}`);
        }
      }
    }

    // Extract individual stories
    const storyPattern = /export\s+const\s+(\w+)\s*:\s*Story(?:Obj)?[^=]*=\s*{([^}]+(?:{[^}]*}[^}]*)*)}/gs;
    let match;

    while ((match = storyPattern.exec(content)) !== null) {
      const storyName = match[1];
      const storyContent = match[2];
      
      if (storyName === 'meta' || storyName === 'default') continue;

      // Extract story-level args
      let storyArgs: Record<string, any> = { ...metaArgs };
      const storyArgsMatch = storyContent.match(/args:\s*({[^}]*(?:{[^}]*}[^}]*)*})/s);
      if (storyArgsMatch) {
        try {
          const parsedArgs = this.parseObjectLiteral(storyArgsMatch[1]);
          storyArgs = { ...storyArgs, ...parsedArgs };
        } catch (e) {
          console.warn(`Failed to parse story args for ${storyName}`);
        }
      }

      // Extract story parameters
      let storyParameters: Record<string, any> = { ...metaParameters };
      const storyParametersMatch = storyContent.match(/parameters:\s*({[^}]*(?:{[^}]*}[^}]*)*})/s);
      if (storyParametersMatch) {
        try {
          const parsedParameters = this.parseObjectLiteral(storyParametersMatch[1]);
          storyParameters = { ...storyParameters, ...parsedParameters };
        } catch (e) {
          console.warn(`Failed to parse story parameters for ${storyName}`);
        }
      }

      // Extract tags
      let tags: string[] = ['dev', 'test'];
      if (metaParameters.docs?.tags) {
        tags = [...tags, ...metaParameters.docs.tags];
      }

      stories.push({
        id: `${title}--${storyName.toLowerCase()}`,
        name: storyName,
        title,
        importPath: filePath,
        tags,
        args: storyArgs,
        parameters: storyParameters,
        argTypes: metaArgTypes,
        component,
        storyName,
        description: this.extractStoryDescription(storyContent)
      });
    }

    console.log(`  ✓ Found ${stories.length} stories in ${componentName}`);
    return stories;
  }

  /**
   * Parse JavaScript object literal from string (enhanced implementation)
   */
  private parseObjectLiteral(objStr: string): Record<string, any> {
    try {
      // First attempt: try to extract simple key-value pairs directly
      const result: Record<string, any> = {};
      
      // Enhanced pattern to handle various value types
      const patterns = [
        // String values
        /(\w+):\s*['"`]([^'"`]*?)['"`]/g,
        // Boolean values
        /(\w+):\s*(true|false)(?=\s*[,}])/g,
        // Number values
        /(\w+):\s*(\d+(?:\.\d+)?)(?=\s*[,}])/g,
        // Null/undefined values
        /(\w+):\s*(null|undefined)(?=\s*[,}])/g,
        // Simple identifier values (like variables)
        /(\w+):\s*([a-zA-Z_$][\w$]*)(?=\s*[,}])/g
      ];
      
      for (const pattern of patterns) {
        let match;
        while ((match = pattern.exec(objStr)) !== null) {
          const key = match[1];
          let value: any = match[2];
          
          // Convert value to appropriate type
          if (value === 'true') value = true;
          else if (value === 'false') value = false;
          else if (value === 'null' || value === 'undefined') value = null;
          else if (/^\d+$/.test(value)) value = parseInt(value);
          else if (/^\d*\.\d+$/.test(value)) value = parseFloat(value);
          // Keep string values as-is
          
          result[key] = value;
        }
      }
      
      return result;
    } catch (e) {
      console.warn('Failed to parse object literal:', objStr.substring(0, 100) + '...');
      return {};
    }
  }

  /**
   * Extract description from story content
   */
  private extractStoryDescription(content: string): string {
    // Look for docs.description or comments
    const descMatch = content.match(/docs:\s*{[^}]*description:\s*['"`]([^'"`]+)['"`]/);
    if (descMatch) {
      return descMatch[1];
    }
    
    return '';
  }

  /**
   * Extract rich component information from MDX documentation
   */
  private extractComponentInfo(_content: string, mdxContent: string): any {
    const info = {
      description: '',
      overview: '',
      usage: [] as string[],
      variants: [] as string[],
      props: [] as string[],
      examples: [] as string[],
      best_practices: [] as string[],
      accessibility: [] as string[],
      sections: [] as string[]
    };

    if (!mdxContent) return info;

    // Extract main description (first paragraph after title)
    const titleMatch = mdxContent.match(/# ([^\n]+)/);
    if (titleMatch) {
      info.description = titleMatch[1];
    }

    // Extract overview section
    const overviewMatch = mdxContent.match(/## Overview\s*\n\n(.*?)(?=\n##|\n<|$)/s);
    if (overviewMatch) {
      info.overview = overviewMatch[1].trim();
    }

    // Extract all code examples from code blocks
    const codePattern = /```(?:tsx?|jsx?|javascript)\n(.*?)\n```/gs;
    let codeMatch;
    while ((codeMatch = codePattern.exec(mdxContent)) !== null) {
      const code = codeMatch[1].trim();
      if (code.includes('<') && code.includes('>')) { // Likely JSX
        info.examples.push(code);
      } else {
        info.usage.push(code);
      }
    }

    // Extract section headers to understand document structure
    const sectionPattern = /^## (.+)$/gm;
    let sectionMatch;
    while ((sectionMatch = sectionPattern.exec(mdxContent)) !== null) {
      info.sections.push(sectionMatch[1]);
    }

    // Extract variant information from section headers and content
    const variantSections = ['Variants', 'Sizes', 'States', 'Tones'];
    for (const section of variantSections) {
      const sectionRegex = new RegExp(`## ${section}[\\s\\S]*?(?=\\n##|$)`, 'i');
      const sectionContent = mdxContent.match(sectionRegex);
      if (sectionContent) {
        // Extract subsection headers (### level)
        const subSectionPattern = /### ([^\n]+)/g;
        let subMatch;
        while ((subMatch = subSectionPattern.exec(sectionContent[0])) !== null) {
          info.variants.push(`${section}: ${subMatch[1]}`);
        }
      }
    }

    // Extract prop-related information
    if (mdxContent.includes('<ArgTypes') || mdxContent.includes('## Props')) {
      info.props.push('Component includes comprehensive prop documentation in Storybook');
    }

    // Extract best practices and guidelines
    const practiceKeywords = ['Use', 'Don\'t', 'Avoid', 'Recommended', 'Best practice', 'Guidelines'];
    const lines = mdxContent.split('\n');
    for (const line of lines) {
      for (const keyword of practiceKeywords) {
        if (line.toLowerCase().includes(keyword.toLowerCase()) && line.length < 200) {
          info.best_practices.push(line.trim());
        }
      }
    }

    // Extract accessibility information
    const a11yKeywords = ['accessibility', 'accessible', 'aria-', 'screen reader', 'keyboard', 'focus'];
    for (const line of lines) {
      for (const keyword of a11yKeywords) {
        if (line.toLowerCase().includes(keyword) && line.length < 200) {
          info.accessibility.push(line.trim());
        }
      }
    }

    return info;
  }

  /**
   * Build Style Dictionary tokens (unchanged)
   */
  async buildTokens(): Promise<void> {
    console.log('🎨 Building Style Dictionary tokens...');
    
    try {
      // Build tokens
      console.log('🔧 Building tokens...');
      execSync('yarn build:tokens', { 
        stdio: 'inherit',
        cwd: this.projectRoot 
      });

      // Read built tokens
      const tokensPath = join(this.projectRoot, 'packages', 'tokens', 'dist', 'tokens.json');
      if (existsSync(tokensPath)) {
        const tokensData = JSON.parse(readFileSync(tokensPath, 'utf8'));
        
        // Create output directory
        execSync(`mkdir -p ${this.outputDir}`, { stdio: 'inherit' });
        
        // Write tokens data
        writeFileSync(
          join(this.outputDir, 'tokens.json'),
          JSON.stringify(tokensData, null, 2)
        );
        
        console.log('✅ Design tokens built successfully');
      } else {
        // Fallback: read from source and build manually
        console.log('📋 Building tokens from source...');
        await this.buildTokensFromSource();
      }
    } catch (error) {
      console.error('❌ Failed to build tokens:', error);
      throw error;
    }
  }

  /**
   * Build tokens from source files (unchanged)
   */
  private async buildTokensFromSource(): Promise<void> {
    const tokensSourcePath = join(this.projectRoot, 'packages', 'tokens', 'src');
    
    // Create a combined tokens object
    const combinedTokens: TokenData = {
      core: {},
      semantic: {},
      extras: {}
    };

    // Read core tokens
    const coreDir = join(tokensSourcePath, 'core');
    if (existsSync(coreDir)) {
      const coreFiles = ['color.tokens.json', 'size.tokens.json', 'space.tokens.json', 'borderWidth.tokens.json'];
      for (const file of coreFiles) {
        const filePath = join(coreDir, file);
        if (existsSync(filePath)) {
          const tokenData = JSON.parse(readFileSync(filePath, 'utf8'));
          const tokenName = file.replace('.tokens.json', '');
          combinedTokens.core[tokenName] = tokenData;
        }
      }
    }

    // Read semantic tokens
    const semanticFile = join(tokensSourcePath, 'semantic', 'color.semantic.json');
    if (existsSync(semanticFile)) {
      combinedTokens.semantic.color = JSON.parse(readFileSync(semanticFile, 'utf8'));
    }

    // Read extras tokens
    const extrasDir = join(tokensSourcePath, 'extras');
    if (existsSync(extrasDir)) {
      const extrasFiles = ['motion.tokens.json', 'shadow.tokens.json', 'zIndex.tokens.json'];
      for (const file of extrasFiles) {
        const filePath = join(extrasDir, file);
        if (existsSync(filePath)) {
          const tokenData = JSON.parse(readFileSync(filePath, 'utf8'));
          const tokenName = file.replace('.tokens.json', '');
          combinedTokens.extras[tokenName] = tokenData;
        }
      }
    }

    // Write combined tokens
    writeFileSync(
      join(this.outputDir, 'tokens.json'),
      JSON.stringify(combinedTokens, null, 2)
    );
  }

  /**
   * Build comprehensive documentation with enhanced story extraction
   */
  async buildAll(): Promise<void> {
    console.log('🚀 Building enhanced documentation with real story args...');
    
    try {
      // Create output directory
      execSync(`mkdir -p ${this.outputDir}`, { stdio: 'inherit' });

      // Extract components with real story data
      const components = await this.extractStorybookComponents();
      
      // Write enhanced component data
      writeFileSync(
        join(this.outputDir, 'enhanced-components.json'),
        JSON.stringify(components, null, 2)
      );

      // Also create a flat stories list for compatibility
      const allStories = components.flatMap(comp => comp.stories);
      writeFileSync(
        join(this.outputDir, 'stories-with-args.json'),
        JSON.stringify(allStories, null, 2)
      );

      // Build tokens
      await this.buildTokens();
      
      console.log('✅ Enhanced documentation build completed successfully!');
      console.log(`📂 Enhanced documentation available at: ${this.outputDir}`);
      console.log(`📊 Extracted ${components.length} components with ${allStories.length} stories`);
      console.log(`🎯 All stories now have real args and metadata!`);
    } catch (error) {
      console.error('❌ Enhanced documentation build failed:', error);
      process.exit(1);
    }
  }
}

// Run the enhanced builder
if (import.meta.url === `file://${process.argv[1]}`) {
  const builder = new EnhancedDocumentationBuilder();
  builder.buildAll();
}

export { EnhancedDocumentationBuilder };