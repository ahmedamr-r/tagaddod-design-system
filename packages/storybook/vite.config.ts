import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This config is mostly for Storybook, not for a standalone app
export default defineConfig({
  plugins: [react()],
});
