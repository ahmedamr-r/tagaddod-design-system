import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Sonner, showSonner, sonnerTypes, sonnerPositions } from './Sonner';
import { Button } from '../Button/Button';

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
      control: 'select',
      options: sonnerPositions,
      description: 'The position of the toaster on screen'
    },
    richColors: {
      control: 'boolean',
      description: 'Whether to use rich colors for different toast types'
    },
    visibleToasts: {
      control: 'number',
      description: 'Maximum number of toasts to show at once'
    },
    closeButton: {
      control: 'boolean',
      description: 'Whether to show close buttons on toasts'
    },
    expand: {
      control: 'boolean',
      description: 'Whether toasts should expand on hover'
    },
    duration: {
      control: 'number',
      description: 'Default duration in milliseconds before auto-close'
    },
    theme: {
      control: 'select',
      options: ['light', 'dark', 'system'],
      description: 'Theme for the toaster'
    },
  },
  args: {
    position: 'bottom-right',
    richColors: false,
    visibleToasts: 5,
    closeButton: true,
    expand: true,
    duration: 4000,
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      // For demos that use showSonner, add the Sonner provider
      if (context.name === 'InteractiveDemo' || 
          context.name === 'PositionDemo' || 
          context.name === 'RtlDemo' ||
          context.name === 'FeatureDemo') {
        return (
          <div style={{ padding: '20px', position: 'relative', minHeight: '400px' }}>
            <Sonner position="bottom-right" />
            <Story />
          </div>
        );
      }
      
      return (
        <div style={{ padding: '20px', position: 'relative', minHeight: '200px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Sonner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Sonner component showcase
export const Default: Story = {
  args: {
    position: 'bottom-right',
  },
};

// Interactive demo showing different toast types
export const InteractiveDemo: Story = {
  render: () => {
    const triggerToast = (type: 'default' | 'success' | 'error') => {
      showSonner({
        type,
        title: type === 'default' ? 'Notification' : type === 'success' ? 'Success!' : 'Error!',
        description: type === 'default' ? 'This is a default notification' : 
                    type === 'success' ? 'Operation completed successfully' : 
                    'Something went wrong',
        showDescription: true,
        showClose: true,
        showIcon: true,
        iconWithBackground: true,
        duration: 4000,
      });
    };

    return (
      <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button onClick={() => triggerToast('default')}>Show Default</Button>
          <Button onClick={() => triggerToast('success')} tone="success">Show Success</Button>
          <Button onClick={() => triggerToast('error')} tone="critical">Show Error</Button>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#666', marginTop: '20px' }}>
          Click the buttons above to see Sonner toasts in action!
        </p>
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Interactive demo showing how to trigger different types of toasts using showSonner function',
      },
    },
  },
};

// Position showcase
export const PositionDemo: Story = {
  render: () => {
    const [currentPosition, setCurrentPosition] = useState<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('bottom-right');
    const [toasterKey, setToasterKey] = useState(0);

    const triggerPositionToast = (position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
      setCurrentPosition(position);
      setToasterKey(prev => prev + 1); // Force re-render of Toaster
      
      setTimeout(() => {
        showSonner({
          title: 'Position Demo',
          description: `This toast appears in ${position}`,
          type: 'default',
          duration: 3000,
        });
      }, 100);
    };

    return (
      <>
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <Button onClick={() => triggerPositionToast('top-left')}>Top Left</Button>
            <Button onClick={() => triggerPositionToast('top-right')}>Top Right</Button>
            <Button onClick={() => triggerPositionToast('bottom-left')}>Bottom Left</Button>
            <Button onClick={() => triggerPositionToast('bottom-right')}>Bottom Right (Default)</Button>
          </div>
          <div style={{ textAlign: 'center', fontSize: '14px', color: '#666', padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
            Current position: <strong>{currentPosition}</strong>
          </div>
        </div>
        
        <Sonner key={toasterKey} position={currentPosition} />
      </>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demo showing toast positioning options with Sonner. Default is bottom-right. Click buttons to see toasts in different positions.',
      },
    },
  },
};

// RTL/Arabic support demo
export const RtlDemo: Story = {
  render: () => {
    const triggerRtlToast = () => {
      showSonner({
        title: 'إشعار',
        description: 'هذا إشعار باللغة العربية مع دعم كامل للـ RTL',
        type: 'success',
        duration: 5000,
      });
    };

    const triggerEnglishToast = () => {
      showSonner({
        title: 'Notification',
        description: 'This is an English notification with proper LTR support',
        type: 'default',
        duration: 5000,
      });
    };

    return (
      <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button onClick={triggerEnglishToast}>Show English Toast</Button>
          <Button onClick={triggerRtlToast} tone="success">إظهار Toast عربي</Button>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#666', marginTop: '20px' }}>
          Switch to RTL mode in the toolbar to see proper Arabic text alignment and font rendering.
        </p>
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demo showing RTL support with Arabic content. Switch to RTL mode to see proper text alignment and Arabic font family application.',
      },
    },
  },
};

// Feature showcase (icons, descriptions, close buttons)
export const FeatureDemo: Story = {
  render: () => {
    const showFeatureToast = (options: any) => {
      showSonner({
        title: 'Feature Demo',
        description: 'This toast demonstrates various feature combinations',
        type: 'success',
        duration: 6000,
        ...options,
      });
    };

    return (
      <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Button onClick={() => showFeatureToast({ showIcon: true, iconWithBackground: true })}>
            With Icon Background
          </Button>
          <Button onClick={() => showFeatureToast({ showIcon: true, iconWithBackground: false })}>
            Icon No Background
          </Button>
          <Button onClick={() => showFeatureToast({ showIcon: false })}>
            No Icon
          </Button>
          <Button onClick={() => showFeatureToast({ showDescription: false })}>
            No Description
          </Button>
          <Button onClick={() => showFeatureToast({ showClose: false })}>
            No Close Button
          </Button>
          <Button onClick={() => showFeatureToast({ 
            showIcon: false, 
            showDescription: false, 
            showClose: false 
          })}>
            Minimal Toast
          </Button>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#666', marginTop: '20px' }}>
          Click buttons to see different feature combinations (same as Toast component)
        </p>
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demo showing various feature combinations including icon backgrounds, descriptions, and close buttons.',
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

    const showAllTypes = () => {
      sonnerTypes.forEach((type, index) => {
        setTimeout(() => {
          showSonner({
            type,
            title: isRTL ? 'عنوان' : 'Title',
            description: isRTL ? 'وصف' : 'Description',
            duration: 0, // Don't auto-close for demo
          });
        }, index * 200);
      });
    };

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        alignItems: 'center',
        direction: direction
      }}>
        <Button onClick={showAllTypes}>
          {isRTL ? 'إظهار جميع الأنواع' : 'Show All Types'}
        </Button>
        
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>
          {isRTL ? 'انقر لرؤية جميع أنواع التوست' : 'Click to see all toast types with RTL support'}
        </p>
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

// Simple usage examples
export const SimpleSuccess: Story = {
  render: () => (
    <Button 
      onClick={() => showSonner({
        type: 'success',
        title: 'Success!',
        description: 'Your action was completed successfully.',
      })}
      tone="success"
    >
      Show Success Toast
    </Button>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Simple success toast example',
      },
    },
  },
};

export const SimpleError: Story = {
  render: () => (
    <Button 
      onClick={() => showSonner({
        type: 'error',
        title: 'Error!',
        description: 'Something went wrong. Please try again.',
      })}
      tone="critical"
    >
      Show Error Toast
    </Button>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Simple error toast example',
      },
    },
  },
};

export const SimpleDefault: Story = {
  render: () => (
    <Button 
      onClick={() => showSonner({
        type: 'default',
        title: 'Notification',
        description: 'This is a general notification.',
      })}
    >
      Show Default Toast
    </Button>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Simple default toast example',
      },
    },
  },
};