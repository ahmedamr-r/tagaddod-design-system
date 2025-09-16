import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { IconBuilding, IconBuildingStore, IconHome, IconSettings, IconUsers, IconHelp, IconSearch, IconMenu2, IconBell, IconPlus, IconFilter, IconSortAscending } from '@tabler/icons-react';
import { TopBar } from './TopBar';
import { TextInput } from '../TextInput';
import { Button } from '../Button';

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
    showHamburgerMenu: {
      control: 'boolean',
      description: 'Whether to show hamburger menu on small devices'
    },
    showLogoutOption: {
      control: 'boolean',
      description: 'Whether to show logout option in dropdown'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// === NEW TOPBAR STORIES WITH ABSOLUTE POSITIONING ===

export const BasicLayout: Story = {
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Main Warehouse");
    const warehouses = ["Main Warehouse", "Secondary Warehouse", "Distribution Center"];

    return (
      <TopBar
        selectedWarehouse={selectedWarehouse}
        warehouses={warehouses}
        logoClickable={true}
        onWarehouseChange={setSelectedWarehouse}
        onLogoClick={() => alert('Navigate to dashboard')}
        onLogoutClick={() => alert('User logged out')}
        showLogoutOption={true}
        popoverSide="bottom"
        popoverAlign="end"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic TopBar layout showing the new absolute center positioning. The end section (warehouse dropdown) stays anchored to the right edge, while the center section would be perfectly centered if shown.'
      }
    }
  }
};

export const CenterContentSwappable: Story = {
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Distribution Hub");
    const [currentContent, setCurrentContent] = useState("search");
    const warehouses = ["Distribution Hub", "Storage Facility", "Processing Center"];

    const contentOptions = {
      search: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-300)', minWidth: '300px' }}>
          <TextInput
            placeholder="Search products, orders, customers..."
            prefixIcon={<IconSearch size={18} />}
            style={{ flex: 1 }}
          />
        </div>
      ),
      navigation: (
        <div style={{
          display: 'flex',
          gap: 'var(--t-space-400)',
          alignItems: 'center',
          padding: '0 var(--t-space-400)',
          backgroundColor: 'var(--t-color-fill-brand-secondary)',
          borderRadius: 'var(--t-border-radius-300)',
          height: '40px'
        }}>
          <Button variant="plain" size="small">Dashboard</Button>
          <Button variant="plain" size="small">Orders</Button>
          <Button variant="plain" size="small">Inventory</Button>
        </div>
      ),
      status: (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--t-space-300)',
          padding: '0 var(--t-space-400)',
          backgroundColor: 'var(--t-color-fill-success-secondary)',
          borderRadius: 'var(--t-border-radius-300)',
          color: 'var(--t-color-text-success)',
          height: '40px'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--t-color-icon-success)'
          }} />
          All Systems Operational
        </div>
      )
    };

    return (
      <div>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          showCenterSection={true}
          centerContent={contentOptions[currentContent]}
          logoClickable={true}
          onWarehouseChange={setSelectedWarehouse}
          onLogoClick={() => alert('Navigate to dashboard')}
          onLogoutClick={() => alert('User logged out')}
          showLogoutOption={true}
        />

        {/* Demo controls */}
        <div style={{
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          minHeight: '400px'
        }}>
          <h2 style={{
            color: 'var(--t-color-text-primary)',
            margin: '0 0 var(--t-space-400) 0'
          }}>
            🔄 Swappable Center Content
          </h2>
          <p style={{
            color: 'var(--t-color-text-secondary)',
            margin: '0 0 var(--t-space-500) 0'
          }}>
            The center section uses absolute positioning and can contain any content. Try switching between different content types:
          </p>
          <div style={{ display: 'flex', gap: 'var(--t-space-300)', flexWrap: 'wrap' }}>
            <Button
              variant={currentContent === 'search' ? 'primary' : 'outlined'}
              onClick={() => setCurrentContent('search')}
            >
              Search Bar
            </Button>
            <Button
              variant={currentContent === 'navigation' ? 'primary' : 'outlined'}
              onClick={() => setCurrentContent('navigation')}
            >
              Navigation Menu
            </Button>
            <Button
              variant={currentContent === 'status' ? 'primary' : 'outlined'}
              onClick={() => setCurrentContent('status')}
            >
              Status Indicator
            </Button>
          </div>

          <div style={{
            marginTop: 'var(--t-space-500)',
            padding: 'var(--t-space-400)',
            backgroundColor: 'var(--t-color-fill-info-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            border: '1px solid var(--t-color-border-info)'
          }}>
            <h3 style={{
              color: 'var(--t-color-text-info)',
              margin: '0 0 var(--t-space-300) 0'
            }}>
              ✨ Key Features
            </h3>
            <ul style={{
              color: 'var(--t-color-text-info)',
              margin: 0,
              paddingLeft: 'var(--t-space-400)'
            }}>
              <li>Center content is always perfectly centered (50% of TopBar width)</li>
              <li>Independent of start and end section widths</li>
              <li>End section stays anchored to the right edge</li>
              <li>Supports any type of center content</li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Demonstrates the swappable center content area with absolute positioning. The center content is always perfectly centered regardless of what it contains.'
      }
    }
  }
};

export const ResponsiveBehavior: Story = {
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Mobile Distribution Center");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const warehouses = ["Mobile Distribution Center", "Tablet Storage Hub"];

    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          showCenterSection={true}
          centerContent={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-fill-info-secondary)',
              padding: '0 var(--t-space-400)',
              borderRadius: 'var(--t-border-radius-300)',
              color: 'var(--t-color-text-info)',
              fontSize: 'var(--t-font-size-300)',
              height: '36px',
              whiteSpace: 'nowrap'
            }}>
              <IconHome size={16} />
              <span style={{ display: 'var(--display-mobile-hidden, inline)' }}>Dashboard</span>
            </div>
          }
          logoClickable={true}
          showHamburgerMenu={true}
          onWarehouseChange={setSelectedWarehouse}
          onLogoClick={() => alert('Navigate to dashboard')}
          onHamburgerClick={() => setSidebarOpen(!sidebarOpen)}
          onLogoutClick={() => alert('User logged out')}
          showLogoutOption={true}
        />

        {/* Sidebar overlay */}
        {sidebarOpen && (
          <>
            <div
              style={{
                position: 'fixed',
                top: 'var(--t-topbar-height, 64px)',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 40
              }}
              onClick={() => setSidebarOpen(false)}
            />
            <div style={{
              position: 'fixed',
              top: 'var(--t-topbar-height, 64px)',
              left: 0,
              width: '280px',
              bottom: 0,
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRight: '1px solid var(--t-color-border-secondary)',
              zIndex: 50,
              padding: 'var(--t-space-400)'
            }}>
              <h3 style={{ color: 'var(--t-color-text-primary)', margin: '0 0 var(--t-space-400) 0' }}>
                📱 Mobile Navigation
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-200)' }}>
                <Button variant="plain" style={{ justifyContent: 'flex-start' }}>Dashboard</Button>
                <Button variant="plain" style={{ justifyContent: 'flex-start' }}>Orders</Button>
                <Button variant="plain" style={{ justifyContent: 'flex-start' }}>Inventory</Button>
                <Button variant="plain" style={{ justifyContent: 'flex-start' }}>Reports</Button>
              </div>
            </div>
          </>
        )}

        {/* Content area */}
        <div style={{
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          minHeight: 'calc(100vh - var(--t-topbar-height, 64px))'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{
              color: 'var(--t-color-text-primary)',
              margin: '0 0 var(--t-space-400) 0'
            }}>
              📱 Responsive TopBar
            </h1>
            <div style={{
              backgroundColor: 'var(--t-color-fill-warning-secondary)',
              padding: 'var(--t-space-400)',
              borderRadius: 'var(--t-border-radius-300)',
              border: '1px solid var(--t-color-border-warning)',
              marginBottom: 'var(--t-space-500)'
            }}>
              <h3 style={{
                color: 'var(--t-color-text-warning)',
                margin: '0 0 var(--t-space-300) 0'
              }}>
                📐 Resize your browser to see responsive behavior
              </h3>
              <ul style={{
                color: 'var(--t-color-text-warning)',
                margin: 0,
                paddingLeft: 'var(--t-space-400)'
              }}>
                <li><strong>Desktop (768px+):</strong> Full layout with all content visible</li>
                <li><strong>Tablet (&lt; 768px):</strong> Hamburger menu appears, warehouse text may hide</li>
                <li><strong>Mobile:</strong> Compact layout with essential elements only</li>
              </ul>
            </div>
            <p style={{ color: 'var(--t-color-text-secondary)', marginBottom: 'var(--t-space-400)' }}>
              The center section maintains its absolute positioning across all breakpoints,
              ensuring consistent centering regardless of screen size. The hamburger menu
              provides access to navigation on smaller screens.
            </p>
            <Button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? 'Close' : 'Open'} Mobile Sidebar
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Shows responsive behavior with hamburger menu appearing at tablet breakpoint (768px). Resize the viewport to see how the TopBar adapts while maintaining absolute center positioning.'
      }
    }
  }
};

export const NoEndSection: Story = {
  render: () => (
    <div>
      <TopBar
        showCenterSection={true}
        centerContent={
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--t-space-300)',
            padding: '0 var(--t-space-500)',
            backgroundColor: 'var(--t-color-fill-brand-secondary)',
            borderRadius: 'var(--t-border-radius-400)',
            color: 'var(--t-color-text-brand)',
            fontWeight: 'var(--t-font-weight-medium)',
            height: '42px'
          }}>
            <IconBuilding size={18} />
            Centered Application Title
          </div>
        }
        logoClickable={true}
        onLogoClick={() => alert('Navigate to home')}
      />

      <div style={{
        padding: 'var(--t-space-600)',
        backgroundColor: 'var(--t-color-bg-primary)',
        minHeight: '400px'
      }}>
        <h2 style={{
          color: 'var(--t-color-text-primary)',
          margin: '0 0 var(--t-space-400) 0'
        }}>
          🎯 Perfect Center Alignment
        </h2>
        <p style={{
          color: 'var(--t-color-text-secondary)',
          margin: '0'
        }}>
          TopBar with only logo and center content. Shows how absolute positioning keeps
          center content perfectly centered even when the end section is completely empty.
          The center content is positioned at exactly 50% of the TopBar width.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'TopBar with only logo and center content. Shows how absolute positioning keeps center content perfectly centered even when the end section is empty.'
      }
    }
  }
};

export const WideTabNavigation: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedWarehouse] = useState("Enterprise Hub");
    const warehouses = ["Enterprise Hub", "Regional Center"];

    const tabs = [
      { id: 'dashboard', label: 'Dashboard', icon: IconHome },
      { id: 'orders', label: 'Orders', icon: IconBuildingStore },
      { id: 'inventory', label: 'Inventory', icon: IconBuilding },
      { id: 'users', label: 'Users', icon: IconUsers }
    ];

    return (
      <div>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          showCenterSection={true}
          centerContent={
            <div style={{
              display: 'flex',
              gap: 'var(--t-space-200)',
              padding: '0 var(--t-space-400)',
              backgroundColor: 'var(--t-color-surface-primary)',
              border: '1px solid var(--t-color-border-secondary)',
              borderRadius: 'var(--t-border-radius-400)',
              height: '44px',
              alignItems: 'center'
            }}>
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--t-space-200)',
                      padding: '0 var(--t-space-300)',
                      height: '36px',
                      border: 'none',
                      borderRadius: 'var(--t-border-radius-300)',
                      backgroundColor: activeTab === tab.id ? 'var(--t-color-fill-brand-secondary)' : 'transparent',
                      color: activeTab === tab.id ? 'var(--t-color-text-brand)' : 'var(--t-color-text-secondary)',
                      cursor: 'pointer',
                      fontSize: 'var(--t-font-size-300)',
                      fontWeight: activeTab === tab.id ? 'var(--t-font-weight-medium)' : 'var(--t-font-weight-normal)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Icon size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          }
          logoClickable={true}
          onLogoClick={() => alert('Navigate to home')}
          onLogoutClick={() => alert('User logged out')}
          showLogoutOption={true}
        />

        <div style={{
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          minHeight: '400px'
        }}>
          <h2 style={{
            color: 'var(--t-color-text-primary)',
            margin: '0 0 var(--t-space-400) 0'
          }}>
            🧭 Wide Tab Navigation
          </h2>
          <p style={{
            color: 'var(--t-color-text-secondary)',
            margin: '0 0 var(--t-space-400) 0'
          }}>
            TopBar with wide center content showing navigation tabs. The absolute positioning
            ensures the tabs stay perfectly centered regardless of the warehouse dropdown width
            or any changes to the end section.
          </p>
          <div style={{
            padding: 'var(--t-space-400)',
            backgroundColor: 'var(--t-color-fill-success-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            color: 'var(--t-color-text-success)'
          }}>
            <strong>Current Tab:</strong> {tabs.find(t => t.id === activeTab)?.label}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'TopBar with wide center content showing navigation tabs. The absolute positioning ensures the tabs stay centered regardless of the warehouse dropdown width.'
      }
    }
  }
};

export const MobileExpandableSearch: Story = {
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Mobile Store");
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const warehouses = ["Mobile Store", "Tablet Hub", "Desktop Center"];

    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--t-color-bg-primary)' }}>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          onWarehouseChange={setSelectedWarehouse}
          onLogoutClick={() => alert('User logged out')}
          // Center section configuration
          showCenterSection={true}
          showCenterSectionOnMobile={false} // Hidden on mobile by default
          showCenterSectionOnTablet={true}  // Visible on tablet
          centerContent={
            <TextInput
              placeholder="Search products, orders, customers..."
              prefixIcon={<IconSearch size={18} />}
              style={{ minWidth: '300px', width: '100%' }}
            />
          }
          // Expansion configuration
          isExpanded={isExpanded}
          onExpandToggle={setIsExpanded}
          expandedContent={
            <div style={{ display: 'flex', gap: 'var(--t-space-300)', alignItems: 'center' }}>
              <TextInput
                placeholder="Search products, orders, customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                prefixIcon={<IconSearch size={18} />}
                style={{ flex: 1 }}
                autoFocus={isExpanded}
              />
              <Button
                variant="primary"
                size="small"
                onClick={() => {
                  alert(`Searching for: "${searchQuery}"`);
                  setIsExpanded(false);
                }}
              >
                Search
              </Button>
            </div>
          }
          // Mobile action button
          mobileActionContent={
            <Button
              variant="plain"
              size="small"
              prefixIcon={<IconSearch size={18} />}
              aria-label="Search"
            />
          }
          expansionDuration={300}
          logoClickable={true}
          onLogoClick={() => alert('Navigate to dashboard')}
        />

        {/* Demo content */}
        <div style={{ padding: 'var(--t-space-600)' }}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{
              color: 'var(--t-color-text-primary)',
              margin: '0 0 var(--t-space-400) 0'
            }}>
              📱 Mobile Expandable Search
            </h1>

            <div style={{
              backgroundColor: 'var(--t-color-fill-info-secondary)',
              padding: 'var(--t-space-400)',
              borderRadius: 'var(--t-border-radius-300)',
              border: '1px solid var(--t-color-border-info)',
              marginBottom: 'var(--t-space-500)'
            }}>
              <h3 style={{
                color: 'var(--t-color-text-info)',
                margin: '0 0 var(--t-space-300) 0'
              }}>
                📐 Resize to mobile view (≤768px) to see the magic!
              </h3>
              <ul style={{
                color: 'var(--t-color-text-info)',
                margin: 0,
                paddingLeft: 'var(--t-space-400)'
              }}>
                <li><strong>Desktop/Tablet:</strong> Search bar visible in center</li>
                <li><strong>Mobile:</strong> Search icon appears, click to expand</li>
                <li><strong>Expanded:</strong> Full search bar with action button</li>
                <li><strong>Animation:</strong> Smooth height transition (300ms)</li>
              </ul>
            </div>

            <p style={{
              color: 'var(--t-color-text-secondary)',
              marginBottom: 'var(--t-space-400)'
            }}>
              This demonstrates the mobile search expansion pattern. The search bar is hidden on mobile
              and replaced with a search icon button. Clicking it expands the TopBar height to reveal
              the full search interface.
            </p>

            <div style={{ display: 'flex', gap: 'var(--t-space-300)', flexWrap: 'wrap' }}>
              <Button
                variant={isExpanded ? "primary" : "outlined"}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Collapse Search' : 'Expand Search'}
              </Button>
              <Button
                variant="plain"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </Button>
            </div>

            {searchQuery && (
              <div style={{
                marginTop: 'var(--t-space-400)',
                padding: 'var(--t-space-300)',
                backgroundColor: 'var(--t-color-fill-warning-secondary)',
                borderRadius: 'var(--t-border-radius-300)',
                color: 'var(--t-color-text-warning)'
              }}>
                <strong>Search Query:</strong> "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
      viewports: {
        mobile1: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } }
      }
    },
    docs: {
      description: {
        story: 'Demonstrates the mobile expandable search pattern. The search bar is hidden on mobile and replaced with a search icon. Clicking the icon expands the TopBar height to show the full search interface with smooth animations.'
      }
    }
  }
};

export const ResponsiveBreakpoints: Story = {
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Responsive Hub");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const warehouses = ["Responsive Hub", "Breakpoint Center", "Adaptive Store"];

    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--t-color-bg-primary)' }}>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          onWarehouseChange={setSelectedWarehouse}
          onLogoutClick={() => alert('User logged out')}
          // Center section with responsive behavior
          showCenterSection={true}
          showCenterSectionOnTablet={true}  // Visible on tablet (768px-1024px)
          showCenterSectionOnMobile={false} // Hidden on mobile (< 768px)
          centerContent={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-fill-brand-secondary)',
              padding: '0 var(--t-space-400)',
              borderRadius: 'var(--t-border-radius-300)',
              color: 'var(--t-color-text-brand)',
              height: '36px',
              whiteSpace: 'nowrap',
              fontSize: 'var(--t-font-size-300)',
              fontWeight: 'var(--t-font-weight-medium)'
            }}>
              <IconHome size={16} />
              <span>Responsive Navigation</span>
            </div>
          }
          // Mobile hamburger menu
          showHamburgerMenu={true}
          isMobileSidebarOpen={sidebarOpen}
          onHamburgerMenuClick={() => setSidebarOpen(!sidebarOpen)}
          logoClickable={true}
          onLogoClick={() => alert('Navigate to dashboard')}
        />

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <>
            <div
              style={{
                position: 'fixed',
                top: 'var(--t-topbar-height, 64px)',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 40
              }}
              onClick={() => setSidebarOpen(false)}
            />
            <div style={{
              position: 'fixed',
              top: 'var(--t-topbar-height, 64px)',
              left: 0,
              width: '280px',
              bottom: 0,
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRight: '1px solid var(--t-color-border-secondary)',
              zIndex: 50,
              padding: 'var(--t-space-400)'
            }}>
              <h3 style={{ color: 'var(--t-color-text-primary)', margin: '0 0 var(--t-space-400) 0' }}>
                📱 Mobile Navigation
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-200)' }}>
                <Button variant="plain" style={{ justifyContent: 'flex-start' }}>Dashboard</Button>
                <Button variant="plain" style={{ justifyContent: 'flex-start' }}>Analytics</Button>
                <Button variant="plain" style={{ justifyContent: 'flex-start' }}>Orders</Button>
                <Button variant="plain" style={{ justifyContent: 'flex-start' }}>Settings</Button>
              </div>
            </div>
          </>
        )}

        {/* Content Area */}
        <div style={{
          padding: 'var(--t-space-600)',
          minHeight: 'calc(100vh - var(--t-topbar-height, 64px))'
        }}>
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{
              color: 'var(--t-color-text-primary)',
              margin: '0 0 var(--t-space-400) 0'
            }}>
              📐 Responsive Breakpoints
            </h1>

            <div style={{
              backgroundColor: 'var(--t-color-fill-warning-secondary)',
              padding: 'var(--t-space-500)',
              borderRadius: 'var(--t-border-radius-400)',
              border: '1px solid var(--t-color-border-warning)',
              marginBottom: 'var(--t-space-600)'
            }}>
              <h2 style={{
                color: 'var(--t-color-text-warning)',
                margin: '0 0 var(--t-space-400) 0'
              }}>
                🎯 Resize your browser to see responsive behavior!
              </h2>
              <div style={{
                display: 'grid',
                gap: 'var(--t-space-400)',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
              }}>
                <div>
                  <h3 style={{ color: 'var(--t-color-text-warning)', margin: '0 0 var(--t-space-200) 0' }}>
                    🖥️ Desktop (1024px+)
                  </h3>
                  <ul style={{ color: 'var(--t-color-text-warning)', margin: 0, paddingLeft: 'var(--t-space-400)' }}>
                    <li>Center section fully visible</li>
                    <li>No hamburger menu</li>
                    <li>Full warehouse text shown</li>
                    <li>Optimal spacing</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: 'var(--t-color-text-warning)', margin: '0 0 var(--t-space-200) 0' }}>
                    📱 Tablet (768px-1024px)
                  </h3>
                  <ul style={{ color: 'var(--t-color-text-warning)', margin: 0, paddingLeft: 'var(--t-space-400)' }}>
                    <li>Center section shrinks</li>
                    <li>Hamburger menu appears</li>
                    <li>Warehouse text may hide</li>
                    <li>Compressed layout</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: 'var(--t-color-text-warning)', margin: '0 0 var(--t-space-200) 0' }}>
                    📱 Mobile (≤768px)
                  </h3>
                  <ul style={{ color: 'var(--t-color-text-warning)', margin: 0, paddingLeft: 'var(--t-space-400)' }}>
                    <li>Center section hidden</li>
                    <li>Hamburger menu active</li>
                    <li>Icon-only warehouse</li>
                    <li>Mobile-first design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--t-color-fill-info-secondary)',
              padding: 'var(--t-space-400)',
              borderRadius: 'var(--t-border-radius-300)',
              border: '1px solid var(--t-color-border-info)',
              marginBottom: 'var(--t-space-500)'
            }}>
              <h3 style={{
                color: 'var(--t-color-text-info)',
                margin: '0 0 var(--t-space-300) 0'
              }}>
                ✨ Key Responsive Features
              </h3>
              <ul style={{
                color: 'var(--t-color-text-info)',
                margin: 0,
                paddingLeft: 'var(--t-space-400)'
              }}>
                <li><strong>Center Section Flexibility:</strong> Can be shown/hidden per breakpoint</li>
                <li><strong>Absolute Positioning:</strong> Always centered regardless of content</li>
                <li><strong>Mobile Action Support:</strong> Expandable functionality ready</li>
                <li><strong>Progressive Enhancement:</strong> Works without JavaScript</li>
                <li><strong>AI Agent Friendly:</strong> Fully configurable behavior</li>
              </ul>
            </div>

            <p style={{
              color: 'var(--t-color-text-secondary)',
              fontSize: 'var(--t-font-size-400)',
              lineHeight: 1.6
            }}>
              The TopBar component automatically adapts to different screen sizes using CSS media queries
              and configurable props. This ensures optimal user experience across all devices while
              maintaining the design system's visual consistency.
            </p>

            <div style={{ display: 'flex', gap: 'var(--t-space-300)', flexWrap: 'wrap', marginTop: 'var(--t-space-500)' }}>
              <Button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                variant="outlined"
              >
                {sidebarOpen ? 'Close' : 'Open'} Mobile Sidebar
              </Button>
              <Button
                onClick={() => setSelectedWarehouse(warehouses[Math.floor(Math.random() * warehouses.length)])}
                variant="plain"
              >
                Random Warehouse
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive demonstration of responsive breakpoints. Shows how the TopBar adapts to desktop (1024px+), tablet (768px-1024px), and mobile (≤768px) viewports with configurable center section visibility.'
      }
    }
  }
};

export const AIAgentFlexible: Story = {
  render: () => {
    const [config, setConfig] = useState({
      showCenterOnMobile: false,
      showCenterOnTablet: true,
      isExpanded: false,
      expansionDuration: 300,
      actionType: 'search'
    });

    const [selectedWarehouse, setSelectedWarehouse] = useState("AI Warehouse");
    const [searchQuery, setSearchQuery] = useState('');
    const warehouses = ["AI Warehouse", "ML Hub", "Data Center"];

    const actionConfigurations = {
      search: {
        button: <Button variant="plain" size="small" prefixIcon={<IconSearch size={18} />} aria-label="Search" />,
        expandedContent: (
          <div style={{ display: 'flex', gap: 'var(--t-space-300)', alignItems: 'center' }}>
            <TextInput
              placeholder="AI-powered search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              prefixIcon={<IconSearch size={18} />}
              style={{ flex: 1 }}
            />
            <Button variant="primary" size="small">Search</Button>
          </div>
        )
      },
      menu: {
        button: <Button variant="plain" size="small" prefixIcon={<IconMenu2 size={18} />} aria-label="Menu" />,
        expandedContent: (
          <div style={{
            display: 'flex',
            gap: 'var(--t-space-400)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Button variant="outlined" size="small" prefixIcon={<IconHome />}>Dashboard</Button>
            <Button variant="outlined" size="small" prefixIcon={<IconSettings />}>Settings</Button>
            <Button variant="outlined" size="small" prefixIcon={<IconUsers />}>Users</Button>
            <Button variant="outlined" size="small" prefixIcon={<IconHelp />}>Help</Button>
          </div>
        )
      },
      filter: {
        button: <Button variant="plain" size="small" prefixIcon={<IconFilter size={18} />} aria-label="Filters" />,
        expandedContent: (
          <div style={{ display: 'flex', gap: 'var(--t-space-300)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="outlined" size="small" prefixIcon={<IconSortAscending />}>Sort A-Z</Button>
            <Button variant="outlined" size="small" prefixIcon={<IconFilter />}>Price Range</Button>
            <Button variant="outlined" size="small" prefixIcon={<IconBell />}>In Stock</Button>
            <Button variant="primary" size="small">Apply Filters</Button>
          </div>
        )
      },
      notification: {
        button: <Button variant="plain" size="small" prefixIcon={<IconBell size={18} />} aria-label="Notifications" />,
        expandedContent: (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--t-space-300)',
            padding: 'var(--t-space-200) 0'
          }}>
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-fill-info-secondary)',
              borderRadius: 'var(--t-border-radius-300)',
              color: 'var(--t-color-text-info)'
            }}>
              📦 New order #1234 received
            </div>
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-fill-warning-secondary)',
              borderRadius: 'var(--t-border-radius-300)',
              color: 'var(--t-color-text-warning)'
            }}>
              ⚠️ Low stock alert for Product X
            </div>
            <Button variant="primary" size="small">View All</Button>
          </div>
        )
      }
    };

    const currentAction = actionConfigurations[config.actionType];

    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--t-color-bg-primary)' }}>
        <TopBar
          selectedWarehouse={selectedWarehouse}
          warehouses={warehouses}
          onWarehouseChange={setSelectedWarehouse}
          onLogoutClick={() => alert('User logged out')}
          // Responsive configuration
          showCenterSection={true}
          showCenterSectionOnTablet={config.showCenterOnTablet}
          showCenterSectionOnMobile={config.showCenterOnMobile}
          centerContent={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-fill-success-secondary)',
              padding: '0 var(--t-space-400)',
              borderRadius: 'var(--t-border-radius-300)',
              color: 'var(--t-color-text-success)',
              height: '36px',
              fontSize: 'var(--t-font-size-300)',
              fontWeight: 'var(--t-font-weight-medium)'
            }}>
              🤖 AI Agent Configured
            </div>
          }
          // Expansion configuration
          isExpanded={config.isExpanded}
          onExpandToggle={(expanded) => setConfig({ ...config, isExpanded: expanded })}
          expandedContent={currentAction.expandedContent}
          mobileActionContent={currentAction.button}
          expansionDuration={config.expansionDuration}
          logoClickable={true}
          onLogoClick={() => alert('Navigate to dashboard')}
        />

        {/* Configuration Panel */}
        <div style={{ padding: 'var(--t-space-600)' }}>
          <div style={{ maxWidth: '900px' }}>
            <h1 style={{
              color: 'var(--t-color-text-primary)',
              margin: '0 0 var(--t-space-400) 0'
            }}>
              🤖 AI Agent Flexible Configuration
            </h1>

            <div style={{
              backgroundColor: 'var(--t-color-fill-success-secondary)',
              padding: 'var(--t-space-500)',
              borderRadius: 'var(--t-border-radius-400)',
              border: '1px solid var(--t-color-border-success)',
              marginBottom: 'var(--t-space-600)'
            }}>
              <h2 style={{
                color: 'var(--t-color-text-success)',
                margin: '0 0 var(--t-space-400) 0'
              }}>
                ⚙️ Live Configuration Panel
              </h2>
              <p style={{
                color: 'var(--t-color-text-success)',
                marginBottom: 'var(--t-space-400)'
              }}>
                This demonstrates how AI agents can dynamically configure the TopBar behavior.
                Try different combinations to see the flexibility in action!
              </p>

              <div style={{
                display: 'grid',
                gap: 'var(--t-space-400)',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
              }}>
                <div>
                  <h3 style={{ color: 'var(--t-color-text-success)', margin: '0 0 var(--t-space-300) 0' }}>
                    📱 Responsive Visibility
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-200)' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-200)', color: 'var(--t-color-text-success)' }}>
                      <input
                        type="checkbox"
                        checked={config.showCenterOnTablet}
                        onChange={(e) => setConfig({ ...config, showCenterOnTablet: e.target.checked })}
                      />
                      Show center on tablet
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-200)', color: 'var(--t-color-text-success)' }}>
                      <input
                        type="checkbox"
                        checked={config.showCenterOnMobile}
                        onChange={(e) => setConfig({ ...config, showCenterOnMobile: e.target.checked })}
                      />
                      Show center on mobile
                    </label>
                  </div>
                </div>

                <div>
                  <h3 style={{ color: 'var(--t-color-text-success)', margin: '0 0 var(--t-space-300) 0' }}>
                    🔧 Mobile Action Type
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-200)' }}>
                    {Object.keys(actionConfigurations).map(key => (
                      <label key={key} style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-200)', color: 'var(--t-color-text-success)' }}>
                        <input
                          type="radio"
                          name="actionType"
                          value={key}
                          checked={config.actionType === key}
                          onChange={(e) => setConfig({ ...config, actionType: e.target.value })}
                        />
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 style={{ color: 'var(--t-color-text-success)', margin: '0 0 var(--t-space-300) 0' }}>
                    ⏱️ Animation Settings
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-200)' }}>
                    <label style={{ color: 'var(--t-color-text-success)' }}>
                      Duration: {config.expansionDuration}ms
                      <input
                        type="range"
                        min="100"
                        max="1000"
                        step="50"
                        value={config.expansionDuration}
                        onChange={(e) => setConfig({ ...config, expansionDuration: parseInt(e.target.value) })}
                        style={{ width: '100%', marginTop: 'var(--t-space-100)' }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--t-color-fill-info-secondary)',
              padding: 'var(--t-space-400)',
              borderRadius: 'var(--t-border-radius-300)',
              border: '1px solid var(--t-color-border-info)',
              marginBottom: 'var(--t-space-500)'
            }}>
              <h3 style={{
                color: 'var(--t-color-text-info)',
                margin: '0 0 var(--t-space-300) 0'
              }}>
                🚀 AI Agent Use Cases
              </h3>
              <div style={{
                display: 'grid',
                gap: 'var(--t-space-300)',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
              }}>
                <div>
                  <strong style={{ color: 'var(--t-color-text-info)' }}>Adaptive UI:</strong>
                  <p style={{ color: 'var(--t-color-text-info)', margin: 'var(--t-space-100) 0 0 0' }}>
                    AI can detect user behavior patterns and automatically adjust responsive breakpoints.
                  </p>
                </div>
                <div>
                  <strong style={{ color: 'var(--t-color-text-info)' }}>Context-Aware Actions:</strong>
                  <p style={{ color: 'var(--t-color-text-info)', margin: 'var(--t-space-100) 0 0 0' }}>
                    Mobile actions can change based on current user context or workflow.
                  </p>
                </div>
                <div>
                  <strong style={{ color: 'var(--t-color-text-info)' }}>Dynamic Content:</strong>
                  <p style={{ color: 'var(--t-color-text-info)', margin: 'var(--t-space-100) 0 0 0' }}>
                    Center and expanded content can be generated or modified programmatically.
                  </p>
                </div>
                <div>
                  <strong style={{ color: 'var(--t-color-text-info)' }}>Performance Optimization:</strong>
                  <p style={{ color: 'var(--t-color-text-info)', margin: 'var(--t-space-100) 0 0 0' }}>
                    Animation durations can be adjusted based on device capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--t-space-300)', flexWrap: 'wrap' }}>
              <Button
                variant={config.isExpanded ? "primary" : "outlined"}
                onClick={() => setConfig({ ...config, isExpanded: !config.isExpanded })}
              >
                {config.isExpanded ? 'Collapse' : 'Expand'} Mobile Action
              </Button>
              <Button
                variant="plain"
                onClick={() => setConfig({
                  showCenterOnMobile: Math.random() > 0.5,
                  showCenterOnTablet: Math.random() > 0.3,
                  isExpanded: false,
                  expansionDuration: Math.floor(Math.random() * 500) + 200,
                  actionType: Object.keys(actionConfigurations)[Math.floor(Math.random() * Object.keys(actionConfigurations).length)]
                })}
              >
                🎲 Random Configuration
              </Button>
              <Button
                variant="plain"
                onClick={() => setConfig({
                  showCenterOnMobile: false,
                  showCenterOnTablet: true,
                  isExpanded: false,
                  expansionDuration: 300,
                  actionType: 'search'
                })}
              >
                Reset to Defaults
              </Button>
            </div>

            {config.isExpanded && (
              <div style={{
                marginTop: 'var(--t-space-400)',
                padding: 'var(--t-space-400)',
                backgroundColor: 'var(--t-color-fill-warning-secondary)',
                borderRadius: 'var(--t-border-radius-300)',
                color: 'var(--t-color-text-warning)'
              }}>
                <strong>Current Expansion State:</strong> TopBar is expanded with "{config.actionType}" content
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Demonstrates the full flexibility of TopBar for AI agents. Shows dynamic configuration of responsive behavior, mobile actions, expansion content, and animation settings. Perfect for AI-driven adaptive interfaces.'
      }
    }
  }
};