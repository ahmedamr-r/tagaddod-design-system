import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Logo, type LogoProps } from './Logo';

const logoSizes = ['small', 'medium', 'large', 'custom'] as const;
const logoColors = ['primary', 'white', 'inherit'] as const;

export const preview: PreviewModule<LogoProps> = {
  name: 'Logo',
  slug: 'logo',
  description: 'The Tagaddod wordmark SVG with size and colour variants plus a clickable mode.',
  component: Logo,
  defaultProps: {
    size: 'medium',
    color: 'primary',
    clickable: false,
  },
  controls: {
    size: { type: 'select', options: logoSizes, description: 'Preset size or custom' },
    color: { type: 'select', options: logoColors, description: 'Colour treatment' },
    clickable: { type: 'boolean', description: 'Render as a button with click affordance' },
    width: { type: 'number', description: 'Custom width in px (size must be custom)' },
    height: { type: 'number', description: 'Custom height in px (size must be custom)' },
  },
  examples: [
    { name: 'Small', props: { size: 'small' } },
    { name: 'Medium', props: { size: 'medium' } },
    { name: 'Large', props: { size: 'large' } },
    { name: 'CustomWidth', props: { size: 'custom', width: 240 } },
    {
      name: 'OnDark',
      description: 'White variant on a dark background.',
      props: {},
      render: () => (
        <div
          style={{
            padding: 24,
            background: 'var(--t-color-fill-inverse, #111)',
            borderRadius: 8,
            display: 'inline-block',
          }}
        >
          <Logo color="white" />
        </div>
      ),
    },
    {
      name: 'Clickable',
      props: { clickable: true, 'aria-label': 'Go to homepage' } as Partial<LogoProps>,
    },
    {
      name: 'AllSizes',
      description: 'Every preset size stacked.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <Logo size="small" />
          <Logo size="medium" />
          <Logo size="large" />
        </div>
      ),
    },
  ],
};
