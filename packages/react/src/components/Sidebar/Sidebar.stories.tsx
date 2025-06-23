import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { 
  IconHome,
  IconChartBar,
  IconUsers,
  IconPackage,
  IconBell,
  IconSettings,
  IconLogout,
  IconShoppingCart,
  IconFileText,
  IconCalendar
} from '@tabler/icons-react';
import { Sidebar } from './Sidebar';
import type { SidebarMenuItem } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navigation sidebar with expandable sections and RTL support. Provides primary navigation for applications with hover-to-expand functionality.'
      }
    }
  },
  argTypes: {
    selectedItem: {
      control: 'text',
      description: 'Currently selected menu item ID'
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Sidebar position on screen'
    },
    defaultExpanded: {
      control: 'boolean',
      description: 'Default expanded state'
    },
    hoverExpand: {
      control: 'boolean',
      description: 'Enable hover-to-expand behavior'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Demo menu items
// RTL-aware demo menu items
const createMenuItems = (isRTL: boolean): SidebarMenuItem[] => [
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
  },
  {
    id: 'orders',
    icon: IconShoppingCart,
    label: isRTL ? 'الطلبات' : 'Orders',
    labelEn: 'Orders',
    labelAr: 'الطلبات'
  }
];

const createSecondaryItems = (isRTL: boolean): SidebarMenuItem[] => [
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
    label: isRTL ? 'المخزون' : 'Inventory',
    labelEn: 'Inventory',
    labelAr: 'المخزون'
  },
  {
    id: 'reports',
    icon: IconFileText,
    label: isRTL ? 'التقارير' : 'Reports',
    labelEn: 'Reports',
    labelAr: 'التقارير'
  },
  {
    id: 'calendar',
    icon: IconCalendar,
    label: isRTL ? 'التقويم' : 'Calendar',
    labelEn: 'Calendar',
    labelAr: 'التقويم'
  },
  {
    id: 'notifications',
    icon: IconBell,
    label: isRTL ? 'الإشعارات' : 'Notifications',
    labelEn: 'Notifications',
    labelAr: 'الإشعارات'
  }
];

const createBottomItems = (isRTL: boolean): SidebarMenuItem[] => [
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

// Controlled sidebar component for stories
const ControlledSidebar = (props: any) => {
  const [selectedItem, setSelectedItem] = useState(props.selectedItem || 'electronics');
  
  // Get direction from Storybook globals or default to LTR
  const direction = props.globals?.direction || 'ltr';
  const isRTL = direction === 'rtl';
  
  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      overflow: 'hidden',
      flexDirection: props.position === 'right' ? 'row-reverse' : 'row'
    }}>
      <Sidebar
        {...props}
        selectedItem={selectedItem}
        onItemChange={setSelectedItem}
        menuItems={createMenuItems(isRTL)}
        secondaryItems={createSecondaryItems(isRTL)}
        bottomItems={createBottomItems(isRTL)}
      />
      <div style={{
        flex: 1,
        padding: 'var(--t-space-600)',
        backgroundColor: 'var(--t-color-bg-primary)',
        overflow: 'auto'
      }}>
        <h1 style={{ 
          margin: '0 0 var(--t-space-400) 0',
          fontSize: 'var(--t-font-size-700)',
          fontWeight: 'var(--t-font-weight-bold)',
          color: 'var(--t-color-text-primary)'
        }}>
          Current Page: {selectedItem}
        </h1>
        <p style={{ 
          color: 'var(--t-color-text-secondary)',
          fontSize: 'var(--t-font-size-400)',
          lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
          fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
          textAlign: isRTL ? 'right' : 'left',
          direction: direction
        }}>
          {isRTL 
            ? 'هذه منطقة المحتوى. يوفر الشريط الجانبي التنقل. مرر فوق الشريط الجانبي لتوسيعه ورؤية جميع خيارات القائمة.'
            : 'This is the content area. The sidebar provides navigation. Hover over the sidebar to expand it and see all menu options.'
          }
        </p>
        <div style={{
          marginTop: 'var(--t-space-600)',
          padding: 'var(--t-space-500)',
          backgroundColor: 'var(--t-color-surface-secondary)',
          borderRadius: 'var(--t-border-radius-300)',
          border: '1px solid var(--t-color-border-secondary)'
        }}>
          <h3 style={{ 
            margin: '0 0 var(--t-space-300) 0',
            fontSize: 'var(--t-font-size-500)',
            color: 'var(--t-color-text-primary)',
            fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            {isRTL ? 'معلومات التنقل' : 'Navigation Info'}
          </h3>
          <p style={{ 
            margin: '0',
            color: 'var(--t-color-text-secondary)',
            fontSize: 'var(--t-font-size-300)',
            lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
            fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
            textAlign: isRTL ? 'right' : 'left',
            direction: direction
          }}>
            {isRTL ? (
              <>
                العنصر المحدد: <strong>{selectedItem}</strong><br/>
                الموقع: <strong>{props.position === 'right' ? 'يمين' : 'يسار'}</strong><br/>
                التوسيع عند التمرير: <strong>{props.hoverExpand !== false ? 'مفعل' : 'معطل'}</strong>
              </>
            ) : (
              <>
                Selected item: <strong>{selectedItem}</strong><br/>
                Position: <strong>{props.position || 'left'}</strong><br/>
                Hover expand: <strong>{props.hoverExpand !== false ? 'enabled' : 'disabled'}</strong>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ControlledSidebar {...args} />,
  args: {
    selectedItem: 'electronics',
    position: 'left',
    hoverExpand: true
  }
};

export const RightPosition: Story = {
  render: (args) => <ControlledSidebar {...args} />,
  args: {
    selectedItem: 'analytics',
    position: 'right',
    hoverExpand: true
  }
};

export const AlwaysExpanded: Story = {
  render: (args) => <ControlledSidebar {...args} />,
  args: {
    selectedItem: 'users',
    defaultExpanded: true,
    hoverExpand: false
  }
};

export const NoHoverExpand: Story = {
  render: (args) => <ControlledSidebar {...args} />,
  args: {
    selectedItem: 'inventory',
    hoverExpand: false
  }
};

// Custom menu items story
const customMenuItems: SidebarMenuItem[] = [
  {
    id: 'products',
    icon: IconPackage,
    label: 'Products',
    hasChildren: true,
    children: [
      { id: 'add-product', label: 'Add Product' },
      { id: 'manage-products', label: 'Manage Products' },
      { id: 'categories', label: 'Categories' }
    ]
  },
  {
    id: 'sales',
    icon: IconChartBar,
    label: 'Sales',
    hasChildren: true,
    children: [
      { id: 'daily-sales', label: 'Daily Sales' },
      { id: 'monthly-reports', label: 'Monthly Reports' },
      { id: 'yearly-overview', label: 'Yearly Overview' }
    ]
  }
];

const customSecondaryItems: SidebarMenuItem[] = [
  {
    id: 'customers',
    icon: IconUsers,
    label: 'Customers'
  },
  {
    id: 'support',
    icon: IconBell,
    label: 'Support',
    disabled: true // Example of disabled item
  }
];

export const CustomMenus: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState('add-product');
    
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar
          {...args}
          selectedItem={selectedItem}
          onItemChange={setSelectedItem}
          menuItems={customMenuItems}
          secondaryItems={customSecondaryItems}
          bottomItems={[
            {
              id: 'help',
              icon: IconSettings,
              label: 'Help & Support'
            }
          ]}
        />
        <div style={{
          flex: 1,
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          overflow: 'auto'
        }}>
          <h1 style={{ 
            margin: '0 0 var(--t-space-400) 0',
            fontSize: 'var(--t-font-size-700)',
            color: 'var(--t-color-text-primary)'
          }}>
            Custom Sidebar Example
          </h1>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            This example shows a sidebar with custom menu items, including disabled items.
            Current selection: <strong>{selectedItem}</strong>
          </p>
        </div>
      </div>
    );
  },
  args: {
    hoverExpand: true
  }
};

export const ControlledExpansion: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState('dashboard');
    const [expanded, setExpanded] = useState(false);
    
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar
          {...args}
          selectedItem={selectedItem}
          onItemChange={setSelectedItem}
          expanded={expanded}
          onExpandedChange={setExpanded}
          hoverExpand={false}
          menuItems={createMenuItems(false)}
          secondaryItems={createSecondaryItems(false)}
          bottomItems={createBottomItems(false)}
        />
        <div style={{
          flex: 1,
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          overflow: 'auto'
        }}>
          <div style={{ marginBottom: 'var(--t-space-500)' }}>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                padding: 'var(--t-space-200) var(--t-space-400)',
                backgroundColor: 'var(--t-color-fill-brand)',
                color: 'var(--t-color-text-on-fill)',
                border: 'none',
                borderRadius: 'var(--t-border-radius-200)',
                cursor: 'pointer',
                fontSize: 'var(--t-font-size-300)'
              }}
            >
              {expanded ? 'Collapse' : 'Expand'} Sidebar
            </button>
          </div>
          <h1 style={{ 
            margin: '0 0 var(--t-space-400) 0',
            fontSize: 'var(--t-font-size-700)',
            color: 'var(--t-color-text-primary)'
          }}>
            Controlled Expansion
          </h1>
          <p style={{ color: 'var(--t-color-text-secondary)' }}>
            This example shows how to control the sidebar expansion programmatically.
            Current state: <strong>{expanded ? 'Expanded' : 'Collapsed'}</strong>
          </p>
        </div>
      </div>
    );
  }
};

// Arabic RTL menu items for dedicated RTL story
const arabicMenuItems: SidebarMenuItem[] = [
  {
    id: 'dashboard',
    icon: IconHome,
    label: 'لوحة التحكم',
    labelEn: 'Dashboard',
    labelAr: 'لوحة التحكم',
    hasChildren: true,
    children: [
      {
        id: 'electronics',
        label: 'إلكترونيات',
        labelEn: 'Electronics',
        labelAr: 'إلكترونيات'
      },
      {
        id: 'clothing',
        label: 'ملابس',
        labelEn: 'Clothing',
        labelAr: 'ملابس'
      },
      {
        id: 'tools',
        label: 'أدوات',
        labelEn: 'Tools',
        labelAr: 'أدوات'
      }
    ]
  },
  {
    id: 'orders',
    icon: IconShoppingCart,
    label: 'الطلبات',
    labelEn: 'Orders',
    labelAr: 'الطلبات'
  }
];

const arabicSecondaryItems: SidebarMenuItem[] = [
  {
    id: 'analytics',
    icon: IconChartBar,
    label: 'التحليلات',
    labelEn: 'Analytics',
    labelAr: 'التحليلات'
  },
  {
    id: 'users',
    icon: IconUsers,
    label: 'المستخدمون',
    labelEn: 'Users',
    labelAr: 'المستخدمون'
  },
  {
    id: 'inventory',
    icon: IconPackage,
    label: 'إدارة المخزون',
    labelEn: 'Inventory Management',
    labelAr: 'إدارة المخزون'
  },
  {
    id: 'reports',
    icon: IconFileText,
    label: 'التقارير',
    labelEn: 'Reports',
    labelAr: 'التقارير'
  },
  {
    id: 'notifications',
    icon: IconBell,
    label: 'الإشعارات',
    labelEn: 'Notifications',
    labelAr: 'الإشعارات'
  }
];

const arabicBottomItems: SidebarMenuItem[] = [
  {
    id: 'settings',
    icon: IconSettings,
    label: 'الإعدادات',
    labelEn: 'Settings',
    labelAr: 'الإعدادات'
  },
  {
    id: 'logout',
    icon: IconLogout,
    label: 'تسجيل الخروج',
    labelEn: 'Logout',
    labelAr: 'تسجيل الخروج'
  }
];

export const RTLArabic: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState('electronics');
    
    return (
      <div 
        dir="rtl" 
        style={{ 
          display: 'flex', 
          height: '100vh', 
          overflow: 'hidden',
          fontFamily: 'var(--t-font-family-arabic)',
          direction: 'rtl'
        }}
      >
        <Sidebar
          {...args}
          selectedItem={selectedItem}
          onItemChange={setSelectedItem}
          menuItems={arabicMenuItems}
          secondaryItems={arabicSecondaryItems}
          bottomItems={arabicBottomItems}
        />
        <div style={{
          flex: 1,
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          overflow: 'auto',
          direction: 'rtl'
        }}>
          <h1 style={{ 
            margin: '0 0 var(--t-space-400) 0',
            fontSize: 'var(--t-font-size-700)',
            fontWeight: 'var(--t-font-weight-bold)',
            color: 'var(--t-color-text-primary)',
            fontFamily: 'var(--t-font-family-arabic)',
            textAlign: 'right',
            lineHeight: 'var(--t-line-height-arabic, 1.2)'
          }}>
            مثال على الشريط الجانبي باللغة العربية
          </h1>
          <p style={{ 
            color: 'var(--t-color-text-secondary)',
            fontSize: 'var(--t-font-size-400)',
            lineHeight: 'var(--t-line-height-arabic, 1.2)',
            fontFamily: 'var(--t-font-family-arabic)',
            textAlign: 'right',
            direction: 'rtl',
            marginBottom: 'var(--t-space-400)'
          }}>
            هذا مثال على الشريط الجانبي مع دعم كامل للغة العربية ونظام الكتابة من اليمين إلى اليسار. 
            يتضمن التنقل الهرمي والتوسع عند التمرير.
          </p>
          
          <div style={{
            marginTop: 'var(--t-space-600)',
            padding: 'var(--t-space-500)',
            backgroundColor: 'var(--t-color-surface-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            border: '1px solid var(--t-color-border-secondary)',
            direction: 'rtl'
          }}>
            <h3 style={{ 
              margin: '0 0 var(--t-space-300) 0',
              fontSize: 'var(--t-font-size-500)',
              color: 'var(--t-color-text-primary)',
              fontFamily: 'var(--t-font-family-arabic)',
              textAlign: 'right',
              lineHeight: 'var(--t-line-height-arabic, 1.2)'
            }}>
              الميزات المدعومة
            </h3>
            <ul style={{ 
              margin: '0',
              padding: '0 0 0 var(--t-space-400)',
              color: 'var(--t-color-text-secondary)',
              fontSize: 'var(--t-font-size-300)',
              lineHeight: 'var(--t-line-height-arabic, 1.2)',
              fontFamily: 'var(--t-font-family-arabic)',
              textAlign: 'right',
              direction: 'rtl'
            }}>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                العنصر المحدد حالياً: <strong>{selectedItem}</strong>
              </li>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                ترتيب الحدود: من اليسار بدلاً من اليمين
              </li>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                محاذاة النص: إلى اليمين تلقائياً
              </li>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                الخط: استخدام خط عربي مناسب
              </li>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                ارتفاع السطر: مُحسَّن للنص العربي
              </li>
              <li>
                الحالة النشطة: تطبيق الأنماط على العناصر الفرعية والرئيسية
              </li>
            </ul>
          </div>
          
          <div style={{
            marginTop: 'var(--t-space-500)',
            padding: 'var(--t-space-400)',
            backgroundColor: 'var(--t-color-fill-brand-subtle)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-brand)',
            direction: 'rtl'
          }}>
            <p style={{ 
              margin: '0',
              color: 'var(--t-color-text-brand)',
              fontSize: 'var(--t-font-size-300)',
              fontFamily: 'var(--t-font-family-arabic)',
              textAlign: 'right',
              lineHeight: 'var(--t-line-height-arabic, 1.2)'
            }}>
              💡 مرر فوق الشريط الجانبي لتوسيعه ورؤية جميع التسميات. 
              انقر على "لوحة التحكم" لرؤية القائمة الفرعية.
            </p>
          </div>
        </div>
      </div>
    );
  },
  args: {
    selectedItem: 'electronics',
    position: 'left',
    hoverExpand: true
  },
  parameters: {
    docs: {
      description: {
        story: 'RTL example with Arabic menu labels. Demonstrates right-to-left layout, Arabic font family, proper text alignment, and line-height adjustments for Arabic text.'
      }
    }
  }
};

export const HiddenBottomSection: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState('analytics');
    const [showBottom, setShowBottom] = useState(false);
    
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar
          {...args}
          selectedItem={selectedItem}
          onItemChange={setSelectedItem}
          showBottomSection={showBottom}
          menuItems={createMenuItems(false)}
          secondaryItems={createSecondaryItems(false)}
          bottomItems={createBottomItems(false)}
        />
        <div style={{
          flex: 1,
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          overflow: 'auto'
        }}>
          <div style={{ marginBottom: 'var(--t-space-500)' }}>
            <button
              onClick={() => setShowBottom(!showBottom)}
              style={{
                padding: 'var(--t-space-200) var(--t-space-400)',
                backgroundColor: showBottom ? 'var(--t-color-fill-danger)' : 'var(--t-color-fill-brand)',
                color: 'var(--t-color-text-on-fill)',
                border: 'none',
                borderRadius: 'var(--t-border-radius-200)',
                cursor: 'pointer',
                fontSize: 'var(--t-font-size-300)',
                marginRight: 'var(--t-space-300)'
              }}
            >
              {showBottom ? 'Hide' : 'Show'} Bottom Section
            </button>
            <span style={{ 
              color: 'var(--t-color-text-secondary)',
              fontSize: 'var(--t-font-size-300)'
            }}>
              Status: <strong>{showBottom ? 'Visible' : 'Hidden'}</strong>
            </span>
          </div>
          
          <h1 style={{ 
            margin: '0 0 var(--t-space-400) 0',
            fontSize: 'var(--t-font-size-700)',
            color: 'var(--t-color-text-primary)'
          }}>
            Toggle Bottom Section
          </h1>
          
          <p style={{ 
            color: 'var(--t-color-text-secondary)',
            marginBottom: 'var(--t-space-400)',
            lineHeight: '1.5'
          }}>
            This example demonstrates the <code>showBottomSection</code> prop which controls 
            the visibility of the bottom section containing Settings and Logout items.
          </p>
          
          <div style={{
            marginTop: 'var(--t-space-500)',
            padding: 'var(--t-space-500)',
            backgroundColor: 'var(--t-color-surface-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            border: '1px solid var(--t-color-border-secondary)'
          }}>
            <h3 style={{ 
              margin: '0 0 var(--t-space-300) 0',
              fontSize: 'var(--t-font-size-500)',
              color: 'var(--t-color-text-primary)'
            }}>
              Current State
            </h3>
            <ul style={{ 
              margin: '0',
              padding: '0 0 0 var(--t-space-400)',
              color: 'var(--t-color-text-secondary)',
              fontSize: 'var(--t-font-size-300)',
              lineHeight: '1.5'
            }}>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                Selected item: <strong>{selectedItem}</strong>
              </li>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                Bottom section visible: <strong>{showBottom ? 'Yes' : 'No'}</strong>
              </li>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                Contains: Settings and Logout items
              </li>
              <li>
                Use case: Minimal sidebars, role-based access control
              </li>
            </ul>
          </div>
          
          <div style={{
            marginTop: 'var(--t-space-500)',
            padding: 'var(--t-space-400)',
            backgroundColor: showBottom ? 'var(--t-color-fill-success-subtle)' : 'var(--t-color-fill-warning-subtle)',
            borderRadius: 'var(--t-border-radius-200)',
            border: `1px solid ${showBottom ? 'var(--t-color-border-success)' : 'var(--t-color-border-warning)'}`
          }}>
            <h4 style={{ 
              margin: '0 0 var(--t-space-200) 0',
              fontSize: 'var(--t-font-size-400)',
              color: showBottom ? 'var(--t-color-text-success)' : 'var(--t-color-text-warning)',
              fontWeight: 'var(--t-font-weight-semibold)'
            }}>
              {showBottom ? '✅ Bottom Section Enabled' : '⚠️ Bottom Section Hidden'}
            </h4>
            <p style={{ 
              margin: '0',
              color: showBottom ? 'var(--t-color-text-success)' : 'var(--t-color-text-warning)',
              fontSize: 'var(--t-font-size-300)',
              lineHeight: '1.4'
            }}>
              {showBottom 
                ? 'Settings and Logout items are visible at the bottom of the sidebar. Users can access account settings and sign out.'
                : 'Bottom section is hidden. This creates a cleaner, more minimal sidebar layout without settings/logout options.'
              }
            </p>
          </div>
          
          <div style={{
            marginTop: 'var(--t-space-500)',
            padding: 'var(--t-space-400)',
            backgroundColor: 'var(--t-color-fill-info-subtle)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-info)'
          }}>
            <h4 style={{ 
              margin: '0 0 var(--t-space-200) 0',
              fontSize: 'var(--t-font-size-400)',
              color: 'var(--t-color-text-info)',
              fontWeight: 'var(--t-font-weight-semibold)'
            }}>
              💡 Usage Tips
            </h4>
            <ul style={{ 
              margin: '0',
              padding: '0 0 0 var(--t-space-400)',
              color: 'var(--t-color-text-info)',
              fontSize: 'var(--t-font-size-300)',
              lineHeight: '1.4'
            }}>
              <li style={{ marginBottom: 'var(--t-space-100)' }}>
                Hide for minimal dashboards or embedded components
              </li>
              <li style={{ marginBottom: 'var(--t-space-100)' }}>
                Show for full application layouts with user management
              </li>
              <li>
                Can be controlled dynamically based on user roles or context
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
  args: {
    hoverExpand: true,
    showBottomSection: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the showBottomSection prop to hide or show the bottom section containing Settings and Logout items. Useful for minimal layouts or role-based access control.'
      }
    }
  }
};