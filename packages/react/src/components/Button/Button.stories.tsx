import type { Meta, StoryObj } from '@storybook/react';
import { Button, buttonVariants, buttonTones, buttonSizes } from './Button';
import { 
  IconPlus, 
  IconSearch, 
  IconArrowRight, 
  IconDownload, 
  IconCheck,
  IconRefresh,
  IconTrash,
  IconEdit
} from '@tabler/icons-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Button.mdx'),
    },
  },
  tags: [],
  argTypes: {
    variant: {
      control: 'select',
      options: buttonVariants,
      description: 'Button appearance style'
    },
    tone: {
      control: 'select',
      options: buttonTones,
      description: 'Button color tone'
    },
    size: {
      control: 'select',
      options: buttonSizes,
      description: 'Button size'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width of container'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interactions'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading indicator'
    },
    prefixIcon: {
      control: false,
      description: 'Icon to display before button text'
    },
    suffixIcon: {
      control: false,
      description: 'Icon to display after button text'
    },
  },
  args: {
    variant: 'primary',
    tone: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
  },
};

export const Plain: Story = {
  args: {
    children: 'Plain Button',
    variant: 'plain',
  },
};

// Tone stories
export const Critical: Story = {
  args: {
    children: 'Critical Button',
    tone: 'critical',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    tone: 'success',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Neutral Button',
    tone: 'neutral',
  },
};

export const Magic: Story = {
  args: {
    children: 'Magic Button',
    tone: 'magic',
  },
};

// Size stories
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'medium',
  },
};

export const Micro: Story = {
  args: {
    children: 'Micro Button',
    size: 'micro',
  },
};

// State stories
export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

// Icon stories
export const WithPrefixIcon: Story = {
  args: {
    children: 'Add Item',
    prefixIcon: <IconPlus size={18} />,
  },
};

export const WithSuffixIcon: Story = {
  args: {
    children: 'Next Step',
    suffixIcon: <IconArrowRight size={18} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Search Results',
    prefixIcon: <IconSearch size={18} />,
    suffixIcon: <IconArrowRight size={18} />,
  },
};

export const IconOnly: Story = {
  args: {
    prefixIcon: <IconPlus size={18} />,
    'aria-label': 'Add item',
  },
};

// RTL example
export const RtlText: Story = {
  args: {
    children: 'زر عربي',
    prefixIcon: <IconPlus size={18} />,
    suffixIcon: <IconArrowRight size={18} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with Arabic text and icons - switch to RTL mode to see proper alignment',
      },
    },
  },
};

// Variants showcase
export const AllVariantsAndTones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      {buttonTones.map(tone => (
        <div key={tone} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          <h3 style={{ margin: 0 }}>Tone: {tone}</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {buttonVariants.map(variant => (
              <Button key={`${tone}-${variant}`} tone={tone} variant={variant}>
                {variant}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// Size comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="micro">Micro</Button>
    </div>
  ),
};

// Icon buttons in all sizes
export const IconButtonAllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="large" prefixIcon={<IconPlus size={20} />} aria-label="Add item (large)" />
      <Button size="medium" prefixIcon={<IconPlus size={18} />} aria-label="Add item (medium)" />
      <Button size="micro" prefixIcon={<IconPlus size={16} />} aria-label="Add item (micro)" />
    </div>
  ),
};

// Icon-only variants
export const IconOnlyVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" prefixIcon={<IconPlus size={18} />} aria-label="Icon-only primary" />
      <Button variant="secondary" prefixIcon={<IconEdit size={18} />} aria-label="Icon-only secondary" />
      <Button variant="tertiary" prefixIcon={<IconDownload size={18} />} aria-label="Icon-only tertiary" />
      <Button variant="plain" prefixIcon={<IconSearch size={18} />} aria-label="Icon-only plain" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons with different variants. These should have proper centering with no extra padding.',
      },
    },
  },
};

// Icon-only with both prefix and suffix icons (should only show one, but test both cases)
export const IconOnlyBothTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span>Prefix Icon Only</span>
        <Button prefixIcon={<IconPlus size={18} />} aria-label="Prefix icon only" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span>Suffix Icon Only</span>
        <Button suffixIcon={<IconArrowRight size={18} />} aria-label="Suffix icon only" />
      </div>
    </div>
  ),
};

// Common use cases
export const CommonUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="primary" prefixIcon={<IconPlus size={18} />}>Add Item</Button>
        <Button variant="primary" tone="success" prefixIcon={<IconCheck size={18} />}>Save</Button>
        <Button variant="primary" tone="critical" prefixIcon={<IconTrash size={18} />}>Delete</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="secondary" prefixIcon={<IconEdit size={18} />}>Edit</Button>
        <Button variant="secondary" prefixIcon={<IconRefresh size={18} />}>Refresh</Button>
        <Button variant="tertiary" prefixIcon={<IconDownload size={18} />}>Download</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'space-between' }}>
        <Button variant="tertiary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </div>
    </div>
  ),
};
