const path = require('path');

module.exports = {
  stories: [
    '../../react/src/**/*.mdx',
    '../../react/src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            // Enable MDX v3 syntax support
            remarkPlugins: [],
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(__dirname, '../../../tsconfig.json'),
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => 
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  viteFinal: async (config) => {
    // Resolve aliases for development
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias) config.resolve.alias = {};
    
    // Set a unique cache directory for Storybook
    config.cacheDir = path.join(__dirname, '../node_modules/.cache/vite-storybook');
    
    // Clear optimized deps for fresh start
    if (!config.optimizeDeps) config.optimizeDeps = {};
    if (!config.optimizeDeps.include) config.optimizeDeps.include = [];
    
    // Force optimization of dependencies that might cause issues
    config.optimizeDeps.include.push(
      '@tagaddod-design/react',
      '@tagaddod-design/tokens',
      '@storybook/react',
      '@storybook/react-vite',
      'react',
      'react-dom',
      '@storybook/blocks',
      '@storybook/addon-docs',
      '@mdx-js/react'
    );
    
    // Exclude problematic dependencies from optimization
    if (!config.optimizeDeps.exclude) config.optimizeDeps.exclude = [];
    config.optimizeDeps.exclude.push('@storybook/global');
    
    // Force clean deps
    config.optimizeDeps.force = true;
    
    // Ensure proper resolution of modules
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tagaddod-design/react': path.resolve(__dirname, '../../react/src'),
      '@tagaddod-design/tokens': path.resolve(__dirname, '../../tokens/dist'),
      // Keep backward compatibility for references
      '@tagaddod/react': path.resolve(__dirname, '../../react/src'),
      '@tagaddod/tokens': path.resolve(__dirname, '../../tokens/dist'),
    };
    
    // Additional configuration to handle module resolution
    config.server = {
      ...config.server,
      fs: {
        // Allow serving files from project root and other directories
        allow: [
          path.resolve(__dirname, '../../../'), // Project root
          path.resolve(__dirname, '../../tokens/dist'),
          path.resolve(__dirname, '../../react/src'),
          path.resolve(__dirname, '../../react/dist'),
        ],
      },
    };
    
    // Prevent transformation issues with story files
    config.esbuild = {
      ...config.esbuild,
      loader: 'tsx',
      include: /\.(ts|tsx|js|jsx)$/,
    };
    
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
  previewHead: (head) => `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
      /* Ensure the fonts are available globally */
      body {
        font-family: var(--t-font-family-primary, Outfit, sans-serif);
      }
    </style>
  `,
};