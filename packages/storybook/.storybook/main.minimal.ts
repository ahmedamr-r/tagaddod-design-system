import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../../react/src/**/*.stories.@(js|tsx)'],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: { 
    name: '@storybook/react-vite', 
    options: {} 
  },
  viteFinal: (config) => ({ ...config })
};

export default config;
