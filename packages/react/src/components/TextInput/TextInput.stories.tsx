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
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
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

export const WithErrorAndHelpText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helpText: 'We will never share your email with anyone else.',
    errorMessage: 'Please enter a valid email address',
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

// Examples showing different prefix types
export const PrefixExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
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
      <TextInput
        label="Amount"
        placeholder="0.00"
        prefix="$"
      />
    </div>
  ),
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

// Stories for Enter key handling
export const SearchInput: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type and press Enter to search',
    prefix: <IconSearch size={18} />,
    isSearchInput: true,
    onEnterPress: (_, value) => {
      alert(`Searching for: "${value}"`);
    },
  },
};

export const FormNavigation: Story = {
  render: () => {
    const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleEnterPress = (field: string) => (_: React.KeyboardEvent<HTMLInputElement>, value: string) => {
      console.log(`Enter pressed in ${field}: "${value}"`);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <h3>Form Navigation Demo</h3>
        <p>Press Enter to move to next field automatically</p>
        
        <TextInput
          label="First Name"
          placeholder="Enter first name"
          value={values.firstName}
          onChange={handleChange('firstName')}
          onEnterPress={handleEnterPress('firstName')}
          autoFocusNext={true}
        />
        
        <TextInput
          label="Last Name"
          placeholder="Enter last name"
          value={values.lastName}
          onChange={handleChange('lastName')}
          onEnterPress={handleEnterPress('lastName')}
          autoFocusNext={true}
        />
        
        <TextInput
          label="Email"
          placeholder="Enter email"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          onEnterPress={handleEnterPress('email')}
          autoFocusNext={true}
        />
        
        <TextInput
          label="Phone"
          placeholder="Enter phone number"
          type="tel"
          value={values.phone}
          onChange={handleChange('phone')}
          onEnterPress={handleEnterPress('phone')}
          autoFocusNext={true}
        />
        
        <button type="submit">Submit</button>
      </div>
    );
  },
};

export const PreventFormSubmit: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
          <h3>Prevent Form Submit Demo</h3>
          <p>Enter key will NOT submit the form</p>
          
          <TextInput
            label="Input with prevented submit"
            placeholder="Press Enter (won't submit form)"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onEnterPress={(_, value) => {
              alert(`Enter pressed with value: "${value}"`);
            }}
            preventFormSubmit={true}
          />
          
          <button type="submit">Submit Form</button>
        </div>
      </form>
    );
  },
};

// Size examples
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }}>
      <TextInput 
        label="XLarge (56px)" 
        placeholder="XLarge size input" 
        size="xlarge"
        helpText="Uses body-large-default font size with 24px icons"
      />
      <TextInput 
        label="Large (48px)" 
        placeholder="Large size input" 
        size="large"
        helpText="Uses body-md-default font size with 20px icons"
      />
      <TextInput 
        label="Medium (40px)" 
        placeholder="Medium size input (default)" 
        size="medium"
        helpText="Uses body-md-default font size with 16px icons"
      />
      <TextInput 
        label="Small (32px)" 
        placeholder="Small size input" 
        size="small"
        helpText="Uses body-sm-default font size with 16px icons"
      />
      <TextInput 
        label="XSmall (28px)" 
        placeholder="XSmall size input" 
        size="xsmall"
        helpText="Uses caption-lg-default font size with 16px icons"
      />
    </div>
  ),
};

export const SizesWithPrefix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '350px' }}>
      <TextInput
        label="XLarge Search"
        placeholder="Search..."
        size="xlarge"
        prefix={<IconSearch size={24} />}
        errorMessage="24px icons in XLarge size"
      />
      <TextInput
        label="Large Search"
        placeholder="Search..."
        size="large"
        prefix={<IconSearch size={20} />}
        errorMessage="20px icons in Large size"
      />
      <TextInput
        label="Medium Search"
        placeholder="Search..."
        size="medium"
        prefix={<IconSearch size={16} />}
        errorMessage="16px icons in Medium size"
      />
      <TextInput
        label="Small Search"
        placeholder="Search..."
        size="small"
        prefix={<IconSearch size={16} />}
        errorMessage="16px icons in Small size"
      />
      <TextInput
        label="XSmall Search"
        placeholder="Search..."
        size="xsmall"
        prefix={<IconSearch size={16} />}
        errorMessage="16px icons in XSmall size"
      />
    </div>
  ),
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

