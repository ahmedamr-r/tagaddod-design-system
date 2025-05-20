import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Checkbox.mdx'),
    },
  },
  tags: [],
  argTypes: {
    checked: {
      control: {
        type: 'select',
        options: [true, false, 'indeterminate'],
      },
      description: 'The state of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    label: {
      control: 'text',
      description: 'The label of the checkbox',
    },
    hideLabel: {
      control: 'boolean',
      description: 'Hide the label but keep it accessible for screen readers',
    },
    helpText: {
      control: 'text',
      description: 'Help text displayed below the checkbox',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
};

export const Checked: Story = {
  args: {
    label: 'Label',
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Label',
    checked: 'indeterminate',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Label',
    helpText: 'Help text',
  },
};

export const WithError: Story = {
  args: {
    label: 'Label',
    error: 'Error message',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Label',
    disabled: true,
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    label: '',
  },
};

export const HiddenLabel: Story = {
  args: {
    label: 'Hidden Label',
    hideLabel: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Label',
    required: true,
  },
};

export const RTL: Story = {
  args: {
    label: 'تسمية',
    helpText: 'نص المساعدة',
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  },
};

export const RTLError: Story = {
  args: {
    label: 'تسمية',
    error: 'رسالة خطأ',
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  },
};