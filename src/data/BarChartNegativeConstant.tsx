import { ChartOptions } from "chart.js";

export const data = {
  labels: ["USD"],
  datasets: [
    {
      data: [-1750000000.0], // 데이터 값 설정
      backgroundColor: function (context: any) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return null;
        }

        // 그라데이션 설정
        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );
        gradient.addColorStop(0, "#015F8C"); // 그라데이션 시작 색상
        gradient.addColorStop(1, "#151C26"); // 그라데이션 끝 색상

        return gradient;
      },
      borderColor: "#FFB3BA",
      borderWidth: 2,
      barThickness: 60, // 막대 두께 설정
      // maxBarThickness: 30, // 막대의 최대 두께
    },
  ],
};

export const options: ChartOptions<"bar"> = {
  plugins: {
    legend: {
      display: false, // 범례 숨김
    },
    title: {
      display: true,
      text: "Assets Base Run",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      min: -1750000000,
      max: 0,
      ticks: {
        stepSize: 250000000,
        callback: function (value) {
          return value.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
        },
      },
    },
  },
};
