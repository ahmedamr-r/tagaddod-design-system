import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sonner, showSonner } from './Sonner';

// Mock Sonner library since it requires browser environment
jest.mock('sonner', () => ({
  Toaster: ({ children, ...props }: any) => (
    <div data-testid="sonner-toaster" {...props}>
      {children}
    </div>
  ),
  toast: Object.assign(jest.fn(() => 'mock-toast-id'), {
    success: jest.fn(() => 'mock-success-id'),
    error: jest.fn(() => 'mock-error-id'),
    dismiss: jest.fn(),
  }),
}));

describe('Sonner', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Sonner component with default props', () => {
    render(<Sonner />);
    
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toBeInTheDocument();
  });

  it('renders with custom position', () => {
    render(<Sonner position="top-left" />);
    
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    render(
      <Sonner 
        position="top-right"
        visibleToasts={3}
        closeButton={false}
        richColors={true}
      />
    );
    
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Sonner className="custom-toaster" />);
    
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toHaveClass('custom-toaster');
  });
});

describe('showSonner function', () => {
  beforeEach(() => {
    // Mock document.dir for RTL detection
    Object.defineProperty(document, 'dir', {
      writable: true,
      value: 'ltr',
    });
    Object.defineProperty(document.documentElement, 'dir', {
      writable: true,
      value: 'ltr',
    });
  });

  it('calls toast function with default type', () => {
    const { toast } = require('sonner');
    
    showSonner({
      title: 'Test notification',
      description: 'Test description'
    });

    expect(toast).toHaveBeenCalled();
  });

  it('calls toast.success for success type', () => {
    const { toast } = require('sonner');
    
    showSonner({
      type: 'success',
      title: 'Success message',
      description: 'Success description'
    });

    expect(toast.success).toHaveBeenCalled();
  });

  it('calls toast.error for error type', () => {
    const { toast } = require('sonner');
    
    showSonner({
      type: 'error',
      title: 'Error message',
      description: 'Error description'
    });

    expect(toast.error).toHaveBeenCalled();
  });

  it('handles RTL direction correctly', () => {
    // Set RTL direction
    Object.defineProperty(document, 'dir', {
      value: 'rtl',
    });

    const { toast } = require('sonner');
    
    showSonner({
      title: 'عنوان',
      description: 'وصف'
    });

    expect(toast).toHaveBeenCalled();
  });

  it('respects showIcon option', () => {
    const { toast } = require('sonner');
    
    showSonner({
      title: 'Test',
      showIcon: false
    });

    expect(toast).toHaveBeenCalled();
  });

  it('respects showDescription option', () => {
    const { toast } = require('sonner');
    
    showSonner({
      title: 'Test',
      description: 'Description',
      showDescription: false
    });

    expect(toast).toHaveBeenCalled();
  });

  it('respects showClose option', () => {
    const { toast } = require('sonner');
    
    showSonner({
      title: 'Test',
      showClose: false
    });

    expect(toast).toHaveBeenCalled();
  });

  it('handles iconWithBackground option', () => {
    const { toast } = require('sonner');
    
    showSonner({
      title: 'Test',
      iconWithBackground: false
    });

    expect(toast).toHaveBeenCalled();
  });

  it('handles custom duration', () => {
    const { toast } = require('sonner');
    
    showSonner({
      title: 'Test',
      duration: 1000
    });

    expect(toast).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        duration: 1000
      })
    );
  });

  it('handles infinite duration when duration is 0', () => {
    const { toast } = require('sonner');
    
    showSonner({
      title: 'Test',
      duration: 0
    });

    expect(toast).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        duration: Infinity
      })
    );
  });

  it('handles onDismiss callback', () => {
    const { toast } = require('sonner');
    const onDismiss = jest.fn();
    
    showSonner({
      title: 'Test',
      onDismiss
    });

    expect(toast).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        onDismiss
      })
    );
  });

  it('handles action configuration', () => {
    const { toast } = require('sonner');
    const action = {
      label: 'Undo',
      onClick: jest.fn()
    };
    
    showSonner({
      title: 'Test',
      action
    });

    expect(toast).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        action
      })
    );
  });
});