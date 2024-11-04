import { ChartOptions } from "chart.js";
import { formatNumberWithCommas } from "../utils/numberUtils";

export const data = {
  labels: ["2023 Q4", "2024 Q1", "2024 Q2", "2024 Q3", "2024 Q4"],
  datasets: [
    {
      label: "Available Capital",
      data: [5000000, 6000000, 7000000, 8000000, 9000000],
      backgroundColor: "rgba(184, 239, 239, 0.5)",
      // borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "Required Capital",
      data: [4500000, 5500000, 6500000, 7500000, 8500000],
      backgroundColor: "rgba(183, 152, 197, 0.5)",
      // borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

export const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "Capital Comparison Over Quarters",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 15000000,
      ticks: {
        stepSize: 5000000,
        callback: function (value) {
          const numValue = value as number;
          return `${formatNumberWithCommas(numValue / 1000000)}M`;
        },
        font: {
          size: 12,
        },
      },
    },
  },
};
