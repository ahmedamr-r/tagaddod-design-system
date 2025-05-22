import React, { useState } from 'react';
import clsx from 'clsx';
import { IconX, IconChevronDown, IconPlus } from '@tabler/icons-react';
import { Popover } from '../Popover';
import styles from './Table.module.css';
import { FilterItemProps } from './types';

export const FilterItem: React.FC<FilterItemProps> = ({
  name,
  label,
  value,
  options,
  onChange,
  removable = true,
  onRemove,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Detect RTL for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Find the label of the current value
  const selectedOption = options.find(option => option.value === value);
  const selectedLabel = selectedOption?.label || '';
  
  // Determine if the filter is selected
  const isSelected = value !== undefined;

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent dropdown from opening
    onRemove?.(name);
  };
  
  // Handle clicking on the plus/X icon
  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent dropdown from opening
    
    if (isSelected && onRemove) {
      // If selected and removable, call remove handler
      onRemove(name);
    } else {
      // If not selected, open the dropdown
      setIsOpen(true);
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

  const filterContent = (
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

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
      side="bottom"
      align="start"
      content={filterContent}
      contentProps={{ 
        style: { zIndex: 100 } // Ensure proper z-index
      }}
    >
      {filterTrigger}
    </Popover>
  );
};
