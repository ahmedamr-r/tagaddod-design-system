'use client';

import React, { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { useTokenStore } from '@/lib/tokenStore';

interface TokenRow {
  path: string;
  value: string;
  type: string;
  description?: string;
}

interface TokenTableProps {
  tokens: Record<string, any>;
  readOnly?: boolean;
}

const columnHelper = createColumnHelper<TokenRow>();

export function TokenTable({ tokens, readOnly = false }: TokenTableProps) {
  const { updateToken, deleteToken } = useTokenStore();
  const [globalFilter, setGlobalFilter] = useState('');
  const [editingRow, setEditingRow] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<TokenRow | null>(null);

  console.log('Current editingRow:', editingRow);
  console.log('Current editValues:', editValues);
  console.log('readOnly:', readOnly);

  // Flatten tokens into table rows
  const flattenTokens = (obj: any, prefix = ''): TokenRow[] => {
    const result: TokenRow[] = [];
    
    Object.entries(obj).forEach(([key, value]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      
      if (value && typeof value === 'object' && 'value' in value && 'type' in value) {
        const tokenValue = value as any;
        result.push({
          path,
          value: String(tokenValue.value),
          type: String(tokenValue.type),
          description: tokenValue.description ? String(tokenValue.description) : undefined,
        });
      } else if (value && typeof value === 'object') {
        result.push(...flattenTokens(value, path));
      }
    });
    
    return result;
  };

  const data = flattenTokens(tokens);

  const handleCellClick = (path: string, row: TokenRow) => {
    console.log('Cell clicked:', path, row);
    if (!readOnly) {
      setEditingRow(path);
      setEditValues(row);
    }
  };

  const handleSave = () => {
    console.log('Saving:', editingRow, editValues);
    if (editValues && editingRow) {
      updateToken(editingRow, {
        value: editValues.value,
        type: editValues.type,
        description: editValues.description,
      });
    }
    setEditingRow(null);
    setEditValues(null);
  };

  const handleCancel = () => {
    console.log('Cancelling edit');
    setEditingRow(null);
    setEditValues(null);
  };

  const columns = [
    columnHelper.accessor('path', {
      header: 'Token Path',
      cell: ({ row }) => (
        <div className="font-mono text-sm">{row.original.path}</div>
      ),
    }),
    columnHelper.accessor('value', {
      header: 'Value',
      cell: ({ row }) => {
        const isEditing = editingRow === row.original.path;
        console.log(`Rendering value cell for ${row.original.path}, isEditing: ${isEditing}`);
        
        if (readOnly) {
          return <div className="font-mono text-sm">{row.original.value}</div>;
        }
        
        if (isEditing) {
          return (
            <input
              type="text"
              value={editValues?.value || ''}
              onChange={(e) => {
                console.log('Value input changed:', e.target.value);
                setEditValues(prev => prev ? {...prev, value: e.target.value} : null);
              }}
              className="w-full px-2 py-1 border rounded font-mono text-sm bg-white"
              autoFocus
            />
          );
        }
        
        return (
          <div 
            className="font-mono text-sm cursor-pointer hover:bg-gray-100 px-2 py-1 rounded border border-transparent hover:border-gray-300"
            onClick={() => handleCellClick(row.original.path, row.original)}
          >
            {row.original.value}
          </div>
        );
      },
    }),
    columnHelper.accessor('type', {
      header: 'Type',
      cell: ({ row }) => {
        const isEditing = editingRow === row.original.path;
        
        if (readOnly) {
          return <div className="text-sm">{row.original.type}</div>;
        }
        
        if (isEditing) {
          return (
            <select
              value={editValues?.type || ''}
              onChange={(e) => {
                console.log('Type select changed:', e.target.value);
                setEditValues(prev => prev ? {...prev, type: e.target.value} : null);
              }}
              className="w-full px-2 py-1 border rounded text-sm bg-white"
            >
              <option value="color">color</option>
              <option value="dimension">dimension</option>
              <option value="string">string</option>
              <option value="number">number</option>
              <option value="fontFamily">fontFamily</option>
              <option value="fontWeight">fontWeight</option>
              <option value="lineHeight">lineHeight</option>
              <option value="duration">duration</option>
              <option value="cubicBezier">cubicBezier</option>
            </select>
          );
        }
        
        return (
          <div 
            className="text-sm cursor-pointer hover:bg-gray-100 px-2 py-1 rounded border border-transparent hover:border-gray-300"
            onClick={() => handleCellClick(row.original.path, row.original)}
          >
            {row.original.type}
          </div>
        );
      },
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      cell: ({ row }) => {
        const isEditing = editingRow === row.original.path;
        
        if (readOnly) {
          return <div className="text-sm text-gray-600">{row.original.description || ''}</div>;
        }
        
        if (isEditing) {
          return (
            <input
              type="text"
              value={editValues?.description || ''}
              onChange={(e) => {
                console.log('Description input changed:', e.target.value);
                setEditValues(prev => prev ? {...prev, description: e.target.value} : null);
              }}
              className="w-full px-2 py-1 border rounded text-sm bg-white"
              placeholder="Optional description"
            />
          );
        }
        
        return (
          <div 
            className="text-sm text-gray-600 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded border border-transparent hover:border-gray-300"
            onClick={() => handleCellClick(row.original.path, row.original)}
          >
            {row.original.description || <span className="text-gray-400">Click to add</span>}
          </div>
        );
      },
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const isEditing = editingRow === row.original.path;
        
        if (readOnly) return null;
        
        if (isEditing) {
          return (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          );
        }
        
        return (
          <button
            onClick={() => {
              console.log('Delete clicked for:', row.original.path);
              if (confirm(`Delete token ${row.original.path}?`)) {
                deleteToken(row.original.path);
              }
            }}
            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
          >
            Delete
          </button>
        );
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search tokens..."
          value={globalFilter}
          onChange={e => setGlobalFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full max-w-md"
        />
      </div>
      
      <div className="border rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="bg-gray-50">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
