import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { format, parse, isValid, startOfDay, endOfDay, subDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfQuarter, endOfQuarter, startOfYear, endOfYear } from 'date-fns';
import { IconCalendar, IconArrowRight } from '@tabler/icons-react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import * as RadixPopover from '@radix-ui/react-popover';
import { Calendar, CalendarProps } from '../Calendar/Calendar';
import clsx from 'clsx';
import styles from './DatePicker.module.css';

export type DatePickerMode = 'single' | 'multiple' | 'range';
export type DatePickerLayout = 'single' | 'dual' | 'analytics';
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

export interface DatePickerProps extends Omit<TextInputProps, 'value' | 'onChange' | 'type' | 'prefix' | 'suffix'> {
  /**
   * Selection mode for the date picker
   */
  mode?: DatePickerMode;

  /**
   * Layout for range mode - 'single' for one input, 'dual' for two separate inputs (flight booking style)
   * Only applies when mode is 'range'
   */
  layout?: DatePickerLayout;
  
  /**
   * Selected date value (for single mode) or array of dates (for multiple mode)
   */
  value?: Date | Date[] | { from?: Date; to?: Date } | undefined;
  
  /**
   * Callback when date selection changes
   */
  onChange?: (date: Date | Date[] | { from?: Date; to?: Date } | undefined) => void;
  
  /**
   * Date format pattern for display in the input field
   * @default "PPP" (e.g., "January 1, 2023")
   */
  dateFormat?: string;
  
  /**
   * Whether the popover is open
   */
  open?: boolean;
  
  /**
   * Callback when the popover open state changes
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * Placeholder text when no date is selected
   */
  placeholder?: string;
  
  /**
   * Whether to show the calendar icon
   */
  showCalendarIcon?: boolean;
  
  /**
   * Position of the calendar popover relative to the input
   */
  popoverSide?: 'top' | 'right' | 'bottom' | 'left';
  
  /**
   * Alignment of the calendar popover
   */
  popoverAlign?: 'start' | 'center' | 'end';
  
  /**
   * Additional props to pass to the Calendar component
   */
  calendarProps?: Partial<CalendarProps>;
  
  /**
   * Minimum selectable date
   */
  minDate?: Date;
  
  /**
   * Maximum selectable date
   */
  maxDate?: Date;
  
  /**
   * Array of disabled dates
   */
  disabledDates?: Date[];
  
  /**
   * Function to determine if a date should be disabled
   */
  isDateDisabled?: (date: Date) => boolean;
  
  /**
   * Whether to close the calendar after date selection (single mode only)
   */
  closeOnSelect?: boolean;
  
  /**
   * Custom date parsing function
   */
  parseDate?: (value: string) => Date | undefined;
  
  /**
   * Custom date formatting function
   */
  formatDate?: (date: Date) => string;

  /**
   * Label for start date input (dual layout only)
   */
  startLabel?: string;

  /**
   * Label for end date input (dual layout only)
   */
  endLabel?: string;

  /**
   * Placeholder for start date input (dual layout only)
   */
  startPlaceholder?: string;

  /**
   * Placeholder for end date input (dual layout only)
   */
  endPlaceholder?: string;

  /**
   * Gap between inputs in dual layout
   */
  gap?: 'sm' | 'md' | 'lg';

  /**
   * Number of months to display in the calendar
   * @default 1
   */
  numberOfMonths?: number;

  /**
   * Array of preset options for analytics layout
   */
  presets?: DatePreset[];

  /**
   * Current range type for analytics layout
   */
  rangeType?: DateRangeType;

  /**
   * Callback when range type changes
   */
  onRangeTypeChange?: (type: DateRangeType) => void;

  /**
   * Whether to show time selection option
   */
  showTimeSelection?: boolean;

  /**
   * Callback to save custom preset
   */
  onSavePreset?: (name: string, config: DateRangeConfig) => void;

  /**
   * Callback when Apply button is clicked
   */
  onApply?: (config: DateRangeConfig) => void;

  /**
   * Callback when Cancel button is clicked
   */
  onCancel?: () => void;

  /**
   * Timezone display string
   */
  timezone?: string;

  /**
   * Whether to show timezone information
   */
  showTimezone?: boolean;

  /**
   * Enable input validation with fallback behavior
   * When enabled, invalid inputs will be replaced with fallback values on blur
   */
  enableValidation?: boolean;

  /**
   * Function that returns fallback date for invalid inputs
   * Called when enableValidation is true and user inputs invalid data
   */
  validationFallback?: () => Date;

  /**
   * Callback when input value changes (for tracking raw input)
   */
  onInputChange?: (value: string) => void;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({
    mode = 'single',
    layout = 'single',
    value,
    onChange,
    dateFormat = 'PPP',
    open,
    onOpenChange,
    placeholder,
    showCalendarIcon = true,
    popoverSide = 'bottom',
    popoverAlign = 'start',
    calendarProps,
    minDate,
    maxDate,
    disabledDates,
    isDateDisabled,
    closeOnSelect = true,
    parseDate,
    formatDate,
    startLabel,
    endLabel,
    startPlaceholder,
    endPlaceholder,
    gap = 'md',
    numberOfMonths = 1,
    presets,
    rangeType = 'between',
    onRangeTypeChange,
    showTimeSelection = false,
    onSavePreset,
    onApply,
    onCancel,
    timezone,
    showTimezone = false,
    enableValidation = false,
    validationFallback,
    onInputChange,
    className,
    onFocus,
    onBlur,
    onKeyDown,
    readOnly = false, // Allow typing by default
    ...props
  }, ref) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    // State for validation
    const [hasInvalidInput, setHasInvalidInput] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [rawInputValue, setRawInputValue] = useState<string>('');

    // Dual layout state (for range mode with dual layout)
    const [activeInput, setActiveInput] = useState<'start' | 'end' | null>(null);
    const startInputRef = useRef<HTMLInputElement>(null);
    const endInputRef = useRef<HTMLInputElement>(null);

    // Analytics layout state
    const [selectedPreset, setSelectedPreset] = useState<string>('last30');
    const [currentRangeType, setCurrentRangeType] = useState<DateRangeType>(rangeType);
    const [customDates, setCustomDates] = useState<{ from?: Date; to?: Date }>({});

    // Use controlled or internal open state
    const isOpen = open !== undefined ? open : internalOpen;
    const setIsOpen = onOpenChange || setInternalOpen;

    // Detect RTL direction for line height adjustments
    const isRTL = typeof document !== 'undefined' && 
      (document.dir === 'rtl' || document.documentElement.dir === 'rtl');
    
    // Apply line height style based on text direction
    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    };

    // Default presets for analytics layout
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

    // Use provided presets or defaults
    const availablePresets = presets || defaultPresets;

    // Generate appropriate placeholder text
    const placeholderText = placeholder || (() => {
      const formatExamples = {
        'PPP': 'January 1, 2024',
        'PP': 'Jan 1, 2024', 
        'P': '01/01/2024',
        'dd/MM/yyyy': '01/01/2024',
        'MM/dd/yyyy': '01/01/2024',
        'yyyy-MM-dd': '2024-01-01',
        'dd-MM-yyyy': '01-01-2024'
      };
      
      const example = formatExamples[dateFormat as keyof typeof formatExamples] || 'MM/dd/yyyy';
      
      switch (mode) {
        case 'single':
          return readOnly ? 'Select date' : `e.g. ${example}`;
        case 'multiple':
          return 'Select multiple dates';
        case 'range':
          return 'Select date range';
        default:
          return 'Select date';
      }
    })();

    // Format date for display
    const formatDateForDisplay = (date: Date | Date[] | { from?: Date; to?: Date } | undefined): string => {
      if (!date) return '';

      try {
        if (formatDate && date instanceof Date) {
          return formatDate(date);
        }

        if (mode === 'single' && date instanceof Date) {
          return format(date, dateFormat);
        }

        if (mode === 'multiple' && Array.isArray(date)) {
          return date.map(d => format(d, dateFormat)).join(', ');
        }

        if (mode === 'range' && typeof date === 'object' && 'from' in date) {
          const { from, to } = date;
          if (from && to) {
            return `${format(from, dateFormat)} - ${format(to, dateFormat)}`;
          }
          if (from) {
            return `${format(from, dateFormat)} - `;
          }
          return '';
        }

        return '';
      } catch (error) {
        console.warn('Failed to format date:', error);
        return '';
      }
    };

    // Format single date for display (used in dual layout)
    const formatSingleDate = (date: Date | undefined): string => {
      if (!date) return '';

      try {
        if (formatDate) {
          return formatDate(date);
        }
        return format(date, dateFormat);
      } catch (error) {
        console.warn('Failed to format date:', error);
        return '';
      }
    };

    // Parse input value to date with flexible format support
    const parseInputValue = (inputValue: string): Date | Date[] | { from?: Date; to?: Date } | undefined => {
      if (!inputValue.trim()) return undefined;

      try {
        if (parseDate) {
          const parsed = parseDate(inputValue);
          return parsed;
        }

        // Helper function to try multiple date formats for flexible parsing
        const tryParseDate = (dateStr: string): Date | undefined => {
          const trimmed = dateStr.trim();
          if (!trimmed) return undefined;

          // Flexible date formats to try (supports both 1 and 01 for days/months)
          const formats = [
            'dd/MM/yyyy',  // 01/01/2025
            'd/MM/yyyy',   // 1/01/2025
            'dd/M/yyyy',   // 01/1/2025
            'd/M/yyyy',    // 1/1/2025
            'dd-MM-yyyy',  // 01-01-2025
            'd-MM-yyyy',   // 1-01-2025
            'dd-M-yyyy',   // 01-1-2025
            'd-M-yyyy',    // 1-1-2025
            'yyyy-MM-dd',  // 2025-01-01
            'yyyy-M-d',    // 2025-1-1
            'MM/dd/yyyy',  // 01/01/2025 (US format)
            'M/dd/yyyy',   // 1/01/2025
            'MM/d/yyyy',   // 01/1/2025
            'M/d/yyyy',    // 1/1/2025
            dateFormat     // Original format as fallback
          ];

          // Try each format
          for (const format of formats) {
            try {
              const parsed = parse(trimmed, format, new Date());
              if (isValid(parsed)) {
                return parsed;
              }
            } catch {
              continue;
            }
          }

          return undefined;
        };

        if (mode === 'single') {
          return tryParseDate(inputValue);
        }

        if (mode === 'multiple') {
          const dates = inputValue.split(',').map(dateStr => tryParseDate(dateStr)).filter(Boolean) as Date[];
          return dates.length > 0 ? dates : undefined;
        }

        if (mode === 'range') {
          const [fromStr, toStr] = inputValue.split('-').map(s => s.trim());
          const from = fromStr ? tryParseDate(fromStr) : undefined;
          const to = toStr ? tryParseDate(toStr) : undefined;

          return {
            from,
            to
          };
        }

        return undefined;
      } catch (error) {
        console.warn('Failed to parse date:', error);
        return undefined;
      }
    };

    // Update input value when external value changes, but only if user is not actively typing
    useEffect(() => {
      // Don't overwrite input while user is typing to preserve text selection behavior
      if (!isTyping) {
        setInputValue(formatDateForDisplay(value));
      }
    }, [value, dateFormat, formatDate, mode, isTyping]);

    // Handle calendar date selection
    const handleCalendarSelect = (selectedDate: Date | Date[] | { from?: Date; to?: Date } | undefined) => {
      onChange?.(selectedDate);
      
      // Close popover for single mode if closeOnSelect is true
      if (mode === 'single' && closeOnSelect && selectedDate) {
        setIsOpen(false);
      }
    };

    // Handle input change (for manual typing when not read-only)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      setRawInputValue(newValue);
      setIsTyping(true);

      // Call onInputChange callback if provided
      onInputChange?.(newValue);

      // Clear validation errors when user starts typing (good UX practice)
      if (enableValidation && hasInvalidInput) {
        setHasInvalidInput(false);
      }

      // Be very conservative about calling onChange during typing to preserve text selection behavior
      // Only call onChange for empty input - let blur handler handle parsing and formatting
      if (!newValue.trim()) {
        // Empty input - clear the value
        onChange?.(undefined);
      }
      // For non-empty input, let the user continue typing and handle parsing on blur
      // This preserves natural text selection and replacement behavior
    };

    // Handle input focus
    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!readOnly) {
        setIsOpen(true);
      }
      setIsTyping(true);
      onFocus?.(e);
    };

    // Enhanced blur handler with validation fallback and formatting
    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsTyping(false);

      // Try to parse and format the current input
      const currentInput = inputValue.trim();
      if (currentInput) {
        const parsedDate = parseInputValue(currentInput);

        if (parsedDate) {
          // Successfully parsed - format it properly and update the input display
          const formattedValue = formatDateForDisplay(parsedDate);
          setInputValue(formattedValue);

          // Make sure parent component gets the parsed date
          onChange?.(parsedDate);

          // Clear any validation errors
          if (enableValidation) {
            setHasInvalidInput(false);
          }
        } else if (enableValidation && validationFallback) {
          // Invalid input - apply fallback
          setHasInvalidInput(true);
          const fallbackDate = validationFallback();
          if (fallbackDate && isValid(fallbackDate)) {
            onChange?.(fallbackDate);
            setHasInvalidInput(false);
            setRawInputValue('');
          }
        }
      }

      onBlur?.(e);
    };

    // Handle input key down
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
      onKeyDown?.(e);
    };

    // Handle calendar icon click
    const handleCalendarIconClick = () => {
      setIsOpen(!isOpen);
    };

    // Create disabled function for calendar
    const getDisabledFunction = () => {
      return (date: Date) => {
        if (isDateDisabled?.(date)) return true;
        if (minDate && date < minDate) return true;
        if (maxDate && date > maxDate) return true;
        if (disabledDates?.some(disabledDate => 
          date.getTime() === disabledDate.getTime()
        )) return true;
        return false;
      };
    };

    // Prepare calendar props
    const mergedCalendarProps: CalendarProps = {
      mode: mode as any,
      selected: value as any,
      onSelect: handleCalendarSelect as any,
      disabled: getDisabledFunction(),
      numberOfMonths,
      ...calendarProps
    };

    // Dual layout for range mode
    if (mode === 'range' && layout === 'dual') {
      return (
        <div
          className={clsx(styles.dateRangeContainer, styles[`gap-${gap}`], className)}
          style={lineHeightStyle}
        >
          <RadixPopover.Root
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            {/* Hidden trigger - Radix UI requires a trigger element */}
            <RadixPopover.Trigger asChild>
              <button className={styles.centerTrigger} tabIndex={-1} />
            </RadixPopover.Trigger>

            <div className={styles.rangeInputs}>
              {/* Start Date Input */}
              <div className={styles.rangeInputWrapper}>
                {(startLabel || 'From') && (
                  <label className={styles.rangeLabel}>
                    {startLabel || (isRTL ? 'من' : 'From')}
                  </label>
                )}
                <div
                  className={styles.triggerWrapper}
                  onClick={() => {
                    setActiveInput('start');
                    setIsOpen(true);
                  }}
                >
                  <TextInput
                    ref={startInputRef}
                      value={formatSingleDate(typeof value === 'object' && value && 'from' in value ? value.from : undefined)}
                      placeholder={startPlaceholder || (isRTL ? 'تاريخ البداية' : 'Start date')}
                      onFocus={(e) => {
                        setActiveInput('start');
                        setIsOpen(true);
                        onFocus?.(e);
                      }}
                      onBlur={onBlur}
                      readOnly={readOnly}
                      suffix={
                        showCalendarIcon ? (
                          <button
                            type="button"
                            className={styles.calendarButton}
                            onClick={() => {
                              setActiveInput('start');
                              handleCalendarIconClick();
                            }}
                            aria-label="Open calendar for start date"
                            tabIndex={-1}
                          >
                            <IconCalendar size={16} />
                          </button>
                        ) : undefined
                      }
                      {...props}
                    />
                </div>
              </div>

              {/* Separator */}
              <div className={styles.rangeSeparator}>
                <IconArrowRight size={16} className={styles.separatorIcon} />
              </div>

              {/* End Date Input */}
              <div className={styles.rangeInputWrapper}>
                {(endLabel || 'To') && (
                  <label className={styles.rangeLabel}>
                    {endLabel || (isRTL ? 'إلى' : 'To')}
                  </label>
                )}
                <div
                  className={styles.triggerWrapper}
                  onClick={() => {
                    setActiveInput('end');
                    setIsOpen(true);
                  }}
                >
                  <TextInput
                    ref={endInputRef}
                      value={formatSingleDate(typeof value === 'object' && value && 'to' in value ? value.to : undefined)}
                      placeholder={endPlaceholder || (isRTL ? 'تاريخ النهاية' : 'End date')}
                      onFocus={(e) => {
                        setActiveInput('end');
                        setIsOpen(true);
                        onFocus?.(e);
                      }}
                      onBlur={onBlur}
                      readOnly={readOnly}
                      suffix={
                        showCalendarIcon ? (
                          <button
                            type="button"
                            className={styles.calendarButton}
                            onClick={() => {
                              setActiveInput('end');
                              handleCalendarIconClick();
                            }}
                            aria-label="Open calendar for end date"
                            tabIndex={-1}
                          >
                            <IconCalendar size={16} />
                          </button>
                        ) : undefined
                      }
                      {...props}
                    />
                </div>
              </div>
            </div>

            <RadixPopover.Portal>
              <RadixPopover.Content
                className={styles.calendarContainer}
                side="bottom"
                align="center"
                sideOffset={40}
                collisionPadding={10}
                onOpenAutoFocus={(e) => e.preventDefault()}
                onFocusOutside={(e) => {
                  // Prevent closing when focusing on our inputs or their containers
                  const target = e.target as Element;
                  if (startInputRef.current === target || startInputRef.current?.contains(target)) {
                    e.preventDefault();
                    return;
                  }
                  if (endInputRef.current === target || endInputRef.current?.contains(target)) {
                    e.preventDefault();
                    return;
                  }
                  // Also check if target is within our range inputs container
                  const rangeContainer = target.closest('.' + styles.rangeInputs);
                  if (rangeContainer) {
                    e.preventDefault();
                    return;
                  }
                }}
                onPointerDownOutside={(e) => {
                  // Prevent closing when clicking on our inputs or their containers
                  const target = e.target as Element;
                  if (startInputRef.current === target || startInputRef.current?.contains(target)) {
                    e.preventDefault();
                    return;
                  }
                  if (endInputRef.current === target || endInputRef.current?.contains(target)) {
                    e.preventDefault();
                    return;
                  }
                  // Also check if target is within our range inputs container
                  const rangeContainer = target.closest('.' + styles.rangeInputs);
                  if (rangeContainer) {
                    e.preventDefault();
                    return;
                  }
                }}
              >
                <Calendar {...mergedCalendarProps} />
              </RadixPopover.Content>
            </RadixPopover.Portal>
          </RadixPopover.Root>
        </div>
      );
    }

    // Analytics layout for range mode with presets
    if (mode === 'range' && layout === 'analytics') {
      const displayValue = value && typeof value === 'object' && 'from' in value && value.from && value.to
        ? `${format(value.from, dateFormat)} - ${format(value.to, dateFormat)}`
        : '';

      return (
        <div className={clsx(styles.container, className)} style={lineHeightStyle}>
          <RadixPopover.Root open={isOpen} onOpenChange={setIsOpen}>
            <RadixPopover.Trigger asChild>
              <div className={styles.triggerWrapper}>
                <TextInput
                  ref={ref}
                  value={displayValue}
                  placeholder={placeholderText}
                  onFocus={(e) => {
                    setIsOpen(true);
                    onFocus?.(e);
                  }}
                  onClick={() => setIsOpen(true)}
                  onBlur={onBlur}
                  onKeyDown={onKeyDown}
                  readOnly={readOnly}
                  suffix={
                    showCalendarIcon ? (
                      <button
                        type="button"
                        className={styles.calendarButton}
                        onClick={() => setIsOpen(true)}
                        aria-label="Open calendar"
                        tabIndex={-1}
                      >
                        <IconCalendar size={16} />
                      </button>
                    ) : undefined
                  }
                  {...props}
                />
              </div>
            </RadixPopover.Trigger>

            <RadixPopover.Portal>
              <RadixPopover.Content
                className={styles.analyticsContainer}
                side={popoverSide}
                align={popoverAlign}
                sideOffset={12}
                collisionPadding={10}
                onOpenAutoFocus={(e) => e.preventDefault()}
              >
                <div className={styles.analyticsLayout}>
                  {/* Left Sidebar - Presets */}
                  <div className={styles.presetSidebar}>
                    <div className={styles.sidebarHeader}>
                      <h3 className={styles.sidebarTitle}>Presets</h3>
                    </div>

                    <div className={styles.presetList}>
                      {availablePresets.map((preset) => (
                        <button
                          key={preset.id}
                          className={clsx(
                            styles.presetButton,
                            selectedPreset === preset.id && styles.presetButtonActive
                          )}
                          onClick={() => {
                            setSelectedPreset(preset.id);
                            const range = preset.getValue();
                            onChange?.({ from: range.from, to: range.to });
                          }}
                        >
                          {preset.label}
                        </button>
                      ))}

                      <button
                        className={clsx(
                          styles.presetButton,
                          selectedPreset === 'custom' && styles.presetButtonActive
                        )}
                        onClick={() => setSelectedPreset('custom')}
                      >
                        Custom
                      </button>
                    </div>

                    {showTimezone && (
                      <div className={styles.timezoneInfo}>
                        {timezone || '(UTC+00:00) UTC'}
                      </div>
                    )}
                  </div>

                  {/* Right Content Area */}
                  <div className={styles.contentArea}>
                    {selectedPreset === 'custom' ? (
                      <div className={styles.customRangeContainer}>
                        {/* Range Type Dropdown - placeholder for now */}
                        <div className={styles.rangeTypeSection}>
                          <select
                            value={currentRangeType}
                            onChange={(e) => {
                              const newType = e.target.value as DateRangeType;
                              setCurrentRangeType(newType);
                              onRangeTypeChange?.(newType);
                            }}
                            className={styles.rangeTypeSelect}
                          >
                            <option value="between">Between</option>
                            <option value="last">Last</option>
                            <option value="since">Since</option>
                            <option value="this">This</option>
                          </select>
                        </div>

                        {/* Custom Date Inputs */}
                        <div className={styles.customDateInputs}>
                          <TextInput
                            placeholder="Start date"
                            value={customDates.from ? format(customDates.from, dateFormat) : ''}
                            readOnly
                          />
                          <span className={styles.dateConnector}>and</span>
                          <TextInput
                            placeholder="End date"
                            value={customDates.to ? format(customDates.to, dateFormat) : ''}
                            readOnly
                          />
                          {showTimeSelection && (
                            <button className={styles.addTimeButton}>+ Add time</button>
                          )}
                        </div>

                        {/* Calendar for custom selection */}
                        <div className={styles.calendarContainer}>
                          <Calendar
                            mode="range"
                            numberOfMonths={numberOfMonths}
                            selected={value as { from?: Date; to?: Date }}
                            onSelect={(range) => {
                              if (range && typeof range === 'object' && 'from' in range) {
                                setCustomDates(range);
                                onChange?.(range);
                              }
                            }}
                            {...calendarProps}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className={styles.calendarContainer}>
                        <Calendar
                          mode="range"
                          numberOfMonths={numberOfMonths}
                          selected={value as { from?: Date; to?: Date }}
                          onSelect={onChange}
                          {...calendarProps}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className={styles.analyticsActions}>
                  {selectedPreset === 'custom' && onSavePreset && (
                    <button
                      className={styles.savePresetButton}
                      onClick={() => {
                        const config: DateRangeConfig = {
                          type: currentRangeType,
                          customDates
                        };
                        onSavePreset('Custom Range', config);
                      }}
                    >
                      Save as Preset
                    </button>
                  )}
                  <div className={styles.actionGroup}>
                    <button
                      className={styles.cancelButton}
                      onClick={() => {
                        setIsOpen(false);
                        onCancel?.();
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className={styles.applyButton}
                      onClick={() => {
                        const config: DateRangeConfig = {
                          type: currentRangeType,
                          customDates: selectedPreset === 'custom' ? customDates : undefined
                        };
                        setIsOpen(false);
                        onApply?.(config);
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </RadixPopover.Content>
            </RadixPopover.Portal>
          </RadixPopover.Root>
        </div>
      );
    }

    // Default single input layout
    return (
      <div className={clsx(styles.container, className)} style={lineHeightStyle}>
        <RadixPopover.Root open={isOpen} onOpenChange={setIsOpen}>
          <RadixPopover.Trigger asChild>
            <div className={styles.triggerWrapper}>
              <TextInput
                ref={ref}
                value={inputValue}
                onChange={readOnly ? undefined : handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
                placeholder={placeholderText}
                suffix={
                  showCalendarIcon ? (
                    <button
                      type="button"
                      className={styles.calendarButton}
                      onClick={handleCalendarIconClick}
                      aria-label="Open calendar"
                      tabIndex={-1}
                    >
                      <IconCalendar size={16} />
                    </button>
                  ) : undefined
                }
                readOnly={readOnly}
                {...props}
              />
            </div>
          </RadixPopover.Trigger>
          
          <RadixPopover.Portal>
            <RadixPopover.Content
              className={styles.calendarContainer}
              side={popoverSide}
              align={popoverAlign}
              sideOffset={5}
              collisionPadding={10}
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <Calendar {...mergedCalendarProps} />
            </RadixPopover.Content>
          </RadixPopover.Portal>
        </RadixPopover.Root>
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

// Export date picker modes and layouts for documentation
export const datePickerModes = ['single', 'multiple', 'range'] as const;
export const datePickerLayouts = ['single', 'dual'] as const;