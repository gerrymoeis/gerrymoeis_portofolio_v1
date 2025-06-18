import { create } from 'zustand';
import { ReactNode } from 'react';

export interface WindowState {
  id: string;
  title: string;
  content: ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  zIndex: number;
}

interface WindowStore {
  windows: Record<string, WindowState>;
  openWindow: (window: Omit<WindowState, 'isOpen' | 'isMinimized' | 'zIndex'>) => void;
  closeWindow: (id: string) => void;
  toggleMinimize: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void;
}

let zIndexCounter = 1;

const useWindowStore = create<WindowStore>((set, get) => ({
  windows: {},

  openWindow: (newWindow) => set((state) => {
    const existingWindow = state.windows[newWindow.id];
    if (existingWindow && existingWindow.isOpen) {
      // If window is open, just focus it
      return { windows: { ...state.windows, [newWindow.id]: { ...existingWindow, isMinimized: false, zIndex: zIndexCounter++ } } };
    }
    // Otherwise, open it (or add it if it's new)
    return {
      windows: {
        ...state.windows,
        [newWindow.id]: {
          ...newWindow,
          isOpen: true,
          isMinimized: false,
          zIndex: zIndexCounter++,
        },
      },
    };
  }),

  closeWindow: (id) => set((state) => ({
    windows: { ...state.windows, [id]: { ...state.windows[id], isOpen: false } },
  })),

  toggleMinimize: (id) => set((state) => ({
    windows: { ...state.windows, [id]: { ...state.windows[id], isMinimized: !state.windows[id].isMinimized, zIndex: zIndexCounter++ } },
  })),

  focusWindow: (id) => set((state) => ({
    windows: { ...state.windows, [id]: { ...state.windows[id], zIndex: zIndexCounter++ } },
  })),

  updateWindowPosition: (id, position) => set(state => ({
    windows: { ...state.windows, [id]: { ...state.windows[id], position } }
  }))
}));

export default useWindowStore;
