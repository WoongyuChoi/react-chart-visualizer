import { useState } from "react";
import { usePlayingContext } from "../hook/usePlayingContext";

const UsePlayingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleIsPlaying = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <usePlayingContext.Provider value={{ isPlaying, toggleIsPlaying }}>
      <>{children}</>
    </usePlayingContext.Provider>
  );
};

export default UsePlayingProvider;
