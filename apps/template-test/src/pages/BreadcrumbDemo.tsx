import React from 'react';
import { useTheme, Button, Card } from '@tagaddod-design/react';
import { Breadcrumb } from '@/components/ui';
import type { BreadcrumbItem } from '@/components/ui';
import { IconHome, IconSettings, IconUsers, IconFileText } from '@tabler/icons-react';

export default function BreadcrumbDemo() {
  const { isRTL, setDirection, direction, setLocale } = useTheme();

  const handleDirectionChange = (newDirection: 'ltr' | 'rtl') => {
    setDirection(newDirection);
    setLocale(newDirection === 'rtl' ? 'ar' : 'en');
  };

  // English breadcrumb items
  const englishItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops' }
  ];

  // Arabic breadcrumb items
  const arabicItems: BreadcrumbItem[] = [
    { label: 'الرئيسية', href: '/' },
    { label: 'المنتجات', href: '/products' },
    { label: 'الإلكترونيات', href: '/products/electronics' },
    { label: 'أجهزة الكمبيوتر المحمولة' }
  ];

  // Simple breadcrumb
  const simpleItems: BreadcrumbItem[] = [
    { label: direction === 'rtl' ? 'الرئيسية' : 'Home', href: '/' },
    { label: direction === 'rtl' ? 'الإعدادات' : 'Settings' }
  ];

  // Long breadcrumb (for collapsing demo)
  const longItems: BreadcrumbItem[] = [
    { label: direction === 'rtl' ? 'الرئيسية' : 'Home', href: '/' },
    { label: direction === 'rtl' ? 'المستخدمون' : 'Users', href: '/users' },
    { label: direction === 'rtl' ? 'المجموعات' : 'Groups', href: '/users/groups' },
    { label: direction === 'rtl' ? 'المسؤولون' : 'Admins', href: '/users/groups/admins' },
    { label: direction === 'rtl' ? 'الأذونات' : 'Permissions', href: '/users/groups/admins/permissions' },
    { label: direction === 'rtl' ? 'إعدادات متقدمة' : 'Advanced Settings' }
  ];

  const handleItemClick = (event: React.MouseEvent, label: string) => {
    event.preventDefault();
    alert(`Clicked: ${label}`);
  };

  return (
    <div style={{
        padding: 'var(--t-space-600)',
        minHeight: '100vh',
        backgroundColor: 'var(--t-color-surface-secondary)',
        fontFamily: direction === 'rtl' ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)'
      }}>
        {/* Header */}
        <div style={{
          marginBottom: 'var(--t-space-600)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            font: 'var(--t-typography-heading-lg)',
            color: 'var(--t-color-text-primary)',
            margin: 0
          }}>
            {direction === 'rtl' ? 'عرض مكون التنقل التفصيلي' : 'Breadcrumb Component Demo'}
          </h1>
          <div style={{ display: 'flex', gap: 'var(--t-space-200)' }}>
            <Button
              variant={direction === 'ltr' ? 'filled' : 'outlined'}
              onClick={() => handleDirectionChange('ltr')}
            >
              English (LTR)
            </Button>
            <Button
              variant={direction === 'rtl' ? 'filled' : 'outlined'}
              onClick={() => handleDirectionChange('rtl')}
            >
              العربية (RTL)
            </Button>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--t-space-600)'
        }}>
          {/* Basic Breadcrumb */}
          <Card>
            <h2 style={{
              font: 'var(--t-typography-heading-md)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-400)'
            }}>
              {direction === 'rtl' ? 'تنقل بسيط' : 'Basic Breadcrumb'}
            </h2>
            <Breadcrumb items={direction === 'rtl' ? arabicItems : englishItems} />
          </Card>

          {/* Simple Breadcrumb */}
          <Card>
            <h2 style={{
              font: 'var(--t-typography-heading-md)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-400)'
            }}>
              {direction === 'rtl' ? 'تنقل قصير' : 'Short Breadcrumb'}
            </h2>
            <Breadcrumb items={simpleItems} />
          </Card>

          {/* Breadcrumb with Click Handlers */}
          <Card>
            <h2 style={{
              font: 'var(--t-typography-heading-md)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-400)'
            }}>
              {direction === 'rtl' ? 'مع معالجات النقر' : 'With Click Handlers'}
            </h2>
            <Breadcrumb
              items={(direction === 'rtl' ? arabicItems : englishItems).map(item => ({
                ...item,
                onClick: (e) => handleItemClick(e, item.label)
              }))}
            />
          </Card>

          {/* Collapsed Breadcrumb (maxItems) */}
          <Card>
            <h2 style={{
              font: 'var(--t-typography-heading-md)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-400)'
            }}>
              {direction === 'rtl' ? 'تنقل مطوي (الحد الأقصى 4 عناصر)' : 'Collapsed Breadcrumb (maxItems: 4)'}
            </h2>
            <Breadcrumb items={longItems} maxItems={4} />
          </Card>

          {/* Custom Separator */}
          <Card>
            <h2 style={{
              font: 'var(--t-typography-heading-md)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-400)'
            }}>
              {direction === 'rtl' ? 'فاصل مخصص' : 'Custom Separator'}
            </h2>
            <Breadcrumb
              items={direction === 'rtl' ? arabicItems : englishItems}
              separator={<span style={{ color: 'var(--t-color-text-secondary)' }}>/</span>}
            />
          </Card>

          {/* Usage Examples */}
          <Card>
            <h2 style={{
              font: 'var(--t-typography-heading-md)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-400)'
            }}>
              {direction === 'rtl' ? 'أمثلة الاستخدام' : 'Usage Examples'}
            </h2>
            <div style={{
              backgroundColor: 'var(--t-color-surface-tertiary)',
              padding: 'var(--t-space-400)',
              borderRadius: 'var(--t-border-radius-150)',
              fontFamily: 'monospace',
              fontSize: 'var(--t-font-size-200)',
              overflow: 'auto'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`import { Breadcrumb } from '@/components/ui';

// Basic usage
<Breadcrumb items={[
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Details' }
]} />

// With click handlers
<Breadcrumb items={[
  { label: 'Home', href: '/', onClick: handleClick },
  { label: 'Current Page' }
]} />

// Collapsed breadcrumb
<Breadcrumb
  items={longItemsList}
  maxItems={4}
/>

// Custom separator
<Breadcrumb
  items={items}
  separator={<span>/</span>}
/>`}
              </pre>
            </div>
          </Card>

          {/* RTL Features */}
          <Card>
            <h2 style={{
              font: 'var(--t-typography-heading-md)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-400)'
            }}>
              {direction === 'rtl' ? 'ميزات RTL' : 'RTL Features'}
            </h2>
            <ul style={{
              color: 'var(--t-color-text-primary)',
              paddingInlineStart: 'var(--t-space-500)',
              lineHeight: direction === 'rtl' ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
            }}>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                {direction === 'rtl'
                  ? 'كشف تلقائي للاتجاه (RTL/LTR) بناءً على document.dir'
                  : 'Automatic direction detection (RTL/LTR) based on document.dir'}
              </li>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                {direction === 'rtl'
                  ? 'أيقونات الفاصل تتكيف تلقائياً (شيفرون يسار لـ RTL، شيفرون يمين لـ LTR)'
                  : 'Separator icons adapt automatically (chevron-left for RTL, chevron-right for LTR)'}
              </li>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                {direction === 'rtl'
                  ? 'تعديلات ارتفاع السطر المناسبة للنص العربي'
                  : 'Proper line-height adjustments for Arabic text'}
              </li>
              <li style={{ marginBottom: 'var(--t-space-200)' }}>
                {direction === 'rtl'
                  ? 'تبديل عائلة الخطوط (Tajawal للعربية، Outfit للإنجليزية)'
                  : 'Font family switching (Tajawal for Arabic, Outfit for English)'}
              </li>
              <li>
                {direction === 'rtl'
                  ? 'تخطيط متسق باستخدام رموز التصميم'
                  : 'Consistent layout using design tokens'}
              </li>
            </ul>
          </Card>
        </div>
      </div>
  );
}
