import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';

type Store = {
  user: any;
  setUser: (_user: any) => void;
};

export const useUserStore = create<Store>()(
  persist(
    set => ({
      user: null,
      setUser: _user => {
        set({ user: _user });
        Cookies.set('user', JSON.stringify(_user), { expires: 7 });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => state => {
        const cookieUser = Cookies.get('user');
        if (cookieUser) {
          state?.setUser(JSON.parse(cookieUser));
        }
      },
    },
  ),
);
