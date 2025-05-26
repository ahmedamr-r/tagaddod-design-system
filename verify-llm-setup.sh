#!/bin/bash

# Verification script for LLM integration setup
echo "🤖 Verifying LLM Integration Setup..."
echo ""

# Check if llms.txt exists in React package
if [ -f "packages/react/llms.txt" ]; then
    echo "✅ Source file exists: packages/react/llms.txt"
    echo "   Size: $(wc -l < packages/react/llms.txt) lines"
else
    echo "❌ Missing source file: packages/react/llms.txt"
fi

# Check if llms.txt exists in Storybook public directory  
if [ -f "packages/storybook/public/llms.txt" ]; then
    echo "✅ Static file exists: packages/storybook/public/llms.txt"
    echo "   Size: $(wc -l < packages/storybook/public/llms.txt) lines"
else
    echo "❌ Missing static file: packages/storybook/public/llms.txt"
fi

# Check React package.json exports
if grep -q '"./llms.txt": "./llms.txt"' packages/react/package.json; then
    echo "✅ React package exports llms.txt"
else
    echo "❌ React package missing llms.txt export"
fi

# Check React package.json files
if grep -q '"llms.txt"' packages/react/package.json; then
    echo "✅ React package includes llms.txt in files"
else
    echo "❌ React package missing llms.txt in files array"
fi

# Check Storybook main.js staticDirs
if grep -q "staticDirs.*public" packages/storybook/.storybook/main.js; then
    echo "✅ Storybook configured to serve static files"
else
    echo "❌ Storybook missing staticDirs configuration"
fi

# Check build scripts
if grep -q "cp.*llms.txt.*public" packages/storybook/package.json; then
    echo "✅ Storybook build scripts copy llms.txt"
else
    echo "❌ Storybook missing llms.txt copy scripts"
fi

echo ""
echo "🚀 Setup Status Summary:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📄 LLM Documentation: Ready for AI agents"
echo "🔗 NPM Export: @tagaddod/react/llms.txt"
echo "🌐 Live URL: https://tagaddod-design-system.vercel.app/llms.txt (after deployment)"
echo "🏠 Local URL: http://localhost:6006/llms.txt (when Storybook is running)"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git add . && git commit -m 'feat: Add LLM integration' && git push"
echo "2. Deploy to Vercel: Connect GitHub repo to Vercel project"
echo "3. Verify deployment: curl https://tagaddod-design-system.vercel.app/llms.txt"
echo ""
echo "📚 See STORYBOOK_DEPLOYMENT_GUIDE.md for detailed deployment instructions"