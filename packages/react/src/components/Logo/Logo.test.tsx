import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    render(<Logo />);
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('aria-label', 'Tagaddod');
  });

  it('renders with custom aria-label', () => {
    render(<Logo aria-label="Custom Logo" />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('aria-label', 'Custom Logo');
  });

  it('renders as clickable button when clickable prop is true', () => {
    const handleClick = jest.fn();
    render(<Logo clickable onClick={handleClick} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Tagaddod');
  });

  it('calls onClick when clickable logo is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Logo clickable onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<Logo size="small" />);
    let svg = screen.getByRole('img');
    expect(svg).toHaveClass('small');

    rerender(<Logo size="medium" />);
    svg = screen.getByRole('img');
    expect(svg).toHaveClass('medium');

    rerender(<Logo size="large" />);
    svg = screen.getByRole('img');
    expect(svg).toHaveClass('large');
  });

  it('applies correct color classes', () => {
    const { rerender } = render(<Logo color="primary" />);
    let svg = screen.getByRole('img');
    expect(svg).toHaveClass('primary');

    rerender(<Logo color="white" />);
    svg = screen.getByRole('img');
    expect(svg).toHaveClass('white');

    rerender(<Logo color="inherit" />);
    svg = screen.getByRole('img');
    expect(svg).toHaveClass('inherit');
  });

  it('applies custom className', () => {
    render(<Logo className="custom-class" />);
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('forwards other props correctly', () => {
    render(<Logo data-testid="logo-component" />);
    const container = screen.getByTestId('logo-component');
    expect(container).toBeInTheDocument();
  });

  it('renders with correct default props', () => {
    render(<Logo />);
    const svg = screen.getByRole('img');
    expect(svg).toHaveClass('medium');
    expect(svg).toHaveClass('primary');
  });
});