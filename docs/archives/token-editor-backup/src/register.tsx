import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { TokenManager } from './panel/TokenManager';

const ADDON_ID = 'tagaddod/token-editor';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Token Editor',
    render: ({ active }) => {
      return <TokenManager active={active} />;
    },
  });
});
