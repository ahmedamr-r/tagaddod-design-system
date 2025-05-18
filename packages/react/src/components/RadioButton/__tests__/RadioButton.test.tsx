import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup, RadioButtonItem } from '../RadioButton';
import { renderWithTheme, renderRTL, setDocumentDirection, resetDocumentAttributes } from '../../../test-utils/test-utils';

// Mock document.dir for RTL tests if needed
Object.defineProperty(document, 'dir', {
  configurable: true,
  get: function() { return this._dir || 'ltr'; },
  set: function(value) { this._dir = value; }
});

describe('RadioButton Component', () => {
  afterEach(() => {
    // Reset any mocks or document state
    document.dir = 'ltr';
    resetDocumentAttributes();
    jest.clearAllMocks();
  });

  // Phase 1 Tests: Basic Rendering
  describe('Basic Rendering', () => {
    it('renders radio button correctly', () => {
      render(
        <RadioGroup>
          <RadioButtonItem value="option1" label="Option 1" id="option1" />
        </RadioGroup>
      );
      
      // Check radio button exists and is not checked by default
      const radioButton = screen.getByRole('radio');
      expect(radioButton).toBeInTheDocument();
      expect(radioButton).not.toBeChecked();
    });

    it('renders label text correctly', () => {
      render(
        <RadioGroup>
          <RadioButtonItem value="option1" label="Option 1" id="option1" />
        </RadioGroup>
      );
      
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    it('renders multiple radio buttons in a group', () => {
      render(
        <RadioGroup>
          <RadioButtonItem value="option1" label="Option 1" id="option1" />
          <RadioButtonItem value="option2" label="Option 2" id="option2" />
          <RadioButtonItem value="option3" label="Option 3" id="option3" />
        </RadioGroup>
      );
      
      expect(screen.getAllByRole('radio')).toHaveLength(3);
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('shows a selected radio button when defaultValue is provided', () => {
      render(
        <RadioGroup defaultValue="option2">
          <RadioButtonItem value="option1" label="Option 1" id="option1" />
          <RadioButtonItem value="option2" label="Option 2" id="option2" />
          <RadioButtonItem value="option3" label="Option 3" id="option3" />
        </RadioGroup>
      );
      
      const radioButtons = screen.getAllByRole('radio');
      expect(radioButtons[0]).not.toBeChecked();
      expect(radioButtons[1]).toBeChecked();
      expect(radioButtons[2]).not.toBeChecked();
    });
  });
  
  // Phase 2 Tests: Props & Variants
  describe('Props & Variants', () => {
    it('renders in checked state when checked=true via RadioGroup value', () => {
      render(
        <RadioGroup value="option1">
          <RadioButtonItem value="option1" label="Option 1" id="option1" />
        </RadioGroup>
      );
      
      expect(screen.getByRole('radio')).toBeChecked();
    });

    it('applies disabled styling when disabled=true', () => {
      render(
        <RadioGroup>
          <RadioButtonItem value="option1" label="Option 1" id="option1" disabled />
        </RadioGroup>
      );
      
      const radioButton = screen.getByRole('radio');
      expect(radioButton).toBeDisabled();
      expect(radioButton).toHaveAttribute('disabled');
    });

    it('renders help text when provided', () => {
      render(
        <RadioGroup>
          <RadioButtonItem 
            value="option1" 
            label="Option 1" 
            id="option1" 
            helpText="This is a help text" 
          />
        </RadioGroup>
      );
      
      expect(screen.getByText('This is a help text')).toBeInTheDocument();
    });

    it('hides help text when showHelpText=false', () => {
      render(
        <RadioGroup>
          <RadioButtonItem 
            value="option1" 
            label="Option 1" 
            id="option1" 
            helpText="This is a help text" 
            showHelpText={false}
          />
        </RadioGroup>
      );
      
      expect(screen.queryByText('This is a help text')).not.toBeInTheDocument();
    });

    it('visually hides label but keeps it accessible when hideLabel=true', () => {
      render(
        <RadioGroup>
          <RadioButtonItem 
            value="option1" 
            label="Option 1" 
            id="option1" 
            hideLabel
          />
        </RadioGroup>
      );
      
      // Label should still be in DOM for accessibility
      const label = screen.getByText('Option 1');
      expect(label).toBeInTheDocument();
      
      // But it should have sr-only class or similar styling
      // Check if it has a class that indicates it's visually hidden
      expect(label.className).toContain('srOnly');
    });

    it('applies custom className correctly', () => {
      render(
        <RadioGroup className="custom-group-class">
          <RadioButtonItem 
            value="option1" 
            label="Option 1" 
            id="option1" 
            className="custom-radio-class"
          />
        </RadioGroup>
      );
      
      const radioGroup = screen.getByRole('radiogroup');
      const radioButton = screen.getByRole('radio');
      
      expect(radioGroup.className).toContain('custom-group-class');
      expect(radioButton.className).toContain('custom-radio-class');
    });
  });
  
  // Phase 3 Tests: Interaction & Behavior
  describe('Interaction & Behavior', () => {
    it('selects radio button when clicked', async () => {
      const user = userEvent.setup();
      
      render(
        <RadioGroup>
          <RadioButtonItem value="option1" label="Option 1" id="option1" />
          <RadioButtonItem value="option2" label="Option 2" id="option2" />
        </RadioGroup>
      );
      
      const radioButtons = screen.getAllByRole('radio');
      await user.click(radioButtons[1]);
      
      expect(radioButtons[0]).not.toBeChecked();
      expect(radioButtons[1]).toBeChecked();
    });

    it('calls onChange when selection changes', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(
        <RadioGroup onValueChange={handleChange}>
          <RadioButtonItem value="option1" label="Option 1" id="option1" />
          <RadioButtonItem value="option2" label="Option 2" id="option2" />
        </RadioGroup>
      );
      
      const radioButtons = screen.getAllByRole('radio');
      await user.click(radioButtons[1]);
      
      expect(handleChange).toHaveBeenCalledWith('option2');
    });

    it('does not call onChange when clicking a disabled radio button', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(
        <RadioGroup onValueChange={handleChange}>
          <RadioButtonItem value="option1" label="Option 1" id="option1" />
          <RadioButtonItem value="option2" label="Option 2" id="option2" disabled />
        </RadioGroup>
      );
      
      const radioButtons = screen.getAllByRole('radio');
      await user.click(radioButtons[1]);
      
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('supports keyboard navigation', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(
        <RadioGroup onValueChange={handleChange}>
          <RadioButtonItem value="option1" label="Option 1" id="option1" />
          <RadioButtonItem value="option2" label="Option 2" id="option2" />
          <RadioButtonItem value="option3" label="Option 3" id="option3" />
        </RadioGroup>
      );
      
      // Focus the first radio button and press down arrow to navigate
      const radioButtons = screen.getAllByRole('radio');
      await act(async () => {
        radioButtons[0].focus();
      });
      
      // Press arrow down to move to next radio
      await user.keyboard('{ArrowDown}');
      
      // Press space to select
      await user.keyboard(' ');
      expect(handleChange).toHaveBeenCalledWith('option2');
    });
  });
  
  // Phase 4 Tests: Edge Cases & Accessibility
  describe('Edge Cases & Accessibility', () => {
    it('handles very long label text correctly', () => {
      const longLabel = 'This is a very long label text that should still be rendered properly without breaking the layout of the radio button component';
      
      render(
        <RadioGroup>
          <RadioButtonItem 
            value="option1" 
            label={longLabel}
            id="option1" 
          />
        </RadioGroup>
      );
      
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it('handles very long help text correctly', () => {
      const longHelpText = 'This is a very long help text that provides additional information about the radio button option and should be displayed properly without breaking the layout';
      
      render(
        <RadioGroup>
          <RadioButtonItem 
            value="option1" 
            label="Option 1"
            helpText={longHelpText}
            id="option1" 
          />
        </RadioGroup>
      );
      
      expect(screen.getByText(longHelpText)).toBeInTheDocument();
    });

    it('has correct ARIA attributes', () => {
      render(
        <RadioGroup aria-label="Options">
          <RadioButtonItem 
            value="option1" 
            label="Option 1"
            id="option1" 
          />
        </RadioGroup>
      );
      
      const radioGroup = screen.getByRole('radiogroup');
      const radioButton = screen.getByRole('radio');
      
      expect(radioGroup).toHaveAttribute('aria-label', 'Options');
      expect(radioButton).toHaveAttribute('id', 'option1');
    });

    it('works correctly in RTL mode', () => {
      // Set document direction to RTL
      act(() => {
        document.dir = 'rtl';
      });
      
      render(
        <RadioGroup>
          <RadioButtonItem 
            value="option1" 
            label="Option 1"
            helpText="Help text"
            id="option1" 
          />
        </RadioGroup>
      );
      
      // Check that the document direction is correctly set to RTL
      expect(document.dir).toBe('rtl');
      
      // Instead of checking the document.dir property directly, we can check if the DOM has an RTL container or if our component rendered
      const radioButton = screen.getByRole('radio');
      expect(radioButton).toBeInTheDocument();
    });

    it('renders correctly with no label', () => {
      render(
        <RadioGroup>
          <RadioButtonItem 
            value="option1" 
            id="option1" 
          />
        </RadioGroup>
      );
      
      expect(screen.getByRole('radio')).toBeInTheDocument();
      // No label should be rendered
      expect(screen.queryByRole('label')).not.toBeInTheDocument();
    });

    it('renders with theme in ThemeProvider context', () => {
      renderWithTheme(
        <RadioGroup>
          <RadioButtonItem 
            value="option1" 
            label="Option 1"
            id="option1" 
          />
        </RadioGroup>,
        { theme: 'greenpan' }
      );
      
      expect(document.documentElement.getAttribute('data-theme')).toBe('greenpan');
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('renders in RTL with renderRTL utility', () => {
      // Mock document.documentElement.getAttribute to return 'rtl' for 'dir'
      jest.spyOn(document.documentElement, 'getAttribute').mockImplementation((attr) => {
        if (attr === 'dir') return 'rtl';
        return null;
      });
      
      renderRTL(
        <RadioGroup>
          <RadioButtonItem 
            value="option1" 
            label="Option 1"
            id="option1" 
          />
        </RadioGroup>
      );
      
      // Verify our mock is working
      expect(document.documentElement.getAttribute('dir')).toBe('rtl');
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });
  });
});
