/**
 * Calendar Component Constants and Translations
 * This file contains all constants, translations, and configuration
 * for the Calendar component to make it easily portable and maintainable.
 */

// Arabic Gregorian month names (not Hijri/Islamic calendar)
export const ARABIC_GREGORIAN_MONTHS = [
  'يناير',    // January
  'فبراير',   // February
  'مارس',     // March
  'أبريل',    // April
  'مايو',     // May
  'يونيو',    // June
  'يوليو',    // July
  'أغسطس',    // August
  'سبتمبر',   // September
  'أكتوبر',   // October
  'نوفمبر',   // November
  'ديسمبر'    // December
] as const;

// Weekday translations
export const WEEKDAY_NAMES = {
  en: {
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  ar: {
    short: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],  // أحد، إثنين، ثلاثاء، أربعاء، خميس، جمعة، سبت
    long: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
  }
} as const;

// UI Text Translations
export const CALENDAR_TRANSLATIONS = {
  presets: {
    en: 'Presets',
    ar: 'الإعدادات'
  },
  custom: {
    en: 'Custom',
    ar: 'مخصص'
  },
  apply: {
    en: 'Apply',
    ar: 'تطبيق'
  },
  cancel: {
    en: 'Cancel',
    ar: 'إلغاء'
  },
  and: {
    en: 'and',
    ar: 'و'
  },
  completeDaysAndToday: {
    en: 'complete days and today',
    ar: 'أيام كاملة واليوم'
  },
  previousMonth: {
    en: 'Previous month',
    ar: 'الشهر السابق'
  },
  nextMonth: {
    en: 'Next month',
    ar: 'الشهر التالي'
  },
  startDate: {
    en: 'Start date',
    ar: 'تاريخ البداية'
  },
  endDate: {
    en: 'End date',
    ar: 'تاريخ النهاية'
  },
  sinceDate: {
    en: 'Since date',
    ar: 'منذ تاريخ'
  }
} as const;

// Preset Labels Translations
export const PRESET_LABELS = {
  last30: {
    en: 'Last 30 Days',
    ar: 'آخر ٣٠ يومًا'
  },
  last60: {
    en: 'Last 60 Days',
    ar: 'آخر ٦٠ يومًا'
  },
  last90: {
    en: 'Last 90 Days',
    ar: 'آخر ٩٠ يومًا'
  },
  thisWeek: {
    en: 'This Week',
    ar: 'هذا الأسبوع'
  },
  thisMonth: {
    en: 'This Month',
    ar: 'هذا الشهر'
  },
  thisQuarter: {
    en: 'This Quarter',
    ar: 'هذا الربع'
  },
  thisYear: {
    en: 'This Year',
    ar: 'هذه السنة'
  }
} as const;

// Range Type Options
export const RANGE_TYPE_LABELS = {
  between: {
    en: 'Between',
    ar: 'بين'
  },
  last: {
    en: 'Last',
    ar: 'آخر'
  },
  since: {
    en: 'Since',
    ar: 'منذ'
  },
  this: {
    en: 'This',
    ar: 'هذا'
  }
} as const;

// Period Type Options
export const PERIOD_TYPE_LABELS = {
  week: {
    en: 'Week',
    ar: 'الأسبوع'
  },
  month: {
    en: 'Month',
    ar: 'الشهر'
  },
  quarter: {
    en: 'Quarter',
    ar: 'الربع'
  },
  year: {
    en: 'Year',
    ar: 'السنة'
  }
} as const;

// Default configuration
export const CALENDAR_CONFIG = {
  DEFAULT_CELL_SIZE: 'var(--t-size-1000)', // 40px
  DEFAULT_NUMBER_OF_MONTHS: 1,
  DEFAULT_ANALYTICS_MONTHS: 2,
  DATE_FORMAT: 'dd/MM/yyyy',
  DATE_FORMAT_PATTERNS: [
    'dd/MM/yyyy',
    'dd/MM/yy',
    'd/M/yyyy',
    'd/M/yy',
    'dd-MM-yyyy',
    'yyyy-MM-dd'
  ]
} as const;

// Helper function to get translated text
export function getCalendarText(
  key: keyof typeof CALENDAR_TRANSLATIONS,
  isRTL: boolean
): string {
  return CALENDAR_TRANSLATIONS[key][isRTL ? 'ar' : 'en'];
}

// Helper function to get preset label
export function getPresetLabel(
  key: keyof typeof PRESET_LABELS,
  isRTL: boolean
): string {
  return PRESET_LABELS[key][isRTL ? 'ar' : 'en'];
}

// Helper function to get range type label
export function getRangeTypeLabel(
  key: keyof typeof RANGE_TYPE_LABELS,
  isRTL: boolean
): string {
  return RANGE_TYPE_LABELS[key][isRTL ? 'ar' : 'en'];
}

// Helper function to get period type label
export function getPeriodTypeLabel(
  key: keyof typeof PERIOD_TYPE_LABELS,
  isRTL: boolean
): string {
  return PERIOD_TYPE_LABELS[key][isRTL ? 'ar' : 'en'];
}

// Helper function to format month with Arabic Gregorian names
export function formatMonthYear(date: Date, isRTL: boolean): string {
  if (isRTL) {
    const month = ARABIC_GREGORIAN_MONTHS[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  }
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

// Helper function to get weekday names
export function getWeekdayNames(isRTL: boolean, format: 'short' | 'long' = 'short'): string[] {
  return WEEKDAY_NAMES[isRTL ? 'ar' : 'en'][format];
}

// Export types for better TypeScript support
export type CalendarLocale = 'en' | 'ar';
export type WeekdayFormat = 'short' | 'long';
export type RangeTypeKey = keyof typeof RANGE_TYPE_LABELS;
export type PeriodTypeKey = keyof typeof PERIOD_TYPE_LABELS;
export type PresetKey = keyof typeof PRESET_LABELS;