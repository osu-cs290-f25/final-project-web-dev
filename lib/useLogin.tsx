import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  id?: string;
  setId: (id: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      id: undefined,
      setId: (id) => set(() => ({ id })),
    }),
    {
      name: "user-storage",
    },
  ),
);
