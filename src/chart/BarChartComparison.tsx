import { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { formatNumberWithCommas } from "../utils/numberUtils";

const data = {
  labels: ["202208", "202209", "202210", "202211", "202212"],
  datasets: [
    {
      label: "가용자본",
      data: [
        5000000000000, 8200000000000, 5400000000000, 9600000000000,
        5800000000000,
      ],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "요구자본",
      data: [
        4000000000000, 5500000000000, 4100000000000, 6700000000000,
        14600000000000,
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "RBC비율 추이",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 15000000000000,
      ticks: {
        stepSize: 5000000000000,
        callback: function (value) {
          const numValue = value as number;
          return formatNumberWithCommas(numValue / 100000000) + "억";
        },
        font: {
          size: 12,
        },
      },
    },
  },
};

const BarChartComparison = ({
  chartRef,
}: {
  chartRef: React.RefObject<any>;
}) => {
  return <Bar ref={chartRef} data={data} options={options} />;
};

export default BarChartComparison;
