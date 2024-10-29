import { Bar } from "react-chartjs-2";
import {
  data as initialData,
  options,
} from "../data/BarChartComparisonConstant";
import useDynamicData from "../hook/useDynamicData";

const BarChartComparison = ({
  chartRef,
}: {
  chartRef: React.RefObject<any>;
}) => {
  const { data, containerRef } = useDynamicData(initialData, (prevData) => ({
    ...prevData,
    datasets: prevData.datasets.map((dataset: { data: any[] }) => ({
      ...dataset,
      data: dataset.data.map(() =>
        Math.floor(Math.random() * (15000000 - 1000000 + 1) + 1000000)
      ),
    })),
  }));

  return (
    <div ref={containerRef}>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarChartComparison;
