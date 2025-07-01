import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { IconUser, IconSearch } from '@tabler/icons-react';

const sampleOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape', disabled: true },
  { value: 'honeydew', label: 'Honeydew' },
];

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'br', label: 'Brazil' },
  { value: 'ar', label: 'Argentina' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'it', label: 'Italy' },
  { value: 'es', label: 'Spain' },
  { value: 'jp', label: 'Japan' },
  { value: 'kr', label: 'South Korea' },
  { value: 'cn', label: 'China' },
  { value: 'in', label: 'India' },
  { value: 'au', label: 'Australia' },
  { value: 'nz', label: 'New Zealand' },
  { value: 'za', label: 'South Africa' },
  { value: 'eg', label: 'Egypt' },
  { value: 'ng', label: 'Nigeria' },
  { value: 'ke', label: 'Kenya' },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Select.mdx'),
    },
  },
  tags: [],
  argTypes: {
    size: {
      control: 'select',
      options: ['micro', 'medium', 'large'],
      description: 'Size of the select field'
    },
    label: {
      control: 'text',
      description: 'Text label for the select'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected'
    },
    helpText: {
      control: 'text',
      description: 'Help text displayed below the select'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed below the select'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled'
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required'
    },
    optional: {
      control: 'boolean',
      description: 'Mark the field as optional'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the select should take full width'
    },
    hideLabel: {
      control: 'boolean',
      description: 'Whether to hide the label visually'
    },
    options: {
      control: 'object',
      description: 'Array of options to display'
    },
    searchable: {
      control: 'boolean',
      description: 'Whether to show search input for long lists'
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for search input'
    },
    maxWidth: {
      control: 'text',
      description: 'Maximum width of the select component'
    },
    minWidth: {
      control: 'text',
      description: 'Minimum width of the select component'
    },
  },
  args: {
    options: sampleOptions,
    size: 'medium',
    disabled: false,
    required: false,
    optional: false,
    fullWidth: false,
    hideLabel: false,
    searchable: false,
    searchPlaceholder: 'Search options...',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Select a fruit...',
  },
};


// Size Variants - Combined into one interactive story
export const Sizes: Story = {
  name: 'Size Variants',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '300px' }}>
      <Select
        {...args}
        label="Micro Size"
        size="micro"
        placeholder="Small select..."
      />
      <Select
        {...args}
        label="Medium Size (Default)"
        size="medium"
        placeholder="Medium select..."
      />
      <Select
        {...args}
        label="Large Size"
        size="large"
        placeholder="Large select..."
      />
    </div>
  ),
  args: {
    options: sampleOptions,
  },
  parameters: {
    controls: { exclude: ['size', 'label', 'placeholder'] },
  },
};

// Component States - Combined
export const States: Story = {
  name: 'Component States',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '300px' }}>
      <Select
        {...args}
        label="Required Field"
        placeholder="This field is required"
      />
      <Select
        {...args}
        label="Optional Field"
        placeholder="This field is optional"
        optional
      />
      <Select
        {...args}
        label="Disabled Field"
        placeholder="Cannot interact with this"
        disabled
      />
      <Select
        {...args}
        label="Error State"
        placeholder="This has an error"
        errorMessage="This field is required."
      />
      <Select
        {...args}
        label="With Help Text"
        placeholder="Select an option..."
        helpText="This is helpful information about the field."
      />
    </div>
  ),
  args: {
    options: sampleOptions,
  },
  parameters: {
    controls: { exclude: ['label', 'placeholder', 'required', 'optional', 'disabled', 'errorMessage', 'helpText'] },
  },
};

// Prefix & Search Features - Combined
export const PrefixAndSearch: Story = {
  name: 'Prefix & Search Features',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '350px' }}>
      <Select
        {...args}
        label="With Prefix Icon"
        prefix={<IconUser size={18} />}
        placeholder="Select user type..."
        options={[
          { value: 'admin', label: 'Administrator' },
          { value: 'user', label: 'Regular User' },
          { value: 'guest', label: 'Guest' },
        ]}
      />
      <Select
        {...args}
        label="Searchable Select"
        placeholder="Search countries..."
        searchable
        searchPlaceholder="Type to search..."
        options={countryOptions}
        helpText="Start typing to filter options"
      />
      <Select
        {...args}
        label="Searchable with Prefix"
        prefix={<IconSearch size={18} />}
        placeholder="Search users..."
        searchable
        searchPlaceholder="Type to search users..."
        options={[
          { value: 'john', label: 'John Smith' },
          { value: 'jane', label: 'Jane Doe' },
          { value: 'bob', label: 'Bob Johnson' },
          { value: 'alice', label: 'Alice Brown' },
          { value: 'charlie', label: 'Charlie Davis' },
          { value: 'diana', label: 'Diana Wilson' },
        ]}
      />
    </div>
  ),
  parameters: {
    controls: { exclude: ['label', 'placeholder', 'prefix', 'searchable', 'searchPlaceholder', 'options', 'helpText'] },
  },
};

// Width Control
export const WidthControl: Story = {
  name: 'Width Control',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '100%' }}>
      <Select
        {...args}
        label="Default Width"
        placeholder="Default width..."
      />
      <Select
        {...args}
        label="Min Width (200px)"
        placeholder="Has minimum width..."
        minWidth={200}
      />
      <Select
        {...args}
        label="Max Width (300px)"
        placeholder="Has maximum width..."
        maxWidth={300}
      />
      <Select
        {...args}
        label="Full Width"
        placeholder="Takes full container width..."
        fullWidth
      />
    </div>
  ),
  args: {
    options: sampleOptions,
  },
  parameters: {
    layout: 'padded',
    controls: { exclude: ['label', 'placeholder', 'minWidth', 'maxWidth', 'fullWidth'] },
  },
};

// RTL Support - Combined RTL examples
export const RTLSupport: Story = {
  name: 'RTL Support',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '350px' }}>
      <Select
        {...args}
        label="اختر الفاكهة المفضلة"
        placeholder="اختر فاكهة..."
        helpText="هذا نص المساعدة باللغة العربية"
        options={[
          { value: 'apple', label: 'تفاح' },
          { value: 'banana', label: 'موز' },
          { value: 'cherry', label: 'كرز' },
          { value: 'date', label: 'تمر' },
          { value: 'grape', label: 'عنب' },
        ]}
      />
      <Select
        {...args}
        label="حقل مطلوب"
        placeholder="يرجى اختيار خيار..."
        errorMessage="هذا الحقل مطلوب."
        options={[
          { value: 'apple', label: 'تفاح' },
          { value: 'banana', label: 'موز' },
          { value: 'cherry', label: 'كرز' },
        ]}
      />
      <Select
        {...args}
        label="حقل اختياري"
        placeholder="اختياري..."
        optional
        options={[
          { value: 'option1', label: 'خيار أول' },
          { value: 'option2', label: 'خيار ثاني' },
          { value: 'option3', label: 'خيار ثالث' },
        ]}
      />
    </div>
  ),
  parameters: {
    globals: {
      direction: 'rtl',
    },
    controls: { exclude: ['label', 'placeholder', 'helpText', 'errorMessage', 'required', 'optional', 'options'] },
  },
};

// Advanced Features
export const AdvancedFeatures: Story = {
  name: 'Advanced Features',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '350px' }}>
      <Select
        {...args}
        label="Long Option List"
        placeholder="Scroll through many options..."
        options={countryOptions}
        helpText="This list has scroll behavior for many options"
      />
      <Select
        {...args}
        label="Disabled Options"
        placeholder="Some options are disabled..."
        options={[
          { value: 'available1', label: 'Available Option 1' },
          { value: 'disabled1', label: 'Disabled Option 1', disabled: true },
          { value: 'available2', label: 'Available Option 2' },
          { value: 'disabled2', label: 'Disabled Option 2', disabled: true },
          { value: 'available3', label: 'Available Option 3' },
        ]}
      />
      <Select
        {...args}
        label="Hidden Label"
        placeholder="Label is visually hidden but accessible..."
        hideLabel
        options={sampleOptions}
        helpText="Label exists for screen readers"
      />
    </div>
  ),
  parameters: {
    controls: { exclude: ['label', 'placeholder', 'options', 'helpText', 'hideLabel'] },
  },
};

// Real-world Examples
export const ContactForm: Story = {
  name: 'Real-world: Contact Form',
  parameters: {
    layout: 'padded',
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Select
        label="How did you hear about us?"
        placeholder="Select one..."
        options={[
          { value: 'search', label: 'Search Engine' },
          { value: 'social', label: 'Social Media' },
          { value: 'friend', label: 'Friend/Colleague' },
          { value: 'advertisement', label: 'Advertisement' },
          { value: 'other', label: 'Other' },
        ]}
        helpText="This helps us understand our reach better."
      />
      
      <Select
        label="Priority Level"
        options={[
          { value: 'low', label: 'Low' },
          { value: 'medium', label: 'Medium' },
          { value: 'high', label: 'High' },
          { value: 'urgent', label: 'Urgent' },
        ]}
      />
    </div>
  ),
};

export const UserProfile: Story = {
  name: 'Real-world: User Profile',
  parameters: {
    layout: 'padded',
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Select
        label="Country"
        size="large"
        prefix={<IconSearch size={20} />}
        placeholder="Search and select your country..."
        searchable={true}
        searchPlaceholder="Type to search countries..."
        options={countryOptions}
        fullWidth
        helpText="We'll use this to show relevant content and pricing."
      />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <Select
          label="Time Zone"
          size="medium"
          options={[
            { value: 'est', label: 'Eastern Time (EST)' },
            { value: 'cst', label: 'Central Time (CST)' },
            { value: 'mst', label: 'Mountain Time (MST)' },
            { value: 'pst', label: 'Pacific Time (PST)' },
          ]}
          optional
        />
        
        <Select
          label="Language"
          size="medium"
          options={[
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Español' },
            { value: 'fr', label: 'Français' },
            { value: 'de', label: 'Deutsch' },
            { value: 'ar', label: 'العربية' },
          ]}
        />
      </div>
    </div>
  ),
};