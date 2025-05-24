import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Get all component directories dynamically
const componentsDir = path.resolve(__dirname, 'src/components');
const componentEntries = fs.readdirSync(componentsDir)
  .filter(name => {
    const fullPath = path.join(componentsDir, name);
    return fs.statSync(fullPath).isDirectory() && 
           fs.existsSync(path.join(fullPath, 'index.ts'));
  })
  .reduce((entries, name) => {
    entries[`components/${name}/index`] = path.resolve(componentsDir, name, 'index.ts');
    return entries;
  }, {});

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        ...componentEntries
      },
      name: 'TagaddodReact',
      formats: ['es', 'cjs']
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
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          chunkFileNames: '[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'styles/[name][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          }
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].cjs',
          chunkFileNames: '[name]-[hash].cjs'
        }
      ]
    },
    cssCodeSplit: true, // Enable CSS code splitting for better performance
    emptyOutDir: false,
    sourcemap: true,
    reportCompressedSize: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    postcss: './postcss.config.cjs'
  }
});
