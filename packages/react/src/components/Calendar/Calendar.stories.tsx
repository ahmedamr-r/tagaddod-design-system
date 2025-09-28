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
    variant: {
      control: { type: 'select' },
      options: ['default', 'analytics'],
      description: 'Calendar variant - analytics enables preset sidebar'
    },
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
    variant: 'default',
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

// Analytics Range with Date Validation Testing
export const AnalyticsDateValidation: Story = {
  args: {
    variant: 'analytics',
    mode: 'range',
    numberOfMonths: 2
  },
  parameters: {
    docs: {
      description: {
        story: `**Analytics Range Calendar with Date Input Validation**

        This story demonstrates robust date validation for the analytics variant with configurable month display.

        **Use the numberOfMonths control above to change between 1, 2, or 3 months!**

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
  render: (args) => {
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
            {...args}
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

// Calendar with Navigation Restrictions - New Feature
export const WithNavigationRestrictions: Story = {
  args: {
    variant: "default",
    mode: "single",
    numberOfMonths: 1
  },
  parameters: {
    docs: {
      description: {
        story: `**Calendar with Navigation Restrictions**

        This story demonstrates the new \`minDate\` and \`maxDate\` props that restrict calendar navigation.

        **Features:**
        - **minDate**: Prevents navigating to months before this date
        - **maxDate**: Prevents navigating to months after this date
        - **Smart Button States**: Previous/Next buttons automatically disable when limits are reached
        - **RTL Support**: Works correctly in both LTR and RTL modes
        - **All Variants**: Compatible with default, dropdown, and analytics variants

        **Current Configuration:**
        - **Min Date**: January 2024 (cannot go before)
        - **Max Date**: December 2025 (cannot go after)
        - Try clicking the navigation arrows to see the restrictions in action

        **Use Cases:**
        - Restrict date selection to valid business periods
        - Prevent navigation to historical data that doesn't exist
        - Limit future date selection for booking systems
        - Control data visualization timeframes`
      }
    }
  },
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>();
    
    // Set restrictions: January 2024 to December 2025
    const minDate = new Date(2024, 0, 1); // January 1, 2024
    const maxDate = new Date(2025, 11, 31); // December 31, 2025
    
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        alignItems: "center"
      }}>
        {/* Instructions */}
        <div style={{
          padding: "16px",
          backgroundColor: "var(--t-color-surface-primary)",
          borderRadius: "8px",
          border: "1px solid var(--t-color-border-secondary)",
          maxWidth: "600px",
          textAlign: "center"
        }}>
          <h3 style={{ margin: "0 0 12px 0", color: "var(--t-color-text-primary)" }}>
            Navigation Restrictions Demo
          </h3>
          <p style={{ margin: 0, color: "var(--t-color-text-secondary)", fontSize: "14px" }}>
            <strong>Allowed Range:</strong> January 2024 - December 2025<br/>
            Try navigating with the arrow buttons. They will disable when you reach the limits.
          </p>
        </div>

        {/* Calendar */}
        <Calendar
          {...args}
          selected={selected}
          onSelect={(date) => setSelected(date as Date | undefined)}
          minDate={minDate}
          maxDate={maxDate}
          footer={
            selected ? (
              <p style={{ margin: 0, textAlign: "center" }}>
                Selected: {selected.toLocaleDateString()}
              </p>
            ) : (
              <p style={{ margin: 0, textAlign: "center" }}>
                Navigation restricted to Jan 2024 - Dec 2025
              </p>
            )
          }
        />
        
        {/* Current State */}
        <div style={{
          padding: "12px",
          backgroundColor: "var(--t-color-surface-secondary)",
          borderRadius: "8px",
          fontSize: "14px",
          color: "var(--t-color-text-secondary)",
          textAlign: "center"
        }}>
          <strong>Current Month:</strong> {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}<br/>
          <strong>Min Date:</strong> {minDate.toLocaleDateString()}<br/>
          <strong>Max Date:</strong> {maxDate.toLocaleDateString()}
        </div>
      </div>
    );
  }
};
