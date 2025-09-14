import React, { forwardRef, useState, useEffect } from 'react';
import { DayPicker, DayPickerProps } from 'react-day-picker';
import clsx from 'clsx';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Select } from '../Select/Select';
import styles from './Calendar.module.css';

export type CalendarCaptionLayout = 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
export type CalendarNavLayout = 'around' | 'after';
export type CalendarMode = 'single' | 'multiple' | 'range';

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
}

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({
    mode = 'single',
    captionLayout = 'label',
    navLayout = 'after',
    className,
    showOutsideDays = true,
    fixedWeeks = true,
    numberOfMonths = 1,
    reverseMonths = false,
    pagedNavigation = false,
    reverseYears = false,
    footer,
    selected,
    onSelect,
    classNames,
    components,
    ...props
  }, ref) => {
    // Detect RTL direction for line height adjustments
    const isRTL = typeof document !== 'undefined' && 
      (document.dir === 'rtl' || document.documentElement.dir === 'rtl');
    
    // Apply line height style based on text direction
    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    };

    // Arabic weekday labels for RTL support
    const arabicWeekdays = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']; // Sun, Mon, Tue, Wed, Thu, Fri, Sat
    
    // Arabic month names for RTL support
    const arabicMonths = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];

    // Generate month and year options
    const generateMonthOptions = () => {
      const months = isRTL ? arabicMonths : [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return months.map((month, index) => ({
        value: index.toString(),
        label: month
      }));
    };

    const generateYearOptions = () => {
      const currentYear = new Date().getFullYear();
      const startYear = currentYear - 50;
      const endYear = currentYear + 50;
      const years = [];
      
      for (let year = startYear; year <= endYear; year++) {
        years.push({
          value: year.toString(),
          label: year.toString()
        });
      }
      
      return years;
    };

    // Custom formatters for RTL support
    const customFormatters = {
      formatWeekdayName: (date: Date) => {
        if (isRTL) {
          const dayIndex = date.getDay();
          return arabicWeekdays[dayIndex];
        }
        // Default English abbreviated weekday
        return date.toLocaleDateString(undefined, { weekday: 'short' }).slice(0, 2);
      },
      formatMonthCaption: (date: Date) => {
        if (isRTL) {
          const monthIndex = date.getMonth();
          const year = date.getFullYear();
          return `${arabicMonths[monthIndex]} ${year}`;
        }
        // Default English month and year
        return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
      }
    };

    // Custom components for design system integration
    const customComponents = {
      Chevron: (props: { 
        className?: string;
        size?: number;
        disabled?: boolean;
        orientation?: 'left' | 'right' | 'up' | 'down';
      }) => {
        const { orientation = 'left' } = props;
        
        // In RTL mode, reverse the arrow directions
        let ChevronIcon;
        if (isRTL) {
          ChevronIcon = orientation === 'left' ? IconChevronRight : IconChevronLeft;
        } else {
          ChevronIcon = orientation === 'left' ? IconChevronLeft : IconChevronRight;
        }
        
        return (
          <ChevronIcon 
            size={16} 
            className={styles.chevron}
          />
        );
      },
      MonthsDropdown: (props: { 
        value?: number;
        onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
        name?: string;
        'aria-label'?: string;
      }) => {
        const handleValueChange = (value: string) => {
          if (value && props.onChange) {
            const syntheticEvent = {
              target: {
                value: value,
              },
            } as React.ChangeEvent<HTMLSelectElement>;
            props.onChange(syntheticEvent);
          }
        };

        return (
          <Select
            options={generateMonthOptions()}
            value={props.value?.toString() || ''}
            onValueChange={handleValueChange}
            placeholder="Month"
            hideLabel
size="medium"
            className={styles.monthDropdown}
          />
        );
      },
      YearsDropdown: (props: { 
        value?: number;
        onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
        name?: string;
        'aria-label'?: string;
      }) => {
        const handleValueChange = (value: string) => {
          if (value && props.onChange) {
            const syntheticEvent = {
              target: {
                value: value,
              },
            } as React.ChangeEvent<HTMLSelectElement>;
            props.onChange(syntheticEvent);
          }
        };

        return (
          <Select
            options={generateYearOptions()}
            value={props.value?.toString() || ''}
            onValueChange={handleValueChange}
            placeholder="Year"
            hideLabel
size="medium"
            className={styles.yearDropdown}
          />
        );
      },
      ...components
    };

    // Custom class names for design system styling
    const customClassNames = {
      root: clsx(styles.calendar, className),
      months: styles.months,
      month_wrapper: styles.monthWrapper,
      month: styles.month,
      month_caption: styles.monthCaption,
      caption_label: styles.captionLabel,
      caption_dropdowns: styles.captionDropdowns,
      dropdown_root: styles.dropdownRoot,
      dropdown: styles.dropdown,
      vhidden: styles.vhidden,
      button_previous: styles.buttonPrevious,
      button_next: styles.buttonNext,
      nav: styles.nav,
      weekdays: styles.weekdays,
      weekday: styles.weekday,
      week: styles.week,
      day: styles.day,
      day_button: styles.dayButton,
      selected: styles.selected,
      today: styles.today,
      outside: styles.outside,
      disabled: styles.disabled,
      hidden: styles.hidden,
      range_start: styles.rangeStart,
      range_end: styles.rangeEnd,
      range_middle: styles.rangeMiddle,
      footer: styles.footer,
      ...classNames
    };

    // State for custom dropdown navigation
    const [currentMonth, setCurrentMonth] = useState(() => {
      if (selected) {
        if (selected instanceof Date) return selected;
        if (Array.isArray(selected) && selected.length > 0) return selected[0];
        if (typeof selected === 'object' && selected.from) return selected.from;
      }
      return new Date();
    });

    // Custom navigation handlers
    const handlePreviousMonth = () => {
      setCurrentMonth(prev => {
        const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
        return newDate;
      });
    };

    const handleNextMonth = () => {
      setCurrentMonth(prev => {
        const newDate = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
        return newDate;
      });
    };

    const handleMonthChange = (monthValue: string) => {
      if (monthValue) {
        const newMonth = parseInt(monthValue);
        setCurrentMonth(prev => new Date(prev.getFullYear(), newMonth, 1));
      }
    };

    const handleYearChange = (yearValue: string) => {
      if (yearValue) {
        const newYear = parseInt(yearValue);
        setCurrentMonth(prev => new Date(newYear, prev.getMonth(), 1));
      }
    };

    // For dropdown or label layouts, create custom header with proper grouping
    if (captionLayout === 'dropdown' || captionLayout === 'label') {
      return (
        <div ref={ref} style={lineHeightStyle} className={clsx(styles.calendar, className)}>
          {/* Custom Header with Grouped Navigation and Content */}
          <div className={styles.customHeader}>
            {numberOfMonths === 1 ? (
              // Single month: Show full controls (dropdown or label)
              captionLayout === 'dropdown' ? (
                <>
                  <button 
                    className={styles.buttonPrevious}
                    onClick={handlePreviousMonth}
                    type="button"
                    aria-label="Previous month"
                  >
                    {isRTL ? (
                      <IconChevronRight size={16} className={styles.chevron} />
                    ) : (
                      <IconChevronLeft size={16} className={styles.chevron} />
                    )}
                  </button>
                  
                  <div className={styles.dropdownGroup}>
                    <Select
                      options={generateMonthOptions()}
                      value={currentMonth.getMonth().toString()}
                      onValueChange={handleMonthChange}
                      placeholder="Month"
                      hideLabel
                      size="medium"
                      className={styles.monthDropdown}
                    />
                    <Select
                      options={generateYearOptions()}
                      value={currentMonth.getFullYear().toString()}
                      onValueChange={handleYearChange}
                      placeholder="Year"
                      hideLabel
                      size="medium"
                      className={styles.yearDropdown}
                    />
                  </div>
                  
                  <button 
                    className={styles.buttonNext}
                    onClick={handleNextMonth}
                    type="button"
                    aria-label="Next month"
                  >
                    {isRTL ? (
                      <IconChevronLeft size={16} className={styles.chevron} />
                    ) : (
                      <IconChevronRight size={16} className={styles.chevron} />
                    )}
                  </button>
                </>
              ) : (
                /* Label layout with grouped navigation */
                <div className={styles.labelGroup}>
                  <button 
                    className={styles.buttonPrevious}
                    onClick={handlePreviousMonth}
                    type="button"
                    aria-label="Previous month"
                  >
                    {isRTL ? (
                      <IconChevronRight size={16} className={styles.chevron} />
                    ) : (
                      <IconChevronLeft size={16} className={styles.chevron} />
                    )}
                  </button>
                  
                  <h2 className={styles.captionLabel} style={lineHeightStyle}>
                    {isRTL 
                      ? `${arabicMonths[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`
                      : currentMonth.toLocaleDateString(undefined, { 
                          month: 'long', 
                          year: 'numeric' 
                        })
                    }
                  </h2>
                  
                  <button 
                    className={styles.buttonNext}
                    onClick={handleNextMonth}
                    type="button"
                    aria-label="Next month"
                  >
                    {isRTL ? (
                      <IconChevronLeft size={16} className={styles.chevron} />
                    ) : (
                      <IconChevronRight size={16} className={styles.chevron} />
                    )}
                  </button>
                </div>
              )
            ) : (
              // Multiple months: Show navigation arrows with month labels
              <div className={styles.labelGroup}>
                <button
                  className={styles.buttonPrevious}
                  onClick={handlePreviousMonth}
                  type="button"
                  aria-label="Previous month"
                >
                  {isRTL ? (
                    <IconChevronRight size={16} className={styles.chevron} />
                  ) : (
                    <IconChevronLeft size={16} className={styles.chevron} />
                  )}
                </button>

                {/* Month labels for multiple months */}
                <div className={styles.monthLabelsGroup}>
                  {Array.from({ length: numberOfMonths }, (_, i) => {
                    const monthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + i, 1);
                    return (
                      <h2 key={i} className={styles.captionLabel} style={lineHeightStyle}>
                        {isRTL
                          ? `${arabicMonths[monthDate.getMonth()]} ${monthDate.getFullYear()}`
                          : monthDate.toLocaleDateString(undefined, {
                              month: 'long',
                              year: 'numeric'
                            })
                        }
                      </h2>
                    );
                  })}
                </div>

                <button
                  className={styles.buttonNext}
                  onClick={handleNextMonth}
                  type="button"
                  aria-label="Next month"
                >
                  {isRTL ? (
                    <IconChevronLeft size={16} className={styles.chevron} />
                  ) : (
                    <IconChevronRight size={16} className={styles.chevron} />
                  )}
                </button>
              </div>
            )}
          </div>
          
          {/* DayPicker without caption and navigation */}
          <DayPicker
            mode={mode as any}
            captionLayout="label"
            showOutsideDays={showOutsideDays}
            fixedWeeks={fixedWeeks}
            numberOfMonths={numberOfMonths}
            reverseMonths={reverseMonths}
            pagedNavigation={pagedNavigation}
            footer={footer}
            selected={selected as any}
            onSelect={onSelect as any}
            month={currentMonth}
            formatters={customFormatters}
            classNames={{
              ...customClassNames,
              month_caption: styles.hiddenCaption, // Always hide captions since we have custom header
              nav: styles.hiddenNav, // Always hide the default navigation
            }}
            components={{
              ...customComponents,
              MonthCaption: () => <></>, // Always hide captions since we have custom header
              Nav: () => <></>, // Always remove navigation
            }}
            dir={isRTL ? 'rtl' : 'ltr'}
            {...props}
          />
        </div>
      );
    }

    // Default layout for non-dropdown cases
    return (
      <div ref={ref} style={lineHeightStyle}>
        <DayPicker
          mode={mode as any}
          captionLayout={captionLayout as any}
          navLayout={navLayout}
          selected={selected as any}
          onSelect={onSelect as any}
          showOutsideDays={showOutsideDays}
          fixedWeeks={fixedWeeks}
          numberOfMonths={numberOfMonths}
          reverseMonths={reverseMonths}
          pagedNavigation={pagedNavigation}
          footer={footer}
          formatters={customFormatters}
          classNames={customClassNames}
          components={customComponents}
          dir={isRTL ? 'rtl' : 'ltr'}
          {...props}
        />
      </div>
    );
  }
);

Calendar.displayName = 'Calendar';

// Export calendar modes for documentation
export const calendarModes = ['single', 'multiple', 'range'] as const;
export const calendarCaptionLayouts = ['label', 'dropdown', 'dropdown-months', 'dropdown-years'] as const;
export const calendarNavLayouts = ['around', 'after'] as const;