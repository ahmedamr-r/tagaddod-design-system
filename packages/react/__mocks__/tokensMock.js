module.exports = {
  // Mock token values here
  getTokenValue: jest.fn().mockImplementation((token) => {
    // Return mock values based on token name
    if (token.includes('color')) return '#000000';
    if (token.includes('space')) return '8px';
    if (token.includes('radius')) return '4px';
    return 'mock-value';
  })
};
