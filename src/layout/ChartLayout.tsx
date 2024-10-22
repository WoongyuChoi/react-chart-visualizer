import { Chart, ChartOptions } from "chart.js";
import { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2, // 경계선의 두께를 더 두껍게 설정
    },
  ],
};

const options: ChartOptions<"bar"> = {
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 14, // 레이블의 폰트 크기 설정
          weight: "bold", // 레이블의 폰트를 굵게
        },
      },
    },
    title: {
      display: true,
      text: "Vote Results",
      font: {
        size: 18, // 차트 제목 크기
        weight: "bold", // 차트 제목을 굵게
      },
      padding: {
        top: 10,
        bottom: 30,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 12,
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 12,
        },
      },
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: "easeInOutQuad",
      from: 0.3,
      to: 0.1,
      loop: true,
    },
  },
};

const ChartLayout = () => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartLayout;
