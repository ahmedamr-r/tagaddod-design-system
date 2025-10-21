#!/bin/bash

# Deploy Storybook to Vercel as Static Site
# This script builds Storybook in the monorepo and deploys the static output

set -e  # Exit on error

echo "🚀 Starting Storybook deployment process..."

# Step 1: Build Storybook in monorepo
echo "📦 Building Storybook..."
yarn build:storybook

# Step 2: Prepare static-storybook directory
echo "🧹 Cleaning static-storybook directory..."
mkdir -p static-storybook
rm -rf static-storybook/*

# Step 3: Copy fresh build
echo "📋 Copying fresh build to static-storybook..."
cp -r packages/storybook/storybook-static/* static-storybook/

# Step 4: Restore vercel.json
echo "⚙️  Restoring vercel.json..."
cat > static-storybook/vercel.json << 'EOF'
{
  "version": 2,
  "builds": [
    { "src": "**", "use": "@vercel/static" }
  ]
}
EOF

# Step 5: Deploy to Vercel
echo "☁️  Deploying to Vercel..."
cd static-storybook
vercel --prod

echo "✅ Deployment complete!"
