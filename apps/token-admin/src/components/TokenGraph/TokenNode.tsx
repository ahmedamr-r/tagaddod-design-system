'use client';

import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

interface TokenNodeData {
  label: string;
  value: string;
  type: 'core' | 'semantic' | 'brand' | 'locale';
  category: string;
  color: string;
  description?: string;
  path?: string;
  isReference?: boolean;
}

export const TokenNode = memo<NodeProps<TokenNodeData>>(({ data, selected }) => {
  // Get type indicator symbol
  const getTypeSymbol = (type: string) => {
    switch (type) {
      case 'core':
        return '⚡';
      case 'semantic':
        return '🎯';
      case 'brand':
        return '🎨';
      case 'locale':
        return '🌍';
      default:
        return '📝';
    }
  };

  // Determine if value is a reference to another token
  const isReference = data.value.startsWith('{') && data.value.endsWith('}');

  return (
    <div
      style={{
        background: 'var(--t-color-surface-primary)',
        border: `2px solid ${selected ? 'var(--t-color-border-brand)' : data.color}`,
        borderRadius: 'var(--t-border-radius-200)',
        padding: 'var(--t-space-300)',
        minWidth: '180px',
        maxWidth: '220px',
        boxShadow: selected 
          ? '0 4px 12px rgba(0,0,0,0.15)' 
          : '0 2px 4px rgba(0,0,0,0.1)',
        fontSize: 'var(--t-typography-body-sm-font-size)',
        fontFamily: 'var(--t-font-family-primary)',
        transition: 'all 0.2s ease',
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: data.color,
          border: '2px solid white',
          width: '12px',
          height: '12px',
        }}
      />
      
      {/* Header with type indicator and category */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'var(--t-space-200)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--t-space-100)',
        }}>
          <span style={{ fontSize: '14px' }}>{getTypeSymbol(data.type)}</span>
          <span style={{
            fontSize: 'var(--t-typography-caption-lg-font-size)',
            color: 'var(--t-color-text-tertiary)',
            textTransform: 'uppercase',
            fontWeight: 'var(--t-typography-caption-lg-font-weight)',
          }}>
            {data.type}
          </span>
        </div>
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: data.color,
          }}
        />
      </div>

      {/* Token name */}
      <div style={{
        fontWeight: 'var(--t-typography-body-sm-font-weight)',
        color: 'var(--t-color-text-primary)',
        marginBottom: 'var(--t-space-200)',
        wordBreak: 'break-all',
        lineHeight: '1.3',
      }}>
        {data.label}
      </div>

      {/* Token value */}
      <div style={{
        fontSize: 'var(--t-typography-caption-lg-font-size)',
        color: isReference ? 'var(--t-color-text-info)' : 'var(--t-color-text-secondary)',
        fontFamily: isReference ? 'var(--t-font-family-mono, monospace)' : 'inherit',
        backgroundColor: isReference ? 'var(--t-color-surface-info-secondary)' : 'var(--t-color-surface-secondary)',
        padding: 'var(--t-space-100) var(--t-space-200)',
        borderRadius: 'var(--t-border-radius-100)',
        wordBreak: 'break-all',
        lineHeight: '1.2',
      }}>
        {data.value}
      </div>

      {/* Category badge */}
      {data.category && (
        <div style={{
          marginTop: 'var(--t-space-200)',
          fontSize: 'var(--t-typography-caption-sm-font-size)',
          color: 'var(--t-color-text-tertiary)',
          textAlign: 'center',
          textTransform: 'capitalize',
        }}>
          {data.category}
        </div>
      )}

      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          background: data.color,
          border: '2px solid white',
          width: '12px',
          height: '12px',
        }}
      />
    </div>
  );
});

TokenNode.displayName = 'TokenNode';