import React, { useEffect, useRef } from "react";
import BarChartComparison from "../chart/BarChartComparison";
import { Chart } from "chart.js";
import BarChartAnother from "../chart/BarChartAnother";

const ChartLayout = ({ selectedChart }: { selectedChart: number }) => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // 컴포넌트 언마운트 시 차트 파괴
      }
    };
  }, []);

  return (
    <div
      style={{
        width: "80%",
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        padding: "30px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {selectedChart === 1 ? (
        <BarChartComparison chartRef={chartRef} />
      ) : (
        <BarChartAnother chartRef={chartRef} />
      )}
    </div>
  );
};

export default ChartLayout;
