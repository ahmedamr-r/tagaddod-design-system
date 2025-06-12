import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { IconChevronDown, IconBuilding } from '@tabler/icons-react';
import { Logo } from '../Logo';
import { Popover } from '../Popover';
import styles from './TopBar.module.css';

export type TopBarSize = 'small' | 'medium' | 'large';

// Export constants for consistency with other components
export const topBarSizes = ['small', 'medium', 'large'] as const;

export interface TopBarProps extends React.ComponentPropsWithoutRef<'header'> {
  /**
   * Custom class name for the top bar
   */
  className?: string;
  /**
   * Logo props to pass to the Logo component
   */
  logoProps?: React.ComponentPropsWithoutRef<typeof Logo>;
  /**
   * Whether the logo should be clickable
   * @default false
   */
  logoClickable?: boolean;
  /**
   * Callback when the logo is clicked
   */
  onLogoClick?: () => void;
  /**
   * The selected warehouse name
   * @default "Al Haram Warehouse"
   */
  selectedWarehouse?: string;
  /**
   * List of available warehouses
   */
  warehouses?: string[];
  /**
   * Callback when warehouse selection changes
   */
  onWarehouseChange?: (warehouse: string) => void;
  /**
   * Whether the warehouse selector is disabled
   * @default false
   */
  warehouseDisabled?: boolean;
}

export const TopBar = forwardRef<HTMLElement, TopBarProps>(
  ({ 
    className, 
    logoProps,
    logoClickable = false,
    onLogoClick,
    selectedWarehouse = "Al Haram Warehouse",
    warehouses = ["Al Haram Warehouse", "Main Warehouse", "Secondary Warehouse"],
    onWarehouseChange,
    warehouseDisabled = false,
    ...props 
  }, ref) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    // Detect RTL for line height adjustments
    const isRTL = typeof document !== 'undefined' && 
      (document.dir === 'rtl' || document.documentElement.dir === 'rtl');
    
    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    };

    const handleWarehouseSelect = (warehouse: string) => {
      onWarehouseChange?.(warehouse);
      setIsPopoverOpen(false);
    };

    return (
      <header
        ref={ref}
        className={clsx(styles.topBar, className)}
        style={lineHeightStyle}
        {...props}
      >
        <div className={styles.topBarContent}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <Logo
              size="medium"
              clickable={logoClickable}
              onClick={onLogoClick}
              {...logoProps}
            />
          </div>

          {/* Warehouse Selector Section */}
          <div className={styles.warehouseSection}>
            {!warehouseDisabled ? (
              <Popover
                open={isPopoverOpen}
                onOpenChange={setIsPopoverOpen}
                side="bottom"
                align="end"
                showArrow={false}
                content={
                  <div className={styles.warehouseDropdown}>
                    <div className={styles.warehouseHeader}>
                      <span className={styles.warehouseHeaderText}>Select Warehouse</span>
                    </div>
                    <div className={styles.warehouseList}>
                      {warehouses.map((warehouse) => (
                        <button
                          key={warehouse}
                          className={clsx(
                            styles.warehouseOption,
                            warehouse === selectedWarehouse && styles.warehouseOptionActive
                          )}
                          onClick={() => handleWarehouseSelect(warehouse)}
                          style={lineHeightStyle}
                        >
                          <IconBuilding size={16} className={styles.warehouseOptionIcon} />
                          <span>{warehouse}</span>
                          {warehouse === selectedWarehouse && (
                            <div className={styles.warehouseOptionCheck}>✓</div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                }
              >
                <button 
                  className={styles.warehouseTrigger}
                  style={lineHeightStyle}
                  aria-label={`Select warehouse. Current: ${selectedWarehouse}`}
                >
                  <IconBuilding size={16} className={styles.warehouseIcon} />
                  <span className={styles.warehouseText}>{selectedWarehouse}</span>
                  <IconChevronDown 
                    size={16} 
                    className={clsx(
                      styles.warehouseChevron,
                      isPopoverOpen && styles.warehouseChevronOpen
                    )} 
                  />
                </button>
              </Popover>
            ) : (
              <button 
                className={clsx(styles.warehouseTrigger, styles.warehouseTriggerDisabled)}
                disabled={true}
                style={lineHeightStyle}
                aria-label={`Warehouse selector disabled. Current: ${selectedWarehouse}`}
              >
                <IconBuilding size={16} className={styles.warehouseIcon} />
                <span className={styles.warehouseText}>{selectedWarehouse}</span>
                <IconChevronDown size={16} className={styles.warehouseChevron} />
              </button>
            )}
          </div>
        </div>
      </header>
    );
  }
);

TopBar.displayName = 'TopBar';