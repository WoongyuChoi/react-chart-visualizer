import ChartDataLabels from "chartjs-plugin-datalabels";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { data as initialData, options } from "../data/WaterfallChartConstant";
import useDynamicData from "../hook/useDynamicData";
import useThemeStore from "../store/theme";

const getBackgroundColor = (
  isDarkMode: boolean,
  value: number[],
  isLast: boolean
) => {
  if (isLast) {
    return isDarkMode ? "#E1A3E9" : "#B798C5";
  }
  return value[1] >= value[0]
    ? isDarkMode
      ? "#00FFC3"
      : "#B8EFEF"
    : isDarkMode
    ? "#FF579A"
    : "#FBADB0";
};
const WaterfallChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { data: dynamicData, containerRef } = useDynamicData(
    initialData,
    (prevData) => {
      let cumulativeValue = 0;
      let totalValue = 0;

      const newData = prevData.datasets.map((dataset: { data: any[] }) => ({
        ...dataset,
        data: dataset.data.map((_, index) => {
          if (index === 0) {
            // 첫 번째 데이터는 [0, ?] 형식
            const change =
              Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000;
            const newValue = cumulativeValue + change;
            cumulativeValue = newValue;
            totalValue += change;
            return [0, newValue];
          } else if (index === dataset.data.length - 1) {
            // 마지막 데이터는 [0, 총합계] 형식
            return [0, totalValue];
          } else {
            const change =
              Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000;
            const isIncrease = Math.random() > 0.5;

            let newValue;
            if (isIncrease) {
              newValue = cumulativeValue + change;
            } else {
              newValue = cumulativeValue - change;
              if (newValue < 0) {
                newValue = 0; // 0 이하로 내려가지 않도록 제한
              }
            }

            // totalValue가 음수가 되지 않도록 조정
            if (newValue > cumulativeValue) {
              totalValue += change;
            } else {
              totalValue = Math.max(0, totalValue - change);
            }

            const result = [cumulativeValue, newValue];
            cumulativeValue = newValue;
            return result;
          }
        }),
        backgroundColor: dataset.data.map((value: number[], index: number) =>
          getBackgroundColor(
            isDarkMode,
            value,
            index === dataset.data.length - 1
          )
        ),
      }));

      return {
        ...prevData,
        datasets: newData,
      };
    },
    "WaterfallChart"
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
          backgroundColor: dataset.data.map((value: number[], index: number) =>
            getBackgroundColor(
              isDarkMode,
              value,
              index === dataset.data.length - 1
            )
          ),
        })
      ),
    }));
  }, [isDarkMode]);

  return (
    <div ref={containerRef}>
      <Bar
        ref={chartRef}
        data={data}
        options={options}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

export default WaterfallChart;
