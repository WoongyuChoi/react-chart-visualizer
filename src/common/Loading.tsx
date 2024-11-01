import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import LoadingLottie from "../assets/lottie/loading.json";
import { usePlaying } from "../hook/usePlayingContext";
import usePlayingStore from "../store/playing";

export default function Loading() {
  const [mounted, setMounted] = useState(false);
  // const { isPlaying, toggleIsPlaying } = usePlaying();
  const { isPlaying, toggleIsPlaying } = usePlayingStore();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
        marginTop: "5px",
        cursor: "pointer",
      }}
      onClick={toggleIsPlaying}
    >
      <p
        style={{
          fontSize: "18px",
          color: "#333",
          textAlign: "center",
          marginRight: "5px",
        }}
      >
        {isPlaying ? "Generating dynamic data..." : "Paused"}
      </p>

      <Lottie
        loop
        animationData={LoadingLottie}
        play={isPlaying}
        speed={1}
        style={{ width: "25px", marginLeft: "5px" }}
      />
    </div>
  );
}
