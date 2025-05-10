import React from 'react';

// Simple test decorator
export const decorators = [
  (Story: any) => {
    console.log('Storybook decorator running');
    return React.createElement(Story);
  }
];

export const globalTypes = {
  brand: {
    name: 'Brand',
    description: 'Global brand for components',
    defaultValue: 'tagaddod',
    toolbar: { 
      icon: 'paintbrush',
      items: ['tagaddod', 'greenpan'],
      showName: true,
      title: 'Brand'
    }
  }
};

export const initialGlobals = {
  brand: 'tagaddod'
};
