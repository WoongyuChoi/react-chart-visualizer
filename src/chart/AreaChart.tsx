import { ChartData, ChartOptions } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

const data: ChartData<"line"> = {
  labels: [0, 125, 250, 375, 500, 625, 750, 875, 1000, 1125, 1250], // X축 값
  datasets: [
    {
      label: "Data",
      data: [
        0.078, 0.062, 0.066, 0.058, 0.064, 0.068, 0.072, 0.074, 0.076, 0.078,
        0.08,
      ], // Y축 데이터
      fill: true, // 영역을 채우기 위해 'fill' 설정
      backgroundColor: "rgba(7, 96, 140, 0.2)", // 영역 색상
      borderColor: "rgba(75, 192, 192, 1)", // 선 색상
      borderWidth: 2, // 선 두께
      tension: 0.4, // 곡선 효과 추가
    },
  ],
};

const options: ChartOptions<"line"> = {
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
      max: 1250, // X축 최대값 설정
      ticks: {
        stepSize: 250, // X축 간격 설정
        callback: function (value) {
          return value; // 고정된 X축 값 출력
        },
      },
    },
    y: {
      beginAtZero: true,
      min: 0,
      max: 0.08, // Y축 최대값 설정
      ticks: {
        stepSize: 0.02, // Y축 간격 설정
        callback: function (value) {
          const numValue = value as number;
          return numValue.toFixed(2); // Y축 값 소숫점 2자리로 표시
        },
      },
    },
  },
};

const AreaChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  return <Line ref={chartRef} data={data} options={options} />;
};

export default AreaChart;
