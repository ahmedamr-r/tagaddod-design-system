// Register entry point for Storybook 8
import React from 'react';
import { addons, types } from '@storybook/manager-api';

const ADDON_ID = 'tagaddod/token-editor';
const PANEL_ID = `${ADDON_ID}/panel`;

// Simple panel component directly in the register file
const TokenEditorPanel = () => {
  const [tokenName, setTokenName] = React.useState('');
  const [tokenValue, setTokenValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Token update:', { name: tokenName, value: tokenValue });
    // TODO: Implement actual token update logic
    setTokenName('');
    setTokenValue('');
  };

  return React.createElement('div', { style: { padding: '20px' } }, [
    React.createElement('h2', { key: 'title', style: { marginBottom: '20px' } }, 'Token Editor'),
    React.createElement('form', { 
      key: 'form',
      onSubmit: handleSubmit,
      style: { display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }
    }, [
      React.createElement('input', {
        key: 'name-input',
        type: 'text',
        placeholder: 'Token name (e.g., color.primary.500)',
        value: tokenName,
        onChange: (e) => setTokenName(e.target.value),
        style: { padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px' }
      }),
      React.createElement('input', {
        key: 'value-input',
        type: 'text',
        placeholder: 'Token value (e.g., #1ea7fd)',
        value: tokenValue,
        onChange: (e) => setTokenValue(e.target.value),
        style: { padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px' }
      }),
      React.createElement('button', {
        key: 'submit-button',
        type: 'submit',
        style: { 
          padding: '8px 16px', 
          background: '#1ea7fd', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer',
          width: 'fit-content'
        }
      }, 'Update Token')
    ]),
    React.createElement('p', { 
      key: 'description',
      style: { marginTop: '20px', color: '#666', fontSize: '14px' }
    }, 'Enter a token name and value to update design tokens dynamically.')
  ]);
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Token Editor',
    match: ({ viewMode }) => viewMode === 'story',
    render: TokenEditorPanel
  });
});
