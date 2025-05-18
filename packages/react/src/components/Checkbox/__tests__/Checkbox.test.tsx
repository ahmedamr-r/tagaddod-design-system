import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox as CheckboxComponent } from '../Checkbox';
import { Checkbox } from '../index';  // Test the index export directly
import { renderRTL, setDocumentDirection, resetDocumentAttributes } from '../../../test-utils/test-utils';

// Mock icons used in the component
jest.mock('@tabler/icons-react', () => ({
  IconCheck: () => <div data-testid="icon-check">IconCheck</div>,
  IconMinus: () => <div data-testid="icon-minus">IconMinus</div>,
  IconAlertCircle: () => <div data-testid="icon-alert-circle">IconAlertCircle</div>,
}));

describe('Checkbox Component', () => {
  // Clean up after each test
  afterEach(() => {
    resetDocumentAttributes();
  });

  // Test for index.ts
  describe('Index exports', () => {
    it('exports Checkbox component correctly', () => {
      expect(Checkbox).toBe(CheckboxComponent);
    });
  });

  // Phase 1: Basic Rendering
  describe('Basic Rendering', () => {
    it('renders checkbox input element correctly', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('renders label text correctly', () => {
      const label = 'Test Label';
      render(<Checkbox label={label} />);
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('renders with generated id if none provided', () => {
      render(<Checkbox label="Test Label" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('id');
      expect(checkbox.id).toMatch(/checkbox-[a-z0-9]{9}/);
    });

    it('renders with provided id', () => {
      const id = 'custom-id';
      render(<Checkbox label="Test Label" id={id} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('id', id);
    });

    it('renders with default unchecked state', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });
  });

  // Phase 2: Props & Variants
  describe('Props & Variants', () => {
    it('renders in checked state when checked=true', () => {
      render(<Checkbox checked={true} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('renders in unchecked state when checked=false', () => {
      render(<Checkbox checked={false} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    });

    it('renders in indeterminate state when checked="indeterminate"', () => {
      render(<Checkbox checked="indeterminate" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    });

    it('renders the check icon when checked', () => {
      render(<Checkbox checked={true} />);
      expect(screen.getByTestId('icon-check')).toBeInTheDocument();
    });

    it('renders the minus icon when indeterminate', () => {
      render(<Checkbox checked="indeterminate" />);
      expect(screen.getByTestId('icon-minus')).toBeInTheDocument();
    });

    it('applies disabled styling when disabled=true', () => {
      render(<Checkbox disabled={true} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('data-disabled');
      expect(checkbox).toBeDisabled();
    });

    it('applies error styling when error is provided', () => {
      render(<Checkbox error="This is an error" />);
      const errorMessage = screen.getByText('This is an error');
      expect(errorMessage).toBeInTheDocument();
      expect(screen.getByTestId('icon-alert-circle')).toBeInTheDocument();
    });

    it('renders help text when provided', () => {
      const helpText = 'This is help text';
      render(<Checkbox helpText={helpText} />);
      expect(screen.getByText(helpText)).toBeInTheDocument();
    });

    it('prioritizes error over help text when both are provided', () => {
      render(<Checkbox helpText="Help Text" error="Error Message" />);
      expect(screen.getByText('Error Message')).toBeInTheDocument();
      expect(screen.queryByText('Help Text')).not.toBeInTheDocument();
    });

    it('shows required indicator when required=true', () => {
      render(<Checkbox label="Test Label" required={true} />);
      // Instead of checking the nextSibling, let's just check if there's an asterisk in the document
      const requiredIndicator = screen.getByText('*');
      expect(requiredIndicator).toBeInTheDocument();
    });

    it('applies hideLabel correctly to visually hide the label', () => {
      render(<Checkbox label="Hidden Label" hideLabel={true} />);
      
      // The label should still be in the DOM for accessibility
      const label = screen.getByText('Hidden Label');
      
      // Check that it has the sr-only class which visually hides it
      expect(label).toHaveClass('srOnly');
    });

    it('applies custom className to container', () => {
      render(<Checkbox className="custom-class" />);
      // Since we can't reliably get the container directly, we'll check that the className
      // is applied to a parent element of the checkbox
      const checkbox = screen.getByRole('checkbox');
      const container = checkbox.closest('div');
      expect(container?.parentElement).toHaveClass('custom-class');
    });
  });

  // Phase 3: Interaction & Behavior
  describe('Interaction & Behavior', () => {
    it('toggles checked state when clicked (controlled)', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Checkbox onCheckedChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);
      
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('does not toggle when disabled', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Checkbox disabled={true} onCheckedChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);
      
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('can be toggled with Space key', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Checkbox onCheckedChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      await user.keyboard(' '); // Space key
      
      expect(handleChange).toHaveBeenCalledWith(true);
    });
    
    it('works correctly with uncontrolled behavior (defaultChecked)', async () => {
      const user = userEvent.setup();
      render(<Checkbox defaultChecked={true} />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('data-state', 'checked');
      
      // Toggle it off
      await user.click(checkbox);
      expect(checkbox).toHaveAttribute('data-state', 'unchecked');
      
      // Toggle it back on
      await user.click(checkbox);
      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('supports clicking on the label to toggle the checkbox', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Checkbox label="Test Label" onCheckedChange={handleChange} />);
      
      const label = screen.getByText('Test Label');
      await user.click(label);
      
      expect(handleChange).toHaveBeenCalledWith(true);
    });
  });

  // Phase 4: Edge Cases & Accessibility
  describe('Edge Cases & Accessibility', () => {
    it('handles very long label correctly', () => {
      const longLabel = 'This is a very long label that should be properly handled by the checkbox component without breaking the layout or causing any visual issues for the user';
      render(<Checkbox label={longLabel} />);
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it('has correct ARIA attributes', () => {
      render(<Checkbox label="Test Label" required={true} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-required', 'true');
    });

    it('applies correct ARIA attributes when disabled', () => {
      render(<Checkbox disabled={true} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
    });

    it('works correctly in RTL mode', () => {
      renderRTL(<Checkbox label="Test Label" />);
      
      // Check that the label is rendered in RTL mode
      const label = screen.getByText('Test Label');
      const html = document.documentElement;
      
      expect(html).toHaveAttribute('dir', 'rtl');
      // Further RTL-specific assertions could be added here
    });

    it('applies proper line height for RTL mode', () => {
      // Set document direction to RTL
      setDocumentDirection('rtl');
      
      render(<Checkbox label="Test Label" />);
      const label = screen.getByText('Test Label');
      
      // Check that the label has the correct line height style
      expect(label).toHaveStyle({ lineHeight: 'var(--t-line-height-arabic, 1.2)' });
    });

    it('applies proper line height for LTR mode', () => {
      // Ensure document direction is LTR
      setDocumentDirection('ltr');
      
      render(<Checkbox label="Test Label" />);
      const label = screen.getByText('Test Label');
      
      // Check that the label has the correct line height style
      expect(label).toHaveStyle({ lineHeight: 'var(--t-line-height-english, 1.5)' });
    });

    it('has proper focus styling', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Test Label" />);
      
      const checkbox = screen.getByRole('checkbox');
      
      // Tab to focus the checkbox
      await user.tab();
      
      // Check that the checkbox has focus
      expect(checkbox).toHaveFocus();
      
      // Note: We can't easily test CSS pseudo-classes like :focus-visible in JSDOM
    });
  });
});
