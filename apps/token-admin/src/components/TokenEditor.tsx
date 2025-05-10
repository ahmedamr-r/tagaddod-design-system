'use client';

import React, { useState, useEffect } from 'react';
import { FlatToken, TokenType } from '../types/token';
import { validateToken } from '../lib/validation';
import { checkContrast } from '../lib/contrastChecker';

interface TokenEditorProps {
  token: FlatToken;
  onSave: (token: FlatToken) => void;
  onCancel: () => void;
}

const TOKEN_TYPES: TokenType[] = [
  'color',
  'dimension',
  'font',
  'number',
  'string',
  'shadow',
  'gradient',
  'transition',
  'cubic-bezier',
];

const TOKEN_SOURCES = ['primitives', 'semantics', 'theme'] as const;

export default function TokenEditor({ token, onSave, onCancel }: TokenEditorProps) {
  const [editedToken, setEditedToken] = useState<FlatToken>(token);
  const [path, setPath] = useState(token.path?.join('.') || '');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [contrastWarnings, setContrastWarnings] = useState<string[]>([]);
  
  useEffect(() => {
    // Validate token
    const errors = validateToken(editedToken);
    setValidationErrors(errors);
    
    // Check contrast if color
    if (editedToken.type === 'color' && typeof editedToken.value === 'string') {
      const warnings = checkContrast(editedToken.value);
      setContrastWarnings(warnings);
    } else {
      setContrastWarnings([]);
    }
  }, [editedToken]);
  
  const handleSave = () => {
    if (validationErrors.length === 0) {
      const pathArray = path.split('.');
      const updatedToken = {
        ...editedToken,
        path: pathArray,
        name: pathArray[pathArray.length - 1],
      };
      onSave(updatedToken);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">
          {token.id ? 'Edit Token' : 'Add Token'}
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Path</label>
            <input
              type="text"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="color.blue.500"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              value={editedToken.type}
              onChange={(e) => setEditedToken({ ...editedToken, type: e.target.value as TokenType })}
              className="w-full px-3 py-2 border rounded"
            >
              {TOKEN_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Source</label>
            <select
              value={editedToken.source}
              onChange={(e) => setEditedToken({ ...editedToken, source: e.target.value as any })}
              className="w-full px-3 py-2 border rounded"
            >
              {TOKEN_SOURCES.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </div>
          
          {editedToken.source === 'theme' && (
            <div>
              <label className="block text-sm font-medium mb-1">Theme</label>
              <input
                type="text"
                value={editedToken.theme || ''}
                onChange={(e) => setEditedToken({ ...editedToken, theme: e.target.value })}
                placeholder="greenpan"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium mb-1">Value</label>
            {editedToken.type === 'color' && (
              <div className="flex gap-2">
                <input
                  type="color"
                  value={editedToken.value as string}
                  onChange={(e) => setEditedToken({ ...editedToken, value: e.target.value })}
                  className="h-10"
                />
                <input
                  type="text"
                  value={editedToken.value as string}
                  onChange={(e) => setEditedToken({ ...editedToken, value: e.target.value })}
                  className="flex-1 px-3 py-2 border rounded"
                />
              </div>
            )}
            {editedToken.type !== 'color' && (
              <input
                type="text"
                value={editedToken.value as string}
                onChange={(e) => setEditedToken({ ...editedToken, value: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={editedToken.description || ''}
              onChange={(e) => setEditedToken({ ...editedToken, description: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              rows={2}
            />
          </div>
          
          {validationErrors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded p-3">
              <h3 className="text-sm font-semibold text-red-800 mb-1">Validation Errors:</h3>
              <ul className="text-sm text-red-700">
                {validationErrors.map((error, i) => (
                  <li key={i}>• {error}</li>
                ))}
              </ul>
            </div>
          )}
          
          {contrastWarnings.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
              <h3 className="text-sm font-semibold text-yellow-800 mb-1">Contrast Warnings:</h3>
              <ul className="text-sm text-yellow-700">
                {contrastWarnings.map((warning, i) => (
                  <li key={i}>• {warning}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={validationErrors.length > 0}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
