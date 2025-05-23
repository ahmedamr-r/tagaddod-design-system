import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin({
      // Inject CSS into JS bundle
      topExecutionPriority: true,
      jsAssetsFilterFunction: (chunkInfo) => {
        // Apply CSS injection only to index.js 
        return chunkInfo.name.includes('index');
      }
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'TagaddodReact',
      formats: ['es'],
      fileName: () => 'esm/index.js'
    },
    cssCodeSplit: false, // Keep CSS in a single file 
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime',
        '@radix-ui/react-avatar',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-form',
        '@radix-ui/react-popover',
        '@radix-ui/react-radio-group',
        '@radix-ui/react-select',
        '@radix-ui/react-switch',
        '@radix-ui/react-tabs',
        '@tabler/icons-react',
        '@tagaddod-design/tokens',
        '@tanstack/react-table',
        'clsx'
      ],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'clsx': 'clsx',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: (chunkInfo) => {
          return `esm/${chunkInfo.name}.js`;
        },
        format: 'es', // Ensure ESM format for all modules
      },
    },
    emptyOutDir: false,
    sourcemap: true,
    reportCompressedSize: true,
  },
  css: {
    postcss: './postcss.config.cjs'
  }
});