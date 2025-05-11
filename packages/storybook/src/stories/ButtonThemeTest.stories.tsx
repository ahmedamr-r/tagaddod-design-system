import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@tagaddod/react';

const meta = {
  title: 'Components/Button Theme Test',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const ThemeTest: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', padding: '2rem' }}>
        <div>
          <h3>Primary Button</h3>
          <Button variant="primary">Test Button</Button>
        </div>
        
        <div>
          <h3>CSS Variable Check</h3>
          <div style={{
            width: '200px',
            height: '50px',
            backgroundColor: 'var(--t-color-bg-fill-brand)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--t-border-radius-200)'
          }}>
            Brand Color Test
          </div>
        </div>
        
        <div>
          <h3>Font Check</h3>
          <div style={{
            fontFamily: 'var(--t-font-family-primary)',
            fontSize: '2rem'
          }}>
            Font Test Text
          </div>
        </div>
        
        <p>Switch themes and directions from the toolbar to test</p>
      </div>
    );
  },
};
