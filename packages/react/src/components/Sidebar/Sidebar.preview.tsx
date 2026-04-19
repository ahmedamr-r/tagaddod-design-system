import { useState } from 'react';
import type { ComponentType } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import {
  IconHome,
  IconChartBar,
  IconUsers,
  IconShoppingCart,
  IconSettings,
  IconLogout,
} from '@tabler/icons-react';
import { Sidebar, sidebarPositions, type SidebarMenuItem, type SidebarProps } from './Sidebar';

type SidebarIcon = ComponentType<{ size?: number; className?: string }>;
const HomeIcon = IconHome as unknown as SidebarIcon;
const ChartBarIcon = IconChartBar as unknown as SidebarIcon;
const UsersIcon = IconUsers as unknown as SidebarIcon;
const ShoppingCartIcon = IconShoppingCart as unknown as SidebarIcon;
const SettingsIcon = IconSettings as unknown as SidebarIcon;
const LogoutIcon = IconLogout as unknown as SidebarIcon;

const basicMenuItems: SidebarMenuItem[] = [
  { id: 'home', icon: HomeIcon, label: 'Home' },
  { id: 'analytics', icon: ChartBarIcon, label: 'Analytics' },
  { id: 'orders', icon: ShoppingCartIcon, label: 'Orders' },
  { id: 'customers', icon: UsersIcon, label: 'Customers' },
];

const nestedMenuItems: SidebarMenuItem[] = [
  { id: 'home', icon: HomeIcon, label: 'Home' },
  {
    id: 'catalog',
    icon: ShoppingCartIcon,
    label: 'Catalog',
    hasChildren: true,
    children: [
      { id: 'catalog-products', label: 'Products' },
      { id: 'catalog-collections', label: 'Collections' },
      { id: 'catalog-inventory', label: 'Inventory' },
    ],
  },
  { id: 'customers', icon: UsersIcon, label: 'Customers' },
];

const bottomItems: SidebarMenuItem[] = [
  { id: 'settings', icon: SettingsIcon, label: 'Settings' },
  { id: 'logout', icon: LogoutIcon, label: 'Logout' },
];

const Stage = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      height: 360,
      border: '1px solid var(--t-color-border-secondary, #e5e7eb)',
      borderRadius: 8,
      overflow: 'hidden',
    }}
  >
    {children}
    <main style={{ flex: 1, padding: 24, background: 'var(--t-color-surface-primary, #fff)' }}>
      <h3 style={{ marginTop: 0 }}>Main content</h3>
      <p style={{ margin: 0, color: 'var(--t-color-text-secondary, #6b7280)' }}>
        The sidebar sits alongside the main content and pushes it inward rather than overlaying.
      </p>
    </main>
  </div>
);

export const preview: PreviewModule<SidebarProps> = {
  name: 'Sidebar',
  slug: 'sidebar',
  description: 'Expandable navigation rail with nested groups, secondary items, and bottom section.',
  component: Sidebar,
  defaultProps: {
    menuItems: basicMenuItems,
    defaultExpanded: true,
    position: 'left',
    showBottomSection: false,
    hoverExpand: false,
    defaultSelectedItem: 'home',
  },
  controls: {
    position: { type: 'select', options: sidebarPositions, description: 'Left or right (auto-flipped in RTL)' },
    defaultExpanded: { type: 'boolean', description: 'Start in expanded state' },
    hoverExpand: { type: 'boolean', description: 'Expand when the pointer hovers over the sidebar' },
    showBottomSection: { type: 'boolean', description: 'Show settings/logout at the bottom' },
  },
  examples: [
    {
      name: 'Default',
      props: {},
      render: () => {
        const Demo = () => {
          const [selected, setSelected] = useState('home');
          return (
            <Stage>
              <Sidebar menuItems={basicMenuItems} selectedItem={selected} onItemChange={setSelected} />
            </Stage>
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'Collapsed',
      props: {},
      render: () => (
        <Stage>
          <Sidebar menuItems={basicMenuItems} defaultExpanded={false} defaultSelectedItem="home" />
        </Stage>
      ),
    },
    {
      name: 'Nested',
      props: {},
      render: () => {
        const Demo = () => {
          const [selected, setSelected] = useState('catalog-products');
          return (
            <Stage>
              <Sidebar
                menuItems={nestedMenuItems}
                selectedItem={selected}
                onItemChange={setSelected}
              />
            </Stage>
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'WithBottomSection',
      props: {},
      render: () => (
        <Stage>
          <Sidebar
            menuItems={basicMenuItems}
            bottomItems={bottomItems}
            showBottomSection
            defaultSelectedItem="home"
          />
        </Stage>
      ),
    },
  ],
};
