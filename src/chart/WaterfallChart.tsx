import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar } from "react-chartjs-2";
import { data, options } from "../data/WaterfallChartConstant";

const WaterfallChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  return (
    <Bar
      ref={chartRef}
      data={data}
      options={options}
      plugins={[ChartDataLabels]}
    />
  );
};

export default WaterfallChart;
