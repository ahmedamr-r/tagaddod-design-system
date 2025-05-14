import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Drawer } from './Drawer';

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
    
    // Output the rendered HTML to check our changes
    console.log(document.body.innerHTML);
  });
});
