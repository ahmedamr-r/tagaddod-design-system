'use client';

import React from 'react';

interface TokenGraphControlsProps {
  layout: 'dagre' | 'tree' | 'force';
  onLayoutChange: (layout: 'dagre' | 'tree' | 'force') => void;
}

export const TokenGraphControls: React.FC<TokenGraphControlsProps> = ({
  layout,
  onLayoutChange,
}) => {
  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'var(--t-color-surface-primary)',
      padding: 'var(--t-space-200)',
      borderRadius: 'var(--t-border-radius-200)',
      border: '1px solid var(--t-color-border-secondary)',
      display: 'flex',
      gap: 'var(--t-space-200)',
      alignItems: 'center',
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <span style={{
        fontSize: 'var(--t-typography-caption-lg-font-size)',
        fontWeight: 'var(--t-typography-caption-lg-font-weight)',
        color: 'var(--t-color-text-secondary)',
        marginRight: 'var(--t-space-100)',
      }}>
        Layout:
      </span>
      
      {[
        { value: 'dagre', label: '📊 Hierarchical', description: 'Top-down tree structure' },
        { value: 'tree', label: '🌳 Tree', description: 'Strict parent-child hierarchy' },
        { value: 'force', label: '🔗 Force', description: 'Physics-based positioning' },
      ].map((option) => (
        <button
          key={option.value}
          onClick={() => onLayoutChange(option.value as any)}
          style={{
            padding: 'var(--t-space-200) var(--t-space-300)',
            borderRadius: 'var(--t-border-radius-100)',
            border: layout === option.value 
              ? '2px solid var(--t-color-border-brand)' 
              : '1px solid var(--t-color-border-secondary)',
            backgroundColor: layout === option.value 
              ? 'var(--t-color-surface-brand-secondary)' 
              : 'var(--t-color-surface-secondary)',
            color: layout === option.value 
              ? 'var(--t-color-text-brand)' 
              : 'var(--t-color-text-primary)',
            fontSize: 'var(--t-typography-caption-lg-font-size)',
            fontWeight: layout === option.value ? '600' : '400',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--t-space-100)',
          }}
          title={option.description}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};