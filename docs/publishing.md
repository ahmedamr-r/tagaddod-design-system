# Tagaddod Design System - Publishing Guide

This README provides a detailed guide on how to publish updates to the Tagaddod Design System packages using our improved Changesets workflow.

## Publishing Workflow Overview

Our design system uses a modern, automated publishing workflow based on [Changesets](https://github.com/changesets/changesets). This ensures:

1. Proper versioning (following semver)
2. Automated changelog generation
3. Consistent publishing to npm
4. GitHub tags for releases

## How to Publish Updates

### Step 1: Make Your Changes

Make your changes to the design system - this could be updating tokens, adding components, fixing bugs, etc.

### Step 2: Create a Changeset

After making your changes, create a changeset to document what has changed and which packages should be updated:

```bash
yarn create-changeset
```

Our custom script will guide you through creating a changeset:
- Selecting which packages to update (tokens, react)
- Choosing the version bump type (patch, minor, major)
- Adding a summary and detailed description of changes

### Step 3: Commit and Push

Commit your changes along with the changeset file:

```bash
git add .
git commit -m "feat: add new button variant and update colors"
git push
```

### Step 4: Automated Publishing

Once your changes are pushed to the main branch, the GitHub Actions workflow (`release-improved.yml`) will:

1. Validate your changes (type checking, tests, build)
2. Build all packages
3. Create a release PR OR publish directly to npm
4. Create git tags for the published versions

## Manual Publishing (if needed)

If you need to publish manually (rare cases):

```bash
# Build packages
yarn build

# Version packages based on changesets
yarn changeset version

# Publish packages to npm
yarn changeset publish
```

## Troubleshooting

### React Build Failing

If the React package build is failing in CI, the workflow will automatically create placeholder files to ensure the library gets published. This is a temporary solution while we fix the underlying build issues.

To debug build issues locally:
```bash
yarn build:react
```

### No Changesets

If you push changes without a changeset, the workflow will automatically create one for a patch update of both packages. However, it's better practice to create explicit changesets to document your changes.

### Publishing Errors

If you encounter npm publishing errors:

1. Check that the `TAGADDOD_DESIGN` secret is valid in GitHub repository settings
2. Verify that the version in package.json doesn't already exist on npm
3. Ensure you have the correct npm permissions for the @tagaddod-design org

## Best Practices

1. **Semantic Versioning**: 
   - `patch` (0.1.0 → 0.1.1): Bug fixes, minor token updates
   - `minor` (0.1.1 → 0.2.0): New components, new token categories, non-breaking changes
   - `major` (0.2.0 → 1.0.0): Breaking changes

2. **Changesets**: Create detailed, informative changesets that explain what changed and why

3. **Testing**: Always test your changes locally before pushing

4. **Documentation**: Update documentation to reflect your changes

## How Our Workflow Handles Versioning

Our system uses a dual approach to ensure reliability:

1. **Primary Method**: Changesets for structured, semantic versioning
2. **Fallback Method**: Automatic version checking/bumping if Changesets fails

This ensures that the library always gets updated when published, even in edge cases.
