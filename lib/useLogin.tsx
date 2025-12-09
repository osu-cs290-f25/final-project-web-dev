import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  id?: string;
  setId: (id?: string) => void;
  gems: number;
  addGems: (n: number) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      id: undefined,
      setId: (id) => set(() => ({ id })),
      gems: 100,
      addGems: (n) => set(({ gems }) => ({ gems: gems + n }))
    }),
    {
      name: "user-storage",
    },
  ),
);
