'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@tagaddod-design/react';
import { IconSettings, IconRefresh } from '@tabler/icons-react';

export interface TokenContext {
  brand: 'common' | 'tagaddod' | 'greenpan';
  locale: 'en' | 'ar' | 'ltr' | 'rtl' | 'none';
  includeCore: boolean;
  includeSemantic: boolean;
  includeBrand: boolean;
  includeLocale: boolean;
}

interface TokenContextSwitcherProps {
  context: TokenContext;
  onContextChange: (context: TokenContext) => void;
  availableBrands?: string[];
  availableLocales?: string[];
  className?: string;
}

const TokenContextSwitcher: React.FC<TokenContextSwitcherProps> = ({
  context,
  onContextChange,
  availableBrands = ['common', 'tagaddod', 'greenpan'],
  availableLocales = ['none', 'en', 'ar', 'ltr', 'rtl'],
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleBrandChange = (brand: TokenContext['brand']) => {
    onContextChange({
      ...context,
      brand
    });
  };
  
  const handleLocaleChange = (locale: TokenContext['locale']) => {
    onContextChange({
      ...context,
      locale
    });
  };
  
  const handleCategoryToggle = (category: keyof Pick<TokenContext, 'includeCore' | 'includeSemantic' | 'includeBrand' | 'includeLocale'>) => {
    onContextChange({
      ...context,
      [category]: !context[category]
    });
  };

  const getBrandColor = (brand: string) => {
    switch (brand) {
      case 'tagaddod':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'greenpan':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLocaleIcon = (locale: string) => {
    switch (locale) {
      case 'en':
        return '🇺🇸';
      case 'ar':
        return '🇸🇦';
      case 'ltr':
        return '➡️';
      case 'rtl':
        return '⬅️';
      default:
        return '🌐';
    }
  };

  const activeFilters = [
    context.includeCore && 'Core',
    context.includeSemantic && 'Semantic', 
    context.includeBrand && 'Brand',
    context.includeLocale && 'Locale'
  ].filter(Boolean);

  return (
    <div className={`card ${className}`} style={{ backgroundColor: 'var(--t-color-surface-primary)' }}>
      <div className="flex items-center justify-between" style={{ marginBottom: 'var(--t-space-400)' }}>
        <h3 style={{
          fontSize: 'var(--t-typography-heading-md-font-size)',
          fontWeight: 'var(--t-typography-heading-md-font-weight)',
          color: 'var(--t-color-text-primary)'
        }}>Context Switcher</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="btn-secondary"
          style={{ fontSize: 'var(--t-typography-body-sm-font-size)' }}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {/* Quick Summary */}
      <div style={{ marginBottom: 'var(--t-space-400)' }}>
        <div className="flex items-center gap-2" style={{ marginBottom: 'var(--t-space-200)' }}>
          <span style={{
            padding: 'var(--t-space-100) var(--t-space-200)',
            borderRadius: 'var(--t-border-radius-100)',
            fontSize: 'var(--t-typography-caption-lg-font-size)',
            backgroundColor: context.brand === 'tagaddod' ? 'var(--t-color-surface-info-secondary)' : 
                           context.brand === 'greenpan' ? 'var(--t-color-surface-success-secondary)' : 
                           'var(--t-color-surface-secondary)',
            color: context.brand === 'tagaddod' ? 'var(--t-color-text-info)' : 
                   context.brand === 'greenpan' ? 'var(--t-color-text-success)' : 
                   'var(--t-color-text-primary)'
          }}>
            {context.brand === 'common' ? 'All Brands' : context.brand}
          </span>
          <span style={{
            fontSize: 'var(--t-typography-body-sm-font-size)',
            color: 'var(--t-color-text-secondary)'
          }}>
            {getLocaleIcon(context.locale)} {context.locale === 'none' ? 'No locale' : context.locale}
          </span>
        </div>
        
        <div style={{
          fontSize: 'var(--t-typography-caption-lg-font-size)',
          color: 'var(--t-color-text-tertiary)'
        }}>
          Active filters: {activeFilters.length > 0 ? activeFilters.join(', ') : 'None'}
        </div>
      </div>

      {isExpanded && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-600)' }}>
          {/* Brand Selection */}
          <div>
            <label style={{
              display: 'block',
              fontSize: 'var(--t-typography-body-sm-font-size)',
              fontWeight: 'var(--t-typography-body-sm-font-weight)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-200)'
            }}>
              Brand Context
            </label>
            <div className="grid grid-cols-3" style={{ gap: 'var(--t-space-200)' }}>
              {availableBrands.map((brand) => (
                <Button
                  key={brand}
                  onClick={() => handleBrandChange(brand as TokenContext['brand'])}
                  variant={context.brand === brand ? 'primary' : 'secondary'}
                  size="micro"

                >
                  {brand === 'common' ? 'All Brands' : brand}
                </Button>
              ))}
            </div>
            <p style={{
              fontSize: 'var(--t-typography-caption-lg-font-size)',
              color: 'var(--t-color-text-tertiary)',
              marginTop: 'var(--t-space-100)'
            }}>
              Select which brand context to view. "All Brands" shows core and semantic tokens.
            </p>
          </div>

          {/* Locale Selection */}
          <div>
            <label style={{
              display: 'block',
              fontSize: 'var(--t-typography-body-sm-font-size)',
              fontWeight: 'var(--t-typography-body-sm-font-weight)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-200)'
            }}>
              Locale Context
            </label>
            <div className="grid grid-cols-3" style={{ gap: 'var(--t-space-200)' }}>
              {availableLocales.map((locale) => (
                <Button
                  key={locale}
                  onClick={() => handleLocaleChange(locale as TokenContext['locale'])}
                  variant={context.locale === locale ? 'primary' : 'secondary'}
                  size="micro"
                >
                  <span style={{ marginRight: 'var(--t-space-100)' }}>{getLocaleIcon(locale)}</span>
                  <span>{locale === 'none' ? 'None' : locale}</span>
                </Button>
              ))}
            </div>
            <p style={{
              fontSize: 'var(--t-typography-caption-lg-font-size)',
              color: 'var(--t-color-text-tertiary)',
              marginTop: 'var(--t-space-100)'
            }}>
              Select locale-specific tokens to include (fonts, typography, spacing direction).
            </p>
          </div>

          {/* Token Category Filters */}
          <div>
            <label style={{
              display: 'block',
              fontSize: 'var(--t-typography-body-sm-font-size)',
              fontWeight: 'var(--t-typography-body-sm-font-weight)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-200)'
            }}>
              Token Categories
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-200)' }}>
              {[
                { key: 'includeCore' as const, label: 'Core Tokens', desc: 'Basic design values (colors, sizes, spacing)' },
                { key: 'includeSemantic' as const, label: 'Semantic Tokens', desc: 'Purpose-based tokens (text.primary, surface.hover)' },
                { key: 'includeBrand' as const, label: 'Brand Overrides', desc: 'Brand-specific customizations' },
                { key: 'includeLocale' as const, label: 'Locale Tokens', desc: 'Language and direction-specific tokens' }
              ].map(({ key, label, desc }) => (
                <div key={key} className="flex items-start" style={{ gap: 'var(--t-space-300)' }}>
                  <input
                    type="checkbox"
                    id={key}
                    checked={context[key]}
                    onChange={() => handleCategoryToggle(key)}
                    style={{
                      marginTop: 'var(--t-space-100)',
                      width: '16px',
                      height: '16px',
                      accentColor: 'var(--t-color-fill-brand)'
                    }}
                  />
                  <div className="flex-1">
                    <label htmlFor={key} style={{
                      fontSize: 'var(--t-typography-body-sm-font-size)',
                      fontWeight: 'var(--t-typography-body-sm-font-weight)',
                      color: 'var(--t-color-text-primary)',
                      cursor: 'pointer'
                    }}>
                      {label}
                    </label>
                    <p style={{
                      fontSize: 'var(--t-typography-caption-lg-font-size)',
                      color: 'var(--t-color-text-tertiary)'
                    }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Context Actions */}
          <div style={{
            borderTop: '1px solid var(--t-color-border-secondary)',
            paddingTop: 'var(--t-space-400)'
          }}>
            <div className="flex items-center justify-between">
              <Button
                onClick={() => onContextChange({
                  brand: 'common',
                  locale: 'none',
                  includeCore: true,
                  includeSemantic: true,
                  includeBrand: false,
                  includeLocale: false
                })}
                variant="secondary"
                size="micro"
                prefixIcon={<IconRefresh size={14} />}
              >
                Reset to Default
              </Button>
              
              <Button
                onClick={() => onContextChange({
                  ...context,
                  includeCore: true,
                  includeSemantic: true,
                  includeBrand: true,
                  includeLocale: true
                })}
                variant="primary"
                size="micro"
              >
                Show All
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Context Preview */}
      {!isExpanded && (
        <div style={{
          fontSize: 'var(--t-typography-caption-lg-font-size)',
          color: 'var(--t-color-text-tertiary)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--t-space-100)'
        }}>
          <div>Brand: <span style={{ fontWeight: 'var(--t-typography-body-sm-font-weight)' }}>{context.brand}</span></div>
          <div>Locale: <span style={{ fontWeight: 'var(--t-typography-body-sm-font-weight)' }}>{context.locale}</span></div>
          <div>Categories: <span style={{ fontWeight: 'var(--t-typography-body-sm-font-weight)' }}>{activeFilters.join(', ') || 'None'}</span></div>
        </div>
      )}
    </div>
  );
};

export default TokenContextSwitcher;