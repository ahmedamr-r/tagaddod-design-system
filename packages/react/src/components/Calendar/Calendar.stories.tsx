import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import { useState } from 'react';

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