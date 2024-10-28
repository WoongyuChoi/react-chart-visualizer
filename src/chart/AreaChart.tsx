import React from "react";
import { Line } from "react-chartjs-2";
import { data, options } from "../data/AreaChartConstant";

const AreaChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  return <Line ref={chartRef} data={data} options={options} />;
};

export default AreaChart;
