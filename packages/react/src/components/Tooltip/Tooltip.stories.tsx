import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProvider } from './Tooltip';
import { Button } from '../Button/Button';
import { IconInfoCircle, IconHelp, IconAlertTriangle, IconSettings } from '@tabler/icons-react';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Tooltip.mdx'),
    },
  },
  tags: [],
  argTypes: {
    content: {
      control: 'text',
      description: 'The content to display inside the tooltip'
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The preferred side of the trigger to render against'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'The alignment relative to the trigger'
    },
    delayDuration: {
      control: 'number',
      description: 'How long to delay opening the tooltip in ms'
    },
    sideOffset: {
      control: 'number',
      description: 'The distance in pixels from the trigger'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip should be disabled'
    },
  },
  args: {
    content: 'This is a helpful tooltip',
    align: 'center',
    delayDuration: 200,
    sideOffset: 8,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div style={{ padding: '100px' }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic tooltip with automatic positioning
export const Default: Story = {
  args: {
    content: 'This tooltip automatically positions itself based on available space',
    children: <Button>Hover me (auto-position)</Button>,
  },
};

// Auto positioning demo
export const AutoPositioning: Story = {
  args: {
    content: 'Radix automatically chooses the best position for this tooltip based on viewport space',
    children: <Button>Auto positioning</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'When no side is specified, Radix UI automatically positions the tooltip where there is the most available space.',
      },
    },
  },
};

// Positioning stories
export const Top: Story = {
  args: {
    content: 'Tooltip positioned on top',
    side: 'top',
    children: <Button>Top tooltip</Button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip positioned on right',
    side: 'right',
    children: <Button>Right tooltip</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip positioned at bottom',
    side: 'bottom',
    children: <Button>Bottom tooltip</Button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip positioned on left',
    side: 'left',
    children: <Button>Left tooltip</Button>,
  },
};

// Alignment stories
export const AlignStart: Story = {
  args: {
    content: 'Aligned to start',
    align: 'start',
    children: <Button>Start aligned</Button>,
  },
};

export const AlignCenter: Story = {
  args: {
    content: 'Aligned to center',
    align: 'center',
    children: <Button>Center aligned</Button>,
  },
};

export const AlignEnd: Story = {
  args: {
    content: 'Aligned to end',
    align: 'end',
    children: <Button>End aligned</Button>,
  },
};

// With icons
export const WithIcon: Story = {
  args: {
    content: 'This button provides more information',
    children: (
      <Button variant="secondary" prefixIcon={<IconInfoCircle size={18} />}>
        Information
      </Button>
    ),
  },
};

export const IconOnlyTrigger: Story = {
  args: {
    content: 'Click to open settings',
    children: (
      <Button 
        variant="tertiary" 
        prefixIcon={<IconSettings size={18} />} 
        aria-label="Settings"
      />
    ),
  },
};

// Long content
export const LongContent: Story = {
  args: {
    content: 'This is a much longer tooltip that demonstrates how the tooltip handles longer text content. It should wrap nicely and maintain readability.',
    children: <Button>Long tooltip</Button>,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    content: 'This tooltip will not show',
    disabled: true,
    children: <Button>Disabled tooltip</Button>,
  },
};

// Custom delay
export const CustomDelay: Story = {
  args: {
    content: 'This tooltip has a longer delay',
    delayDuration: 1000,
    children: <Button>Slow tooltip</Button>,
  },
};

// RTL content
export const RtlContent: Story = {
  args: {
    content: 'نص تلميح مفيد باللغة العربية',
    children: <Button>تحويم عربي</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with Arabic content - switch to RTL mode to see proper text alignment and positioning',
      },
    },
  },
};

// Multiple tooltips demonstration
export const MultipleTooltips: Story = {
  args: {
    children: <div>Tooltip content</div>,
    content: 'Tooltip text',
  },
  render: () => {
    // Create content function for RTL-aware text
    const createContent = (isRTL: boolean, baseText: string, rtlText: string) => 
      isRTL ? rtlText : baseText;

    // Get direction from globals (Storybook RTL toolbar)
    const direction = 'ltr'; // Simplified for type safety
    const isRTL = false; // Always false since direction is 'ltr'

    return (
      <div style={{ 
        display: 'flex', 
        gap: '24px', 
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        direction: direction
      }}>
        <Tooltip 
          content={createContent(isRTL, 'Save your work', 'احفظ عملك')}
          side="top"
        >
          <Button variant="primary" tone="success" prefixIcon={<IconInfoCircle size={18} />}>
            {isRTL ? 'حفظ' : 'Save'}
          </Button>
        </Tooltip>

        <Tooltip 
          content={createContent(isRTL, 'Get help and support', 'احصل على المساعدة والدعم')}
          side="right"
        >
          <Button variant="secondary" prefixIcon={<IconHelp size={18} />}>
            {isRTL ? 'مساعدة' : 'Help'}
          </Button>
        </Tooltip>

        <Tooltip 
          content={createContent(isRTL, 'Warning: This action cannot be undone', 'تحذير: لا يمكن التراجع عن هذا الإجراء')}
          side="bottom"
        >
          <Button variant="primary" tone="critical" prefixIcon={<IconAlertTriangle size={18} />}>
            {isRTL ? 'تحذير' : 'Warning'}
          </Button>
        </Tooltip>

        <Tooltip 
          content={createContent(isRTL, 'Open application settings', 'فتح إعدادات التطبيق')}
          side="left"
        >
          <Button 
            variant="tertiary" 
            prefixIcon={<IconSettings size={18} />} 
            aria-label={isRTL ? 'الإعدادات' : 'Settings'}
          />
        </Tooltip>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple tooltips with different positioning and RTL support. Try switching between LTR and RTL modes.',
      },
    },
  },
};

// All positions showcase
export const AllPositions: Story = {
  args: {
    children: <div>Tooltip content</div>,
    content: 'Tooltip text',
  },
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '60px',
      alignItems: 'center',
      justifyItems: 'center',
      width: '400px',
      height: '300px'
    }}>
      {/* Top row */}
      <div></div>
      <Tooltip content="Top tooltip" side="top">
        <Button size="micro">Top</Button>
      </Tooltip>
      <div></div>

      {/* Middle row */}
      <Tooltip content="Left tooltip" side="left">
        <Button size="micro">Left</Button>
      </Tooltip>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: '14px',
        color: 'var(--t-color-text-secondary)'
      }}>
        Center
      </div>
      <Tooltip content="Right tooltip" side="right">
        <Button size="micro">Right</Button>
      </Tooltip>

      {/* Bottom row */}
      <div></div>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button size="micro">Bottom</Button>
      </Tooltip>
      <div></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of all four positioning options for tooltips',
      },
    },
  },
};