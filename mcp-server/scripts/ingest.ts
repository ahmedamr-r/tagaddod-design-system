#!/usr/bin/env node

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { createClient } from '@supabase/supabase-js';

/**
 * Ingest component documentation into Supabase with embeddings
 */

interface ComponentDoc {
  component_name: string;
  component_type: 'story' | 'component' | 'token';
  file_path: string;
  content: string;
  metadata: Record<string, any>;
}

interface EmbeddingResponse {
  data: Array<{
    embedding: number[];
  }>;
}

class DocumentationIngestor {
  private supabase: any;
  private docsDir: string;

  constructor() {
    // Initialize Supabase client
    const supabaseUrl = process.env.SUPABASE_URL || 'https://ynkrfsaaqhkmoiwyyyqa.supabase.co';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseKey) {
      throw new Error('SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY environment variable is required');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);

    this.docsDir = join(process.cwd(), 'docs');
  }

  /**
   * Generate a simple hash for content (no embedding needed for client-side search)
   */
  private generateContentHash(text: string): string {
    // Simple hash for content identification and change detection
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
  }

  /**
   * Chunk text intelligently for components
   */
  private chunkText(text: string, maxLength: number = 1000): string[] {
    const chunks: string[] = [];
    
    // Split by major sections (props, examples, etc.)
    const sections = text.split(/\n\n+/);
    
    let currentChunk = '';
    
    for (const section of sections) {
      if (currentChunk.length + section.length <= maxLength) {
        currentChunk += (currentChunk ? '\n\n' : '') + section;
      } else {
        if (currentChunk) {
          chunks.push(currentChunk);
          currentChunk = section;
        } else {
          // Section is too long, split by sentences
          const sentences = section.split(/[.!?]+/);
          for (const sentence of sentences) {
            if (currentChunk.length + sentence.length <= maxLength) {
              currentChunk += (currentChunk ? '. ' : '') + sentence;
            } else {
              if (currentChunk) {
                chunks.push(currentChunk);
                currentChunk = sentence;
              }
            }
          }
        }
      }
    }
    
    if (currentChunk) {
      chunks.push(currentChunk);
    }
    
    return chunks.filter(chunk => chunk.trim().length > 0);
  }

  /**
   * Process Storybook documentation
   */
  async processStorybook(): Promise<ComponentDoc[]> {
    console.log('📚 Processing Storybook documentation...');
    
    const storybookPath = join(this.docsDir, 'storybook-index.json');
    if (!existsSync(storybookPath)) {
      throw new Error('Storybook index not found. Run build-docs.ts first.');
    }

    const storybookData = JSON.parse(readFileSync(storybookPath, 'utf8'));
    const docs: ComponentDoc[] = [];

    // Process each story
    for (const [storyId, story] of Object.entries(storybookData.entries || {})) {
      const storyData = story as any;
      
      // Create comprehensive content for the story
      const content = `
Component: ${storyData.title}
Story: ${storyData.name}
Type: ${storyData.type}
Tags: ${storyData.tags?.join(', ') || 'None'}

${storyData.parameters?.docs?.description || ''}

Props: ${JSON.stringify(storyData.args || {}, null, 2)}

Import: import { ${storyData.title.split('/').pop()} } from '@tagaddod-design/react';

Usage Example:
<${storyData.title.split('/').pop()} ${Object.entries(storyData.args || {}).map(([key, value]) => 
  `${key}={${typeof value === 'string' ? `"${value}"` : value}}`
).join(' ')} />
      `.trim();

      docs.push({
        component_name: storyData.title,
        component_type: 'story',
        file_path: storyData.importPath,
        content,
        metadata: {
          story_id: storyId,
          story_name: storyData.name,
          tags: storyData.tags || [],
          args: storyData.args || {},
          parameters: storyData.parameters || {}
        }
      });
    }

    return docs;
  }

  /**
   * Process design tokens
   */
  async processTokens(): Promise<ComponentDoc[]> {
    console.log('🎨 Processing design tokens...');
    
    const tokensPath = join(this.docsDir, 'tokens.json');
    if (!existsSync(tokensPath)) {
      throw new Error('Tokens file not found. Run build-docs.ts first.');
    }

    const tokensData = JSON.parse(readFileSync(tokensPath, 'utf8'));
    const docs: ComponentDoc[] = [];

    // Process each token category
    for (const [category, tokens] of Object.entries(tokensData)) {
      const content = `
Token Category: ${category}
Type: Design Token

Available Tokens:
${JSON.stringify(tokens, null, 2)}

Usage in CSS:
${this.generateTokenUsageExamples(tokens as any, category)}
      `.trim();

      docs.push({
        component_name: `${category}-tokens`,
        component_type: 'token',
        file_path: `tokens/${category}.json`,
        content,
        metadata: {
          category,
          token_count: Object.keys(tokens as any).length,
          tokens: tokens
        }
      });
    }

    return docs;
  }

  /**
   * Generate CSS usage examples for tokens
   */
  private generateTokenUsageExamples(tokens: any, category: string): string {
    const examples: string[] = [];
    
    const flattenTokens = (obj: any, prefix = ''): string[] => {
      const results: string[] = [];
      for (const [key, value] of Object.entries(obj)) {
        const tokenName = prefix ? `${prefix}-${key}` : key;
        if (typeof value === 'object' && value !== null && !value.hasOwnProperty('value')) {
          results.push(...flattenTokens(value, tokenName));
        } else {
          results.push(`--t-${category}-${tokenName}`);
        }
      }
      return results;
    };

    const tokenNames = flattenTokens(tokens);
    
    // Generate usage examples
    if (category === 'color') {
      examples.push(`color: var(--t-color-text-primary);`);
      examples.push(`background-color: var(--t-color-fill-brand-primary);`);
    } else if (category === 'space') {
      examples.push(`margin: var(--t-space-200);`);
      examples.push(`padding: var(--t-space-400);`);
    } else if (category === 'size') {
      examples.push(`width: var(--t-size-400);`);
      examples.push(`height: var(--t-size-600);`);
    }

    return examples.join('\n');
  }

  /**
   * Insert documents into Supabase
   */
  async insertDocuments(docs: ComponentDoc[]): Promise<void> {
    console.log(`📝 Inserting ${docs.length} documents into Supabase...`);
    
    // Clear existing data
    await this.supabase.from('component_docs').delete().neq('id', 0);
    
    // Process in batches
    const batchSize = 10;
    for (let i = 0; i < docs.length; i += batchSize) {
      const batch = docs.slice(i, i + batchSize);
      
      console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(docs.length / batchSize)}`);
      
      for (const doc of batch) {
        try {
          // Generate content hash for change detection
          const contentHash = this.generateContentHash(doc.content);
          
          // Insert into Supabase (without embedding)
          const { error } = await this.supabase
            .from('component_docs')
            .insert({
              component_name: doc.component_name,
              component_type: doc.component_type,
              file_path: doc.file_path,
              content: doc.content,
              metadata: doc.metadata,
              content_hash: contentHash
            });

          if (error) {
            console.error(`Error inserting ${doc.component_name}:`, error);
          } else {
            console.log(`✅ Inserted ${doc.component_name}`);
          }
        } catch (error) {
          console.error(`Error processing ${doc.component_name}:`, error);
        }
        
        // No rate limiting needed (no API calls)
      }
    }
  }

  /**
   * Run the complete ingestion process
   */
  async ingestAll(): Promise<void> {
    console.log('🚀 Starting documentation ingestion...');
    
    try {
      // Process all documentation
      const storybookDocs = await this.processStorybook();
      const tokenDocs = await this.processTokens();
      
      const allDocs = [...storybookDocs, ...tokenDocs];
      
      // Insert into Supabase
      await this.insertDocuments(allDocs);
      
      console.log('✅ Documentation ingestion completed successfully!');
      console.log(`📊 Total documents processed: ${allDocs.length}`);
    } catch (error) {
      console.error('❌ Documentation ingestion failed:', error);
      process.exit(1);
    }
  }
}

// Run the ingestor
if (import.meta.url === `file://${process.argv[1]}`) {
  const ingestor = new DocumentationIngestor();
  ingestor.ingestAll();
}

export { DocumentationIngestor };