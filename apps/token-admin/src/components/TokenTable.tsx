'use client';

import React, { useState, useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import { FlatToken } from '../types/token';
import { useTokenStore } from '../lib/tokenStore';
import TokenEditor from './TokenEditor';

const columnHelper = createColumnHelper<FlatToken>();

export default function TokenTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [editingToken, setEditingToken] = useState<FlatToken | null>(null);
  
  const store = useTokenStore();
  const tokens = store.flattenTokens();
  
  const columns = useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: (info) => {
          const depth = info.row.original.path.length - 1;
          return (
            <div style={{ paddingLeft: `${depth * 20}px` }}>
              {info.getValue()}
            </div>
          );
        },
      }),
      columnHelper.accessor('value', {
        header: 'Value',
        cell: (info) => {
          const value = info.getValue();
          const type = info.row.original.type;
          
          if (type === 'color' && typeof value === 'string') {
            return (
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded border border-gray-300"
                  style={{ backgroundColor: value }}
                />
                <span>{value}</span>
              </div>
            );
          }
          
          return <span>{String(value)}</span>;
        },
      }),
      columnHelper.accessor('type', {
        header: 'Type',
        cell: (info) => (
          <span className="px-2 py-1 text-xs rounded bg-gray-100">
            {info.getValue()}
          </span>
        ),
      }),
      columnHelper.accessor('source', {
        header: 'Source',
        cell: (info) => (
          <span className="px-2 py-1 text-xs rounded bg-blue-100">
            {info.getValue()}
          </span>
        ),
      }),
      columnHelper.accessor('theme', {
        header: 'Theme',
        cell: (info) => info.getValue() || '-',
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: (info) => (
          <div className="flex gap-2">
            <button
              onClick={() => setEditingToken(info.row.original)}
              className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => {
                const token = info.row.original;
                store.deleteToken(token.path, token.source);
              }}
              className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ),
      }),
    ],
    [store]
  );
  
  const table = useReactTable({
    data: tokens,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  
  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search tokens..."
          className="px-3 py-2 border rounded"
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(e) =>
            table.getColumn('name')?.setFilterValue(e.target.value)
          }
        />
        <button
          onClick={() => setEditingToken({} as FlatToken)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Token
        </button>
        <button
          onClick={() => store.undo()}
          disabled={store.currentIndex <= 0}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Undo
        </button>
        <button
          onClick={() => store.redo()}
          disabled={store.currentIndex >= store.history.length - 1}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Redo
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-left p-2 border-b font-semibold"
                    onClick={header.column.getToggleSortingHandler()}
                    style={{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 border-b">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {editingToken && (
        <TokenEditor
          token={editingToken}
          onSave={(token) => {
            if (token.id) {
              // Update existing token
              store.updateToken(token.path, {
                value: token.value,
                type: token.type,
                description: token.description,
              }, token.source);
            } else {
              // Add new token
              store.addToken(token.path, {
                value: token.value,
                type: token.type,
                description: token.description,
              }, token.source);
            }
            setEditingToken(null);
          }}
          onCancel={() => setEditingToken(null)}
        />
      )}
    </div>
  );
}
