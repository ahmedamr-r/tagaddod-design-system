import React, { useState } from 'react';
import clsx from 'clsx';
import { IconX, IconChevronDown } from '@tabler/icons-react';
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

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.(name);
  };

  const filterTrigger = (
    <div className={styles.filterItem}>
      <div className={styles.filterItemContent}>
        <span className={styles.filterLabel} style={lineHeightStyle}>{label}</span>
        {value !== undefined && (
          <>
            <span className={styles.filterSeparator}>|</span>
            <span className={styles.filterValue} style={lineHeightStyle}>{selectedLabel}</span>
          </>
        )}
        <IconChevronDown size={16} className={styles.filterChevron} />
      </div>
      {removable && onRemove && (
        <button 
          className={styles.filterRemoveButton} 
          onClick={handleRemove}
          aria-label="Remove filter"
        >
          <IconX size={12} />
        </button>
      )}
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
    >
      {filterTrigger}
    </Popover>
  );
};
