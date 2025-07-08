// Test utility to validate relationship detection
export const testTokenRelationships = () => {
  console.log('🔍 Testing Token Relationship Detection');
  
  // Sample tokens based on actual structure
  const testTokens = [
    // Core tokens
    {
      id: 'color-gray-900',
      path: 'color.gray.900',
      name: 'color.gray.900',
      value: '#c7c8d1',
      category: 'core' as const,
      type: 'color',
    },
    {
      id: 'color-blue-1200',
      path: 'color.blue.1200',
      name: 'color.blue.1200',
      value: '#3959fe',
      category: 'core' as const,
      type: 'color',
    },
    // Semantic tokens
    {
      id: 'color-border-primary',
      path: 'color.border.primary',
      name: 'color.border.primary',
      value: '{color.gray.900}',
      category: 'semantic' as const,
      type: 'color',
    },
    {
      id: 'color-text-link',
      path: 'color.text.link',
      name: 'color.text.link',
      value: '{color.gray.1600}',
      category: 'semantic' as const,
      type: 'color',
    },
    // Brand override tokens
    {
      id: 'color-text-link-tagaddod',
      path: 'color.text.link',
      name: 'color.text.link',
      value: '{color.blue.1200}',
      category: 'brand' as const,
      type: 'color',
      brand: 'tagaddod',
    },
  ];
  
  console.log('📝 Test Tokens:', testTokens.length);
  console.log('🎯 Expected Relationships:');
  console.log('  - color.gray.900 → color.border.primary (reference)');
  console.log('  - color.blue.1200 → color.text.link [tagaddod] (override)');
  
  return testTokens;
};

export const validateRelationshipTypes = () => {
  console.log('✅ Relationship Type Validation:');
  console.log('  🔵 Reference: Semantic tokens referencing core tokens');
  console.log('  🔴 Override: Brand tokens overriding semantic tokens');
  console.log('  🟡 Locale Override: Locale-specific overrides');
  console.log('  🟢 Inheritance: Parent-child token inheritance');
};