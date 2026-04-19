import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import reactDocgenTypescript from '@joshwooding/vite-plugin-react-docgen-typescript';
import path from 'node:path';

const repoRoot = path.resolve(__dirname, '../..');

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        jsxImportSource: 'react',
      }),
    },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    reactDocgenTypescript({
      tsconfigPath: path.resolve(repoRoot, 'packages/react/tsconfig.json'),
      include: ['../../packages/react/src/components/**/*.tsx'],
      exclude: ['**/*.stories.tsx', '**/*.preview.tsx', '**/*.test.tsx'],
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@tokens-src', replacement: path.resolve(repoRoot, 'packages/tokens/src') },
      {
        find: /^@tagaddod-design\/react$/,
        replacement: path.resolve(repoRoot, 'packages/react/src/index.ts'),
      },
      {
        find: '@storybook/blocks',
        replacement: path.resolve(__dirname, 'src/stubs/storybook-blocks.tsx'),
      },
      {
        find: '@storybook/react',
        replacement: path.resolve(__dirname, 'src/stubs/storybook-react.ts'),
      },
    ],
  },
  server: {
    port: 6010,
    strictPort: true,
    fs: {
      allow: [repoRoot],
    },
  },
  build: {
    outDir: 'dist',
  },
});
