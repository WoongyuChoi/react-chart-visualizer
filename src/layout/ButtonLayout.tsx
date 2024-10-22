import React from "react";
import "../Button.css";

interface ButtonLayoutProps {
  setSelectedChart: (chart: number) => void;
}

const ButtonLayout = ({ setSelectedChart }: ButtonLayoutProps) => {
  return (
    <>
      <button
        className="button-layout"
        onClick={() => setSelectedChart(1)}
        style={{ backgroundColor: "#FFB3BA" }}
      >
        막대 차트 1
      </button>
      <button
        className="button-layout margin-left"
        onClick={() => setSelectedChart(2)}
        style={{ backgroundColor: "#FFDFBA" }}
      >
        막대 차트 2
      </button>
      <button
        className="button-layout margin-left"
        onClick={() => setSelectedChart(3)}
        style={{ backgroundColor: "#FFFFBA" }}
      >
        워터폴 차트
      </button>
      <button
        className="button-layout margin-left"
        onClick={() => setSelectedChart(4)}
        style={{ backgroundColor: "#BAFFC9" }}
      >
        누적막대 & 선 차트
      </button>
      <button
        className="button-layout margin-left"
        onClick={() => setSelectedChart(5)}
        style={{ backgroundColor: "#BAE1FF" }}
      >
        영역 차트
      </button>
    </>
  );
};

export default ButtonLayout;
