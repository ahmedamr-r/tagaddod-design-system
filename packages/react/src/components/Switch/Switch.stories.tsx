import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A switch component that allows users to toggle between checked and not checked states.',
      },
    },
  },
  argTypes: {
    pressed: {
      control: 'boolean',
      description: 'The controlled checked state of the switch',
    },
    defaultPressed: {
      control: 'boolean',
      description: 'The default checked state when initially rendered',
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md'],
      description: 'The size of the switch',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, prevents the user from interacting with the switch',
    },
    onPressedChange: {
      action: 'changed',
      description: 'Event handler called when the checked state changes',
    },
  },
  args: {
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultPressed: false,
  },
  render: (args) => {
    const [pressed, setPressed] = React.useState(args.defaultPressed || false);
    return (
      <Switch 
        {...args} 
        pressed={pressed}
        onPressedChange={setPressed}
      />
    );
  },
};

export const Pressed: Story = {
  args: {
    defaultPressed: true,
  },
  render: (args) => {
    const [pressed, setPressed] = React.useState(args.defaultPressed || false);
    return (
      <Switch 
        {...args} 
        pressed={pressed}
        onPressedChange={setPressed}
      />
    );
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    defaultPressed: false,
  },
  render: (args) => {
    const [pressed, setPressed] = React.useState(args.defaultPressed || false);
    return (
      <Switch 
        {...args} 
        pressed={pressed}
        onPressedChange={setPressed}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultPressed: false
  },
};

export const DisabledPressed: Story = {
  args: {
    disabled: true,
    defaultPressed: true
  },
};

export const Interactive: React.FC = () => {
  const [isPressed, setIsPressed] = React.useState(false);
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Switch 
        pressed={isPressed} 
        onPressedChange={setIsPressed} 
      />
      <span>Switch is {isPressed ? 'on' : 'off'}</span>
    </div>
  );
};

export const RTLSupport: React.FC = () => {
  const [isPressedLTR, setIsPressedLTR] = React.useState(false);
  const [isPressedRTL, setIsPressedRTL] = React.useState(false);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span>LTR:</span>
        <Switch 
          pressed={isPressedLTR} 
          onPressedChange={setIsPressedLTR} 
        />
        <span>Switch is {isPressedLTR ? 'on' : 'off'}</span>
      </div>
      
      <div dir="rtl" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span>RTL:</span>
        <Switch 
          pressed={isPressedRTL} 
          onPressedChange={setIsPressedRTL} 
        />
        <span>Switch is {isPressedRTL ? 'on' : 'off'}</span>
      </div>
    </div>
  );
};

export const AllVariants: React.FC = () => (
  <div style={{ display: 'grid', gap: '2rem' }}>
    <div style={{ display: 'grid', gap: '1rem' }}>
      <h3>Size: Small</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <div>
          <h4>LTR</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'max-content max-content', alignItems: 'center', gap: '1rem' }}>
            <span>Default:</span>
            <InteractiveSwitch size="sm" />
            <span>Disabled:</span>
            <Switch size="sm" disabled />
            <span>Disabled Pressed:</span>
            <Switch size="sm" disabled defaultPressed={true} />
          </div>
        </div>
        <div dir="rtl">
          <h4>RTL</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'max-content max-content', alignItems: 'center', gap: '1rem' }}>
            <span>Default:</span>
            <InteractiveSwitch size="sm" />
            <span>Disabled:</span>
            <Switch size="sm" disabled />
            <span>Disabled Pressed:</span>
            <Switch size="sm" disabled defaultPressed={true} />
          </div>
        </div>
      </div>
    </div>
    
    <div style={{ display: 'grid', gap: '1rem' }}>
      <h3>Size: Medium</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <div>
          <h4>LTR</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'max-content max-content', alignItems: 'center', gap: '1rem' }}>
            <span>Default:</span>
            <InteractiveSwitch size="md" />
            <span>Disabled:</span>
            <Switch size="md" disabled />
            <span>Disabled Pressed:</span>
            <Switch size="md" disabled defaultPressed={true} />
          </div>
        </div>
        <div dir="rtl">
          <h4>RTL</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'max-content max-content', alignItems: 'center', gap: '1rem' }}>
            <span>Default:</span>
            <InteractiveSwitch size="md" />
            <span>Disabled:</span>
            <Switch size="md" disabled />
            <span>Disabled Pressed:</span>
            <Switch size="md" disabled defaultPressed={true} />
          </div>
        </div>
      </div>
    </div>

    <div style={{ display: 'grid', gap: '1rem' }}>
      <h3>Interactive Examples</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <div>
          <h4>Small</h4>
          <InteractiveSwitch size="sm" showState />
        </div>
        <div>
          <h4>Medium</h4>
          <InteractiveSwitch size="md" showState />
        </div>
      </div>
    </div>
  </div>
);

const InteractiveSwitch: React.FC<{size?: 'sm' | 'md', showState?: boolean}> = ({size = 'md', showState = false}) => {
  const [isPressed, setIsPressed] = React.useState(false);
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Switch 
        size={size}
        pressed={isPressed} 
        onPressedChange={setIsPressed} 
      />
      {showState && <span>Switch is {isPressed ? 'on' : 'off'}</span>}
    </div>
  );
};
