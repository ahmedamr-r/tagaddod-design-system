import React from 'react';
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
      options: ['sm', 'md', 'lg', 'xl'],
    },
    src: {
      control: 'text',
    },
    initial: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Image Avatar
export const WithImage: Story = {
  args: {
    type: 'image',
    size: 'md',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'User profile picture',
  },
};

// Initial Avatar
export const WithInitial: Story = {
  args: {
    type: 'initial',
    size: 'md',
    initial: 'U',
  },
};

// Arabic Initial Avatar
export const WithArabicInitial: Story = {
  args: {
    type: 'initial',
    size: 'md',
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
    size: 'md',
  },
};

// Size Variants
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="sm" type="initial" initial="S" />
      <Avatar size="md" type="initial" initial="M" />
      <Avatar size="lg" type="initial" initial="L" />
      <Avatar size="xl" type="initial" initial="X" />
    </div>
  ),
};

// Type Variants
export const TypeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar 
        type="image" 
        size="lg" 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
        alt="User profile" 
      />
      <Avatar type="initial" size="lg" initial="U" />
      <Avatar type="icon" size="lg" />
    </div>
  ),
};

// Fallback Example
export const WithFallback: Story = {
  args: {
    type: 'image',
    size: 'lg',
    src: 'https://invalid-image-url.com/not-found.jpg',
    alt: 'User profile with fallback',
  },
};
