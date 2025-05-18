import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [react(), libInjectCss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'TagaddodReact',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    minify: false,
    sourcemap: true
  },
  resolve: {
    alias: {
      '@tagaddod/tokens/css/tokens.css': path.resolve(__dirname, '../tokens/dist/css/tokens.css'),
      '@tagaddod/tokens/css': path.resolve(__dirname, '../tokens/dist/css/tokens.css'),
      '@tagaddod/tokens/tagaddod': path.resolve(__dirname, '../tokens/dist/tagaddod/vars.css'),
      '@tagaddod/tokens/greenpan': path.resolve(__dirname, '../tokens/dist/greenpan/vars.css'),
      '@tagaddod/tokens': path.resolve(__dirname, '../tokens/dist')
    }
  },
  css: {
    preprocessorOptions: {
      css: {
        // Enable @import CSS syntax
        modules: false
      }
    }
  }
});