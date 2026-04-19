import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Separator, separatorOrientations, type SeparatorProps } from './Separator';

const spacingOptions = ['none', 'compact', 'default'] as const;

export const preview: PreviewModule<SeparatorProps> = {
  name: 'Separator',
  slug: 'separator',
  description: 'Horizontal or vertical divider with optional semantic role and spacing presets.',
  component: Separator,
  defaultProps: {
    orientation: 'horizontal',
    decorative: false,
    spacing: 'default',
  },
  controls: {
    orientation: { type: 'select', options: separatorOrientations, description: 'Horizontal or vertical' },
    decorative: { type: 'boolean', description: 'Hide from assistive tech (treat as presentational)' },
    spacing: { type: 'select', options: spacingOptions, description: 'Margin preset' },
  },
  examples: [
    {
      name: 'Horizontal',
      description: 'Separator between two blocks of text.',
      props: {},
      render: () => (
        <div style={{ width: 320 }}>
          <p style={{ margin: 0 }}>Above the divider</p>
          <Separator />
          <p style={{ margin: 0 }}>Below the divider</p>
        </div>
      ),
    },
    {
      name: 'Vertical',
      description: 'Separator between inline items.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 24 }}>
          <span>Home</span>
          <Separator orientation="vertical" />
          <span>Settings</span>
          <Separator orientation="vertical" />
          <span>Logout</span>
        </div>
      ),
    },
    {
      name: 'Compact',
      description: 'Tighter spacing preset.',
      props: {},
      render: () => (
        <div style={{ width: 320 }}>
          <p style={{ margin: 0 }}>Line one</p>
          <Separator spacing="compact" />
          <p style={{ margin: 0 }}>Line two</p>
        </div>
      ),
    },
    {
      name: 'CustomSpacing',
      description: 'Arbitrary numeric spacing in pixels.',
      props: {},
      render: () => (
        <div style={{ width: 320 }}>
          <p style={{ margin: 0 }}>Line one</p>
          <Separator spacing={32} />
          <p style={{ margin: 0 }}>Line two (32px gap)</p>
        </div>
      ),
    },
  ],
};
