const path = require('path');

module.exports = {
  stories: [
    '../../react/src/**/*.mdx',
    '../../react/src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: ['../public'],  // Serve public directory as static assets
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,  // Enable importing .md files
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
      'react-router',
      '@storybook/blocks',
      '@storybook/addon-docs',
      '@mdx-js/react',
      // Add Radix UI dependencies
      '@radix-ui/react-select',
      '@radix-ui/react-form',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-popover',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-scroll-area',
      '@tabler/icons-react',
      '@tanstack/react-table'
    );
    
    // Exclude problematic dependencies from optimization to avoid module resolution issues
    if (!config.optimizeDeps.exclude) config.optimizeDeps.exclude = [];
    config.optimizeDeps.exclude.push(
      '@storybook/global',
      '@storybook/preview-api'
    );
    
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

    // Build configuration to handle large chunks better
    if (!config.build) config.build = {};
    config.build.rollupOptions = {
      ...config.build.rollupOptions,
      output: {
        ...config.build.rollupOptions?.output,
        manualChunks: (id) => {
          // Split large story files into separate chunks
          if (id.includes('stories.tsx') || id.includes('stories.ts')) {
            const fileName = id.split('/').pop()?.replace(/\.(stories|story)\.(tsx?|jsx?)$/, '');
            return `stories-${fileName}`;
          }
          // Split vendor libraries into separate chunks
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) return 'vendor-radix';
            if (id.includes('@storybook')) return 'vendor-storybook';
            if (id.includes('@tanstack')) return 'vendor-tanstack';
            return 'vendor-other';
          }
        },
      },
    };

    // Development server configuration for better module handling
    if (!config.server) config.server = {};
    config.server.hmr = {
      ...config.server.hmr,
      overlay: false, // Disable error overlay that can cause module issues
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