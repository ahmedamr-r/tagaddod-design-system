/// <reference types="react" />
import { addons, types } from '@storybook/manager-api';
import React from 'react';

const ADDON_ID = 'tagaddod/token-editor';
const PANEL_ID = `${ADDON_ID}/panel`;

// Lazy load the component to avoid initialization issues
const TokenManagerPanel = React.lazy(() => 
  import('./panel/TokenManager').then(module => ({
    default: module.TokenManager
  }))
);

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Token Editor',
    render: ({ active }) => {
      if (!active) return null;
      
      return React.createElement(
        React.Suspense,
        { fallback: React.createElement('div', {}, 'Loading...') },
        React.createElement(TokenManagerPanel, { active })
      );
    },
  });
});
