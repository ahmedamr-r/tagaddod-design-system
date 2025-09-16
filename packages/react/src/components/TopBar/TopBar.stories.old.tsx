import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { IconBuilding, IconBuildingStore, IconHome, IconSettings, IconUsers, IconHelp, IconSearch } from '@tabler/icons-react';
import { TopBar } from './TopBar';
import { Sidebar } from '../Sidebar';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import styles from './TopBar.module.css';
import clsx from 'clsx';

const meta: Meta<typeof TopBar> = {
  title: 'Components/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => import('./TopBar.mdx')
    }
  },
  tags: [],
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
    showHamburgerMenu: {
      control: 'boolean',
      description: 'Whether to show hamburger menu on small devices'
    },
    showLogoutOption: {
      control: 'boolean',
      description: 'Whether to show logout option in dropdown'
    },
    popoverSide: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Popover positioning side'
    },
    popoverAlign: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Popover alignment'
    },
    popoverMargin: {
      control: 'number',
      description: 'Popover margin in pixels'
    },
    showPopoverArrow: {
      control: 'boolean',
      description: 'Whether to show popover arrow'
    },
    warehouseIconSize: {
      control: 'number',
      description: 'Size of the warehouse icon'
    },
    onWarehouseChange: {
      action: 'warehouse-changed',
      description: 'Callback when warehouse selection changes'
    },
    onLogoClick: {
      action: 'logo-clicked',
      description: 'Callback when logo is clicked'
    },
    onHamburgerMenuClick: {
      action: 'hamburger-clicked',
      description: 'Callback when hamburger menu is clicked'
    },
    onLogoutClick: {
      action: 'logout-clicked',
      description: 'Callback when logout is clicked'
    },
    centerContent: {
      control: 'text',
      description: 'Content to display in the center section'
    },
    showCenterSection: {
      control: 'boolean',
      description: 'Whether to show the center section'
    },
    centerSectionMinWidth: {
      control: 'text',
      description: 'Minimum width for the center section (default: 16.25rem)'
    },
    centerSectionMaxWidth: {
      control: 'text',
      description: 'Maximum width for the center section (default: 50rem)'
    },
    endContent: {
      control: 'text',
      description: 'Content to display in the end section'
    },
    showEndSection: {
      control: 'boolean',
      description: 'Whether to show the end section'
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
    warehouseDisabled: false,
    showHamburgerMenu: true,
    showLogoutOption: true,
    popoverSide: "bottom",
    popoverAlign: "end",
    popoverMargin: 4,
    showPopoverArrow: false,
    warehouseIconSize: 16
  },
  parameters: {
    docs: {
      description: {
        story: 'Default top bar with TAGADDOD logo and warehouse selector using Popover dropdown with Listbox integration. Includes logout option with red styling tokens.'
      }
    }
  }
};

export const CustomizedListbox: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = useState("dashboard");
    
    const customOptions = [
      {
        label: "Dashboard",
        value: "dashboard",
        prefix: <IconHome size={16} />
      },
      {
        label: "User Management",
        value: "users",
        prefix: <IconUsers size={16} />
      },
      {
        label: "Settings",
        value: "settings",
        prefix: <IconSettings size={16} />
      },
      {
        label: "",
        value: "separator",
        disabled: true,
        customContent: <div style={{ height: '1px', backgroundColor: 'var(--t-color-border-secondary)', margin: 'var(--t-space-100) 0' }} />
      },
              {
          label: "Help & Support",
          value: "help",
          prefix: <IconHelp size={16} />
        }
    ];

    return (
      <div>
        <TopBar
          selectedWarehouse={selectedItem}
          customListboxOptions={customOptions}
          warehouseIcon={<IconBuildingStore size={18} />}
          warehouseIconSize={18}
          onCustomListboxSelect={(value, option) => {
            setSelectedItem(value.toString());
            alert(`Selected: ${option.label}`);
          }}
          logoClickable={true}
          onLogoClick={() => alert('Navigate to home')}
          showLogoutOption={false}
        />
        <div style={{ 
          padding: '2rem', 
          backgroundColor: 'var(--t-color-bg-primary)',
          minHeight: '400px'
        }}>
          <h2 style={{ color: 'var(--t-color-text-primary)', marginBottom: '1rem' }}>
            Custom Listbox Demo
          </h2>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Current selection: <strong>{selectedItem}</strong>
          </p>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            This example shows how to completely customize the listbox with custom options, 
            icons, and selection handlers. The warehouse icon has been replaced with a store icon.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing complete listbox customization with custom options, icons, and selection handlers. Demonstrates how to override default warehouse functionality.'
      }
    }
  }
};

export const ShadowTest: Story = {
  name: 'Shadow Visibility Test',
  render: () => (
    <div style={{ 
      padding: '4rem', 
      backgroundColor: 'var(--t-color-bg-primary)',
      minHeight: '600px'
    }}>
      <h2 style={{ color: 'var(--t-color-text-primary)', marginBottom: '2rem' }}>
        TopBar Popover Shadow Test
      </h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--t-color-text-primary)' }}>Default TopBar (medium margin)</h3>
        <TopBar selectedWarehouse="Test Warehouse" />
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--t-color-text-primary)' }}>4px margin</h3>
        <TopBar 
          selectedWarehouse="Test Warehouse" 
          popoverMargin={4}
        />
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--t-color-text-primary)' }}>No margin</h3>
        <TopBar 
          selectedWarehouse="Test Warehouse" 
          popoverMargin="none"
        />
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--t-color-text-primary)' }}>With arrow enabled</h3>
        <TopBar 
          selectedWarehouse="Test Warehouse" 
          showPopoverArrow={true}
        />
      </div>
      
      <p style={{ 
        color: 'var(--t-color-text-secondary)', 
        marginTop: '2rem',
        fontSize: '0.875rem'
      }}>
        Click on the warehouse selector in each TopBar to test if the Popover shadow is visible.
        The shadow should be: <code>0 4px 6px -2px rgba(26, 26, 26, 0.2)</code>
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Test story to verify Popover shadow visibility with different margin settings. Helps debug shadow rendering issues.'
      }
    }
  }
};

export const PopoverCustomization: Story = {
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Central Hub");
    const [popoverSide, setPopoverSide] = useState<'top' | 'right' | 'bottom' | 'left'>('bottom');
    const [showArrow, setShowArrow] = useState(false);
    const [margin, setMargin] = useState(8);
    
    const warehouses = [
      "Central Hub",
      "North Regional Center", 
      "South Distribution Point",
      "East Coast Facility",
      "West Coast Storage"
    ];

    return (
      <div>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          popoverSide={popoverSide}
          popoverAlign="center"
          showPopoverArrow={showArrow}
          popoverMargin={margin}
          warehouseIcon={<IconBuilding size={18} />}
          onWarehouseChange={setSelectedWarehouse}
          onLogoutClick={() => alert('Logout clicked!')}
        />
        <div style={{ 
          padding: '2rem', 
          backgroundColor: 'var(--t-color-bg-primary)',
          minHeight: '500px'
        }}>
          <h2 style={{ color: 'var(--t-color-text-primary)', marginBottom: '1rem' }}>
            Popover Customization Demo
          </h2>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: 'var(--t-color-text-primary)', marginRight: '1rem' }}>
              Popover Side:
            </label>
            <select 
              value={popoverSide} 
              onChange={(e) => setPopoverSide(e.target.value as any)}
              style={{ padding: '0.25rem', marginRight: '1rem' }}
            >
              <option value="top">Top</option>
              <option value="right">Right</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
            </select>
            
            <label style={{ color: 'var(--t-color-text-primary)', marginRight: '0.5rem' }}>
              Show Arrow:
            </label>
            <input 
              type="checkbox" 
              checked={showArrow}
              onChange={(e) => setShowArrow(e.target.checked)}
              style={{ marginRight: '1rem' }}
            />
            
            <label style={{ color: 'var(--t-color-text-primary)', marginRight: '0.5rem' }}>
              Margin: {margin}px
            </label>
            <input 
              type="range" 
              min="0" 
              max="20" 
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
            />
          </div>
          
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Current warehouse: <strong>{selectedWarehouse}</strong>
          </p>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Adjust the controls above to see how the popover positioning and appearance changes.
            This demonstrates the flexible popover customization options available.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example demonstrating popover customization including positioning, arrow visibility, and margin adjustments.'
      }
    }
  }
};

export const ClickableLogo: Story = {
  args: {
    selectedWarehouse: "Al Haram Warehouse",
    warehouses: ["Al Haram Warehouse", "Main Warehouse", "Secondary Warehouse"],
    logoClickable: true,
    warehouseDisabled: false,
    showHamburgerMenu: true
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
    warehouseDisabled: true,
    showHamburgerMenu: true
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
    warehouseDisabled: false,
    showHamburgerMenu: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Top bar with custom warehouse list and different naming convention.'
      }
    }
  }
};

export const WithoutLogout: Story = {
  args: {
    selectedWarehouse: "Production Warehouse",
    warehouses: ["Production Warehouse", "Staging Warehouse", "Development Warehouse"],
    logoClickable: true,
    showLogoutOption: false,
    showHamburgerMenu: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Top bar without logout option, useful for embedded contexts or different user flows.'
      }
    }
  }
};

export const CustomLogoutText: Story = {
  args: {
    selectedWarehouse: "Main Warehouse",
    warehouses: ["Main Warehouse", "Backup Warehouse"],
    logoClickable: true,
    showLogoutOption: true,
    logoutText: "Sign Out",
    showHamburgerMenu: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Top bar with custom logout text instead of the default "Logout".'
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
          showHamburgerMenu={true}
          onWarehouseChange={setSelectedWarehouse}
          onLogoClick={() => alert('Logo clicked! Navigate to home.')}
          onHamburgerMenuClick={() => alert('Hamburger menu clicked! Toggle sidebar.')}
          onLogoutClick={() => alert('Logout clicked! User will be logged out.')}
        />
        <div style={{ 
          padding: '2rem', 
          backgroundColor: 'var(--t-color-bg-primary)',
          minHeight: '400px'
        }}>
          <h2 style={{ color: 'var(--t-color-text-primary)', marginBottom: '1rem' }}>
            Dashboard Content
          </h2>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Current warehouse: <strong>{selectedWarehouse}</strong>
          </p>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            This demo shows the top bar with full interactivity using the Popover component with Listbox integration. 
            Try clicking the logo, selecting different warehouses from the dropdown, and clicking logout (styled with red tokens).
            On mobile devices, you'll see a hamburger menu button that transforms to an X when clicked.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive top bar with integrated Popover and Listbox, including logout functionality with red styling and mobile hamburger menu transitions.'
      }
    }
  }
};

export const MobileView: Story = {
  args: {
    selectedWarehouse: "Al Haram Warehouse",
    warehouses: ["Al Haram Warehouse", "Main Warehouse", "Secondary Warehouse"],
    logoClickable: true,
    warehouseDisabled: false,
    showHamburgerMenu: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Top bar optimized for mobile screens with hamburger menu and responsive Popover positioning. The hamburger icon transforms to an X when the sidebar is open.'
      }
    }
  }
};

export const ThreeSectionLayout: Story = {
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Al Haram Warehouse");
    const [searchValue, setSearchValue] = useState("");

    const warehouses = [
      "Al Haram Warehouse",
      "Main Distribution Center",
      "Secondary Storage"
    ];

    return (
      <div>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          showCenterSection={true}
          centerContent={
            <TextInput
              placeholder="Search products, orders, or customers..."
              value={searchValue}
              onChange={setSearchValue}
              prefixIcon={<IconSearch size={18} />}
              style={{ width: '100%' }}
            />
          }
          centerSectionMinWidth="20rem"
          centerSectionMaxWidth="40rem"
          onWarehouseChange={setSelectedWarehouse}
          onLogoClick={() => alert('Navigate to home')}
          onLogoutClick={() => alert('User logged out')}
        />
        <div style={{
          padding: '2rem',
          backgroundColor: 'var(--t-color-bg-primary)',
          minHeight: '400px'
        }}>
          <h2 style={{ color: 'var(--t-color-text-primary)', marginBottom: '1rem' }}>
            Three-Section Layout Demo
          </h2>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ color: 'var(--t-color-text-secondary)', margin: '0 0 0.5rem 0' }}>
              <strong>Start Section:</strong> Logo + hamburger (mobile)
            </p>
            <p style={{ color: 'var(--t-color-text-secondary)', margin: '0 0 0.5rem 0' }}>
              <strong>Center Section:</strong> Search input (min: 20rem, max: 40rem)
            </p>
            <p style={{ color: 'var(--t-color-text-secondary)', margin: '0 0 0.5rem 0' }}>
              <strong>End Section:</strong> Warehouse dropdown (default content)
            </p>
          </div>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Search query: <strong>{searchValue || "No search entered"}</strong>
          </p>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Selected warehouse: <strong>{selectedWarehouse}</strong>
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the new three-section layout with a search bar in the center section, maintaining proper spacing and preventing overlap between sections.'
      }
    }
  }
};

export const CustomEndSection: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("products");

    const endContent = (
      <div style={{ display: 'flex', gap: 'var(--t-space-200)' }}>
        <Button
          variant={activeTab === 'products' ? 'filled' : 'outlined'}
          size="small"
          onClick={() => setActiveTab('products')}
        >
          Products
        </Button>
        <Button
          variant={activeTab === 'orders' ? 'filled' : 'outlined'}
          size="small"
          onClick={() => setActiveTab('orders')}
        >
          Orders
        </Button>
      </div>
    );

    return (
      <div>
        <TopBar
          showEndSection={true}
          endContent={endContent}
          onLogoClick={() => alert('Navigate to home')}
        />
        <div style={{
          padding: '2rem',
          backgroundColor: 'var(--t-color-bg-primary)',
          minHeight: '400px'
        }}>
          <h2 style={{ color: 'var(--t-color-text-primary)', marginBottom: '1rem' }}>
            Custom End Section Demo
          </h2>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Active tab: <strong>{activeTab}</strong>
          </p>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            The end section now contains custom buttons instead of the default warehouse dropdown.
            The warehouse dropdown is completely hidden when custom endContent is provided.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how to replace the default warehouse dropdown with custom content in the end section, such as navigation tabs or action buttons.'
      }
    }
  }
};

export const FlexibleSections: Story = {
  render: () => {
    const [showCenter, setShowCenter] = useState(true);
    const [showEnd, setShowEnd] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [selectedWarehouse, setSelectedWarehouse] = useState("Main Warehouse");

    return (
      <div>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={["Main Warehouse", "Secondary Warehouse"]}
          showCenterSection={showCenter}
          centerContent={
            <TextInput
              placeholder="Search everything..."
              value={searchValue}
              onChange={setSearchValue}
              prefixIcon={<IconSearch size={16} />}
              style={{ width: '100%' }}
            />
          }
          showEndSection={showEnd}
          onWarehouseChange={setSelectedWarehouse}
          onLogoClick={() => alert('Navigate to home')}
          onLogoutClick={() => alert('User logged out')}
        />
        <div style={{
          padding: '2rem',
          backgroundColor: 'var(--t-color-bg-primary)',
          minHeight: '500px'
        }}>
          <h2 style={{ color: 'var(--t-color-text-primary)', marginBottom: '1rem' }}>
            Flexible Section Control
          </h2>

          <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <label style={{ color: 'var(--t-color-text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                checked={showCenter}
                onChange={(e) => setShowCenter(e.target.checked)}
              />
              Show Center Section
            </label>
            <label style={{ color: 'var(--t-color-text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                checked={showEnd}
                onChange={(e) => setShowEnd(e.target.checked)}
              />
              Show End Section
            </label>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: 'var(--t-color-text-primary)', margin: '0 0 0.5rem 0' }}>
              Current State:
            </h3>
            <p style={{ color: 'var(--t-color-text-secondary)', margin: '0 0 0.25rem 0' }}>
              <strong>Start Section:</strong> Always visible (Logo)
            </p>
            <p style={{ color: 'var(--t-color-text-secondary)', margin: '0 0 0.25rem 0' }}>
              <strong>Center Section:</strong> {showCenter ? 'Visible (Search)' : 'Hidden'}
            </p>
            <p style={{ color: 'var(--t-color-text-secondary)', margin: '0 0 1rem 0' }}>
              <strong>End Section:</strong> {showEnd ? 'Visible (Warehouse Dropdown)' : 'Hidden'}
            </p>

            {searchValue && (
              <p style={{ color: 'var(--t-color-text-secondary)' }}>
                Search query: <strong>{searchValue}</strong>
              </p>
            )}

            <p style={{ color: 'var(--t-color-text-secondary)' }}>
              Selected warehouse: <strong>{selectedWarehouse}</strong>
            </p>
          </div>

          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            Use the checkboxes above to toggle sections on/off and see how the layout adapts.
            The flexible design prevents overlap while maintaining proper spacing.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing how sections can be toggled on/off dynamically, demonstrating the flexible nature of the three-section layout system.'
      }
    }
  }
};

export const RTLLayout: Story = {
  args: {
    selectedWarehouse: "مخزن الحرم الرئيسي",
    warehouses: ["مخزن الحرم الرئيسي", "المخزن المركزي", "المخزن الثانوي"],
    logoClickable: true,
    warehouseDisabled: false,
    showHamburgerMenu: true
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
        story: 'Top bar with Arabic text and RTL (right-to-left) layout support with proper Popover positioning and Arabic logout text. Mobile sidebar slides from the right in RTL mode.'
      }
    }
  }
};

/**
 * Complete Layout Integration with Mobile Overlay Sidebar
 * 
 * This comprehensive example demonstrates the full integration of TopBar and Sidebar components with mobile overlay behavior:
 * 
 * **Key Features:**
 * - Fully expanded sidebar by default (no hover behavior)
 * - Mobile overlay sidebar with smooth slide-in/out transitions
 * - Hamburger icon that transforms to X when sidebar is open
 * - Backdrop overlay with fade animations
 * - Sidebar opens underneath TopBar (not over it)
 * - Auto-close behavior when menu items are selected on mobile
 */
export const FullLayoutExample: Story = {
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Al Haram Warehouse");
    const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    
    const warehouses = [
      "Al Haram Warehouse",
      "Main Distribution Center", 
      "Secondary Storage",
      "Regional Hub North",
      "Regional Hub South"
    ];

    const handleHamburgerClick = () => {
      setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };

    const handleLogout = () => {
      alert('User logged out successfully!');
    };

    const handleOverlayClick = () => {
      setIsMobileSidebarOpen(false);
    };

    // Detect RTL for layout direction
    const isRTL = false; // Can be made dynamic based on language selection

    return (
      <div style={{ 
        display: 'flex', 
        height: '100vh',
        flexDirection: 'column',
        fontFamily: 'var(--t-font-family-primary)',
        position: 'relative'
      }}>
        {/* TopBar */}
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          logoClickable={true}
          warehouseDisabled={false}
          showHamburgerMenu={true}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onWarehouseChange={setSelectedWarehouse}
          onLogoClick={() => {
            setSelectedMenuItem("dashboard");
            alert('Navigate to dashboard');
          }}
          onHamburgerMenuClick={handleHamburgerClick}
          onLogoutClick={handleLogout}
        />
        
        {/* Main Layout with Sidebar and Content */}
        <div style={{ 
          display: 'flex', 
          flex: 1,
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Desktop Sidebar - Always visible on desktop */}
          <div className={styles.desktopSidebar}>
            <Sidebar
              selectedItem={selectedMenuItem}
              onItemChange={setSelectedMenuItem}
              defaultExpanded={true}
              hoverExpand={false}
              position={isRTL ? 'right' : 'left'}
            />
          </div>

          {/* Mobile Overlay Backdrop */}
          <div
            className={clsx(styles.mobileOverlay, isMobileSidebarOpen && styles.open)}
            onClick={handleOverlayClick}
          />

          {/* Mobile Sidebar - Overlay when open */}
          <div className={clsx(
            styles.mobileSidebarWrapper, 
            isRTL && styles.rtl,
            isMobileSidebarOpen && styles.open
          )}>
            <Sidebar
              selectedItem={selectedMenuItem}
              onItemChange={(item) => {
                setSelectedMenuItem(item);
                setIsMobileSidebarOpen(false); // Close sidebar when item is selected on mobile
              }}
              defaultExpanded={true}
              hoverExpand={false}
              position={isRTL ? 'right' : 'left'}
            />
          </div>
          
          {/* Main Content */}
          <main style={{
            flex: 1,
            padding: 'var(--t-space-600)',
            backgroundColor: 'var(--t-color-bg-primary)',
            overflow: 'auto',
            width: '100%'
          }}>
            <div style={{ maxWidth: '800px' }}>
              <h1 style={{ 
                margin: '0 0 var(--t-space-500) 0',
                color: 'var(--t-color-text-primary)',
                font: 'var(--t-typography-heading-xl)'
              }}>
                {selectedMenuItem.charAt(0).toUpperCase() + selectedMenuItem.slice(1)}
              </h1>
              
              <div style={{
                backgroundColor: 'var(--t-color-surface-primary)',
                padding: 'var(--t-space-500)',
                borderRadius: 'var(--t-border-radius-300)',
                border: '1px solid var(--t-color-border-secondary)',
                marginBottom: 'var(--t-space-500)'
              }}>
                <h2 style={{ 
                  margin: '0 0 var(--t-space-300) 0',
                  color: 'var(--t-color-text-primary)',
                  font: 'var(--t-typography-heading-md)'
                }}>
                  Current Configuration
                </h2>
                <p style={{ 
                  color: 'var(--t-color-text-secondary)', 
                  margin: '0 0 var(--t-space-200) 0',
                  font: 'var(--t-typography-body-md-default)'
                }}>
                  <strong>Warehouse:</strong> {selectedWarehouse}
                </p>
                <p style={{ 
                  color: 'var(--t-color-text-secondary)', 
                  margin: '0 0 var(--t-space-200) 0',
                  font: 'var(--t-typography-body-md-default)'
                }}>
                  <strong>Active Page:</strong> {selectedMenuItem}
                </p>
                <p style={{ 
                  color: 'var(--t-color-text-secondary)', 
                  margin: '0',
                  font: 'var(--t-typography-body-md-default)'
                }}>
                  <strong>Mobile Sidebar:</strong> {isMobileSidebarOpen ? 'Open (Overlay)' : 'Closed'}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--t-color-surface-primary)',
                padding: 'var(--t-space-500)',
                borderRadius: 'var(--t-border-radius-300)',
                border: '1px solid var(--t-color-border-secondary)'
              }}>
                <h2 style={{ 
                  margin: '0 0 var(--t-space-300) 0',
                  color: 'var(--t-color-text-primary)',
                  font: 'var(--t-typography-heading-md)'
                }}>
                  🚀 Complete Implementation Features
                </h2>
                <ul style={{ 
                  margin: '0',
                  paddingLeft: 'var(--t-space-500)',
                  color: 'var(--t-color-text-secondary)',
                  font: 'var(--t-typography-body-md-default)'
                }}>
                  <li style={{ marginBottom: 'var(--t-space-200)' }}>
                    <strong>✅ Smooth Transitions:</strong> 300ms cubic-bezier slide animations for mobile sidebar
                  </li>
                  <li style={{ marginBottom: 'var(--t-space-200)' }}>
                    <strong>✅ Proper Positioning:</strong> Sidebar opens underneath TopBar instead of covering it
                  </li>
                  <li style={{ marginBottom: 'var(--t-space-200)' }}>
                    <strong>✅ Icon Toggle:</strong> Hamburger icon transforms to X when sidebar is open
                  </li>
                  <li style={{ marginBottom: 'var(--t-space-200)' }}>
                    <strong>✅ Backdrop Overlay:</strong> Dark overlay with smooth fade transitions
                  </li>
                  <li style={{ marginBottom: 'var(--t-space-200)' }}>
                    <strong>✅ Full Customization:</strong> Complete listbox, popover, and styling customization
                  </li>
                  <li style={{ marginBottom: 'var(--t-space-200)' }}>
                    <strong>✅ Auto-close Behavior:</strong> Mobile sidebar closes when menu item is selected
                  </li>
                  <li style={{ marginBottom: 'var(--t-space-200)' }}>
                    <strong>✅ RTL Support:</strong> Proper sidebar slide direction for Arabic layouts
                  </li>
                  <li>
                    <strong>✅ Design Tokens:</strong> Full integration with design system tokens and themes
                  </li>
                </ul>
              </div>

              <div style={{
                marginTop: 'var(--t-space-600)',
                padding: 'var(--t-space-400)',
                backgroundColor: 'var(--t-color-fill-success-secondary)',
                borderRadius: 'var(--t-border-radius-200)',
                border: '1px solid var(--t-color-border-success)',
              }}>
                <p style={{ 
                  margin: '0',
                  color: 'var(--t-color-text-success)',
                  font: 'var(--t-typography-body-sm-medium)'
                }}>
                  <strong>🎉 Production Ready!</strong> This TopBar component is fully customizable and ready for production use. 
                  It supports complete listbox customization, smooth mobile transitions, and comprehensive design system integration.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `
**🚀 Complete Production-Ready Layout**

This story demonstrates the complete TopBar implementation with all recent enhancements:

**🎨 Visual Enhancements:**
- Smooth 300ms slide animations for mobile sidebar
- Hamburger → X icon transformation
- Backdrop overlay with fade transitions  
- Sidebar positioned underneath TopBar (not over it)

**🔧 Customization Features:**
- \`customListboxOptions\` for complete dropdown customization
- \`popoverSide\`, \`popoverAlign\`, \`popoverMargin\` for positioning
- \`warehouseIcon\`, \`warehouseIconSize\` for visual customization
- \`listboxClassName\`, \`listboxProps\` for styling control
- \`onCustomListboxSelect\` for custom selection handling

**📱 Mobile Experience:**
- Overlay sidebar with smooth slide-in/out (280px width)
- Backdrop click-to-close functionality
- Auto-close when menu items are selected
- Proper RTL support for Arabic layouts

**🎯 Usage in Production:**
\`\`\`tsx
<TopBar
  selectedWarehouse={selectedWarehouse}
  warehouses={warehouses}
  customListboxOptions={customOptions}
  popoverSide="bottom"
  popoverMargin={8}
  warehouseIcon={<CustomIcon />}
  onCustomListboxSelect={(value, option) => handleCustomSelection(value, option)}
  onHamburgerMenuClick={() => toggleSidebar()}
  isMobileSidebarOpen={sidebarOpen}
/>
\`\`\`
        `
      }
    }
  }
};

export const LargeScreen: Story = {
  globals: {
    viewport: { value: 'desktopLarge', isRotated: false },
  },
  decorators: [
    (Story) => (
      <div style={{
        minHeight: '100vh',
        backgroundColor: 'var(--t-color-bg-primary, #f7f7f8)',
        padding: 0,
        margin: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Story />
      </div>
    )
  ],
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Al Haram Regional Distribution Center");
    const [searchValue, setSearchValue] = useState("");

    const warehouses = [
      "Al Haram Regional Distribution Center",
      "Main Distribution Hub - North",
      "Central Processing Facility",
      "Secondary Storage Complex",
      "Emergency Response Depot",
      "Cross-Docking Terminal West",
      "Quality Control Center"
    ];

    return (
      <>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          showCenterSection={true}
          centerContent={
            <div style={{
              display: 'flex',
              gap: 'var(--t-space-400)',
              alignItems: 'center',
              width: '100%',
              maxWidth: '60rem'
            }}>
              <TextInput
                placeholder="Search products, orders, customers, and inventory..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                prefixIcon={<IconSearch size={18} />}
                style={{ flex: 1, minWidth: '20rem' }}
              />
              <div style={{
                display: 'flex',
                gap: 'var(--t-space-200)',
                flexShrink: 0
              }}>
                <Button variant="outlined" size="small" prefixIcon={<IconSettings size={16} />}>
                  Settings
                </Button>
                <Button variant="outlined" size="small" prefixIcon={<IconHelp size={16} />}>
                  Help
                </Button>
              </div>
            </div>
          }
          centerSectionMinWidth="30rem"
          centerSectionMaxWidth="70rem"
          logoClickable={true}
          onWarehouseChange={setSelectedWarehouse}
          onLogoClick={() => alert('Navigate to dashboard')}
          onLogoutClick={() => alert('User logged out')}
          showLogoutOption={true}
          popoverSide="bottom"
          popoverAlign="end"
        />

        <div style={{
          padding: '3rem',
          backgroundColor: 'var(--t-color-bg-primary)',
          minHeight: '600px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
              color: 'var(--t-color-text-primary)',
              font: 'var(--t-typography-heading-xl)',
              margin: '0 0 var(--t-space-600) 0'
            }}>
              Large Screen Layout (1440px+)
            </h1>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--t-space-500)',
              marginBottom: 'var(--t-space-600)'
            }}>
              <div style={{
                backgroundColor: 'var(--t-color-surface-primary)',
                padding: 'var(--t-space-500)',
                borderRadius: 'var(--t-border-radius-300)',
                border: '1px solid var(--t-color-border-secondary)'
              }}>
                <h3 style={{
                  color: 'var(--t-color-text-primary)',
                  margin: '0 0 var(--t-space-300) 0',
                  font: 'var(--t-typography-heading-sm)'
                }}>
                  🖥️ Large Screen Features
                </h3>
                <ul style={{
                  margin: '0',
                  paddingLeft: 'var(--t-space-400)',
                  color: 'var(--t-color-text-secondary)',
                  font: 'var(--t-typography-body-sm-default)'
                }}>
                  <li>Expanded center section (30-70rem)</li>
                  <li>Full search bar with action buttons</li>
                  <li>Extended warehouse names display</li>
                  <li>Optimized for wide layouts</li>
                </ul>
              </div>

              <div style={{
                backgroundColor: 'var(--t-color-surface-primary)',
                padding: 'var(--t-space-500)',
                borderRadius: 'var(--t-border-radius-300)',
                border: '1px solid var(--t-color-border-secondary)'
              }}>
                <h3 style={{
                  color: 'var(--t-color-text-primary)',
                  margin: '0 0 var(--t-space-300) 0',
                  font: 'var(--t-typography-heading-sm)'
                }}>
                  📊 Current State
                </h3>
                <p style={{
                  color: 'var(--t-color-text-secondary)',
                  margin: '0 0 var(--t-space-200) 0',
                  font: 'var(--t-typography-body-sm-default)'
                }}>
                  <strong>Warehouse:</strong> {selectedWarehouse}
                </p>
                <p style={{
                  color: 'var(--t-color-text-secondary)',
                  margin: '0',
                  font: 'var(--t-typography-body-sm-default)'
                }}>
                  <strong>Search:</strong> {searchValue || "No search entered"}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--t-color-surface-primary)',
                padding: 'var(--t-space-500)',
                borderRadius: 'var(--t-border-radius-300)',
                border: '1px solid var(--t-color-border-secondary)'
              }}>
                <h3 style={{
                  color: 'var(--t-color-text-primary)',
                  margin: '0 0 var(--t-space-300) 0',
                  font: 'var(--t-typography-heading-sm)'
                }}>
                  💡 Layout Benefits
                </h3>
                <ul style={{
                  margin: '0',
                  paddingLeft: 'var(--t-space-400)',
                  color: 'var(--t-color-text-secondary)',
                  font: 'var(--t-typography-body-sm-default)'
                }}>
                  <li>Ample space for complex workflows</li>
                  <li>Advanced search capabilities</li>
                  <li>Quick access to common actions</li>
                  <li>Clear information hierarchy</li>
                </ul>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--t-color-fill-info-secondary)',
              padding: 'var(--t-space-500)',
              borderRadius: 'var(--t-border-radius-300)',
              border: '1px solid var(--t-color-border-info)',
            }}>
              <h3 style={{
                color: 'var(--t-color-text-info)',
                margin: '0 0 var(--t-space-300) 0',
                font: 'var(--t-typography-heading-sm)'
              }}>
                🎯 Large Screen Optimization
              </h3>
              <p style={{
                color: 'var(--t-color-text-info)',
                margin: '0',
                font: 'var(--t-typography-body-md-default)'
              }}>
                This TopBar configuration is optimized for screens 1440px and wider, taking advantage of the extra
                horizontal space to provide enhanced functionality including an expanded search interface,
                quick-access buttons, and full warehouse name display. The three-section layout ensures proper
                spacing and prevents element overlap even on ultrawide displays.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'TopBar optimized for large screens (1440px+) with expanded center section, full search capabilities, and action buttons. Demonstrates how the component utilizes extra horizontal space effectively while maintaining proper spacing and hierarchy. Story is set to use the Desktop Large viewport (1440px) for optimal viewing.'
      }
    }
  }
};