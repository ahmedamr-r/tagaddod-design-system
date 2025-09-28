import React, { forwardRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { TopBar, TopBarProps } from '../TopBar';
import { Sidebar, SidebarProps } from '../Sidebar';
import { pageBreakpoints, pageContainerWidths, pageMargins } from './Page.constants';
import styles from './Page.module.css';

export type PageBreakpoint = 'xl' | 'l' | 'md' | 'sm' | 'xs';

export interface PageProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Content to display in the main area
   */
  children: React.ReactNode;

  /**
   * Props to pass to the Sidebar component
   * All sidebar configuration (menuItems, handlers, etc.) passed through here
   */
  sidebarProps?: Partial<SidebarProps>;

  /**
   * Props to pass to the TopBar component
   * All topbar configuration (warehouse, center content, etc.) passed through here
   */
  topBarProps?: Partial<TopBarProps>;

  /**
   * Whether to show the sidebar
   * @default true
   */
  showSidebar?: boolean;

  /**
   * Whether to show the top bar
   * @default true
   */
  showTopBar?: boolean;

  /**
   * Maximum width for the content container
   * @default "1240px"
   */
  containerMaxWidth?: string;

  /**
   * Disable responsive behavior and use desktop layout
   * @default false
   */
  disableResponsive?: boolean;

  /**
   * Custom class name for the page container
   */
  className?: string;

  /**
   * Custom class name for the content container
   */
  containerClassName?: string;

  /**
   * Custom class name for the main content area
   */
  contentClassName?: string;

  /**
   * Controlled mobile sidebar state
   */
  mobileSidebarOpen?: boolean;

  /**
   * Callback when mobile sidebar open state changes
   */
  onMobileSidebarToggle?: (open: boolean) => void;

  /**
   * Current breakpoint (for external control)
   */
  currentBreakpoint?: PageBreakpoint;

  /**
   * Callback when breakpoint changes
   */
  onBreakpointChange?: (breakpoint: PageBreakpoint) => void;
}

// Hook to detect current breakpoint
const useBreakpoint = (disabled = false): PageBreakpoint => {
  const [breakpoint, setBreakpoint] = useState<PageBreakpoint>('xl');

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;

    const getBreakpoint = (): PageBreakpoint => {
      const width = window.innerWidth;
      if (width >= 1440) return 'xl';
      if (width >= 1220) return 'l';
      if (width >= 768) return 'md';
      if (width >= 490) return 'sm';
      return 'xs';
    };

    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [disabled]);

  return breakpoint;
};

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({
    children,
    sidebarProps = {},
    topBarProps = {},
    showSidebar = true,
    showTopBar = true,
    containerMaxWidth = '1240px',
    disableResponsive = false,
    className,
    containerClassName,
    contentClassName,
    mobileSidebarOpen: controlledMobileSidebarOpen,
    onMobileSidebarToggle,
    currentBreakpoint,
    onBreakpointChange,
    ...props
  }, ref) => {
    const detectedBreakpoint = useBreakpoint(disableResponsive);
    const breakpoint = currentBreakpoint || detectedBreakpoint;

    const [internalMobileSidebarOpen, setInternalMobileSidebarOpen] = useState(false);

    // Determine if mobile sidebar is open
    const isMobileSidebarOpen = controlledMobileSidebarOpen !== undefined
      ? controlledMobileSidebarOpen
      : internalMobileSidebarOpen;

    // Notify about breakpoint changes
    useEffect(() => {
      onBreakpointChange?.(breakpoint);
    }, [breakpoint, onBreakpointChange]);

    // Detect RTL for line height adjustments
    const isRTL = typeof document !== 'undefined' &&
      (document.dir === 'rtl' || document.documentElement.dir === 'rtl');

    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    };

    // Determine responsive behavior based on breakpoint
    const isLargeScreen = breakpoint === 'xl' || breakpoint === 'l';
    const isMediumScreen = breakpoint === 'md';
    const isSmallScreen = breakpoint === 'sm' || breakpoint === 'xs';

    // Handle mobile sidebar toggle
    const handleMobileSidebarToggle = () => {
      const newOpen = !isMobileSidebarOpen;
      if (controlledMobileSidebarOpen === undefined) {
        setInternalMobileSidebarOpen(newOpen);
      }
      onMobileSidebarToggle?.(newOpen);
    };

    // Close mobile sidebar when clicking outside or on medium+ screens
    useEffect(() => {
      if (!isSmallScreen && isMobileSidebarOpen) {
        handleMobileSidebarToggle();
      }
    }, [breakpoint]); // eslint-disable-line react-hooks/exhaustive-deps

    // Responsive sidebar props
    const responsiveSidebarProps: Partial<SidebarProps> = {
      ...sidebarProps,
      expanded: disableResponsive ? true : isLargeScreen ? true : isMediumScreen ? false : undefined,
      hoverExpand: !disableResponsive && isMediumScreen,
      className: clsx(
        styles.sidebar,
        isSmallScreen && styles.sidebarMobile,
        isMobileSidebarOpen && styles.sidebarMobileOpen,
        sidebarProps.className
      ),
    };

    // Responsive topbar props
    const responsiveTopBarProps: Partial<TopBarProps> = {
      ...topBarProps,
      showHamburgerMenu: !disableResponsive && isSmallScreen,
      isMobileSidebarOpen: isMobileSidebarOpen,
      onHamburgerMenuClick: handleMobileSidebarToggle,
      className: clsx(styles.topBar, topBarProps.className),
    };

    return (
      <div
        ref={ref}
        className={clsx(
          styles.page,
          styles[`breakpoint-${breakpoint}`],
          isMobileSidebarOpen && styles.pageWithMobileSidebar,
          className
        )}
        style={{
          ...lineHeightStyle,
          '--container-max-width': containerMaxWidth
        } as React.CSSProperties}
        data-breakpoint={breakpoint}
        {...props}
      >
        {/* Mobile sidebar backdrop */}
        {isSmallScreen && isMobileSidebarOpen && (
          <div
            className={styles.backdrop}
            onClick={handleMobileSidebarToggle}
            aria-hidden="true"
          />
        )}

        {/* Top Bar */}
        {showTopBar && (
          <TopBar {...responsiveTopBarProps} />
        )}

        {/* Page Body */}
        <div className={styles.pageBody}>
          {/* Sidebar */}
          {showSidebar && (
            <Sidebar {...responsiveSidebarProps} />
          )}

          {/* Main Content */}
          <main
            className={clsx(styles.content, contentClassName)}
            style={lineHeightStyle}
          >
            <div
              className={clsx(styles.container, containerClassName)}
              style={lineHeightStyle}
            >
              {children}
            </div>
          </main>
        </div>
      </div>
    );
  }
);

Page.displayName = 'Page';

// Export useful constants for AI agents
export { pageBreakpoints, pageContainerWidths, pageMargins };