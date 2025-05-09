import type { Meta, StoryObj } from '@storybook/react';
import { LocalizedDemo } from './LocalizedDemo';

const meta: Meta<typeof LocalizedDemo> = {
  title: 'Components/LocalizedDemo',
  component: LocalizedDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LocalizedDemo>;

export const Default: Story = {
  name: 'Default',
};

export const RTLPreview: Story = {
  name: 'RTL Preview',
  parameters: {
    // This will force RTL for this specific story
    globals: {
      locale: 'ar',
    },
  },
};
