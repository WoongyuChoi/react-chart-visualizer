import { ChartData, ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar } from "react-chartjs-2";
import { formatNumberWithCommas } from "../utils/numberUtils";

const data: ChartData<"bar"> = {
  labels: [
    "보험",
    "금리",
    "신용",
    "시장",
    "운영",
    "비금융",
    "차이",
    "요구자본",
  ],
  datasets: [
    {
      label: "Waterfall",
      data: [
        [0, 6489], // 첫 번째 단계
        [6489, 6489 + 11188], // 두 번째 단계
        [6489 + 11188, 6489 + 11188 + 24523], // 세 번째 단계
        [6489 + 11188 + 24523, 6489 + 11188 + 24523 + 4086], // 네 번째 단계
        [6489 + 11188 + 24523 + 4086, 6489 + 11188 + 24523 + 4086 + 1435], // 다섯 번째
        [
          6489 + 11188 + 24523 + 4086 + 1435,
          6489 + 11188 + 24523 + 4086 + 1435 + 1406,
        ], // 여섯 번째
        [
          6489 + 11188 + 24523 + 4086 + 1435 + 1406,
          6489 + 11188 + 24523 + 4086 + 1435 + 1406 - 9752,
        ], // 일곱 번째
        [6489 + 11188 + 24523 + 4086 + 1435 + 1406 - 9752 - 39375, 39375], // 마지막 단계
      ],
      backgroundColor: function (context: { dataset: any; dataIndex: number }) {
        const value = context.dataset.data[context.dataIndex];

        // 마지막 차트는 보라색, 나머지는 양수는 녹색, 음수는 빨간색
        if (context.dataIndex === context.dataset.data.length - 1) {
          return "#9c27b0"; // 보라색
        }

        return value[1] >= value[0] ? "#4caf50" : "#f44336"; // 양수는 녹색, 음수는 빨간색
      },
      borderColor: "#000000",
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  plugins: {
    legend: {
      display: false, // 범례 숨김
    },
    title: {
      display: true,
      text: "기준월 요구자본 세부",
    },
    datalabels: {
      color: "black", // 막대 안에서 읽기 쉽게 글자색을 흰색으로 설정
      anchor: "center", // 글자가 막대 안에서 중앙에 배치되도록 설정
      align: "center", // 가운데 정렬
      formatter: function (value: number[], context: any) {
        return (value[1] - value[0]).toLocaleString("ko-KR");
      },
    },
  },
  scales: {
    x: {
      stacked: true, // 누적 설정
      ticks: {
        maxRotation: 0, // X축 레이블을 기울이지 않음
        minRotation: 0, // X축 레이블 최소 회전 설정
        autoSkip: true, // 레이블이 겹칠 경우 자동으로 생략
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 25000,
        callback: function (value) {
          const numValue = value as number;
          return formatNumberWithCommas(numValue) + "억";
        },
      },
    },
  },
};

const WaterfallChart = ({ chartRef }: { chartRef: React.RefObject<any> }) => {
  return (
    <Bar
      ref={chartRef}
      data={data}
      options={options}
      plugins={[ChartDataLabels]}
    />
  );
};

export default WaterfallChart;
