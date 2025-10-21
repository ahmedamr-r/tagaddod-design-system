import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as r}from"./index-BqIVwv1J.js";import{M as l,A as d,C as t}from"./index-BCgJJ4rA.js";import{C as s,D as i,M as c,R as m,W as h,a as u,b as g,c as p,d as v,e as x,f}from"./Calendar.stories-CxqMi7Rc.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Calendar-kiPbSDid.js";import"./clsx-B-dksMZM.js";import"./Select-Bnkvnb3h.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-9FI6h9_9.js";import"./index-D7-T4lOe.js";import"./index-YtIeenAn.js";import"./index-CxljV1N8.js";import"./index-DAnQV6hb.js";import"./index-D5cGTUkh.js";import"./Combination-ZMr3b_jV.js";import"./index-N3eucVg6.js";import"./index-DavpLpmr.js";import"./index-DXU_LAI1.js";import"./index-ComwvWTa.js";import"./index-QFq3N9B_.js";import"./TextInput-CRZDgAAp.js";import"./IconExclamationCircle-BYkI5IG6.js";import"./createReactComponent-CKk3lApD.js";import"./IconX-DigCVOFI.js";import"./IconChevronDown-D1vfiZl2.js";import"./IconChevronUp-BrVbvfGP.js";import"./IconSearch-BrVn1Pri.js";import"./IconCheck-DgTGwIHb.js";import"./Button-CoP_mZBT.js";import"./index-Dcu5jVSv.js";import"./index-BTe66ZhM.js";import"./Number-CiXgcMqy.js";import"./ScrollArea-CS41QZ1X.js";import"./IconChevronRight-D3J9D-fl.js";import"./IconChevronLeft-BDjp6y3L.js";import"./IconCalendar-DOlNLz5K.js";import"./IconArrowRight-Bc4wwjT_.js";function o(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s}),`
`,e.jsx(n.h1,{id:"calendar",children:"Calendar"}),`
`,e.jsx(n.p,{children:"A flexible calendar component built on React DayPicker with comprehensive design system integration, RTL support, and multiple date selection capabilities. Features shadcn-like navigation, multiple month displays, and custom header system with unified controls."}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(n.p,{children:"Use the Calendar component when you need:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Standalone calendar displays for date selection"}),`
`,e.jsx(n.li,{children:"Custom date picker implementations with dropdown navigation"}),`
`,e.jsx(n.li,{children:"Calendar views for scheduling interfaces with multiple months"}),`
`,e.jsx(n.li,{children:"Date range selection in dashboards and analytics"}),`
`,e.jsx(n.li,{children:"Event calendar displays with custom validation"}),`
`,e.jsx(n.li,{children:"Inline date selection without popover containers"}),`
`]}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Calendar } from '@tagaddod-design/react';
import type { CalendarProps, CalendarMode, CalendarCaptionLayout } from '@tagaddod-design/react';
`})}),`
`,e.jsx(n.h2,{id:"component-structure",children:"Component Structure"}),`
`,e.jsx(n.p,{children:"The Calendar component provides a unified interface for date selection with customizable layouts:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header System"}),": Custom navigation with month/year dropdowns or labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Month Display"}),": Single or multiple month views with unified navigation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Selection Modes"}),": Single, multiple, and range selection patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RTL Support"}),": Complete Arabic language and layout support"]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"calendar-props",children:"Calendar Props"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';
import { Calendar } from '@tagaddod-design/react';

function DateSelection() {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      showOutsideDays={false}
      className="rounded-md border"
    />
  );
}
`})}),`
`,e.jsx(n.h2,{id:"selection-modes",children:"Selection Modes"}),`
`,e.jsx(n.h3,{id:"single-date-selection",children:"Single Date Selection"}),`
`,e.jsx(n.p,{children:"Select individual dates with visual feedback and proper focus management."}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function SingleDateCalendar() {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        captionLayout="label"
        showOutsideDays={false}
      />

      {selectedDate && (
        <div className="mt-4 p-3 bg-surface-secondary rounded">
          Selected: {selectedDate.toLocaleDateString()}
        </div>
      )}
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"multiple-date-selection",children:"Multiple Date Selection"}),`
`,e.jsx(n.p,{children:"Allow users to select multiple individual dates with batch operations."}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function MultipleDateCalendar() {
  const [selectedDates, setSelectedDates] = useState([]);

  const clearSelection = () => setSelectedDates([]);
  const selectWeekend = () => {
    const today = new Date();
    const weekends = [];
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() === 0 || date.getDay() === 6) {
        weekends.push(date);
      }
    }
    setSelectedDates(weekends);
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button onClick={clearSelection} className="btn-secondary">
          Clear All
        </button>
        <button onClick={selectWeekend} className="btn-outline">
          Select Weekends
        </button>
      </div>

      <Calendar
        mode="multiple"
        selected={selectedDates}
        onSelect={setSelectedDates}
        showOutsideDays={true}
        fixedWeeks={true}
      />

      <div className="mt-4 text-sm text-secondary">
        {selectedDates.length} dates selected
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"date-range-selection",children:"Date Range Selection"}),`
`,e.jsx(n.p,{children:"Enable contiguous date range selection with start, middle, and end styling."}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function RangeCalendar() {
  const [range, setRange] = useState({ from: undefined, to: undefined });

  const resetRange = () => setRange({ from: undefined, to: undefined });

  const calculateDays = () => {
    if (!range.from || !range.to) return 0;
    const timeDiff = Math.abs(range.to - range.from);
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
  };

  return (
    <div>
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        pagedNavigation={true}
      />

      <div className="mt-4 p-4 bg-surface-secondary rounded">
        {range.from ? (
          <div className="space-y-2">
            <div>Start: {range.from.toLocaleDateString()}</div>
            {range.to && (
              <>
                <div>End: {range.to.toLocaleDateString()}</div>
                <div>Duration: {calculateDays()} days</div>
              </>
            )}
            <button onClick={resetRange} className="btn-secondary text-sm">
              Reset Range
            </button>
          </div>
        ) : (
          <div>Select a date range...</div>
        )}
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"navigation-and-layout-options",children:"Navigation and Layout Options"}),`
`,e.jsx(n.h3,{id:"dropdown-navigation",children:"Dropdown Navigation"}),`
`,e.jsx(n.p,{children:"Provides month and year dropdowns for quick navigation across large date ranges."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function DropdownCalendar() {
  const [selectedDate, setSelectedDate] = useState();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <div>
      <Calendar
        mode="single"
        captionLayout="dropdown"
        selected={selectedDate}
        onSelect={setSelectedDate}
        month={currentMonth}
        onMonthChange={setCurrentMonth}
        startMonth={new Date(2020, 0)}
        endMonth={new Date(2030, 11)}
        showOutsideDays={false}
      />

      <div className="mt-4 text-center text-sm text-secondary">
        Current view: {currentMonth.toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric'
        })}
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"multiple-months-display",children:"Multiple Months Display"}),`
`,e.jsx(n.p,{children:"Show 2-3 months simultaneously with unified navigation for easier range selection."}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function MultiMonthCalendar() {
  const [selectedDate, setSelectedDate] = useState();
  const [numberOfMonths, setNumberOfMonths] = useState(2);

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <label className="text-sm font-medium">
          Months to display:
        </label>
        <select
          value={numberOfMonths}
          onChange={(e) => setNumberOfMonths(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          <option value={1}>1 Month</option>
          <option value={2}>2 Months</option>
          <option value={3}>3 Months</option>
        </select>
      </div>

      <Calendar
        mode="single"
        captionLayout="label"
        numberOfMonths={numberOfMonths}
        selected={selectedDate}
        onSelect={setSelectedDate}
        pagedNavigation={true}
        showOutsideDays={false}
      />
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"multiple-months-with-range-selection",children:"Multiple Months with Range Selection"}),`
`,e.jsx(n.p,{children:"Optimized layout for range selection across multiple months with enhanced navigation."}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function MultiMonthRangeCalendar() {
  const [range, setRange] = useState({ from: undefined, to: undefined });

  const isRangeComplete = range.from && range.to;
  const rangeDuration = isRangeComplete
    ? Math.ceil(Math.abs(range.to - range.from) / (1000 * 60 * 60 * 24)) + 1
    : 0;

  return (
    <div>
      <Calendar
        mode="range"
        captionLayout="label"
        numberOfMonths={3}
        selected={range}
        onSelect={setRange}
        pagedNavigation={true}
        showOutsideDays={true}
        fixedWeeks={true}
      />

      {(range.from || range.to) && (
        <div className="mt-4 p-4 bg-surface-secondary rounded-lg">
          <div className="text-sm space-y-1">
            {range.from && (
              <div>Start: {range.from.toLocaleDateString()}</div>
            )}
            {range.to && (
              <div>End: {range.to.toLocaleDateString()}</div>
            )}
            {isRangeComplete && (
              <div className="font-medium">
                Selected: {rangeDuration} days
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,e.jsx(n.h3,{id:"footer-content",children:"Footer Content"}),`
`,e.jsx(n.p,{children:"Add custom footer content for additional information, actions, or status display."}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function CalendarWithFooter() {
  const [selectedDate, setSelectedDate] = useState();
  const today = new Date();

  const daysBetween = selectedDate
    ? Math.floor((selectedDate - today) / (1000 * 60 * 60 * 24))
    : 0;

  const footerContent = selectedDate ? (
    <div className="text-center space-y-2">
      <div>Selected: {selectedDate.toLocaleDateString()}</div>
      {daysBetween === 0 && <div className="text-blue-600">Today</div>}
      {daysBetween > 0 && <div>In {daysBetween} days</div>}
      {daysBetween < 0 && <div>{Math.abs(daysBetween)} days ago</div>}
    </div>
  ) : (
    <div className="text-center text-secondary">
      Select a date to see details
    </div>
  );

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footerContent}
      showOutsideDays={true}
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"disabled-dates",children:"Disabled Dates"}),`
`,e.jsx(n.p,{children:"Prevent selection of specific dates with custom validation logic."}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function DisabledDatesCalendar() {
  const [selectedDate, setSelectedDate] = useState();

  // Disable weekends and past dates
  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = date.getDay();
    const isPast = date < today;
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    return isPast || isWeekend;
  };

  // Custom holidays
  const holidays = [
    new Date(2024, 0, 1),  // New Year
    new Date(2024, 6, 4),  // July 4th
    new Date(2024, 11, 25) // Christmas
  ];

  const isHoliday = (date) => holidays.some(holiday =>
    date.toDateString() === holiday.toDateString()
  );

  const isCompletelyDisabled = (date) =>
    isDateDisabled(date) || isHoliday(date);

  return (
    <div>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        disabled={isCompletelyDisabled}
        showOutsideDays={false}
        footer="Weekends, past dates, and holidays are disabled"
      />

      {selectedDate && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
          ✓ Valid selection: {selectedDate.toLocaleDateString()}
        </div>
      )}
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"outside-days-display",children:"Outside Days Display"}),`
`,e.jsx(n.p,{children:"Show days from adjacent months for better context and visual continuity."}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function OutsideDaysCalendar() {
  const [selectedDate, setSelectedDate] = useState();
  const [showOutside, setShowOutside] = useState(true);
  const [fixedWeeks, setFixedWeeks] = useState(true);

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showOutside}
            onChange={(e) => setShowOutside(e.target.checked)}
          />
          Show outside days
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={fixedWeeks}
            onChange={(e) => setFixedWeeks(e.target.checked)}
          />
          Fixed weeks (6 rows)
        </label>
      </div>

      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        showOutsideDays={showOutside}
        fixedWeeks={fixedWeeks}
      />
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"component-interactions",children:"Component Interactions"}),`
`,e.jsx(n.p,{children:"The Calendar component integrates seamlessly with other design system components and external state management systems."}),`
`,e.jsx(n.h3,{id:"form-integration-with-validation",children:"Form Integration with Validation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';
import { Calendar, TextInput, Button } from '@tagaddod-design/react';
import { IconCalendar } from '@tabler/icons-react';

function BookingForm() {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [guests, setGuests] = useState(1);
  const [errors, setErrors] = useState({});

  const validateDates = () => {
    const newErrors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!checkIn) {
      newErrors.checkIn = 'Check-in date is required';
    } else if (checkIn < today) {
      newErrors.checkIn = 'Check-in date cannot be in the past';
    }

    if (!checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    } else if (checkIn && checkOut <= checkIn) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateDates()) {
      console.log('Booking submitted:', { checkIn, checkOut, guests });
    }
  };

  const isDateUnavailable = (date) => {
    // Simulate unavailable dates
    const unavailable = [
      new Date(2024, 5, 15),
      new Date(2024, 5, 16),
      new Date(2024, 5, 20)
    ];
    return unavailable.some(unavailableDate =>
      date.toDateString() === unavailableDate.toDateString()
    );
  };

  return (
    <div className="max-w-2xl p-6 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Hotel Booking</h3>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Check-in Date
          </label>
          <Calendar
            mode="single"
            selected={checkIn}
            onSelect={setCheckIn}
            disabled={isDateUnavailable}
            captionLayout="dropdown"
            startMonth={new Date()}
            endMonth={new Date(2024, 11, 31)}
            className={\`border-2 \${errors.checkIn ? 'border-red-500' : 'border-gray-200'}\`}
          />
          {errors.checkIn && (
            <div className="text-red-500 text-sm mt-1">{errors.checkIn}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Check-out Date
          </label>
          <Calendar
            mode="single"
            selected={checkOut}
            onSelect={setCheckOut}
            disabled={isDateUnavailable}
            captionLayout="dropdown"
            startMonth={new Date()}
            endMonth={new Date(2024, 11, 31)}
            className={\`border-2 \${errors.checkOut ? 'border-red-500' : 'border-gray-200'}\`}
          />
          {errors.checkOut && (
            <div className="text-red-500 text-sm mt-1">{errors.checkOut}</div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <TextInput
          label="Number of Guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          min={1}
          max={10}
        />
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-secondary">
          {checkIn && checkOut && (
            <>Duration: {Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))} nights</>
          )}
        </div>
        <Button onClick={handleSubmit} variant="primary">
          Book Now
        </Button>
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"dashboard-analytics-with-date-range",children:"Dashboard Analytics with Date Range"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState, useEffect } from 'react';
import { Calendar, Select, Badge } from '@tagaddod-design/react';

function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState({ from: undefined, to: undefined });
  const [metrics, setMetrics] = useState(null);
  const [presetRange, setPresetRange] = useState('custom');

  const presetRanges = {
    'last7days': {
      label: 'Last 7 Days',
      range: {
        from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        to: new Date()
      }
    },
    'last30days': {
      label: 'Last 30 Days',
      range: {
        from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        to: new Date()
      }
    },
    'thisMonth': {
      label: 'This Month',
      range: {
        from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        to: new Date()
      }
    }
  };

  const handlePresetChange = (preset) => {
    setPresetRange(preset);
    if (preset !== 'custom' && presetRanges[preset]) {
      setDateRange(presetRanges[preset].range);
    }
  };

  useEffect(() => {
    if (dateRange.from && dateRange.to) {
      // Simulate API call
      const daysDiff = Math.ceil((dateRange.to - dateRange.from) / (1000 * 60 * 60 * 24));
      setMetrics({
        pageViews: Math.floor(Math.random() * 10000 * daysDiff / 30),
        users: Math.floor(Math.random() * 1000 * daysDiff / 30),
        revenue: Math.floor(Math.random() * 5000 * daysDiff / 30)
      });
    }
  }, [dateRange]);

  const presetOptions = [
    { value: 'custom', label: 'Custom Range' },
    ...Object.entries(presetRanges).map(([key, { label }]) => ({
      value: key,
      label
    }))
  ];

  return (
    <div className="max-w-4xl p-6">
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-medium mb-4">Date Range</h3>

            <Select
              options={presetOptions}
              value={presetRange}
              onValueChange={handlePresetChange}
              label="Quick Select"
              className="mb-4"
            />

            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={(range) => {
                setDateRange(range);
                setPresetRange('custom');
              }}
              numberOfMonths={2}
              captionLayout="dropdown"
              startMonth={new Date(2023, 0)}
              endMonth={new Date()}
              className="w-full"
            />

            {dateRange.from && dateRange.to && (
              <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
                <div>From: {dateRange.from.toLocaleDateString()}</div>
                <div>To: {dateRange.to.toLocaleDateString()}</div>
                <div className="font-medium">
                  {Math.ceil((dateRange.to - dateRange.from) / (1000 * 60 * 60 * 24)) + 1} days
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics ? (
              <>
                <div className="bg-white border rounded-lg p-6">
                  <div className="text-2xl font-bold">{metrics.pageViews.toLocaleString()}</div>
                  <div className="text-sm text-secondary">Page Views</div>
                  <Badge variant="success" size="small" className="mt-2">
                    +12.3%
                  </Badge>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <div className="text-2xl font-bold">{metrics.users.toLocaleString()}</div>
                  <div className="text-sm text-secondary">Users</div>
                  <Badge variant="warning" size="small" className="mt-2">
                    -2.1%
                  </Badge>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <div className="text-2xl font-bold">\${metrics.revenue.toLocaleString()}</div>
                  <div className="text-sm text-secondary">Revenue</div>
                  <Badge variant="success" size="small" className="mt-2">
                    +8.7%
                  </Badge>
                </div>
              </>
            ) : (
              <div className="md:col-span-3 text-center py-12 text-secondary">
                Select a date range to view analytics
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"event-scheduling-interface",children:"Event Scheduling Interface"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';
import { Calendar, Modal, TextInput, Button, Badge } from '@tagaddod-design/react';

function EventScheduler() {
  const [selectedDate, setSelectedDate] = useState();
  const [events, setEvents] = useState({
    '2024-06-15': [{ title: 'Team Meeting', time: '10:00 AM' }],
    '2024-06-20': [
      { title: 'Project Review', time: '2:00 PM' },
      { title: 'Client Call', time: '4:00 PM' }
    ],
    '2024-06-25': [{ title: 'Workshop', time: '9:00 AM' }]
  });
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', time: '' });

  const formatDateKey = (date) => date.toISOString().split('T')[0];

  const getEventsForDate = (date) => {
    const dateKey = formatDateKey(date);
    return events[dateKey] || [];
  };

  const hasEvents = (date) => {
    return getEventsForDate(date).length > 0;
  };

  const addEvent = () => {
    if (!selectedDate || !newEvent.title || !newEvent.time) return;

    const dateKey = formatDateKey(selectedDate);
    setEvents(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), { ...newEvent }]
    }));

    setNewEvent({ title: '', time: '' });
    setShowAddEvent(false);
  };

  const removeEvent = (date, eventIndex) => {
    const dateKey = formatDateKey(date);
    setEvents(prev => ({
      ...prev,
      [dateKey]: prev[dateKey].filter((_, index) => index !== eventIndex)
    }));
  };

  return (
    <div className="max-w-4xl p-6">
      <h2 className="text-2xl font-bold mb-6">Event Scheduler</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-4">Select Date</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            captionLayout="dropdown"
            startMonth={new Date()}
            endMonth={new Date(2024, 11, 31)}
            modifiers={{
              hasEvents: hasEvents
            }}
            modifiersStyles={{
              hasEvents: {
                backgroundColor: 'var(--t-color-fill-brand-secondary)',
                color: 'var(--t-color-text-link)',
                fontWeight: 'bold'
              }
            }}
            footer={
              <div className="text-sm text-center">
                Dates with events are highlighted
              </div>
            }
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">
              Events for {selectedDate?.toLocaleDateString() || 'Select a date'}
            </h3>
            {selectedDate && (
              <Button
                size="small"
                onClick={() => setShowAddEvent(true)}
                variant="primary"
              >
                Add Event
              </Button>
            )}
          </div>

          <div className="space-y-3">
            {selectedDate ? (
              getEventsForDate(selectedDate).length > 0 ? (
                getEventsForDate(selectedDate).map((event, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-secondary">{event.time}</div>
                    </div>
                    <Button
                      size="small"
                      variant="outline"
                      onClick={() => removeEvent(selectedDate, index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-secondary">
                  No events scheduled for this date
                </div>
              )
            ) : (
              <div className="text-center py-8 text-secondary">
                Select a date to view events
              </div>
            )}
          </div>

          <div className="mt-6">
            <h4 className="font-medium mb-2">Upcoming Events</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {Object.entries(events)
                .filter(([dateKey]) => new Date(dateKey) >= new Date())
                .sort(([a], [b]) => new Date(a) - new Date(b))
                .slice(0, 5)
                .map(([dateKey, dayEvents]) => (
                  <div key={dateKey} className="text-sm p-2 bg-gray-50 rounded">
                    <div className="font-medium">{new Date(dateKey).toLocaleDateString()}</div>
                    {dayEvents.map((event, index) => (
                      <div key={index} className="text-secondary">
                        {event.time} - {event.title}
                      </div>
                    ))}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={showAddEvent} onClose={() => setShowAddEvent(false)}>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            Add Event - {selectedDate?.toLocaleDateString()}
          </h3>

          <div className="space-y-4">
            <TextInput
              label="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Enter event title"
            />

            <TextInput
              label="Time"
              type="time"
              value={newEvent.time}
              onChange={(e) => setNewEvent(prev => ({ ...prev, time: e.target.value }))}
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => setShowAddEvent(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={addEvent}>
                Add Event
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"internationalization-and-rtl-support",children:"Internationalization and RTL Support"}),`
`,e.jsxs(n.p,{children:["The Calendar component provides comprehensive Right-to-Left (RTL) language support when used with the ",e.jsx(n.code,{children:"ThemeProvider"}),". This includes automatic font switching, proper icon positioning, and directional icon handling."]}),`
`,e.jsx(n.h3,{id:"using-with-themeprovider",children:"Using with ThemeProvider"}),`
`,e.jsxs(n.p,{children:["For full RTL support, wrap your application with ",e.jsx(n.code,{children:"ThemeProvider"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ThemeProvider, Calendar } from '@tagaddod-design/react';
import { IconArrowRight } from '@tabler/icons-react';

function App() {
  return (
    <ThemeProvider defaultDirection="rtl" defaultLocale="ar">
      <Calendar
        mode="single"
        captionLayout="dropdown"
        selected={selectedDate}
        onSelect={setSelectedDate}
        numberOfMonths={2}
      />
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"automatic-rtl-adjustments",children:"Automatic RTL Adjustments"}),`
`,e.jsx(n.p,{children:"When RTL is enabled via ThemeProvider, the Calendar component automatically:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font Switching"}),": Changes from Outfit (English) to Tajawal (Arabic) font"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon Positioning"}),": Adjusts navigation arrow directions for RTL text flow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Line Height"}),": Applies appropriate line height for Arabic text rendering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layout Direction"}),": Maintains proper positioning in RTL mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gap Spacing"}),": Uses flexbox gap for consistent spacing in all directions"]}),`
`]}),`
`,e.jsx(n.h3,{id:"directional-icon-handling",children:"Directional Icon Handling"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),": When using directional icons (arrows, chevrons, etc.) in multilingual applications, you should manually choose the appropriate icon based on the current direction:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useTheme } from '@tagaddod-design/react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

function DirectionalCalendar() {
  const { isRTL } = useTheme();
  const [selectedRange, setSelectedRange] = useState({ from: undefined, to: undefined });

  return (
    <div>
      <Calendar
        mode="range"
        selected={selectedRange}
        onSelect={setSelectedRange}
        numberOfMonths={2}
        captionLayout="dropdown"
      />

      <div className="mt-4 flex justify-between">
        <button className="flex items-center gap-2">
          {isRTL ? <IconArrowRight size={16} /> : <IconArrowLeft size={16} />}
          {isRTL ? 'السابق' : 'Previous'}
        </button>

        <button className="flex items-center gap-2">
          {isRTL ? 'التالي' : 'Next'}
          {isRTL ? <IconArrowLeft size={16} /> : <IconArrowRight size={16} />}
        </button>
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"common-directional-icon-patterns",children:"Common Directional Icon Patterns"}),`
`,e.jsx(n.h4,{id:"next-action",children:'"Next" Action'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// English: Next → (arrow points right)
// Arabic: التالي ← (arrow points left, matching RTL reading direction)
const NextIcon = isRTL ? IconArrowLeft : IconArrowRight;

<button className="calendar-nav-button">
  {isRTL ? 'الشهر التالي' : 'Next Month'}
  <NextIcon size={16} />
</button>
`})}),`
`,e.jsx(n.h4,{id:"back-action",children:'"Back" Action'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// English: ← Back (arrow points left)
// Arabic: رجوع → (arrow points right, matching RTL reading direction)
const BackIcon = isRTL ? IconArrowRight : IconArrowLeft;

<button className="calendar-nav-button">
  <BackIcon size={16} />
  {isRTL ? 'الشهر السابق' : 'Previous Month'}
</button>
`})}),`
`,e.jsx(n.h3,{id:"rtl-calendar-implementation",children:"RTL Calendar Implementation"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';
import { Calendar } from '@tagaddod-design/react';

function RTLCalendar() {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div dir="rtl" style={{ fontFamily: 'var(--t-font-family-arabic)' }}>
      <h3 className="text-lg font-semibold mb-4" style={{
        lineHeight: 'var(--t-line-height-arabic, 1.2)'
      }}>
        التقويم العربي
      </h3>

      <Calendar
        mode="single"
        captionLayout="dropdown"
        selected={selectedDate}
        onSelect={setSelectedDate}
        showOutsideDays={false}
        footer={selectedDate
          ? \`التاريخ المحدد: \${selectedDate.toLocaleDateString('ar-SA')}\`
          : 'اختر تاريخاً من التقويم'
        }
      />

      {selectedDate && (
        <div className="mt-4 p-4 bg-surface-secondary rounded-lg text-right">
          <div className="text-sm text-secondary mb-2">تفاصيل التاريخ:</div>
          <div className="space-y-1">
            <div>التاريخ الميلادي: {selectedDate.toLocaleDateString('en-US')}</div>
            <div>التاريخ الهجري: {selectedDate.toLocaleDateString('ar-SA-u-ca-islamic')}</div>
            <div>اليوم: {selectedDate.toLocaleDateString('ar-SA', { weekday: 'long' })}</div>
          </div>
        </div>
      )}
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"rtl-best-practices",children:"RTL Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Always use ThemeProvider"})," for proper RTL support and font switching"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Choose directional icons carefully"})," - arrows should point in the reading direction"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test with actual Arabic content"})," to ensure proper text rendering"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use ",e.jsx(n.code,{children:"useTheme"})," hook"]})," to access RTL state and theme information"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consider icon semantics"}),' - "next" in RTL should point left (←) not right (→)']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Direction follows reading flow"})," - not physical direction on screen"]}),`
`]}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsx(n.h3,{id:"1-hotel-booking-system",children:"1. Hotel Booking System"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function HotelBookingCalendar() {
  const [checkInOut, setCheckInOut] = useState({ from: undefined, to: undefined });
  const [unavailableDates] = useState([
    new Date(2024, 5, 15),
    new Date(2024, 5, 16),
    new Date(2024, 5, 22),
    new Date(2024, 5, 23)
  ]);

  const isUnavailable = (date) =>
    unavailableDates.some(unavailable =>
      date.toDateString() === unavailable.toDateString()
    );

  const calculateRate = () => {
    if (!checkInOut.from || !checkInOut.to) return null;
    const nights = Math.ceil((checkInOut.to - checkInOut.from) / (1000 * 60 * 60 * 24));
    const baseRate = 120;
    return { nights, total: nights * baseRate };
  };

  const rate = calculateRate();

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">Select Your Stay</h3>

      <Calendar
        mode="range"
        selected={checkInOut}
        onSelect={setCheckInOut}
        numberOfMonths={2}
        disabled={isUnavailable}
        captionLayout="dropdown"
        startMonth={new Date()}
        endMonth={new Date(2024, 11, 31)}
        modifiers={{
          unavailable: isUnavailable
        }}
        modifiersStyles={{
          unavailable: {
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            textDecoration: 'line-through'
          }
        }}
      />

      {rate && (
        <div className="mt-6 p-4 border rounded-lg">
          <div className="flex justify-between mb-2">
            <span>Check-in:</span>
            <span>{checkInOut.from.toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Check-out:</span>
            <span>{checkInOut.to.toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg pt-2 border-t">
            <span>{rate.nights} nights:</span>
            <span>\${rate.total}</span>
          </div>
        </div>
      )}
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"2-project-timeline-planning",children:"2. Project Timeline Planning"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function ProjectTimeline() {
  const [milestones, setMilestones] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);

  const addMilestone = (date) => {
    const title = prompt('Milestone title:');
    if (title) {
      setMilestones(prev => [...prev, { date, title }]);
      setSelectedDates(prev => [...prev, date]);
    }
  };

  const removeMilestone = (date) => {
    setMilestones(prev => prev.filter(m => m.date.toDateString() !== date.toDateString()));
    setSelectedDates(prev => prev.filter(d => d.toDateString() !== date.toDateString()));
  };

  const hasMilestone = (date) =>
    milestones.some(m => m.date.toDateString() === date.toDateString());

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h3 className="font-semibold mb-4">Project Calendar</h3>
        <Calendar
          mode="multiple"
          selected={selectedDates}
          onSelect={(dates) => {
            const newDates = dates || [];
            const addedDates = newDates.filter(date =>
              !selectedDates.some(selected =>
                selected.toDateString() === date.toDateString()
              )
            );

            if (addedDates.length > 0) {
              addMilestone(addedDates[0]);
            } else {
              const removedDates = selectedDates.filter(selected =>
                !newDates.some(date =>
                  date.toDateString() === selected.toDateString()
                )
              );
              if (removedDates.length > 0) {
                removeMilestone(removedDates[0]);
              }
            }
          }}
          captionLayout="dropdown"
          startMonth={new Date()}
          endMonth={new Date(2024, 11, 31)}
        />
      </div>

      <div>
        <h3 className="font-semibold mb-4">Milestones</h3>
        <div className="space-y-2">
          {milestones
            .sort((a, b) => a.date - b.date)
            .map((milestone, index) => (
              <div key={index} className="flex justify-between items-center p-3 border rounded">
                <div>
                  <div className="font-medium">{milestone.title}</div>
                  <div className="text-sm text-secondary">
                    {milestone.date.toLocaleDateString()}
                  </div>
                </div>
                <button
                  onClick={() => removeMilestone(milestone.date)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))
          }
          {milestones.length === 0 && (
            <div className="text-center py-8 text-secondary">
              Click dates to add milestones
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"3-availability-scheduler",children:"3. Availability Scheduler"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function AvailabilityScheduler() {
  const [availability, setAvailability] = useState({});
  const [viewMode, setViewMode] = useState('week'); // 'week' or 'month'

  const toggleAvailability = (date) => {
    const dateKey = date.toISOString().split('T')[0];
    setAvailability(prev => ({
      ...prev,
      [dateKey]: !prev[dateKey]
    }));
  };

  const isAvailable = (date) => {
    const dateKey = date.toISOString().split('T')[0];
    return availability[dateKey] === true;
  };

  const bulkSetAvailability = (available) => {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    const updates = {};

    for (let d = new Date(today); d <= nextMonth; d.setDate(d.getDate() + 1)) {
      const dateKey = d.toISOString().split('T')[0];
      updates[dateKey] = available;
    }

    setAvailability(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Set Your Availability</h3>
        <div className="flex gap-2">
          <button
            onClick={() => bulkSetAvailability(true)}
            className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm"
          >
            All Available
          </button>
          <button
            onClick={() => bulkSetAvailability(false)}
            className="px-3 py-1 bg-red-100 text-red-800 rounded text-sm"
          >
            All Unavailable
          </button>
        </div>
      </div>

      <Calendar
        mode="single"
        onDayClick={toggleAvailability}
        captionLayout="dropdown"
        numberOfMonths={2}
        startMonth={new Date()}
        endMonth={new Date(2024, 11, 31)}
        modifiers={{
          available: isAvailable,
          unavailable: (date) => !isAvailable(date) && date >= new Date()
        }}
        modifiersStyles={{
          available: {
            backgroundColor: '#dcfce7',
            color: '#166534',
            fontWeight: 'bold'
          },
          unavailable: {
            backgroundColor: '#fee2e2',
            color: '#dc2626'
          }
        }}
        footer={
          <div className="text-sm text-center space-y-1">
            <div>Click dates to toggle availability</div>
            <div className="flex justify-center gap-4">
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-200 rounded"></div>
                Available
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-200 rounded"></div>
                Unavailable
              </span>
            </div>
          </div>
        }
      />

      <div className="mt-6 p-4 border rounded-lg">
        <h4 className="font-medium mb-2">Summary</h4>
        <div className="text-sm space-y-1">
          <div>Available days: {Object.values(availability).filter(Boolean).length}</div>
          <div>Unavailable days: {Object.values(availability).filter(v => v === false).length}</div>
        </div>
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"4-event-calendar-with-filters",children:"4. Event Calendar with Filters"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function EventCalendarWithFilters() {
  const [selectedDate, setSelectedDate] = useState();
  const [events] = useState({
    '2024-06-15': [
      { title: 'Team Meeting', category: 'work', time: '10:00 AM' },
      { title: 'Lunch with Client', category: 'business', time: '12:30 PM' }
    ],
    '2024-06-20': [
      { title: 'Birthday Party', category: 'personal', time: '6:00 PM' }
    ],
    '2024-06-25': [
      { title: 'Conference', category: 'work', time: '9:00 AM' },
      { title: 'Gym Session', category: 'personal', time: '7:00 PM' }
    ]
  });
  const [activeFilters, setActiveFilters] = useState(['work', 'business', 'personal']);

  const categories = {
    work: { label: 'Work', color: 'blue' },
    business: { label: 'Business', color: 'green' },
    personal: { label: 'Personal', color: 'purple' }
  };

  const getFilteredEventsForDate = (date) => {
    const dateKey = date.toISOString().split('T')[0];
    const dayEvents = events[dateKey] || [];
    return dayEvents.filter(event => activeFilters.includes(event.category));
  };

  const hasFilteredEvents = (date) => {
    return getFilteredEventsForDate(date).length > 0;
  };

  const toggleFilter = (category) => {
    setActiveFilters(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="max-w-4xl">
      <h3 className="text-lg font-semibold mb-4">Event Calendar</h3>

      <div className="flex gap-2 mb-6">
        {Object.entries(categories).map(([key, { label, color }]) => (
          <button
            key={key}
            onClick={() => toggleFilter(key)}
            className={\`px-3 py-1 rounded text-sm border \${
              activeFilters.includes(key)
                ? \`bg-\${color}-100 border-\${color}-300 text-\${color}-800\`
                : 'bg-gray-100 border-gray-300 text-gray-600'
            }\`}
          >
            {label} ({Object.values(events).flat().filter(e => e.category === key).length})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          captionLayout="dropdown"
          modifiers={{
            hasEvents: hasFilteredEvents
          }}
          modifiersStyles={{
            hasEvents: {
              backgroundColor: 'var(--t-color-fill-brand-secondary)',
              fontWeight: 'bold'
            }
          }}
        />

        <div>
          <h4 className="font-medium mb-4">
            {selectedDate ? \`Events on \${selectedDate.toLocaleDateString()}\` : 'Select a date'}
          </h4>

          <div className="space-y-2">
            {selectedDate && getFilteredEventsForDate(selectedDate).length > 0 ? (
              getFilteredEventsForDate(selectedDate).map((event, index) => {
                const category = categories[event.category];
                return (
                  <div key={index} className="p-3 border rounded flex justify-between items-center">
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-secondary">{event.time}</div>
                    </div>
                    <span className={\`px-2 py-1 rounded text-xs bg-\${category.color}-100 text-\${category.color}-800\`}>
                      {category.label}
                    </span>
                  </div>
                );
              })
            ) : selectedDate ? (
              <div className="text-center py-8 text-secondary">
                No events match current filters
              </div>
            ) : (
              <div className="text-center py-8 text-secondary">
                Select a date to view events
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"5-recurring-appointment-scheduler",children:"5. Recurring Appointment Scheduler"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function RecurringAppointments() {
  const [selectedDate, setSelectedDate] = useState();
  const [recurringPattern, setRecurringPattern] = useState('none');
  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const generateRecurringDates = (startDate, pattern, count = 10) => {
    const dates = [startDate];

    for (let i = 1; i < count; i++) {
      const nextDate = new Date(startDate);

      switch (pattern) {
        case 'daily':
          nextDate.setDate(startDate.getDate() + i);
          break;
        case 'weekly':
          nextDate.setDate(startDate.getDate() + (i * 7));
          break;
        case 'monthly':
          nextDate.setMonth(startDate.getMonth() + i);
          break;
        default:
          continue;
      }

      dates.push(nextDate);
    }

    return dates;
  };

  const createAppointment = (title, time) => {
    if (!selectedDate) return;

    const dates = recurringPattern === 'none'
      ? [selectedDate]
      : generateRecurringDates(selectedDate, recurringPattern);

    const newAppointments = dates.map(date => ({
      date,
      title,
      time,
      recurring: recurringPattern !== 'none',
      pattern: recurringPattern
    }));

    setAppointments(prev => [...prev, ...newAppointments]);
    setShowForm(false);
  };

  const hasAppointment = (date) => {
    return appointments.some(apt =>
      apt.date.toDateString() === date.toDateString()
    );
  };

  const getAppointmentsForDate = (date) => {
    return appointments.filter(apt =>
      apt.date.toDateString() === date.toDateString()
    );
  };

  return (
    <div className="max-w-4xl">
      <h3 className="text-lg font-semibold mb-4">Appointment Scheduler</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            captionLayout="dropdown"
            numberOfMonths={2}
            modifiers={{
              hasAppointment: hasAppointment
            }}
            modifiersStyles={{
              hasAppointment: {
                backgroundColor: 'var(--t-color-fill-brand-secondary)',
                color: 'var(--t-color-text-link)',
                fontWeight: 'bold'
              }
            }}
          />

          {selectedDate && (
            <div className="mt-4">
              <button
                onClick={() => setShowForm(true)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Schedule Appointment
              </button>
            </div>
          )}
        </div>

        <div>
          <h4 className="font-medium mb-4">
            {selectedDate ? \`Appointments on \${selectedDate.toLocaleDateString()}\` : 'Select a date'}
          </h4>

          <div className="space-y-2 mb-6">
            {selectedDate && getAppointmentsForDate(selectedDate).map((apt, index) => (
              <div key={index} className="p-3 border rounded">
                <div className="font-medium">{apt.title}</div>
                <div className="text-sm text-secondary">{apt.time}</div>
                {apt.recurring && (
                  <div className="text-xs text-blue-600 mt-1">
                    Recurring ({apt.pattern})
                  </div>
                )}
              </div>
            ))}

            {selectedDate && getAppointmentsForDate(selectedDate).length === 0 && (
              <div className="text-center py-4 text-secondary">
                No appointments scheduled
              </div>
            )}
          </div>

          <div>
            <h5 className="font-medium mb-2">Upcoming Appointments</h5>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {appointments
                .filter(apt => apt.date >= new Date())
                .sort((a, b) => a.date - b.date)
                .slice(0, 5)
                .map((apt, index) => (
                  <div key={index} className="text-sm p-2 bg-gray-50 rounded">
                    <div className="font-medium">{apt.title}</div>
                    <div className="text-secondary">
                      {apt.date.toLocaleDateString()} at {apt.time}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h4 className="font-semibold mb-4">
              New Appointment - {selectedDate?.toLocaleDateString()}
            </h4>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              createAppointment(
                formData.get('title'),
                formData.get('time')
              );
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    name="title"
                    type="text"
                    required
                    className="w-full border rounded px-3 py-2"
                    placeholder="Appointment title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <input
                    name="time"
                    type="time"
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Recurring</label>
                  <select
                    value={recurringPattern}
                    onChange={(e) => setRecurringPattern(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="none">One-time</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 border rounded hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The Calendar component follows WAI-ARIA guidelines and provides comprehensive keyboard and screen reader support for users with disabilities."}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow Keys"}),": Navigate between dates within the calendar grid"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab"}),": Move between interactive elements (navigation buttons, dropdowns, dates)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shift + Tab"}),": Navigate backwards through interactive elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enter/Space"}),": Select the focused date or activate focused button"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page Up/Page Down"}),": Navigate between months"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shift + Page Up/Down"}),": Navigate between years"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Home/End"}),": Jump to first/last day of the current month"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ctrl + Home"}),": Jump to today's date"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Escape"}),": Clear selection (when applicable) or close dropdown"]}),`
`]}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Semantic Structure"}),": Uses proper table structure with ",e.jsx(n.code,{children:"<table>"}),", ",e.jsx(n.code,{children:"<thead>"}),", ",e.jsx(n.code,{children:"<tbody>"}),", and appropriate roles"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Date Announcements"}),": Each date is announced with full context (day, date, month, year)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Selection State"}),": Current selection is announced when changed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Range Selection"}),": Start and end dates are announced with range context"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Navigation Labels"}),": Month/year navigation controls have descriptive labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status Updates"}),": Month and year changes are announced to screen readers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled Dates"}),": Unavailable dates are properly marked and announced"]}),`
`]}),`
`,e.jsx(n.h3,{id:"focus-management",children:"Focus Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visible Focus"}),": Clear focus indicators on all interactive elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Logical Focus Order"}),": Tab order follows visual layout (left-to-right, top-to-bottom)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus Retention"}),": Focus stays on calendar during month navigation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initial Focus"}),": Focuses on selected date or today when calendar opens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus Restoration"}),": Returns focus to triggering element when calendar closes"]}),`
`]}),`
`,e.jsx(n.h3,{id:"wcag-21-aa-compliance",children:"WCAG 2.1 AA Compliance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color Contrast"}),": Minimum 4.5:1 contrast ratio for all text and interactive elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"High Contrast Support"}),": Respects system high contrast preferences"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced Motion"}),": Honors ",e.jsx(n.code,{children:"prefers-reduced-motion"})," for animations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Target Size"}),": Minimum 44px touch targets for mobile accessibility"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text Resize"}),": Supports up to 200% text scaling without horizontal scrolling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple Ways"}),": Provides both mouse and keyboard interaction methods"]}),`
`]}),`
`,e.jsx(n.h3,{id:"implementation-example",children:"Implementation Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function AccessibleCalendar() {
  const [selectedDate, setSelectedDate] = useState();
  const [announceText, setAnnounceText] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Announce selection to screen readers
    setAnnounceText(\`Selected \${date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}\`);
  };

  return (
    <div>
      {/* Screen reader announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announceText}
      </div>

      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={handleDateSelect}
        captionLayout="dropdown"
        // Add descriptive labels
        aria-label="Select a date"
        // Provide context for screen readers
        formatters={{
          formatCaption: (date) => \`Calendar for \${date.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })}\`
        }}
        // Enhanced button labels
        labels={{
          labelPrevious: 'Go to previous month',
          labelNext: 'Go to next month',
          labelDay: (date) => \`Select \${date.toLocaleDateString()}\`,
          labelWeekday: (weekday) => weekday,
          labelMonthDropdown: 'Select month',
          labelYearDropdown: 'Select year'
        }}
      />
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,e.jsx(n.h3,{id:"technical-architecture",children:"Technical Architecture"}),`
`,e.jsx(n.p,{children:"The Calendar component is built on React DayPicker v9 with extensive customization for design system integration:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Core dependencies
import { DayPicker } from 'react-day-picker'; // Date logic and calendar structure
import { Select } from '../Select/Select';     // Custom dropdown navigation
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'; // Navigation icons

// Custom header system for unified navigation
const customComponents = {
  MonthCaption: CustomHeader,  // Replaces default caption
  Nav: CustomNavigation,       // Replaces default navigation
  Chevron: DirectionalChevron  // RTL-aware arrows
};
`})}),`
`,e.jsx(n.h3,{id:"performance-optimizations",children:"Performance Optimizations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Efficient Rendering"}),": Minimal DOM updates with React.memo on custom components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Date Calculations"}),": Optimized date comparisons using timestamp comparison"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State Management"}),": Local state for UI, callbacks for external state sync"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Memory Management"}),": Cleanup of event listeners and timers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bundle Size"}),": Tree-shakeable exports and optional features"]}),`
`]}),`
`,e.jsx(n.h3,{id:"css-architecture",children:"CSS Architecture"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Design token integration */
.calendar {
  font-family: var(--t-font-family-primary);
  background: var(--t-color-surface-primary);
  border-radius: var(--t-border-radius-300);
  padding: var(--t-space-300);
}

/* RTL support with CSS logical properties */
:global([dir="rtl"]) .calendar {
  font-family: var(--t-font-family-arabic);
}

/* Responsive breakpoints */
@media (max-width: 640px) {
  .dayButton {
    width: var(--t-size-900); /* 36px on mobile */
    height: var(--t-size-900);
  }
}
`})}),`
`,e.jsx(n.h3,{id:"browser-support",children:"Browser Support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Modern Browsers"}),": Chrome 84+, Firefox 78+, Safari 14+, Edge 84+"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"JavaScript Features"}),": ES2020, Intl.DateTimeFormat, Date objects"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS Features"}),": CSS Grid, Flexbox, CSS Custom Properties, CSS Logical Properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": Screen readers, keyboard navigation, high contrast mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mobile"}),": Touch events, responsive design, iOS Safari, Chrome Mobile"]}),`
`]}),`
`,e.jsx(n.h3,{id:"date-handling-best-practices",children:"Date Handling Best Practices"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Always use Date constructor consistently
const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

// Compare dates by timestamp for accuracy
const isSameDay = (date1, date2) =>
  date1.toDateString() === date2.toDateString();

// Handle timezone issues
const createDateAtMidnight = (year, month, day) => {
  const date = new Date(year, month, day);
  date.setHours(0, 0, 0, 0);
  return date;
};
`})}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/components-datepicker--docs",children:"DatePicker"})})," - Uses Calendar in a popover for input-based date selection"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/components-popover--docs",children:"Popover"})})," - Container component for Calendar in DatePicker"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/components-textinput--docs",children:"TextInput"})})," - Input component paired with Calendar for date entry"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/components-select--docs",children:"Select"})})," - Dropdown component used in Calendar navigation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/components-modal--docs",children:"Modal"})})," - Dialog container for Calendar in scheduling interfaces"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/components-button--docs",children:"Button"})})," - Action buttons used with Calendar in forms"]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"The Calendar component integrates with the design system through comprehensive token usage:"}),`
`,e.jsx(n.h3,{id:"color-tokens",children:"Color Tokens"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Surface colors */
--t-color-surface-primary: Calendar background
--t-color-surface-secondary: Footer background
--t-color-surface-hover: Day hover state

/* Text colors */
--t-color-text-primary: Date numbers
--t-color-text-secondary: Weekday labels, footer
--t-color-text-disabled: Disabled dates
--t-color-text-on-fill: Selected date text

/* Fill colors */
--t-color-fill-brand: Selected dates
--t-color-fill-brand-secondary: Today marker, range middle
--t-color-border-secondary: Footer border
`})}),`
`,e.jsx(n.h3,{id:"typography-tokens",children:"Typography Tokens"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Font families */
--t-font-family-primary: English text (Outfit)
--t-font-family-arabic: RTL text (Tajawal)

/* Typography scales */
--t-typography-body-lg-default: Month caption
--t-typography-body-sm-default: Date numbers
--t-typography-caption-lg-default: Weekday labels

/* Line heights */
--t-line-height-english: 1.5 for English text
--t-line-height-arabic: 1.2 for Arabic text
`})}),`
`,e.jsx(n.h3,{id:"spacing-tokens",children:"Spacing Tokens"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Internal spacing */
--t-space-300: Calendar padding
--t-space-200: Element gaps
--t-space-400: Month spacing
--t-space-50: Weekday gaps

/* Component sizes */
--t-size-1000: Day button size (40px)
--t-size-900: Mobile day size (36px)
--t-size-800: Navigation button size (32px)
`})}),`
`,e.jsx(n.h3,{id:"motion-tokens",children:"Motion Tokens"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Transitions */
--t-duration-fast: Hover transitions
--t-easing-in-out: Smooth animations

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  transition-duration: 0.01ms !important;
}
`})}),`
`,e.jsx(n.h2,{id:"version-history",children:"Version History"}),`
`,e.jsx(n.h3,{id:"current-version-v200",children:"Current Version (v2.0.0)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom Header System"}),": Unified navigation for single and multiple months"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shadcn-like Navigation"}),": Space-between layout with centered labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enhanced RTL Support"}),": Complete Arabic integration with proper line-height"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Range Selection Improvements"}),": Fixed middle styling and today highlighting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple Month Navigation"}),": Integrated captions with custom header system"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Design Token Integration"}),": Full token-based styling system"]}),`
`]}),`
`,e.jsx(n.h3,{id:"previous-versions",children:"Previous Versions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"v1.2.0"}),": Added RTL support and Arabic localization"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"v1.1.0"}),": Multiple selection modes and dropdown navigation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"v1.0.0"}),": Initial release with basic calendar functionality"]}),`
`]}),`
`,e.jsx(n.p,{children:"The Calendar component represents a mature, accessible, and highly customizable date selection solution that integrates seamlessly with the Tagaddod Design System while providing comprehensive internationalization and responsive behavior."})]})}function de(a={}){const{wrapper:n}={...r(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}export{de as default};
