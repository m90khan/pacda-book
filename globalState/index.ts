import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
export const useGlobalState: any = create(
  devtools(
    (set, get) => ({
      _hasHydrated: false,

      scene: 'Global State',
    }),
    {
      name: 'store',
    }
  )
);
