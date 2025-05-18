import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, buttonVariants, buttonTones, buttonSizes } from '../Button';

// Mock IconLoader2 for loading state
jest.mock('@tabler/icons-react', () => ({
  IconPlus: () => <span data-testid="icon-plus">IconPlus</span>,
  IconLoader2: () => <span data-testid="icon-loader">IconLoader2</span>,
}));

// Mock document.dir for RTL tests
Object.defineProperty(document, 'dir', {
  writable: true,
  value: 'ltr',
});

// Mock document.documentElement.dir for RTL tests
Object.defineProperty(document.documentElement, 'dir', {
  writable: true,
  value: 'ltr',
});

describe('Button Component', () => {
  afterEach(() => {
    // Reset document direction
    document.dir = 'ltr';
    document.documentElement.dir = 'ltr';
  });

  // Phase 1 Tests: Basic Rendering
  describe('Basic Rendering', () => {
    it('renders with correct text', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('has button role', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('has default type="button"', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('applies custom type attribute when provided', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });
  });
  
  // Phase 2 Tests: Props & Variants
  describe('Props & Variants', () => {
    it.each(buttonVariants)('renders %s variant correctly', (variant) => {
      render(<Button variant={variant}>Button</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain(`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`);
    });
    
    it.each(buttonTones)('renders %s tone correctly', (tone) => {
      render(<Button tone={tone}>Button</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain(`tone${tone.charAt(0).toUpperCase() + tone.slice(1)}`);
    });
    
    it.each(buttonSizes)('renders %s size correctly', (size) => {
      render(<Button size={size}>Button</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain(`size${size.charAt(0).toUpperCase() + size.slice(1)}`);
    });
    
    it('applies fullWidth style when specified', () => {
      render(<Button fullWidth>Button</Button>);
      expect(screen.getByRole('button').className).toContain('fullWidth');
    });

    it('applies disabled attribute when disabled', () => {
      render(<Button disabled>Button</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('renders prefix icon when provided', () => {
      render(<Button prefixIcon={<span data-testid="prefix-icon" />}>Button</Button>);
      expect(screen.getByTestId('prefix-icon')).toBeInTheDocument();
    });

    it('renders suffix icon when provided', () => {
      render(<Button suffixIcon={<span data-testid="suffix-icon" />}>Button</Button>);
      expect(screen.getByTestId('suffix-icon')).toBeInTheDocument();
    });

    it('displays loading state when loading=true', () => {
      render(<Button loading>Button</Button>);
      expect(screen.getByRole('button').className).toContain('loading');
      expect(screen.getByTestId('icon-loader')).toBeInTheDocument();
    });
    
    it('merges custom className with existing classes', () => {
      render(<Button className="custom-class">Button</Button>);
      expect(screen.getByRole('button').className).toContain('button');
      expect(screen.getByRole('button').className).toContain('custom-class');
    });
  });
  
  // Phase 3 Tests: Interaction & Behavior
  describe('Interaction & Behavior', () => {
    it('calls onClick when clicked', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Button</Button>);
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
    
    it('does not call onClick when disabled', () => {
      const handleClick = jest.fn();
      render(<Button disabled onClick={handleClick}>Button</Button>);
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
    
    it('does not call onClick when loading', () => {
      const handleClick = jest.fn();
      render(<Button loading onClick={handleClick}>Button</Button>);
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
    
    it('can be triggered with keyboard Enter', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Button</Button>);
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
    
    it('can be triggered with keyboard Space', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Button</Button>);
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('shows correct loading text in LTR mode', () => {
      render(<Button loading>Button</Button>);
      // Check loading is shown in English (based on LTR)
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    
    it('shows correct loading text in RTL mode', () => {
      // Set RTL direction
      document.dir = 'rtl';
      document.documentElement.dir = 'rtl';
      
      render(<Button loading>Button</Button>);
      // Check loading is shown in Arabic (based on RTL)
      expect(screen.getByText('جارٍ التحميل...')).toBeInTheDocument();
    });
  });
  
  // Phase 4 Tests: Edge Cases & Accessibility
  describe('Edge Cases & Accessibility', () => {
    it('handles long text content correctly', () => {
      const longText = 'This is a very long button text that should be handled properly without breaking the layout';
      render(<Button>{longText}</Button>);
      expect(screen.getByRole('button', { name: longText })).toBeInTheDocument();
    });
    
    it('has correct ARIA attributes when disabled', () => {
      render(<Button disabled>Disabled Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('disabled');
    });
    
    it('has correct ARIA attributes when loading', () => {
      render(<Button loading>Loading Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('disabled');
    });
    
    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Button with ref</Button>);
      expect(ref.current).toBeTruthy();
      expect(ref.current?.tagName).toBe('BUTTON');
    });
    
    it('renders correctly as icon-only button', () => {
      render(<Button prefixIcon={<span data-testid="icon" />} aria-label="Add item" />);
      const button = screen.getByRole('button', { name: 'Add item' });
      expect(button.className).toContain('iconOnly');
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
  });
});
