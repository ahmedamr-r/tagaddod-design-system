import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@tagaddod/react': path.resolve(__dirname, '../react/src'),
      '@tagaddod/tokens': path.resolve(__dirname, '../tokens/dist'),
    },
  },
  optimizeDeps: {
    include: [
      '@tagaddod/react',
      '@tagaddod/tokens',
      '@storybook/react',
      '@storybook/react-vite',
      'react',
      'react-dom',
    ],
    force: true,
  },
  server: {
    fs: {
      allow: [
        // Allow access to parent directories for module resolution
        path.resolve(__dirname, '../../'),
        path.resolve(__dirname, '../../../'),
      ],
    },
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
});
