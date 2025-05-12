# Token Admin

A local-first administration interface for managing Tagaddod Design System tokens.

## Features

- **CRUD Operations**: Create, read, update, and delete design tokens directly in source files
- **Live Preview**: See built CSS variables after compilation
- **Build Integration**: One-click build button to compile tokens using Style Dictionary
- **Two Views**:
  - Source Tokens: Editable JSON token values
  - Built Tokens: Read-only view of compiled CSS variables

## Usage

1. **Start the development server**:
   ```bash
   yarn workspace token-admin dev
   ```

2. **Access the admin interface**:
   Open [http://localhost:3000](http://localhost:3000)

3. **Edit tokens**:
   - Click on any value in the Source Tokens tab to edit
   - Make changes to values, types, or descriptions
   - Click "Save Changes" to write back to source files

4. **Build tokens**:
   - Click "Build Tokens" to run the Style Dictionary build
   - This compiles source tokens into CSS variables
   - View the results in the "Built Tokens" tab

## Architecture

- Uses Next.js 15 with App Router
- TanStack Table for data grid functionality  
- Zustand for state management
- Direct file system access via API routes
- Executes build commands through Node.js child processes

## Directory Structure

```
apps/token-admin/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── tokens/      # Read/write token files
│   │   │   └── build/       # Execute token builds
│   │   └── page.tsx         # Main UI with tabs
│   ├── components/
│   │   └── TokenTable.tsx   # CRUD table component
│   └── lib/
│       └── tokenStore.ts    # Zustand store
```

## Notes

- Changes are saved directly to source files in `packages/tokens/src/`
- The build process runs `yarn workspace @tagaddod/tokens build`
- Built tokens are read from `packages/tokens/dist/css/tokens.css`
- All operations are local - no GitHub integration required
