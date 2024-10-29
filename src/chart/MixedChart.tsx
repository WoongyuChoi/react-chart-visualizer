import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar } from "react-chartjs-2";
import { data as initialData, options } from "../data/MixedChartConstant";
import useDynamicData from "../hook/useDynamicData";

const MixedChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  const { data, containerRef } = useDynamicData(
    initialData,
    (prevData) => {
      let totalData = Array(prevData.labels.length).fill(0); // 각 index 합계를 위한 배열 초기화

      return {
        ...prevData,
        datasets: prevData.datasets.map(
          (dataset: { type: string; data: any[] }, idx: any) => {
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
              };
            }
          }
        ),
      };
    },
    "MixedChart"
  );

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
