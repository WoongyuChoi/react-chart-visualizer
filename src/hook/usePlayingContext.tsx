import { createContext, useContext } from "react";

interface usePlayingContextProps {
  isPlaying: boolean;
  toggleIsPlaying: () => void;
}

export const usePlayingContext = createContext<
  usePlayingContextProps | undefined
>(undefined);

export const usePlaying = () => {
  const context = useContext(usePlayingContext);
  if (!context) {
    throw new Error("usePlaying must be used within a UsePlayingProvider");
  }
  return context;
};
