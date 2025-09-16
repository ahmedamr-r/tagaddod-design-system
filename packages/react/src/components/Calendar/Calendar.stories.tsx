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

// RTL Testing with comprehensive examples
export const RTLTest: Story = {
  parameters: {
    docs: {
      description: {
        story: `Calendar component with RTL text direction and Arabic content for testing right-to-left layout and font rendering.

        **Features tested:**
        - Arabic font family integration
        - RTL text direction
        - Proper date formatting in Arabic locale
        - Line height adjustments for Arabic text
        - Border positioning in RTL mode`
      }
    }
  },
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>();

    // Apply RTL-aware styling
    const rtlContainerStyle = {
      fontFamily: 'var(--t-font-family-arabic)',
      padding: '20px',
      textAlign: 'right' as const,
      lineHeight: 'var(--t-line-height-arabic, 1.2)'
    };

    const titleStyle = {
      marginBottom: '16px',
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: 'var(--t-line-height-arabic, 1.2)'
    };

    return (
      <div dir="rtl" style={rtlContainerStyle}>
        <div style={titleStyle}>
          التقويم العربي - اختبار التخطيط من اليمين إلى اليسار
        </div>
        <Calendar
          {...args}
          selected={selected}
          onSelect={(date) => setSelected(date as Date | undefined)}
          footer={
            <div style={{
              textAlign: 'center',
              lineHeight: 'var(--t-line-height-arabic, 1.2)',
              margin: 0
            }}>
              {selected ? `تم اختيار: ${selected.toLocaleDateString('ar-SA')}` : 'اختر تاريخاً من التقويم'}
            </div>
          }
        />
        {selected && (
          <div style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: 'var(--t-color-surface-secondary)',
            borderRadius: '8px',
            fontSize: '14px',
            lineHeight: 'var(--t-line-height-arabic, 1.2)'
          }}>
            التاريخ المحدد: {selected.toLocaleDateString('ar-SA', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        )}
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

// Analytics Range with RTL support test
export const AnalyticsRangeRTL: Story = {
  parameters: {
    docs: {
      description: {
        story: `Analytics Range Calendar with RTL support for Arabic interfaces.

        Tests the analytics variant in right-to-left mode with Arabic labels and proper layout adjustments.`
      }
    }
  },
  render: () => {
    const [selectedRange, setSelectedRange] = useState<{ from?: Date; to?: Date }>({
      from: new Date(new Date().setDate(new Date().getDate() - 30)),
      to: new Date()
    });
    const [selectedPreset, setSelectedPreset] = useState<string>('last30');
    const [rangeType, setRangeType] = useState<'between' | 'last' | 'since' | 'this'>('last');
    const [rangeValue, setRangeValue] = useState<string | number>(30);
    const [periodType, setPeriodType] = useState<string>('week');
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    const [showCustomPreset, setShowCustomPreset] = useState<boolean>(false);

    return (
      <div dir="rtl" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '600px',
        padding: '20px',
        backgroundColor: 'var(--t-color-surface-secondary)',
        fontFamily: 'var(--t-font-family-arabic)'
      }}>
        <Calendar
          variant="analytics"
          mode="range"
          numberOfMonths={2}
          selected={selectedRange}
          onSelect={(range) => {
            const newRange = range as { from?: Date; to?: Date };
            setSelectedRange(newRange);
            if (newRange) {
              setStartDate(newRange.from);
              setEndDate(newRange.to);
            }
          }}
          selectedPreset={selectedPreset}
          onPresetChange={setSelectedPreset}
          rangeType={rangeType}
          onRangeTypeChange={setRangeType}
          rangeValue={rangeValue}
          onRangeValueChange={setRangeValue}
          periodType={periodType}
          onPeriodTypeChange={setPeriodType}
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          showCustomPreset={showCustomPreset}
          onApply={() => console.log('Applied RTL range')}
          onCancel={() => console.log('Cancelled RTL range')}
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
        story: `**Analytics Range Calendar** - A sophisticated date range picker inspired by Amplitude's design.

**Features:**
- **Preset Panel**: Quick access to common date ranges
- **Dynamic Header**: Changes based on selected range type (Between, Last, Since, This)
- **Dual Calendar**: Two-month calendar display for range selection
- **Smart Inputs**: Editable date inputs and number inputs based on selection type
- **Auto-Custom Preset**: Automatically appears and gets selected when user modifies header controls
- **Professional Actions**: Apply and Cancel buttons

**Custom Preset Behavior:**
- **Auto-Appearance**: "Custom" preset appears when user changes any header selection
- **Auto-Selection**: Automatically becomes active when user modifies range type, values, or dates
- **Smart Detection**: Triggers on changes to Between dates, Last value, Since date, or This period

**Range Types:**
- **Between**: Two date inputs with "and" separator
- **Last**: Number input + "complete days and today" label
- **Since**: Single date input
- **This**: Period dropdown (Week/Month/Quarter/Year)

**Use Cases:**
- Analytics dashboards
- Reporting interfaces
- Data visualization controls
- Business intelligence tools`
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

// Analytics Range with Date Validation Testing
export const AnalyticsDateValidation: Story = {
  parameters: {
    docs: {
      description: {
        story: `**Analytics Range Calendar with Date Input Validation**

        This story demonstrates robust date validation for the analytics variant:

        **Validation Features:**
        - **Graceful Invalid Input Handling**: No error messages shown for invalid formats
        - **Multiple Format Support**: Accepts dd/MM/yyyy, dd/MM/yy, d/M/yyyy, dd-MM-yyyy, yyyy-MM-dd
        - **Smart Fallbacks**: Invalid dates automatically fallback to sensible defaults
        - **OnBlur Validation**: Validation triggers when user moves focus away from input

        **Fallback Behavior:**
        - **Start Date**: Invalid input falls back to January 1st of current year
        - **End Date**: Invalid input falls back to current date
        - **Since Date**: Invalid input falls back to January 1st of current year

        **Test Cases to Try:**
        1. Enter letters like "abc" in date fields and click away
        2. Enter partial dates like "12/" and blur the input
        3. Enter invalid dates like "32/13/2024" and blur
        4. Enter valid dates in different formats (12/05/2024, 2024-05-12, etc.)
        5. Clear the input completely and blur

        The component will silently handle all invalid cases with appropriate fallbacks.`
      }
    }
  },
  render: () => {
    const [selectedRange, setSelectedRange] = useState<{ from?: Date; to?: Date }>({
      from: new Date(new Date().setDate(new Date().getDate() - 30)),
      to: new Date()
    });
    const [selectedPreset, setSelectedPreset] = useState<string>('custom');
    const [rangeType, setRangeType] = useState<'between' | 'last' | 'since' | 'this'>('between');
    const [rangeValue, setRangeValue] = useState<string | number>(30);
    const [periodType, setPeriodType] = useState<string>('week');
    const [startDate, setStartDate] = useState<Date | undefined>(new Date(new Date().setDate(new Date().getDate() - 30)));
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());
    const [showCustomPreset, setShowCustomPreset] = useState<boolean>(true);

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        backgroundColor: 'var(--t-color-surface-secondary)',
        minHeight: '100vh'
      }}>
        {/* Instructions */}
        <div style={{
          padding: '16px',
          backgroundColor: 'var(--t-color-surface-primary)',
          borderRadius: '8px',
          border: '1px solid var(--t-color-border-secondary)'
        }}>
          <h3 style={{ margin: '0 0 12px 0', color: 'var(--t-color-text-primary)' }}>
            Date Validation Test Instructions
          </h3>
          <ul style={{ margin: 0, color: 'var(--t-color-text-secondary)', fontSize: '14px' }}>
            <li>Try entering invalid text like "abc" in date fields</li>
            <li>Enter partial dates like "12/" or "2024-"</li>
            <li>Enter impossible dates like "32/13/2024"</li>
            <li>Test different valid formats: dd/MM/yyyy, yyyy-MM-dd, etc.</li>
            <li>Clear inputs completely and click away</li>
            <li><strong>Expected:</strong> Invalid inputs silently fall back to defaults on blur</li>
          </ul>
        </div>

        {/* Calendar Component */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <Calendar
            variant="analytics"
            mode="range"
            numberOfMonths={2}
            selected={selectedRange}
            onSelect={(range) => {
              const newRange = range as { from?: Date; to?: Date };
              setSelectedRange(newRange);
              if (newRange) {
                setStartDate(newRange.from);
                setEndDate(newRange.to);
              }
            }}
            selectedPreset={selectedPreset}
            onPresetChange={setSelectedPreset}
            rangeType={rangeType}
            onRangeTypeChange={(type) => {
              setRangeType(type);
              // Switch to 'since' mode to test single date validation
              if (type === 'since') {
                setShowCustomPreset(true);
                setSelectedPreset('custom');
              }
            }}
            rangeValue={rangeValue}
            onRangeValueChange={setRangeValue}
            periodType={periodType}
            onPeriodTypeChange={setPeriodType}
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            showCustomPreset={showCustomPreset}
            onApply={() => {
              console.log('Applied range:', { startDate, endDate, rangeType });
              alert(`Applied range: ${startDate?.toLocaleDateString()} - ${endDate?.toLocaleDateString()}`);
            }}
            onCancel={() => {
              console.log('Cancelled');
            }}
          />
        </div>

        {/* Current State Display */}
        <div style={{
          padding: '16px',
          backgroundColor: 'var(--t-color-surface-primary)',
          borderRadius: '8px',
          border: '1px solid var(--t-color-border-secondary)'
        }}>
          <h4 style={{ margin: '0 0 12px 0', color: 'var(--t-color-text-primary)' }}>
            Current State
          </h4>
          <div style={{ fontSize: '14px', color: 'var(--t-color-text-secondary)' }}>
            <p><strong>Range Type:</strong> {rangeType}</p>
            <p><strong>Start Date:</strong> {startDate ? startDate.toLocaleDateString() : 'Not set'}</p>
            <p><strong>End Date:</strong> {endDate ? endDate.toLocaleDateString() : 'Not set'}</p>
            <p><strong>Selected Range:</strong> {selectedRange?.from ? selectedRange.from.toLocaleDateString() : 'N/A'} - {selectedRange?.to ? selectedRange.to.toLocaleDateString() : 'N/A'}</p>
          </div>
        </div>
      </div>
    );
  }
};