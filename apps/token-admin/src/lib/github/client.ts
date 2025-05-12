interface GitHubConfig {
  owner: string;
  repo: string;
  token: string;
}

export class GitHubClient {
  private baseUrl = 'https://api.github.com';
  private config: GitHubConfig;

  constructor(config: GitHubConfig) {
    this.config = config;
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `token ${this.config.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    return response.json();
  }

  async listBranches(prefix?: string) {
    const branches = await this.request(
      `/repos/${this.config.owner}/${this.config.repo}/branches`
    );
    
    if (prefix) {
      return branches.filter((branch: any) => branch.name.startsWith(prefix));
    }
    
    return branches;
  }

  async getBranch(branchName: string) {
    return this.request(
      `/repos/${this.config.owner}/${this.config.repo}/branches/${branchName}`
    );
  }

  async getFileContent(path: string, ref?: string) {
    const query = ref ? `?ref=${ref}` : '';
    return this.request(
      `/repos/${this.config.owner}/${this.config.repo}/contents/${path}${query}`
    );
  }

  async createPullRequest(data: {
    title: string;
    body: string;
    head: string;
    base: string;
  }) {
    return this.request(
      `/repos/${this.config.owner}/${this.config.repo}/pulls`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }

  async createBranch(branchName: string, baseBranch: string = 'main') {
    // Get the SHA of the base branch
    const base = await this.getBranch(baseBranch);
    const baseSha = base.commit.sha;

    // Create a new branch
    return this.request(
      `/repos/${this.config.owner}/${this.config.repo}/git/refs`,
      {
        method: 'POST',
        body: JSON.stringify({
          ref: `refs/heads/${branchName}`,
          sha: baseSha,
        }),
      }
    );
  }

  async createCommit(
    branchName: string,
    files: { path: string; content: string }[],
    message: string
  ) {
    // Get the current branch
    const branch = await this.getBranch(branchName);
    const currentCommitSha = branch.commit.sha;

    // Get the current tree
    const currentCommit = await this.request(
      `/repos/${this.config.owner}/${this.config.repo}/git/commits/${currentCommitSha}`
    );
    const currentTreeSha = currentCommit.tree.sha;

    // Create blobs for each file
    const blobs = await Promise.all(
      files.map(async (file) => {
        const blob = await this.request(
          `/repos/${this.config.owner}/${this.config.repo}/git/blobs`,
          {
            method: 'POST',
            body: JSON.stringify({
              content: file.content,
              encoding: 'utf-8',
            }),
          }
        );
        return {
          path: file.path,
          mode: '100644',
          type: 'blob',
          sha: blob.sha,
        };
      })
    );

    // Create a new tree
    const newTree = await this.request(
      `/repos/${this.config.owner}/${this.config.repo}/git/trees`,
      {
        method: 'POST',
        body: JSON.stringify({
          base_tree: currentTreeSha,
          tree: blobs,
        }),
      }
    );

    // Create a new commit
    const newCommit = await this.request(
      `/repos/${this.config.owner}/${this.config.repo}/git/commits`,
      {
        method: 'POST',
        body: JSON.stringify({
          message,
          tree: newTree.sha,
          parents: [currentCommitSha],
        }),
      }
    );

    // Update the branch reference
    await this.request(
      `/repos/${this.config.owner}/${this.config.repo}/git/refs/heads/${branchName}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          sha: newCommit.sha,
        }),
      }
    );

    return newCommit;
  }
}
