import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { data as initialData, options } from "../data/BarChartNegativeConstant";
import useDynamicData from "../hook/useDynamicData";
import useThemeStore from "../store/theme";

const getBackgroundColor = (isDarkMode: boolean) => {
  return (context: any) => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;

    if (!chartArea) {
      return null;
    }

    const gradient = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    );

    if (isDarkMode) {
      gradient.addColorStop(0, "#00FFCC");
      gradient.addColorStop(1, "#FF0099");
    } else {
      gradient.addColorStop(0, "#015F8C");
      gradient.addColorStop(1, "#151C26");
    }

    return gradient;
  };
};

const BarChartNegative = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { data, containerRef } = useDynamicData(
    initialData,
    (prevData) => ({
      ...prevData,
      datasets: prevData.datasets.map((dataset: { data: any[] }) => ({
        ...dataset,
        data: dataset.data.map(() =>
          Math.floor(Math.random() * (-1750000000 + 1))
        ),
        backgroundColor: getBackgroundColor(isDarkMode),
      })),
    }),
    "BarChartNegative"
  );

  useEffect(() => {
    data.datasets = data.datasets.map((dataset: { data: any[] }) => ({
      ...dataset,
      backgroundColor: getBackgroundColor(isDarkMode),
    }));
  }, [isDarkMode]);

  return (
    <div ref={containerRef}>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarChartNegative;
