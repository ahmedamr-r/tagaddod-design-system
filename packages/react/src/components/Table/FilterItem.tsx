import React, { useState, useCallback, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { IconChevronDown, IconPlus } from '@tabler/icons-react';
import { Popover } from '../Popover';
import { Listbox } from '../Listbox';
import { RangeSlider } from '../RangeSlider';
import { TextInput } from '../TextInput';
import { Checkbox } from '../Checkbox';
import { RadioGroup, RadioButtonItem } from '../RadioButton';
import styles from './Table.module.css';
import { FilterItemProps } from './types';

// Custom debounce hook for performance optimization
const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback((...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  const cancelDebounce = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { debouncedCallback, cancelDebounce };
};

export const FilterItem: React.FC<FilterItemProps> = ({
  name,
  label,
  value,
  type = 'select',
  options = [],
  rangeConfig,
  currentFilters = [],
  onChange,
  removable = true,
  onRemove,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Local state for range slider to show immediate visual feedback
  const [localRangeValue, setLocalRangeValue] = useState<number[] | null>(null);
  
  // Detect RTL for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Debounced filter update (500ms delay for optimal UX)
  const { debouncedCallback: debouncedFilterUpdate, cancelDebounce } = useDebounce(
    (filterName: string, filterValue: any) => {
      onChange(filterName, filterValue);
    },
    500
  );

  // Get current range value (local state takes priority for immediate feedback)
  const getCurrentRangeValue = () => {
    if (type === 'rangeSlider' && rangeConfig) {
      return localRangeValue || (value && Array.isArray(value) ? value : [rangeConfig.min, rangeConfig.max]);
    }
    return [];
  };

  // Handle range slider changes with debounced updates
  const handleRangeChange = useCallback((newValue: number[]) => {
    // Immediate visual feedback
    setLocalRangeValue(newValue);
    
    // Debounced filter update
    debouncedFilterUpdate(name, newValue);
  }, [name, debouncedFilterUpdate]);



  // Handle text input changes with immediate local updates and debounced filter
  const handleRangeTextChange = useCallback((index: 0 | 1, newValue: string) => {
    if (!rangeConfig) return;
    
    const currentValue = getCurrentRangeValue();
    const numericValue = Math.max(rangeConfig.min, Math.min(rangeConfig.max, parseInt(newValue) || (index === 0 ? rangeConfig.min : rangeConfig.max)));
    const newRangeValue = [...currentValue];
    newRangeValue[index] = numericValue;
    
    // Immediate visual feedback
    setLocalRangeValue(newRangeValue);
    
    // Debounced filter update
    debouncedFilterUpdate(name, newRangeValue);
  }, [name, rangeConfig, debouncedFilterUpdate, getCurrentRangeValue]);

  // Sync local state when external value changes
  useEffect(() => {
    if (type === 'rangeSlider' && value && Array.isArray(value)) {
      setLocalRangeValue(value);
    }
  }, [type, value]);

  // Determine if the filter is selected based on type
  const isSelected = (() => {
    switch (type) {
      case 'rangeSlider':
        const currentValue = getCurrentRangeValue();
        return currentValue.length > 0 && (currentValue[0] > (rangeConfig?.min || 0) || currentValue[1] < (rangeConfig?.max || 100));
      case 'currentFilters':
        return currentFilters.length > 0;
      case 'popoverListbox':
        return value !== undefined && value !== '';
      case 'checkboxGroup':
        return Array.isArray(value) && value.length > 0;
      case 'radioGroup':
        return value !== undefined && value !== '';
      case 'select':
      default:
        return value !== undefined;
    }
  })();

  // Get display value based on type
  const getDisplayValue = () => {
    switch (type) {
      case 'rangeSlider':
        const displayValue = getCurrentRangeValue();
        if (displayValue.length === 0) return '';
        const formatValue = rangeConfig?.formatValue || ((val: number) => val.toString());
        const prefix = rangeConfig?.prefix || '';
        const suffix = rangeConfig?.suffix || '';
        return `${prefix}${formatValue(displayValue[0])} - ${prefix}${formatValue(displayValue[1])}${suffix}`;
      case 'currentFilters':
        return `${currentFilters.length} filter${currentFilters.length !== 1 ? 's' : ''}`;
      case 'popoverListbox':
        const selectedOption = options.find(option => option.value === value);
        return selectedOption?.label || '';
      case 'checkboxGroup':
        if (!Array.isArray(value) || value.length === 0) return '';
        return value.length === 1 ? 
          `${value.length} selected` : 
          `${value.length} selected`;
      case 'radioGroup':
        const selectedRadioOption = options.find(option => option.value === value);
        return selectedRadioOption?.label || '';
      case 'select':
      default:
        const selectedSelectOption = options.find(option => option.value === value);
        return selectedSelectOption?.label || '';
    }
  };

  const selectedLabel = getDisplayValue();
  
  // Handle clicking on the plus/X icon
  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent dropdown from opening
    
    if (isSelected && onRemove && removable) {
      // Cancel any pending debounced updates
      cancelDebounce();
      
      // Clear local state
      if (type === 'rangeSlider') {
        setLocalRangeValue(null);
      }
      
      // If selected, removable, and onRemove handler exists, call remove handler
      onRemove(name);
    } else {
      // If not selected, open the dropdown
      setIsOpen(true);
    }
  };

  // Render filter content based on type
  const renderFilterContent = () => {
    switch (type) {
      case 'rangeSlider':
        if (!rangeConfig) return null;
        
        const currentValue = getCurrentRangeValue();
        
        return (
          <div style={{ 
            padding: '0',
            margin: '0',
            width: '320px'
          }}>
            <div style={{ padding: '16px' }}>
              <h4 style={{ 
                margin: '0 0 12px 0', 
                fontSize: '14px', 
                fontWeight: 600,
                color: '#212529'
              }}>
                {label}
              </h4>
              <div style={{ marginBottom: '16px' }}>
                <RangeSlider
                  type="dual thumb"
                  label={`${label} range`}
                  prefix={rangeConfig.prefix}
                  suffix={rangeConfig.suffix}
                  value={currentValue}
                  onValueChange={handleRangeChange}
                  min={rangeConfig.min}
                  max={rangeConfig.max}
                  step={rangeConfig.step || 1}
                  formatValue={rangeConfig.formatValue}
                  aria-label={`${label} range selector`}
                />
              </div>
              <div style={{ 
                display: 'flex', 
                gap: '12px',
                alignItems: 'center'
              }}>
                <TextInput
                  label=""
                  placeholder="Min"
                  prefix={rangeConfig.prefix}
                  suffix={rangeConfig.suffix}
                  value={currentValue[0]?.toString() || ''}
                  onChange={(e) => handleRangeTextChange(0, e.target.value)}
                  onBlur={() => {
                    // Apply filter immediately when user leaves text input
                    cancelDebounce();
                    onChange(name, currentValue);
                  }}
                  style={{ flex: 1 }}
                />
                <TextInput
                  label=""
                  placeholder="Max"
                  prefix={rangeConfig.prefix}
                  suffix={rangeConfig.suffix}
                  value={currentValue[1]?.toString() || ''}
                  onChange={(e) => handleRangeTextChange(1, e.target.value)}
                  onBlur={() => {
                    // Apply filter immediately when user leaves text input
                    cancelDebounce();
                    onChange(name, currentValue);
                  }}
                  style={{ flex: 1 }}
                />
              </div>
            </div>
          </div>
        );
      
      case 'currentFilters':
        return (
          <div style={{ 
            padding: '0', 
            margin: '0',
            minWidth: '200px'
          }}>
            <Listbox
              options={currentFilters.length > 0 ? currentFilters.map((filter) => ({
                label: filter.label,
                value: filter.value
              })) : [{
                label: 'No active filters',
                value: 'no-filters',
                disabled: true
              }]}
              selectedValue={[]}
              onSelect={() => {}} // Read-only display
              aria-label="Current active filters"
              inPopover={true}
            />
          </div>
        );
      
      case 'popoverListbox':
        return (
          <div style={{ 
            padding: '0', 
            margin: '0',
            minWidth: '200px'
          }}>
            <Listbox
              options={options}
              selectedValue={value}
              onSelect={(selectedValue) => {
                onChange(name, selectedValue);
                setIsOpen(false);
              }}
              aria-label={`${label} options`}
              inPopover={true}
            />
          </div>
        );
      
      case 'checkboxGroup':
        return (
          <div style={{ 
            padding: '16px',
            margin: '0',
            minWidth: '220px'
          }}>
            <h4 style={{ 
              margin: '0 0 12px 0', 
              fontSize: '14px', 
              fontWeight: 600,
              color: '#212529'
            }}>
              {label}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {options.map((option) => (
                <Checkbox
                  key={option.value?.toString()}
                  label={option.label}
                  checked={Array.isArray(value) && value.includes(option.value)}
                  onCheckedChange={(checked: boolean | 'indeterminate') => {
                    const isChecked = checked === true;
                    const currentValues = Array.isArray(value) ? [...value] : [];
                    if (isChecked) {
                      if (!currentValues.includes(option.value)) {
                        onChange(name, [...currentValues, option.value]);
                      }
                    } else {
                      onChange(name, currentValues.filter(v => v !== option.value));
                    }
                  }}
                />
              ))}
            </div>
          </div>
        );
      
      case 'radioGroup':
        return (
          <div style={{ 
            padding: '16px',
            margin: '0',
            minWidth: '200px'
          }}>
            <h4 style={{ 
              margin: '0 0 12px 0', 
              fontSize: '14px', 
              fontWeight: 600,
              color: '#212529'
            }}>
              {label}
            </h4>
            <RadioGroup
              value={value || ''}
              onValueChange={(selectedValue) => {
                onChange(name, selectedValue);
                setIsOpen(false);
              }}
              aria-label={`${label} options`}
            >
              {options.map((option) => (
                <RadioButtonItem
                  key={option.value?.toString()}
                  value={option.value?.toString() || ''}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </div>
        );
        
      case 'select':
      default:
        return (
          <div className={styles.filterDropdown}>
            {options.map((option) => (
              <div 
                key={option.value?.toString()}
                className={clsx(
                  styles.filterOption,
                  value === option.value && styles.filterOptionSelected
                )}
                onClick={() => {
                  onChange(name, option.value);
                  setIsOpen(false);
                }}
              >
                <span style={lineHeightStyle}>{option.label}</span>
              </div>
            ))}
          </div>
        );
    }
  };

  const filterTrigger = (
    <div className={clsx(
      styles.filterItem,
      isSelected ? styles.filterSelected : styles.filterInitial,
      isOpen && styles.filterPopoverActive
    )}>
      <div className={styles.filterItemContent}>
        <span 
          className={clsx(
            styles.filterPlusIcon,
            isSelected && styles.filterIconClickable,
            isSelected && styles.filterIconRotated
          )}
          onClick={handleIconClick}
          role="button"
          aria-label={isSelected ? "Clear filter" : "Add filter"}
        >
          <IconPlus size={16} />
        </span>
        <span className={clsx(
          styles.filterLabel,
          isSelected && styles.filterLabelSelected
        )} style={lineHeightStyle}>{label}</span>
        {isSelected && (
          <>
            <span className={styles.filterSeparator}>|</span>
            <span className={styles.filterValue} style={lineHeightStyle}>{selectedLabel}</span>
          </>
        )}
        <IconChevronDown 
          size={16} 
          className={clsx(
            styles.filterChevron,
            isOpen && styles.filterChevronActive
          )} 
        />
      </div>
    </div>
  );

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
      side="bottom"
      align="start"
      content={renderFilterContent()}
      contentProps={{ 
        style: { 
          zIndex: 100,
          padding: type === 'rangeSlider' || type === 'currentFilters' ? '0' : undefined,
          margin: type === 'rangeSlider' || type === 'currentFilters' ? '0' : undefined
        }
      }}
    >
      {filterTrigger}
    </Popover>
  );
};
