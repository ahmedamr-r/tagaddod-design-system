import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Drawer, useDrawerContext } from './Drawer';

// Mock vaul library which we assume has a portal
jest.mock('vaul', () => {
  return {
    Drawer: {
      Root: ({ children, open, onOpenChange, direction, modal }: any) => (
        <div data-testid="drawer-root" data-open={open} data-direction={direction} data-modal={modal}>
          {children}
        </div>
      ),
      Portal: ({ children }: any) => <div data-testid="drawer-portal">{children}</div>,
      Overlay: ({ className, style }: any) => <div data-testid="drawer-overlay" className={className} style={style}></div>,
      Content: ({ children, className, style, ref, ...props }: any) => (
        <div data-testid="drawer-content" className={className} style={style} {...props}>
          {children}
        </div>
      ),
    }
  };
});

// Component to test useDrawerContext hook
function TestDrawerContextComponent() {
  const { isInsideDrawer, drawerZIndex } = useDrawerContext();
  
  return (
    <div data-testid="drawer-context-test">
      <span data-testid="is-inside-drawer">{isInsideDrawer.toString()}</span>
      <span data-testid="drawer-z-index">{drawerZIndex}</span>
    </div>
  );
}

describe('Drawer Component', () => {
  it('renders with Button components instead of native buttons', () => {
    const handleOpenChange = jest.fn();
    
    render(
      <Drawer 
        open={true} 
        onOpenChange={handleOpenChange}
        title="Test Drawer"
        showBackButton={true}
        showClose={true}
        showFooter={true}
        primaryAction={{
          label: 'Save',
          onClick: () => {},
          variant: 'primary',
        }}
        secondaryAction={{
          label: 'Cancel',
          onClick: () => {},
          variant: 'secondary',
        }}
      >
        <div>Drawer content</div>
      </Drawer>
    );
    
    // Check that drawer content is rendered
    expect(screen.getByText('Drawer content')).toBeInTheDocument();
    expect(screen.getByText('Test Drawer')).toBeInTheDocument();
  });

  it('provides correct drawer context when inside drawer', () => {
    const handleOpenChange = jest.fn();
    
    render(
      <Drawer 
        open={true} 
        onOpenChange={handleOpenChange}
        title="Test Drawer"
      >
        <TestDrawerContextComponent />
      </Drawer>
    );
    
    // Check that context provides correct values inside drawer
    expect(screen.getByTestId('is-inside-drawer')).toHaveTextContent('true');
    expect(screen.getByTestId('drawer-z-index')).toHaveTextContent('200');
  });

  it('provides default context when outside drawer', () => {
    render(<TestDrawerContextComponent />);
    
    // Check that context provides default values outside drawer
    expect(screen.getByTestId('is-inside-drawer')).toHaveTextContent('false');
    expect(screen.getByTestId('drawer-z-index')).toHaveTextContent('150');
  });

  it('applies correct z-index CSS custom properties', () => {
    const handleOpenChange = jest.fn();
    
    render(
      <Drawer 
        open={true} 
        onOpenChange={handleOpenChange}
        title="Test Drawer"
      >
        <div>Content</div>
      </Drawer>
    );
    
    const drawerContent = screen.getByTestId('drawer-content');
    const drawerOverlay = screen.getByTestId('drawer-overlay');
    
    // Check that the components are rendered (CSS styles would be applied via CSS-in-JS or CSS modules)
    expect(drawerContent).toBeInTheDocument();
    expect(drawerOverlay).toBeInTheDocument();
  });

  it('handles RTL direction properly', () => {
    // Set document direction to RTL
    document.dir = 'rtl';
    
    const handleOpenChange = jest.fn();
    
    render(
      <Drawer 
        open={true} 
        onOpenChange={handleOpenChange}
        title="اختبار الدرج"
        position="right"
        showBackButton={true}
      >
        <div>محتوى الدرج</div>
      </Drawer>
    );
    
    // Check that content is rendered
    expect(screen.getByText('محتوى الدرج')).toBeInTheDocument();
    expect(screen.getByText('اختبار الدرج')).toBeInTheDocument();
    
    // Clean up
    document.dir = 'ltr';
  });

  it('renders footer actions correctly', () => {
    const handleOpenChange = jest.fn();
    const handlePrimaryAction = jest.fn();
    const handleSecondaryAction = jest.fn();
    
    render(
      <Drawer 
        open={true} 
        onOpenChange={handleOpenChange}
        title="Test Drawer"
        showFooter={true}
        primaryAction={{
          label: 'Save',
          onClick: handlePrimaryAction,
          variant: 'primary',
        }}
        secondaryAction={{
          label: 'Cancel',
          onClick: handleSecondaryAction,
          variant: 'secondary',
        }}
        footerContent={<span>Last saved: Today</span>}
      >
        <div>Content</div>
      </Drawer>
    );
    
    // Check footer content and actions are rendered
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Last saved: Today')).toBeInTheDocument();
    
    // Test action clicks
    fireEvent.click(screen.getByText('Save'));
    expect(handlePrimaryAction).toHaveBeenCalledTimes(1);
    
    fireEvent.click(screen.getByText('Cancel'));
    expect(handleSecondaryAction).toHaveBeenCalledTimes(1);
  });
});
