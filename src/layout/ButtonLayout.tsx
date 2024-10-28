import React from "react";
import "../Button.css";
import { SelectedTitle } from "../data/SelectedConstant";

interface ButtonLayoutProps {
  setSelectedChart: (chart: number) => void;
}

const ButtonLayout = ({ setSelectedChart }: ButtonLayoutProps) => {
  return (
    <>
      <button
        className="button-layout"
        onClick={() => setSelectedChart(SelectedTitle.BAR_CHART_1)}
        style={{ backgroundColor: "#A3C4F3" }}
      >
        Bar Chart 1
      </button>
      <button
        className="button-layout margin-left"
        onClick={() => setSelectedChart(SelectedTitle.BAR_CHART_2)}
        style={{ backgroundColor: "#85B1ED" }}
      >
        Bar Chart 2
      </button>
      <button
        className="button-layout margin-left"
        onClick={() => setSelectedChart(SelectedTitle.WATERFALL_CHART)}
        style={{ backgroundColor: "#66A0E8" }}
      >
        Waterfall Chart
      </button>
      <button
        className="button-layout margin-left"
        onClick={() => setSelectedChart(SelectedTitle.STACKED_BAR_CHART)}
        style={{ backgroundColor: "#4A8DE2" }}
      >
        Stacked Bar Chart
      </button>
      <button
        className="button-layout margin-left"
        onClick={() => setSelectedChart(SelectedTitle.MIXED_CHART)}
        style={{ backgroundColor: "#2E7AD9" }}
      >
        Mixed Chart
      </button>
    </>
  );
};

export default ButtonLayout;
