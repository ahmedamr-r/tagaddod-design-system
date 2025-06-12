import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconHome, IconUsers, IconSettings } from '@tabler/icons-react';
import { Sidebar } from './Sidebar';
import type { SidebarMenuItem } from './Sidebar';

const mockMenuItems: SidebarMenuItem[] = [
  {
    id: 'dashboard',
    icon: IconHome,
    label: 'Dashboard',
    hasChildren: true,
    children: [
      { id: 'overview', label: 'Overview' },
      { id: 'analytics', label: 'Analytics' }
    ]
  },
  {
    id: 'users',
    icon: IconUsers,
    label: 'Users'
  }
];

const mockBottomItems: SidebarMenuItem[] = [
  {
    id: 'settings',
    icon: IconSettings,
    label: 'Settings'
  }
];

describe('Sidebar', () => {
  it('renders with default menu items when none provided', () => {
    render(<Sidebar />);
    
    expect(screen.getByRole('complementary')).toBeInTheDocument();
    expect(screen.getByText('T')).toBeInTheDocument(); // Brand icon
  });

  it('renders custom menu items', () => {
    render(
      <Sidebar 
        menuItems={mockMenuItems}
        bottomItems={mockBottomItems}
        defaultExpanded={true}
      />
    );
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('handles menu item selection', async () => {
    const user = userEvent.setup();
    const onItemChange = jest.fn();
    
    render(
      <Sidebar 
        menuItems={mockMenuItems}
        onItemChange={onItemChange}
        defaultExpanded={true}
      />
    );
    
    await user.click(screen.getByText('Users'));
    
    expect(onItemChange).toHaveBeenCalledWith('users');
  });

  it('expands and collapses groups with children', async () => {
    const user = userEvent.setup();
    
    render(
      <Sidebar 
        menuItems={mockMenuItems}
        defaultExpanded={true}
      />
    );
    
    // Initially dashboard should be expanded (default)
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    
    // Click dashboard to collapse
    await user.click(screen.getByText('Dashboard'));
    
    await waitFor(() => {
      expect(screen.queryByText('Overview')).not.toBeInTheDocument();
      expect(screen.queryByText('Analytics')).not.toBeInTheDocument();
    });
  });

  it('shows selected item with active styling', () => {
    render(
      <Sidebar 
        menuItems={mockMenuItems}
        selectedItem="users"
        defaultExpanded={true}
      />
    );
    
    const usersButton = screen.getByText('Users').closest('button');
    expect(usersButton).toHaveClass('menuItemActive');
  });

  it('handles hover expansion when enabled', async () => {
    const onExpandedChange = jest.fn();
    
    render(
      <Sidebar 
        menuItems={mockMenuItems}
        hoverExpand={true}
        onExpandedChange={onExpandedChange}
      />
    );
    
    const sidebar = screen.getByRole('complementary');
    
    fireEvent.mouseEnter(sidebar);
    expect(onExpandedChange).toHaveBeenCalledWith(true);
    
    fireEvent.mouseLeave(sidebar);
    expect(onExpandedChange).toHaveBeenCalledWith(false);
  });

  it('does not trigger hover expansion when disabled', () => {
    const onExpandedChange = jest.fn();
    
    render(
      <Sidebar 
        menuItems={mockMenuItems}
        hoverExpand={false}
        onExpandedChange={onExpandedChange}
      />
    );
    
    const sidebar = screen.getByRole('complementary');
    
    fireEvent.mouseEnter(sidebar);
    fireEvent.mouseLeave(sidebar);
    
    expect(onExpandedChange).not.toHaveBeenCalled();
  });

  it('handles controlled expansion state', () => {
    const { rerender } = render(
      <Sidebar 
        menuItems={mockMenuItems}
        expanded={false}
      />
    );
    
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).not.toHaveClass('sidebarExpanded');
    
    rerender(
      <Sidebar 
        menuItems={mockMenuItems}
        expanded={true}
      />
    );
    
    expect(sidebar).toHaveClass('sidebarExpanded');
  });

  it('applies right position styling', () => {
    render(
      <Sidebar 
        menuItems={mockMenuItems}
        position="right"
      />
    );
    
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('sidebarRight');
  });

  it('handles disabled menu items', async () => {
    const user = userEvent.setup();
    const onItemChange = jest.fn();
    
    const disabledMenuItems: SidebarMenuItem[] = [
      {
        id: 'disabled-item',
        icon: IconUsers,
        label: 'Disabled Item',
        disabled: true
      }
    ];
    
    render(
      <Sidebar 
        menuItems={disabledMenuItems}
        onItemChange={onItemChange}
        defaultExpanded={true}
      />
    );
    
    const disabledButton = screen.getByText('Disabled Item').closest('button');
    expect(disabledButton).toBeDisabled();
    expect(disabledButton).toHaveClass('menuItemDisabled');
    
    await user.click(disabledButton!);
    expect(onItemChange).not.toHaveBeenCalled();
  });

  it('shows parent active state when child is selected', () => {
    render(
      <Sidebar 
        menuItems={mockMenuItems}
        selectedItem="overview"
        defaultExpanded={true}
      />
    );
    
    const dashboardButton = screen.getByText('Dashboard').closest('button');
    expect(dashboardButton).toHaveClass('menuItemParentActive');
    
    const overviewButton = screen.getByText('Overview').closest('button');
    expect(overviewButton).toHaveClass('menuItemActive');
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    const onItemChange = jest.fn();
    
    render(
      <Sidebar 
        menuItems={mockMenuItems}
        onItemChange={onItemChange}
        defaultExpanded={true}
      />
    );
    
    const usersButton = screen.getByText('Users').closest('button');
    
    await user.tab();
    await user.tab(); // Skip brand section, focus on first menu item
    await user.keyboard('{Enter}');
    
    // The exact behavior depends on which button gets focus first
    // This test ensures keyboard interaction works
    expect(onItemChange).toHaveBeenCalled();
  });

  it('applies RTL styling when document direction is RTL', () => {
    // Mock RTL direction
    Object.defineProperty(document, 'dir', {
      writable: true,
      value: 'rtl'
    });
    
    render(<Sidebar menuItems={mockMenuItems} />);
    
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('sidebarRTL');
    
    // Reset
    document.dir = 'ltr';
  });

  it('renders brand section correctly in collapsed and expanded states', () => {
    const { rerender } = render(
      <Sidebar 
        menuItems={mockMenuItems}
        expanded={false}
      />
    );
    
    // In collapsed state, should show just "T"
    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.queryByText('agaddod')).not.toBeInTheDocument();
    
    rerender(
      <Sidebar 
        menuItems={mockMenuItems}
        expanded={true}
      />
    );
    
    // In expanded state, should show both "T" and "agaddod"
    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.getByText('agaddod')).toBeInTheDocument();
  });
});