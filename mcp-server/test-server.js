#!/usr/bin/env node

/**
 * Simple test script to verify MCP server functionality
 */

async function testMCPServer() {
  const serverUrl = 'http://localhost:3000/mcp';
  
  console.log('🧪 Testing MCP Server...');
  console.log(`📍 Server URL: ${serverUrl}`);
  
  try {
    // Test health check
    console.log('\n🏥 Testing health check...');
    const healthResponse = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'tools/call',
        params: {
          name: 'health_check',
          arguments: {}
        }
      })
    });
    
    if (healthResponse.ok) {
      const healthData = await healthResponse.json();
      console.log('✅ Health check response:', JSON.stringify(healthData, null, 2));
    } else {
      console.log('❌ Health check failed:', healthResponse.status, healthResponse.statusText);
    }
    
    // Test component search (this might fail if database isn't populated)
    console.log('\n🔍 Testing component search...');
    const searchResponse = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 2,
        method: 'tools/call',
        params: {
          name: 'component_search',
          arguments: {
            query: 'button component',
            k: 3
          }
        }
      })
    });
    
    if (searchResponse.ok) {
      const searchData = await searchResponse.json();
      console.log('✅ Component search response:', JSON.stringify(searchData, null, 2));
    } else {
      console.log('❌ Component search failed:', searchResponse.status, searchResponse.statusText);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testMCPServer().catch(console.error);