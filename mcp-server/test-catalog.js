#!/usr/bin/env node

/**
 * Test the new component_catalog tool
 */

async function testComponentCatalog() {
  const serverUrl = 'http://localhost:3000/mcp';
  
  console.log('🧪 Testing Component Catalog Tool...\n');
  
  try {
    // Test 1: Get all components
    console.log('📚 Test 1: Getting all components...');
    const allResponse = await fetch(serverUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'tools/call',
        params: {
          name: 'component_catalog',
          arguments: {
            category: 'all',
            type: 'all'
          }
        }
      })
    });
    
    if (allResponse.ok) {
      const data = await allResponse.json();
      if (data.result) {
        const catalog = JSON.parse(data.result.content[0].text);
        console.log(`✅ Found ${catalog.components.length} components`);
        console.log(`📋 Categories: ${catalog.categories.join(', ')}`);
        
        // Show first component as example
        if (catalog.components.length > 0) {
          const firstComp = catalog.components[0];
          console.log(`\n📄 Example component: ${firstComp.name}`);
          console.log(`   Category: ${firstComp.category}`);
          console.log(`   Type: ${firstComp.type}`);
          console.log(`   Import: ${firstComp.import_statement}`);
          console.log(`   Usage patterns: ${firstComp.usage_patterns.join(', ')}`);
        }
      }
    } else {
      console.log(`❌ Request failed: ${allResponse.status}`);
    }
    
    // Test 2: Get components by category
    console.log('\n🎨 Test 2: Getting form components...');
    const formsResponse = await fetch(serverUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 2,
        method: 'tools/call',
        params: {
          name: 'component_catalog',
          arguments: {
            category: 'forms',
            type: 'story'
          }
        }
      })
    });
    
    if (formsResponse.ok) {
      const data = await formsResponse.json();
      if (data.result) {
        const catalog = JSON.parse(data.result.content[0].text);
        console.log(`✅ Found ${catalog.components.length} form components`);
        catalog.components.slice(0, 3).forEach(comp => {
          console.log(`   • ${comp.name} - ${comp.description.substring(0, 50)}...`);
        });
      }
    }
    
    // Test 3: Get with design tokens
    console.log('\n🎨 Test 3: Getting components with design tokens...');
    const tokensResponse = await fetch(serverUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 3,
        method: 'tools/call',
        params: {
          name: 'component_catalog',
          arguments: {
            category: 'all',
            type: 'all',
            include_tokens: true
          }
        }
      })
    });
    
    if (tokensResponse.ok) {
      const data = await tokensResponse.json();
      if (data.result) {
        const catalog = JSON.parse(data.result.content[0].text);
        console.log(`✅ Catalog includes design tokens: ${!!catalog.design_tokens}`);
        if (catalog.design_tokens) {
          const tokenCategories = Object.keys(catalog.design_tokens);
          console.log(`   Token categories: ${tokenCategories.join(', ')}`);
        }
      }
    }
    
    console.log('\n🎉 Component catalog tests completed successfully!');
    console.log('\n💡 This catalog can now be used by Claude for intelligent component matching:');
    console.log('   - Claude can analyze component descriptions and usage patterns');
    console.log('   - Match user requests to appropriate components');
    console.log('   - Understand relationships between components');
    console.log('   - Access design tokens for consistent styling');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testComponentCatalog().catch(console.error);