import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../../react/src/**/*.stories.@(js|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-design-token',
    '@tagaddod/token-editor/register'
  ],
  framework: { 
    name: '@storybook/react-vite', 
    options: {} 
  },
  viteFinal: (config) => ({ ...config })
};

export default config;
