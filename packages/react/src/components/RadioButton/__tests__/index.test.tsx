import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup, RadioButtonItem } from '../';
import { renderWithTheme, renderRTL, setDocumentDirection, resetDocumentAttributes } from '../../../test-utils/test-utils';

// Mock document.dir for RTL tests if needed
Object.defineProperty(document, 'dir', {
  configurable: true,
  get: function() { return this._dir || 'ltr'; },
  set: function(value) { this._dir = value; }
});

describe('RadioButton Component (from index import)', () => {
  it('works when imported from index file', () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioButtonItem value="option1" label="Option 1" id="option1" />
        <RadioButtonItem value="option2" label="Option 2" id="option2" />
      </RadioGroup>
    );
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons[0]).toBeChecked();
    expect(radioButtons[1]).not.toBeChecked();
  });
});
