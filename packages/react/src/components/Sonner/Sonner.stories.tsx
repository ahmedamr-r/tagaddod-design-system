import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Sonner, showSonner, SonnerProps } from './Sonner';
import { IconHeart, IconStar, IconBell } from '@tabler/icons-react';

const meta = {
  title: 'Components/Sonner',
  component: Sonner,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Sonner.mdx'),
    },
  },
  tags: [],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'Position of the toast notifications',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark', 'system'],
      description: 'Theme for the toasts',
    },
    duration: {
      control: { type: 'number' },
      description: 'Default duration for toasts in milliseconds',
    },
    visibleToasts: {
      control: { type: 'number' },
      description: 'Maximum number of visible toasts',
    },
    closeButton: {
      control: { type: 'boolean' },
      description: 'Show close button on toasts',
    },
    richColors: {
      control: { type: 'boolean' },
      description: 'Enable rich colors for different toast types',
    },
    expand: {
      control: { type: 'boolean' },
      description: 'Expand toasts on hover',
    },
  },
  args: {
    position: 'bottom-right',
    theme: 'system',
    duration: 4000,
    visibleToasts: 3,
    closeButton: false,
    richColors: true,
    expand: false,
  },
} satisfies Meta<typeof Sonner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demo buttons
const ToastDemo: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '300px' }}>
    {children}
    <Sonner position="bottom-right" expand={false} />
  </div>
);

const DemoButton: React.FC<{ 
  onClick: () => void; 
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}> = ({ onClick, children, variant = 'primary' }) => (
  <button
    onClick={onClick}
    style={{
      padding: '8px 16px',
      borderRadius: '6px',
      border: variant === 'primary' ? 'none' : '1px solid #ccc',
      backgroundColor: variant === 'primary' ? '#007bff' : 'white',
      color: variant === 'primary' ? 'white' : '#333',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
    }}
  >
    {children}
  </button>
);

export const Default: Story = {
  render: (args: SonnerProps) => (
    <ToastDemo>
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Default Toast',
          description: 'This is a default information toast.'
        })}
      >
        Show Default Toast
      </DemoButton>
      <Sonner {...args} />
    </ToastDemo>
  ),
};

export const ToastTypes: Story = {
  render: () => (
    <ToastDemo>
      <DemoButton 
        onClick={() => showSonner.success({
          title: 'Title',
          description: 'Description',
          iconBackground: true
        })}
      >
        Success (With Icon Background)
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.success({
          title: 'Title',
          description: 'Description',
          iconBackground: false
        })}
      >
        Success (No Icon Background)
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.error({
          title: 'Title',
          description: 'Description',
          iconBackground: true
        })}
      >
        Error (With Icon Background)
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.error({
          title: 'Title',
          description: 'Description',
          iconBackground: false
        })}
      >
        Error (No Icon Background)
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Title',
          description: 'Description',
          iconBackground: true
        })}
      >
        Default (With Icon Background)
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Title',
          description: 'Description',
          iconBackground: false
        })}
      >
        Default (No Icon Background)
      </DemoButton>
    </ToastDemo>
  ),
};

export const WithActions: Story = {
  render: () => (
    <ToastDemo>
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'This is a headless toast',
          description: 'You have full control of styles and jsx, while still having the animations.',
          action: {
            label: 'Reply',
            onClick: () => alert('Reply clicked!')
          }
        })}
      >
        Headless Toast (Like Screenshot)
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'New Message',
          description: 'You have received a new message from John Doe.',
          action: {
            label: 'View',
            onClick: () => alert('Viewing message!')
          }
        })}
      >
        Toast with Action
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.warning({
          title: 'Unsaved Changes',
          description: 'You have unsaved changes. Do you want to save them?',
          action: {
            label: 'Save',
            onClick: () => alert('Saving changes!')
          },
          cancel: {
            label: 'Discard',
            onClick: () => alert('Discarding changes!')
          }
        })}
      >
        Toast with Action & Cancel
      </DemoButton>
    </ToastDemo>
  ),
};

export const RTLSupport: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>LTR Direction (Default)</h3>
        <ToastDemo>
          <DemoButton 
            onClick={() => showSonner.error({
              title: 'Title',
              description: 'Description',
              iconBackground: true
            })}
          >
            Error (LTR)
          </DemoButton>
          
          <DemoButton 
            onClick={() => showSonner.success({
              title: 'Title',
              description: 'Description',
              iconBackground: true
            })}
          >
            Success (LTR)
          </DemoButton>
          
          <DemoButton 
            onClick={() => showSonner.info({
              title: 'Title',
              description: 'Description',
              iconBackground: true
            })}
          >
            Default (LTR)
          </DemoButton>
        </ToastDemo>
      </div>
      
      <div dir="rtl">
        <h3 style={{ margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif', textAlign: 'right' }}>RTL Direction (Arabic)</h3>
        <ToastDemo>
          <DemoButton 
            onClick={() => showSonner.error({
              title: 'العنوان',
              description: 'الوصف',
              iconBackground: true
            })}
          >
            خطأ (RTL)
          </DemoButton>
          
          <DemoButton 
            onClick={() => showSonner.success({
              title: 'العنوان',
              description: 'الوصف',
              iconBackground: true
            })}
          >
            نجح (RTL)
          </DemoButton>
          
          <DemoButton 
            onClick={() => showSonner.info({
              title: 'العنوان',
              description: 'الوصف',
              iconBackground: true
            })}
          >
            افتراضي (RTL)
          </DemoButton>
        </ToastDemo>
      </div>
    </div>
  ),
};

export const IconBackgroundVariants: Story = {
  render: () => (
    <ToastDemo>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>Icons with Background</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <DemoButton 
            onClick={() => showSonner.error({
              title: 'Title',
              description: 'Description',
              iconBackground: true
            })}
          >
            Error (Background)
          </DemoButton>
          
          <DemoButton 
            onClick={() => showSonner.success({
              title: 'Title',
              description: 'Description',
              iconBackground: true
            })}
          >
            Success (Background)
          </DemoButton>
          
          <DemoButton 
            onClick={() => showSonner.info({
              title: 'Title',
              description: 'Description',
              iconBackground: true
            })}
          >
            Default (Background)
          </DemoButton>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>Icons without Background</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <DemoButton 
            onClick={() => showSonner.error({
              title: 'Title',
              description: 'Description',
              iconBackground: false
            })}
          >
            Error (No Background)
          </DemoButton>
          
          <DemoButton 
            onClick={() => showSonner.success({
              title: 'Title',
              description: 'Description',
              iconBackground: false
            })}
          >
            Success (No Background)
          </DemoButton>
          
          <DemoButton 
            onClick={() => showSonner.info({
              title: 'Title',
              description: 'Description',
              iconBackground: false
            })}
          >
            Default (No Background)
          </DemoButton>
        </div>
      </div>
    </ToastDemo>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <ToastDemo>
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Liked!',
          description: 'You liked this post.',
          icon: <IconHeart size={16} style={{ color: '#e74c3c' }} />,
          iconBackground: true
        })}
      >
        Custom Heart Icon
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.success({
          title: 'Starred',
          description: 'Added to your favorites.',
          icon: <IconStar size={16} style={{ color: '#f39c12' }} />,
          iconBackground: true
        })}
      >
        Custom Star Icon
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Notification',
          description: 'You have new notifications.',
          icon: <IconBell size={16} style={{ color: '#3498db' }} />,
          iconBackground: false
        })}
      >
        Custom Bell Icon (No Background)
      </DemoButton>
    </ToastDemo>
  ),
};

export const LongContent: Story = {
  render: () => (
    <ToastDemo>
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Very Long Toast Title That Might Wrap to Multiple Lines',
          description: 'This is a very long description that demonstrates how the toast component handles longer content. It should wrap properly and maintain good readability while not breaking the layout. The text should be properly contained and the toast should expand to accommodate the content.'
        })}
      >
        Long Content Toast
      </DemoButton>
    </ToastDemo>
  ),
};

export const MultipleToasts: Story = {
  render: () => (
    <ToastDemo>
      <DemoButton 
        onClick={() => {
          showSonner.success({ title: 'First toast', description: 'This is the first toast' });
          setTimeout(() => showSonner.info({ title: 'Second toast', description: 'This is the second toast' }), 500);
          setTimeout(() => showSonner.warning({ title: 'Third toast', description: 'This is the third toast' }), 1000);
        }}
      >
        Show Multiple Toasts
      </DemoButton>
      
      <DemoButton 
        variant="secondary"
        onClick={() => showSonner.dismissAll()}
      >
        Dismiss All
      </DemoButton>
    </ToastDemo>
  ),
};

export const DifferentPositions: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', minWidth: '600px' }}>
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Top Left',
          description: 'Toast positioned at top-left'
        })}
      >
        Top Left
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Top Center', 
          description: 'Toast positioned at top-center'
        })}
      >
        Top Center
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Top Right',
          description: 'Toast positioned at top-right'
        })}
      >
        Top Right
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Bottom Left',
          description: 'Toast positioned at bottom-left'
        })}
      >
        Bottom Left
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Bottom Center',
          description: 'Toast positioned at bottom-center'
        })}
      >
        Bottom Center
      </DemoButton>
      
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Bottom Right',
          description: 'Toast positioned at bottom-right'
        })}
      >
        Bottom Right
      </DemoButton>
      
      {/* Multiple Sonner components for different positions */}
      <Sonner position="top-left" expand={false} />
      <Sonner position="top-center" expand={false} />
      <Sonner position="top-right" expand={false} />
      <Sonner position="bottom-left" expand={false} />
      <Sonner position="bottom-center" expand={false} />
      <Sonner position="bottom-right" expand={false} />
    </div>
  ),
};

export const WithCloseButton: Story = {
  args: {
    closeButton: true,
    expand: false,
  },
  render: (args: SonnerProps) => (
    <ToastDemo>
      <DemoButton 
        onClick={() => showSonner.info({
          title: 'Closable Toast',
          description: 'This toast has a close button.'
        })}
      >
        Show Closable Toast
      </DemoButton>
      <Sonner {...args} />
    </ToastDemo>
  ),
};

export const AlwaysVisible: Story = {
  args: {
    closeButton: true,
    expand: false,
    duration: Infinity, // Never auto-dismiss
  },
  render: (args: SonnerProps) => {
    // Show toast immediately when story loads
    React.useEffect(() => {
      const timer = setTimeout(() => {
        showSonner.info({
          title: 'Persistent Toast for Testing',
          description: 'This toast stays visible to test the close icon size. Click the X to dismiss.',
          duration: Infinity, // Never auto-dismiss
        });
      }, 100);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px', 
        minWidth: '300px',
        minHeight: '200px'
      }}>
        <p style={{ 
          fontFamily: 'Outfit, sans-serif', 
          fontSize: '14px', 
          color: '#666',
          margin: 0 
        }}>
          This story automatically shows a persistent toast for testing the close icon size.
        </p>
        <DemoButton 
          onClick={() => showSonner.error({
            title: 'Another Test Toast',
            description: 'This is another test toast with close button.',
            duration: Infinity,
          })}
        >
          Show Another Persistent Toast
        </DemoButton>
        <DemoButton 
          variant="secondary"
          onClick={() => showSonner.dismissAll()}
        >
          Dismiss All Toasts
        </DemoButton>
        <Sonner {...args} />
      </div>
    );
  },
}; 