import React from "react";
import "../Button.css";
import { SelectedTitle } from "../data/SelectedConstant";

interface ButtonLayoutProps {
  setSelectedChart: (chart: SelectedTitle) => void;
}

const ButtonLayout = ({ setSelectedChart }: ButtonLayoutProps) => {
  return (
    <div
      style={{
        marginTop: "15px",
        marginBottom: "15px",
      }}
    >
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
        onClick={() => setSelectedChart(SelectedTitle.MIXED_CHART)}
        style={{ backgroundColor: "#4A8DE2" }}
      >
        Mixed Chart
      </button>
      <button
        className="button-layout margin-left"
        onClick={() => setSelectedChart(SelectedTitle.AREA_CHART)}
        style={{ backgroundColor: "#2E7AD9" }}
      >
        Area Chart
      </button>
    </div>
  );
};

export default ButtonLayout;
