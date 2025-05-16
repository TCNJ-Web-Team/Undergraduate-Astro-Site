// useVideoStore.ts
import { create } from "zustand";

interface AccordionTrack {
  currentAccordionId: string | null;
  setCurrentAccordionId: (id: string | null) => void;
}

export const useAccordionTrackStore = create<AccordionTrack>((set) => ({
  currentAccordionId: null,
  setCurrentAccordionId: (id) => set({ currentAccordionId: id }),
}));
