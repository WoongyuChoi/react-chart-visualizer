import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  data as initialData,
  options,
} from "../data/BarChartComparisonConstant";
import useDynamicData from "../hook/useDynamicData";
import useThemeStore from "../store/theme";

const getBackgroundColor = (isDarkMode: boolean, index: number) => {
  if (isDarkMode) {
    return index === 0 ? "rgba(255, 0, 102, 0.8)" : "rgba(0, 255, 204, 0.8)";
  }
  return index === 0 ? "rgba(183, 152, 197, 0.5)" : "rgba(184, 239, 239, 0.5)";
};

const BarChartComparison = ({
  chartRef,
}: {
  chartRef: React.RefObject<any>;
}) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { data: dynamicData, containerRef } = useDynamicData(
    initialData,
    (prevData) => ({
      ...prevData,
      datasets: prevData.datasets.map(
        (dataset: { data: any[] }, index: number) => ({
          ...dataset,
          data: dataset.data.map(() =>
            Math.floor(Math.random() * (15000000 - 1000000 + 1) + 1000000)
          ),
          backgroundColor: getBackgroundColor(isDarkMode, index),
        })
      ),
    }),
    "BarChartComparison"
  );
  const [data, setData] = useState(dynamicData);

  useEffect(() => {
    setData(dynamicData);
  }, [dynamicData]);

  useEffect(() => {
    setData((prevData: any) => ({
      ...prevData,
      datasets: prevData.datasets.map(
        (dataset: { data: any[] }, index: number) => ({
          ...dataset,
          backgroundColor: getBackgroundColor(isDarkMode, index),
        })
      ),
    }));
  }, [isDarkMode]);

  return (
    <div ref={containerRef}>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarChartComparison;
