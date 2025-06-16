import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Logo.mdx'),
    },
  },
  tags: [],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'custom'],
      description: 'Size variant for the logo',
    },
    width: {
      control: 'text',
      description: 'Custom width (only used when size is "custom")',
      if: { arg: 'size', eq: 'custom' },
    },
    height: {
      control: 'text',
      description: 'Custom height (only used when size is "custom")',
      if: { arg: 'size', eq: 'custom' },
    },
    color: {
      control: 'select',
      options: ['primary', 'white', 'inherit'],
      description: 'Color variant for the logo',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the logo should be clickable',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when the logo is clicked (only when clickable is true)',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the logo',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    clickable: false,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    color: 'primary',
    clickable: false,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'primary',
    clickable: false,
  },
};

export const CustomSize: Story = {
  args: {
    size: 'custom',
    width: 200,
    height: 50,
    color: 'primary',
    clickable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom size logo with specific width and height dimensions.',
      },
    },
  },
};

export const CustomWidthOnly: Story = {
  args: {
    size: 'custom',
    width: 300,
    color: 'primary',
    clickable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom size logo with only width specified. Height is automatically calculated to maintain aspect ratio using AspectRatio component.',
      },
    },
  },
};

export const CustomHeightOnly: Story = {
  args: {
    size: 'custom',
    height: 60,
    color: 'primary',
    clickable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom size logo with only height specified. Width is automatically calculated to maintain aspect ratio using AspectRatio component.',
      },
    },
  },
};

export const Clickable: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    clickable: true,
  },
};

export const White: Story = {
  args: {
    size: 'medium',
    color: 'white',
    clickable: false,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Logo size="small" />
        <span style={{ fontSize: '0.75rem', color: 'var(--t-color-text-secondary)' }}>Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Logo size="medium" />
        <span style={{ fontSize: '0.75rem', color: 'var(--t-color-text-secondary)' }}>Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Logo size="large" />
        <span style={{ fontSize: '0.75rem', color: 'var(--t-color-text-secondary)' }}>Large</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Logo size="custom" width={150} height={40} />
        <span style={{ fontSize: '0.75rem', color: 'var(--t-color-text-secondary)' }}>Custom (150x40)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Logo size="custom" width={250} />
        <span style={{ fontSize: '0.75rem', color: 'var(--t-color-text-secondary)' }}>Custom (250px width)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the logo component, including custom sizes.',
      },
    },
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ 
        padding: '1rem', 
        backgroundColor: 'white', 
        borderRadius: '0.5rem',
        border: '1px solid var(--t-color-border-primary)'
      }}>
        <Logo color="primary" />
        <div style={{ fontSize: '0.75rem', color: 'var(--t-color-text-secondary)', marginTop: '0.5rem' }}>Primary</div>
      </div>
      <div style={{ 
        padding: '1rem', 
        backgroundColor: 'var(--t-color-bg-primary)', 
        borderRadius: '0.5rem'
      }}>
        <Logo color="white" />
        <div style={{ fontSize: '0.75rem', color: 'var(--t-color-text-inverse)', marginTop: '0.5rem' }}>White</div>
      </div>
      <div style={{ 
        padding: '1rem', 
        color: 'var(--t-color-brand-primary)',
        borderRadius: '0.5rem',
        border: '1px solid var(--t-color-border-primary)'
      }}>
        <Logo color="inherit" />
        <div style={{ fontSize: '0.75rem', color: 'var(--t-color-text-secondary)', marginTop: '0.5rem' }}>Inherit</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different color variants of the logo component.',
      },
    },
  },
};