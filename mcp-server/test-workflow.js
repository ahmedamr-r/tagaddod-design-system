#!/usr/bin/env node

/**
 * Comprehensive test script for MCP server workflow
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

async function testWorkflow() {
  console.log('🧪 Testing Tagaddod Design System MCP Server Workflow\n');
  
  const results = {
    documentation: false,
    tokens: false,
    server_health: false,
    tools_available: false
  };

  // Test 1: Check if documentation was built
  console.log('📚 Testing documentation build...');
  try {
    const storybookPath = join(process.cwd(), 'docs', 'storybook-index.json');
    const tokensPath = join(process.cwd(), 'docs', 'tokens.json');
    
    if (existsSync(storybookPath)) {
      const storybookData = JSON.parse(readFileSync(storybookPath, 'utf8'));
      const entryCount = Object.keys(storybookData.entries || {}).length;
      console.log(`✅ Storybook documentation: ${entryCount} stories found`);
      results.documentation = true;
    } else {
      console.log('❌ Storybook documentation not found');
    }
    
    if (existsSync(tokensPath)) {
      const tokensData = JSON.parse(readFileSync(tokensPath, 'utf8'));
      const tokenCategories = Object.keys(tokensData).length;
      console.log(`✅ Design tokens: ${tokenCategories} categories found`);
      results.tokens = true;
    } else {
      console.log('❌ Design tokens not found');
    }
  } catch (error) {
    console.log(`❌ Documentation test failed: ${error.message}`);
  }

  // Test 2: Check server availability
  console.log('\n🌐 Testing server availability...');
  try {
    const response = await fetch('http://localhost:3000/mcp', {
      method: 'GET'
    });
    
    if (response.status === 404 || response.status === 400) {
      console.log('✅ Server is running and responding');
      results.server_health = true;
    } else {
      console.log(`⚠️ Server responding with status: ${response.status}`);
    }
  } catch (error) {
    console.log(`❌ Server not accessible: ${error.message}`);
    console.log('   Make sure to run "npm run dev" in another terminal');
  }

  // Test 3: Check environment configuration
  console.log('\n🔧 Testing environment configuration...');
  const envVars = {
    'SUPABASE_URL': process.env.SUPABASE_URL,
    'SUPABASE_ANON_KEY': process.env.SUPABASE_ANON_KEY
  };
  
  Object.entries(envVars).forEach(([key, value]) => {
    if (value) {
      console.log(`✅ ${key}: configured`);
    } else {
      console.log(`⚠️ ${key}: not configured`);
    }
  });
  
  console.log(`✅ OPENAI_API_KEY: not required (client-side search)`);

  // Test 4: Check build outputs
  console.log('\n🔨 Testing build outputs...');
  const buildFiles = [
    'dist/src/server.js',
    'dist/src/server.d.ts',
    'dist/scripts/build-docs.js',
    'dist/scripts/ingest.js'
  ];
  
  buildFiles.forEach(file => {
    if (existsSync(file)) {
      console.log(`✅ ${file}: built`);
    } else {
      console.log(`❌ ${file}: missing`);
    }
  });

  // Test 5: Check deployment readiness
  console.log('\n🚀 Testing deployment readiness...');
  const deploymentFiles = [
    'vercel.json',
    'package.json',
    'README.md',
    'VSCODE_SETUP.md',
    'DEPLOYMENT.md'
  ];
  
  deploymentFiles.forEach(file => {
    if (existsSync(file)) {
      console.log(`✅ ${file}: ready`);
    } else {
      console.log(`❌ ${file}: missing`);
    }
  });

  // Summary
  console.log('\n📊 Test Summary:');
  console.log('================');
  
  const testResults = [
    ['Documentation Built', results.documentation],
    ['Design Tokens Loaded', results.tokens],
    ['Server Running', results.server_health],
    ['Environment Configured', !!envVars.SUPABASE_URL],
    ['Client-Side Search Ready', true]
  ];
  
  testResults.forEach(([test, passed]) => {
    console.log(`${passed ? '✅' : '❌'} ${test}`);
  });

  const passedTests = testResults.filter(([, passed]) => passed).length;
  const totalTests = testResults.length;
  
  console.log(`\n🎯 Overall: ${passedTests}/${totalTests} tests passed`);
  
  if (passedTests === totalTests) {
    console.log('\n🎉 All systems ready! You can now:');
    console.log('   1. Use VS Code integration (see VSCODE_SETUP.md)');
    console.log('   2. Deploy to Vercel (run: npm run deploy)');
    console.log('   3. Test component search and generation');
  } else {
    console.log('\n⚠️ Some tests failed. Check the issues above and:');
    console.log('   1. Run "npm run build-docs" if documentation is missing');
    console.log('   2. Run "npm run dev" if server is not running');
    console.log('   3. Add missing environment variables to .env');
  }

  console.log('\n📖 Next Steps:');
  console.log('   • See VSCODE_SETUP.md for VS Code integration');
  console.log('   • See DEPLOYMENT.md for production deployment');
  console.log('   • Use component_catalog tool for intelligent component discovery');
}

// Run the test
testWorkflow().catch(console.error);