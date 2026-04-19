import { useState } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { IconHome, IconSettings, IconUser } from '@tabler/icons-react';
import { TopBar, type TopBarProps } from './TopBar';
import { TextInput } from '../TextInput/TextInput';
import { Button } from '../Button/Button';

const popoverSides = ['top', 'right', 'bottom', 'left'] as const;
const popoverAligns = ['start', 'center', 'end'] as const;

const Stage = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      border: '1px solid var(--t-color-border-secondary, #e5e7eb)',
      borderRadius: 8,
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

export const preview: PreviewModule<TopBarProps> = {
  name: 'TopBar',
  slug: 'top-bar',
  description: 'Application header with logo, optional centre slot, and a configurable end slot.',
  component: TopBar,
  defaultProps: {
    showWarehouseDropdown: true,
    selectedWarehouse: 'Al Haram Warehouse',
    warehouses: ['Al Haram Warehouse', 'Main Warehouse', 'Secondary Warehouse'],
    showCenterSection: false,
    showHamburgerMenu: false,
    popoverSide: 'bottom',
    popoverAlign: 'end',
  },
  controls: {
    selectedWarehouse: { type: 'text', description: 'Currently selected warehouse label' },
    showCenterSection: { type: 'boolean', description: 'Show the centre (search) slot' },
    showEndSection: { type: 'boolean', description: 'Show the end slot' },
    showWarehouseDropdown: { type: 'boolean', description: 'Use the built-in warehouse dropdown' },
    showHamburgerMenu: { type: 'boolean', description: 'Show mobile hamburger button' },
    showLogoutOption: { type: 'boolean', description: 'Include logout in the dropdown' },
    logoClickable: { type: 'boolean', description: 'Render the logo as a clickable button' },
    popoverSide: { type: 'select', options: popoverSides, description: 'Dropdown popover side' },
    popoverAlign: { type: 'select', options: popoverAligns, description: 'Dropdown popover alignment' },
  },
  examples: [
    {
      name: 'Default',
      props: {},
      render: () => (
        <Stage>
          <TopBar showWarehouseDropdown selectedWarehouse="Al Haram Warehouse" />
        </Stage>
      ),
    },
    {
      name: 'WithSearch',
      props: {},
      render: () => (
        <Stage>
          <TopBar
            showWarehouseDropdown
            showCenterSection
            centerContent={<TextInput placeholder="Search orders, customers, products…" hideLabel />}
          />
        </Stage>
      ),
    },
    {
      name: 'CustomEndSlot',
      props: {},
      render: () => (
        <Stage>
          <TopBar
            endContent={
              <div style={{ display: 'flex', gap: 8 }}>
                <Button variant="outlined" size="small">Help</Button>
                <Button size="small">New order</Button>
              </div>
            }
          />
        </Stage>
      ),
    },
    {
      name: 'CustomListbox',
      props: {},
      render: () => (
        <Stage>
          <TopBar
            showWarehouseDropdown
            customListboxOptions={[
              { label: 'Home', value: 'home', prefix: <IconHome size={16} /> },
              { label: 'Profile', value: 'profile', prefix: <IconUser size={16} /> },
              { label: 'Settings', value: 'settings', prefix: <IconSettings size={16} /> },
            ]}
          />
        </Stage>
      ),
    },
    {
      name: 'Controlled',
      description: 'Controlled warehouse selection via state.',
      props: {},
      render: () => {
        const Demo = () => {
          const [warehouse, setWarehouse] = useState('Main Warehouse');
          return (
            <Stage>
              <TopBar
                showWarehouseDropdown
                selectedWarehouse={warehouse}
                warehouses={['Main Warehouse', 'Secondary Warehouse', 'Al Haram Warehouse']}
                onWarehouseChange={setWarehouse}
              />
            </Stage>
          );
        };
        return <Demo />;
      },
    },
  ],
};
