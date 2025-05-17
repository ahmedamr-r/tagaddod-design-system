import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch component', () => {
  it('renders without crashing', () => {
    render(<Switch />);
  });

  it('applies the correct class for different sizes', () => {
    const { rerender } = render(<Switch data-testid="switch" size="sm" />);
    expect(screen.getByTestId('switch').className).toContain('sizeSm');
    
    rerender(<Switch data-testid="switch" size="md" />);
    expect(screen.getByTestId('switch').className).toContain('sizeMd');
  });

  it('toggles on click', () => {
    const handleChange = jest.fn();
    render(<Switch data-testid="switch" onPressedChange={handleChange} />);
    
    fireEvent.click(screen.getByTestId('switch'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('renders in correct pressed state', () => {
    const { rerender } = render(<Switch data-testid="switch" pressed={true} />);
    expect(screen.getByTestId('switch').className).toContain('pressed');
    
    rerender(<Switch data-testid="switch" pressed={false} />);
    expect(screen.getByTestId('switch').className).not.toContain('pressed');
  });

  it('applies disabled styles when disabled', () => {
    render(<Switch data-testid="switch" disabled />);
    expect(screen.getByTestId('switch').className).toContain('disabled');
  });

  it('does not invoke callback when disabled', () => {
    const handleChange = jest.fn();
    render(<Switch data-testid="switch" disabled onPressedChange={handleChange} />);
    
    fireEvent.click(screen.getByTestId('switch'));
    expect(handleChange).not.toHaveBeenCalled();
  });
});
