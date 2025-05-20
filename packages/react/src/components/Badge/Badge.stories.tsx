import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Badge.mdx'),
    },
  },
  tags: [],
  args: {
    children: 'Label',
    tone: 'default',
    size: 'medium',
    strong: false,
  },
  argTypes: {
    tone: {
      options: ['default', 'info', 'success', 'warning', 'critical', 'magic'],
      control: { type: 'select' },
    },
    size: {
      options: ['medium', 'large', 'xlarge'],
      control: { type: 'select' },
    },
    strong: {
      control: { type: 'boolean' },
    },
    icon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const AllTones: Story = {
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      gap: '8px',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
        <div style={{ marginBottom: '4px', fontSize: '14px', fontWeight: 'bold' }}>Regular</div>
        <Badge {...args} tone="default">Default</Badge>
        <Badge {...args} tone="info">Info</Badge>
        <Badge {...args} tone="success">Success</Badge>
        <Badge {...args} tone="warning">Warning</Badge>
        <Badge {...args} tone="critical">Critical</Badge>
        <Badge {...args} tone="magic">Magic</Badge>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start', marginLeft: '32px' }}>
        <div style={{ marginBottom: '4px', fontSize: '14px', fontWeight: 'bold' }}>Strong</div>
        <Badge {...args} tone="default" strong>Default</Badge>
        <Badge {...args} tone="info" strong>Info</Badge>
        <Badge {...args} tone="success" strong>Success</Badge>
        <Badge {...args} tone="warning" strong>Warning</Badge>
        <Badge {...args} tone="critical" strong>Critical</Badge>
        <Badge {...args} tone="magic" strong>Magic</Badge>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: '16px',
    }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Regular</div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Badge {...args} size="medium">Medium</Badge>
          <Badge {...args} size="large">Large</Badge>
          <Badge {...args} size="xlarge">X-Large</Badge>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Strong</div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Badge {...args} size="medium" strong>Medium</Badge>
          <Badge {...args} size="large" strong>Large</Badge>
          <Badge {...args} size="xlarge" strong>X-Large</Badge>
        </div>
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    children: 'Badge with icon',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="currentColor"/>
        <path d="M8 4V9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="8" cy="12" r="1" fill="white"/>
      </svg>
    ),
  },
};

export const Strong: Story = {
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      gap: '8px',
      flexWrap: 'wrap',
    }}>
      <Badge {...args} tone="default" strong>Default</Badge>
      <Badge {...args} tone="info" strong>Info</Badge>
      <Badge {...args} tone="success" strong>Success</Badge>
      <Badge {...args} tone="warning" strong>Warning</Badge>
      <Badge {...args} tone="critical" strong>Critical</Badge>
      <Badge {...args} tone="magic" strong>Magic</Badge>
    </div>
  ),
};

export const RTL: Story = {
  render: (args) => (
    <div dir="rtl" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Regular</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge {...args} tone="info">جداب</Badge>
          <Badge {...args} tone="success">نجاح</Badge>
          <Badge {...args} tone="warning">تحذير</Badge>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Strong</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge {...args} tone="info" strong>جداب</Badge>
          <Badge {...args} tone="success" strong>نجاح</Badge>
          <Badge {...args} tone="warning" strong>تحذير</Badge>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>With Icon</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge 
            {...args} 
            tone="info" 
            icon={(
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="currentColor"/>
                <path d="M8 4V9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="8" cy="12" r="1" fill="white"/>
              </svg>
            )}
          >
            معلومات
          </Badge>
        </div>
      </div>
    </div>
  ),
};
