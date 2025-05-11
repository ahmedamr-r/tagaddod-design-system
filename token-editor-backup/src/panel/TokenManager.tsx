import React, { useState, useEffect, useRef } from 'react';
import { useChannel } from '@storybook/manager-api';
import { Button } from '@storybook/components';
import { DownloadIcon, UploadIcon, SearchIcon, AlertIcon } from '@storybook/icons';
import deepmerge from 'deepmerge';
import { validateToken, validateTokenStructure } from '../validation/tokenSchema';
import { checkTokenContrast, ContrastResult } from '../validation/contrastChecker';

interface TokenManagerProps {
  active?: boolean;
}

interface TokenValue {
  value: string;
  type?: string;
  description?: string;
}

interface ValidationIssue {
  path: string;
  message: string;
  type: 'error' | 'warning';
}

export const TokenManager: React.FC<TokenManagerProps> = ({ active }) => {
  const [tokens, setTokens] = useState<Record<string, any>>({});
  const [editingToken, setEditingToken] = useState('');
  const [editingValue, setEditingValue] = useState('');
  const [tokenType, setTokenType] = useState('color');
  const [isCreating, setIsCreating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [validationIssues, setValidationIssues] = useState<ValidationIssue[]>([]);
  const [, setContrastResults] = useState<{ pair: [string, string]; result: ContrastResult }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const emit = useChannel({});

  useEffect(() => {
    // Load tokens from localStorage on mount
    const savedTokens = localStorage.getItem('tds-token-overrides');
    if (savedTokens) {
      try {
        const parsed = JSON.parse(savedTokens);
        setTokens(parsed);
        validateAllTokens(parsed);
      } catch (e) {
        console.error('Failed to parse saved tokens:', e);
      }
    }
  }, []);

  useEffect(() => {
    // Load base tokens initially
    const baseTokens = {
      color: {
        blue: { '500': { value: '#0066ff', type: 'color' } },
        green: { '500': { value: '#25b24b', type: 'color' } },
        neutral: { 
          '50': { value: '#f7f8fa', type: 'color' }, 
          '900': { value: '#1c1d22', type: 'color' } 
        }
      },
      space: {
        '100': { value: '4px', type: 'spacing' },
        '200': { value: '8px', type: 'spacing' },
        '300': { value: '12px', type: 'spacing' },
        '400': { value: '16px', type: 'spacing' }
      },
      button: {
        primary: {
          background: { value: '{color.green.500}', type: 'color' },
          text: { value: '{color.neutral.50}', type: 'color' }
        }
      }
    };
    
    if (Object.keys(tokens).length === 0) {
      setTokens(baseTokens);
    }
  }, []);

  // Debounced token update for preview
  const updatePreviewDebounced = useRef<NodeJS.Timeout>();
  
  const updatePreview = (updatedTokens: Record<string, any>) => {
    if (updatePreviewDebounced.current) {
      clearTimeout(updatePreviewDebounced.current);
    }
    
    updatePreviewDebounced.current = setTimeout(() => {
      emit('tds/tokens/update', updatedTokens);
    }, 100);
  };

  const validateAllTokens = (tokenData: Record<string, any>) => {
    const issues: ValidationIssue[] = [];
    
    // Validate token structure
    const structureValidation = validateTokenStructure(tokenData);
    if (!structureValidation.valid && structureValidation.errors) {
      structureValidation.errors.forEach(error => {
        issues.push({
          path: error.split(':')[0],
          message: error,
          type: 'error'
        });
      });
    }
    
    // Check contrast for color pairs
    const contrastCheckResults = checkTokenContrast(tokenData);
    setContrastResults(contrastCheckResults);
    
    // Add contrast warnings
    contrastCheckResults.forEach(({ pair, result }) => {
      if (!result.passes.AA) {
        issues.push({
          path: `${pair[0]} / ${pair[1]}`,
          message: `Contrast ratio ${result.ratio.toFixed(2)}:1 fails WCAG AA (needs 4.5:1)`,
          type: 'warning'
        });
      }
    });
    
    setValidationIssues(issues);
  };

  const handleSave = () => {
    if (!editingToken || !editingValue) return;

    const tokenPath = editingToken.split('.');
    const newToken: any = {};
    let current = newToken;
    
    for (let i = 0; i < tokenPath.length - 1; i++) {
      current[tokenPath[i]] = {};
      current = current[tokenPath[i]];
    }
    
    const tokenData: TokenValue = { 
      value: editingValue,
      type: tokenType
    };
    
    // Validate the token before saving
    const validation = validateToken(tokenData, tokenType);
    if (!validation.valid) {
      alert(`Validation failed: ${validation.errors?.join(', ')}`);
      return;
    }
    
    current[tokenPath[tokenPath.length - 1]] = tokenData;
    
    const updated = deepmerge(tokens, newToken);
    setTokens(updated);
    
    // Persist to localStorage
    localStorage.setItem('tds-token-overrides', JSON.stringify(updated));
    
    // Broadcast to preview with debouncing
    updatePreview(updated);
    
    // Revalidate all tokens
    validateAllTokens(updated);
    
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
    updatePreview(newTokens);
    validateAllTokens(newTokens);
  };

  const handleExport = () => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `token-draft-${timestamp}.json`;
    const data = JSON.stringify(tokens, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        const merged = deepmerge(tokens, imported);
        setTokens(merged);
        localStorage.setItem('tds-token-overrides', JSON.stringify(merged));
        updatePreview(merged);
        validateAllTokens(merged);
      } catch (error) {
        alert('Failed to import JSON file');
      }
    };
    reader.readAsText(file);
  };

  const filterTokens = (obj: any, query: string): any => {
    if (!query) return obj;
    
    const filtered: any = {};
    Object.entries(obj).forEach(([key, value]: [string, any]) => {
      if (key.toLowerCase().includes(query.toLowerCase())) {
        filtered[key] = value;
      } else if (typeof value === 'object' && value !== null && !value.hasOwnProperty('value')) {
        const nestedFiltered = filterTokens(value, query);
        if (Object.keys(nestedFiltered).length > 0) {
          filtered[key] = nestedFiltered;
        }
      } else if (value?.value?.toString().toLowerCase().includes(query.toLowerCase())) {
        filtered[key] = value;
      }
    });
    return filtered;
  };

  const renderTokens = (obj: any, prefix = '') => {
    const filtered = filterTokens(obj, searchQuery);
    
    return Object.entries(filtered).map(([key, value]: [string, any]) => {
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
      const tokenType = value?.type;
      
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
            {tokenType === 'color' && typeof tokenValue === 'string' && tokenValue.startsWith('#') && (
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
            {tokenType && <span style={{ fontSize: '11px', color: '#666' }}>{tokenType}</span>}
            <Button
              size="small"
              onClick={() => {
                setEditingToken(currentPath);
                setEditingValue(tokenValue);
                setTokenType(tokenType || 'color');
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

  if (!active) return null;

  return (
    <div style={{ padding: 16, height: '100%', overflow: 'auto' }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>Token Editor</h3>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              size="small"
              onClick={() => fileInputRef.current?.click()}
              title="Import JSON"
            >
              <UploadIcon /> Import
            </Button>
            <Button
              size="small"
              onClick={handleExport}
              title="Export JSON"
            >
              <DownloadIcon /> Export
            </Button>
          </div>
        </div>
        <p style={{ color: '#666', fontSize: '14px', margin: '8px 0' }}>
          Edit design tokens in real-time. Changes are validated and applied immediately.
        </p>
        
        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
          <SearchIcon />
          <input
            style={{
              flex: 1,
              padding: '6px 10px',
              border: '1px solid #ccc',
              borderRadius: 4,
              fontSize: '14px'
            }}
            placeholder="Search tokens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Validation Issues */}
      {validationIssues.length > 0 && (
        <div style={{ 
          marginBottom: 20, 
          padding: 12, 
          backgroundColor: '#fff3cd', 
          border: '1px solid #ffeaa7',
          borderRadius: 4 
        }}>
          <h4 style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: 4 }}>
            <AlertIcon /> Validation Issues
          </h4>
          {validationIssues.map((issue, idx) => (
            <div 
              key={idx} 
              style={{ 
                fontSize: '13px', 
                marginBottom: 4,
                color: issue.type === 'error' ? '#d32f2f' : '#f57c00'
              }}
            >
              <strong>{issue.path}:</strong> {issue.message}
            </div>
          ))}
        </div>
      )}

      {/* Token Editor Form */}
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
            <option value="dimension">Dimension</option>
            <option value="fontWeight">Font Weight</option>
            <option value="typography">Typography</option>
            <option value="radius">Radius</option>
            <option value="shadow">Shadow</option>
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
      
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        style={{ display: 'none' }}
        onChange={handleImport}
      />
    </div>
  );
};
