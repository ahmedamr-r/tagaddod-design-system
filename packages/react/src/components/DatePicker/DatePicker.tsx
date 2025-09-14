import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { format, parse, isValid } from 'date-fns';
import { IconCalendar, IconArrowRight } from '@tabler/icons-react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import * as RadixPopover from '@radix-ui/react-popover';
import { Calendar, CalendarProps } from '../Calendar/Calendar';
import clsx from 'clsx';
import styles from './DatePicker.module.css';

export type DatePickerMode = 'single' | 'multiple' | 'range';
export type DatePickerLayout = 'single' | 'dual';

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
    className,
    onFocus,
    onBlur,
    onKeyDown,
    readOnly = true, // Default to read-only for date picker
    ...props
  }, ref) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // Dual layout state (for range mode with dual layout)
    const [activeInput, setActiveInput] = useState<'start' | 'end' | null>(null);
    const startInputRef = useRef<HTMLInputElement>(null);
    const endInputRef = useRef<HTMLInputElement>(null);

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

    // Parse input value to date
    const parseInputValue = (inputValue: string): Date | Date[] | { from?: Date; to?: Date } | undefined => {
      if (!inputValue.trim()) return undefined;
      
      try {
        if (parseDate) {
          const parsed = parseDate(inputValue);
          return parsed;
        }
        
        if (mode === 'single') {
          const parsed = parse(inputValue, dateFormat, new Date());
          return isValid(parsed) ? parsed : undefined;
        }
        
        if (mode === 'multiple') {
          const dates = inputValue.split(',').map(dateStr => {
            const trimmed = dateStr.trim();
            const parsed = parse(trimmed, dateFormat, new Date());
            return isValid(parsed) ? parsed : null;
          }).filter(Boolean) as Date[];
          
          return dates.length > 0 ? dates : undefined;
        }
        
        if (mode === 'range') {
          const [fromStr, toStr] = inputValue.split('-').map(s => s.trim());
          const from = fromStr ? parse(fromStr, dateFormat, new Date()) : undefined;
          const to = toStr ? parse(toStr, dateFormat, new Date()) : undefined;
          
          return {
            from: from && isValid(from) ? from : undefined,
            to: to && isValid(to) ? to : undefined
          };
        }
        
        return undefined;
      } catch (error) {
        console.warn('Failed to parse date:', error);
        return undefined;
      }
    };

    // Update input value when external value changes
    useEffect(() => {
      setInputValue(formatDateForDisplay(value));
    }, [value, dateFormat, formatDate, mode]);

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
      
      // Try to parse the input value
      const parsedDate = parseInputValue(newValue);
      onChange?.(parsedDate);
    };

    // Handle input focus
    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!readOnly) {
        setIsOpen(true);
      }
      onFocus?.(e);
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
          <RadixPopover.Root open={isOpen} onOpenChange={setIsOpen}>
            {/* Invisible trigger positioned at the center for popover positioning */}
            <RadixPopover.Trigger asChild>
              <div className={styles.centerTrigger} />
            </RadixPopover.Trigger>

            <div className={styles.rangeInputs}>
              {/* Start Date Input */}
              <div className={styles.rangeInputWrapper}>
                {(startLabel || 'From') && (
                  <label className={styles.rangeLabel}>
                    {startLabel || (isRTL ? 'من' : 'From')}
                  </label>
                )}
                <div className={styles.triggerWrapper}>
                  <TextInput
                      ref={startInputRef}
                      value={formatSingleDate(typeof value === 'object' && value && 'from' in value ? value.from : undefined)}
                      placeholder={startPlaceholder || (isRTL ? 'تاريخ البداية' : 'Start date')}
                      onFocus={(e) => {
                        setActiveInput('start');
                        setIsOpen(true);
                        onFocus?.(e);
                      }}
                      onClick={() => {
                        setActiveInput('start');
                        setIsOpen(true);
                      }}
                      readOnly={readOnly}
                      suffix={
                        showCalendarIcon ? (
                          <button
                            type="button"
                            className={styles.calendarButton}
                            onClick={() => {
                              setActiveInput('start');
                              setIsOpen(!isOpen);
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
                <div className={styles.triggerWrapper}>
                  <TextInput
                      ref={endInputRef}
                      value={formatSingleDate(typeof value === 'object' && value && 'to' in value ? value.to : undefined)}
                      placeholder={endPlaceholder || (isRTL ? 'تاريخ النهاية' : 'End date')}
                      onFocus={(e) => {
                        setActiveInput('end');
                        setIsOpen(true);
                        onFocus?.(e);
                      }}
                      onClick={() => {
                        setActiveInput('end');
                        setIsOpen(true);
                      }}
                      readOnly={readOnly}
                      suffix={
                        showCalendarIcon ? (
                          <button
                            type="button"
                            className={styles.calendarButton}
                            onClick={() => {
                              setActiveInput('end');
                              setIsOpen(!isOpen);
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