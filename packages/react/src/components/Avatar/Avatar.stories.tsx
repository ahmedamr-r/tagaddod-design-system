import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Avatar.mdx'),
    },
  },
  tags: [],
  argTypes: {
    type: {
      control: 'radio',
      options: ['image', 'initial', 'icon'],
    },
    size: {
      control: 'radio',
      options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
    },
    src: {
      control: 'text',
    },
    initial: {
      control: 'text',
    },
    iconStroke: {
      control: { type: 'range', min: 1, max: 4, step: 0.5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Image Avatar
export const WithImage: Story = {
  args: {
    type: 'image',
    size: 'medium',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'User profile picture',
  },
};

// Initial Avatar
export const WithInitial: Story = {
  args: {
    type: 'initial',
    size: 'medium',
    initial: 'U',
  },
};

// Arabic Initial Avatar
export const WithArabicInitial: Story = {
  args: {
    type: 'initial',
    size: 'medium',
    initial: 'أ',
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  },
};

// Icon Avatar
export const WithIcon: Story = {
  args: {
    type: 'icon',
    size: 'medium',
  },
};

// Size Variants
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Initial Text Variants */}
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>With Initial Text</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar size="xSmall" type="initial" initial="XS" />
          <Avatar size="small" type="initial" initial="S" />
          <Avatar size="medium" type="initial" initial="M" />
          <Avatar size="large" type="initial" initial="L" />
          <Avatar size="xLarge" type="initial" initial="XL" />
        </div>
      </div>

      {/* Icon Variants */}
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>With Icons (Auto Stroke Width)</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="xSmall" type="icon" />
            <p style={{ fontSize: '11px', marginTop: '4px', color: '#666' }}>stroke: 1</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="small" type="icon" />
            <p style={{ fontSize: '11px', marginTop: '4px', color: '#666' }}>stroke: 1.5</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="medium" type="icon" />
            <p style={{ fontSize: '11px', marginTop: '4px', color: '#666' }}>stroke: 2</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="large" type="icon" />
            <p style={{ fontSize: '11px', marginTop: '4px', color: '#666' }}>stroke: 2</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="xLarge" type="icon" />
            <p style={{ fontSize: '11px', marginTop: '4px', color: '#666' }}>stroke: 3</p>
          </div>
        </div>
      </div>

      {/* Icon Stroke Variants */}
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>Icon Stroke Variations (Medium Size)</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="medium" type="icon" iconStroke={1} />
            <p style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>Stroke: 1</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="medium" type="icon" iconStroke={1.5} />
            <p style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>Stroke: 1.5</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="medium" type="icon" iconStroke={2} />
            <p style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>Stroke: 2 (default)</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="medium" type="icon" iconStroke={2.5} />
            <p style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>Stroke: 2.5</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="medium" type="icon" iconStroke={3} />
            <p style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>Stroke: 3</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Type Variants
export const TypeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar
        type="image"
        size="large" 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
        alt="User profile" 
      />
      <Avatar type="initial" size="large" initial="U" />
      <Avatar type="icon" size="large" />
    </div>
  ),
};

// Fallback Example
export const WithFallback: Story = {
  args: {
    type: 'image',
    size: 'large',
    src: 'https://invalid-image-url.com/not-found.jpg',
    alt: 'User profile with fallback',
  },
};
