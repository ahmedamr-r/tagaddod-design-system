import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Number } from './Number';
import { IconCurrencyDollar, IconPercentage, IconRuler, IconCalculator } from '@tabler/icons-react';

const meta: Meta<typeof Number> = {
  title: 'Components/Number',
  component: Number,
  parameters: {
    layout: 'padded',
    docs: {
      page: () => import('./Number.mdx'),
      description: {
        component: 'A number input component with increment/decrement controls, formatting options, and full accessibility support.',
      },
    },
  },
  tags: [],
  argTypes: {
    size: {
      control: 'select',
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
      description: 'Size of the number input',
      defaultValue: { summary: 'medium' },
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    helpText: {
      control: 'text',
      description: 'Help text displayed below the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed below the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is read-only',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show a clear button',
    },
    hideSteppers: {
      control: 'boolean',
      description: 'Whether to hide the increment/decrement buttons',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input takes full width',
    },
    optional: {
      control: 'boolean',
      description: 'Whether to show optional indicator',
    },
    min: {
      control: 'number',
      description: 'Minimum allowed value',
    },
    max: {
      control: 'number',
      description: 'Maximum allowed value',
    },
    step: {
      control: 'number',
      description: 'Step increment value',
      defaultValue: { summary: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Number>;

export const Default: Story = {
  args: {
    label: 'Quantity',
    placeholder: 'Enter a number',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Amount',
    value: 42,
    helpText: 'Enter the desired amount',
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState<number | null>(10);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Number
          label="Controlled Number"
          value={value}
          onChange={setValue}
          min={0}
          max={100}
          step={5}
        />
        <p>Current value: {value ?? 'null'}</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setValue(0)}>Set to 0</button>
          <button onClick={() => setValue(50)}>Set to 50</button>
          <button onClick={() => setValue(100)}>Set to 100</button>
          <button onClick={() => setValue(null)}>Clear</button>
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Number size="xlarge" label="XLarge" defaultValue={10} />
      <Number size="large" label="Large" defaultValue={20} />
      <Number size="medium" label="Medium" defaultValue={30} />
      <Number size="small" label="Small" defaultValue={40} />
      <Number size="xsmall" label="XSmall" defaultValue={50} />
    </div>
  ),
};

export const WithMinMax: Story = {
  args: {
    label: 'Age',
    min: 0,
    max: 120,
    defaultValue: 25,
    helpText: 'Enter your age (0-120)',
  },
};

export const WithStep: Story = {
  args: {
    label: 'Temperature',
    min: -10,
    max: 50,
    step: 0.5,
    defaultValue: 22.5,
    helpText: 'Adjust in 0.5 degree increments',
  },
};

export const Currency: Story = {
  args: {
    label: 'Price',
    defaultValue: 99.99,
    min: 0,
    step: 0.01,
    formatOptions: {
      style: 'currency',
      currency: 'USD',
    },
    prefix: <IconCurrencyDollar size={16} />,
    helpText: 'Enter the product price',
  },
};

export const Percentage: Story = {
  args: {
    label: 'Discount',
    defaultValue: 0.15,
    min: 0,
    max: 1,
    step: 0.01,
    formatOptions: {
      style: 'percent',
    },
    prefix: <IconPercentage size={16} />,
    helpText: 'Enter discount percentage (0-100%)',
  },
};

export const WithDecimals: Story = {
  args: {
    label: 'Weight',
    defaultValue: 75.5,
    min: 0,
    step: 0.1,
    formatOptions: {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2,
    },
    suffix: 'kg',
    helpText: 'Enter weight in kilograms',
  },
};

export const WithPrefixSuffix: Story = {
  args: {
    label: 'Length',
    defaultValue: 100,
    prefix: <IconRuler size={16} />,
    suffix: 'cm',
    helpText: 'Enter length in centimeters',
  },
};

export const Clearable: Story = {
  args: {
    label: 'Optional Value',
    defaultValue: 50,
    clearable: true,
    optional: true,
    helpText: 'This field can be cleared',
  },
};

export const NoSteppers: Story = {
  args: {
    label: 'Manual Input Only',
    hideSteppers: true,
    defaultValue: 100,
    helpText: 'Stepper buttons are hidden',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 42,
    disabled: true,
    helpText: 'This field is disabled',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-Only Field',
    value: 100,
    readOnly: true,
    helpText: 'This field is read-only',
  },
};

export const WithError: Story = {
  args: {
    label: 'Quantity',
    defaultValue: 150,
    min: 0,
    max: 100,
    errorMessage: 'Value must be between 0 and 100',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    helpText: 'This field is required',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Number',
    fullWidth: true,
    defaultValue: 50,
    helpText: 'This input takes the full width of its container',
  },
};

export const RTLSupport: Story = {
  render: function RTLStory(args) {
    const direction = args.globals?.direction || 'ltr';
    const isRTL = direction === 'rtl';

    return (
      <div dir={direction} style={{ padding: '20px' }}>
        <Number
          label={isRTL ? 'الكمية' : 'Quantity'}
          defaultValue={10}
          min={0}
          max={100}
          helpText={isRTL ? 'أدخل الكمية المطلوبة' : 'Enter the required quantity'}
          prefix={<IconCalculator size={16} />}
        />
      </div>
    );
  },
};

export const ComplexExample: Story = {
  render: function ComplexStory() {
    const [quantity, setQuantity] = useState<number | null>(1);
    const [price] = useState(29.99);
    const total = quantity ? quantity * price : 0;

    return (
      <div style={{
        padding: '24px',
        border: '1px solid var(--t-color-border-secondary)',
        borderRadius: 'var(--t-border-radius-300)',
        maxWidth: '400px',
      }}>
        <h3 style={{ marginBottom: '16px' }}>Order Calculator</h3>

        <Number
          label="Quantity"
          value={quantity}
          onChange={setQuantity}
          min={1}
          max={99}
          step={1}
          required
          helpText="Select quantity (1-99)"
          style={{ marginBottom: '16px' }}
        />

        <div style={{
          padding: '16px',
          backgroundColor: 'var(--t-color-surface-secondary)',
          borderRadius: 'var(--t-border-radius-200)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Unit Price:</span>
            <span>${price.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  },
};