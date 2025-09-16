import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Number } from './Number';

describe('Number Component', () => {
  it('renders with label', () => {
    render(<Number label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Number placeholder="Enter number" />);
    expect(screen.getByPlaceholderText('Enter number')).toBeInTheDocument();
  });

  it('renders with help text', () => {
    render(<Number helpText="This is help text" />);
    expect(screen.getByText('This is help text')).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(<Number errorMessage="This is an error" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  it('handles value changes', async () => {
    const handleChange = jest.fn();
    render(<Number label="Number" onChange={handleChange} />);

    const input = screen.getByRole('spinbutton');
    await userEvent.type(input, '42');

    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith(42);
  });

  it('increments value with up button', () => {
    const handleChange = jest.fn();
    render(<Number label="Number" defaultValue={5} onChange={handleChange} />);

    const incrementButton = screen.getByLabelText('Increment value');
    fireEvent.mouseDown(incrementButton);
    fireEvent.mouseUp(incrementButton);

    expect(handleChange).toHaveBeenCalledWith(6);
  });

  it('decrements value with down button', () => {
    const handleChange = jest.fn();
    render(<Number label="Number" defaultValue={5} onChange={handleChange} />);

    const decrementButton = screen.getByLabelText('Decrement value');
    fireEvent.mouseDown(decrementButton);
    fireEvent.mouseUp(decrementButton);

    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('respects min value', async () => {
    const handleChange = jest.fn();
    render(<Number label="Number" min={0} defaultValue={1} onChange={handleChange} />);

    const decrementButton = screen.getByLabelText('Decrement value');
    fireEvent.mouseDown(decrementButton);
    fireEvent.mouseUp(decrementButton);

    // Should decrement to 0
    expect(handleChange).toHaveBeenCalledWith(0);

    // Button should be disabled at min value
    const input = screen.getByRole('spinbutton') as HTMLInputElement;
    await userEvent.clear(input);
    await userEvent.type(input, '0');
    fireEvent.blur(input);

    expect(decrementButton).toBeDisabled();
  });

  it('respects max value', async () => {
    const handleChange = jest.fn();
    render(<Number label="Number" max={10} defaultValue={9} onChange={handleChange} />);

    const incrementButton = screen.getByLabelText('Increment value');
    fireEvent.mouseDown(incrementButton);
    fireEvent.mouseUp(incrementButton);

    // Should increment to 10
    expect(handleChange).toHaveBeenCalledWith(10);

    // Button should be disabled at max value
    const input = screen.getByRole('spinbutton') as HTMLInputElement;
    await userEvent.clear(input);
    await userEvent.type(input, '10');
    fireEvent.blur(input);

    expect(incrementButton).toBeDisabled();
  });

  it('applies step value', () => {
    const handleChange = jest.fn();
    render(<Number label="Number" step={5} defaultValue={10} onChange={handleChange} />);

    const incrementButton = screen.getByLabelText('Increment value');
    fireEvent.mouseDown(incrementButton);
    fireEvent.mouseUp(incrementButton);

    expect(handleChange).toHaveBeenCalledWith(15);
  });

  it('formats currency values', () => {
    render(
      <Number
        label="Price"
        defaultValue={99.99}
        formatOptions={{ style: 'currency', currency: 'USD' }}
      />
    );

    const input = screen.getByRole('spinbutton') as HTMLInputElement;
    expect(input.value).toBe('$99.99');
  });

  it('formats percentage values', () => {
    render(
      <Number
        label="Discount"
        defaultValue={0.25}
        formatOptions={{ style: 'percent' }}
      />
    );

    const input = screen.getByRole('spinbutton') as HTMLInputElement;
    expect(input.value).toBe('25%');
  });

  it('handles keyboard navigation', async () => {
    const handleChange = jest.fn();
    render(<Number label="Number" defaultValue={5} onChange={handleChange} />);

    const input = screen.getByRole('spinbutton');
    input.focus();

    // Arrow up
    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(handleChange).toHaveBeenCalledWith(6);

    // Arrow down
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('handles Home and End keys with min/max', () => {
    const handleChange = jest.fn();
    render(
      <Number
        label="Number"
        defaultValue={50}
        min={0}
        max={100}
        onChange={handleChange}
      />
    );

    const input = screen.getByRole('spinbutton');
    input.focus();

    // Home key - goes to min
    fireEvent.keyDown(input, { key: 'Home' });
    expect(handleChange).toHaveBeenCalledWith(0);

    // End key - goes to max
    fireEvent.keyDown(input, { key: 'End' });
    expect(handleChange).toHaveBeenCalledWith(100);
  });

  it('clears value when clear button is clicked', () => {
    const handleChange = jest.fn();
    const handleClear = jest.fn();
    render(
      <Number
        label="Number"
        defaultValue={42}
        clearable
        onChange={handleChange}
        onClear={handleClear}
      />
    );

    const clearButton = screen.getByLabelText('Clear input');
    fireEvent.click(clearButton);

    expect(handleChange).toHaveBeenCalledWith(null);
    expect(handleClear).toHaveBeenCalled();
  });

  it('disables input when disabled prop is true', () => {
    render(<Number label="Number" disabled />);

    const input = screen.getByRole('spinbutton');
    expect(input).toBeDisabled();

    const incrementButton = screen.getByLabelText('Increment value');
    const decrementButton = screen.getByLabelText('Decrement value');
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
  });

  it('prevents editing when readOnly', () => {
    render(<Number label="Number" defaultValue={42} readOnly />);

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('readonly');
  });

  it('shows optional indicator', () => {
    render(<Number label="Number" optional />);
    expect(screen.getByText('(Optional)')).toBeInTheDocument();
  });

  it('hides steppers when hideSteppers is true', () => {
    render(<Number label="Number" hideSteppers />);

    expect(screen.queryByLabelText('Increment value')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Decrement value')).not.toBeInTheDocument();
  });

  it('renders different sizes correctly', () => {
    const { rerender } = render(<Number label="Number" size="small" />);
    expect(screen.getByRole('spinbutton').closest('.container')).toHaveClass('sizeSmall');

    rerender(<Number label="Number" size="large" />);
    expect(screen.getByRole('spinbutton').closest('.container')).toHaveClass('sizeLarge');
  });

  it('renders with prefix and suffix', () => {
    render(
      <Number
        label="Number"
        prefix={<span>$</span>}
        suffix={<span>USD</span>}
      />
    );

    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
  });

  it('validates and snaps to step on blur', async () => {
    const handleChange = jest.fn();
    render(
      <Number
        label="Number"
        step={5}
        min={0}
        onChange={handleChange}
      />
    );

    const input = screen.getByRole('spinbutton') as HTMLInputElement;
    await userEvent.type(input, '13');
    fireEvent.blur(input);

    // Should snap to nearest step (15)
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(15);
    });
  });

  it('handles null and empty values', async () => {
    const handleChange = jest.fn();
    render(<Number label="Number" onChange={handleChange} />);

    const input = screen.getByRole('spinbutton') as HTMLInputElement;
    await userEvent.type(input, '42');
    await userEvent.clear(input);

    expect(handleChange).toHaveBeenCalledWith(null);
  });

  it('applies ARIA attributes correctly', () => {
    render(
      <Number
        label="Number"
        defaultValue={50}
        min={0}
        max={100}
        required
        errorMessage="Error"
      />
    );

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('aria-valuenow', '50');
    expect(input).toHaveAttribute('aria-valuemin', '0');
    expect(input).toHaveAttribute('aria-valuemax', '100');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('required');
  });
});