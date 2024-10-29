import React from "react";
import { Line } from "react-chartjs-2";
import { data as initialData, options } from "../data/AreaChartConstant";
import useDynamicData from "../hook/useDynamicData";

const AreaChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  const { data, containerRef } = useDynamicData(
    initialData,
    (prevData) => {
      return {
        ...prevData,
        datasets: prevData.datasets.map((dataset: { data: any[] }) => ({
          ...dataset,
          data: dataset.data.map(() =>
            parseFloat((Math.random() * 0.08).toFixed(2))
          ),
        })),
      };
    },
    "AreaChart"
  );

  return (
    <div ref={containerRef}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default AreaChart;
