import React, { forwardRef, useState } from 'react';
import { DayPicker, DayPickerProps } from 'react-day-picker';
import clsx from 'clsx';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Select } from '../Select/Select';
import { Button } from '../Button/Button';
import { DatePicker } from '../DatePicker/DatePicker';
import { startOfDay, endOfDay, subDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfQuarter, endOfQuarter, startOfYear, endOfYear, addMonths } from 'date-fns';
import styles from './Calendar.module.css';

export type CalendarCaptionLayout = 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
export type CalendarNavLayout = 'around' | 'after';
export type CalendarMode = 'single' | 'multiple' | 'range';
export type CalendarVariant = 'default' | 'analytics';
export type DateRangeType = 'between' | 'last' | 'since' | 'this';

export interface DatePreset {
  id: string;
  label: string;
  getValue: () => { from: Date; to: Date };
}

export interface DateRangeConfig {
  type: DateRangeType;
  value?: string | number;
  customDates?: { from?: Date; to?: Date };
}

export interface CalendarProps extends Omit<DayPickerProps, 'mode' | 'captionLayout'> {
  /**
   * Selection mode for the calendar
   */
  mode?: CalendarMode;
  /**
   * Layout of the month caption
   */
  captionLayout?: CalendarCaptionLayout;
  /**
   * Layout of the navigation buttons
   */
  navLayout?: CalendarNavLayout;
  /**
   * Additional class name for styling
   */
  className?: string;
  /**
   * Whether to show outside days (days from adjacent months)
   */
  showOutsideDays?: boolean;
  /**
   * Whether to display 6 weeks per month (fixed height)
   */
  fixedWeeks?: boolean;
  /**
   * Number of months to display
   */
  numberOfMonths?: number;
  /**
   * Whether to reverse the order of months when displaying multiple
   */
  reverseMonths?: boolean;
  /**
   * Whether to enable paged navigation for multiple months
   */
  pagedNavigation?: boolean;
  /**
   * Whether to reverse the order of years in dropdown
   */
  reverseYears?: boolean;
  /**
   * Footer content to display below the calendar
   */
  footer?: React.ReactNode;
  /**
   * Selected date(s) - for single mode: Date, multiple mode: Date[], range mode: {from?: Date, to?: Date}
   */
  selected?: Date | Date[] | { from?: Date; to?: Date } | undefined;
  /**
   * Callback when selection changes
   */
  onSelect?: (date: Date | Date[] | { from?: Date; to?: Date } | undefined) => void;

  /**
   * Calendar variant - 'analytics' enables preset sidebar
   */
  variant?: CalendarVariant;

  /**
   * Array of preset options for analytics variant
   */
  presets?: DatePreset[];

  /**
   * Current selected preset for analytics variant
   */
  selectedPreset?: string;

  /**
   * Callback when preset selection changes
   */
  onPresetChange?: (presetId: string) => void;

  /**
   * Current range type for analytics variant
   */
  rangeType?: DateRangeType;

  /**
   * Callback when range type changes
   */
  onRangeTypeChange?: (type: DateRangeType) => void;

  /**
   * Current range value (number for 'last', date for 'since', etc.)
   */
  rangeValue?: string | number;

  /**
   * Callback when range value changes
   */
  onRangeValueChange?: (value: string | number) => void;

  /**
   * Current period for 'this' type (week, month, quarter, year)
   */
  periodType?: string;

  /**
   * Callback when period type changes
   */
  onPeriodTypeChange?: (period: string) => void;

  /**
   * Start date for 'between' range type
   */
  startDate?: Date;

  /**
   * End date for 'between' range type
   */
  endDate?: Date;

  /**
   * Callback when start date changes
   */
  onStartDateChange?: (date: Date | undefined) => void;

  /**
   * Callback when end date changes
   */
  onEndDateChange?: (date: Date | undefined) => void;

  /**
   * Callback when Apply button is clicked
   */
  onApply?: () => void;

  /**
   * Callback when Cancel button is clicked
   */
  onCancel?: () => void;

  /**
   * Whether to show the custom preset option
   */
  showCustomPreset?: boolean;
}

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({
    mode = 'single',
    captionLayout = 'label',
    navLayout = 'after',
    variant = 'default',
    className,
    showOutsideDays = false,
    fixedWeeks = true,
    numberOfMonths = 1,
    reverseMonths = false,
    pagedNavigation = false,
    reverseYears = false,
    footer,
    selected,
    onSelect,
    presets,
    selectedPreset = 'last30',
    onPresetChange,
    rangeType = 'between',
    onRangeTypeChange,
    rangeValue = '',
    onRangeValueChange,
    periodType = 'week',
    onPeriodTypeChange,
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
    onApply,
    onCancel,
    showCustomPreset = false,
    classNames,
    components,
    ...props
  }, ref) => {
    // State for controlling month navigation in custom header
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // State for range preview during hover
    const [rangePreview, setRangePreview] = useState<{ from?: Date; to?: Date } | null>(null);
    const [isRangeSelecting, setIsRangeSelecting] = useState(false);

    // State to track which DatePicker input is currently focused
    const [focusedInput, setFocusedInput] = useState<'start' | 'end' | null>(null);
    // Detect RTL direction for line height adjustments
    const isRTL = typeof document !== 'undefined' &&
      (document.dir === 'rtl' || document.documentElement.dir === 'rtl');

    // Apply line height style based on text direction
    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    };

    // Default presets for analytics variant
    const defaultPresets: DatePreset[] = [
      {
        id: 'last30',
        label: 'Last 30 Days',
        getValue: () => ({ from: startOfDay(subDays(new Date(), 29)), to: endOfDay(new Date()) })
      },
      {
        id: 'last60',
        label: 'Last 60 Days',
        getValue: () => ({ from: startOfDay(subDays(new Date(), 59)), to: endOfDay(new Date()) })
      },
      {
        id: 'last90',
        label: 'Last 90 Days',
        getValue: () => ({ from: startOfDay(subDays(new Date(), 89)), to: endOfDay(new Date()) })
      },
      {
        id: 'thisWeek',
        label: 'This Week',
        getValue: () => ({ from: startOfWeek(new Date()), to: endOfWeek(new Date()) })
      },
      {
        id: 'thisMonth',
        label: 'This Month',
        getValue: () => ({ from: startOfMonth(new Date()), to: endOfMonth(new Date()) })
      },
      {
        id: 'thisQuarter',
        label: 'This Quarter',
        getValue: () => ({ from: startOfQuarter(new Date()), to: endOfQuarter(new Date()) })
      },
      {
        id: 'thisYear',
        label: 'This Year',
        getValue: () => ({ from: startOfYear(new Date()), to: endOfYear(new Date()) })
      }
    ];

    const availablePresets = presets || defaultPresets;

    // Handle range preview for hover effects
    const handleDayMouseEnter = (date: Date) => {
      if (mode === 'range' && selected && typeof selected === 'object' && 'from' in selected && selected.from && !selected.to) {
        setRangePreview({
          from: selected.from,
          to: date
        });
        setIsRangeSelecting(true);
      }
    };

    const handleCalendarMouseLeave = () => {
      if (isRangeSelecting) {
        setRangePreview(null);
        setIsRangeSelecting(false);
      }
    };

    const handleSelect = (selectedDate: any) => {
      if (mode === 'range') {
        setIsRangeSelecting(false);
        setRangePreview(null);
      }
      onSelect?.(selectedDate);
    };

    // Custom components for consistent styling
    const customComponents = {
      Chevron: ({ ...props }) => {
        // Determine which chevron to use based on orientation
        if (props.orientation === 'left') {
          return <IconChevronLeft className={styles.chevron} size={16} {...props} />;
        }
        return <IconChevronRight className={styles.chevron} size={16} {...props} />;
      },
      Dropdown: ({ ...props }) => {
        // Use our internal Select component for dropdowns
        return (
          <Select
            value={props.value}
            onValueChange={props.onChange}
            size="small"
            options={props.options || []}
            {...props}
          />
        );
      },
      MonthsDropdown: ({ ...props }) => {
        return (
          <Select
            value={props.value}
            onValueChange={props.onChange}
            size="small"
            className={styles.monthDropdown}
            options={props.options || []}
            {...props}
          />
        );
      },
      YearsDropdown: ({ ...props }) => {
        return (
          <Select
            value={props.value}
            onValueChange={props.onChange}
            size="small"
            className={styles.yearDropdown}
            options={props.options || []}
            {...props}
          />
        );
      },
      Caption: ({ ...props }) => {
        // Custom caption for dropdown layout that integrates with our custom header
        if (captionLayout === 'dropdown') {
          return (
            <div className={styles.captionDropdowns}>
              {props.children}
            </div>
          );
        }
        // Hide default caption when using custom header
        return null;
      },
      ...components
    };


    // Custom class names for consistent styling (react-day-picker v9)
    const customClassNames = {
      // UI elements
      root: styles.calendar,
      months: styles.months,
      month: styles.month,
      month_caption: styles.monthCaption,
      caption_label: styles.captionLabel,
      nav: styles.nav,
      button_previous: styles.buttonPrevious,
      button_next: styles.buttonNext,
      month_grid: styles.table,
      weekdays: styles.weekdays,
      weekday: styles.weekday,
      weeks: styles.weeks,
      week: styles.week,
      day: styles.day,
      day_button: styles.dayButton,
      // DayFlag states
      today: styles.today,
      outside: styles.outside,
      disabled: styles.disabled,
      hidden: styles.hidden,
      // SelectionState
      selected: styles.selected,
      range_start: styles.rangeStart,
      range_end: styles.rangeEnd,
      range_middle: styles.rangeMiddle,
      ...classNames
    };

    // Analytics variant with Amplitude-style layout
    if (variant === 'analytics') {
      const renderHeaderSection = () => {
        return (
          <div className={styles.headerControls}>
            {/* Main range type dropdown */}
            <Select
              value={rangeType}
              onValueChange={(value) => {
                const newRangeType = value as DateRangeType;
                onRangeTypeChange?.(newRangeType);

                // Auto-select custom preset when user changes range type
                onPresetChange?.('custom');

                // Auto-update calendar dates based on range type selection
                if (newRangeType === 'last' && rangeValue) {
                  const days = typeof rangeValue === 'number' ? rangeValue : parseInt(rangeValue.toString());
                  if (!isNaN(days)) {
                    const range = {
                      from: startOfDay(subDays(new Date(), days - 1)),
                      to: endOfDay(new Date())
                    };
                    onSelect?.(range);
                  }
                } else if (newRangeType === 'this' && periodType) {
                  let range;
                  switch (periodType) {
                    case 'week':
                      range = { from: startOfWeek(new Date()), to: endOfWeek(new Date()) };
                      break;
                    case 'month':
                      range = { from: startOfMonth(new Date()), to: endOfMonth(new Date()) };
                      break;
                    case 'quarter':
                      range = { from: startOfQuarter(new Date()), to: endOfQuarter(new Date()) };
                      break;
                    case 'year':
                      range = { from: startOfYear(new Date()), to: endOfYear(new Date()) };
                      break;
                    default:
                      range = { from: startOfWeek(new Date()), to: endOfWeek(new Date()) };
                  }
                  onSelect?.(range);
                }
              }}
              size="small"
              className={styles.rangeDropdown}
              options={[
                { value: 'between', label: 'Between' },
                { value: 'last', label: 'Last' },
                { value: 'since', label: 'Since' },
                { value: 'this', label: 'This' }
              ]}
            />

            {/* Dynamic section based on range type */}
            {rangeType === 'between' && (
              <>
                <DatePicker
                  value={startDate}
                  onChange={(date) => {
                    onStartDateChange?.(date as Date);
                    // Auto-select custom preset when user changes start date
                    onPresetChange?.('custom');

                    // Also update the main selected range if we have both dates
                    if (date && endDate) {
                      onSelect?.({ from: date as Date, to: endDate });
                    } else if (date) {
                      onSelect?.({ from: date as Date, to: undefined });
                    }
                  }}
                  onFocus={() => setFocusedInput('start')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="Start date"
                  size="small"
                  dateFormat="dd/MM/yyyy"
                  showCalendarIcon={false}
                  onOpenChange={() => {}}
                  open={false}
                />
                <span className={styles.betweenLabel}>and</span>
                <DatePicker
                  value={endDate}
                  onChange={(date) => {
                    onEndDateChange?.(date as Date);
                    // Auto-select custom preset when user changes end date
                    onPresetChange?.('custom');

                    // Also update the main selected range if we have both dates
                    if (startDate && date) {
                      onSelect?.({ from: startDate, to: date as Date });
                    } else if (date) {
                      onSelect?.({ from: undefined, to: date as Date });
                    }
                  }}
                  onFocus={() => setFocusedInput('end')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="End date"
                  size="small"
                  dateFormat="dd/MM/yyyy"
                  showCalendarIcon={false}
                  onOpenChange={() => {}}
                  open={false}
                />
              </>
            )}

            {rangeType === 'last' && (
              <>
                <input
                  type="number"
                  value={rangeValue}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    onRangeValueChange?.(newValue);
                    // Auto-select custom preset when user changes range value
                    onPresetChange?.('custom');

                    // Auto-update calendar dates when range value changes
                    if (rangeType === 'last' && newValue) {
                      const days = parseInt(newValue);
                      if (!isNaN(days) && days > 0) {
                        const range = {
                          from: startOfDay(subDays(new Date(), days - 1)),
                          to: endOfDay(new Date())
                        };
                        onSelect?.(range);
                      }
                    }
                  }}
                  className={styles.numberInput}
                  min="1"
                  placeholder="30"
                />
                <span className={styles.lastLabel}>complete days and today</span>
              </>
            )}

            {rangeType === 'since' && (
              <DatePicker
                value={startDate}
                onChange={(date) => {
                  onStartDateChange?.(date as Date);
                  // Auto-select custom preset when user changes since date
                  onPresetChange?.('custom');

                  // For 'since' mode, update the range from the selected date to today
                  if (date) {
                    onSelect?.({ from: date as Date, to: endOfDay(new Date()) });
                  }
                }}
                onFocus={() => setFocusedInput('start')}
                onBlur={() => setFocusedInput(null)}
                placeholder="Since date"
                size="small"
                dateFormat="dd/MM/yyyy"
                showCalendarIcon={false}
                onOpenChange={() => {}}
                open={false}
              />
            )}

            {rangeType === 'this' && (
              <Select
                value={periodType}
                onValueChange={(value) => {
                  onPeriodTypeChange?.(value);
                  // Auto-select custom preset when user changes period type
                  onPresetChange?.('custom');

                  // Auto-update calendar dates when period type changes
                  if (rangeType === 'this') {
                    let range;
                    switch (value) {
                      case 'week':
                        range = { from: startOfWeek(new Date()), to: endOfWeek(new Date()) };
                        break;
                      case 'month':
                        range = { from: startOfMonth(new Date()), to: endOfMonth(new Date()) };
                        break;
                      case 'quarter':
                        range = { from: startOfQuarter(new Date()), to: endOfQuarter(new Date()) };
                        break;
                      case 'year':
                        range = { from: startOfYear(new Date()), to: endOfYear(new Date()) };
                        break;
                      default:
                        range = { from: startOfWeek(new Date()), to: endOfWeek(new Date()) };
                    }
                    onSelect?.(range);
                  }
                }}
                size="small"
                className={styles.periodDropdown}
                options={[
                  { value: 'week', label: 'Week' },
                  { value: 'month', label: 'Month' },
                  { value: 'quarter', label: 'Quarter' },
                  { value: 'year', label: 'Year' }
                ]}
              />
            )}
          </div>
        );
      };

      // Check if we should show custom preset based on prop or if custom is selected
      const shouldShowCustom = showCustomPreset || selectedPreset === 'custom';

      return (
        <div
          ref={ref}
          className={clsx(styles.analyticsContainer, className)}
          style={lineHeightStyle}
        >
          {/* Main content area with preset and content panels */}
          <div className={styles.analyticsMain}>
            {/* Left Panel - Presets with reduced width */}
            <div className={styles.presetPanel}>
              <h3 className={styles.presetTitle}>Presets</h3>
              <div className={styles.presetGroup}>
                {availablePresets.map((preset) => (
                  <button
                    key={preset.id}
                    className={clsx(
                      styles.presetButton,
                      selectedPreset === preset.id && styles.active
                    )}
                    onClick={() => {
                      onPresetChange?.(preset.id);
                      const range = preset.getValue();
                      onSelect?.({ from: range.from, to: range.to });

                      // Auto-sync dropdown with preset selection
                      if (preset.label.startsWith('Last ')) {
                        onRangeTypeChange?.('last');
                        // Extract number from preset label (e.g., "Last 30 Days" -> 30)
                        const match = preset.label.match(/Last (\d+)/);
                        if (match) {
                          onRangeValueChange?.(parseInt(match[1]));
                        }
                      } else if (preset.label.startsWith('This ')) {
                        onRangeTypeChange?.('this');
                        // Extract period from preset label (e.g., "This Week" -> "week")
                        const period = preset.label.replace('This ', '').toLowerCase();
                        onPeriodTypeChange?.(period);
                      }
                    }}
                  >
                    {preset.label}
                  </button>
                ))}
                {shouldShowCustom && (
                  <button
                    className={clsx(
                      styles.presetButton,
                      styles.customPreset,
                      selectedPreset === 'custom' && styles.active
                    )}
                    onClick={() => onPresetChange?.('custom')}
                  >
                    Custom
                  </button>
                )}
              </div>
            </div>

            {/* Right Panel - Header and Calendar */}
            <div className={styles.contentPanel}>
              {/* Header Section */}
              <div className={styles.headerSection}>
                {renderHeaderSection()}
              </div>

              {/* Calendar Section with Shadcn-style navigation */}
              <div className={styles.calendarSection}>
                {/* Custom header with navigation on top */}
                <div className={styles.customHeader}>
                  {/* Navigation row with buttons and month labels */}
                  <div className={styles.navigationRow}>
                    {/* Previous button on far left */}
                    <button
                      className={styles.buttonPrevious}
                      onClick={() => {
                        const newMonth = addMonths(currentMonth, -1);
                        setCurrentMonth(newMonth);
                      }}
                      aria-label="Previous month"
                    >
                      <IconChevronLeft className={styles.chevron} size={16} />
                    </button>

                    {/* Month labels group in center */}
                    <div className={styles.monthLabelsGroup}>
                      {Array.from({ length: 2 }, (_, index) => {
                        const monthDate = addMonths(currentMonth, index);
                        return (
                          <div key={index} className={styles.captionLabel}>
                            {monthDate.toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', {
                              month: 'long',
                              year: 'numeric'
                            })}
                          </div>
                        );
                      })}
                    </div>

                    {/* Next button on far right */}
                    <button
                      className={styles.buttonNext}
                      onClick={() => {
                        const newMonth = addMonths(currentMonth, 1);
                        setCurrentMonth(newMonth);
                      }}
                      aria-label="Next month"
                    >
                      <IconChevronRight className={styles.chevron} size={16} />
                    </button>
                  </div>
                </div>

                {/* Calendar content with hidden default navigation */}
                <DayPicker
                  mode="range"
                  numberOfMonths={2}
                  selected={selected as any}
                  onSelect={(range: any) => {
                    // If a specific input is focused, assign the clicked date to that input
                    if (focusedInput && range && typeof range === 'object' && 'from' in range && range.from) {
                      const clickedDate = range.from; // The most recently clicked date

                      if (focusedInput === 'start') {
                        onStartDateChange?.(clickedDate);
                        // Update range with new start date, keeping existing end date
                        onSelect?.({ from: clickedDate, to: endDate });
                      } else if (focusedInput === 'end') {
                        onEndDateChange?.(clickedDate);
                        // Update range with new end date, keeping existing start date
                        onSelect?.({ from: startDate, to: clickedDate });
                      }

                      // Clear focus after assignment
                      setFocusedInput(null);
                      return;
                    }

                    // Default behavior when no input is focused
                    // Call the parent's onSelect callback
                    onSelect?.(range);

                    // Also update startDate and endDate for header DatePickers
                    if (range && typeof range === 'object' && 'from' in range) {
                      onStartDateChange?.(range.from);
                      onEndDateChange?.(range.to);
                    } else if (!range) {
                      // Clear dates when no range is selected
                      onStartDateChange?.(undefined);
                      onEndDateChange?.(undefined);
                    }
                  }}
                  showOutsideDays={showOutsideDays}
                  fixedWeeks={fixedWeeks}
                  month={currentMonth}
                  onMonthChange={setCurrentMonth}
                  classNames={{
                    ...customClassNames,
                    nav: styles.hiddenNav,
                    month_caption: styles.hiddenCaption
                  }}
                  components={customComponents}
                  dir={isRTL ? 'rtl' : 'ltr'}
                  {...props}
                />
              </div>
            </div>
          </div>

          {/* Actions - Full width across entire calendar */}
          <div className={styles.analyticsActions}>
            {onCancel && (
              <Button variant="outlined" size="small" onClick={onCancel}>
                Cancel
              </Button>
            )}
            {onApply && (
              <Button variant="primary" size="small" onClick={onApply}>
                Apply
              </Button>
            )}
          </div>
        </div>
      );
    }

    // Shadcn-style layout with custom header for default variant
    if (variant === 'default') {
      // Special handling for dropdown layout
      if (captionLayout === 'dropdown') {
        return (
          <div
            ref={ref}
            className={clsx(styles.calendar, className)}
            style={lineHeightStyle}
            onMouseLeave={handleCalendarMouseLeave}
          >
            {/* Custom header with dropdowns on top */}
            <div className={styles.customHeader}>
              {/* Navigation row with buttons and dropdowns */}
              <div className={styles.navigationRow}>
                {/* Previous button on far left */}
                <button
                  className={styles.buttonPrevious}
                  onClick={() => {
                    const newMonth = addMonths(currentMonth, -1);
                    setCurrentMonth(newMonth);
                  }}
                  aria-label="Previous month"
                >
                  <IconChevronLeft className={styles.chevron} size={16} />
                </button>

                {/* Dropdown controls in center - let DayPicker render them */}
                <div className={styles.dropdownGroup}>
                  {/* The actual dropdowns will be rendered by DayPicker */}
                </div>

                {/* Next button on far right */}
                <button
                  className={styles.buttonNext}
                  onClick={() => {
                    const newMonth = addMonths(currentMonth, 1);
                    setCurrentMonth(newMonth);
                  }}
                  aria-label="Next month"
                >
                  <IconChevronRight className={styles.chevron} size={16} />
                </button>
              </div>
            </div>

            {/* Calendar content with custom nav hidden, keep dropdown caption */}
            <DayPicker
              mode={mode as any}
              captionLayout="dropdown"
              navLayout={navLayout}
              selected={selected as any}
              onSelect={onSelect as any}
              showOutsideDays={showOutsideDays}
              fixedWeeks={fixedWeeks}
              numberOfMonths={numberOfMonths}
              reverseMonths={reverseMonths}
              pagedNavigation={pagedNavigation}
              footer={footer}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              classNames={{
                ...customClassNames,
                nav: styles.hiddenNav,
                month_caption: styles.dropdownRoot
              }}
              components={customComponents}
              dir={isRTL ? 'rtl' : 'ltr'}
              {...props}
            />
          </div>
        );
      }

      // Standard multiple months layout
      return (
        <div
          ref={ref}
          className={clsx(styles.calendar, className)}
          style={lineHeightStyle}
          onMouseLeave={handleCalendarMouseLeave}
        >
          {/* Custom header with navigation on top */}
          <div className={styles.customHeader}>
            {/* Navigation row with buttons and month labels */}
            <div className={styles.navigationRow}>
              {/* Previous button on far left */}
              <button
                className={styles.buttonPrevious}
                onClick={() => {
                  const newMonth = addMonths(currentMonth, -1);
                  setCurrentMonth(newMonth);
                }}
                aria-label="Previous month"
              >
                <IconChevronLeft className={styles.chevron} size={16} />
              </button>

              {/* Month labels group in center */}
              <div className={styles.monthLabelsGroup}>
                {Array.from({ length: numberOfMonths }, (_, index) => {
                  const monthDate = addMonths(currentMonth, index);
                  return (
                    <div key={index} className={styles.captionLabel}>
                      {monthDate.toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                  );
                })}
              </div>

              {/* Next button on far right */}
              <button
                className={styles.buttonNext}
                onClick={() => {
                  const newMonth = addMonths(currentMonth, 1);
                  setCurrentMonth(newMonth);
                }}
                aria-label="Next month"
              >
                <IconChevronRight className={styles.chevron} size={16} />
              </button>
            </div>
          </div>

          {/* Calendar content with hidden default navigation and caption */}
          <DayPicker
            mode={mode as any}
            captionLayout="label"
            navLayout={navLayout}
            selected={selected as any}
            onSelect={handleSelect as any}
            modifiers={{
              preview_range: rangePreview ? (date: Date) => {
                const start = rangePreview.from! < rangePreview.to! ? rangePreview.from! : rangePreview.to!;
                const end = rangePreview.from! > rangePreview.to! ? rangePreview.from! : rangePreview.to!;
                return date >= start && date <= end;
              } : undefined
            }}
            modifiersClassNames={{
              preview_range: 'preview-range'
            }}
            onDayMouseEnter={handleDayMouseEnter}
            showOutsideDays={showOutsideDays}
            fixedWeeks={fixedWeeks}
            numberOfMonths={numberOfMonths}
            reverseMonths={reverseMonths}
            pagedNavigation={pagedNavigation}
            footer={footer}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            classNames={{
              ...customClassNames,
              nav: styles.hiddenNav,
              month_caption: styles.hiddenCaption
            }}
            components={customComponents}
            dir={isRTL ? 'rtl' : 'ltr'}
            {...props}
          />
        </div>
      );
    }

    // This should not be reached anymore as all variants use custom header
    return null;
  }
);

Calendar.displayName = 'Calendar';

// Export calendar modes for documentation
export const calendarModes = ['single', 'multiple', 'range'] as const;
export const calendarCaptionLayouts = ['label', 'dropdown', 'dropdown-months', 'dropdown-years'] as const;
export const calendarNavLayouts = ['around', 'after'] as const;