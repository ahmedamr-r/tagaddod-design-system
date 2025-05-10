import type { Meta, StoryObj } from '@storybook/react';
import { TestComponent } from './TestComponent';

const meta: Meta<typeof TestComponent> = {
  title: 'Test/TestComponent',
  component: TestComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TestComponent>;

export const Default: Story = {};
