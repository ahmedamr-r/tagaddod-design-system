import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  TokenScanner,
  ColorTokenGrid,
  TypographyTokenPreview,
  SpacingTokenScale,
  TokenHierarchyTree,
  TokenControls,
  BrandTokenComparison,
  TokenPlayground
} from '@tagaddod-design/react';
const tokens = require('@tagaddod-design/tokens/tokens.js');

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    docs: {
      description: {
        component: 'Comprehensive design token documentation and visualization tools for the Tagaddod Design System. Explore token hierarchy, values, and relationships across categories and brands.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// Helper function to parse tokens
const parseTokensFlat = (tokenObj: any, path: string[] = []): any[] => {
  const parsed: any[] = [];

  Object.entries(tokenObj).forEach(([key, value]) => {
    if (value && typeof value === 'object') {
      if ('$value' in value && '$type' in value) {
        const tokenValue = value as any;
        const cssVar = `--t-${path.concat(key).join('-')}`;

        parsed.push({
          name: tokenValue.name || key,
          cssVar,
          value: tokenValue.$value,
          type: tokenValue.$type,
          category: tokenValue.attributes?.category || 'unknown',
          subcategory: tokenValue.attributes?.type || 'unknown',
          item: tokenValue.attributes?.item,
          filePath: tokenValue.filePath,
          path: tokenValue.path || path.concat(key),
        });
      } else {
        parsed.push(...parseTokensFlat(value, path.concat(key)));
      }
    }
  });

  return parsed;
};

export const TokenOverview: StoryObj = {
  name: 'Token Overview',
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    const allTokens = parseTokensFlat(tokens);
    const categories = Array.from(new Set(allTokens.map(token => token.category))).sort();

    const filteredTokens = allTokens.filter(token => {
      const matchesSearch = !searchTerm ||
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.cssVar.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.value.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !categoryFilter || token.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
    };

    return (
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <TokenControls
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          categories={categories}
          totalTokens={allTokens.length}
          filteredTokens={filteredTokens.length}
        />
        <TokenScanner
          searchTerm={searchTerm}
          categoryFilter={categoryFilter}
        />
      </div>
    );
  },
};

export const ColorTokens: StoryObj = {
  name: 'Color Tokens',
  render: () => {
    const allTokens = parseTokensFlat(tokens);
    const colorTokens = allTokens.filter(token => token.type === 'color');

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
    };

    return (
      <div>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Color Tokens</h2>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            All color tokens in the design system ({colorTokens.length} total). Click any color to copy its CSS variable name.
          </p>
        </div>
        <ColorTokenGrid tokens={colorTokens} onCopy={copyToClipboard} />
      </div>
    );
  },
};

export const TypographyTokens: StoryObj = {
  name: 'Typography Tokens',
  render: () => {
    const allTokens = parseTokensFlat(tokens);
    const typographyTokens = allTokens.filter(token =>
      token.category === 'font' || token.subcategory.includes('font') || token.subcategory.includes('text')
    );

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
    };

    return (
      <div>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Typography Tokens</h2>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Font family, size, weight, and line height tokens with live previews ({typographyTokens.length} total).
          </p>
        </div>
        <TypographyTokenPreview tokens={typographyTokens} onCopy={copyToClipboard} />
      </div>
    );
  },
};

export const SpacingTokens: StoryObj = {
  name: 'Spacing Tokens',
  render: () => {
    const allTokens = parseTokensFlat(tokens);
    const spacingTokens = allTokens.filter(token =>
      token.category === 'space' || token.subcategory.includes('space')
    );

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
    };

    return (
      <div>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Spacing Tokens</h2>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Spacing scale with visual representations ({spacingTokens.length} total). Ordered from smallest to largest.
          </p>
        </div>
        <SpacingTokenScale tokens={spacingTokens} onCopy={copyToClipboard} />
      </div>
    );
  },
};

export const TokenHierarchy: StoryObj = {
  name: 'Token Hierarchy',
  render: () => {
    const allTokens = parseTokensFlat(tokens);

    return (
      <div>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Token Hierarchy</h2>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Complete token structure showing the hierarchical organization of all design tokens.
          </p>
        </div>
        <TokenHierarchyTree tokens={allTokens} />
      </div>
    );
  },
};

export const BrandComparison: StoryObj = {
  name: 'Brand Comparison',
  render: () => <BrandTokenComparison />,
};

export const InteractivePlayground: StoryObj = {
  name: 'Token Playground',
  render: () => <TokenPlayground />,
};
