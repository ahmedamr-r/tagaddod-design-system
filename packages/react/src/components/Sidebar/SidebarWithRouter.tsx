import React, { forwardRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Sidebar, SidebarProps, SidebarMenuItem } from './Sidebar';

/**
 * Extended props for Sidebar with React Router integration
 */
export interface SidebarWithRouterProps extends Omit<SidebarProps, 'onItemChange'> {
  /**
   * Base path prefix for all routes (default: "")
   * Example: "/admin" will prefix all routes with /admin
   */
  basePath?: string;
  /**
   * Custom navigation handler (escape hatch for analytics, auth, etc.)
   * If provided, React Router navigation is skipped
   */
  onNavigate?: (path: string, itemId: string) => void;
  /**
   * Disable automatic URL routing (useful for testing/Storybook)
   * @default false
   */
  disableRouting?: boolean;
  /**
   * Callback when menu item is selected (extends core Sidebar prop)
   */
  onItemChange?: (itemId: string) => void;
}

/**
 * Extended SidebarMenuItem with path support for routing
 */
export interface SidebarMenuItemWithPath extends SidebarMenuItem {
  /**
   * Custom path override (use instead of auto-generated path from id)
   * Example: { id: 'home', path: '/' } → routes to "/" instead of "/home"
   */
  path?: string;
  children?: Omit<SidebarMenuItemWithPath, 'children' | 'hasChildren'>[];
}

/**
 * Build nested route path from menu item
 * @param item - Menu item to build path for
 * @param parentPath - Parent path (for nested items)
 * @param basePath - Base path prefix
 * @returns Full route path (e.g., "/admin/dashboard/analytics")
 */
const buildPath = (
  item: SidebarMenuItemWithPath,
  parentPath: string = '',
  basePath: string = ''
): string => {
  // Custom path override
  if (item.path) {
    return basePath + item.path;
  }

  // Auto-generate from ID: /dashboard, /products/all, etc.
  const itemPath = `/${item.id}`;
  return basePath + (parentPath ? `${parentPath}${itemPath}` : itemPath);
};

/**
 * Sidebar component with React Router integration for automatic URL routing
 *
 * **Requirements**: Requires `react-router@^6.0.0 || ^7.0.0` to be installed
 *
 * @example
 * ```tsx
 * import { BrowserRouter } from 'react-router'
 * import { SidebarWithRouter } from '@tagaddod-design/react'
 *
 * function App() {
 *   return (
 *     <BrowserRouter>
 *       <SidebarWithRouter
 *         menuItems={[
 *           { id: 'dashboard', label: 'Dashboard', icon: IconHome },
 *           { id: 'products', label: 'Products', icon: IconBox }
 *         ]}
 *       />
 *     </BrowserRouter>
 *   )
 * }
 * ```
 *
 * For applications without React Router, use the core `Sidebar` component instead.
 */
export const SidebarWithRouter = forwardRef<HTMLElement, SidebarWithRouterProps>(
  ({
    basePath = '',
    onNavigate,
    disableRouting = false,
    onItemChange,
    menuItems = [],
    secondaryItems = [],
    bottomItems = [],
    showBottomSection = false,
    selectedItem,
    ...props
  }, ref) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [internalSelectedItem, setInternalSelectedItem] = useState<string>();

    // URL sync: Match current URL to menu items (React Router v6/v7 pattern)
    useEffect(() => {
      if (disableRouting || selectedItem) return; // Skip if controlled or routing disabled

      const pathname = location.pathname;

      // Find matching menu item by path
      const findItemByPath = (
        items: SidebarMenuItemWithPath[],
        parentPath = ''
      ): string | null => {
        for (const item of items) {
          const itemPath = buildPath(item, parentPath, basePath);

          // Exact match or starts with (for nested routes)
          if (pathname === itemPath || pathname.startsWith(itemPath + '/')) {
            // Check children first (prefer deeper match)
            if (item.children) {
              const childMatch = findItemByPath(item.children, itemPath);
              if (childMatch) return childMatch;
            }
            return item.id;
          }
        }
        return null;
      };

      const allItems = [
        ...menuItems as SidebarMenuItemWithPath[],
        ...secondaryItems as SidebarMenuItemWithPath[],
        ...(showBottomSection ? bottomItems as SidebarMenuItemWithPath[] : [])
      ];

      const matchedId = findItemByPath(allItems);
      if (matchedId) {
        setInternalSelectedItem(matchedId);
      }
    }, [location.pathname, basePath, disableRouting, selectedItem, menuItems, secondaryItems, bottomItems, showBottomSection]);

    // Handle item click with routing
    const handleItemChange = (itemId: string) => {
      // Find the clicked item to get its path
      const findItem = (
        items: SidebarMenuItemWithPath[],
        parentPath = ''
      ): { item: SidebarMenuItemWithPath; path: string } | null => {
        for (const item of items) {
          if (item.id === itemId) {
            return { item, path: buildPath(item, parentPath, basePath) };
          }
          if (item.children) {
            const currentPath = buildPath(item, parentPath, basePath);
            const childResult = findItem(item.children, currentPath);
            if (childResult) return childResult;
          }
        }
        return null;
      };

      const allItems = [
        ...menuItems as SidebarMenuItemWithPath[],
        ...secondaryItems as SidebarMenuItemWithPath[],
        ...(showBottomSection ? bottomItems as SidebarMenuItemWithPath[] : [])
      ];

      const result = findItem(allItems);

      if (result && !disableRouting) {
        const { path } = result;

        // Custom handler (escape hatch)
        if (onNavigate) {
          onNavigate(path, itemId);
        } else {
          // Default: React Router navigation
          navigate(path);
        }
      }

      // Update internal state and call callback
      setInternalSelectedItem(itemId);
      onItemChange?.(itemId);
    };

    return (
      <Sidebar
        ref={ref}
        selectedItem={selectedItem || internalSelectedItem}
        onItemChange={handleItemChange}
        menuItems={menuItems}
        secondaryItems={secondaryItems}
        bottomItems={bottomItems}
        showBottomSection={showBottomSection}
        {...props}
      />
    );
  }
);

SidebarWithRouter.displayName = 'SidebarWithRouter';
