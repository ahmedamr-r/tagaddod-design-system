# Deployment Guide

This guide covers deploying the Tagaddod Design System MCP server to Vercel for production use.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Vercel CLI**: Install with `npm install -g vercel`
3. **Environment Variables**: Prepare your API keys

## Deployment Steps

### 1. Prepare the Project

```bash
# Ensure you're in the MCP server directory
cd /Users/me-mac/Downloads/t-design-system/tagaddod-design-system/mcp-server

# Install dependencies
npm install

# Build the project
npm run build

# Build documentation
npm run build-docs
```

### 2. Configure Environment Variables

Set up these environment variables in Vercel:

```bash
# Add to Vercel project settings
SUPABASE_URL=https://ynkrfsaaqhkmoiwyyyqa.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlua3Jmc2FhcWhrbW9pd3l5eXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4ODg3MzAsImV4cCI6MjA2NzQ2NDczMH0.pLo2-Jxm0_r7I6Z-69vHtT68ldNIP8eFR20VkciO1l0
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=production
```

### 3. Deploy to Vercel

#### Option A: Vercel CLI (Recommended)

```bash
# Login to Vercel
vercel login

# Deploy
vercel --prod

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name: tagaddod-design-system-mcp
# - Directory: ./
```

#### Option B: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect repository in Vercel dashboard
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 4. Configure Environment Variables in Vercel

Via Vercel Dashboard:
1. Go to your project settings
2. Navigate to Environment Variables
3. Add the following:

| Name | Value | Environment |
|------|-------|-------------|
| `SUPABASE_URL` | `https://ynkrfsaaqhkmoiwyyyqa.supabase.co` | Production |
| `SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | Production |
| `OPENAI_API_KEY` | `sk-...` | Production |
| `NODE_ENV` | `production` | Production |

### 5. Test the Deployment

Once deployed, test the endpoints:

```bash
# Replace with your Vercel URL
VERCEL_URL="https://tagaddod-design-system-mcp.vercel.app"

# Test health endpoint
curl "${VERCEL_URL}/health"

# Test MCP endpoint
curl "${VERCEL_URL}/mcp"
```

### 6. Update VS Code Configuration

Update your VS Code MCP configuration to use the production URL:

```json
{
  "mcpServers": {
    "tagaddod-design-system": {
      "transport": "http",
      "url": "https://tagaddod-design-system-mcp.vercel.app/mcp",
      "description": "Production Tagaddod Design System MCP Server"
    }
  }
}
```

## Production Considerations

### Performance Optimization

1. **Caching**: Vercel automatically caches static assets
2. **Edge Locations**: Your MCP server will be deployed globally
3. **Cold Start**: First request may be slower due to serverless cold start

### Monitoring

1. **Vercel Analytics**: Monitor request performance
2. **Function Logs**: Check Vercel function logs for errors
3. **Uptime Monitoring**: Consider external monitoring services

### Security

1. **Environment Variables**: Never commit API keys to git
2. **CORS**: Configure CORS if needed for browser access
3. **Rate Limiting**: Consider implementing rate limiting for production

### Scaling

1. **Concurrent Requests**: Vercel functions handle multiple concurrent requests
2. **Execution Time**: Functions timeout after 30 seconds (configured in vercel.json)
3. **Memory**: Default 1024MB, can be increased if needed

## Troubleshooting

### Build Failures

- Check TypeScript compilation: `npm run build`
- Verify all dependencies are in package.json
- Check Node.js version compatibility

### Runtime Errors

- Check Vercel function logs
- Verify environment variables are set
- Test locally with `vercel dev`

### Connection Issues

- Verify MCP endpoint is accessible
- Check CORS configuration if needed
- Validate SSL certificates

## Updating the Deployment

```bash
# Make changes to your code
# Build and deploy
npm run build
vercel --prod
```

## Rollback

```bash
# List deployments
vercel ls

# Promote a previous deployment
vercel promote <deployment-url>
```

## Cost Considerations

- **Vercel Pro**: Required for production use
- **Function Executions**: Pay per execution
- **Bandwidth**: Pay per GB transferred
- **Supabase**: Monitor database usage
- **OpenAI**: Pay per API call for embeddings

## Alternative Deployment Options

If Vercel doesn't meet your needs, consider:

1. **Railway**: Simple Node.js deployment
2. **Heroku**: Traditional PaaS
3. **DigitalOcean Apps**: Container deployment
4. **AWS Lambda**: Serverless with more control