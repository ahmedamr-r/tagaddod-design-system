import type { Meta, StoryObj } from '@storybook/react';
import { TokenDemo } from './TokenDemo';

const meta: Meta<typeof TokenDemo> = {
  title: 'Components/TokenDemo',
  component: TokenDemo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TokenDemo>;

export const Default: Story = {
  name: 'Token Demonstration',
};
