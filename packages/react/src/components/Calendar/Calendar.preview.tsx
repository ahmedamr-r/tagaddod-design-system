import { useState } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Calendar, type CalendarProps } from './Calendar';

const calendarModes = ['single', 'multiple', 'range'] as const;
const calendarVariants = ['default', 'analytics'] as const;
const captionLayouts = ['label', 'dropdown', 'dropdown-months', 'dropdown-years'] as const;

export const preview: PreviewModule<CalendarProps> = {
  name: 'Calendar',
  slug: 'calendar',
  description: 'Full calendar built on react-day-picker with single, multiple, range, and analytics modes.',
  component: Calendar,
  defaultProps: {
    mode: 'single',
    numberOfMonths: 1,
    showOutsideDays: false,
    fixedWeeks: true,
    variant: 'default',
    captionLayout: 'label',
  },
  controls: {
    mode: { type: 'select', options: calendarModes, description: 'Selection mode' },
    variant: { type: 'select', options: calendarVariants, description: 'Default or analytics with preset sidebar' },
    captionLayout: { type: 'select', options: captionLayouts, description: 'Month caption layout' },
    numberOfMonths: { type: 'number', description: 'How many months to display' },
    showOutsideDays: { type: 'boolean', description: 'Render days from adjacent months' },
    fixedWeeks: { type: 'boolean', description: 'Always show 6 weeks per month' },
  },
  examples: [
    {
      name: 'Single',
      props: {},
      render: () => {
        const Demo = () => {
          const [selected, setSelected] = useState<Date | undefined>(new Date());
          return (
            <Calendar
              mode="single"
              selected={selected}
              onSelect={(date) => setSelected(date as Date | undefined)}
            />
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'Range',
      props: {},
      render: () => {
        const Demo = () => {
          const [range, setRange] = useState<{ from?: Date; to?: Date }>({
            from: new Date(),
            to: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
          });
          return (
            <Calendar
              mode="range"
              numberOfMonths={2}
              selected={range}
              onSelect={(value) => setRange(value as { from?: Date; to?: Date })}
            />
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'Multiple',
      props: {},
      render: () => {
        const Demo = () => {
          const [dates, setDates] = useState<Date[]>([]);
          return (
            <Calendar
              mode="multiple"
              selected={dates}
              onSelect={(value) => setDates((value as Date[]) ?? [])}
            />
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'WithDropdownHeader',
      props: {},
      render: () => (
        <Calendar mode="single" captionLayout="dropdown" numberOfMonths={1} />
      ),
    },
  ],
};
