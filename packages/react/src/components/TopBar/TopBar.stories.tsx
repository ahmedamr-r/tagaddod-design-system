import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TopBar } from './TopBar';

const meta: Meta<typeof TopBar> = {
  title: 'Components/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A top navigation bar component with TAGADDOD logo and warehouse selector using Popover component. Features:

- **TAGADDOD logo** on the left side
- **Warehouse selector** with Popover dropdown on the right side
- **Mobile responsive** design
- **RTL support** for Arabic layouts
- **Accessible** with proper keyboard navigation
- **Interactive dropdown** with selection state

Based on the design showing "Al Haram Warehouse" dropdown selector.
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    selectedWarehouse: {
      control: 'text',
      description: 'The currently selected warehouse name'
    },
    warehouses: {
      control: 'object',
      description: 'Array of available warehouse names'
    },
    logoClickable: {
      control: 'boolean',
      description: 'Whether the logo should be clickable'
    },
    warehouseDisabled: {
      control: 'boolean',
      description: 'Whether the warehouse selector is disabled'
    },
    onWarehouseChange: {
      action: 'warehouse-changed',
      description: 'Callback when warehouse selection changes'
    },
    onLogoClick: {
      action: 'logo-clicked',
      description: 'Callback when logo is clicked'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedWarehouse: "Al Haram Warehouse",
    warehouses: ["Al Haram Warehouse", "Main Warehouse", "Secondary Warehouse"],
    logoClickable: false,
    warehouseDisabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Default top bar with TAGADDOD logo and warehouse selector using Popover dropdown.'
      }
    }
  }
};

export const ClickableLogo: Story = {
  args: {
    selectedWarehouse: "Al Haram Warehouse",
    warehouses: ["Al Haram Warehouse", "Main Warehouse", "Secondary Warehouse"],
    logoClickable: true,
    warehouseDisabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Top bar with clickable logo for navigation to home page.'
      }
    }
  }
};

export const DisabledWarehouse: Story = {
  args: {
    selectedWarehouse: "Al Haram Warehouse",
    warehouses: ["Al Haram Warehouse", "Main Warehouse", "Secondary Warehouse"],
    logoClickable: false,
    warehouseDisabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Top bar with disabled warehouse selector for read-only scenarios.'
      }
    }
  }
};

export const CustomWarehouses: Story = {
  args: {
    selectedWarehouse: "Central Distribution Center",
    warehouses: [
      "Central Distribution Center",
      "North Regional Hub", 
      "South Regional Hub",
      "East Coast Facility",
      "West Coast Facility"
    ],
    logoClickable: true,
    warehouseDisabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Top bar with custom warehouse list and different naming convention.'
      }
    }
  }
};

export const Interactive: Story = {
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Al Haram Warehouse");
    const warehouses = [
      "Al Haram Warehouse",
      "Main Distribution Center", 
      "Secondary Storage",
      "Emergency Depot",
      "Overflow Facility"
    ];

    return (
      <div>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          logoClickable={true}
          warehouseDisabled={false}
          onWarehouseChange={setSelectedWarehouse}
          onLogoClick={() => alert('Logo clicked! Navigate to home.')}
        />
        <div style={{ 
          padding: '2rem', 
          backgroundColor: 'var(--t-color-bg-secondary)',
          minHeight: '400px'
        }}>
          <h2 style={{ color: 'var(--t-color-text-primary)', marginBottom: '1rem' }}>
            Dashboard Content
          </h2>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Current warehouse: <strong>{selectedWarehouse}</strong>
          </p>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            This demo shows the top bar with full interactivity using the Popover component. 
            Try clicking the logo and selecting different warehouses from the dropdown.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive top bar with Popover-based warehouse selector and state management.'
      }
    }
  }
};

export const MobileView: Story = {
  args: {
    selectedWarehouse: "Al Haram Warehouse",
    warehouses: ["Al Haram Warehouse", "Main Warehouse", "Secondary Warehouse"],
    logoClickable: true,
    warehouseDisabled: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Top bar optimized for mobile screens with responsive Popover positioning.'
      }
    }
  }
};

export const RTLLayout: Story = {
  args: {
    selectedWarehouse: "مخزن الحرم الرئيسي",
    warehouses: ["مخزن الحرم الرئيسي", "المخزن المركزي", "المخزن الثانوي"],
    logoClickable: true,
    warehouseDisabled: false
  },
  decorators: [
    (Story) => (
      <div dir="rtl" lang="ar">
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      description: {
        story: 'Top bar with Arabic text and RTL (right-to-left) layout support with Popover positioning.'
      }
    }
  }
};