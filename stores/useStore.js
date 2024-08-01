import { create } from "zustand";

// Define the store's initial state and actions
const useStore = create((set) => ({
  sidebarOpen: true,
  setSidebarOpen: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  user: null,
  setUser: () => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useStore;
