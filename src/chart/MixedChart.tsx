import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar } from "react-chartjs-2";
import { data, options } from "../data/MixedChartConstant";

const MixedChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  return (
    <Bar
      ref={chartRef}
      data={data}
      options={options}
      plugins={[ChartDataLabels]}
    />
  );
};

export default MixedChart;
