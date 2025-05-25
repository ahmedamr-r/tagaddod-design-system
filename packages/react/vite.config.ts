import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin({
      topExecutionPriority: false,
      jsAssetsFilterFunction: function customJsAssetsfilterFunction(outputChunk) {
        // Apply CSS injection to all JS chunks
        return outputChunk.isEntry || outputChunk.isDynamicEntry;
      },
    })
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
        '@tagaddod-design/tokens',
        '@tanstack/react-table',
        'clsx'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    // Important: Let CSS be extracted first, then injected
    cssCodeSplit: false,
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
