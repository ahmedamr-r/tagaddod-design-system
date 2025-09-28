import React, { useState, useEffect, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
import { IconHome, IconChartBar, IconUsers, IconSettings, IconLogout, IconPackage, IconTruck } from '@tabler/icons-react';

const meta: Meta<typeof Page> = {
  title: 'Layout/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => import('./Page.mdx'),
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'Content to display in the main area'
    },
    showSidebar: {
      control: 'boolean',
      description: 'Whether to show the sidebar'
    },
    showTopBar: {
      control: 'boolean',
      description: 'Whether to show the top bar'
    },
    containerMaxWidth: {
      control: 'text',
      description: 'Maximum width for the content container'
    },
    disableResponsive: {
      control: 'boolean',
      description: 'Disable responsive behavior and use desktop layout'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Page>;

// Sample menu items for stories
const sampleMenuItems = [
  {
    id: 'dashboard',
    icon: IconHome,
    label: 'Dashboard',
    labelEn: 'Dashboard',
    labelAr: 'لوحة القيادة'
  },
  {
    id: 'analytics',
    icon: IconChartBar,
    label: 'Analytics',
    labelEn: 'Analytics',
    labelAr: 'التحليلات'
  },
  {
    id: 'inventory',
    icon: IconPackage,
    label: 'Inventory',
    labelEn: 'Inventory',
    labelAr: 'المخزون',
    hasChildren: true,
    children: [
      {
        id: 'products',
        label: 'Products',
        labelEn: 'Products',
        labelAr: 'المنتجات'
      },
      {
        id: 'categories',
        label: 'Categories',
        labelEn: 'Categories',
        labelAr: 'الفئات'
      }
    ]
  }
];

const sampleSecondaryItems = [
  {
    id: 'users',
    icon: IconUsers,
    label: 'Users',
    labelEn: 'Users',
    labelAr: 'المستخدمون'
  },
  {
    id: 'shipping',
    icon: IconTruck,
    label: 'Shipping',
    labelEn: 'Shipping',
    labelAr: 'الشحن'
  }
];

const sampleBottomItems = [
  {
    id: 'settings',
    icon: IconSettings,
    label: 'Settings',
    labelEn: 'Settings',
    labelAr: 'الإعدادات'
  },
  {
    id: 'logout',
    icon: IconLogout,
    label: 'Logout',
    labelEn: 'Logout',
    labelAr: 'تسجيل الخروج'
  }
];

// Live dimensions component for real-time testing
const LiveDimensionsContent = ({ title = "Live Responsive Demo" }: { title?: string }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({
          width: Math.round(rect.width),
          height: Math.round(rect.height)
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const sidebarWidth = 240; // Full sidebar width
  const topBarHeight = 56;
  const remainingWidth = windowSize.width - sidebarWidth;
  const maxContainerWidth = 1240;
  const minMargin = 24;
  const availableForContainer = remainingWidth - (minMargin * 2);
  const actualContainerWidth = Math.min(maxContainerWidth, availableForContainer);
  const actualMargins = (remainingWidth - actualContainerWidth) / 2;

  const getBreakpointInfo = (width: number) => {
    if (width >= 1440) return { name: 'XL', description: 'Extra Large (>1440px)', color: '#10B981' };
    if (width >= 1220) return { name: 'L', description: 'Large (1220-1439px)', color: '#3B82F6' };
    if (width >= 768) return { name: 'MD', description: 'Medium (768-1219px)', color: '#F59E0B' };
    if (width >= 490) return { name: 'SM', description: 'Small (490-767px)', color: '#EF4444' };
    return { name: 'XS', description: 'Extra Small (<490px)', color: '#8B5CF6' };
  };

  const breakpoint = getBreakpointInfo(windowSize.width);

  return (
    <div ref={containerRef} style={{
      padding: '2rem',
      backgroundColor: 'var(--t-color-surface-secondary, #f8f9fa)',
      borderRadius: 'var(--t-border-radius-200, 8px)',
      minHeight: '600px',
      border: '2px dashed var(--t-color-border-brand, #16161d)',
      position: 'relative'
    }}>
      {/* Container dimensions overlay */}
      <div style={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        background: 'var(--t-color-surface-primary, #ffffff)',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 600,
        border: '1px solid var(--t-color-border-secondary, #e2e8f0)',
        fontFamily: 'monospace'
      }}>
        Container: {containerSize.width}×{containerSize.height}px
      </div>

      <h1 style={{
        margin: '0 0 2rem 0',
        fontSize: 'var(--t-font-size-heading-lg, 2rem)',
        fontWeight: 'var(--t-font-weight-semibold, 600)',
        color: 'var(--t-color-text-primary, #16161d)',
        textAlign: 'center'
      }}>
        {title}
      </h1>

      {/* Live metrics dashboard */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {/* Window Info */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--t-color-surface-primary, #ffffff)',
          borderRadius: 'var(--t-border-radius-200, 8px)',
          border: '1px solid var(--t-color-border-secondary, #e2e8f0)'
        }}>
          <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: '1.125rem',
            color: 'var(--t-color-text-primary, #16161d)'
          }}>
            🪟 Window Size
          </h3>
          <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {windowSize.width} × {windowSize.height}px
          </div>
          <div style={{
            display: 'inline-block',
            padding: '4px 8px',
            borderRadius: '4px',
            background: breakpoint.color,
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: 600
          }}>
            {breakpoint.name}: {breakpoint.description}
          </div>
        </div>

        {/* Container Logic */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--t-color-surface-primary, #ffffff)',
          borderRadius: 'var(--t-border-radius-200, 8px)',
          border: '1px solid var(--t-color-border-secondary, #e2e8f0)'
        }}>
          <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: '1.125rem',
            color: 'var(--t-color-text-primary, #16161d)'
          }}>
            📐 Container Logic
          </h3>
          <div style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
            <div><strong>Max Container:</strong> <code>{maxContainerWidth}px</code></div>
            <div><strong>Available Space:</strong> <code>{availableForContainer}px</code></div>
            <div><strong>Actual Container:</strong> <code style={{ color: breakpoint.color, fontWeight: 'bold' }}>{actualContainerWidth}px</code></div>
            <div><strong>Side Margins:</strong> <code>{Math.round(actualMargins)}px each</code></div>
          </div>
        </div>

        {/* Layout Info */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--t-color-surface-primary, #ffffff)',
          borderRadius: 'var(--t-border-radius-200, 8px)',
          border: '1px solid var(--t-color-border-secondary, #e2e8f0)'
        }}>
          <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: '1.125rem',
            color: 'var(--t-color-text-primary, #16161d)'
          }}>
            🎛️ Layout State
          </h3>
          <div style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
            <div><strong>Sidebar:</strong> <code>{sidebarWidth}px</code></div>
            <div><strong>TopBar:</strong> <code>{topBarHeight}px</code></div>
            <div><strong>Content Width:</strong> <code>{remainingWidth}px</code></div>
            <div><strong>Margin Behavior:</strong> <code style={{
              color: actualMargins >= minMargin ? '#10B981' : '#EF4444',
              fontWeight: 'bold'
            }}>
              {actualMargins >= minMargin ? 'Flexible' : 'Fixed'}
            </code></div>
          </div>
        </div>
      </div>

      {/* Visual margin indicators */}
      <div style={{
        background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), transparent)',
        padding: '2rem',
        borderRadius: '8px',
        border: '2px dashed #10B981',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#10B981' }}>Content Area Visualization</h2>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#6B7280' }}>
          This green area represents your actual content container.
          <br />
          Resize the window to see how margins adapt at different viewport widths.
        </p>
      </div>

      {/* Sample content grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {[
          { title: 'Extreme Width Test', desc: 'Watch margins grow on ultra-wide screens' },
          { title: 'Container Logic', desc: 'Max 1240px width with smart margins' },
          { title: 'Responsive Behavior', desc: 'Automatic breakpoint adaptation' },
          { title: 'Margin Calculation', desc: 'Dynamic spacing based on available space' },
          { title: 'Layout Orchestration', desc: 'Sidebar + TopBar + Content integration' },
          { title: 'Real-time Demo', desc: 'Live metrics update as you resize' }
        ].map((item, i) => (
          <div key={i} style={{
            padding: '1.5rem',
            backgroundColor: 'var(--t-color-surface-primary, #ffffff)',
            borderRadius: 'var(--t-border-radius-200, 8px)',
            border: '1px solid var(--t-color-border-secondary, #e2e8f0)'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: breakpoint.color }}>{item.title}</h4>
            <p style={{ margin: 0, color: 'var(--t-color-text-secondary, #64748b)', fontSize: '0.875rem' }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: 'var(--t-color-surface-warning, #FEF3C7)',
        borderRadius: '8px',
        border: '1px solid var(--t-color-border-warning, #F59E0B)',
        textAlign: 'center'
      }}>
        <strong>🎯 Testing Instructions:</strong><br />
        Resize your browser window to see real-time responsive behavior.
        On ultra-wide screens, watch the margins grow while keeping the container at max 1240px.
      </div>
    </div>
  );
};

// Sample content component
const SampleContent = ({ title = "Page Content", description = "This is the main content area" }: { title?: string; description?: string }) => (
  <div style={{
    padding: '2rem',
    backgroundColor: 'var(--t-color-surface-secondary, #f8f9fa)',
    borderRadius: 'var(--t-border-radius-200, 8px)',
    minHeight: '600px'
  }}>
    <h1 style={{
      margin: '0 0 1rem 0',
      fontSize: 'var(--t-font-size-heading-lg, 2rem)',
      fontWeight: 'var(--t-font-weight-semibold, 600)',
      color: 'var(--t-color-text-primary, #16161d)'
    }}>
      {title}
    </h1>
    <p style={{
      margin: '0 0 2rem 0',
      fontSize: 'var(--t-font-size-body-md, 1rem)',
      color: 'var(--t-color-text-secondary, #64748b)',
      lineHeight: 'var(--t-line-height-english, 1.5)'
    }}>
      {description}
    </p>

    {/* Sample content cards */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} style={{
          padding: '1.5rem',
          backgroundColor: 'var(--t-color-surface-primary, #ffffff)',
          borderRadius: 'var(--t-border-radius-200, 8px)',
          border: '1px solid var(--t-color-border-secondary, #e2e8f0)'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem' }}>Card {i}</h3>
          <p style={{ margin: 0, color: 'var(--t-color-text-secondary, #64748b)' }}>
            Sample content for card {i}. This demonstrates how content flows within the responsive container.
          </p>
        </div>
      ))}
    </div>
  </div>
);

// Basic story with default configuration
export const Default: Story = {
  args: {
    children: <SampleContent />,
    sidebarProps: {
      menuItems: sampleMenuItems,
      secondaryItems: sampleSecondaryItems,
      bottomItems: sampleBottomItems,
      showBottomSection: true,
      selectedItem: 'dashboard'
    },
    topBarProps: {
      selectedWarehouse: 'Al Haram Warehouse',
      warehouses: ['Al Haram Warehouse', 'Main Warehouse', 'Secondary Warehouse']
    }
  }
};

// XL Breakpoint (>1440px)
export const XLBreakpoint: Story = {
  args: {
    ...Default.args,
    children: <SampleContent title="XL Breakpoint (>1440px)" description="Full sidebar expanded, 1240px max container with flexible margins" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'XL breakpoint showing full expanded sidebar with maximum container width and flexible margins.'
      }
    }
  }
};

// L Breakpoint (1220-1439px)
export const LBreakpoint: Story = {
  args: {
    ...Default.args,
    children: <SampleContent title="L Breakpoint (1220-1439px)" description="Full sidebar expanded, 1240px container with 24px minimum margins" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'laptop'
    },
    docs: {
      description: {
        story: 'L breakpoint maintaining full sidebar with 24px minimum margins.'
      }
    }
  }
};

// MD Breakpoint (768-1219px) - Icon only sidebar
export const MDBreakpoint: Story = {
  args: {
    ...Default.args,
    children: <SampleContent title="MD Breakpoint (768-1219px)" description="Icon-only sidebar with hover expansion, 24px margins" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
    docs: {
      description: {
        story: 'MD breakpoint with icon-only sidebar that expands on hover. Hover over the sidebar to see the expansion behavior.'
      }
    }
  }
};

// SM Breakpoint (490-767px) - Mobile with hamburger
export const SMBreakpoint: Story = {
  args: {
    ...Default.args,
    children: <SampleContent title="SM Breakpoint (490-767px)" description="Hidden sidebar with mobile overlay, 16px margins" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'SM breakpoint with hidden sidebar accessible via hamburger menu. Click the hamburger icon to open the mobile sidebar.'
      }
    }
  }
};

// XS Breakpoint (<490px) - Small mobile
export const XSBreakpoint: Story = {
  args: {
    ...Default.args,
    children: <SampleContent title="XS Breakpoint (<490px)" description="Hidden sidebar with mobile overlay, 16px margins, smallest screens" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    },
    docs: {
      description: {
        story: 'XS breakpoint for the smallest mobile devices with optimized spacing.'
      }
    }
  }
};

// RTL Support
export const RTLSupport: Story = {
  args: {
    ...Default.args,
    children: (
      <SampleContent
        title="دعم اللغة العربية"
        description="هذا مثال على كيفية عمل المكون مع النصوص العربية واتجاه النص من اليمين إلى اليسار. يتم تطبيق الخط العربي تلقائياً وضبط ارتفاع الأسطر."
      />
    ),
    sidebarProps: {
      menuItems: sampleMenuItems.map(item => ({
        ...item,
        label: item.labelAr || item.label
      })),
      secondaryItems: sampleSecondaryItems.map(item => ({
        ...item,
        label: item.labelAr || item.label
      })),
      bottomItems: sampleBottomItems.map(item => ({
        ...item,
        label: item.labelAr || item.label
      })),
      showBottomSection: true,
      selectedItem: 'dashboard'
    },
    topBarProps: {
      selectedWarehouse: 'مستودع الحرم',
      warehouses: ['مستودع الحرم', 'المستودع الرئيسي', 'المستودع الثانوي']
    }
  },
  parameters: {
    direction: 'rtl',
    docs: {
      description: {
        story: 'RTL (Right-to-Left) support with Arabic content, proper font switching, and layout adjustments.'
      }
    }
  }
};

// Without Sidebar
export const WithoutSidebar: Story = {
  args: {
    ...Default.args,
    showSidebar: false,
    children: <SampleContent title="Without Sidebar" description="Page layout with only TopBar and content area, no sidebar" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Page layout with sidebar hidden, useful for landing pages or simple layouts.'
      }
    }
  }
};

// Without TopBar
export const WithoutTopBar: Story = {
  args: {
    ...Default.args,
    showTopBar: false,
    children: <SampleContent title="Without TopBar" description="Page layout with only Sidebar and content area, no top bar" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Page layout with TopBar hidden, useful for full-screen applications.'
      }
    }
  }
};

// Minimal Layout
export const MinimalLayout: Story = {
  args: {
    showSidebar: false,
    showTopBar: false,
    children: <SampleContent title="Minimal Layout" description="Only content area with responsive container, no sidebar or topbar" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal layout with only the responsive content container.'
      }
    }
  }
};

// Custom Container Width
export const CustomContainerWidth: Story = {
  args: {
    ...Default.args,
    containerMaxWidth: '800px',
    children: <SampleContent title="Custom Container Width" description="Using custom container max-width of 800px instead of default 1240px" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Page with custom container max-width (800px) to demonstrate the flexibility of the container system.'
      }
    }
  }
};

// Disabled Responsive
export const DisabledResponsive: Story = {
  args: {
    ...Default.args,
    disableResponsive: true,
    children: <SampleContent title="Responsive Disabled" description="Desktop layout maintained at all screen sizes" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Page with responsive behavior disabled, maintaining desktop layout even on mobile viewports.'
      }
    }
  }
};

// Live Demo - Real-time Responsive Testing
export const LiveDemo: Story = {
  args: {
    children: <LiveDimensionsContent title="🎯 Live Responsive Demo - Resize Window to Test" />,
    sidebarProps: {
      menuItems: sampleMenuItems,
      secondaryItems: sampleSecondaryItems,
      bottomItems: sampleBottomItems,
      showBottomSection: true,
      selectedItem: 'analytics'
    },
    topBarProps: {
      selectedWarehouse: 'Al Haram Warehouse',
      warehouses: ['Al Haram Warehouse', 'Main Warehouse', 'Secondary Warehouse']
    }
  },
  decorators: [
    (Story) => {
      // Add CSS to remove Storybook padding for true fullscreen experience
      React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
          .sb-main-padded,
          .sb-show-main.sb-main-padded {
            padding: 0 !important;
            margin: 0 !important;
          }
          .sb-show-main {
            padding: 0 !important;
            margin: 0 !important;
          }
        `;
        document.head.appendChild(style);

        return () => {
          document.head.removeChild(style);
        };
      }, []);

      return <Story />;
    }
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Live demo showing real-time window dimensions and container behavior. Resize your browser window to see the responsive behavior and margin calculations in action. Perfect for testing extreme widths and understanding how the container system adapts.'
      }
    }
  }
};

// Complex Sidebar Configuration
export const ComplexSidebar: Story = {
  args: {
    children: <SampleContent title="Complex Sidebar" description="Demonstrating advanced sidebar configuration with nested items and custom handlers" />,
    sidebarProps: {
      menuItems: [
        ...sampleMenuItems,
        {
          id: 'reports',
          icon: IconChartBar,
          label: 'Reports',
          labelEn: 'Reports',
          labelAr: 'التقارير',
          hasChildren: true,
          children: [
            {
              id: 'sales-report',
              label: 'Sales Report',
              labelEn: 'Sales Report',
              labelAr: 'تقرير المبيعات'
            },
            {
              id: 'inventory-report',
              label: 'Inventory Report',
              labelEn: 'Inventory Report',
              labelAr: 'تقرير المخزون'
            },
            {
              id: 'user-report',
              label: 'User Report',
              labelEn: 'User Report',
              labelAr: 'تقرير المستخدمين'
            }
          ]
        }
      ],
      secondaryItems: sampleSecondaryItems,
      bottomItems: sampleBottomItems,
      showBottomSection: true,
      selectedItem: 'sales-report',
      onItemChange: (itemId: string) => {
        console.log('Selected item:', itemId);
      }
    },
    topBarProps: {
      selectedWarehouse: 'Al Haram Warehouse',
      warehouses: ['Al Haram Warehouse', 'Main Warehouse', 'Secondary Warehouse'],
      showLogoutOption: true,
      onWarehouseChange: (warehouse: string) => {
        console.log('Warehouse changed:', warehouse);
      },
      onLogoutClick: () => {
        console.log('Logout clicked');
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex sidebar configuration with nested menu items, custom handlers, and a selected child item.'
      }
    }
  }
};