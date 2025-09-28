import React, { forwardRef, useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { DayPicker, DayPickerProps } from 'react-day-picker';
import clsx from 'clsx';
import { IconChevronLeft, IconChevronRight, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Select } from '../Select/Select';
import { Button } from '../Button/Button';
import { DatePicker } from '../DatePicker/DatePicker';
import { Number } from '../Number/Number';
import { ScrollArea } from '../ScrollArea/ScrollArea';
import { startOfDay, endOfDay, subDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfQuarter, endOfQuarter, startOfYear, endOfYear, addMonths, isValid, parse } from 'date-fns';
import styles from './Calendar.module.css';
import {
  CALENDAR_CONFIG,
  CALENDAR_TRANSLATIONS,
  PRESET_LABELS,
  RANGE_TYPE_LABELS,
  PERIOD_TYPE_LABELS,
  WEEKDAY_NAMES,
  getCalendarText,
  getPresetLabel,
  getRangeTypeLabel,
  getPeriodTypeLabel,
  formatMonthYear as formatMonthYearHelper,
  getWeekdayNames
} from './Calendar.constants';

// Import constants from Calendar.constants.ts
const { DEFAULT_CELL_SIZE, DEFAULT_NUMBER_OF_MONTHS, DEFAULT_ANALYTICS_MONTHS, DATE_FORMAT, DATE_FORMAT_PATTERNS } = CALENDAR_CONFIG;

/**
 * Validates and parses a date string, returns null if invalid
 */
const parseDate = (dateString: string): Date | null => {
  if (!dateString || typeof dateString !== 'string') return null;

  // Try multiple date formats
  for (const formatPattern of DATE_FORMAT_PATTERNS) {
    try {
      const parsed = parse(dateString, formatPattern, new Date());
      if (isValid(parsed)) {
        return parsed;
      }
    } catch (error) {
      // Continue to next format
    }
  }

  // Try native Date parsing as fallback
  const nativeDate = new Date(dateString);
  return isValid(nativeDate) ? nativeDate : null;
};

/**
 * Gets fallback dates for invalid input
 */
const getFallbackDates = () => {
  const currentYear = new Date().getFullYear();
  const startDateFallback = new Date(currentYear, 0, 1); // First day of current year
  const endDateFallback = new Date(); // Current date

  return { startDateFallback, endDateFallback };
};

// Range type options for analytics variant
export const getRangeTypeOptions = (isRTL: boolean) => [
  { value: 'between', label: getRangeTypeLabel('between', isRTL) },
  { value: 'last', label: getRangeTypeLabel('last', isRTL) },
  { value: 'since', label: getRangeTypeLabel('since', isRTL) },
  { value: 'this', label: getRangeTypeLabel('this', isRTL) }
];

// Period type options for 'this' range type
export const getPeriodTypeOptions = (isRTL: boolean) => [
  { value: 'week', label: getPeriodTypeLabel('week', isRTL) },
  { value: 'month', label: getPeriodTypeLabel('month', isRTL) },
  { value: 'quarter', label: getPeriodTypeLabel('quarter', isRTL) },
  { value: 'year', label: getPeriodTypeLabel('year', isRTL) }
];

// For backward compatibility
export const RANGE_TYPE_OPTIONS = getRangeTypeOptions(false);
export const PERIOD_TYPE_OPTIONS = getPeriodTypeOptions(false);

// Calendar display and behavior types
export type CalendarCaptionLayout = 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
export type CalendarNavLayout = 'around' | 'after';
export type CalendarMode = 'single' | 'multiple' | 'range';
export type CalendarVariant = 'default' | 'analytics';

// Analytics variant specific types
export type DateRangeType = 'between' | 'last' | 'since' | 'this';
export type PeriodType = 'week' | 'month' | 'quarter' | 'year';

/**
 * Configuration for date range presets in analytics variant
 */
export interface DatePreset {
  /** Unique identifier for the preset */
  id: string;
  /** Display label for the preset */
  label: string;
  /** Function that returns the date range for this preset */
  getValue: () => { from: Date; to: Date };
}

/**
 * Configuration object for custom date ranges
 */
export interface DateRangeConfig {
  /** Type of date range selection */
  type: DateRangeType;
  /** Value for 'last' type ranges (number of days) */
  value?: string | number;
  /** Custom date range for 'between' type */
  customDates?: { from?: Date; to?: Date };
}

/**
 * Enhanced Calendar component props with full design system integration
 * Built on react-day-picker with additional analytics and RTL features
 */
export interface CalendarProps extends Omit<DayPickerProps, 'mode' | 'captionLayout'> {
  // Basic calendar configuration
  /**
   * Selection mode for the calendar
   * @default 'single'
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
  onRangeTypeChange?: (type: DateRangeType, fromPreset?: boolean) => void;

  /**
   * Current range value (number for 'last', date for 'since', etc.)
   */
  rangeValue?: string | number;

  /**
   * Callback when range value changes
   */
  onRangeValueChange?: (value: string | number, fromPreset?: boolean) => void;

  /**
   * Current period for 'this' type (week, month, quarter, year)
   */
  periodType?: PeriodType;

  /**
   * Callback when period type changes
   */
  onPeriodTypeChange?: (period: PeriodType, fromPreset?: boolean) => void;

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

  /**
   * The minimum date that can be navigated to
   * Navigation will be disabled for months before this date
   */
  minDate?: Date;

  /**
   * The maximum date that can be navigated to
   * Navigation will be disabled for months after this date
   */
  maxDate?: Date;
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
    periodType = 'week' as PeriodType,
    onPeriodTypeChange,
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
    onApply,
    onCancel,
    showCustomPreset = false,
    minDate,
    maxDate,
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
    // State to track if the selection is from a preset
    const [isPresetSelection, setIsPresetSelection] = useState(false);
    // Simple state for focus tracking
    const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);
    // Detect RTL direction for line height adjustments
    const isRTL = typeof document !== 'undefined' &&
      (document.dir === 'rtl' || document.documentElement.dir === 'rtl');

    // Memoize line height style to prevent unnecessary re-renders
    const lineHeightStyle = useMemo(() => ({
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    }), [isRTL]);

    // Scroll indicator state for preset section
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);
    const [showScrollUpIndicator, setShowScrollUpIndicator] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);



    // Use the helper function from constants
    const formatMonthYear = (date: Date): string => {
      return formatMonthYearHelper(date, isRTL);
    };

    // Helper function to check if navigation is allowed
    const canNavigateTo = useCallback((targetDate: Date): boolean => {
      const targetYear = targetDate.getFullYear();
      const targetMonth = targetDate.getMonth();

      if (minDate) {
        const minYear = minDate.getFullYear();
        const minMonth = minDate.getMonth();
        if (targetYear < minYear || (targetYear === minYear && targetMonth < minMonth)) {
          return false;
        }
      }

      if (maxDate) {
        const maxYear = maxDate.getFullYear();
        const maxMonth = maxDate.getMonth();
        if (targetYear > maxYear || (targetYear === maxYear && targetMonth > maxMonth)) {
          return false;
        }
      }

      return true;
    }, [minDate, maxDate]);

    // Helper function to check if previous navigation is disabled
    const isPreviousDisabled = useMemo(() => {
      if (!minDate) return false;
      const previousMonth = addMonths(currentMonth, -1);
      return !canNavigateTo(previousMonth);
    }, [currentMonth, minDate, canNavigateTo]);

    // Helper function to check if next navigation is disabled
    const isNextDisabled = useMemo(() => {
      if (!maxDate) return false;
      const nextMonth = addMonths(currentMonth, numberOfMonths || 1);
      return !canNavigateTo(nextMonth);
    }, [currentMonth, maxDate, numberOfMonths, canNavigateTo]);

    // Default presets for analytics variant - commonly used date ranges
    const defaultPresets: DatePreset[] = [
      {
        id: 'last30',
        label: getPresetLabel('last30', isRTL),
        getValue: () => ({ from: startOfDay(subDays(new Date(), 29)), to: endOfDay(new Date()) })
      },
      {
        id: 'last60',
        label: getPresetLabel('last60', isRTL),
        getValue: () => ({ from: startOfDay(subDays(new Date(), 59)), to: endOfDay(new Date()) })
      },
      {
        id: 'last90',
        label: getPresetLabel('last90', isRTL),
        getValue: () => ({ from: startOfDay(subDays(new Date(), 89)), to: endOfDay(new Date()) })
      },
      {
        id: 'thisWeek',
        label: getPresetLabel('thisWeek', isRTL),
        getValue: () => ({ from: startOfWeek(new Date()), to: endOfWeek(new Date()) })
      },
      {
        id: 'thisMonth',
        label: getPresetLabel('thisMonth', isRTL),
        getValue: () => ({ from: startOfMonth(new Date()), to: endOfMonth(new Date()) })
      },
      {
        id: 'thisQuarter',
        label: getPresetLabel('thisQuarter', isRTL),
        getValue: () => ({ from: startOfQuarter(new Date()), to: endOfQuarter(new Date()) })
      },
      {
        id: 'thisYear',
        label: getPresetLabel('thisYear', isRTL),
        getValue: () => ({ from: startOfYear(new Date()), to: endOfYear(new Date()) })
      }
    ];

    const availablePresets = presets || defaultPresets;

    // Check if content is scrollable and handle scroll indicator visibility
    useEffect(() => {
      const checkScrollable = () => {
        const scrollElement = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollElement) {
          const { scrollHeight, clientHeight, scrollTop } = scrollElement as HTMLElement;
          const isScrollable = scrollHeight > clientHeight;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5; // 5px threshold
          const isAtTop = scrollTop <= 5; // 5px threshold

          // Show down indicator if scrollable and not at bottom
          setShowScrollIndicator(isScrollable && !isAtBottom);
          // Show up indicator if scrollable and not at top
          setShowScrollUpIndicator(isScrollable && !isAtTop);
        }
      };

      // Initial check
      checkScrollable();

      // Listen for scroll events
      const scrollElement = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.addEventListener('scroll', checkScrollable);
        return () => scrollElement.removeEventListener('scroll', checkScrollable);
      }
    }, [availablePresets, showCustomPreset]); // Re-check when presets change

    // Handle scroll indicator click to scroll down
    const handleScrollIndicatorClick = useCallback(() => {
      const scrollElement = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        const { scrollTop, clientHeight } = scrollElement as HTMLElement;
        // Scroll down by half the visible height for smooth scrolling
        (scrollElement as HTMLElement).scrollTo({
          top: scrollTop + clientHeight * 0.5,
          behavior: 'smooth'
        });
      }
    }, []);

    // Handle scroll up indicator click to scroll up
    const handleScrollUpIndicatorClick = useCallback(() => {
      const scrollElement = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        const { scrollTop, clientHeight } = scrollElement as HTMLElement;
        // Scroll up by half the visible height for smooth scrolling
        (scrollElement as HTMLElement).scrollTo({
          top: scrollTop - clientHeight * 0.5,
          behavior: 'smooth'
        });
      }
    }, []);

    // Date validation handlers
    const handleStartDateBlur = useCallback(() => {
      setFocusedInput(null);
      setShouldValidateOnBlur(false);
    }, []);

    const handleEndDateBlur = useCallback(() => {
      setFocusedInput(null);
      setShouldValidateOnBlur(false);
    }, []);

    const handleStartDateChange = useCallback((date: Date | null) => {
      const validDate = date && isValid(date) ? date : null;
      onStartDateChange?.(validDate);

      // Update range
      if (validDate && endDate) {
        onSelect?.({ from: validDate, to: endDate });
      } else if (validDate) {
        onSelect?.({ from: validDate, to: undefined });
      }
    }, [endDate, onStartDateChange, onSelect]);

    const handleEndDateChange = useCallback((date: Date | null) => {
      const validDate = date && isValid(date) ? date : null;
      onEndDateChange?.(validDate);

      // Update range
      if (startDate && validDate) {
        onSelect?.({ from: startDate, to: validDate });
      } else if (validDate) {
        onSelect?.({ from: undefined, to: validDate });
      }
    }, [startDate, onEndDateChange, onSelect]);

    const handleSinceDateBlur = useCallback(() => {
      setFocusedInput(null);
      setShouldValidateOnBlur(false);
    }, []);

    const handleSinceDateChange = useCallback((date: Date | null) => {
      const validDate = date && isValid(date) ? date : null;
      onStartDateChange?.(validDate);

      // For 'since' mode, update the range from the selected date to today
      if (validDate) {
        onSelect?.({ from: validDate, to: endOfDay(new Date()) });
      }
    }, [onStartDateChange, onSelect]);

    // Handle range preview for hover effects with proper error handling
    const handleDayMouseEnter = useCallback((date: Date) => {
      if (!date || mode !== 'range' || !selected) return;

      if (typeof selected === 'object' && 'from' in selected && selected.from && !selected.to) {
        setRangePreview({
          from: selected.from,
          to: date
        });
        setIsRangeSelecting(true);
      }
    }, [mode, selected]);

    const handleCalendarMouseLeave = useCallback(() => {
      if (isRangeSelecting) {
        setRangePreview(null);
        setIsRangeSelecting(false);
      }
    }, [isRangeSelecting]);

    const handleSelect = useCallback((selectedDate: any) => {
      if (mode === 'range') {
        setIsRangeSelecting(false);
        setRangePreview(null);
      }
      onSelect?.(selectedDate);
    }, [mode, onSelect]);

    // Custom components for consistent styling
    const customComponents = {
      Weekdays: () => {
        // Custom weekdays component with Arabic support
        const weekdayNames = getWeekdayNames(isRTL, 'short');
        const displayNames = isRTL ? [...weekdayNames].reverse() : weekdayNames;

        return (
          <tr className={styles.weekdays}>
            {displayNames.map((day, index) => (
              <th key={index} className={styles.weekday} scope="col">
                <span style={lineHeightStyle}>{day}</span>
              </th>
            ))}
          </tr>
        );
      },
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

                // Sync with corresponding presets when range type changes
                if (newRangeType === 'last' && rangeValue) {
                  const days = typeof rangeValue === 'number' ? rangeValue : parseInt(rangeValue.toString());
                  if (!isNaN(days)) {
                    // Find matching "Last X Days" preset
                    const matchingPreset = availablePresets.find(preset =>
                      preset.label.includes(`Last ${days}`)
                    );
                    if (matchingPreset) {
                      onPresetChange?.(matchingPreset.id);
                    }

                    const range = {
                      from: startOfDay(subDays(new Date(), days - 1)),
                      to: endOfDay(new Date())
                    };
                    onSelect?.(range);
                  }
                } else if (newRangeType === 'this' && periodType) {
                  // Sync with corresponding "This X" preset
                  const correspondingPresetId = `this${periodType.charAt(0).toUpperCase() + periodType.slice(1)}`;
                  onPresetChange?.(correspondingPresetId);
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
                } else if (newRangeType === 'between') {
                  // Switch to custom preset for "between" mode
                  onPresetChange?.('custom');
                } else if (newRangeType === 'since') {
                  // For "since", default to custom unless there's a specific preset
                  onPresetChange?.('custom');
                } else if (newRangeType === 'last') {
                  // For "last", sync with existing range value if available
                  if (rangeValue && !isNaN(Number(rangeValue))) {
                    const days = Number(rangeValue);
                    // Find matching "Last X Days" preset
                    const matchingPreset = availablePresets.find(preset =>
                      preset.label.includes(`Last ${days}`)
                    );
                    if (matchingPreset) {
                      onPresetChange?.(matchingPreset.id);
                    } else {
                      // If no matching preset found, select custom
                      onPresetChange?.('custom');
                    }
                  } else {
                    // No range value, default to custom
                    onPresetChange?.('custom');
                  }
                }
              }}
              size="small"
              className={styles.rangeDropdown}
              options={getRangeTypeOptions(isRTL)}
            />

            {/* Dynamic section based on range type */}
            {rangeType === 'between' && (
              <>
                <DatePicker
                  value={startDate}
                  onChange={handleStartDateChange}
                  onFocus={() => {
                    setFocusedInput('start');
                    setShouldValidateOnBlur(true);
                  }}
                  onBlur={handleStartDateBlur}
                  placeholder={getCalendarText('startDate', isRTL)}
                  size="small"
                  dateFormat={DATE_FORMAT}
                  showCalendarIcon={false}
                  onOpenChange={() => {}}
                  open={false}
                  fullWidth={false}
                  // Enhanced validation props
                  enableValidation={true}
                  validationFallback={() => {
                    const { startDateFallback } = getFallbackDates();
                    return startDateFallback;
                  }}
                />
                <span className={styles.betweenLabel}>{getCalendarText('and', isRTL)}</span>
                <DatePicker
                  value={endDate}
                  onChange={handleEndDateChange}
                  onFocus={() => {
                    setFocusedInput('end');
                    setShouldValidateOnBlur(true);
                  }}
                  onBlur={handleEndDateBlur}
                  placeholder={getCalendarText('endDate', isRTL)}
                  size="small"
                  dateFormat={DATE_FORMAT}
                  showCalendarIcon={false}
                  onOpenChange={() => {}}
                  open={false}
                  fullWidth={false}
                  // Enhanced validation props
                  enableValidation={true}
                  validationFallback={() => {
                    const { endDateFallback } = getFallbackDates();
                    return endDateFallback;
                  }}
                />
              </>
            )}

            {rangeType === 'last' && (
              <>
                <Number
                  value={typeof rangeValue === 'number' ? rangeValue : parseInt(rangeValue?.toString() || '30')}
                  onChange={(value) => {
                    const newValue = value || 30;
                    onRangeValueChange?.(newValue);

                    // Sync with corresponding "Last X Days" preset when range value changes
                    if (rangeType === 'last' && newValue) {
                      const days = newValue;
                      if (!isNaN(days) && days > 0) {
                        // Find matching "Last X Days" preset
                        const matchingPreset = availablePresets.find(preset =>
                          preset.label.includes(`Last ${days}`)
                        );

                        if (matchingPreset) {
                          onPresetChange?.(matchingPreset.id);
                        } else {
                          // If no matching preset found, select custom
                          onPresetChange?.('custom');
                        }

                        const range = {
                          from: startOfDay(subDays(new Date(), days - 1)),
                          to: endOfDay(new Date())
                        };
                        onSelect?.(range);
                      }
                    }
                  }}
                  size="small"
                  min={1}
                  placeholder="30"
                  fullWidth={false}
                  hideSteppers={false}
                />
                <span className={styles.lastLabel}>{getCalendarText('completeDaysAndToday', isRTL)}</span>
              </>
            )}

            {rangeType === 'since' && (
              <DatePicker
                value={startDate}
                onChange={handleSinceDateChange}
                onFocus={() => {
                  setFocusedInput('start');
                  setShouldValidateOnBlur(true);
                }}
                onBlur={handleSinceDateBlur}
                placeholder={getCalendarText('sinceDate', isRTL)}
                size="small"
                dateFormat={DATE_FORMAT}
                showCalendarIcon={false}
                onOpenChange={() => {}}
                open={false}
                fullWidth={false}
                // Enhanced validation props
                enableValidation={true}
                validationFallback={() => {
                  const { startDateFallback } = getFallbackDates();
                  return startDateFallback;
                }}
              />
            )}

            {rangeType === 'this' && (
              <Select
                value={periodType}
                onValueChange={(value) => {
                  const periodValue = value as PeriodType;
                  onPeriodTypeChange?.(periodValue);

                  // Auto-update calendar dates when period type changes
                  if (rangeType === 'this') {
                    let range;
                    let correspondingPresetId;

                    switch (periodValue) {
                      case 'week':
                        range = { from: startOfWeek(new Date()), to: endOfWeek(new Date()) };
                        correspondingPresetId = 'thisWeek';
                        break;
                      case 'month':
                        range = { from: startOfMonth(new Date()), to: endOfMonth(new Date()) };
                        correspondingPresetId = 'thisMonth';
                        break;
                      case 'quarter':
                        range = { from: startOfQuarter(new Date()), to: endOfQuarter(new Date()) };
                        correspondingPresetId = 'thisQuarter';
                        break;
                      case 'year':
                        range = { from: startOfYear(new Date()), to: endOfYear(new Date()) };
                        correspondingPresetId = 'thisYear';
                        break;
                      default:
                        range = { from: startOfWeek(new Date()), to: endOfWeek(new Date()) };
                        correspondingPresetId = 'thisWeek';
                    }

                    onSelect?.(range);

                    // Sync with corresponding preset - bidirectional sync
                    if (correspondingPresetId) {
                      onPresetChange?.(correspondingPresetId);
                    }
                  }
                }}
                size="small"
                className={styles.periodDropdown}
                options={getPeriodTypeOptions(isRTL)}
              />
            )}
          </div>
        );
      };

      // Check if we should show custom preset - only show when it's actually selected
      const shouldShowCustom = selectedPreset === 'custom';

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
              <h3 className={styles.presetTitle}>{getCalendarText('presets', isRTL)}</h3>
              <div className={styles.presetScrollContainer}>
                {/* Scroll up indicator chevron */}
                {showScrollUpIndicator && (
                  <button
                    className={styles.scrollUpIndicator}
                    onClick={handleScrollUpIndicatorClick}
                    type="button"
                    aria-label="Scroll up to see more presets"
                  >
                    <IconChevronUp size={16} />
                  </button>
                )}

                <ScrollArea
                  ref={scrollAreaRef}
                  className={styles.presetScrollArea}
                  height="280px"
                  type="scroll"
                >
                <div className={styles.presetGroup}>
                  {availablePresets.map((preset) => (
                    <button
                      key={preset.id}
                      className={clsx(
                        styles.presetButton,
                        selectedPreset === preset.id && styles.active
                      )}
                      onClick={() => {
                        // Mark this as a preset selection
                        setIsPresetSelection(true);
                        onPresetChange?.(preset.id);
                        const range = preset.getValue();
                        onSelect?.({ from: range.from, to: range.to });

                        // Auto-sync dropdown with preset selection
                        if (preset.label.startsWith('Last ')) {
                          onRangeTypeChange?.('last', true); // true = from preset
                          // Extract number from preset label (e.g., "Last 30 Days" -> 30)
                          const match = preset.label.match(/Last (\d+)/);
                          if (match) {
                            onRangeValueChange?.(parseInt(match[1]), true); // true = from preset
                          }
                        } else if (preset.label.startsWith('This ')) {
                          onRangeTypeChange?.('this', true); // true = from preset
                          // Extract period from preset label (e.g., "This Week" -> "week")
                          const period = preset.label.replace('This ', '').toLowerCase() as PeriodType;
                          onPeriodTypeChange?.(period, true); // true = from preset
                        }
                        // Reset the flag after a short delay
                        setTimeout(() => setIsPresetSelection(false), 100);
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
                      onClick={() => {
                        onPresetChange?.('custom');
                        // Switch to "Between" mode when Custom is selected
                        onRangeTypeChange?.('between');
                      }}
                    >
                      {getCalendarText('custom', isRTL)}
                    </button>
                  )}
                </div>
                </ScrollArea>

                {/* Scroll indicator chevron */}
                {showScrollIndicator && (
                  <button
                    className={styles.scrollIndicator}
                    onClick={handleScrollIndicatorClick}
                    type="button"
                    aria-label="Scroll down to see more presets"
                  >
                    <IconChevronDown size={16} />
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
                    {/* Previous button on far left - swap icon for RTL */}
                    <button
                      className={styles.buttonPrevious}
                      onClick={() => {
                        const newMonth = addMonths(currentMonth, -1);
                        if (canNavigateTo(newMonth)) {
                          setCurrentMonth(newMonth);
                        }
                      }}
                      disabled={isPreviousDisabled}
                      aria-label={getCalendarText('previousMonth', isRTL)}
                    >
                      {isRTL ? (
                        <IconChevronRight className={styles.chevron} size={16} />
                      ) : (
                        <IconChevronLeft className={styles.chevron} size={16} />
                      )}
                    </button>

                    {/* Month labels group in center */}
                    <div className={styles.monthLabelsGroup}>
                      {Array.from({ length: variant === 'analytics' ? (numberOfMonths || DEFAULT_ANALYTICS_MONTHS) : numberOfMonths }, (_, index) => {
                        const monthDate = addMonths(currentMonth, index);
                        return (
                          <div key={index} className={styles.captionLabel}>
                            {formatMonthYear(monthDate)}
                          </div>
                        );
                      })}
                    </div>

                    {/* Next button on far right - swap icon for RTL */}
                    <button
                      className={styles.buttonNext}
                      onClick={() => {
                        const newMonth = addMonths(currentMonth, 1);
                        if (canNavigateTo(newMonth)) {
                          setCurrentMonth(newMonth);
                        }
                      }}
                      disabled={isNextDisabled}
                      aria-label={getCalendarText('nextMonth', isRTL)}
                    >
                      {isRTL ? (
                        <IconChevronLeft className={styles.chevron} size={16} />
                      ) : (
                        <IconChevronRight className={styles.chevron} size={16} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Calendar content with hidden default navigation */}
                <DayPicker
                  mode="range"
                  numberOfMonths={numberOfMonths || DEFAULT_ANALYTICS_MONTHS}
                  selected={selected as any}
                  onDayClick={(clickedDate: Date) => {
                    // Skip custom preset selection if this is from a preset button
                    if (isPresetSelection) {
                      return;
                    }

                    // If a specific input is focused, assign the clicked date to that input
                    if (focusedInput) {
                      if (focusedInput === 'start') {
                        onStartDateChange?.(clickedDate);
                        // Update range with new start date, keeping existing end date
                        onSelect?.({ from: clickedDate, to: endDate });
                      } else if (focusedInput === 'end') {
                        onEndDateChange?.(clickedDate);
                        // Update range with new end date, keeping existing start date
                        onSelect?.({ from: startDate, to: clickedDate });
                      }

                      // Auto-switch to "Between" mode when manually selecting dates
                      if (rangeType !== 'between') {
                        onRangeTypeChange?.('between');
                      }

                      // Auto-switch to custom preset when manually selecting dates
                      onPresetChange?.('custom');

                      // Clear focus after assignment
                      setFocusedInput(null);
                      return;
                    }

                    // Custom range selection logic
                    const currentSelection = selected as { from?: Date; to?: Date };

                    if (currentSelection && currentSelection.from && currentSelection.to) {
                      // A complete range exists - start new range with clicked date
                      const newRange = { from: clickedDate, to: undefined };
                      onSelect?.(newRange);
                      onStartDateChange?.(clickedDate);
                      onEndDateChange?.(undefined);
                    } else if (currentSelection && currentSelection.from && !currentSelection.to) {
                      // Only start date exists - complete the range
                      const newRange = {
                        from: currentSelection.from,
                        to: clickedDate
                      };
                      onSelect?.(newRange);
                      onStartDateChange?.(currentSelection.from);
                      onEndDateChange?.(clickedDate);
                    } else {
                      // No selection or incomplete - start new range
                      const newRange = { from: clickedDate, to: undefined };
                      onSelect?.(newRange);
                      onStartDateChange?.(clickedDate);
                      onEndDateChange?.(undefined);
                    }

                    // Auto-switch to "Between" mode when manually selecting dates
                    if (rangeType !== 'between') {
                      onRangeTypeChange?.('between');
                    }

                    // Auto-select custom preset when user manually selects dates
                    onPresetChange?.('custom');
                  }}
                  onSelect={() => {
                    // Disable the default onSelect to prevent conflicts with onDayClick
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
                {getCalendarText('cancel', isRTL)}
              </Button>
            )}
            {onApply && (
              <Button variant="primary" size="small" onClick={onApply}>
                {getCalendarText('apply', isRTL)}
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
                <Button
                  variant="plain"
                  size="small"
                  onClick={() => {
                    const newMonth = addMonths(currentMonth, -1);
                    if (canNavigateTo(newMonth)) {
                      setCurrentMonth(newMonth);
                    }
                  }}
                  disabled={isPreviousDisabled}
                  aria-label={getCalendarText('previousMonth', isRTL)}
                  prefixIcon={<IconChevronLeft size={16} />}
                />

                {/* Dropdown controls in center */}
                <div className={styles.dropdownGroup}>
                  {/* Month dropdown */}
                  <Select
                    value={currentMonth.toLocaleString('default', { month: 'long' })}
                    onValueChange={(monthName) => {
                      const monthIndex = new Date(Date.parse(monthName + " 1, 2000")).getMonth();
                      const newMonth = new Date(currentMonth.getFullYear(), monthIndex, 1);
                      setCurrentMonth(newMonth);
                    }}
                    size="small"
                    options={[
                      { value: "January", label: "January" },
                      { value: "February", label: "February" },
                      { value: "March", label: "March" },
                      { value: "April", label: "April" },
                      { value: "May", label: "May" },
                      { value: "June", label: "June" },
                      { value: "July", label: "July" },
                      { value: "August", label: "August" },
                      { value: "September", label: "September" },
                      { value: "October", label: "October" },
                      { value: "November", label: "November" },
                      { value: "December", label: "December" }
                    ]}
                  />

                  {/* Year dropdown */}
                  <Select
                    value={currentMonth.getFullYear().toString()}
                    onValueChange={(year) => {
                      const newMonth = new Date(parseInt(year), currentMonth.getMonth(), 1);
                      setCurrentMonth(newMonth);
                    }}
                    size="small"
                    options={Array.from({ length: 11 }, (_, i) => {
                      const year = new Date().getFullYear() - 5 + i;
                      return { value: year.toString(), label: year.toString() };
                    })}
                  />
                </div>

                {/* Next button on far right */}
                <Button
                  variant="plain"
                  size="small"
                  onClick={() => {
                    const newMonth = addMonths(currentMonth, 1);
                    if (canNavigateTo(newMonth)) {
                      setCurrentMonth(newMonth);
                    }
                  }}
                  disabled={isNextDisabled}
                  aria-label={getCalendarText('nextMonth', isRTL)}
                  suffixIcon={<IconChevronRight size={16} />}
                />
              </div>
            </div>

            {/* Calendar content with custom nav and caption hidden */}
            <DayPicker
              mode={mode as any}
              captionLayout="label"
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
                month_caption: styles.hiddenCaption
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
              {/* Previous button on far left - swap icon for RTL */}
              <button
                className={styles.buttonPrevious}
                onClick={() => {
                  const newMonth = addMonths(currentMonth, -1);
                  if (canNavigateTo(newMonth)) {
                    setCurrentMonth(newMonth);
                  }
                }}
                disabled={isPreviousDisabled}
                aria-label={getCalendarText('previousMonth', isRTL)}
              >
                {isRTL ? (
                  <IconChevronRight className={styles.chevron} size={16} />
                ) : (
                  <IconChevronLeft className={styles.chevron} size={16} />
                )}
              </button>

              {/* Month labels group in center */}
              <div className={styles.monthLabelsGroup}>
                {Array.from({ length: numberOfMonths }, (_, index) => {
                  const monthDate = addMonths(currentMonth, index);
                  return (
                    <div key={index} className={styles.captionLabel}>
                      {formatMonthYear(monthDate)}
                    </div>
                  );
                })}
              </div>

              {/* Next button on far right - swap icon for RTL */}
              <button
                className={styles.buttonNext}
                onClick={() => {
                  const newMonth = addMonths(currentMonth, 1);
                  if (canNavigateTo(newMonth)) {
                    setCurrentMonth(newMonth);
                  }
                }}
                disabled={isNextDisabled}
                aria-label={getCalendarText('nextMonth', isRTL)}
              >
                {isRTL ? (
                  <IconChevronLeft className={styles.chevron} size={16} />
                ) : (
                  <IconChevronRight className={styles.chevron} size={16} />
                )}
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