// Performance testing utility for graph visualization
export const generateTestTokens = (count: number = 500) => {
  const categories = ['core', 'semantic', 'brand', 'locale'] as const;
  const types = ['color', 'spacing', 'typography', 'border', 'shadow'];
  const tokens = [];

  for (let i = 0; i < count; i++) {
    const category = categories[i % categories.length];
    const type = types[i % types.length];
    const tokenNum = Math.floor(i / categories.length) + 1;
    
    tokens.push({
      id: `token-${category}-${type}-${tokenNum}`,
      path: `${category}.${type}.${tokenNum}`,
      name: `${category}.${type}.${tokenNum}`,
      value: category === 'core' ? 
        (type === 'color' ? `#${Math.random().toString(16).substr(2, 6)}` : `${Math.floor(Math.random() * 50) + 1}px`) :
        `{${categories[Math.floor(Math.random() * Math.min(i, 10))]}.${type}.${Math.floor(Math.random() * 5) + 1}}`,
      type: type,
      description: `${category} token for ${type}`,
      category: category,
      subcategory: type,
      source: `${category}-tokens.json`,
      brand: category === 'brand' ? 'tagaddod' : undefined,
      locale: category === 'locale' ? 'en' : undefined,
      references: category !== 'core' ? [`${categories[0]}.${type}.${Math.floor(Math.random() * 5) + 1}`] : [],
      referencedBy: [],
      isReference: category !== 'core',
      originalPath: `${category}.${type}.${tokenNum}`,
    });
  }

  return tokens;
};

export const measurePerformance = (fn: () => void, label: string) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${label}: ${(end - start).toFixed(2)}ms`);
  return end - start;
};