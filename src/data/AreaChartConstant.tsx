import { ChartData, ChartOptions } from "chart.js";

export const data: ChartData<"line"> = {
  labels: [0, 125, 250, 375, 500, 625, 750, 875, 1000, 1125, 1250], // X축 값
  datasets: [
    {
      label: "Data",
      data: [
        0.078, 0.062, 0.066, 0.058, 0.064, 0.068, 0.072, 0.074, 0.076, 0.078,
        0.08,
      ], // Y축 데이터
      fill: true,
      backgroundColor: "rgba(7, 96, 140, 0.2)", // 영역 색상
      borderColor: "rgba(75, 192, 192, 1)", // 선 색상
      borderWidth: 2,
      tension: 0.4, // 곡선 효과 추가
    },
  ],
};

export const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // 범례 숨김
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      type: "linear", // X축을 선형으로 설정하여 데이터를 자동으로 매핑
      beginAtZero: true,
      min: 0,
      max: 1250,
      ticks: {
        stepSize: 250,
        callback: function (value) {
          return value; // X축 값 그대로 출력
        },
      },
    },
    y: {
      beginAtZero: true,
      min: 0,
      max: 0.08,
      ticks: {
        stepSize: 0.02,
        callback: function (value) {
          const numValue = value as number;
          return numValue.toFixed(2); // 소숫점 2자리로 출력
        },
      },
    },
  },
};
