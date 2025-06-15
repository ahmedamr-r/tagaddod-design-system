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

export const Default: Story = {
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Select a fruit...',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Select a fruit...',
    defaultValue: 'banana',
  },
};

export const InsideLabel: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select your country...',
    options: countryOptions,
    defaultValue: 'us',
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'User Type',
    prefix: <IconUser size={18} />,
    placeholder: 'Select user type...',
    options: [
      { value: 'admin', label: 'Administrator' },
      { value: 'user', label: 'Regular User' },
      { value: 'guest', label: 'Guest' },
    ],
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select your country...',
    helpText: 'This helps us provide location-specific features.',
    options: countryOptions,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'Please select an option...',
    errorMessage: 'This field is required.',
    options: sampleOptions,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Selection',
    placeholder: 'You must select an option...',
    required: true,
    options: sampleOptions,
  },
};

export const Optional: Story = {
  args: {
    label: 'Optional Selection',
    placeholder: 'Select if you want...',
    optional: true,
    options: sampleOptions,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    placeholder: 'Cannot select...',
    disabled: true,
    options: sampleOptions,
  },
};

export const DisabledWithValue: Story = {
  args: {
    label: 'Disabled Select',
    disabled: true,
    defaultValue: 'apple',
    options: sampleOptions,
  },
};

// Size variants
export const SizeMicro: Story = {
  args: {
    label: 'Micro Size',
    size: 'micro',
    placeholder: 'Small select...',
    options: sampleOptions,
  },
};

export const SizeMedium: Story = {
  args: {
    label: 'Medium Size',
    size: 'medium',
    placeholder: 'Medium select...',
    options: sampleOptions,
  },
};

export const SizeLarge: Story = {
  args: {
    label: 'Large Size',
    size: 'large',
    placeholder: 'Large select...',
    options: sampleOptions,
  },
};

export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Full Width Select',
    placeholder: 'Takes full container width...',
    fullWidth: true,
    options: countryOptions,
  },
};

export const Searchable: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select a country...',
    searchable: true,
    searchPlaceholder: 'Search countries...',
    options: [
      ...countryOptions,
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
      { value: 'ma', label: 'Morocco' },
      { value: 'dz', label: 'Algeria' },
      { value: 'tn', label: 'Tunisia' },
      { value: 'sa', label: 'Saudi Arabia' },
      { value: 'ae', label: 'United Arab Emirates' },
    ],
    helpText: 'Start typing to search through the options',
  },
};

export const SearchableWithPrefix: Story = {
  args: {
    label: 'User Search',
    prefix: <IconUser size={18} />,
    placeholder: 'Select a user...',
    searchable: true,
    searchPlaceholder: 'Type to search users...',
    options: [
      { value: 'john', label: 'John Smith' },
      { value: 'jane', label: 'Jane Doe' },
      { value: 'bob', label: 'Bob Johnson' },
      { value: 'alice', label: 'Alice Brown' },
      { value: 'charlie', label: 'Charlie Davis' },
      { value: 'diana', label: 'Diana Wilson' },
      { value: 'frank', label: 'Frank Miller' },
      { value: 'grace', label: 'Grace Taylor' },
      { value: 'henry', label: 'Henry Anderson' },
      { value: 'iris', label: 'Iris Thompson' },
    ],
  },
};

export const SearchableInsideLabel: Story = {
  args: {
    label: 'Select Technology',
    searchable: true,
    searchPlaceholder: 'Search technologies...',
    options: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue.js' },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'next', label: 'Next.js' },
      { value: 'nuxt', label: 'Nuxt.js' },
      { value: 'gatsby', label: 'Gatsby' },
      { value: 'remix', label: 'Remix' },
      { value: 'astro', label: 'Astro' },
      { value: 'solid', label: 'SolidJS' },
    ],
  },
};

export const LongOptionList: Story = {
  args: {
    label: 'Many Options',
    placeholder: 'Select from many options...',
    options: [
      ...countryOptions,
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
    ],
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Select with Some Disabled Options',
    placeholder: 'Some options are disabled...',
    options: [
      { value: 'available1', label: 'Available Option 1' },
      { value: 'disabled1', label: 'Disabled Option 1', disabled: true },
      { value: 'available2', label: 'Available Option 2' },
      { value: 'disabled2', label: 'Disabled Option 2', disabled: true },
      { value: 'available3', label: 'Available Option 3' },
    ],
  },
};

// RTL Support
export const RTLExample: Story = {
  args: {
    label: 'اختر الفاكهة المفضلة',
    placeholder: 'اختر فاكهة...',
    helpText: 'هذا نص المساعدة باللغة العربية',
    options: [
      { value: 'apple', label: 'تفاح' },
      { value: 'banana', label: 'موز' },
      { value: 'cherry', label: 'كرز' },
      { value: 'date', label: 'تمر' },
      { value: 'grape', label: 'عنب' },
    ],
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  },
};

export const RTLInsideLabel: Story = {
  args: {
    label: 'اختر الفاكهة المفضلة',
    placeholder: 'اختر فاكهة...',
    options: [
      { value: 'apple', label: 'تفاح' },
      { value: 'banana', label: 'موز' },
      { value: 'cherry', label: 'كرز' },
      { value: 'date', label: 'تمر' },
      { value: 'grape', label: 'عنب' },
    ],
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  },
};

export const RTLWithError: Story = {
  args: {
    label: 'حقل مطلوب',
    placeholder: 'يرجى اختيار خيار...',
    errorMessage: 'هذا الحقل مطلوب.',
    options: [
      { value: 'apple', label: 'تفاح' },
      { value: 'banana', label: 'موز' },
      { value: 'cherry', label: 'كرز' },
    ],
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  },
};

// Real-world examples
export const ContactForm: Story = {
  name: 'Real-world: Contact Form',
  parameters: {
    layout: 'padded',
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
        required
      />
    </div>
  ),
};

export const UserProfile: Story = {
  name: 'Real-world: User Profile',
  parameters: {
    layout: 'padded',
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
        options={[
          ...countryOptions,
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
        ]}
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
          defaultValue="en"
        />
      </div>
    </div>
  ),
};