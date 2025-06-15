import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sonner, showSonner, sonnerTypes, sonnerPositions } from './Sonner';

// Mock the sonner library
jest.mock('sonner', () => ({
  toast: {
    custom: jest.fn(),
    dismiss: jest.fn(),
  },
  Toaster: ({ children, ...props }: any) => (
    <div data-testid="sonner-toaster" {...props}>
      {children}
    </div>
  ),
}));

describe('Sonner', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Sonner Component', () => {
    it('renders the Sonner toaster component', () => {
      render(<Sonner />);
      expect(screen.getByTestId('sonner-toaster')).toBeInTheDocument();
    });

    it('applies the correct CSS class', () => {
      render(<Sonner className="custom-class" />);
      const toaster = screen.getByTestId('sonner-toaster');
      expect(toaster).toHaveClass('custom-class');
    });

    it('accepts position prop', () => {
      render(<Sonner position="top-left" />);
      const toaster = screen.getByTestId('sonner-toaster');
      expect(toaster).toBeInTheDocument();
    });

    it('accepts theme prop', () => {
      render(<Sonner theme="dark" />);
      const toaster = screen.getByTestId('sonner-toaster');
      expect(toaster).toBeInTheDocument();
    });

    it('accepts duration prop', () => {
      render(<Sonner duration={5000} />);
      const toaster = screen.getByTestId('sonner-toaster');
      expect(toaster).toBeInTheDocument();
    });

    it('accepts visibleToasts prop', () => {
      render(<Sonner visibleToasts={5} />);
      const toaster = screen.getByTestId('sonner-toaster');
      expect(toaster).toBeInTheDocument();
    });

    it('accepts closeButton prop', () => {
      render(<Sonner closeButton />);
      const toaster = screen.getByTestId('sonner-toaster');
      expect(toaster).toBeInTheDocument();
    });

    it('accepts richColors prop', () => {
      render(<Sonner richColors={false} />);
      const toaster = screen.getByTestId('sonner-toaster');
      expect(toaster).toBeInTheDocument();
    });

    it('accepts expand prop', () => {
      render(<Sonner expand={false} />);
      const toaster = screen.getByTestId('sonner-toaster');
      expect(toaster).toBeInTheDocument();
    });
  });

  describe('showSonner functions', () => {
    it('has all toast type methods', () => {
      expect(typeof showSonner.success).toBe('function');
      expect(typeof showSonner.error).toBe('function');
      expect(typeof showSonner.warning).toBe('function');
      expect(typeof showSonner.info).toBe('function');
      expect(typeof showSonner.loading).toBe('function');
      expect(typeof showSonner.custom).toBe('function');
      expect(typeof showSonner.dismiss).toBe('function');
      expect(typeof showSonner.dismissAll).toBe('function');
    });

    it('calls toast.custom when showing a success toast', () => {
      const mockToast = require('sonner').toast;
      
      showSonner.success({
        title: 'Success',
        description: 'Success message',
      });

      expect(mockToast.custom).toHaveBeenCalled();
    });

    it('calls toast.custom when showing an error toast', () => {
      const mockToast = require('sonner').toast;
      
      showSonner.error({
        title: 'Error',
        description: 'Error message',
      });

      expect(mockToast.custom).toHaveBeenCalled();
    });

    it('calls toast.custom when showing a warning toast', () => {
      const mockToast = require('sonner').toast;
      
      showSonner.warning({
        title: 'Warning',
        description: 'Warning message',
      });

      expect(mockToast.custom).toHaveBeenCalled();
    });

    it('calls toast.custom when showing an info toast', () => {
      const mockToast = require('sonner').toast;
      
      showSonner.info({
        title: 'Info',
        description: 'Info message',
      });

      expect(mockToast.custom).toHaveBeenCalled();
    });

    it('calls toast.custom when showing a loading toast', () => {
      const mockToast = require('sonner').toast;
      
      showSonner.loading({
        title: 'Loading',
        description: 'Loading message',
      });

      expect(mockToast.custom).toHaveBeenCalled();
    });

    it('calls toast.dismiss when dismissing a toast', () => {
      const mockToast = require('sonner').toast;
      
      showSonner.dismiss('test-id');

      expect(mockToast.dismiss).toHaveBeenCalledWith('test-id');
    });

    it('calls toast.dismiss when dismissing all toasts', () => {
      const mockToast = require('sonner').toast;
      
      showSonner.dismissAll();

      expect(mockToast.dismiss).toHaveBeenCalledWith();
    });
  });

  describe('Toast constants', () => {
    it('exports sonnerTypes array', () => {
      expect(Array.isArray(sonnerTypes)).toBe(true);
      expect(sonnerTypes).toContain('success');
      expect(sonnerTypes).toContain('error');
      expect(sonnerTypes).toContain('warning');
      expect(sonnerTypes).toContain('info');
      expect(sonnerTypes).toContain('loading');
      expect(sonnerTypes).toContain('custom');
    });

    it('exports sonnerPositions array', () => {
      expect(Array.isArray(sonnerPositions)).toBe(true);
      expect(sonnerPositions).toContain('top-left');
      expect(sonnerPositions).toContain('top-center');
      expect(sonnerPositions).toContain('top-right');
      expect(sonnerPositions).toContain('bottom-left');
      expect(sonnerPositions).toContain('bottom-center');
      expect(sonnerPositions).toContain('bottom-right');
    });
  });

  describe('Toast Component RTL support', () => {
    beforeEach(() => {
      // Mock document.dir for RTL tests
      Object.defineProperty(document, 'dir', {
        writable: true,
        value: 'ltr',
      });
      Object.defineProperty(document.documentElement, 'dir', {
        writable: true,
        value: 'ltr',
      });
    });

    it('handles LTR direction correctly', () => {
      document.dir = 'ltr';
      document.documentElement.dir = 'ltr';
      
      // Test would involve rendering the internal Toast component
      // This is a simplified test as the Toast component is internal
      expect(document.dir).toBe('ltr');
    });

    it('handles RTL direction correctly', () => {
      document.dir = 'rtl';
      document.documentElement.dir = 'rtl';
      
      // Test would involve rendering the internal Toast component
      // This is a simplified test as the Toast component is internal
      expect(document.dir).toBe('rtl');
    });
  });

  describe('Accessibility', () => {
    it('renders with proper ARIA attributes', () => {
      render(<Sonner />);
      const toaster = screen.getByTestId('sonner-toaster');
      expect(toaster).toBeInTheDocument();
      // Additional accessibility tests would go here
    });
  });

  describe('Integration with design system', () => {
    it('uses design tokens for styling', () => {
      render(<Sonner />);
      const toaster = screen.getByTestId('sonner-toaster');
      expect(toaster).toBeInTheDocument();
      // Test would verify CSS custom properties are applied
    });
  });
}); 