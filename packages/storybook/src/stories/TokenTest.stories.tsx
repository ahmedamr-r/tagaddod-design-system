import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@tagaddod/react';

const meta: Meta = {
  title: 'Tokens/Color Test',
  tags: ['autodocs'],
};

export default meta;

export const TokenUtilities: StoryObj = {
  render: () => (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Token-based Utilities Test</h2>
        <p className="mb-4">Testing custom token utilities like bg-t-action-primary-bg:</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-t-action-primary-bg text-t-text-on-brand rounded-t-200">
            Using: bg-t-action-primary-bg
          </div>
          <div className="p-4 bg-t-surface-background-secondary text-t-text-primary border border-t-border-secondary rounded-t-200">
            Using: bg-t-surface-background-secondary
          </div>
          <div className="p-4 bg-t-surface-background-success text-t-text-on-brand rounded-t-300">
            Using: bg-t-surface-background-success
          </div>
          <div className="p-4 bg-t-surface-background-critical text-t-text-on-brand rounded-t-300">
            Using: bg-t-surface-background-critical
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Component Test</h2>
        <p className="mb-4">Button components using token utilities internally:</p>
        
        <div className="flex gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="success">Success Button</Button>
          <Button variant="critical">Critical Button</Button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Spacing Test</h2>
        <p className="mb-4">Testing token-based spacing utilities:</p>
        
        <div className="bg-gray-100 inline-block">
          <div className="p-t-200 bg-blue-100">p-t-200 (200 token spacing)</div>
          <div className="p-t-400 bg-blue-200">p-t-400 (400 token spacing)</div>
          <div className="p-t-600 bg-blue-300">p-t-600 (600 token spacing)</div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Theme Test</h2>
        <p className="mb-4">Switch between Tagaddod and GreenPan themes to see color changes:</p>
        
        <div className="flex gap-4">
          <div className="p-4 bg-t-color-green-500 text-white rounded">
            Green 500 Color Token
          </div>
          <div className="p-4 bg-t-action-primary-bg text-t-text-on-brand rounded">
            Primary Action Background
          </div>
        </div>
      </div>
    </div>
  ),
};

export const RTLTest: StoryObj = {
  render: () => (
    <div className="space-y-4 p-8">
      <h2 className="text-xl font-bold mb-4">RTL Support Test</h2>
      <p className="mb-4">Switch direction to RTL to see layout adjustments:</p>
      
      <div className="flex gap-4">
        <Button variant="primary">
          <span className="mr-t-200 rtl:ml-t-200 rtl:mr-0">Icon</span>
          Button with Icon
        </Button>
      </div>
      
      <div className="border border-gray-300 p-4">
        <p className="pl-t-400 rtl:pr-t-400 rtl:pl-0">
          Text with logical padding
        </p>
      </div>
    </div>
  ),
};
