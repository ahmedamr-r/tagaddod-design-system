import type { Meta, StoryObj } from '@storybook/react';
import { Button, buttonVariants, buttonSizes } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: buttonVariants,
    },
    size: {
      control: 'select',
      options: buttonSizes,
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary variant stories
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    variant: 'success',
  },
};

export const Critical: Story = {
  args: {
    children: 'Critical Button',
    variant: 'critical',
  },
};

// Size stories
export const SmallSize: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

// State stories
export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

// Multi-language examples
export const ArabicText: Story = {
  args: {
    children: 'زر عربي',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with Arabic text - switch to RTL mode to see proper alignment',
      },
    },
  },
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="critical">Critical</Button>
    </div>
  ),
};

// All sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
