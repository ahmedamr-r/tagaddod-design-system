import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias the built package to use local directory
      '@tagaddod-design/react': path.resolve(__dirname, '../dist'),
      '@tagaddod-design/tokens': path.resolve(__dirname, '../../tokens/dist')
    }
  }
});
