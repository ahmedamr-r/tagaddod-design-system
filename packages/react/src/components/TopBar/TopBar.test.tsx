import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TopBar } from './TopBar';

// Mock the Popover component
jest.mock('../Popover', () => ({
  Popover: ({ children, open, onOpenChange }: any) => (
    <div data-testid="popover" data-open={open} onClick={() => onOpenChange?.(!open)}>
      {children}
    </div>
  ),
  PopoverTrigger: ({ children, asChild }: any) => (
    asChild ? children : <div data-testid="popover-trigger">{children}</div>
  ),
  PopoverContent: ({ children }: any) => (
    <div data-testid="popover-content">{children}</div>
  )
}));

describe('TopBar', () => {
  const defaultProps = {
    selectedWarehouse: 'Al Haram Warehouse',
    warehouses: ['Al Haram Warehouse', 'Main Warehouse', 'Secondary Warehouse'],
    onWarehouseChange: jest.fn(),
    onLogoClick: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<TopBar {...defaultProps} />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Al Haram Warehouse')).toBeInTheDocument();
  });

  it('renders logo correctly', () => {
    render(<TopBar {...defaultProps} logoClickable={true} />);
    
    // Logo should be present (as SVG)
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('calls onLogoClick when logo is clicked and clickable', async () => {
    const user = userEvent.setup();
    render(<TopBar {...defaultProps} logoClickable={true} />);
    
    const logoButton = screen.getByRole('button', { name: /tagaddod/i });
    await user.click(logoButton);
    
    expect(defaultProps.onLogoClick).toHaveBeenCalledTimes(1);
  });

  it('does not make logo clickable when logoClickable is false', () => {
    render(<TopBar {...defaultProps} logoClickable={false} />);
    
    expect(screen.queryByRole('button', { name: /tagaddod/i })).not.toBeInTheDocument();
  });

  it('displays selected warehouse correctly', () => {
    render(<TopBar {...defaultProps} selectedWarehouse="Custom Warehouse" />);
    
    expect(screen.getByText('Custom Warehouse')).toBeInTheDocument();
  });

  it('disables warehouse selector when warehouseDisabled is true', () => {
    render(<TopBar {...defaultProps} warehouseDisabled={true} />);
    
    const warehouseButton = screen.getByRole('button', { name: /select warehouse/i });
    expect(warehouseButton).toBeDisabled();
  });

  it('calls onWarehouseChange when warehouse option is clicked', async () => {
    const user = userEvent.setup();
    render(<TopBar {...defaultProps} />);
    
    // Click warehouse selector to open dropdown
    const warehouseButton = screen.getByRole('button', { name: /select warehouse/i });
    await user.click(warehouseButton);
    
    // Click on a warehouse option
    const warehouseOption = screen.getByText('Main Warehouse');
    await user.click(warehouseOption);
    
    expect(defaultProps.onWarehouseChange).toHaveBeenCalledWith('Main Warehouse');
  });

  it('shows all warehouse options in dropdown', () => {
    render(<TopBar {...defaultProps} />);
    
    // All warehouse options should be rendered
    expect(screen.getByText('Al Haram Warehouse')).toBeInTheDocument();
    expect(screen.getByText('Main Warehouse')).toBeInTheDocument();
    expect(screen.getByText('Secondary Warehouse')).toBeInTheDocument();
  });

  it('highlights selected warehouse option', () => {
    render(<TopBar {...defaultProps} />);
    
    const selectedOption = screen.getByText('Al Haram Warehouse').closest('button');
    expect(selectedOption).toHaveClass('warehouseOptionActive');
    
    // Check mark should be present for selected option
    expect(selectedOption).toHaveTextContent('✓');
  });

  it('applies custom className', () => {
    render(<TopBar {...defaultProps} className="custom-class" />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('custom-class');
  });

  it('renders with default warehouse when no selectedWarehouse provided', () => {
    const propsWithoutSelected = { ...defaultProps };
    delete (propsWithoutSelected as any).selectedWarehouse;
    
    render(<TopBar {...propsWithoutSelected} />);
    
    expect(screen.getByText('Al Haram Warehouse')).toBeInTheDocument();
  });

  it('renders with default warehouses when no warehouses provided', () => {
    const propsWithoutWarehouses = { ...defaultProps };
    delete (propsWithoutWarehouses as any).warehouses;
    
    render(<TopBar {...propsWithoutWarehouses} />);
    
    // Should render default warehouses
    expect(screen.getByText('Al Haram Warehouse')).toBeInTheDocument();
    expect(screen.getByText('Main Warehouse')).toBeInTheDocument();
    expect(screen.getByText('Secondary Warehouse')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<TopBar {...defaultProps} />);
    
    const warehouseButton = screen.getByRole('button', { name: /select warehouse/i });
    expect(warehouseButton).toHaveAttribute('aria-label');
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});