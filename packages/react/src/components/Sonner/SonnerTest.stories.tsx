import type { Meta, StoryObj } from '@storybook/react';
import { SonnerTest } from './SonnerTest';

const meta = {
  title: 'Debug/SonnerTest',
  component: SonnerTest,
  parameters: {
    layout: 'centered',
  },
  tags: [],
} satisfies Meta<typeof SonnerTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Debug: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Simple test component to debug Sonner functionality. Click buttons to test if toasts appear.',
      },
    },
  },
};