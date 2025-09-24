import { create } from "zustand";

interface GlobalState {
  user: { name: string } | null;
  setUser: (user: { name: string } | null) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
