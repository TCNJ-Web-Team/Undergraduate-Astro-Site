// useVideoStore.ts
import { create } from "zustand";

interface VideoStore {
  currentVideoId: string | null;
  setCurrentVideoId: (id: string | null) => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  currentVideoId: null,
  setCurrentVideoId: (id) => set({ currentVideoId: id }),
}));
