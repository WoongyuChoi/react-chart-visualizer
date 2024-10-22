import { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["KRW"],
  datasets: [
    {
      data: [-1750000000000.0],
      backgroundColor: function (context: any) {
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
        gradient.addColorStop(0, "#1E257E"); // 그라데이션 시작 색상
        gradient.addColorStop(1, "#9EA4FD"); // 그라데이션 끝 색상

        return gradient;
      },
      borderColor: "#FFB3BA",
      borderWidth: 2,
      barThickness: 30, // 막대의 두께 조정
      maxBarThickness: 30, // 막대의 최대 두께
    },
  ],
};

const options: ChartOptions<"bar"> = {
  plugins: {
    legend: {
      display: false, // 범례를 숨김
    },
    title: {
      display: true,
      text: "Assets Base Run",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      min: -1750000000000,
      max: 0,
      ticks: {
        stepSize: 250000000000,
        callback: function (value) {
          return value.toLocaleString("ko-KR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
        },
      },
    },
  },
};

const BarChartNegative = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  return <Bar ref={chartRef} data={data} options={options} />;
};

export default BarChartNegative;
