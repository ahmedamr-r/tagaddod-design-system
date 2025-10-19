import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
import { Avatar } from '../Avatar/Avatar';
import { IconSettings, IconActivity, IconUser, IconPlus, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible Card component that serves as a versatile container for any content. Features optional header and footer sections with RTL support and multiple visual variants.'
      }
    }
  },
  argTypes: {
    children: {
      description: 'Main content area - accepts any React node',
      control: { type: 'text' }
    },
    header: {
      description: 'Optional header content displayed at the top',
      control: { type: 'text' }
    },
    footer: {
      description: 'Optional footer content displayed at the bottom',
      control: { type: 'text' }
    },
    variant: {
      description: 'Visual variant of the card',
      control: { type: 'select' },
      options: ['elevated', 'outlined', 'ghost']
    },
    size: {
      description: 'Size affects padding and spacing',
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    interactive: {
      description: 'Makes the card interactive with hover states',
      control: { type: 'boolean' }
    },
    fullWidth: {
      description: 'Makes the card take full width of container',
      control: { type: 'boolean' }
    },
    clickable: {
      description: 'Makes the entire card clickable with enhanced hover/click effects',
      control: { type: 'boolean' }
    },
    containerPadding: {
      description: 'Custom padding for the entire card container (overrides size-based padding)',
      control: { type: 'text' }
    },
    contentPadding: {
      description: 'Custom padding for card content sections (header, body, footer)',
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    children: 'This is the main content area of the card. It can contain any React components or content.'
  }
};

export const WithHeader: Story = {
  args: {
    header: 'Card Header',
    children: 'This card has a header section that can display titles, actions, or other header content.'
  }
};

export const WithFooter: Story = {
  args: {
    children: 'This card has a footer section perfect for actions, metadata, or supplementary information.',
    footer: 'Card Footer'
  }
};

export const Complete: Story = {
  args: {
    header: 'Complete Card Example',
    children: 'This card demonstrates all sections: header, body (this content), and footer working together.',
    footer: 'Footer with actions or metadata'
  }
};

// Variants
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '800px' }}>
      <Card variant="elevated" {...args}>
        <h4>Elevated</h4>
        <p>Card with shadow and subtle border</p>
      </Card>
      <Card variant="outlined" {...args}>
        <h4>Outlined</h4>
        <p>Card with visible border, no shadow</p>
      </Card>
      <Card variant="ghost" {...args}>
        <h4>Ghost</h4>
        <p>Minimal card with no border or shadow</p>
      </Card>
    </div>
  )
};

// Sizes
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '600px' }}>
      <Card size="small" header="Small Card" {...args}>
        <p>Compact spacing for tight layouts</p>
      </Card>
      <Card size="medium" header="Medium Card" {...args}>
        <p>Default spacing for most use cases</p>
      </Card>
      <Card size="large" header="Large Card" {...args}>
        <p>Generous spacing for prominent content</p>
      </Card>
    </div>
  )
};

// Interactive Cards
export const Interactive: Story = {
  args: {
    interactive: true,
    header: 'Interactive Card',
    children: 'Hover to see the 0.2s ease-in-out transition with surface-hover background. Perfect for clickable cards or navigation items.',
    footer: 'Notice the smooth animation and background change'
  }
};

// Real-world Examples for AI Agents
export const AnalyticsCard: Story = {
  render: (args) => (
    <Card
      variant="elevated"
      size="medium"
      header={
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconActivity size={20} />
          <span>Analytics Overview</span>
        </div>
      }
      footer={
        <Button variant="plain" size="small" suffixIcon={<IconArrowRight size={14} />}>
          View Details
        </Button>
      }
      {...args}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--t-color-text-primary)' }}>1,234</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>Total Users</div>
        </div>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--t-color-text-primary)' }}>567</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>Active Today</div>
        </div>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--t-color-text-primary)' }}>89%</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>Engagement</div>
        </div>
      </div>
    </Card>
  )
};

export const UserProfileCard: Story = {
  render: (args) => (
    <Card
      variant="outlined"
      size="medium"
      clickable={true}
      header={
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Avatar size="medium" />
          <div>
            <div style={{ fontWeight: 'bold' }}>Sarah Johnson</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>Product Manager</div>
          </div>
          <Badge variant="success" style={{ marginLeft: 'auto' }}>Online</Badge>
        </div>
      }
      footer={
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="primary" size="small">
            Message
          </Button>
          <Button variant="outlined" size="small">
            View Profile
          </Button>
        </div>
      }
      onClick={() => alert('Profile card clicked!')}
      {...args}
    >
      <p>Experienced product manager with 8+ years in tech. Currently leading the design system initiative and focusing on user experience improvements.</p>
    </Card>
  )
};

export const ActionCard: Story = {
  render: (args) => (
    <Card
      variant="ghost"
      size="large"
      interactive={true}
      header={
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconPlus size={20} />
          <span>Create New Project</span>
        </div>
      }
      {...args}
    >
      <p style={{ color: 'var(--t-color-text-secondary)' }}>
        Start a new project from scratch or use one of our templates to get up and running quickly.
      </p>
    </Card>
  )
};

export const SettingsCard: Story = {
  render: (args) => (
    <Card
      variant="elevated"
      size="medium"
      header={
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconSettings size={20} />
          <span>Account Settings</span>
        </div>
      }
      {...args}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Email Notifications</span>
          <Button variant="outlined" size="small">Configure</Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Privacy Settings</span>
          <Button variant="outlined" size="small">Manage</Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Security</span>
          <Button variant="outlined" size="small">Update</Button>
        </div>
      </div>
    </Card>
  )
};

// RTL Support Demo
export const RTLSupport: Story = {
  render: (args) => {
    const direction = args.globals?.direction || 'ltr';
    const isRTL = direction === 'rtl';

    return (
      <div style={{ display: 'grid', gap: '1rem', maxWidth: '500px' }}>
        <Card
          variant="elevated"
          header={isRTL ? 'رأس البطاقة' : 'Card Header'}
          footer={isRTL ? 'تذييل البطاقة' : 'Card Footer'}
          {...args}
        >
          <p style={{
            lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
            fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
            textAlign: isRTL ? 'right' : 'left',
            direction: direction
          }}>
            {isRTL
              ? 'هذا مثال على بطاقة تدعم اللغة العربية مع التخطيط من اليمين إلى اليسار وارتفاع الخط المناسب للنص العربي.'
              : 'This card demonstrates proper RTL support with appropriate font family, text alignment, and line height adjustments for Arabic text.'
            }
          </p>
        </Card>

        <Card
          variant="outlined"
          interactive={true}
          header={
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <IconUser size={20} />
              <span>{isRTL ? 'ملف المستخدم' : 'User Profile'}</span>
            </div>
          }
          footer={
            <Button
              variant="primary"
              suffixIcon={isRTL ? <IconArrowLeft size={14} /> : <IconArrowRight size={14} />}
            >
              {isRTL ? 'التالي' : 'Next'}
            </Button>
          }
          {...args}
        >
          <p style={{
            lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
            fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
            textAlign: isRTL ? 'right' : 'left',
            direction: direction
          }}>
            {isRTL
              ? 'بطاقة تفاعلية مع دعم كامل للغة العربية ومحاذاة صحيحة للأيقونات.'
              : 'Interactive card with full RTL support and proper icon alignment.'
            }
          </p>
        </Card>
      </div>
    );
  }
};

// Full Width Example
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    variant: 'outlined',
    header: 'Full Width Card',
    children: 'This card takes the full width of its container, making it perfect for layouts where cards need to stretch across available space.',
    footer: 'Perfect for dashboard layouts'
  }
};

// Grid Layout Example
export const GridLayout: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', maxWidth: '800px' }}>
      <Card variant="elevated" size="small" header="Quick Stats" {...args}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>42</div>
        <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>Active Projects</div>
      </Card>

      <Card variant="outlined" size="small" header="Recent Activity" {...args}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>15</div>
        <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>Updates Today</div>
      </Card>

      <Card variant="ghost" size="small" header="Performance" {...args}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>98%</div>
        <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>Uptime</div>
      </Card>
    </div>
  )
};

// Animation and Hover Effects Demo
export const AnimationShowcase: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '2rem', maxWidth: '900px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Hover Effects with 0.2s Ease-In-Out Transitions</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <Card
            variant="elevated"
            interactive={true}
            header="Interactive Card"
            footer="Hover for surface-hover background"
            {...args}
          >
            <p>Interactive cards get surface-hover background on hover with smooth 0.2s ease-in-out transition. No drop shadow for interactive cards.</p>
          </Card>

          <Card
            variant="outlined"
            clickable={true}
            header="Clickable Card"
            footer="Hover for drop shadow + lift"
            onClick={() => console.log('Clicked!')}
            {...args}
          >
            <p>Clickable cards get surface-hover background, drop shadow, and 2px lift on hover. All animations use 0.2s ease-in-out.</p>
          </Card>

          <Card
            variant="ghost"
            clickable={true}
            header="Ghost Clickable"
            footer="Watch the transformation"
            onClick={() => console.log('Ghost clicked!')}
            {...args}
          >
            <p>Ghost cards gain background and shadow on hover, transforming from minimal to elevated with smooth animation.</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Transition Details</h3>
        <Card
          variant="elevated"
          size="large"
          clickable={true}
          header="Animation Technical Details"
          footer="Try hovering and clicking"
          onClick={() => console.log('Technical card clicked!')}
          {...args}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div><strong>Hover Effects:</strong></div>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Background changes to <code>var(--t-color-surface-hover)</code></li>
              <li>Clickable cards get <code>var(--t-shadow-200)</code> drop shadow</li>
              <li>Transform: <code>translateY(-2px)</code> for clickable, <code>translateY(-1px)</code> for interactive</li>
              <li>All transitions use <code>0.2s ease-in-out</code></li>
            </ul>
            <div><strong>Active State:</strong></div>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Reduces lift to <code>translateY(-1px)</code></li>
              <li>Faster transition: <code>0.1s ease-in-out</code></li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
};

// Clickable Card Examples
export const ClickableCards: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '600px' }}>
      <Card
        variant="elevated"
        size="medium"
        clickable={true}
        header={
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <IconActivity size={20} />
            <span>Clickable Analytics Card</span>
          </div>
        }
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--t-color-text-tertiary)' }}>Updated 2 minutes ago</span>
            <IconArrowRight size={16} />
          </div>
        }
        onClick={() => alert('Card clicked!')}
        {...args}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--t-color-text-primary)' }}>1,234</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>Total Users</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--t-color-text-primary)' }}>89%</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>Engagement</div>
          </div>
        </div>
      </Card>

      <Card
        variant="outlined"
        size="medium"
        clickable={true}
        header="Navigation Card with Drop Shadow"
        onClick={() => alert('Navigation clicked!')}
        {...args}
      >
        <p>Click this entire card to navigate. Notice the enhanced hover effects: surface-hover background, drop shadow (0.2s ease-in-out), and smooth 2px lift animation.</p>
      </Card>

      <Card
        variant="ghost"
        size="medium"
        clickable={true}
        header={
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <IconPlus size={20} />
            <span>Create New</span>
          </div>
        }
        onClick={() => alert('Create new clicked!')}
        {...args}
      >
        <p>Ghost variant with clickable functionality. Watch the ghost card gain surface-hover background and drop shadow on hover with smooth 0.2s ease-in-out transition.</p>
      </Card>
    </div>
  )
};

// Padding Demo - Shows equal padding on all sides by default
export const PaddingDemo: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Equal 12px Padding on All Sides (All Card Sizes)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          <Card
            variant="outlined"
            size="medium"
            header="Equal Padding Demo"
            footer="All sides have equal padding"
            style={{ border: '2px dashed var(--t-color-border-tertiary)' }}
            {...args}
          >
            <div style={{ backgroundColor: 'var(--t-color-surface-secondary)', padding: '8px', borderRadius: '4px' }}>
              <p style={{ margin: 0 }}>
                All card sizes now use 12px (var(--t-space-300)) padding on all four sides: top, bottom, left, and right.
                This creates perfect symmetry and makes the card ideal for AI agents to use consistently.
              </p>
            </div>
          </Card>

          <Card
            variant="elevated"
            size="large"
            header="Large Size Equal Padding"
            footer="Consistent spacing maintained"
            style={{ border: '2px dashed var(--t-color-border-tertiary)' }}
            {...args}
          >
            <div style={{ backgroundColor: 'var(--t-color-surface-secondary)', padding: '8px', borderRadius: '4px' }}>
              <p style={{ margin: 0 }}>
                Large size cards maintain the same 12px base padding on all sides,
                ensuring predictable and harmonious layouts across all sizes.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
};

// Custom Padding Examples
export const CustomPadding: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Container Padding Customization</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          <Card
            variant="elevated"
            header="Default Padding"
            footer="Standard spacing"
            {...args}
          >
            <p>This card uses the default 12px padding (var(--t-space-300)) on all sides.</p>
          </Card>

          <Card
            variant="elevated"
            header="Custom Container Padding"
            footer="Tight spacing"
            containerPadding="8px"
            {...args}
          >
            <p>This card overrides container padding to 8px for all sections.</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Content Padding Customization</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          <Card
            variant="outlined"
            header="Custom Content Padding"
            footer="Generous spacing"
            contentPadding="24px"
            {...args}
          >
            <p>This card uses custom content padding (24px) for header, body, and footer sections.</p>
          </Card>

          <Card
            variant="outlined"
            header="Mixed Padding Control"
            footer="Precise control"
            containerPadding="4px"
            contentPadding="20px 16px"
            {...args}
          >
            <p>Container has 4px padding, content has 20px vertical and 16px horizontal padding.</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Advanced Padding Examples</h3>
        <Card
          variant="ghost"
          header="Asymmetric Padding"
          footer={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Custom footer content</span>
              <Button variant="primary" size="small">Action</Button>
            </div>
          }
          containerPadding="0"
          contentPadding="32px 24px 16px 24px"
          style={{ border: '2px dashed var(--t-color-border-tertiary)' }}
          {...args}
        >
          <div style={{ marginBottom: '16px' }}>
            <p>This card demonstrates:</p>
            <ul style={{ marginLeft: '16px', marginTop: '8px' }}>
              <li>Container padding: 0 (no outer padding)</li>
              <li>Content padding: 32px top, 24px sides, 16px bottom</li>
              <li>Visual border to show the container boundaries</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
};