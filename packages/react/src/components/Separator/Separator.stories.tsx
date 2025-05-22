import type { Meta, StoryObj } from '@storybook/react';
import { Separator, separatorOrientations } from './Separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Separator.mdx'),
    },
  },
  tags: [],
  argTypes: {
    orientation: {
      control: 'select',
      options: separatorOrientations,
      description: 'The orientation of the separator'
    },
    decorative: {
      control: 'boolean',
      description: 'When true, the separator is purely decorative and ignored by screen readers'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    orientation: 'horizontal',
    decorative: false,
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic separator
export const Default: Story = {
  render: (args) => (
    <div style={{ width: '300px', padding: '20px' }}>
      <div style={{ marginBottom: '16px' }}>Content above</div>
      <Separator {...args} />
      <div style={{ marginTop: '16px' }}>Content below</div>
    </div>
  ),
};

// Horizontal separator (default)
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div style={{ width: '300px', padding: '20px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>Section Title</h3>
      <p style={{ margin: '0 0 16px 0' }}>This is some content that appears before the separator.</p>
      <Separator {...args} />
      <p style={{ margin: '16px 0 0 0' }}>This is content that appears after the separator.</p>
    </div>
  ),
};

// Vertical separator
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      height: '80px',
      padding: '20px',
      gap: '0'
    }}>
      <div style={{ padding: '0 16px' }}>Left content</div>
      <Separator {...args} />
      <div style={{ padding: '0 16px' }}>Right content</div>
    </div>
  ),
};

// Decorative separator
export const Decorative: Story = {
  args: {
    decorative: true,
  },
  render: (args) => (
    <div style={{ width: '300px', padding: '20px' }}>
      <div style={{ marginBottom: '16px' }}>This separator is purely decorative</div>
      <Separator {...args} />
      <div style={{ marginTop: '16px' }}>Screen readers will ignore it</div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'When decorative is true, the separator uses role="presentation" and is ignored by screen readers.',
      },
    },
  },
};

// Semantic separator
export const Semantic: Story = {
  args: {
    decorative: false,
  },
  render: (args) => (
    <div style={{ width: '300px', padding: '20px' }}>
      <div style={{ marginBottom: '16px' }}>This separator is semantic</div>
      <Separator {...args} />
      <div style={{ marginTop: '16px' }}>Screen readers will announce it</div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'When decorative is false, the separator uses role="separator" and will be announced by screen readers.',
      },
    },
  },
};

// Navigation example with vertical separators
export const NavigationExample: Story = {
  render: () => (
    <nav style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '16px',
      backgroundColor: 'var(--t-color-surface-background, #f8f9fa)',
      borderRadius: '8px'
    }}>
      <a href="#" style={{ textDecoration: 'none', padding: '0 16px' }}>Home</a>
      <Separator orientation="vertical" decorative />
      <a href="#" style={{ textDecoration: 'none', padding: '0 16px' }}>About</a>
      <Separator orientation="vertical" decorative />
      <a href="#" style={{ textDecoration: 'none', padding: '0 16px' }}>Contact</a>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common usage in navigation with vertical separators between menu items.',
      },
    },
  },
};

// Content section example
export const ContentSectionExample: Story = {
  render: () => (
    <article style={{ width: '400px', padding: '24px' }}>
      <h2 style={{ margin: '0 0 16px 0' }}>Article Title</h2>
      <p style={{ margin: '0 0 16px 0', color: '#666' }}>Published on January 15, 2024</p>
      
      <Separator decorative={false} />
      
      <p style={{ margin: '16px 0' }}>
        This is the article content. The separator above helps distinguish the metadata 
        from the main content while being semantically meaningful for screen readers.
      </p>
      
      <Separator decorative={false} />
      
      <footer style={{ margin: '16px 0 0 0', fontSize: '14px', color: '#666' }}>
        Tags: React, TypeScript, Design System
      </footer>
    </article>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of using separators to structure content sections in an article.',
      },
    },
  },
};

// Different orientations comparison
export const OrientationComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0' }}>Horizontal Separator</h3>
        <div style={{ width: '300px' }}>
          <div>Content above</div>
          <Separator orientation="horizontal" />
          <div>Content below</div>
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0' }}>Vertical Separator</h3>
        <div style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
          <div style={{ padding: '0 16px' }}>Left</div>
          <Separator orientation="vertical" />
          <div style={{ padding: '0 16px' }}>Center</div>
          <Separator orientation="vertical" />
          <div style={{ padding: '0 16px' }}>Right</div>
        </div>
      </div>
    </div>
  ),
};

// RTL example
export const RTLExample: Story = {
  render: () => (
    <div style={{ width: '300px', padding: '20px' }}>
      <div style={{ marginBottom: '16px', textAlign: 'right' }}>محتوى عربي أعلى</div>
      <Separator />
      <div style={{ marginTop: '16px', textAlign: 'right' }}>محتوى عربي أسفل</div>
    </div>
  ),
  parameters: {
    globals: {
      direction: 'rtl',
    },
    docs: {
      description: {
        story: 'Separator component with Arabic content - switch to RTL mode to see proper alignment.',
      },
    },
  },
};

// Complex layout example
export const ComplexLayoutExample: Story = {
  render: () => (
    <div style={{ 
      width: '500px', 
      padding: '24px',
      border: '1px solid var(--t-color-border-primary, #e0e0e0)',
      borderRadius: '8px'
    }}>
      {/* Header */}
      <header style={{ marginBottom: '16px' }}>
        <h2 style={{ margin: '0 0 8px 0' }}>Dashboard</h2>
        <p style={{ margin: '0', color: '#666' }}>Welcome back, User!</p>
      </header>
      
      <Separator />
      
      {/* Main content area */}
      <main style={{ margin: '16px 0' }}>
        <div style={{ display: 'flex', gap: '0', alignItems: 'stretch' }}>
          {/* Sidebar */}
          <aside style={{ padding: '0 16px 0 0', minWidth: '120px' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Navigation</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ margin: '0 0 8px 0' }}><a href="#">Dashboard</a></li>
              <li style={{ margin: '0 0 8px 0' }}><a href="#">Analytics</a></li>
              <li style={{ margin: '0 0 8px 0' }}><a href="#">Settings</a></li>
            </ul>
          </aside>
          
          <Separator orientation="vertical" />
          
          {/* Content */}
          <section style={{ padding: '0 0 0 16px', flex: 1 }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Recent Activity</h3>
            <p style={{ margin: '0 0 8px 0' }}>• Project updated</p>
            <p style={{ margin: '0 0 8px 0' }}>• New team member added</p>
            <p style={{ margin: '0' }}>• Report generated</p>
          </section>
        </div>
      </main>
      
      <Separator />
      
      {/* Footer */}
      <footer style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
        Last updated: 2 hours ago
      </footer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complex layout example showing both horizontal and vertical separators in a dashboard-like interface.',
      },
    },
  },
};

// Accessibility showcase
export const AccessibilityShowcase: Story = {
  render: () => (
    <div style={{ width: '400px', padding: '20px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>Accessibility Examples</h3>
      
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Semantic Separator</h4>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
          This separator has <code>role="separator"</code> and will be announced by screen readers.
        </p>
        <div>Section 1 content</div>
        <Separator decorative={false} />
        <div>Section 2 content</div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Decorative Separator</h4>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
          This separator has <code>role="presentation"</code> and will be ignored by screen readers.
        </p>
        <div>Visually separated content</div>
        <Separator decorative={true} />
        <div>More visually separated content</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the difference between semantic and decorative separators for accessibility.',
      },
    },
  },
};
