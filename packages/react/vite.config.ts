import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'rollup-plugin-dts';
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
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    sourcemap: true
  },
  resolve: {
    alias: {
      '@tagaddod-design/tokens/css/tokens.css': path.resolve(__dirname, '../tokens/dist/css/tokens.css'),
      '@tagaddod-design/tokens/css': path.resolve(__dirname, '../tokens/dist/css/tokens.css'),
      '@tagaddod-design/tokens/tagaddod': path.resolve(__dirname, '../tokens/dist/tagaddod/vars.css'),
      '@tagaddod-design/tokens/greenpan': path.resolve(__dirname, '../tokens/dist/greenpan/vars.css'),
      '@tagaddod-design/tokens': path.resolve(__dirname, '../tokens/dist')
    }
  }
});
