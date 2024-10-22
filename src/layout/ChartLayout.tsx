import { Chart } from "chart.js";
import { useEffect, useRef } from "react";
import BarChartComparison from "../chart/BarChartComparison";
import BarChartNegative from "../chart/BarChartNegative";

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

  const renderChart = () => {
    switch (selectedChart) {
      case 1:
        return <BarChartComparison chartRef={chartRef} />;
      case 2:
        return <BarChartNegative chartRef={chartRef} />;
      case 3:
        return <div>BarChart 3</div>;
      case 4:
        return <div>BarChart 4</div>;
      case 5:
        return <div>BarChart 5</div>;
      default:
        return <div>차트를 선택해주세요.</div>;
    }
  };

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
      {renderChart()}
    </div>
  );
};

export default ChartLayout;
