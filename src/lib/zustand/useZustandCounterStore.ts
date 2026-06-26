import { create } from 'zustand';

type ZustandCounterStore = {
  count: number;
  decrement: () => void;
  increment: () => void;
  reset: () => void;
};

export const useZustandCounterStore = create<ZustandCounterStore>((set) => ({
  count: 0,
  decrement: () => set((state) => ({ count: state.count - 1 })),
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));
