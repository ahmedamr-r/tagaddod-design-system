'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useTokenStore } from '../lib/tokenStore';
import TokenTable from './TokenTable';
import { GitHubClient } from '../lib/github/client';
import { TokenSync } from '../lib/github/sync';
import { validateTokenSet } from '../lib/validation';
import { loadTokensFromDist } from '../lib/tokenLoader';

export default function TokenAdmin() {
  const store = useTokenStore();
  const [activeTab, setActiveTab] = useState<'edit' | 'import' | 'export'>('edit');
  const [importSource, setImportSource] = useState<'file' | 'github'>('file');
  const [githubBranches, setGithubBranches] = useState<any[]>([]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [githubToken, setGithubToken] = useState('');
  const [githubOwner, setGithubOwner] = useState('');
  const [githubRepo, setGithubRepo] = useState('tagaddod-design-system');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load tokens from packages on mount
  useEffect(() => {
    const loadInitialTokens = async () => {
      try {
        setLoading(true);
        const tokens = await loadTokensFromDist();
        store.loadTokens(tokens);
        setSuccess('Tokens loaded from packages');
      } catch (err) {
        setError(`Error loading tokens: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    
    loadInitialTokens();
  }, []); // Run once on mount

  // Create GitHub client when token and owner are provided
  const githubClient = useMemo(() => {
    if (!githubToken || !githubOwner) return null;
    
    return new GitHubClient({
      owner: githubOwner,
      repo: githubRepo,
      token: githubToken,
    });
  }, [githubToken, githubOwner, githubRepo]);

  const tokenSync = useMemo(() => {
    if (!githubClient) return null;
    return new TokenSync(githubClient);
  }, [githubClient]);

  const handleImportFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      setError(null);
      const text = await file.text();
      const tokens = JSON.parse(text);
      
      // Validate token set
      const errors = validateTokenSet(tokens);
      if (errors.length > 0) {
        setError(`Validation errors: ${errors.join(', ')}`);
        return;
      }
      
      store.loadTokens(tokens);
      setSuccess('Tokens imported successfully');
      setActiveTab('edit');
    } catch (err) {
      setError(`Error importing file: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadGitHubBranches = async () => {
    if (!tokenSync) {
      setError('Please enter GitHub credentials first');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const branches = await tokenSync.listTokenBranches();
      setGithubBranches(branches);
      setSuccess('GitHub branches loaded successfully');
    } catch (err) {
      setError(`Error loading GitHub branches: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleImportFromGitHub = async () => {
    if (!selectedBranch) {
      setError('Please select a branch');
      return;
    }

    if (!tokenSync) {
      setError('Please enter GitHub credentials first');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const tokens = await tokenSync.importFromBranch(selectedBranch);
      
      // Validate token set
      const errors = validateTokenSet(tokens);
      if (errors.length > 0) {
        setError(`Validation errors: ${errors.join(', ')}`);
        return;
      }
      
      store.loadTokens(tokens);
      setSuccess('Tokens imported from GitHub successfully');
      setActiveTab('edit');
    } catch (err) {
      setError(`Error importing from GitHub: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleExportToFile = () => {
    const tokens = store.tokens;
    const blob = new Blob([JSON.stringify(tokens, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tokens-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setSuccess('Tokens exported successfully');
  };

  const handleCreatePullRequest = async () => {
    if (!tokenSync) {
      setError('Please enter GitHub credentials first');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Validate tokens before creating PR
      const errors = validateTokenSet(store.tokens);
      if (errors.length > 0) {
        setError(`Validation errors: ${errors.join(', ')}`);
        return;
      }
      
      const pr = await tokenSync.createPullRequest(store.tokens, 'Updated design tokens via Token Admin UI');
      setSuccess(`Pull request created successfully: ${pr.html_url}`);
    } catch (err) {
      setError(`Error creating pull request: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Token Admin</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('edit')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'edit'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Edit Tokens
            </button>
            <button
              onClick={() => setActiveTab('import')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'import'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Import
            </button>
            <button
              onClick={() => setActiveTab('export')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'export'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Export
            </button>
          </nav>
        </div>

        {/* Notifications */}
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
            {success}
          </div>
        )}

        {/* Tab Content */}
        {activeTab === 'edit' && <TokenTable />}

        {activeTab === 'import' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Import Source
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="file"
                    checked={importSource === 'file'}
                    onChange={(e) => setImportSource(e.target.value as 'file' | 'github')}
                    className="mr-2"
                  />
                  File Upload
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="github"
                    checked={importSource === 'github'}
                    onChange={(e) => setImportSource(e.target.value as 'file' | 'github')}
                    className="mr-2"
                  />
                  GitHub Branch
                </label>
              </div>
            </div>

            {importSource === 'file' && (
              <div>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportFile}
                  ref={fileInputRef}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                >
                  Choose File
                </button>
              </div>
            )}

            {importSource === 'github' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">GitHub Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Personal Access Token</label>
                      <input
                        type="password"
                        placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                        value={githubToken}
                        onChange={(e) => setGithubToken(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Generate a token with 'repo' scope at github.com/settings/tokens
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Repository Owner</label>
                      <input
                        type="text"
                        placeholder="your-github-username"
                        value={githubOwner}
                        onChange={(e) => setGithubOwner(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Repository Name</label>
                      <input
                        type="text"
                        placeholder="tagaddod-design-system"
                        value={githubRepo}
                        onChange={(e) => setGithubRepo(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <button
                    onClick={handleLoadGitHubBranches}
                    disabled={loading || !githubToken || !githubOwner}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                  >
                    Load GitHub Branches
                  </button>
                </div>
                {githubBranches.length > 0 && (
                  <div>
                    <select
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full px-3 py-2 border rounded mb-4"
                    >
                      <option value="">Select a branch</option>
                      {githubBranches.map((branch) => (
                        <option key={branch.name} value={branch.name}>
                          {branch.name}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={handleImportFromGitHub}
                      disabled={loading || !selectedBranch}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                    >
                      Import from Selected Branch
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'export' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Export to File</h3>
                <button
                  onClick={handleExportToFile}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Download JSON
                </button>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-2">Create GitHub Pull Request</h3>
                <p className="text-sm text-gray-600 mb-4">
                  This will create a pull request with your current token changes.
                </p>
                <button
                  onClick={handleCreatePullRequest}
                  disabled={loading || !githubClient}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                >
                  Create Pull Request
                </button>
                {!githubClient && (
                  <p className="text-sm text-red-600 mt-2">
                    Please configure GitHub credentials in the Import tab first.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
