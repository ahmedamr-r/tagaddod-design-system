import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'TagaddodReact',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'cjs' ? 'cjs' : 'js'}`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /@radix-ui\/.*/,
        '@tabler/icons-react',
        '@tanstack/react-table',
        'clsx'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        // Extract CSS to separate files
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles/[name][extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    },
    // Enable CSS code splitting to extract component styles
    cssCodeSplit: true,
    sourcemap: true,
    emptyOutDir: true,
    minify: process.env.NODE_ENV === 'production' ? 'terser' : false,
    reportCompressedSize: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    postcss: './postcss.config.cjs'
  },
  server: {
    port: 3001,
    open: false
  }
});
