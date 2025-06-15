import { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./AspectRatio.mdx'),
    },
  },
  tags: [],
  argTypes: {
    ratio: {
      control: { type: 'number', step: 0.1 },
      description: 'The ratio of width to height',
    },
    className: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 1,
    children: (
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'var(--t-color-fill-brand)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--t-color-text-on-fill)',
          fontWeight: 'var(--t-font-weight-semibold)',
        }}
      >
        1:1
      </div>
    ),
    style: {
      width: '300px',
      boxShadow: 'var(--t-shadow-200)'
    }
  },
};

export const Widescreen: Story = {
  args: {
    ratio: 16/9,
    children: (
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'var(--t-color-fill-brand-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--t-color-text-link)',
          fontWeight: 'var(--t-font-weight-semibold)',
        }}
      >
        16:9
      </div>
    ),
    style: {
      width: '300px',
      boxShadow: 'var(--t-shadow-200)'
    }
  },
};

export const WithImage: Story = {
  args: {
    ratio: 4/3,
    children: (
      <img 
        src="https://placekitten.com/800/600" 
        alt="A kitten" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }} 
      />
    ),
    style: {
      width: '300px',
      boxShadow: 'var(--t-shadow-200)'
    }
  },
};

export const Portrait: Story = {
  args: {
    ratio: 2/3,
    children: (
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'var(--t-color-fill-success-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--t-color-text-success)',
          fontWeight: 'var(--t-font-weight-semibold)',
        }}
      >
        2:3
      </div>
    ),
    style: {
      width: '200px',
      boxShadow: 'var(--t-shadow-200)'
    }
  },
};

export const CardExample: Story = {
  args: {
    ratio: 16/9,
    children: (
      <img 
        src="https://placekitten.com/1600/900" 
        alt="A cute kitten" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }} 
      />
    ),
    style: {
      width: '100%',
      maxWidth: '400px',
      boxShadow: 'var(--t-shadow-200)'
    }
  },
  decorators: [
    (Story) => (
      <div style={{
        maxWidth: '400px',
        border: `1px solid var(--t-color-border-primary)`,
        borderRadius: 'var(--t-border-radius-300)',
        overflow: 'hidden'
      }}>
        <Story />
        <div style={{ padding: 'var(--t-space-300)' }}>
          <h3 style={{ 
            margin: 0, 
            marginBottom: 'var(--t-space-200)',
            fontSize: 'var(--t-font-size-400)',
            fontWeight: 'var(--t-font-weight-semibold)',
            color: 'var(--t-color-text-primary)'
          }}>
            Card with AspectRatio
          </h3>
          <p style={{ 
            margin: 0,
            fontSize: 'var(--t-font-size-300)',
            color: 'var(--t-color-text-secondary)'
          }}>
            This card uses the AspectRatio component to maintain a consistent 16:9 ratio for the image, regardless of the card width.
          </p>
        </div>
      </div>
    )
  ]
};
