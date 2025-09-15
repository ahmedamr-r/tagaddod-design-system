import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { useState } from 'react';
import { addDays, subDays, isWeekend } from 'date-fns';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A date picker component that combines a text input with a calendar popover. Built on TextInput, Popover, and Calendar components with full RTL support and design system integration.'
      }
    }
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['single', 'multiple', 'range'],
      description: 'Selection mode for the date picker'
    },
    dateFormat: {
      control: 'text',
      description: 'Date format pattern for display in the input field'
    },
    size: {
      control: { type: 'select' },
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
      description: 'Size of the input field'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected'
    },
    showCalendarIcon: {
      control: 'boolean',
      description: 'Whether to show the calendar icon'
    },
    closeOnSelect: {
      control: 'boolean',
      description: 'Whether to close the calendar after date selection'
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is read-only (prevents manual typing)'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input takes full width of container'
    },
    popoverSide: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the calendar popover'
    },
    popoverAlign: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      description: 'Alignment of the calendar popover'
    },
    numberOfMonths: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: 'Number of months to display in the calendar'
    }
  },
  args: {
    mode: 'single',
    dateFormat: 'PPP',
    size: 'medium',
    showCalendarIcon: true,
    closeOnSelect: true,
    readOnly: true,
    disabled: false,
    fullWidth: false,
    popoverSide: 'bottom',
    popoverAlign: 'start',
    numberOfMonths: 1
  }
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic single date picker
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
        label="Select Date"
      />
    );
  }
};

// Multiple date selection
export const Multiple: Story = {
  args: {
    mode: 'multiple',
    placeholder: 'Select multiple dates'
  },
  render: (args) => {
    const [value, setValue] = useState<Date[] | undefined>();
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
        label="Select Multiple Dates"
        helpText="Hold Ctrl/Cmd to select multiple dates"
      />
    );
  }
};

// Date range selection
export const Range: Story = {
  args: {
    mode: 'range',
    placeholder: 'Select date range',
    closeOnSelect: false
  },
  render: (args) => {
    const [value, setValue] = useState<{ from?: Date; to?: Date } | undefined>();
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
        label="Select Date Range"
        helpText="Click on two dates to select a range"
      />
    );
  }
};

// Flight booking style with dual inputs
export const DualRange: Story = {
  args: {
    mode: 'range',
    layout: 'dual',
    closeOnSelect: false,
    numberOfMonths: 2
  },
  render: (args) => {
    const [value, setValue] = useState<{ from?: Date; to?: Date } | undefined>();
    return (
      <div style={{ width: '400px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          startLabel="Departure"
          endLabel="Return"
          startPlaceholder="Select departure date"
          endPlaceholder="Select return date"
        />
      </div>
    );
  }
};

// Hotel booking style
export const HotelBooking: Story = {
  args: {
    mode: 'range',
    layout: 'dual',
    closeOnSelect: false,
    numberOfMonths: 2
  },
  render: (args) => {
    const [value, setValue] = useState<{ from?: Date; to?: Date } | undefined>();
    return (
      <div style={{ width: '450px', padding: '20px', border: '1px solid var(--t-color-border-secondary)', borderRadius: 'var(--t-border-radius-300)' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Hotel Booking</h3>
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          startLabel="Check-in"
          endLabel="Check-out"
          startPlaceholder="Check-in date"
          endPlaceholder="Check-out date"
        />
        {value?.from && value?.to && (
          <div style={{ marginTop: '12px', fontSize: '14px', color: 'var(--t-color-text-secondary)' }}>
            Duration: {Math.ceil((value.to.getTime() - value.from.getTime()) / (1000 * 60 * 60 * 24))} nights
          </div>
        )}
        <button
          style={{
            marginTop: '16px',
            width: '100%',
            padding: '12px',
            background: 'var(--t-color-fill-brand)',
            color: 'var(--t-color-text-on-brand)',
            border: 'none',
            borderRadius: 'var(--t-border-radius-200)',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500'
          }}
        >
          Check Availability
        </button>
      </div>
    );
  }
};

// With validation and error state
export const WithValidation: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    const [error, setError] = useState<string>('');
    
    const handleChange = (date: Date | undefined) => {
      setValue(date);
      
      if (!date) {
        setError('Date is required');
        return;
      }
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (date < today) {
        setError('Date cannot be in the past');
        return;
      }
      
      setError('');
    };
    
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={handleChange}
        label="Birth Date"
        placeholder="Select your birth date"
        errorMessage={error}
        required
      />
    );
  }
};

// With min/max date restrictions
export const WithRestrictions: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    const today = new Date();
    const minDate = subDays(today, 30); // 30 days ago
    const maxDate = addDays(today, 30); // 30 days from now
    
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
        label="Appointment Date"
        placeholder="Select appointment date"
        minDate={minDate}
        maxDate={maxDate}
        helpText={`Select a date between ${minDate.toLocaleDateString()} and ${maxDate.toLocaleDateString()}`}
      />
    );
  }
};

// With disabled dates (weekends)
export const WithDisabledDates: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
        label="Working Day"
        placeholder="Select a working day"
        isDateDisabled={isWeekend}
        helpText="Weekends are disabled"
        calendarProps={{
          footer: "Weekends are not available for selection"
        }}
      />
    );
  }
};

// Size variations
export const Sizes: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="XLarge"
          size="xlarge"
        />
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="Large"
          size="large"
        />
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="Medium"
          size="medium"
        />
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="Small"
          size="small"
        />
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="XSmall"
          size="xsmall"
        />
      </div>
    );
  }
};

// Editable (not read-only)
export const Editable: Story = {
  args: {
    readOnly: false,
    placeholder: 'Type or select date'
  },
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
        label="Editable Date"
        helpText="You can type the date or use the calendar"
      />
    );
  }
};

// Custom format
export const CustomFormat: Story = {
  args: {
    dateFormat: 'dd/MM/yyyy'
  },
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
        label="Custom Format (DD/MM/YYYY)"
        placeholder="DD/MM/YYYY"
      />
    );
  }
};

// Form integration
export const FormIntegration: Story = {
  render: (args) => {
    const [formData, setFormData] = useState({
      startDate: undefined as Date | undefined,
      endDate: undefined as Date | undefined,
      birthDate: undefined as Date | undefined
    });
    
    const [errors, setErrors] = useState({
      startDate: '',
      endDate: '',
      birthDate: ''
    });
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      const newErrors = { startDate: '', endDate: '', birthDate: '' };
      
      if (!formData.startDate) {
        newErrors.startDate = 'Start date is required';
      }
      
      if (!formData.endDate) {
        newErrors.endDate = 'End date is required';
      }
      
      if (!formData.birthDate) {
        newErrors.birthDate = 'Birth date is required';
      }
      
      if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
        newErrors.endDate = 'End date must be after start date';
      }
      
      setErrors(newErrors);
      
      if (!Object.values(newErrors).some(error => error)) {
        alert('Form submitted successfully!');
      }
    };
    
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <DatePicker
          value={formData.startDate}
          onChange={(date) => setFormData(prev => ({ ...prev, startDate: date as Date }))}
          label="Start Date"
          placeholder="Select start date"
          errorMessage={errors.startDate}
          required
        />
        
        <DatePicker
          value={formData.endDate}
          onChange={(date) => setFormData(prev => ({ ...prev, endDate: date as Date }))}
          label="End Date"
          placeholder="Select end date"
          errorMessage={errors.endDate}
          required
        />
        
        <DatePicker
          value={formData.birthDate}
          onChange={(date) => setFormData(prev => ({ ...prev, birthDate: date as Date }))}
          label="Birth Date"
          placeholder="Select birth date"
          errorMessage={errors.birthDate}
          maxDate={new Date()}
          required
        />
        
        <button 
          type="submit" 
          style={{ 
            padding: '8px 16px', 
            marginTop: '16px',
            background: 'var(--t-color-fill-brand)',
            color: 'var(--t-color-text-on-brand)',
            border: 'none',
            borderRadius: 'var(--t-border-radius-200)',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    );
  }
};

// RTL Testing
export const RTLTest: Story = {
  parameters: {
    docs: {
      description: {
        story: 'DatePicker component with RTL text direction and Arabic content for testing right-to-left layout and font rendering.'
      }
    }
  },
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    
    return (
      <div dir="rtl" style={{ fontFamily: 'var(--t-font-family-arabic)', padding: '20px' }}>
        <div style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>
          منتقي التاريخ العربي
        </div>
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="تاريخ الميلاد"
          placeholder="اختر التاريخ"
          helpText="انقر على الأيقونة لفتح التقويم"
        />
      </div>
    );
  }
};

// Popover positioning
export const PopoverPositions: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '20px', 
        padding: '100px',
        width: '600px' 
      }}>
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="Bottom Start"
          popoverSide="bottom"
          popoverAlign="start"
        />
        
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="Bottom End"
          popoverSide="bottom"
          popoverAlign="end"
        />
        
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="Top Start"
          popoverSide="top"
          popoverAlign="start"
        />
        
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="Top End"
          popoverSide="top"
          popoverAlign="end"
        />
      </div>
    );
  }
};

// Without calendar icon
export const WithoutIcon: Story = {
  args: {
    showCalendarIcon: false,
    readOnly: false,
    placeholder: 'Type date here'
  },
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>();
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
        label="Date without Icon"
        helpText="Focus the input to open calendar"
      />
    );
  }
};

// Multiple months calendar
export const MultipleMonths: Story = {
  args: {
    numberOfMonths: 2,
    mode: 'range',
    placeholder: 'Select date range with 2 months'
  },
  render: (args) => {
    const [value, setValue] = useState<{ from?: Date; to?: Date } | undefined>();
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
        label="Date Range with Multiple Months"
        helpText="Select a range across multiple months"
      />
    );
  }
};

// Three months for vacation planning
export const VacationPlanning: Story = {
  args: {
    numberOfMonths: 3,
    mode: 'range',
    placeholder: 'Plan your vacation dates',
    closeOnSelect: false
  },
  render: (args) => {
    const [value, setValue] = useState<{ from?: Date; to?: Date } | undefined>();

    return (
      <div style={{ width: '400px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Vacation Planning
        </h3>
        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          label="Vacation Dates"
          helpText="Select your vacation period from the 3-month view"
        />
        {value?.from && value?.to && (
          <div style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: 'var(--t-color-fill-success-secondary)',
            border: '1px solid var(--t-color-border-success)',
            borderRadius: 'var(--t-border-radius-200)',
            fontSize: '14px'
          }}>
            <strong>Vacation Duration:</strong> {Math.ceil((value.to.getTime() - value.from.getTime()) / (1000 * 60 * 60 * 24))} days
            <br />
            <strong>From:</strong> {value.from.toLocaleDateString()}
            <br />
            <strong>To:</strong> {value.to.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  }
};

// Analytics layout with presets (Amplitude-style)
export const AnalyticsRange: Story = {
  args: {
    mode: 'range',
    layout: 'analytics',
    numberOfMonths: 2,
    showTimezone: true,
    timezone: '(UTC+00:00) UTC',
    showTimeSelection: true,
    placeholder: 'Select date range'
  },
  render: (args) => {
    const [value, setValue] = useState<{ from?: Date; to?: Date } | undefined>({
      from: new Date(2025, 7, 15), // Aug 15, 2025
      to: new Date(2025, 8, 14)    // Sep 14, 2025
    });
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ width: '300px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Analytics Date Range
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: 'var(--t-color-text-secondary)' }}>
          Professional analytics date picker with presets, custom ranges, and timezone support - similar to Amplitude, Mixpanel, and other analytics platforms.
        </p>

        <DatePicker
          {...args}
          value={value}
          onChange={setValue}
          open={isOpen}
          onOpenChange={setIsOpen}
          onApply={(config) => {
            console.log('Applied date range config:', config);
            setIsOpen(false);
          }}
          onCancel={() => {
            console.log('Cancelled date range selection');
            setIsOpen(false);
          }}
          onSavePreset={(name, config) => {
            console.log('Save preset:', name, config);
          }}
          onRangeTypeChange={(type) => {
            console.log('Range type changed:', type);
          }}
          label="Date Range"
          helpText="Click to open the analytics date picker"
        />

        {value?.from && value?.to && (
          <div style={{
            marginTop: '24px',
            padding: '16px',
            backgroundColor: 'var(--t-color-surface-secondary)',
            border: '1px solid var(--t-color-border-secondary)',
            borderRadius: 'var(--t-border-radius-200)',
            fontSize: '14px'
          }}>
            <strong>Selected Range:</strong>
            <br />
            <strong>From:</strong> {value.from.toLocaleDateString()}
            <br />
            <strong>To:</strong> {value.to.toLocaleDateString()}
            <br />
            <strong>Duration:</strong> {Math.ceil((value.to.getTime() - value.from.getTime()) / (1000 * 60 * 60 * 24))} days
          </div>
        )}

        <div style={{
          marginTop: '16px',
          padding: '12px',
          backgroundColor: 'var(--t-color-fill-info-secondary)',
          border: '1px solid var(--t-color-border-info)',
          borderRadius: 'var(--t-border-radius-200)',
          fontSize: '13px'
        }}>
          <strong>Features:</strong>
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            <li>Preset date ranges (Last 30/60/90 Days, This Week/Month/Quarter/Year)</li>
            <li>Custom range types (Between, Last, Since, This)</li>
            <li>Two-month calendar view</li>
            <li>Save custom presets functionality</li>
            <li>Timezone display</li>
            <li>Apply/Cancel actions</li>
            <li>Time selection option</li>
            <li>Professional analytics UI</li>
          </ul>
        </div>
      </div>
    );
  }
};