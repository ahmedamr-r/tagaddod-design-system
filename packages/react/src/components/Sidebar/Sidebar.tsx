import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { 
  IconHome,
  IconChartBar,
  IconUsers,
  IconPackage,
  IconBell,
  IconSettings,
  IconLogout,
  IconChevronDown,
  IconChevronRight
} from '@tabler/icons-react';
import { Separator } from '../Separator';
import styles from './Sidebar.module.css';

export type SidebarSize = 'compact' | 'normal';
export type SidebarPosition = 'left' | 'right';

// Export constants for consistency with other components
export const sidebarSizes = ['compact', 'normal'] as const;
export const sidebarPositions = ['left', 'right'] as const;

export interface SidebarMenuItem {
  id: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  labelEn?: string;
  labelAr?: string;
  hasChildren?: boolean;
  children?: Omit<SidebarMenuItem, 'children' | 'hasChildren'>[];
  disabled?: boolean;
}

export interface SidebarProps extends React.ComponentPropsWithoutRef<'aside'> {
  /**
   * Currently selected menu item ID
   */
  selectedItem?: string;
  /**
   * Callback when menu item is selected
   */
  onItemChange?: (itemId: string) => void;
  /**
   * Main navigation items
   */
  menuItems?: SidebarMenuItem[];
  /**
   * Secondary navigation items (analytics, users, etc.)
   */
  secondaryItems?: SidebarMenuItem[];
  /**
   * Bottom navigation items (settings, logout)
   */
  bottomItems?: SidebarMenuItem[];
  /**
   * Whether sidebar is in expanded state by default
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * Controlled expanded state
   */
  expanded?: boolean;
  /**
   * Callback when expanded state changes
   */
  onExpandedChange?: (expanded: boolean) => void;
  /**
   * Sidebar position
   * @default 'left'
   */
  position?: SidebarPosition;
  /**
   * Whether to show hover expand behavior
   * @default true
   */
  hoverExpand?: boolean;
  /**
   * Custom class name
   */
  className?: string;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({
    selectedItem,
    onItemChange,
    menuItems = [],
    secondaryItems = [],
    bottomItems = [],
    defaultExpanded = false,
    expanded: controlledExpanded,
    onExpandedChange,
    position = 'left',
    hoverExpand = true,
    className,
    ...props
  }, ref) => {
    const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
    const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['dashboard']));
    
    const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
    
    // Detect RTL for line height adjustments and positioning
    const isRTL = typeof document !== 'undefined' && 
      (document.dir === 'rtl' || document.documentElement.dir === 'rtl');
    
    // Apply line height style based on text direction following RTL guidelines
    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    };

    const handleExpandedChange = (newExpanded: boolean) => {
      if (controlledExpanded === undefined) {
        setInternalExpanded(newExpanded);
      }
      onExpandedChange?.(newExpanded);
    };

    const handleItemClick = (itemId: string, item: SidebarMenuItem) => {
      if (item.disabled) return;
      
      if (item.hasChildren) {
        setExpandedGroups(prev => {
          const newSet = new Set(prev);
          if (newSet.has(itemId)) {
            newSet.delete(itemId);
          } else {
            newSet.add(itemId);
          }
          return newSet;
        });
      } else {
        onItemChange?.(itemId);
      }
    };

    const renderMenuItem = (item: SidebarMenuItem, isActive = false, isChild = false) => {
      const IconComponent = item.icon;
      const hasChildren = item.hasChildren;
      const isGroupExpanded = expandedGroups.has(item.id);
      const isParentOfActive = hasChildren && item.children?.some(child => child.id === selectedItem);
      
      return (
        <div key={item.id} className={styles.menuItemContainer}>
          <button
            className={clsx(
              styles.menuItem,
              isActive && styles.menuItemActive,
              isParentOfActive && styles.menuItemParentActive,
              isChild && styles.menuItemChild,
              item.disabled && styles.menuItemDisabled
            )}
            onClick={() => handleItemClick(item.id, item)}
            disabled={item.disabled}
            style={lineHeightStyle}
            aria-label={item.label}
          >
            <div className={clsx(
              styles.menuItemContent,
              !isExpanded && styles.menuItemContentCollapsed
            )}>
              <div className={styles.menuItemIcon}>
                {!isChild && IconComponent && (
                  <IconComponent size={20} className={styles.icon} />
                )}
              </div>
              
              {isExpanded && (
                <span className={clsx(
                  styles.menuItemLabel,
                  isRTL && styles.menuItemLabelRTL
                )}>
                  {item.label}
                </span>
              )}
              
              {hasChildren && isExpanded && (
                <div className={styles.menuItemChevron}>
                  {isGroupExpanded ? (
                    <IconChevronDown size={16} />
                  ) : (
                    <IconChevronRight size={16} />
                  )}
                </div>
              )}
            </div>
          </button>
          
          {/* Render children */}
          {hasChildren && item.children && isGroupExpanded && isExpanded && (
            <div className={styles.menuItemChildren}>
              {item.children.map(child => 
                renderMenuItem(child, selectedItem === child.id, true)
              )}
            </div>
          )}
        </div>
      );
    };

    // Default menu items if none provided
    const defaultMenuItems: SidebarMenuItem[] = [
      {
        id: 'dashboard',
        icon: IconHome,
        label: isRTL ? 'لوحة التحكم' : 'Dashboard',
        labelEn: 'Dashboard',
        labelAr: 'لوحة التحكم',
        hasChildren: true,
        children: [
          {
            id: 'electronics',
            label: isRTL ? 'إلكترونيات' : 'Electronics',
            labelEn: 'Electronics',
            labelAr: 'إلكترونيات'
          },
          {
            id: 'clothing',
            label: isRTL ? 'ملابس' : 'Clothing',
            labelEn: 'Clothing',
            labelAr: 'ملابس'
          },
          {
            id: 'tools',
            label: isRTL ? 'أدوات' : 'Tools',
            labelEn: 'Tools',
            labelAr: 'أدوات'
          }
        ]
      }
    ];

    const defaultSecondaryItems: SidebarMenuItem[] = [
      {
        id: 'analytics',
        icon: IconChartBar,
        label: isRTL ? 'التحليلات' : 'Analytics',
        labelEn: 'Analytics',
        labelAr: 'التحليلات'
      },
      {
        id: 'users',
        icon: IconUsers,
        label: isRTL ? 'المستخدمون' : 'Users',
        labelEn: 'Users',
        labelAr: 'المستخدمون'
      },
      {
        id: 'inventory',
        icon: IconPackage,
        label: isRTL ? 'إدارة المخزون' : 'Inventory Management',
        labelEn: 'Inventory Management',
        labelAr: 'إدارة المخزون'
      },
      {
        id: 'notifications',
        icon: IconBell,
        label: isRTL ? 'الإشعارات' : 'Notifications',
        labelEn: 'Notifications',
        labelAr: 'الإشعارات'
      }
    ];

    const defaultBottomItems: SidebarMenuItem[] = [
      {
        id: 'settings',
        icon: IconSettings,
        label: isRTL ? 'الإعدادات' : 'Settings',
        labelEn: 'Settings',
        labelAr: 'الإعدادات'
      },
      {
        id: 'logout',
        icon: IconLogout,
        label: isRTL ? 'تسجيل الخروج' : 'Logout',
        labelEn: 'Logout',
        labelAr: 'تسجيل الخروج'
      }
    ];

    const finalMenuItems = menuItems.length > 0 ? menuItems : defaultMenuItems;
    const finalSecondaryItems = secondaryItems.length > 0 ? secondaryItems : defaultSecondaryItems;
    const finalBottomItems = bottomItems.length > 0 ? bottomItems : defaultBottomItems;

    return (
      <aside
        ref={ref}
        className={clsx(
          styles.sidebar,
          isExpanded && styles.sidebarExpanded,
          position === 'right' && styles.sidebarRight,
          isRTL && styles.sidebarRTL,
          className
        )}
        style={lineHeightStyle}
        onMouseEnter={hoverExpand ? () => handleExpandedChange(true) : undefined}
        onMouseLeave={hoverExpand ? () => handleExpandedChange(false) : undefined}
        {...props}
      >

        {/* Main Navigation */}
        <nav className={styles.navigation}>
          <div className={styles.navigationSection}>
            {finalMenuItems.map(item => renderMenuItem(item, selectedItem === item.id))}
          </div>

          <Separator className={styles.separator} />

          {/* Secondary Navigation */}
          <div className={styles.navigationSection}>
            {finalSecondaryItems.map(item => renderMenuItem(item, selectedItem === item.id))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          {finalBottomItems.map(item => renderMenuItem(item, selectedItem === item.id))}
        </div>
      </aside>
    );
  }
);

Sidebar.displayName = 'Sidebar';