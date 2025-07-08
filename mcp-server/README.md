# Tagaddod Design System MCP Server

A Model Context Protocol (MCP) server that enables AI agents to search, discover, and generate components using the Tagaddod Design System. This server provides semantic search capabilities for existing components and AI-powered component generation using design tokens.

## Features

- **🧠 Client-Side Intelligence**: Claude analyzes component catalog for smart matching
- **🛠️ Token-Aware Generation**: Generate new components using Tagaddod design tokens
- **📚 Rich Component Catalog**: Complete metadata with usage patterns and relationships
- **🎨 Design Token Integration**: Access the complete Tagaddod token system
- **💻 VS Code Compatible**: Works with Claude Code and MCP clients
- **⚡ No External Dependencies**: No OpenAI API required - uses Claude's intelligence
- **🔒 Secure**: Simple database schema without sensitive embeddings

## Quick Start

### 1. Environment Setup

```bash
# Environment variables (Supabase already configured)
# No API keys required - client-side intelligence
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build Documentation

```bash
# Extract Storybook docs and build tokens
npm run build-docs

# Ingest into vector database
npm run ingest
```

### 4. Start Server

```bash
# Development
npm run dev

# Production
npm run build && npm start
```

## MCP Tools

### `component_catalog`
Get the complete catalog of available components with rich metadata for intelligent component discovery.

**Parameters:**
- `category` (enum, optional): Filter by category - 'forms', 'navigation', 'layout', 'feedback', 'data', 'media', or 'all'
- `type` (enum, optional): Filter by type - 'story', 'component', 'token', or 'all'
- `include_tokens` (boolean, optional): Include design tokens in the catalog

**Example:**
```json
{
  "tool": "component_catalog",
  "arguments": {
    "category": "forms",
    "type": "story",
    "include_tokens": false
  }
}
```

**Response:**
```json
{
  "query_context": {
    "category": "forms",
    "type": "story",
    "total_components": 15
  },
  "components": [
    {
      "name": "Button",
      "type": "story",
      "category": "forms",
      "description": "Versatile button component with multiple variants",
      "usage_patterns": ["form submission", "user actions", "navigation triggers"],
      "props": {"variant": "primary", "size": "medium"},
      "variants": {"variant": "primary", "size": "medium"},
      "import_statement": "import { Button } from '@tagaddod-design/react';",
      "usage_examples": ["<Button variant=\"primary\" size=\"medium\" />"],
      "tags": ["autodocs"],
      "accessibility_notes": ["Keyboard navigation supported"],
      "related_components": ["TextInput", "Checkbox"]
    }
  ],
  "categories": ["forms", "navigation", "layout"],
  "design_tokens": "... (if include_tokens: true)"
}
```

### `component_generate`
Generate a new React component using Tagaddod design tokens.

**Parameters:**
- `spec` (string): Detailed specification of the component
- `component_name` (string): Name for the component (PascalCase)
- `include_styles` (boolean, optional): Include CSS Module styles (default: true)
- `include_story` (boolean, optional): Include Storybook story (default: false)

**Example:**
```json
{
  "tool": "component_generate",
  "arguments": {
    "spec": "A card component with rounded corners, shadow, and space for content",
    "component_name": "ContentCard",
    "include_styles": true,
    "include_story": true
  }
}
```

**Response:**
```json
{
  "component": {
    "fileName": "ContentCard.tsx",
    "code": "import React from 'react';\n// ... component code"
  },
  "styles": {
    "fileName": "ContentCard.module.css",
    "code": ".contentcard { /* styles using design tokens */ }"
  },
  "story": {
    "fileName": "ContentCard.stories.tsx", 
    "code": "// Storybook story code"
  },
  "usage_instructions": "## Usage Instructions...",
  "design_tokens_used": ["--t-color-fill-base-primary", "--t-space-400"]
}
```

### `health_check`
Check server health and dependencies.

**Response:**
```json
{
  "status": "healthy",
  "database": "healthy",
  "tokens_loaded": true,
  "client_side_search": true,
  "component_count": 332,
  "timestamp": "2025-07-07T11:45:30.056Z"
}
```

## VS Code Integration

### 1. Configure VS Code

The MCP server uses **stdio transport** for proper VS Code integration. Add the following configuration to your VS Code MCP settings:

**Option 1: Global VS Code Settings**
Add to your VS Code `settings.json`:

```json
{
  "mcp": {
    "mcpServers": {
      "tagaddod-design-system": {
        "command": "node",
        "args": [
          "/Users/me-mac/Downloads/t-design-system/tagaddod-design-system/mcp-server/dist/src/server.js"
        ],
        "env": {
          "SUPABASE_URL": "https://ynkrfsaaqhkmoiwyyyqa.supabase.co",
          "SUPABASE_ANON_KEY": "your-supabase-anon-key"
        },
        "description": "Tagaddod Design System MCP Server - provides component search and generation via stdio transport"
      }
    }
  }
}
```

**Option 2: Use Provided Config File**
Copy the configuration from `vscode-mcp-config.json` in this directory.

### 2. Testing the Integration

Use the provided test script to verify stdio communication:

```bash
# Test MCP server stdio communication
npm run test-stdio
```

This will verify:
- ✅ Server starts with stdio transport
- ✅ MCP protocol initialization 
- ✅ All tools are accessible (component_catalog, component_generate, health_check)
- ✅ Design tokens are loaded correctly
- ✅ Component catalog returns all available components

### 3. Usage in VS Code

1. Open VS Code with Claude Code extension
2. The MCP server will be automatically connected via stdio
3. Ask for components: "I need a button for form submission"
4. Claude will:
   - Call `component_catalog` to get all available components
   - Analyze the catalog using its intelligence
   - Find the best matching component (Button with form submission patterns)
   - Provide import statements and usage examples
   - Generate new components if no suitable match exists

### 4. Important Notes

- **No HTTP required**: The server uses stdio transport (JSON-RPC over stdin/stdout)
- **No Vercel deployment needed**: VS Code communicates directly with the local process
- **Automatic startup**: VS Code will start/stop the server as needed
- **Environment variables**: Configure Supabase credentials in the MCP server config

## Development

### Project Structure

```
mcp-server/
├── src/
│   └── server.ts           # Main MCP server
├── scripts/
│   ├── build-docs.ts       # Extract Storybook + tokens
│   └── ingest.ts          # Embed and store in database
├── docs/                  # Generated documentation
├── package.json
├── tsconfig.json
├── vercel.json           # Deployment config
└── README.md
```

### Database Schema

```sql
-- Component documentation for client-side analysis
CREATE TABLE component_docs (
    id SERIAL PRIMARY KEY,
    component_name VARCHAR(255) NOT NULL,
    component_type VARCHAR(100) NOT NULL, -- 'story', 'component', 'token'
    file_path TEXT NOT NULL,
    content TEXT NOT NULL,
    metadata JSONB DEFAULT '{}',
    content_hash TEXT, -- Simple hash for change detection
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Adding New Components

1. Add components to the design system as usual
2. Run documentation build: `npm run build-docs`
3. Ingest into database: `npm run ingest`
4. Components are now searchable via MCP

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build TypeScript
- `npm run build-docs` - Extract Storybook and build tokens
- `npm run ingest` - Embed and store documentation
- `npm run setup` - Full setup (build-docs + ingest)

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Environment Variables

- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Supabase anonymous key
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Security

- Simple database schema without sensitive embeddings
- Anonymous key provides controlled access
- No external API keys stored
- Input validation with Zod schemas
- Client-side intelligence (no server-side AI processing)

## Troubleshooting

### Common Issues

**"Component catalog empty"**
- Run `npm run ingest` to populate the database
- Ensure `npm run build-docs` was run first

**"Storybook index not found"**
- Run `npm run build-docs` to extract documentation

**"Database connection failed"**
- Check `SUPABASE_URL` and `SUPABASE_ANON_KEY` values

**"Design tokens not loaded"**
- Ensure `npm run build-docs` completed successfully
- Check that `docs/tokens.json` exists

### Logs

Check server logs for detailed error information:

```bash
# Development
npm run dev

# Production (Vercel)
vercel logs
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test locally
4. Submit a pull request

## License

MIT License - see LICENSE file for details