import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Store = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const useTheme = create<Store>()(
  persist(
    set => ({
      isDarkMode: false,
      toggleTheme: () => set(state => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
