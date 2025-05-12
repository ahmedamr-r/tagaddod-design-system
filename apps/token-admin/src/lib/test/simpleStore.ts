import { create } from 'zustand';

interface SimpleStore {
  count: number;
  increment: () => void;
  data: Record<string, any>;
  loadData: () => Promise<void>;
}

export const useSimpleStore = create<SimpleStore>((set) => ({
  count: 0,
  data: {},
  increment: () => set((state) => ({ count: state.count + 1 })),
  loadData: async () => {
    try {
      const response = await fetch('/api/tokens');
      const jsonData = await response.json();
      console.log('Loaded data:', jsonData);
      set({ data: jsonData });
    } catch (error) {
      console.error('Error loading data:', error);
    }
  },
}));
