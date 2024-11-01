import { create } from "zustand";

interface PlayingState {
  isPlaying: boolean;
  toggleIsPlaying: () => void;
}

const usePlayingStore = create<PlayingState>((set) => ({
  isPlaying: true,
  toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default usePlayingStore;