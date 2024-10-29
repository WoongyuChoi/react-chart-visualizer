import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import LoadingLottie from "../assets/lottie/loading.json";

export default function Loading() {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const togglePlay = () => setIsPlaying((prev) => !prev); // 재생/정지 토글 함수

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
      onClick={togglePlay}
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
