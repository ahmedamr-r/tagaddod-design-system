import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Number, numberSizes, type NumberProps } from './Number';

export const preview: PreviewModule<NumberProps> = {
  name: 'Number',
  slug: 'number',
  description: 'Numeric input with steppers, min/max, formatting, and five sizes.',
  component: Number,
  defaultProps: {
    label: 'Quantity',
    placeholder: 'Enter a number',
    defaultValue: 1,
    min: 0,
    max: 100,
    step: 1,
    size: 'medium',
    disabled: false,
    readOnly: false,
    required: false,
    optional: false,
    fullWidth: false,
    hideSteppers: false,
    clearable: false,
  },
  controls: {
    label: { type: 'text', description: 'Label above the input' },
    placeholder: { type: 'text', description: 'Placeholder when empty' },
    helpText: { type: 'text', description: 'Supporting text below the input' },
    errorMessage: { type: 'text', description: 'Error message (puts input in error state)' },
    size: { type: 'select', options: numberSizes, description: 'Input size' },
    min: { type: 'number', description: 'Minimum allowed value' },
    max: { type: 'number', description: 'Maximum allowed value' },
    step: { type: 'number', description: 'Increment per stepper/arrow' },
    disabled: { type: 'boolean', description: 'Disable the input' },
    readOnly: { type: 'boolean', description: 'Read-only mode' },
    required: { type: 'boolean', description: 'Mark the field as required' },
    optional: { type: 'boolean', description: 'Display "(Optional)" next to label' },
    fullWidth: { type: 'boolean', description: 'Stretch to container width' },
    hideSteppers: { type: 'boolean', description: 'Hide the stepper buttons' },
    clearable: { type: 'boolean', description: 'Show a clear button when the input has a value' },
    disableWheel: { type: 'boolean', description: 'Disable mouse wheel adjustments' },
  },
  examples: [
    { name: 'Default', props: { label: 'Quantity', defaultValue: 1, min: 0, max: 10 } },
    { name: 'WithHelpText', props: { label: 'Age', defaultValue: 30, helpText: 'Must be 18 or older.' } },
    { name: 'WithError', props: { label: 'Units', defaultValue: -1, errorMessage: 'Must be a positive number.' } },
    {
      name: 'Currency',
      props: {
        label: 'Amount',
        defaultValue: 1999.99,
        formatOptions: { style: 'currency', currency: 'USD' },
      },
    },
    {
      name: 'Percent',
      props: {
        label: 'Discount',
        defaultValue: 0.15,
        step: 0.01,
        min: 0,
        max: 1,
        formatOptions: { style: 'percent' },
      },
    },
    { name: 'HiddenSteppers', props: { label: 'Year', defaultValue: 2025, hideSteppers: true } },
    { name: 'Clearable', props: { label: 'Count', defaultValue: 5, clearable: true } },
    { name: 'Disabled', props: { label: 'Locked', defaultValue: 42, disabled: true } },
    { name: 'ReadOnly', props: { label: 'Audit count', defaultValue: 100, readOnly: true } },
    {
      name: 'AllSizes',
      description: 'Every size side-by-side.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
          {numberSizes.map((size) => (
            <Number key={size} size={size} label={size} defaultValue={10} />
          ))}
        </div>
      ),
    },
  ],
};
