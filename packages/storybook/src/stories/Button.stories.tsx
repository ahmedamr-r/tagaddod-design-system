import type { Meta, StoryObj } from '@storybook/react';
import { Button, useTheme } from '@tagaddod/react';

const ThemeDebugger = () => {
  const { theme, direction, locale } = useTheme();
  const fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--t-font-family-primary').trim();
  
  return (
    <div style={{ 
      marginBottom: 'var(--t-space-400)', 
      padding: 'var(--t-space-200)',
      backgroundColor: 'var(--t-color-surface-background-secondary)',
      borderRadius: 'var(--t-border-radius-100)',
      fontSize: 'var(--t-font-size-300)',
      color: 'var(--t-color-text-primary)'
    }}>
      <div>Current Theme: <strong>{theme}</strong></div>
      <div>Current Direction: <strong>{direction}</strong></div>
      <div>Current Locale: <strong>{locale}</strong></div>
      <div>Primary Font: <strong>{fontFamily}</strong></div>
      <div style={{ fontFamily: 'var(--t-font-family-primary)', marginTop: 'var(--t-space-100)' }}>
        Font Preview: {locale === 'ar' ? 'هذا نص عربي - مرحبا بك' : 'This is English text - Welcome'}
      </div>
    </div>
  );
};

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeAndLocaleTest: Story = {
  render: (args) => (
    <div style={{ textAlign: 'center', minWidth: '400px' }}>
      <ThemeDebugger />
      <div style={{ marginTop: 'var(--t-space-400)' }}>
        <Button {...args} />
      </div>
      <div style={{ 
        marginTop: 'var(--t-space-200)', 
        fontSize: 'var(--t-font-size-300)',
        color: 'var(--t-color-text-secondary)'
      }}>
        Try switching between brands (Tagaddod/GreenPan) and directions (LTR/RTL)
      </div>
    </div>
  ),
  args: {
    children: 'Test Button',
    variant: 'primary',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
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