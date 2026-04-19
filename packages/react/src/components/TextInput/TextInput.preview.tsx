import type { ReactNode } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { IconSearch, IconMail, IconUser, IconCurrencyDollar } from '@tabler/icons-react';
import { TextInput, type TextInputProps } from './TextInput';

const nodePresets: Record<string, ReactNode> = {
  IconMail: <IconMail size={18} />,
  IconSearch: <IconSearch size={18} />,
  IconUser: <IconUser size={18} />,
  IconCurrencyDollar: <IconCurrencyDollar size={18} />,
};

export const preview: PreviewModule<TextInputProps> = {
  name: 'TextInput',
  slug: 'text-input',
  description: 'Labelled text input with help/error text, sizes, prefix/suffix, and clearable state.',
  component: TextInput,
  defaultProps: {
    label: 'Name',
    placeholder: 'Enter your name',
    size: 'medium',
    disabled: false,
    required: false,
    optional: false,
    clearable: false,
    fullWidth: false,
  },
  controls: {
    label: { type: 'text', description: 'Visible label above the input' },
    placeholder: { type: 'text', description: 'Placeholder text' },
    helpText: { type: 'text', description: 'Help text below the input' },
    errorMessage: { type: 'text', description: 'Error message (puts the input in error state)' },
    size: {
      type: 'select',
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
      description: 'Size of the input field',
    },
    required: { type: 'boolean', description: 'Mark the field as required' },
    optional: { type: 'boolean', description: 'Display "(Optional)" next to label' },
    disabled: { type: 'boolean', description: 'Disable the input' },
    readOnly: { type: 'boolean', description: 'Read-only mode' },
    clearable: { type: 'boolean', description: 'Show clear button when value is set' },
    fullWidth: { type: 'boolean', description: 'Stretch to container width' },
    hideLabel: { type: 'boolean', description: 'Visually hide label (still accessible)' },
    prefix: { type: 'node', description: 'Content before input', presets: nodePresets },
    suffix: { type: 'node', description: 'Content after input', presets: nodePresets },
  },
  examples: [
    {
      name: 'Default',
      props: { label: 'Name', placeholder: 'Enter your name' },
    },
    {
      name: 'WithHelpText',
      props: {
        label: 'Email',
        placeholder: 'Enter your email',
        helpText: 'We will never share your email with anyone else.',
      },
    },
    {
      name: 'WithError',
      props: {
        label: 'Password',
        placeholder: 'Enter your password',
        errorMessage: 'Password must be at least 8 characters long',
        type: 'password',
      },
    },
    {
      name: 'Required',
      props: { label: 'Username', placeholder: 'Enter your username', required: true },
    },
    {
      name: 'Optional',
      props: { label: 'Phone Number', placeholder: 'Enter your phone number', optional: true },
    },
    {
      name: 'Disabled',
      props: { label: 'Disabled Input', placeholder: 'You cannot edit this field', disabled: true },
    },
    {
      name: 'ReadOnly',
      props: { label: 'Read-only Input', value: 'This is read-only text', readOnly: true },
    },
    {
      name: 'WithSuffix',
      props: {
        label: 'Amount',
        placeholder: 'Enter amount',
        suffix: <IconCurrencyDollar size={18} />,
      },
    },
    {
      name: 'WithPrefixAndSuffix',
      props: {
        label: 'Email',
        placeholder: 'username',
        prefix: <IconMail size={18} />,
        suffix: <span>@example.com</span>,
      },
    },
    {
      name: 'Clearable',
      props: {
        label: 'Clearable Input',
        placeholder: 'Type something to show clear button',
        defaultValue: 'Clear me',
        clearable: true,
      },
    },
    {
      name: 'Password',
      props: { label: 'Password', placeholder: 'Enter your password', type: 'password' },
    },
    {
      name: 'WithPrefixAndClearable',
      props: {
        label: 'Username',
        placeholder: 'Enter your username',
        prefix: <IconUser size={18} />,
        clearable: true,
        defaultValue: '@username',
      },
    },
    {
      name: 'PrefixExamples',
      description: 'Various prefix styles: icons, currency symbols, text.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
          <TextInput
            label="Email"
            placeholder="Enter your email address"
            prefix={<IconMail size={18} />}
          />
          <TextInput
            label="Search"
            placeholder="Search for something"
            prefix={<IconSearch size={18} />}
          />
          <TextInput label="Amount" placeholder="0.00" prefix="$" />
        </div>
      ),
    },
  ],
};
