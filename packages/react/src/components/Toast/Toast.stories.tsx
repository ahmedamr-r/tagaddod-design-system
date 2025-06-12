import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Toast, ToastProvider, ToastViewport, toastTypes, toastPositions } from './Toast';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Toast.mdx'),
    },
  },
  tags: [],
  argTypes: {
    type: {
      control: 'select',
      options: toastTypes,
      description: 'The type of toast that affects styling and icon'
    },
    title: {
      control: 'text',
      description: 'The main title of the toast'
    },
    description: {
      control: 'text',
      description: 'Optional description text'
    },
    showDescription: {
      control: 'boolean',
      description: 'Whether to show the description'
    },
    showClose: {
      control: 'boolean',
      description: 'Whether to show the close button'
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show an icon'
    },
    iconWithBackground: {
      control: 'boolean',
      description: 'Whether the icon has a background container'
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds before auto-close (0 = no auto-close)'
    },
  },
  args: {
    type: 'default',
    title: 'Title',
    description: 'Description',
    showDescription: true,
    showClose: true,
    showIcon: true,
    iconWithBackground: true,
    duration: 5000,
    open: true,
  },
  decorators: [
    (Story, context) => {
      // For position demo, don't add default viewport
      if (context.name === 'ToastPositions') {
        return (
          <ToastProvider>
            <div style={{ padding: '20px', position: 'relative', minHeight: '400px' }}>
              <Story />
            </div>
          </ToastProvider>
        );
      }
      
      return (
        <ToastProvider>
          <div style={{ padding: '20px', position: 'relative', minHeight: '200px' }}>
            <Story />
            <ToastViewport position="bottom-left" />
          </div>
        </ToastProvider>
      );
    },
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic toast types
export const Default: Story = {
  args: {
    title: 'Title',
    description: 'Description',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Title',
    description: 'Description',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Title',
    description: 'Description',
  },
};

// Property variations
export const WithoutDescription: Story = {
  args: {
    title: 'Title',
    showDescription: false,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    showClose: false,
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    showIcon: false,
  },
};

export const IconWithBackground: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    showIcon: true,
    iconWithBackground: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with icon that has a background container',
      },
    },
  },
};

export const IconWithoutBackground: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    showIcon: true,
    iconWithBackground: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with icon displayed freely without background container',
      },
    },
  },
};

// RTL examples
export const RtlContent: Story = {
  args: {
    title: 'عنوان',
    description: 'وصف',
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with Arabic content - switch to RTL mode to see proper text alignment',
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => {
    const [toasts, setToasts] = useState<Array<{
      id: string;
      type: 'default' | 'success' | 'error';
      title: string;
      description?: string;
      showDescription?: boolean;
      showClose?: boolean;
      showIcon?: boolean;
    }>>([]);

    const addToast = (type: 'default' | 'success' | 'error') => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast = {
        id,
        type,
        title: type === 'default' ? 'Title' : type === 'success' ? 'Success!' : 'Error!',
        description: type === 'default' ? 'Description' : 
                    type === 'success' ? 'Operation completed successfully' : 
                    'Something went wrong',
        showDescription: true,
        showClose: true,
        showIcon: true,
      };
      
      setToasts(prev => [...prev, newToast]);
    };

    const removeToast = (id: string) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
      <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button onClick={() => addToast('default')}>Show Default</Button>
          <Button onClick={() => addToast('success')} tone="success">Show Success</Button>
          <Button onClick={() => addToast('error')} tone="critical">Show Error</Button>
        </div>
        
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            title={toast.title}
            description={toast.description}
            showDescription={toast.showDescription}
            showClose={toast.showClose}
            showIcon={toast.showIcon}
            open={true}
            onOpenChange={(open) => !open && removeToast(toast.id)}
            duration={5000}
          />
        ))}
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Interactive demo showing how to trigger different types of toasts',
      },
    },
  },
};

// Position showcase
export const ToastPositions: Story = {
  render: () => {
    const [currentPosition, setCurrentPosition] = useState<string>('bottom-left');
    const [toastOpen, setToastOpen] = useState(false);

    const showToast = (position: string) => {
      setToastOpen(false); // Close any existing toast
      // Longer delay to ensure viewport remounts properly
      setTimeout(() => {
        setCurrentPosition(position);
        setTimeout(() => {
          setToastOpen(true);
        }, 50);
      }, 200);
    };

    return (
      <>
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <Button onClick={() => showToast('top-left')}>Top Left</Button>
            <Button onClick={() => showToast('top-right')}>Top Right</Button>
            <Button onClick={() => showToast('bottom-left')}>Bottom Left (Default)</Button>
            <Button onClick={() => showToast('bottom-right')}>Bottom Right</Button>
          </div>
          <div style={{ textAlign: 'center', fontSize: '14px', color: '#666', padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
            Current position: <strong>{currentPosition}</strong><br/>
            Toast open: {toastOpen ? 'Yes' : 'No'}
          </div>
        </div>
        
        <ToastViewport position={currentPosition as any} />
        {toastOpen && (
          <Toast
            title="Toast Position"
            description={`This toast appears in ${currentPosition}`}
            open={toastOpen}
            onOpenChange={setToastOpen}
            duration={3000}
          />
        )}
      </>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demo showing toast positioning options. Default is bottom-left. Click buttons to see toasts in different positions.',
      },
    },
  },
};

// All types showcase
export const AllTypes: Story = {
  render: (props) => {
    // Get direction from globals (Storybook RTL toolbar)
    const direction = props.globals?.direction || 'ltr';
    const isRTL = direction === 'rtl';

    const createContent = (type: string) => ({
      title: isRTL ? 'عنوان' : 'Title',
      description: isRTL ? 'وصف' : 'Description'
    });

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        alignItems: 'center',
        direction: direction
      }}>
        {toastTypes.map(type => {
          const content = createContent(type);
          return (
            <Toast
              key={type}
              type={type}
              title={content.title}
              description={content.description}
              open={true}
              duration={0}
            />
          );
        })}
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'All toast types with RTL support. Try switching between LTR and RTL modes.',
      },
    },
  },
};

// Property combinations
export const PropertyCombinations: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px',
      alignItems: 'center'
    }}>
      <Toast
        title="With description"
        description="This toast shows a description"
        open={true}
        duration={0}
      />
      
      <Toast
        title="Without description"
        showDescription={false}
        open={true}
        duration={0}
      />
      
      <Toast
        title="Without close button"
        description="This toast has no close button"
        showClose={false}
        open={true}
        duration={0}
      />
      
      <Toast
        title="Without icon"
        description="This toast has no icon"
        showIcon={false}
        open={true}
        duration={0}
      />
      
      <Toast
        title="Minimal toast"
        showDescription={false}
        showClose={false}
        showIcon={false}
        open={true}
        duration={0}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Different property combinations showing various toast configurations',
      },
    },
  },
};