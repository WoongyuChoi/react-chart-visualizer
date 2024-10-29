import { Chart } from "chart.js";
import { useEffect, useRef } from "react";
import AreaChart from "../chart/AreaChart";
import BarChartComparison from "../chart/BarChartComparison";
import BarChartNegative from "../chart/BarChartNegative";
import MixedChart from "../chart/MixedChart";
import WaterfallChart from "../chart/WaterfallChart";
import { SelectedTitle } from "../data/SelectedConstant";

const ChartLayout = ({
  selectedChart,
}: {
  selectedChart: SelectedTitle | undefined;
}) => {
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
      case SelectedTitle.BAR_CHART_1:
        return <BarChartComparison chartRef={chartRef} />;
      case SelectedTitle.BAR_CHART_2:
        return <BarChartNegative chartRef={chartRef} />;
      case SelectedTitle.WATERFALL_CHART:
        return <WaterfallChart chartRef={chartRef} />;
      case SelectedTitle.MIXED_CHART:
        return <MixedChart chartRef={chartRef} />;
      case SelectedTitle.AREA_CHART:
        return <AreaChart chartRef={chartRef} />;
      default:
        return <div>Please select a chart.</div>;
    }
  };

  return (
    <div
      style={{
        width: "80%",
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        padding: "30px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      <>{renderChart()}</>
    </div>
  );
};

export default ChartLayout;
