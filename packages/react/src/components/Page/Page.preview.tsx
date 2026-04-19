import type { ComponentType } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { IconChartBar, IconHome, IconShoppingCart, IconUsers } from '@tabler/icons-react';
import { Page, type PageProps } from './Page';
import type { SidebarMenuItem } from '../Sidebar/Sidebar';

type SidebarIcon = ComponentType<{ size?: number; className?: string }>;

const menuItems: SidebarMenuItem[] = [
  { id: 'home', icon: IconHome as unknown as SidebarIcon, label: 'Home' },
  { id: 'analytics', icon: IconChartBar as unknown as SidebarIcon, label: 'Analytics' },
  { id: 'orders', icon: IconShoppingCart as unknown as SidebarIcon, label: 'Orders' },
  { id: 'customers', icon: IconUsers as unknown as SidebarIcon, label: 'Customers' },
];

const Stage = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      height: 480,
      border: '1px solid var(--t-color-border-secondary, #e5e7eb)',
      borderRadius: 8,
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

export const preview: PreviewModule<PageProps> = {
  name: 'Page',
  slug: 'page',
  description: 'Application shell composing TopBar, Sidebar, and main content with responsive behaviour.',
  component: Page,
  defaultProps: {
    showSidebar: true,
    showTopBar: true,
    containerMaxWidth: '1240px',
    disableResponsive: false,
    sidebarProps: { menuItems, defaultSelectedItem: 'home' },
    topBarProps: { showWarehouseDropdown: true, selectedWarehouse: 'Al Haram Warehouse' },
    children: (
      <div>
        <h2 style={{ marginTop: 0 }}>Dashboard</h2>
        <p style={{ margin: 0 }}>
          Page composes TopBar and Sidebar for you and renders your content in the main area.
        </p>
      </div>
    ),
  },
  controls: {
    showSidebar: { type: 'boolean', description: 'Render the Sidebar' },
    showTopBar: { type: 'boolean', description: 'Render the TopBar' },
    containerMaxWidth: { type: 'text', description: 'Content container max width (CSS value)' },
    disableResponsive: { type: 'boolean', description: 'Force desktop layout regardless of viewport' },
  },
  examples: [
    {
      name: 'Default',
      props: {},
      render: () => (
        <Stage>
          <Page
            sidebarProps={{ menuItems, defaultSelectedItem: 'home' }}
            topBarProps={{ showWarehouseDropdown: true }}
          >
            <h2 style={{ marginTop: 0 }}>Dashboard</h2>
            <p>Default application shell.</p>
          </Page>
        </Stage>
      ),
    },
    {
      name: 'NoSidebar',
      props: {},
      render: () => (
        <Stage>
          <Page
            showSidebar={false}
            topBarProps={{ showWarehouseDropdown: true }}
          >
            <h2 style={{ marginTop: 0 }}>Focus view</h2>
            <p>Sidebar hidden — useful for onboarding or checkout pages.</p>
          </Page>
        </Stage>
      ),
    },
    {
      name: 'NoTopBar',
      props: {},
      render: () => (
        <Stage>
          <Page
            showTopBar={false}
            sidebarProps={{ menuItems, defaultSelectedItem: 'analytics' }}
          >
            <h2 style={{ marginTop: 0 }}>Analytics</h2>
            <p>TopBar hidden — useful for full-height dashboards.</p>
          </Page>
        </Stage>
      ),
    },
  ],
};
