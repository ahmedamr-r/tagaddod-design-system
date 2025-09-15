import { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./ScrollArea.mdx'),
    },
  },
  tags: [],
  argTypes: {
    type: {
      control: 'radio',
      options: ['always', 'scroll', 'hover', 'auto'],
    },
    scrollHideDelay: {
      control: { type: 'range', min: 0, max: 2000, step: 100 },
    },
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    horizontal: {
      control: 'boolean',
    },
    vertical: {
      control: 'boolean',
    },
    dir: {
      control: 'radio',
      options: ['ltr', 'rtl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

// Sample content for stories
const LONG_TEXT = Array.from({ length: 20 }, (_, i) => (
  <p key={i} style={{ margin: '16px 0', lineHeight: '1.6' }}>
    This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
));

const WIDE_CONTENT = (
  <div style={{ width: '800px', padding: '16px' }}>
    <h3>Wide Content Example</h3>
    <p>This content is wider than the scroll area container, demonstrating horizontal scrolling capabilities.</p>
    <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          style={{
            minWidth: '120px',
            padding: '12px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          Card {i + 1}
        </div>
      ))}
    </div>
  </div>
);

// Default ScrollArea
export const Default: Story = {
  args: {
    type: 'hover',
    height: '200px',
    width: '300px',
    children: (
      <div style={{ padding: '16px' }}>
        <h4>Scrollable Content</h4>
        {LONG_TEXT.slice(0, 10)}
      </div>
    ),
  },
};

// Different Types
export const Types: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', width: '800px' }}>
      <div>
        <h4 style={{ marginBottom: '8px' }}>Type: Hover (default)</h4>
        <ScrollArea type="hover" height="150px" width="300px">
          <div style={{ padding: '16px' }}>
            {LONG_TEXT.slice(0, 8)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px' }}>Type: Always</h4>
        <ScrollArea type="always" height="150px" width="300px">
          <div style={{ padding: '16px' }}>
            {LONG_TEXT.slice(0, 8)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px' }}>Type: Scroll</h4>
        <ScrollArea type="scroll" height="150px" width="300px">
          <div style={{ padding: '16px' }}>
            {LONG_TEXT.slice(0, 8)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px' }}>Type: Auto</h4>
        <ScrollArea type="auto" height="150px" width="300px">
          <div style={{ padding: '16px' }}>
            {LONG_TEXT.slice(0, 8)}
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
};

// Horizontal Scrolling
export const HorizontalScrolling: Story = {
  args: {
    type: 'hover',
    height: '200px',
    width: '400px',
    horizontal: true,
    vertical: false,
    children: WIDE_CONTENT,
  },
};

// Both Scrollbars
export const BothScrollbars: Story = {
  args: {
    type: 'hover',
    height: '200px',
    width: '300px',
    horizontal: true,
    vertical: true,
    children: (
      <div style={{ width: '600px', padding: '16px' }}>
        <h4>Both Horizontal and Vertical Scrolling</h4>
        {LONG_TEXT}
        <div style={{ marginTop: '20px' }}>
          <p>This content extends both vertically and horizontally to demonstrate both scrollbars working together.</p>
        </div>
      </div>
    ),
  },
};

// Different Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <h4 style={{ marginBottom: '8px' }}>Small (200x150px)</h4>
        <ScrollArea height="150px" width="200px">
          <div style={{ padding: '12px' }}>
            {LONG_TEXT.slice(0, 6)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px' }}>Medium (300x200px)</h4>
        <ScrollArea height="200px" width="300px">
          <div style={{ padding: '16px' }}>
            {LONG_TEXT.slice(0, 8)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px' }}>Large (400x250px)</h4>
        <ScrollArea height="250px" width="400px">
          <div style={{ padding: '20px' }}>
            {LONG_TEXT.slice(0, 10)}
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
};

// RTL Support
export const RTLSupport: Story = {
  args: {
    type: 'always',
    height: '200px',
    width: '300px',
    dir: 'rtl',
    children: (
      <div style={{ padding: '16px', textAlign: 'right', direction: 'rtl' }}>
        <h4>محتوى عربي قابل للتمرير</h4>
        <p>هذا نص تجريبي باللغة العربية لاختبار دعم الاتجاه من اليمين إلى اليسار.</p>
        <p>يحتوي هذا المكون على محتوى طويل يتطلب التمرير للعرض الكامل.</p>
        <p>النص العربي يتدفق من اليمين إلى اليسار ويجب أن يعمل التمرير بشكل صحيح.</p>
        <p>هذه فقرة إضافية لإظهار كيفية عمل التمرير العمودي مع النص العربي.</p>
        <p>المزيد من النص لجعل المحتوى أطول ويتطلب التمرير.</p>
        <p>فقرة أخيرة لإكمال المثال على النص العربي الطويل.</p>
      </div>
    ),
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  },
};

// Custom Content Examples
export const CustomContent: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', width: '700px' }}>
      <div>
        <h4 style={{ marginBottom: '8px' }}>List Content</h4>
        <ScrollArea height="200px" width="300px">
          <div style={{ padding: '16px' }}>
            <h5>Todo List</h5>
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #eee',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <input type="checkbox" />
                <span>Task {i + 1}: Complete project milestone</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px' }}>Card Grid</h4>
        <ScrollArea height="200px" width="300px">
          <div style={{ padding: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    textAlign: 'center',
                    border: '1px solid #dee2e6',
                  }}
                >
                  <strong>Card {i + 1}</strong>
                  <p style={{ fontSize: '12px', margin: '4px 0 0' }}>Sample content</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
};