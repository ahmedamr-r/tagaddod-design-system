# VS Code MCP Integration Setup

This guide will help you set up the Tagaddod Design System MCP server with VS Code for AI-assisted component development.

## Prerequisites

1. **VS Code with Claude Code extension**: Install the Claude Code extension from the VS Code marketplace
2. **Node.js**: Ensure Node.js is installed (version 16+)
3. **OpenAI API Key**: Required for component search functionality (optional for basic usage)

## Setup Steps

### 1. Install Dependencies

```bash
cd /Users/me-mac/Downloads/t-design-system/tagaddod-design-system/mcp-server
npm install
```

### 2. Build the Project

```bash
npm run build
```

### 3. Configure Environment Variables

Create or update `.env` file:

```bash
# Required for component search (get from OpenAI)
OPENAI_API_KEY=your_openai_api_key_here

# Server configuration
PORT=3001
NODE_ENV=production

# Supabase (already configured)
SUPABASE_URL=https://ynkrfsaaqhkmoiwyyyqa.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlua3Jmc2FhcWhrbW9pd3l5eXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4ODg3MzAsImV4cCI6MjA2NzQ2NDczMH0.pLo2-Jxm0_r7I6Z-69vHtT68ldNIP8eFR20VkciO1l0
```

### 4. Build Documentation (One-time setup)

```bash
npm run build-docs
```

### 5. Populate Database (Optional - requires OpenAI API key)

```bash
npm run ingest
```

### 6. Configure VS Code MCP Client

#### Option A: Direct Command Integration

Add this to your VS Code settings or Claude Code configuration:

```json
{
  "mcpServers": {
    "tagaddod-design-system": {
      "command": "node",
      "args": ["/Users/me-mac/Downloads/t-design-system/tagaddod-design-system/mcp-server/dist/src/server.js"],
      "env": {
        "NODE_ENV": "production",
        "PORT": "3001"
      }
    }
  }
}
```

#### Option B: HTTP Transport (Recommended)

1. Start the MCP server:
```bash
npm start
```

2. Configure VS Code to connect to HTTP endpoint:
```json
{
  "mcpServers": {
    "tagaddod-design-system": {
      "transport": "http",
      "url": "http://localhost:3001/mcp"
    }
  }
}
```

## Available Tools

Once configured, you'll have access to these MCP tools in VS Code:

### 1. `component_search`
Search for existing components in the Tagaddod Design System.

**Parameters:**
- `query` (string): Search query describing the component needed
- `k` (number, optional): Number of results to return (default: 5)
- `type` (enum, optional): Filter by type ('story', 'component', 'token', 'all')

**Example usage in VS Code:**
```
"Search for a button component in the design system"
```

### 2. `component_generate`
Generate a new React component using design system tokens.

**Parameters:**
- `spec` (string): Detailed specification of the component
- `component_name` (string): Name for the component (PascalCase)
- `include_styles` (boolean, optional): Include CSS Module styles (default: true)
- `include_story` (boolean, optional): Include Storybook story (default: false)

**Example usage in VS Code:**
```
"Generate a Card component with title, description, and action button using design tokens"
```

### 3. `health_check`
Check the health status of the MCP server and its dependencies.

## Usage Examples

### Finding Components
1. Open VS Code with a project
2. Use Claude Code to ask: "What button components are available in the design system?"
3. The MCP will search and provide import statements and usage examples

### Generating Components
1. Ask Claude Code: "Create a notification banner component using the design system"
2. The MCP will generate:
   - TypeScript React component
   - CSS Module styles with design tokens
   - Optional Storybook story
   - Usage instructions

### Using Design Tokens
1. Ask: "What color tokens are available for backgrounds?"
2. Get a list of available tokens with CSS usage examples

## Troubleshooting

### Server Won't Start
- Check if port 3001 is available: `lsof -ti:3001`
- Verify Node.js version: `node --version`
- Check logs for specific errors

### Component Search Not Working
- Ensure OpenAI API key is configured
- Check if database is populated: `npm run ingest`
- Verify Supabase connection

### VS Code Not Connecting
- Ensure Claude Code extension is installed and updated
- Check MCP server configuration in VS Code settings
- Restart VS Code after configuration changes

## Development Mode

For development and testing:

```bash
# Start in development mode with hot reload
npm run dev

# Build documentation
npm run build-docs

# Test server health
curl http://localhost:3000/mcp
```

## Production Deployment

See `DEPLOYMENT.md` for Vercel deployment instructions.