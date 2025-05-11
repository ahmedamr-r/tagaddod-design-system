import React from 'react';

interface TokenAdminHeaderProps {
  activeTab: 'source' | 'built';
  isLoading: boolean;
  isBuilding: boolean;
  onSave: () => void;
  onBuild: () => void;
  selectedBrand: 'common' | 'tagaddod' | 'greenpan';
  onBrandChange: (brand: 'common' | 'tagaddod' | 'greenpan') => void;
}

export const TokenAdminHeader: React.FC<TokenAdminHeaderProps> = ({
  isLoading,
  isBuilding,
  onSave,
  onBuild,
  selectedBrand,
  onBrandChange,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="section-header">Token Admin</h1>
          <p className="text-sm text-gray-600">
            Manage design tokens for the Tagaddod Design System
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="brand-select" className="text-sm font-medium">
              Brand:
            </label>
            <select
              id="brand-select"
              className="select"
              value={selectedBrand}
              onChange={(e) => onBrandChange(e.target.value as 'common' | 'tagaddod' | 'greenpan')}
            >
              <option value="common">Common Tokens</option>
              <option value="tagaddod">Tagaddod Brand</option>
              <option value="greenpan">GreenPan Brand</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onSave}
              disabled={isLoading}
              className="btn-secondary"
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={onBuild}
              disabled={isBuilding || isLoading}
              className="btn-primary"
            >
              {isBuilding ? 'Building...' : 'Build Tokens'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Brand indicator */}
      <div className="flex items-center gap-2 text-sm">
        <span className="font-medium">Current View:</span>
        <span className={`
          px-2 py-1 rounded
          ${selectedBrand === 'common' ? 'bg-gray-100 text-gray-700' : ''}
          ${selectedBrand === 'tagaddod' ? 'bg-purple-100 text-purple-700' : ''}
          ${selectedBrand === 'greenpan' ? 'bg-green-100 text-green-700' : ''}
        `}>
          {selectedBrand === 'common' && 'Common Tokens'}
          {selectedBrand === 'tagaddod' && 'Tagaddod Brand'}
          {selectedBrand === 'greenpan' && 'GreenPan Brand'}
        </span>
      </div>
    </div>
  );
};
