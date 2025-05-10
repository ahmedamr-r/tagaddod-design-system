import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button Test',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const TestButton: Story = {
  args: {
    children: 'Test Button',
    variant: 'primary',
    size: 'md',
  },
};
