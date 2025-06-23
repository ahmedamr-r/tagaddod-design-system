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
   * Footer variant layout
   * @default 'cancelAndActions'
   */
  footerVariant?: 'cancelAndActions' | 'swapAndActions' | 'actionsOnly';
  
  /**
   * Cancel button label
   * @default 'Cancel'
   */
  cancelLabel?: string;
  
  /**
   * Primary button label
   * @default 'Label'
   */
  primaryLabel?: string;
  
  /**
   * Secondary button label
   * @default 'Label'
   */
  secondaryLabel?: string;
  
  /**
   * Whether to show the primary button
   * @default true
   */
  showPrimaryButton?: boolean;
  
  /**
   * Whether to show the secondary button
   * @default true
   */
  showSecondaryButton?: boolean;
  
  /**
   * Content to be displayed in the swap area (for swapAndActions variant)
   */
  swapContent?: React.ReactNode;
  
  /**
   * Cancel button callback
   */
  onCancel?: () => void;
  
  /**
   * Primary button callback
   */
  onPrimary?: () => void;
  
  /**
   * Secondary button callback
   */
  onSecondary?: () => void;
  
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
  
  /**
   * Custom padding for the drawer content
   * @default 'var(--t-space-500)'
   */
  contentPadding?: string;
  
  /**
   * Current step number for multi-step drawers
   * Used to control back button visibility (only shows if step > 1)
   */
  step?: number;
}

export const drawerSizes = ['small', 'medium', 'large'] as const;
export const drawerPositions = ['right', 'left'] as const;
export const drawerFooterVariants = ['cancelAndActions', 'swapAndActions', 'actionsOnly'] as const;

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
  footerVariant = 'cancelAndActions',
  cancelLabel = 'Cancel',
  primaryLabel = 'Label',
  secondaryLabel = 'Label',
  showPrimaryButton = true,
  showSecondaryButton = true,
  swapContent,
  onCancel,
  onPrimary,
  onSecondary,
  onBackClick,
  size = 'medium',
  position = 'right',
  className = '',
  useSurfaceBackground = true, // Default to using the surface background color
  fullHeight = true, // Default to full height
  contentPadding = 'var(--t-space-500)', // Default to 20px padding
  step = 1, // Default to step 1
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
        <VaulDrawer.Overlay className={styles.overlay} />
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
                {showBackButton && step > 1 && (
                  <Button 
                    variant="tertiary"
                    tone="neutral"
                    size="micro"
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
                  variant="tertiary"
                  tone="neutral"
                  size="micro"
                  onClick={() => onOpenChange(false)}
                  aria-label={isRTL ? 'إغلاق' : 'Close'}
                  className={styles.closeButton}
                  prefixIcon={<IconX size={20} />}
                />
              )}
            </div>
            
            {/* Content */}
            <div className={styles.content} style={{ padding: contentPadding }}>
              {children}
            </div>
            
            {/* Footer */}
            {showFooter && (
              <div className={clsx(styles.footer, styles[`footer${footerVariant.charAt(0).toUpperCase() + footerVariant.slice(1)}`])}>
                {isRTL ? (
                  // RTL: Render in reversed order
                  <>
                    {footerVariant === 'cancelAndActions' && (
                      <>
                        {/* RTL: Action buttons on the left */}
                        <div className={styles.footerLeft}>
                          {showPrimaryButton && (
                            <Button 
                              variant="primary" 
                              onClick={onPrimary}
                              style={lineHeightStyle}
                            >
                              {primaryLabel}
                            </Button>
                          )}
                          {showSecondaryButton && (
                            <Button 
                              variant="tertiary" 
                              onClick={onSecondary}
                              style={lineHeightStyle}
                            >
                              {secondaryLabel}
                            </Button>
                          )}
                        </div>
                        {/* RTL: Cancel button on the right */}
                        <div className={styles.footerRight}>
                          <Button 
                            variant="plain" 
                            tone="neutral"
                            onClick={onCancel || (() => onOpenChange(false))}
                            style={lineHeightStyle}
                          >
                            {cancelLabel}
                          </Button>
                        </div>
                      </>
                    )}
                    {footerVariant === 'swapAndActions' && (
                      <>
                        {/* RTL: Action buttons on the left */}
                        <div className={styles.footerLeft}>
                          {showPrimaryButton && (
                            <Button 
                              variant="primary" 
                              onClick={onPrimary}
                              style={lineHeightStyle}
                            >
                              {primaryLabel}
                            </Button>
                          )}
                          {showSecondaryButton && (
                            <Button 
                              variant="tertiary" 
                              onClick={onSecondary}
                              style={lineHeightStyle}
                            >
                              {secondaryLabel}
                            </Button>
                          )}
                        </div>
                        {/* RTL: Swap content on the right */}
                        <div className={styles.footerRight}>
                          {swapContent || <div className={styles.footerSwapArea} style={lineHeightStyle}>Swap</div>}
                        </div>
                      </>
                    )}
                    {footerVariant === 'actionsOnly' && (
                      <div className={styles.footerLeft}>
                        {showPrimaryButton && (
                          <Button 
                            variant="primary" 
                            onClick={onPrimary}
                            style={lineHeightStyle}
                          >
                            {primaryLabel}
                          </Button>
                        )}
                        {showSecondaryButton && (
                          <Button 
                            variant="tertiary" 
                            onClick={onSecondary}
                            style={lineHeightStyle}
                          >
                            {secondaryLabel}
                          </Button>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  // LTR: Normal order
                  <>
                    {footerVariant === 'cancelAndActions' && (
                      <>
                        <div className={styles.footerLeft}>
                          <Button 
                            variant="plain" 
                            tone="neutral"
                            onClick={onCancel || (() => onOpenChange(false))}
                            style={lineHeightStyle}
                          >
                            {cancelLabel}
                          </Button>
                        </div>
                        <div className={styles.footerRight}>
                          {showSecondaryButton && (
                            <Button 
                              variant="tertiary" 
                              onClick={onSecondary}
                              style={lineHeightStyle}
                            >
                              {secondaryLabel}
                            </Button>
                          )}
                          {showPrimaryButton && (
                            <Button 
                              variant="primary" 
                              onClick={onPrimary}
                              style={lineHeightStyle}
                            >
                              {primaryLabel}
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                    {footerVariant === 'swapAndActions' && (
                      <>
                        <div className={styles.footerLeft}>
                          {swapContent || <div className={styles.footerSwapArea} style={lineHeightStyle}>Swap</div>}
                        </div>
                        <div className={styles.footerRight}>
                          {showSecondaryButton && (
                            <Button 
                              variant="tertiary" 
                              onClick={onSecondary}
                              style={lineHeightStyle}
                            >
                              {secondaryLabel}
                            </Button>
                          )}
                          {showPrimaryButton && (
                            <Button 
                              variant="primary" 
                              onClick={onPrimary}
                              style={lineHeightStyle}
                            >
                              {primaryLabel}
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                    {footerVariant === 'actionsOnly' && (
                      <div className={styles.footerRight}>
                        {showSecondaryButton && (
                          <Button 
                            variant="tertiary" 
                            onClick={onSecondary}
                            style={lineHeightStyle}
                          >
                            {secondaryLabel}
                          </Button>
                        )}
                        {showPrimaryButton && (
                          <Button 
                            variant="primary" 
                            onClick={onPrimary}
                            style={lineHeightStyle}
                          >
                            {primaryLabel}
                          </Button>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </DrawerContext.Provider>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
});

Drawer.displayName = 'Drawer';
