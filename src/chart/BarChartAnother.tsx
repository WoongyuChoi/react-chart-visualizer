import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales 2023",
      data: [3000, 4000, 5000, 6000, 7000, 8000],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
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
      text: "Monthly Sales",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return value + " units";
        },
      },
    },
  },
};

const BarChartAnother = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  return <Bar ref={chartRef} data={data} options={options} />;
};

export default BarChartAnother;
