import { Bar } from "react-chartjs-2";
import { data, options } from "../data/BarChartComparisonConstant";

const BarChartComparison = ({
  chartRef,
}: {
  chartRef: React.RefObject<any>;
}) => {
  return <Bar ref={chartRef} data={data} options={options} />;
};

export default BarChartComparison;
