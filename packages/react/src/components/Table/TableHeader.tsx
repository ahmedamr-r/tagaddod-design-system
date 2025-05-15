import React, { useState } from 'react';
import clsx from 'clsx';
import { IconSearch, IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Popover } from '../Popover';
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
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Detect RTL for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
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
                <Badge tone="secondary" className={styles.titleBadge}>
                  {badge}
                </Badge>
              )}
            </h3>
          )}
        </div>
        
        <div className={styles.tableHeaderActions}>
          {showSearch && (
            <div className={styles.searchWrapper}>
              <div className={styles.searchInputWrapper}>
                <IconSearch size={16} className={styles.searchIcon} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  placeholder={isRTL ? "ابحث باسم العنصر أو معرّفه..." : "Search by item name or ID..."}
                  className={styles.searchInput}
                  style={lineHeightStyle}
                />
              </div>
            </div>
          )}
          
          {showFilters && (
            <Popover
              open={isFilterOpen}
              onOpenChange={setIsFilterOpen}
              trigger={
                <Button 
                  variant="tertiary" 
                  tone="neutral" 
                  onClick={handleFilterClick}
                  prefixIcon={<IconAdjustmentsHorizontal size={16} />}
                >
                  {isRTL ? "تصفية" : "Filters"}
                </Button>
              }
              content={
                <div className={styles.filterPopoverContent}>
                  {/* Filter content goes here */}
                  <p style={lineHeightStyle}>Filter options</p>
                </div>
              }
            />
          )}
          
          {showExport && (
            <Button 
              variant="tertiary" 
              tone="neutral" 
              onClick={onExport}
            >
              {isRTL ? "تصدير CSV" : "Export CSV"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
