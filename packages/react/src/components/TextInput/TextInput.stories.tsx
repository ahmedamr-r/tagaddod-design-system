import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { IconSearch, IconMail, IconUser, IconCurrencyDollar } from '@tabler/icons-react';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./TextInput.mdx'),
    },
  },
  tags: [],
  argTypes: {
    size: {
      control: 'select',
      options: ['micro', 'medium', 'large'],
    }
  }
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helpText: "We will never share your email with anyone else.",
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    errorMessage: 'Password must be at least 8 characters long',
    type: 'password',
  },
};

export const Required: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    required: true,
  },
};

export const Optional: Story = {
  args: {
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    optional: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot edit this field',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-only Input',
    value: 'This is read-only text',
    readOnly: true,
  },
};

// Examples showing prefix with proper spacing
export const EmailWithPrefix: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email address',
    prefix: <IconMail size={18} />,
  },
};

export const SearchWithPrefix: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for something',
    prefix: <IconSearch size={18} />,
  },
};

// Examples with text prefix
export const TextPrefix: Story = {
  args: {
    label: 'Amount',
    placeholder: '0.00',
    prefix: '$',
  },
};

// Examples with different length text prefixes
export const CurrencyPrefixes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextInput
        label="USD Amount"
        placeholder="0.00"
        prefix="$"
      />
      <TextInput
        label="Euro Amount"
        placeholder="0.00"
        prefix="€"
      />
      <TextInput
        label="British Pound"
        placeholder="0.00"
        prefix="£"
      />
      <TextInput
        label="Egyptian Pound"
        placeholder="0.00"
        prefix="EGP"
      />
      <TextInput
        label="Japanese Yen"
        placeholder="0.00"
        prefix="¥"
      />
      <TextInput
        label="Custom Currency"
        placeholder="0.00"
        prefix="CUSTOM"
      />
    </div>
  ),
};

// Example with a live text prefix that can be changed
export const DynamicTextPrefix: Story = {
  render: () => {
    const [prefix, setPrefix] = useState('$');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <div>
          <label htmlFor="prefix-selector" style={{ marginRight: '8px' }}>Choose prefix:</label>
          <select 
            id="prefix-selector" 
            value={prefix} 
            onChange={(e) => setPrefix(e.target.value)}
          >
            <option value="$">$ (Dollar)</option>
            <option value="€">€ (Euro)</option>
            <option value="£">£ (Pound)</option>
            <option value="¥">¥ (Yen)</option>
            <option value="EGP">EGP (Egyptian Pound)</option>
            <option value="USD">USD (US Dollar)</option>
            <option value="CUSTOM">CUSTOM</option>
          </select>
        </div>
        
        <TextInput
          label="Amount with Dynamic Prefix"
          placeholder="0.00"
          prefix={prefix}
        />
      </div>
    );
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Amount',
    placeholder: 'Enter amount',
    suffix: <IconCurrencyDollar size={18} />,
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    label: 'Email',
    placeholder: 'username',
    prefix: <IconMail size={18} />,
    suffix: <span>@example.com</span>,
  },
};

export const Clearable: Story = {
  args: {
    label: 'Clearable Input',
    placeholder: 'Type something to show clear button',
    defaultValue: 'Clear me',
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
};

export const WithPrefixAndClearable: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    prefix: <IconUser size={18} />,
    clearable: true,
    defaultValue: '@username',
  },
};

// Size examples
export const Micro: Story = {
  args: {
    label: 'Micro Input',
    placeholder: 'Micro size (20px)',
    size: 'micro',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size (32px, default)',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size (40px)',
    size: 'large',
  },
};

export const MicroWithPrefix: Story = {
  args: {
    label: 'Micro Search',
    placeholder: 'Search...',
    size: 'micro',
    prefix: <IconSearch size={14} />,
  },
};

export const MediumWithPrefix: Story = {
  args: {
    label: 'Medium Search',
    placeholder: 'Search...',
    size: 'medium',
    prefix: <IconSearch size={18} />,
  },
};

export const LargeWithPrefix: Story = {
  args: {
    label: 'Large Search',
    placeholder: 'Search...',
    size: 'large',
    prefix: <IconSearch size={22} />,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Show all states in one view for comparison
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextInput label="Default" placeholder="Regular state" />
      <TextInput label="Hover" placeholder="Hover over me" className="hover" />
      <TextInput label="Focus" placeholder="Click to focus" autoFocus />
      <TextInput label="Disabled" placeholder="Cannot be edited" disabled />
      <TextInput label="Read-only" value="This is read-only" readOnly />
      <TextInput label="Error" placeholder="With error message" errorMessage="Something went wrong" />
    </div>
  ),
};

// Show all sizes in one view
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextInput label="Micro (20px)" placeholder="Micro input" size="micro" />
      <TextInput label="Medium (32px)" placeholder="Medium input" size="medium" />
      <TextInput label="Large (40px)" placeholder="Large input" size="large" />
    </div>
  ),
};

// Show proper prefix spacing in all sizes
export const PrefixComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextInput
        label="Email (Micro)"
        placeholder="email@example.com"
        size="micro"
        prefix={<IconMail size={14} />}
      />
      <TextInput
        label="Email (Medium)"
        placeholder="email@example.com"
        size="medium"
        prefix={<IconMail size={18} />}
      />
      <TextInput
        label="Email (Large)"
        placeholder="email@example.com"
        size="large"
        prefix={<IconMail size={22} />}
      />
    </div>
  ),
};

// RTL example
export const RTLExample: Story = {
  render: () => (
    <div dir="rtl" style={{ width: '300px' }}>
      <TextInput 
        label="البحث" 
        placeholder="ابحث هنا..." 
        prefix={<IconSearch size={18} />}
        clearable
      />
    </div>
  ),
};

// Showcase the specific examples from the Figma links you shared
export const EmailInput: Story = {
  args: {
    label: "Email",
    placeholder: "Enter you@example.com",
    prefix: <IconMail size={18} />,
    size: "medium"
  },
};

export const SearchInput: Story = {
  args: {
    label: "Search",
    placeholder: "Search for something",
    prefix: <IconSearch size={18} />,
    size: "medium"
  },
};

// Figma example of amount with $ prefix
export const AmountInput: Story = {
  args: {
    label: "Amount",
    placeholder: "0.00",
    prefix: "$",
    size: "medium"
  },
};
