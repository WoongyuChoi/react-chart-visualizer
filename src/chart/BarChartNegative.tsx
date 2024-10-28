import { Bar } from "react-chartjs-2";
import { data, options } from "../data/BarChartNegativeConstant";

const BarChartNegative = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  return <Bar ref={chartRef} data={data} options={options} />;
};

export default BarChartNegative;
