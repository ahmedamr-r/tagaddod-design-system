import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import { useState } from 'react';
import { Button } from '../Button/Button';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible calendar component built on React DayPicker with full design system integration and RTL support.'
      }
    }
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['single', 'multiple', 'range'],
      description: 'Selection mode for the calendar'
    },
    captionLayout: {
      control: { type: 'select' },
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      description: 'Layout of the month caption'
    },
    numberOfMonths: {
      control: { type: 'number', min: 1, max: 3 },
      description: 'Number of months to display'
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Whether to show days from adjacent months'
    },
    fixedWeeks: {
      control: 'boolean',
      description: 'Whether to display 6 weeks per month (fixed height)'
    },
    reverseMonths: {
      control: 'boolean',
      description: 'Whether to reverse the order of months when displaying multiple'
    },
    pagedNavigation: {
      control: 'boolean',
      description: 'Whether to enable paged navigation for multiple months'
    }
  },
  args: {
    mode: 'single',
    captionLayout: 'label',
    numberOfMonths: 1,
    showOutsideDays: false,
    fixedWeeks: false,
    reverseMonths: false,
    pagedNavigation: false
  }
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic single date selection
export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>();
    return (
      <Calendar
        {...args}
        selected={selected}
        onSelect={(date) => setSelected(date as Date | undefined)}
      />
    );
  }
};

// Multiple date selection
export const Multiple: Story = {
  args: {
    mode: 'multiple'
  },
  render: (args) => {
    const [selected, setSelected] = useState<Date[] | undefined>();
    return (
      <Calendar
        {...args}
        selected={selected}
        onSelect={(date) => setSelected(date as Date[] | undefined)}
      />
    );
  }
};

// Date range selection
export const Range: Story = {
  args: {
    mode: 'range'
  },
  render: (args) => {
    const [selected, setSelected] = useState<{ from?: Date; to?: Date } | undefined>();
    return (
      <Calendar
        {...args}
        selected={selected}
        onSelect={(date) => setSelected(date as { from?: Date; to?: Date } | undefined)}
      />
    );
  }
};

// With dropdown navigation
export const WithDropdown: Story = {
  args: {
    captionLayout: 'dropdown',
    startMonth: new Date(2020, 0),
    endMonth: new Date(2030, 11)
  },
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>();
    return (
      <Calendar
        {...args}
        selected={selected}
        onSelect={(date) => setSelected(date as Date | undefined)}
      />
    );
  }
};

// Multiple months display
export const MultipleMonths: Story = {
  args: {
    numberOfMonths: 2
  },
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>();
    return (
      <Calendar
        {...args}
        selected={selected}
        onSelect={(date) => setSelected(date as Date | undefined)}
      />
    );
  }
};

// Multiple months with range selection
export const MultipleMonthsRange: Story = {
  args: {
    mode: 'range',
    numberOfMonths: 2,
    pagedNavigation: true
  },
  render: (args) => {
    const [selected, setSelected] = useState<{ from?: Date; to?: Date } | undefined>();
    return (
      <div>
        <Calendar
          {...args}
          selected={selected}
          onSelect={(date) => setSelected(date as { from?: Date; to?: Date } | undefined)}
        />
        {selected && (selected.from || selected.to) && (
          <div style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: 'var(--t-color-surface-secondary)',
            borderRadius: '8px',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {selected.from && selected.to ? (
              `Selected range: ${selected.from.toLocaleDateString()} - ${selected.to.toLocaleDateString()}`
            ) : selected.from ? (
              `Start date: ${selected.from.toLocaleDateString()}`
            ) : selected.to ? (
              `End date: ${selected.to.toLocaleDateString()}`
            ) : null}
          </div>
        )}
      </div>
    );
  }
};

// With outside days
export const WithOutsideDays: Story = {
  args: {
    showOutsideDays: true
  },
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>();
    return (
      <Calendar
        {...args}
        selected={selected}
        onSelect={(date) => setSelected(date as Date | undefined)}
      />
    );
  }
};

// With footer
export const WithFooter: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>();
    return (
      <Calendar
        {...args}
        selected={selected}
        onSelect={(date) => setSelected(date as Date | undefined)}
        footer={
          selected ? (
            <p style={{ margin: 0, textAlign: 'center' }}>
              You selected {selected.toLocaleDateString()}.
            </p>
          ) : (
            <p style={{ margin: 0, textAlign: 'center' }}>
              Please pick a date.
            </p>
          )
        }
      />
    );
  }
};

// Disabled dates
export const WithDisabledDates: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>();
    
    // Disable weekends
    const isWeekend = (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6;
    };
    
    return (
      <Calendar
        {...args}
        selected={selected}
        onSelect={(date) => setSelected(date as Date | undefined)}
        disabled={isWeekend}
        footer="Weekends are disabled"
      />
    );
  }
};

// RTL Testing
export const RTLTest: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Calendar component with RTL text direction and Arabic content for testing right-to-left layout and font rendering.'
      }
    }
  },
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>();
    
    return (
      <div dir="rtl" style={{ fontFamily: 'var(--t-font-family-arabic)', padding: '20px' }}>
        <div style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>
          التقويم العربي
        </div>
        <Calendar
          {...args}
          selected={selected}
          onSelect={(date) => setSelected(date as Date | undefined)}
          footer={selected ? `تم اختيار: ${selected.toLocaleDateString('ar-SA')}` : 'اختر تاريخاً'}
        />
      </div>
    );
  }
};

// Size variations with responsive behavior
export const Responsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>();
    return (
      <div style={{ width: '100%', maxWidth: '300px' }}>
        <Calendar
          {...args}
          selected={selected}
          onSelect={(date) => setSelected(date as Date | undefined)}
        />
      </div>
    );
  }
};

// Analytics Range - Amplitude-style date picker with presets
export const AnalyticsRange: Story = {
  parameters: {
    docs: {
      description: {
        story: `
**Analytics Range Calendar** - A sophisticated date range picker inspired by Amplitude's design.

**Features:**
- **Fixed Left Panel**: Preset options with 15rem fixed width
- **Dynamic Header**: Changes based on selected range type (Between, Last, Since, This)
- **Dual Calendar**: Two-month calendar display for range selection
- **Smart Inputs**: Editable date inputs and number inputs based on selection type
- **Auto-Custom Preset**: Automatically appears and gets selected when user modifies header controls
- **Professional Actions**: Apply and Cancel buttons

**Custom Preset Behavior:**
- **Auto-Appearance**: "Custom" preset appears below "This Year" when user changes any header selection
- **Auto-Selection**: Automatically becomes active when user modifies range type, values, or dates
- **Smart Detection**: Triggers on changes to Between dates, Last value, Since date, or This period

**Range Types:**
- **Between**: Two date inputs with "and" separator
- **Last**: Number input + "complete days and today" label
- **Since**: Single date input
- **This**: Period dropdown (Week/Month/Quarter/Year)

**Interactive Demo:**
Try changing any dropdown or date input in the header - notice how "Custom" preset appears and becomes active automatically.

**Use Cases:**
- Analytics dashboards
- Reporting interfaces
- Data visualization controls
- Business intelligence tools
        `
      }
    }
  },
  render: () => {
    const [selectedRange, setSelectedRange] = useState<{ from?: Date; to?: Date }>({
      from: new Date(new Date().setDate(new Date().getDate() - 30)),
      to: new Date()
    });
    const [selectedPreset, setSelectedPreset] = useState<string>('last30');
    const [rangeType, setRangeType] = useState<'between' | 'last' | 'since' | 'this'>('between');
    const [rangeValue, setRangeValue] = useState<string | number>(30);
    const [periodType, setPeriodType] = useState<string>('week');
    const [startDate, setStartDate] = useState<Date | undefined>(new Date(new Date().setDate(new Date().getDate() - 30)));
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());
    const [showCustomPreset, setShowCustomPreset] = useState<boolean>(false);

    const handleApply = () => {
      console.log('Applied:', { rangeType, rangeValue, periodType, startDate, endDate, selectedRange });
    };

    const handleCancel = () => {
      console.log('Cancelled');
    };

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '600px',
        padding: '20px',
        backgroundColor: 'var(--t-color-surface-secondary)'
      }}>
        <Calendar
          variant="analytics"
          mode="range"
          numberOfMonths={2}
          selected={selectedRange}
          onSelect={(range) => {
            const newRange = range as { from?: Date; to?: Date };
            setSelectedRange(newRange);
            // Sync the start and end dates with the selected range
            if (newRange) {
              setStartDate(newRange.from);
              setEndDate(newRange.to);
            } else {
              setStartDate(undefined);
              setEndDate(undefined);
            }
          }}
          selectedPreset={selectedPreset}
          onPresetChange={(preset) => {
            setSelectedPreset(preset);
            // Show custom preset only when 'custom' is selected
            if (preset === 'custom') {
              setShowCustomPreset(true);
            } else {
              // Hide custom preset when any other preset is selected
              setShowCustomPreset(false);
            }
          }}
          rangeType={rangeType}
          onRangeTypeChange={(type, fromPreset) => {
            setRangeType(type);
            // Only show custom preset if this is a manual change, not from preset
            if (!fromPreset) {
              setShowCustomPreset(true);
              setSelectedPreset('custom');
            }
          }}
          rangeValue={rangeValue}
          onRangeValueChange={(value, fromPreset) => {
            setRangeValue(value);
            // Only show custom preset if this is a manual change, not from preset
            if (!fromPreset) {
              setShowCustomPreset(true);
              setSelectedPreset('custom');
            }
          }}
          periodType={periodType}
          onPeriodTypeChange={(period, fromPreset) => {
            setPeriodType(period);
            // Only show custom preset if this is a manual change, not from preset
            if (!fromPreset) {
              setShowCustomPreset(true);
              setSelectedPreset('custom');
            }
          }}
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={(date) => {
            setStartDate(date);
            // Don't show custom preset here as this gets triggered by presets too
          }}
          onEndDateChange={(date) => {
            setEndDate(date);
            // Don't show custom preset here as this gets triggered by presets too
          }}
          showCustomPreset={showCustomPreset}
          onApply={handleApply}
          onCancel={handleCancel}
        />
      </div>
    );
  }
};