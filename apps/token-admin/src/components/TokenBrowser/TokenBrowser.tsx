'use client';

import React, { useState, useMemo } from 'react';
import { Button, Badge, Table, TextInput } from '@tagaddod-design/react';
import { IconEdit, IconExternalLink } from '@tabler/icons-react';

// Enhanced token interface for client-side usage
interface EnhancedToken {
  id: string;
  path: string;
  name: string;
  value: string | number;
  type: string;
  description?: string;
  category: 'core' | 'semantic' | 'brand' | 'locale';
  subcategory?: string;
  source: string;
  brand?: string;
  locale?: string;
  references?: string[];
  referencedBy?: string[];
  isReference: boolean;
  originalPath: string;
}

interface TokenBrowserProps {
  tokens: EnhancedToken[];
  onTokenUpdate?: (tokenId: string, updates: Partial<EnhancedToken>) => void;
  onTokenSelect?: (token: EnhancedToken) => void;
  selectedToken?: EnhancedToken;
  readOnly?: boolean;
  className?: string;
}

const TokenBrowser: React.FC<TokenBrowserProps> = ({
  tokens,
  onTokenUpdate = () => {},
  onTokenSelect = () => {},
  selectedToken,
  readOnly = false,
  className = ''
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    type: 'all',
    hasDescription: 'all'
  });

  // Custom cell component for token value display
  const TokenValueCell: React.FC<{ value: any; row: any }> = ({ value, row }) => {
    const token = row.original;
    
    if (token.type === 'color' && typeof value === 'string' && value.startsWith('#')) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-200)' }}>
          <div 
            style={{
              width: '16px',
              height: '16px',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)',
              backgroundColor: value,
              flexShrink: 0
            }}
          />
          <code style={{
            fontSize: 'var(--t-typography-caption-lg-font-size)',
            fontFamily: 'var(--t-font-family-code)',
            color: 'var(--t-color-text-secondary)',
            wordBreak: 'break-all'
          }}>
            {typeof value === 'object' ? JSON.stringify(value) : String(value)}
          </code>
        </div>
      );
    }

    return (
      <code style={{
        fontSize: 'var(--t-typography-caption-lg-font-size)',
        fontFamily: 'var(--t-font-family-code)',
        backgroundColor: 'var(--t-color-surface-secondary)',
        color: 'var(--t-color-text-secondary)',
        padding: 'var(--t-space-100) var(--t-space-200)',
        borderRadius: 'var(--t-border-radius-100)',
        display: 'block',
        wordBreak: 'break-all'
      }}>
        {typeof value === 'object' ? JSON.stringify(value) : String(value)}
      </code>
    );
  };

  // Custom cell component for token name and path
  const TokenNameCell: React.FC<{ value: any; row: any }> = ({ value, row }) => {
    const token = row.original;
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-100)' }}>
        <div style={{
          fontWeight: 'var(--t-typography-body-sm-font-weight)',
          color: 'var(--t-color-text-primary)',
          fontSize: 'var(--t-typography-body-sm-font-size)'
        }}>
          {token.name}
        </div>
        <div style={{
          fontSize: 'var(--t-typography-caption-lg-font-size)',
          color: 'var(--t-color-text-tertiary)',
          fontFamily: 'var(--t-font-family-code)'
        }}>
          {token.path}
        </div>
      </div>
    );
  };

  // Custom cell component for badges
  const TokenBadgesCell: React.FC<{ value: any; row: any }> = ({ value, row }) => {
    const token = row.original;
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-200)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--t-space-100)' }}>
          <Badge tone={
            token.category === 'core' ? 'info' :
            token.category === 'semantic' ? 'success' :
            token.category === 'brand' ? 'magic' :
            'warning'
          } size="medium">
            {token.category}
          </Badge>
          
          <Badge tone="default" size="medium">
            {token.type}
          </Badge>

          {token.isReference && (
            <Badge tone="info" size="medium">
              ref
            </Badge>
          )}
        </div>
        
        {token.subcategory && (
          <Badge tone="default" size="medium">
            {token.subcategory}
          </Badge>
        )}
      </div>
    );
  };

  // Custom editable description cell component
  const EditableDescriptionCell: React.FC<{ value: any; row: any }> = ({ value, row }) => {
    const token = row.original;
    const [localValue, setLocalValue] = useState(value || '');
    const [hasChanges, setHasChanges] = useState(false);
    
    // Update local value when the prop value changes (e.g., from external updates)
    React.useEffect(() => {
      setLocalValue(value || '');
      setHasChanges(false);
    }, [value]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalValue(newValue);
      setHasChanges(newValue !== (value || ''));
    };
    
    return (
      <div style={{ width: '100%', minWidth: '200px' }}>
        <TextInput
          value={localValue}
          onChange={handleChange}
          placeholder="Add description for this token..."
          onClick={(e) => e.stopPropagation()} // Prevent row click when editing
          style={{
            backgroundColor: hasChanges ? 'var(--t-color-surface-warning-secondary)' : undefined,
            borderColor: hasChanges ? 'var(--t-color-border-warning)' : undefined
          }}
        />
      </div>
    );
  };

  // Filter and search tokens
  const filteredTokens = useMemo(() => {
    const result = tokens.filter(token => {
      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        if (
          !token.name.toLowerCase().includes(searchLower) &&
          !token.path.toLowerCase().includes(searchLower) &&
          !token.type.toLowerCase().includes(searchLower) &&
          !(token.description && token.description.toLowerCase().includes(searchLower)) &&
          !String(token.value).toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }

      return true;
    });
    return result;
  }, [tokens, searchQuery]);

  // Get available filter options
  const filterOptions = useMemo(() => {
    const categories = Array.from(new Set(tokens.map(t => t.category))).sort();
    const types = Array.from(new Set(tokens.map(t => t.type))).sort();
    
    return {
      category: {
        label: 'Category',
        options: [
          { label: 'All Categories', value: 'all' },
          ...categories.map(cat => ({ label: cat, value: cat }))
        ]
      },
      type: {
        label: 'Type',
        options: [
          { label: 'All Types', value: 'all' },
          ...types.map(type => ({ label: type, value: type }))
        ]
      },
      hasDescription: {
        label: 'Description',
        options: [
          { label: 'All', value: 'all' },
          { label: 'Has Description', value: 'yes' },
          { label: 'No Description', value: 'no' }
        ]
      }
    };
  }, [tokens]);

  // Define table columns
  const columns = useMemo(() => [
    {
      id: 'name',
      accessorKey: 'name',
      header: 'Token Name',
      size: 250,
      cell: ({ row }: any) => <TokenNameCell value={row.original.name} row={row} />
    },
    {
      id: 'value',
      accessorKey: 'value',
      header: 'Value',
      size: 200,
      cell: ({ row }: any) => <TokenValueCell value={row.original.value} row={row} />
    },
    {
      id: 'badges',
      accessorKey: 'category',
      header: 'Category & Type',
      size: 180,
      cell: ({ row }: any) => <TokenBadgesCell value={row.original.category} row={row} />
    },
    {
      id: 'description',
      accessorKey: 'description',
      header: 'Description',
      size: 300,
      cell: ({ row }: any) => <EditableDescriptionCell value={row.original.description} row={row} />
    },
    {
      id: 'actions',
      header: 'Actions',
      size: 100,
      cell: ({ row }: any) => (
        <div style={{ display: 'flex', gap: 'var(--t-space-100)' }}>
          <Button
            variant="plain"
            size="micro"
            tone="neutral"
            prefixIcon={<IconEdit size={14} />}
            onClick={(e) => {
              e.stopPropagation();
              onTokenSelect(row.original);
            }}
            title="Select token"
          />
          <Button
            variant="plain"
            size="micro"
            tone="neutral"
            prefixIcon={<IconExternalLink size={14} />}
            onClick={(e) => {
              e.stopPropagation();
              // You can add logic here to open token in external editor
              console.log('Open token:', row.original);
            }}
            title="View details"
          />
        </div>
      )
    }
  ], [onTokenSelect, onTokenUpdate, selectedToken]);

  // Handle filter changes
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  // Apply filters to data
  const tableData = useMemo(() => {
    const result = filteredTokens.filter(token => {
      if (filters.category !== 'all' && token.category !== filters.category) {
        return false;
      }
      if (filters.type !== 'all' && token.type !== filters.type) {
        return false;
      }
      if (filters.hasDescription !== 'all') {
        if (filters.hasDescription === 'yes' && !token.description) {
          return false;
        }
        if (filters.hasDescription === 'no' && token.description) {
          return false;
        }
      }
      return true;
    });
    return result;
  }, [filteredTokens, filters]);

  return (
    <div className={className}>
      <Table
        data={tableData}
        columns={columns}
        title="Token Browser"
        showSearch={true}
        showFilters={true}
        showPagination={true}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilters={filters}
        onFilterChange={handleFilterChange}
        filterOptions={filterOptions}
        onRowClick={(row) => onTokenSelect(row.original)}
        gridCells={true}
        emptyMessage="No tokens found matching your criteria."
        state={tableData.length === 0 && searchQuery ? 'notFound' : 'normal'}
        notFoundMessage={`No tokens found for "${searchQuery}"`}
        notFoundSubtitle="Try adjusting your search terms or filters"
      />
    </div>
  );
};

export default TokenBrowser;