import React, { useState, useEffect } from 'react';
import { useChannel } from '@storybook/manager-api';
import { Button } from '@storybook/components';
import deepmerge from 'deepmerge';

interface TokenManagerProps {
  active?: boolean;
}

interface TokenValue {
  value: string;
}

export const TokenManager: React.FC<TokenManagerProps> = () => {
  const [tokens, setTokens] = useState<Record<string, any>>({});
  const [editingToken, setEditingToken] = useState('');
  const [editingValue, setEditingValue] = useState('');
  const [tokenType, setTokenType] = useState('color');
  const [isCreating, setIsCreating] = useState(false);
  
  const emit = useChannel({});

  useEffect(() => {
    // Load tokens from localStorage on mount
    const savedTokens = localStorage.getItem('tds-token-overrides');
    if (savedTokens) {
      try {
        setTokens(JSON.parse(savedTokens));
      } catch (e) {
        console.error('Failed to parse saved tokens:', e);
      }
    }
  }, []);

  useEffect(() => {
    // Load base tokens initially
    const baseTokens = {
      color: {
        blue: { '500': { value: '#0066ff' } },
        green: { '500': { value: '#25b24b' } },
        neutral: { '50': { value: '#f7f8fa' }, '900': { value: '#1c1d22' } }
      },
      space: {
        '100': { value: '4px' },
        '200': { value: '8px' },
        '300': { value: '12px' },
        '400': { value: '16px' }
      }
    };
    
    if (Object.keys(tokens).length === 0) {
      setTokens(baseTokens);
    }
  }, [tokens]);

  const handleSave = () => {
    if (!editingToken || !editingValue) return;

    const tokenPath = editingToken.split('.');
    const newToken: any = {};
    let current = newToken;
    
    for (let i = 0; i < tokenPath.length - 1; i++) {
      current[tokenPath[i]] = {};
      current = current[tokenPath[i]];
    }
    current[tokenPath[tokenPath.length - 1]] = { value: editingValue };
    
    const updated = deepmerge(tokens, newToken);
    setTokens(updated);
    
    // Persist to localStorage
    localStorage.setItem('tds-token-overrides', JSON.stringify(updated));
    
    // Broadcast to preview
    emit('tds/tokens/update', updated);
    
    // Reset form
    setEditingToken('');
    setEditingValue('');
    setIsCreating(false);
  };

  const handleDelete = (tokenPath: string) => {
    const paths = tokenPath.split('.');
    const newTokens = { ...tokens };
    
    // Navigate to the parent object and delete the key
    let current: any = newTokens;
    for (let i = 0; i < paths.length - 1; i++) {
      current = current[paths[i]];
    }
    delete current[paths[paths.length - 1]];
    
    setTokens(newTokens);
    localStorage.setItem('tds-token-overrides', JSON.stringify(newTokens));
    emit('tds/tokens/update', newTokens);
  };

  const renderTokens = (obj: any, prefix = '') => {
    return Object.entries(obj).map(([key, value]: [string, any]) => {
      const currentPath = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null && !value.hasOwnProperty('value')) {
        return (
          <div key={currentPath} style={{ marginLeft: prefix ? 20 : 0 }}>
            <div style={{ fontWeight: 'bold', marginTop: 10, marginBottom: 5 }}>
              {key}
            </div>
            {renderTokens(value, currentPath)}
          </div>
        );
      }
      
      const tokenValue = value?.value || value;
      
      return (
        <div 
          key={currentPath} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '8px 0',
            borderBottom: '1px solid #eee'
          }}
        >
          <code style={{ flex: 1, fontSize: '12px' }}>--t-{currentPath.replace(/\./g, '-')}</code>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {typeof tokenValue === 'string' && tokenValue.startsWith('#') && (
              <div 
                style={{ 
                  width: 24, 
                  height: 24, 
                  backgroundColor: tokenValue,
                  border: '1px solid #ccc',
                  borderRadius: 4
                }} 
              />
            )}
            <code style={{ minWidth: 100, fontSize: '12px' }}>{tokenValue}</code>
            <Button
              size="small"
              onClick={() => {
                setEditingToken(currentPath);
                setEditingValue(tokenValue);
                setIsCreating(false);
              }}
            >
              Edit
            </Button>
            <Button
              size="small"
              secondary
              onClick={() => handleDelete(currentPath)}
            >
              Delete
            </Button>
          </div>
        </div>
      );
    });
  };

  return (
    <div style={{ padding: 16, height: '100%', overflow: 'auto' }}>
      <div style={{ marginBottom: 20 }}>
        <h3>Token Editor</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>
          Edit design tokens in real-time. Changes are saved to localStorage and applied immediately.
        </p>
      </div>

      <div style={{ marginBottom: 20, padding: 16, backgroundColor: '#f8f9fa', borderRadius: 4 }}>
        <h4>{isCreating ? 'Create New Token' : 'Edit Token'}</h4>
        <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
          <input
            style={{
              padding: '6px 10px',
              border: '1px solid #ccc',
              borderRadius: 4,
              fontSize: '14px'
            }}
            placeholder="Token path (e.g., color.blue.500)"
            value={editingToken}
            onChange={(e) => setEditingToken(e.target.value)}
          />
          <input
            style={{
              padding: '6px 10px',
              border: '1px solid #ccc',
              borderRadius: 4,
              fontSize: '14px'
            }}
            placeholder="Value (e.g., #0066ff)"
            value={editingValue}
            onChange={(e) => setEditingValue(e.target.value)}
          />
          <select
            style={{
              padding: '6px 10px',
              border: '1px solid #ccc',
              borderRadius: 4,
              fontSize: '14px',
              backgroundColor: 'white'
            }}
            value={tokenType}
            onChange={(e) => setTokenType(e.target.value)}
          >
            <option value="color">Color</option>
            <option value="spacing">Spacing</option>
            <option value="typography">Typography</option>
            <option value="radius">Radius</option>
          </select>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button primary onClick={handleSave}>
              {isCreating ? 'Create' : 'Save'}
            </Button>
            {!isCreating && (
              <Button onClick={() => setIsCreating(true)}>
                Create New
              </Button>
            )}
            <Button 
              secondary 
              onClick={() => {
                setEditingToken('');
                setEditingValue('');
                setIsCreating(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h4>Current Tokens</h4>
        {renderTokens(tokens)}
      </div>
    </div>
  );
};
