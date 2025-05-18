import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { IconPlus } from '@tabler/icons-react';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('variantPrimary');
    expect(button).toHaveClass('toneDefault');
    expect(button).toHaveClass('sizeMedium');
    expect(button).not.toBeDisabled();
  });

  it('applies variant and tone classes correctly', () => {
    render(<Button variant="secondary" tone="critical">Delete</Button>);
    const button = screen.getByRole('button', { name: /delete/i });
    
    expect(button).toHaveClass('variantSecondary');
    expect(button).toHaveClass('toneCritical');
  });

  it('applies size classes correctly', () => {
    render(<Button size="large">Large Button</Button>);
    const button = screen.getByRole('button', { name: /large button/i });
    
    expect(button).toHaveClass('sizeLarge');
  });

  it('shows loading state', () => {
    render(<Button loading>Submit</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('loading');
    expect(button).toBeDisabled();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    
    expect(button).toBeDisabled();
  });

  it('applies fullWidth class when fullWidth is true', () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByRole('button', { name: /full width/i });
    
    expect(button).toHaveClass('fullWidth');
  });

  it('renders prefix icon correctly', () => {
    render(<Button prefixIcon={<IconPlus data-testid="prefix-icon" />}>Add</Button>);
    
    expect(screen.getByTestId('prefix-icon')).toBeInTheDocument();
  });

  it('renders suffix icon correctly', () => {
    render(<Button suffixIcon={<IconPlus data-testid="suffix-icon" />}>Add</Button>);
    
    expect(screen.getByTestId('suffix-icon')).toBeInTheDocument();
  });

  it('renders icon-only button when no children provided', () => {
    render(<Button prefixIcon={<IconPlus data-testid="icon" />} />);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('iconOnly');
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(button).not.toHaveTextContent(/\w+/);
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref to button element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);
    
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
