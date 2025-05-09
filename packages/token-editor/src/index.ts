// Export register and preview entry points
export * from './register';
export * from './preview';
export { TokenManager } from './panel/TokenManager';

// Initialize preview functionality if in iframe
if (typeof window !== 'undefined' && window.parent !== window) {
  import('./preview');
}
