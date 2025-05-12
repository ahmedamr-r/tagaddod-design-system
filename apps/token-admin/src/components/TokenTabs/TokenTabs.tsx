import React from 'react';

interface TokenTabsProps {
  activeTab: 'source' | 'built';
  onTabChange: (tab: 'source' | 'built') => void;
}

export const TokenTabs: React.FC<TokenTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        <button
          onClick={() => onTabChange('source')}
          className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
            activeTab === 'source'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Source Tokens
        </button>
        <button
          onClick={() => onTabChange('built')}
          className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
            activeTab === 'built'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Built Tokens (Read-only)
        </button>
      </nav>
    </div>
  );
};
