import React from 'react';
import clsx from 'clsx';
import { IconSearch, IconAdjustmentsHorizontal, IconFileExport } from '@tabler/icons-react';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { TextInput } from '../TextInput';
import styles from './Table.module.css';
import { TableHeaderProps } from './types';

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  badge,
  showSearch = true,
  showFilters = true,
  showExport = false,
  searchQuery = '',
  onSearchChange,
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
              <TextInput
                size="large"
                placeholder={isRTL ? "ابحث باسم العنصر أو معرّفه..." : "Search by item name or ID..."}
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                prefix={<IconSearch size={16} />}
                hideLabel
                fullWidth
              />
            </div>
          )}
          
          {showFilters && (
            <Button 
              variant="tertiary" 
              tone={isFilterBarVisible ? "neutral" : "neutral"}
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
              variant="tertiary" 
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
