import React, { forwardRef, useEffect, useState, createContext, useContext } from 'react';
import clsx from 'clsx';
import { Drawer as VaulDrawer } from 'vaul';
import { IconX, IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Button } from '../Button/Button';
import styles from './Drawer.module.css';

// Context to help modal components know they're inside a drawer
const DrawerContext = createContext<{
  isInsideDrawer: boolean;
  drawerZIndex: number;
}>({
  isInsideDrawer: false,
  drawerZIndex: 150, // Default z-index for drawer content
});

// Hook to use drawer context
export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export type DrawerSize = 'small' | 'medium' | 'large';
export type DrawerPosition = 'right' | 'left';

export interface DrawerProps {
  /**
   * Whether the drawer is open
   */
  open: boolean;
  
  /**
   * Callback function when the drawer open state changes
   */
  onOpenChange: (open: boolean) => void;
  
  /**
   * The drawer title
   */
  title?: React.ReactNode;
  
  /**
   * Component to display before the title
   */
  headerPrefix?: React.ReactNode;
  
  /**
   * Component to display after the title, before the close button
   */
  headerSuffix?: React.ReactNode;
  
  /**
   * Whether to show the back button
   * @default false
   */
  showBackButton?: boolean;
  
  /**
   * Whether to show the title
   * @default true
   */
  showTitle?: boolean;
  
  /**
   * Whether to show the close button
   * @default true
   */
  showClose?: boolean;
  
  /**
   * Whether to show the footer
   * @default false
   */
  showFooter?: boolean;
  
  /**
   * Content to be displayed in the footer
   */
  footerContent?: React.ReactNode;
  
  /**
   * Primary action for the footer
   */
  primaryAction?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'plain';
    tone?: 'default' | 'critical' | 'success' | 'neutral' | 'magic';
  };
  
  /**
   * Secondary action for the footer
   */
  secondaryAction?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'plain';
    tone?: 'default' | 'critical' | 'success' | 'neutral' | 'magic';
  };
  
  /**
   * Callback when back button is clicked
   */
  onBackClick?: () => void;
  
  /**
   * The size of the drawer
   * @default 'medium'
   */
  size?: DrawerSize;
  
  /**
   * The position of the drawer
   * @default 'right'
   */
  position?: DrawerPosition;
  
  /**
   * Additional class name
   */
  className?: string;
  
  /**
   * Children to be rendered in the drawer content
   */
  children: React.ReactNode;
  
  /**
   * Custom overlay opacity (0-1)
   * @default 0.7
   */
  overlayOpacity?: number;
  
  /**
   * Whether to blur the background when the drawer is open
   * @default true
   */
  blurBackground?: boolean;
  
  /**
   * Use the bg-surface token for background (--t-color-surface-background)
   * This is white by default in the Tagaddod Design System
   * @default true
   */
  useSurfaceBackground?: boolean;
  
  /**
   * Use full viewport height 
   * @default true
   */
  fullHeight?: boolean;
}

export const drawerSizes = ['small', 'medium', 'large'] as const;
export const drawerPositions = ['right', 'left'] as const;

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(({
  open,
  onOpenChange,
  title,
  headerPrefix,
  headerSuffix,
  showBackButton = false,
  showTitle = true,
  showClose = true,
  showFooter = false,
  footerContent,
  primaryAction,
  secondaryAction,
  onBackClick,
  size = 'medium',
  position = 'right',
  className = '',
  overlayOpacity = 0.7,
  blurBackground = true,
  useSurfaceBackground = true, // Default to using the surface background color
  fullHeight = true, // Default to full height
  children,
  ...props
}, ref) => {
  // Check if current direction is RTL
  const [isRTL, setIsRTL] = useState(false);
  
  useEffect(() => {
    const dir = document.dir || document.documentElement.dir;
    setIsRTL(dir === 'rtl');
  }, []);
  
  // Adjust position based on RTL
  const adjustedPosition = isRTL 
    ? (position === 'right' ? 'left' : 'right') 
    : position;
  
  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };
  
  // Callback when back button is clicked
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      onOpenChange(false);
    }
  };
  
  // Get correct back arrow icon based on direction
  const BackArrowIcon = isRTL ? IconArrowRight : IconArrowLeft;
  
  // Combine all classes for the drawer
  const drawerClasses = clsx(
    styles.drawer,
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    styles[`position${adjustedPosition.charAt(0).toUpperCase() + adjustedPosition.slice(1)}`],
    className
  );
  
  // Create custom overlay style with specified opacity
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
    backdropFilter: blurBackground ? 'blur(2px)' : 'none',
  };
  
  // Create custom drawer style
  const drawerStyle = {
    backgroundColor: useSurfaceBackground ? 'var(--t-color-surface-primary)' : undefined,
    height: fullHeight ? '100vh' : undefined,
    maxHeight: fullHeight ? '100vh' : undefined,
  };
  
  return (
    <VaulDrawer.Root
      open={open}
      onOpenChange={onOpenChange}
      direction={adjustedPosition}
      shouldScaleBackground
      modal={true} // Ensure it's modal for better accessibility
    >
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className={styles.overlay} style={overlayStyle} />
        <VaulDrawer.Content 
          ref={ref} 
          className={drawerClasses} 
          data-direction={adjustedPosition}
          style={drawerStyle}
          {...props}
        >
          <DrawerContext.Provider 
            value={{ 
              isInsideDrawer: true, 
              drawerZIndex: 200 // Z-index for modals opened from drawer
            }}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerContent}>
                {showBackButton && (
                  <Button 
                    variant="plain" 
                    onClick={handleBackClick}
                    aria-label={isRTL ? 'التالي' : 'Back'}
                    className={styles.backButton}
                    prefixIcon={<BackArrowIcon size={20} />}
                  />
                )}
                
                {headerPrefix && (
                  <div className={styles.headerPrefix}>
                    {headerPrefix}
                  </div>
                )}
                
                {showTitle && title && (
                  <h2 className={styles.title} style={lineHeightStyle}>
                    {title}
                  </h2>
                )}
                
                {headerSuffix && (
                  <div className={styles.headerSuffix}>
                    {headerSuffix}
                  </div>
                )}
              </div>
              
              {showClose && (
                <Button 
                  variant="plain" 
                  onClick={() => onOpenChange(false)}
                  aria-label={isRTL ? 'إغلاق' : 'Close'}
                  className={styles.closeButton}
                  prefixIcon={<IconX size={20} />}
                />
              )}
            </div>
            
            {/* Content */}
            <div className={styles.content}>
              {children}
            </div>
            
            {/* Footer */}
            {showFooter && (
              <div className={styles.footer}>
                {footerContent && (
                  <div className={styles.footerContent}>
                    {footerContent}
                  </div>
                )}
                
                <div className={styles.actions}>
                  {secondaryAction && (
                    <Button 
                      variant={secondaryAction.variant || 'secondary'}
                      tone={secondaryAction.tone || 'default'}
                      onClick={secondaryAction.onClick}
                      disabled={secondaryAction.disabled}
                      className={styles.footerButton}
                    >
                      {secondaryAction.label}
                    </Button>
                  )}
                  
                  {primaryAction && (
                    <Button 
                      variant={primaryAction.variant || 'primary'}
                      tone={primaryAction.tone || 'default'}
                      onClick={primaryAction.onClick}
                      disabled={primaryAction.disabled}
                      loading={primaryAction.loading}
                      className={styles.footerButton}
                    >
                      {primaryAction.label}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </DrawerContext.Provider>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
});

Drawer.displayName = 'Drawer';
