import { Bar } from "react-chartjs-2";
import { data as initialData, options } from "../data/BarChartNegativeConstant";
import useDynamicData from "../hook/useDynamicData";

const BarChartNegative = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  const { data, containerRef } = useDynamicData(
    initialData,
    (prevData) => ({
      ...prevData,
      datasets: prevData.datasets.map((dataset: { data: any[] }) => ({
        ...dataset,
        data: dataset.data.map(() =>
          Math.floor(Math.random() * (-1750000000 + 1))
        ),
      })),
    }),
    "BarChartNegative"
  );

  return (
    <div ref={containerRef}>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarChartNegative;
