'use client';

import React from 'react';

export const TokenGraphLegend: React.FC = () => {
  const legendItems = [
    {
      type: 'Node Types',
      items: [
        { color: '#3B82F6', label: 'Core Tokens', symbol: '⚡', description: 'Foundation values' },
        { color: '#10B981', label: 'Semantic Tokens', symbol: '🎯', description: 'Meaningful references' },
        { color: '#8B5CF6', label: 'Brand Tokens', symbol: '🎨', description: 'Brand overrides' },
        { color: '#F59E0B', label: 'Locale Tokens', symbol: '🌍', description: 'Language specific' },
      ]
    },
    {
      type: 'Relationships',
      items: [
        { color: '#3B82F6', label: 'Reference', description: 'Semantic → Core', lineStyle: 'solid' },
        { color: '#EF4444', label: 'Override', description: 'Brand → Semantic', lineStyle: 'dashed' },
        { color: '#F59E0B', label: 'Locale Override', description: 'Locale → Any', lineStyle: 'dotted' },
      ]
    }
  ];

  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      left: '10px',
      backgroundColor: 'var(--t-color-surface-primary)',
      border: '1px solid var(--t-color-border-secondary)',
      borderRadius: 'var(--t-border-radius-200)',
      padding: 'var(--t-space-300)',
      fontSize: 'var(--t-typography-caption-sm-font-size)',
      zIndex: 1000,
      maxWidth: '240px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <h4 style={{
        margin: '0 0 var(--t-space-200) 0',
        fontSize: 'var(--t-typography-body-sm-font-size)',
        fontWeight: 'var(--t-typography-body-sm-font-weight)',
        color: 'var(--t-color-text-primary)',
      }}>
        Graph Legend
      </h4>
      
      {legendItems.map((section, sectionIndex) => (
        <div key={sectionIndex} style={{ marginBottom: 'var(--t-space-300)' }}>
          <h5 style={{
            margin: '0 0 var(--t-space-100) 0',
            fontSize: 'var(--t-typography-caption-lg-font-size)',
            fontWeight: 'var(--t-typography-caption-lg-font-weight)',
            color: 'var(--t-color-text-secondary)',
            textTransform: 'uppercase',
          }}>
            {section.type}
          </h5>
          
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--t-space-200)',
              marginBottom: 'var(--t-space-100)',
            }}>
              {item.lineStyle ? (
                // Line style indicator for relationships
                <div style={{
                  width: '20px',
                  height: '2px',
                  backgroundColor: item.color,
                  border: item.lineStyle === 'dashed' ? `2px dashed ${item.color}` : 
                          item.lineStyle === 'dotted' ? `2px dotted ${item.color}` : 'none',
                  backgroundColor: item.lineStyle === 'solid' ? item.color : 'transparent',
                }} />
              ) : (
                // Color dot for node types
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--t-space-100)',
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: item.color,
                  }} />
                  {item.symbol && (
                    <span style={{ fontSize: '10px' }}>{item.symbol}</span>
                  )}
                </div>
              )}
              
              <div>
                <div style={{
                  fontSize: 'var(--t-typography-caption-lg-font-size)',
                  color: 'var(--t-color-text-primary)',
                  fontWeight: '500',
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: 'var(--t-typography-caption-sm-font-size)',
                  color: 'var(--t-color-text-tertiary)',
                }}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      
      <div style={{
        marginTop: 'var(--t-space-200)',
        paddingTop: 'var(--t-space-200)',
        borderTop: '1px solid var(--t-color-border-tertiary)',
        fontSize: 'var(--t-typography-caption-sm-font-size)',
        color: 'var(--t-color-text-tertiary)',
      }}>
        <div>• Animated edges show data flow</div>
        <div>• Click nodes to select them</div>
        <div>• Use controls to zoom/pan</div>
      </div>
    </div>
  );
};