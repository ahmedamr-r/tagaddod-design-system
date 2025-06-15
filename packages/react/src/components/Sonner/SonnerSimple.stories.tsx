import type { Meta, StoryObj } from '@storybook/react';
import { SonnerSimple } from './SonnerSimple';

const meta = {
  title: 'Debug/SonnerSimple',
  component: SonnerSimple,
  parameters: {
    layout: 'centered',
  },
  tags: [],
} satisfies Meta<typeof SonnerSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OfficialPattern: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example follows the exact official Sonner documentation pattern. Should work if the library is properly installed.',
      },
    },
  },
};