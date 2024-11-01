import { Chart } from "chart.js";
import React, { Suspense, useEffect, useRef } from "react";
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

  const chartMap = {
    BAR_CHART_1: React.lazy(() => import("../chart/BarChartComparison")),
    BAR_CHART_2: React.lazy(() => import("../chart/BarChartNegative")),
    WATERFALL_CHART: React.lazy(() => import("../chart/WaterfallChart")),
    MIXED_CHART: React.lazy(() => import("../chart/MixedChart")),
    AREA_CHART: React.lazy(() => import("../chart/AreaChart")),
  };

  const renderChart = () => {
    if (selectedChart) {
      const Chart = chartMap[selectedChart];
      return <Chart chartRef={chartRef} />;
    } else {
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
      <Suspense fallback={<div>Loading...</div>}>
        <>{renderChart()}</>
      </Suspense>
    </div>
  );
};

export default ChartLayout;
