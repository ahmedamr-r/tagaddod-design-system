/**
 * TopBar Component
 * 
 * A comprehensive top navigation bar component with TAGADDOD logo and highly customizable dropdown functionality.
 * 
 * ## Key Features
 * 
 * ### Visual & Interactive
 * - TAGADDOD logo on the left side with optional click functionality
 * - Dropdown selector with fully customizable Popover and Listbox components
 * - Mobile hamburger menu with smooth icon transitions (hamburger ↔ X)
 * - Smooth animations for mobile sidebar with slide-in/out transitions
 * - RTL support for Arabic layouts with proper text and layout direction
 * 
 * ### Mobile Experience
 * - Responsive design with mobile-optimized dimensions
 * - Overlay sidebar that slides underneath TopBar (not over it)
 * - Backdrop overlay with smooth fade transitions
 * - Auto-close behavior when menu items are selected
 * 
 * ### Customization Options
 * 
 * #### Listbox Customization
 * - `customListboxOptions` - Override default warehouse + logout options with full styling control
 *   - Use `labelClassName` and `labelStyle` for custom label styling (e.g., red logout text)
 *   - Use `prefixClassName` for custom prefix/icon styling
 *   - Use `className` for overall option container styling
 * - `listboxProps` - Pass additional props to the listbox component
 * - `listboxClassName` - Custom CSS classes for styling
 * - `onCustomListboxSelect` - Custom selection handler
 * 
 * #### Popover Customization
 * - `popoverSide` - Positioning (top/right/bottom/left)
 * - `popoverAlign` - Alignment (start/center/end)
 * - `popoverMargin` - Custom margin in pixels
 * - `showPopoverArrow` - Toggle arrow visibility
 * - `popoverProps` - Additional popover properties
 * 
 * #### Styling Customization
 * - `warehouseTriggerClassName` - Custom trigger button styling
 * - `hamburgerButtonClassName` - Custom hamburger button styling
 * - `warehouseIcon` - Custom icon for the dropdown trigger
 * - `warehouseIconSize` - Icon size customization
 * 
 * #### Behavior Customization
 * - `showLogoutOption` - Toggle logout option visibility
 * - `logoutText` - Custom logout text (supports RTL)
 * - `showHamburgerMenu` - Toggle mobile menu visibility
 * 
 * ### Design System Integration
 * - Design tokens for colors, spacing, typography, and transitions
 * - Surface background token (`--t-color-surface-primary`) for TopBar
 * - Critical styling tokens (`--t-color-text-critical`, `--t-color-icon-critical`) for logout
 * - 4px margin on Popover using `--t-space-100` token
 * - Smooth transitions using design system easing curves
 * 
 * ### Recent Updates
 * - ✅ Mobile Sidebar Transitions - Smooth slide-in/out animations (300ms cubic-bezier)
 * - ✅ Proper Positioning - Sidebar opens underneath TopBar instead of covering it
 * - ✅ Icon Toggle - Hamburger icon changes to X when sidebar is open
 * - ✅ Full Customization - Complete listbox, popover, and styling customization
 * - ✅ Backdrop Overlay - Dark overlay with fade transitions
 * - ✅ RTL Support - Proper behavior for right-to-left layouts
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <TopBar
 *   selectedWarehouse="Main Warehouse"
 *   warehouses={["Main Warehouse", "Secondary Warehouse"]}
 *   onWarehouseChange={setSelectedWarehouse}
 *   onLogoutClick={handleLogout}
 * />
 * 
 * // With custom listbox options and styling
 * <TopBar
 *   customListboxOptions={[
 *     { label: "Dashboard", value: "dashboard", prefix: <IconHome /> },
 *     { label: "Settings", value: "settings", prefix: <IconSettings /> },
 *     { 
 *       label: "Logout", 
 *       value: "logout", 
 *       prefix: <IconLogout />,
 *       labelClassName: "text-red-500", // Custom red styling
 *       prefixClassName: "text-red-500"
 *     }
 *   ]}
 *   onCustomListboxSelect={(value, option) => handleSelection(value, option)}
 *   warehouseIcon={<CustomIcon />}
 * />
 * 
 * // With popover customization
 * <TopBar
 *   popoverSide="top"
 *   popoverAlign="center"
 *   showPopoverArrow={true}
 *   popoverMargin={8}
 * />
 * ```
 */

import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { IconChevronDown, IconBuilding, IconMenu2, IconLogout, IconX } from '@tabler/icons-react';
import { Logo } from '../Logo';
import { Popover, PopoverMargin } from '../Popover';
import { Separator } from '../Separator';
import { Button } from '../Button';
import styles from './TopBar.module.css';

export type TopBarSize = 'small' | 'medium' | 'large';

// Export constants for consistency with other components
export const topBarSizes = ['small', 'medium', 'large'] as const;

// Define types for better customization
export interface ListboxOption {
  label: string;
  value: string | number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  customContent?: React.ReactNode;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  prefixClassName?: string;
}

export interface TopBarProps extends React.ComponentPropsWithoutRef<'header'> {
  /**
   * Custom class name for the top bar
   */
  className?: string;

  /* ===== LOGO CONFIGURATION ===== */
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

  /* ===== CENTER SECTION CONFIGURATION ===== */
  /**
   * Content to display in the center section (typically TextInput/search)
   */
  centerContent?: React.ReactNode;
  /**
   * Whether to show the center section
   * @default false
   */
  showCenterSection?: boolean;
  /**
   * Minimum width for the center section
   * @default "16.25rem" (260px)
   */
  centerSectionMinWidth?: string;
  /**
   * Maximum width for the center section
   * @default "50rem" (800px)
   */
  centerSectionMaxWidth?: string;

  /* ===== END SECTION CONFIGURATION ===== */
  /**
   * Content to display in the end section (replaces warehouse dropdown if provided)
   */
  endContent?: React.ReactNode;
  /**
   * Whether to show the end section
   * @default true
   */
  showEndSection?: boolean;
  
  /* ===== WAREHOUSE SELECTOR CONFIGURATION ===== */
  /**
   * The selected warehouse name
   * @default "Al Haram Warehouse"
   */
  selectedWarehouse?: string;
  /**
   * List of available warehouses
   * @default ["Al Haram Warehouse", "Main Warehouse", "Secondary Warehouse"]
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
  /**
   * Whether to show the logout option in the dropdown
   * @default true
   */
  showLogoutOption?: boolean;
  /**
   * Custom text for the logout option (supports RTL)
   * @default "Logout" (English) / "تسجيل الخروج" (Arabic)
   */
  logoutText?: string;
  /**
   * Callback when logout is clicked
   */
  onLogoutClick?: () => void;
  
  /* ===== LISTBOX CUSTOMIZATION ===== */
  /**
   * Custom listbox options to override default warehouse + logout options
   */
  customListboxOptions?: ListboxOption[];
  /**
   * Additional props to pass to the listbox component
   */
  listboxProps?: Record<string, any>;
  /**
   * Custom CSS class for the listbox container
   */
  listboxClassName?: string;
  /**
   * Custom callback for handling all listbox selections
   * If provided, overrides warehouse and logout handlers
   */
  onCustomListboxSelect?: (value: string | number, option: ListboxOption) => void;
  
  /* ===== POPOVER CUSTOMIZATION ===== */
  /**
   * Popover positioning side
   * @default "bottom"
   */
  popoverSide?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * Popover alignment
   * @default "end"
   */
  popoverAlign?: 'start' | 'center' | 'end';
  /**
   * Popover margin - can be a preset size or custom pixel value
   * @default 'medium'
   */
  popoverMargin?: PopoverMargin;
  /**
   * Whether to show popover arrow
   * @default false
   */
  showPopoverArrow?: boolean;
  /**
   * Additional props to pass to the Popover component
   */
  popoverProps?: Record<string, any>;
  
  /* ===== MOBILE NAVIGATION ===== */
  /**
   * Whether to show the hamburger menu on small devices
   * @default true
   */
  showHamburgerMenu?: boolean;
  /**
   * Whether the mobile sidebar is currently open (controls icon state)
   * @default false
   */
  isMobileSidebarOpen?: boolean;
  /**
   * Callback when the hamburger menu is clicked
   */
  onHamburgerMenuClick?: () => void;
  
  /* ===== STYLING CUSTOMIZATION ===== */
  /**
   * Custom CSS class for the warehouse trigger button
   */
  warehouseTriggerClassName?: string;
  /**
   * Custom CSS class for the hamburger button
   */
  hamburgerButtonClassName?: string;
  /**
   * Custom icon for the warehouse trigger (replaces default building icon)
   */
  warehouseIcon?: React.ReactNode;
  /**
   * Size of the warehouse icon
   * @default 16
   */
  warehouseIconSize?: number;
}

export const TopBar = forwardRef<HTMLElement, TopBarProps>(
  ({
    className,
    // Logo props
    logoProps,
    logoClickable = false,
    onLogoClick,
    // Center section props
    centerContent,
    showCenterSection = false,
    centerSectionMinWidth = "16.25rem",
    centerSectionMaxWidth = "50rem",
    // End section props
    endContent,
    showEndSection = true,
    // Warehouse selector props
    selectedWarehouse = "Al Haram Warehouse",
    warehouses = ["Al Haram Warehouse", "Main Warehouse", "Secondary Warehouse"],
    onWarehouseChange,
    warehouseDisabled = false,
    showLogoutOption = true,
    logoutText,
    onLogoutClick,
    // Listbox customization props
    customListboxOptions,
    listboxProps = {},
    listboxClassName,
    onCustomListboxSelect,
    // Popover customization props
    popoverSide = "bottom",
    popoverAlign = "end",
    popoverMargin = 'medium',
    showPopoverArrow = false,
    popoverProps = {},
    // Mobile navigation props
    showHamburgerMenu = true,
    isMobileSidebarOpen = false,
    onHamburgerMenuClick,
    // Styling customization props
    warehouseTriggerClassName,
    hamburgerButtonClassName,
    warehouseIcon,
    warehouseIconSize = 16,
    ...props
  }, ref) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    // Detect RTL for line height adjustments
    const isRTL = typeof document !== 'undefined' && 
      (document.dir === 'rtl' || document.documentElement.dir === 'rtl');
    
    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.5)' : 'var(--t-line-height-english, 1.5)'
    };

    const handleWarehouseSelect = (warehouse: string | number) => {
      onWarehouseChange?.(warehouse.toString());
      setIsPopoverOpen(false);
    };

    // Create listbox options - use custom options if provided, otherwise build default
    const listboxOptions = customListboxOptions || [
      ...warehouses.map((warehouse) => ({
        label: warehouse,
        value: warehouse,
        prefix: warehouseIcon || <IconBuilding size={warehouseIconSize} />
      })),
      ...(showLogoutOption ? [
        {
          label: '',
          value: 'separator',
          disabled: true,
          customContent: <Separator decorative={true} spacing="none" />
        },
        {
          label: logoutText || (isRTL ? 'تسجيل الخروج' : 'Logout'),
          value: 'logout',
          prefix: <IconLogout size={16} className={styles.logoutIcon} />,
          className: styles.logoutOption,
          labelClassName: styles.logoutLabel,
          prefixClassName: styles.logoutPrefix
        }
      ] : [])
    ];

    const handleListboxSelect = (value: string | number) => {
      // If custom handler is provided, use it
      if (onCustomListboxSelect) {
        const selectedOption = listboxOptions.find(option => option.value === value);
        if (selectedOption) {
          onCustomListboxSelect(value, selectedOption);
        }
        setIsPopoverOpen(false);
        return;
      }

      // Default behavior for warehouse and logout
      if (value === 'logout') {
        onLogoutClick?.();
        setIsPopoverOpen(false);
      } else if (value !== 'separator') {
        handleWarehouseSelect(value);
      }
    };

    // Merge listbox props with defaults
    const mergedListboxProps = {
      className: clsx(styles.warehouseListbox, listboxClassName),
      ...listboxProps
    };

    // Merge popover props with defaults
    const mergedPopoverProps = {
      open: isPopoverOpen,
      onOpenChange: setIsPopoverOpen,
      side: popoverSide,
      align: popoverAlign,
      showArrow: showPopoverArrow,
      margin: popoverMargin,
      useListbox: true,
      listboxOptions,
      listboxSelectedValue: selectedWarehouse,
      onListboxSelect: handleListboxSelect,
      listboxProps: mergedListboxProps,
      ...popoverProps
    };

    // Create default end content (warehouse dropdown) if no endContent provided
    const defaultEndContent = !endContent ? (
      !warehouseDisabled ? (
        <Popover {...mergedPopoverProps}>
          <button
            className={clsx(styles.warehouseTrigger, warehouseTriggerClassName)}
            style={lineHeightStyle}
            aria-label={`Select warehouse. Current: ${selectedWarehouse}`}
          >
            {warehouseIcon || <IconBuilding size={warehouseIconSize} className={styles.warehouseIcon} />}
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
          className={clsx(
            styles.warehouseTrigger,
            styles.warehouseTriggerDisabled,
            warehouseTriggerClassName
          )}
          disabled={true}
          style={lineHeightStyle}
          aria-label={`Warehouse selector disabled. Current: ${selectedWarehouse}`}
        >
          {warehouseIcon || <IconBuilding size={warehouseIconSize} className={styles.warehouseIcon} />}
          <span className={styles.warehouseText}>{selectedWarehouse}</span>
          <IconChevronDown size={16} className={styles.warehouseChevron} />
        </button>
      )
    ) : null;

    return (
      <header
        ref={ref}
        className={clsx(styles.topBar, className)}
        style={lineHeightStyle}
        {...props}
      >
        <div className={styles.topBarContent}>
          {/* Start Section - Hamburger and Logo */}
          <div className={styles.startSection}>
            {/* Hamburger/Close Menu - visible on small devices */}
            {showHamburgerMenu && (
              <Button
                variant="plain"
                tone="neutral"
                size="micro"
                className={clsx(
                  styles.hamburgerButton,
                  styles.mobileOnly,
                  hamburgerButtonClassName
                )}
                onClick={onHamburgerMenuClick}
                aria-label={
                  isMobileSidebarOpen
                    ? (isRTL ? 'إغلاق القائمة' : 'Close menu')
                    : (isRTL ? 'فتح القائمة' : 'Open menu')
                }
                prefixIcon={
                  isMobileSidebarOpen ? (
                    <IconX size={20} />
                  ) : (
                    <IconMenu2 size={20} />
                  )
                }
              />
            )}

            {/* Logo Section */}
            <div className={styles.logoSection}>
              <Logo
                size="medium"
                clickable={logoClickable}
                onClick={onLogoClick}
                {...logoProps}
              />
            </div>
          </div>

          {/* Center Section - Swappable Content */}
          {showCenterSection && (
            <div
              className={styles.centerSection}
              style={{
                minWidth: centerSectionMinWidth,
                maxWidth: centerSectionMaxWidth,
                ...lineHeightStyle
              }}
            >
              {centerContent}
            </div>
          )}

          {/* End Section - Swappable Content */}
          {showEndSection && (
            <div className={styles.endSection} style={lineHeightStyle}>
              {endContent || defaultEndContent}
            </div>
          )}
        </div>
      </header>
    );
  }
);

TopBar.displayName = 'TopBar';