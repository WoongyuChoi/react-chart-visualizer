import { ChartData, ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar } from "react-chartjs-2";
import { formatNumberWithCommas } from "../utils/numberUtils";

const data: ChartData<any> = {
  labels: ["202208", "202209", "202210", "202211", "202212"], // X축 값
  datasets: [
    // 아래쪽에 쌓일 데이터부터 작성
    {
      label: "비보험금융",
      data: [1400, 1600, 1800, 2000, 2200],
      backgroundColor: "rgba(251, 248, 173, 0.6)",
      yAxisID: "y",
      barThickness: 40,
    },
    {
      label: "운영",
      data: [2000, 2200, 2400, 2800, 3000],
      backgroundColor: "rgba(183, 152, 197, 0.6)",
      yAxisID: "y",
      barThickness: 40,
    },
    {
      label: "시장",
      data: [6000, 6200, 6400, 6800, 7000],
      backgroundColor: "rgba(184, 239, 239, 0.6)",
      yAxisID: "y",
      barThickness: 40,
    },
    {
      label: "신용",
      data: [22000, 20000, 22000, 18000, 15000],
      backgroundColor: "rgba(183, 236, 192, 0.6)",
      yAxisID: "y",
      barThickness: 40,
    },
    {
      label: "금리",
      data: [12000, 8000, 14000, 16000, 14000],
      backgroundColor: "rgba(251, 173, 176, 0.6)",
      yAxisID: "y",
      barThickness: 40,
    },
    {
      label: "보험",
      data: [4000, 7000, 2000, 2000, 7000],
      backgroundColor: "rgba(251, 209, 173, 0.6)",
      yAxisID: "y",
      barThickness: 40,
    },
    // 여기까지 위쪽에 쌓일 데이터
    {
      type: "line",
      label: "요구자본",
      data: [42885, 38325, 43429, 44083, 39375],
      fill: false,
      borderColor: "rgba(36, 71, 127, 1)",
      // tension: 0.8, // 곡선 효과
      borderWidth: 2, // 라인의 두께 설정
      yAxisID: "y",
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true, // 차트가 반응형으로 동작함
  plugins: {
    title: {
      display: true,
      text: "요구자본 추이",
    },
    legend: {
      display: true, // 범례 표시
      reverse: true, // 범례는 반대로 표시
    },
    datalabels: {
      display: function (context) {
        return context.dataset.type === "line"; // 라인 차트에만 라벨 표시
      },
      color: "black", // 라벨 색상
      anchor: "center",
      align: "center",
      formatter: (value) => formatNumberWithCommas(value),
      font: {
        size: 10,
        weight: "bold",
      },
    },
  },
  scales: {
    x: {
      stacked: true, // X축에서 누적을 허용
    },
    y: {
      min: 0,
      max: 50000,
      type: "linear",
      position: "left",
      stacked: true, // 누적을 허용
      ticks: {
        stepSize: 30000,
        callback: function (value) {
          const numValue = value as number;
          return formatNumberWithCommas(numValue) + "억";
        },
        font: {
          size: 10,
        },
      },
    },
  },
};

const MixedChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  return (
    <Bar
      ref={chartRef}
      data={data}
      options={options}
      plugins={[ChartDataLabels]}
    />
  );
};

export default MixedChart;
