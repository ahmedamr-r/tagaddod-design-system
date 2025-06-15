import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioButtonItem } from './RadioButton';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioButton',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: [],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
    value: {
      control: 'text',
      description: 'Current selected value',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// Story for an individual RadioButtonItem for better controls
export const SingleRadioButton: StoryObj<typeof RadioButtonItem> = {
  render: (args) => (
    <RadioGroup defaultValue={args.checked ? args.value : undefined}>
      <RadioButtonItem {...args} />
    </RadioGroup>
  ),
  args: {
    value: 'option1',
    id: 'radio1',
    label: 'Radio option',
    helpText: 'This is help text for the radio button',
    showHelpText: true,
    disabled: false,
    hideLabel: false,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioButtonItem value="option1" id="option1" label="Option 1" />
      <RadioButtonItem value="option2" id="option2" label="Option 2" />
      <RadioButtonItem value="option3" id="option3" label="Option 3" />
    </RadioGroup>
  ),
  args: {
    defaultValue: 'option1',
  },
};

export const WithHelpText: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioButtonItem 
        value="notification1" 
        id="notification1" 
        label="All new messages" 
        helpText="Get notified about all messages" 
        showHelpText={true}
      />
      <RadioButtonItem 
        value="notification2" 
        id="notification2" 
        label="Direct messages and mentions" 
        helpText="Only get notified when you're mentioned" 
        showHelpText={true}
      />
      <RadioButtonItem 
        value="notification3" 
        id="notification3" 
        label="Nothing" 
        helpText="Don't receive any notifications" 
        showHelpText={true}
      />
    </RadioGroup>
  ),
  args: {
    defaultValue: 'notification1',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option1" {...args}>
      <RadioButtonItem value="option1" id="disabled1" label="Enabled option" />
      <RadioButtonItem value="option2" id="disabled2" label="Disabled option" disabled />
    </RadioGroup>
  ),
};

export const HiddenLabel: Story = {
  render: (args) => (
    <RadioGroup defaultValue="hidden1" {...args}>
      <RadioButtonItem 
        value="hidden1" 
        id="hidden1" 
        label="Visible label" 
        hideLabel={false}
      />
      <RadioButtonItem 
        value="hidden2" 
        id="hidden2" 
        label="Hidden label (still accessible)" 
        hideLabel={true}
      />
    </RadioGroup>
  ),
};

export const RTL: Story = {
  render: (args) => (
    <RadioGroup defaultValue="rtl1" {...args}>
      <RadioButtonItem 
        value="rtl1" 
        id="rtl1" 
        label="عربي" 
      />
      <RadioButtonItem 
        value="rtl2" 
        id="rtl2" 
        label="رسالة مساعدة" 
        helpText="تيكست مساعد"
        showHelpText={true} 
      />
    </RadioGroup>
  ),
  parameters: {
    globals: {
      direction: 'rtl',
    },
  },
};