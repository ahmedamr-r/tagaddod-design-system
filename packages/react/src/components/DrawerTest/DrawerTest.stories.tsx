import { Meta, StoryObj } from '@storybook/react';
import DrawerTest from './DrawerTest';

const meta: Meta<typeof DrawerTest> = {
  title: 'Tests/DrawerTest',
  component: DrawerTest,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DrawerTest>;

export const Default: Story = {};
