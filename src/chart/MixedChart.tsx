import ChartDataLabels from "chartjs-plugin-datalabels";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { data as initialData, options } from "../data/MixedChartConstant";
import useDynamicData from "../hook/useDynamicData";
import useThemeStore from "../store/theme";

const getBackgroundColor = (isDarkMode: boolean, index: number) => {
  const darkModeColors = [
    "rgba(255, 255, 102, 0.8)",
    "rgba(204, 153, 255, 0.8)",
    "rgba(102, 255, 255, 0.8)",
    "rgba(0, 255, 153, 0.8)",
    "rgba(255, 51, 153, 0.8)",
    "rgba(255, 153, 102, 0.8)",
  ];

  const lightModeColors = [
    "rgba(251, 248, 173, 0.6)",
    "rgba(183, 152, 197, 0.6)",
    "rgba(184, 239, 239, 0.6)",
    "rgba(183, 236, 192, 0.6)",
    "rgba(251, 173, 176, 0.6)",
    "rgba(251, 209, 173, 0.6)",
  ];

  return isDarkMode ? darkModeColors[index] : lightModeColors[index];
};

const MixedChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { data, containerRef } = useDynamicData(
    initialData,
    (prevData) => {
      let totalData = Array(prevData.labels.length).fill(0); // 각 index 합계를 위한 배열 초기화

      return {
        ...prevData,
        datasets: prevData.datasets.map(
          (dataset: { type: string; data: any[] }, index: any) => {
            if (dataset.type === "line") {
              return {
                ...dataset,
                data: totalData, // 각 데이터셋의 합계를 설정
              };
            } else {
              const newData = dataset.data.map((_, index) => {
                // 남은 여유 범위 내에서 랜덤 값 생성
                const remaining = 50000 - totalData[index];
                const value =
                  remaining > 0
                    ? Math.min(
                        Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
                        remaining
                      )
                    : 0;

                totalData[index] += value; // 누적 합계 업데이트
                return value;
              });

              return {
                ...dataset,
                data: newData,
                backgroundColor: getBackgroundColor(isDarkMode, index),
              };
            }
          }
        ),
      };
    },
    "MixedChart"
  );

  useEffect(() => {
    data.datasets = data.datasets.map((dataset: any, index: number) => ({
      ...dataset,
      backgroundColor: getBackgroundColor(isDarkMode, index),
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

export default MixedChart;
