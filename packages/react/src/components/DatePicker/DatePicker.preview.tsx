import { useState } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { DatePicker, type DatePickerProps } from './DatePicker';

const pickerModes = ['single', 'multiple', 'range'] as const;
const pickerLayouts = ['single', 'dual', 'analytics'] as const;
const popoverSides = ['top', 'right', 'bottom', 'left'] as const;
const popoverAligns = ['start', 'center', 'end'] as const;

export const preview: PreviewModule<DatePickerProps> = {
  name: 'DatePicker',
  slug: 'date-picker',
  description: 'Date input with popover calendar for single, multiple, and range selection.',
  component: DatePicker,
  defaultProps: {
    mode: 'single',
    layout: 'single',
    label: 'Date',
    placeholder: 'Pick a date',
    dateFormat: 'PPP',
    showCalendarIcon: true,
    popoverSide: 'bottom',
    popoverAlign: 'start',
    closeOnSelect: true,
  },
  controls: {
    label: { type: 'text', description: 'Label above the input' },
    placeholder: { type: 'text', description: 'Placeholder when empty' },
    mode: { type: 'select', options: pickerModes, description: 'Single, multiple, or range' },
    layout: { type: 'select', options: pickerLayouts, description: 'Single/dual inputs or analytics' },
    dateFormat: { type: 'text', description: 'date-fns format pattern (default "PPP")' },
    showCalendarIcon: { type: 'boolean', description: 'Show the calendar icon in the suffix' },
    popoverSide: { type: 'select', options: popoverSides, description: 'Calendar popover side' },
    popoverAlign: { type: 'select', options: popoverAligns, description: 'Calendar popover alignment' },
    closeOnSelect: { type: 'boolean', description: 'Close the calendar after selecting a date (single mode)' },
    disabled: { type: 'boolean', description: 'Disable the input' },
  },
  examples: [
    {
      name: 'Single',
      props: {},
      render: () => {
        const Demo = () => {
          const [value, setValue] = useState<Date | undefined>(undefined);
          return (
            <DatePicker
              label="Start date"
              placeholder="Pick a date"
              value={value}
              onChange={(date) => setValue(date as Date | undefined)}
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
          const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>(undefined);
          return (
            <DatePicker
              label="Travel dates"
              mode="range"
              value={range}
              onChange={(value) => setRange(value as { from?: Date; to?: Date } | undefined)}
            />
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'DualRange',
      description: 'Range mode with two separate inputs (flight-booking style).',
      props: {},
      render: () => {
        const Demo = () => {
          const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>(undefined);
          return (
            <DatePicker
              label="Check-in and check-out"
              mode="range"
              layout="dual"
              value={range}
              onChange={(value) => setRange(value as { from?: Date; to?: Date } | undefined)}
            />
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'WithHelpText',
      props: {},
      render: () => {
        const Demo = () => {
          const [value, setValue] = useState<Date | undefined>(undefined);
          return (
            <DatePicker
              label="Delivery date"
              placeholder="Pick a delivery date"
              helpText="Select any date within the next 30 days."
              value={value}
              onChange={(date) => setValue(date as Date | undefined)}
            />
          );
        };
        return <Demo />;
      },
    },
  ],
};
