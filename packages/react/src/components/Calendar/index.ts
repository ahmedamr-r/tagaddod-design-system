/**
 * Calendar Component Exports
 * Provides a fully-featured calendar component with RTL support,
 * Arabic translations, analytics capabilities, and navigation restrictions.
 *
 * Features:
 * - minDate/maxDate props for restricting navigation
 * - Automatic button disabling when limits are reached
 * - Complete Arabic translations and RTL layout
 * - Date validation with graceful fallbacks
 * - Analytics variant with preset panels
 */

// Main component exports
export { Calendar } from './Calendar';

// Type exports for TypeScript users
export type {
  CalendarProps,
  CalendarMode,
  CalendarVariant,
  CalendarCaptionLayout,
  CalendarNavLayout,
  DateRangeType,
  PeriodType,
  DatePreset,
  DateRangeConfig
} from './Calendar';

// Constants and helper exports for customization
export {
  // Constants
  CALENDAR_CONFIG,
  CALENDAR_TRANSLATIONS,
  PRESET_LABELS,
  RANGE_TYPE_LABELS,
  PERIOD_TYPE_LABELS,
  WEEKDAY_NAMES,
  ARABIC_GREGORIAN_MONTHS,

  // Helper functions
  getCalendarText,
  getPresetLabel,
  getRangeTypeLabel,
  getPeriodTypeLabel,
  formatMonthYear,
  getWeekdayNames,

  // Types
  type CalendarLocale,
  type WeekdayFormat,
  type RangeTypeKey,
  type PeriodTypeKey,
  type PresetKey
} from './Calendar.constants';

// Option generators for dropdowns
export {
  getRangeTypeOptions,
  getPeriodTypeOptions,
  RANGE_TYPE_OPTIONS,
  PERIOD_TYPE_OPTIONS,
  calendarModes,
  calendarCaptionLayouts,
  calendarNavLayouts
} from './Calendar';

// Default export for convenience - import and re-export to avoid undefined reference
import { Calendar as CalendarComponent } from './Calendar';
export default CalendarComponent;