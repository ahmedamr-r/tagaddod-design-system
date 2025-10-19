import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { IconSearch, IconAdjustmentsHorizontal, IconFileExport } from '@tabler/icons-react';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { TextInput } from '../TextInput';
import styles from './Table.module.css';
import { TableHeaderProps } from './types';

/**
 * Debounced Search Input Component
 * Provides smooth search experience for both server-side and client-side data
 */
interface DebouncedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
  minLength?: number;
  size?: 'xsmall' | 'medium' | 'large';
  className?: string;
}

const DebouncedSearchInput: React.FC<DebouncedSearchInputProps> = ({
  value,
  onChange,
  placeholder,
  debounceMs = 300,
  minLength = 0,
  size = 'medium',
  className
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Sync local value with prop value when it changes externally
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Handle input change with debouncing
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);

    // Clear existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set new timeout for debounced callback
    const newTimeoutId = setTimeout(() => {
      // Only trigger onChange if value meets minimum length requirement
      // or if value is empty (to clear search)
      if (newValue.length >= minLength || newValue.length === 0) {
        onChange(newValue);
      }
    }, debounceMs);

    setTimeoutId(newTimeoutId);
  }, [onChange, debounceMs, minLength, timeoutId]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <TextInput
      size={size}
      placeholder={placeholder}
      value={localValue}
      onChange={handleInputChange}
      prefix={<IconSearch size={16} />}
      hideLabel
      fullWidth
      className={className}
      isSearchInput={true}
      onEnterPress={(_, value) => {
        // Immediately trigger search on Enter press
        if (value.length >= minLength || value.length === 0) {
          onChange(value);
        }
      }}
    />
  );
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  badge,
  showSearch = true,
  showFilters = true,
  showExport = false,
  searchQuery = '',
  onSearchChange,
  searchConfig,
  onFilterClick,
  onExport,
  className = '',
  isFilterBarVisible = false,
}) => {
  // Detect RTL for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  const handleFilterClick = () => {
    onFilterClick?.();
  };

  return (
    <div className={clsx(styles.tableHeader, className)}>
      <div className={styles.tableHeaderTitle}>
        <div className={styles.titleContainer}>
          {title && (
            <h3 className={styles.title} style={lineHeightStyle}>
              {title}
              {badge !== undefined && badge !== null && (
                <Badge tone="default" className={styles.titleBadge}>
                  {badge}
                </Badge>
              )}
            </h3>
          )}
        </div>
        
        <div className={styles.tableHeaderActions}>
          {showSearch && (
            <div className={styles.searchWrapper}>
              <DebouncedSearchInput
                value={searchQuery || ''}
                onChange={(value) => onSearchChange?.(value)}
                placeholder={
                  searchConfig?.placeholder ||
                  (isRTL ? "ابحث باسم العنصر أو معرّفه..." : "Search by item name or ID...")
                }
                debounceMs={
                  searchConfig?.debounceMs ||
                  (searchConfig?.serverSide ? 500 : 300)
                }
                minLength={searchConfig?.minLength || 0}
                size="medium"
              />
            </div>
          )}
          
          {showFilters && (
            <Button
              variant="outlined"
              tone="neutral"
              onClick={handleFilterClick}
              prefixIcon={<IconAdjustmentsHorizontal size={16} />}
              size="medium"
              className={isFilterBarVisible ? styles.filterButtonActive : ''}
            >
              {isRTL ? "تصفية" : "Filters"}
            </Button>
          )}
          
          {showExport && (
            <Button
              variant="outlined"
              tone="default"
              onClick={onExport}
              prefixIcon={<IconFileExport size={16} />}
              size="medium"
            >
              {isRTL ? "تصدير CSV" : "Export CSV"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
