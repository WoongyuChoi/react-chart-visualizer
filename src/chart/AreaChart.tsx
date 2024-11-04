import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { data as initialData, options } from "../data/AreaChartConstant";
import useDynamicData from "../hook/useDynamicData";
import useThemeStore from "../store/theme";

const getBackgroundColor = (isDarkMode: boolean) =>
  isDarkMode ? "rgba(0, 255, 204, 0.2)" : "rgba(7, 96, 140, 0.2)";

const getBorderColor = (isDarkMode: boolean) =>
  isDarkMode ? "rgba(0, 255, 153, 1)" : "rgba(75, 192, 192, 1)";

const AreaChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { data: dynamicData, containerRef } = useDynamicData(
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
        backgroundColor: getBackgroundColor(isDarkMode),
        borderColor: getBorderColor(isDarkMode),
      };
    },
    "AreaChart"
  );
  const [data, setData] = useState(dynamicData);

  useEffect(() => {
    setData(dynamicData);
  }, [dynamicData]);

  useEffect(() => {
    setData((prevData: any) => ({
      ...prevData,
      datasets: prevData.datasets.map((dataset: { data: any[] }) => ({
        ...dataset,
        backgroundColor: getBackgroundColor(isDarkMode),
        borderColor: getBorderColor(isDarkMode),
      })),
    }));
  }, [isDarkMode]);

  return (
    <div ref={containerRef}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default AreaChart;
