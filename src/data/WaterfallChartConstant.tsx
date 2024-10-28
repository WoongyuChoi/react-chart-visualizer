import { ChartData, ChartOptions } from "chart.js";
import { formatNumberWithCommas } from "../utils/numberUtils";

export const data: ChartData<"bar"> = {
  labels: [
    "Insurance",
    "Interest Rate",
    "Credit",
    "Market",
    "Operations",
    "Non-Financial",
    "Difference",
    "Required Capital",
  ],
  datasets: [
    {
      label: "Waterfall",
      data: [
        [0, 6489],
        [6489, 6489 + 11188],
        [6489 + 11188, 6489 + 11188 + 24523],
        [6489 + 11188 + 24523, 6489 + 11188 + 24523 + 4086],
        [6489 + 11188 + 24523 + 4086, 6489 + 11188 + 24523 + 4086 + 1435],
        [
          6489 + 11188 + 24523 + 4086 + 1435,
          6489 + 11188 + 24523 + 4086 + 1435 + 1406,
        ],
        [
          6489 + 11188 + 24523 + 4086 + 1435 + 1406,
          6489 + 11188 + 24523 + 4086 + 1435 + 1406 - 9752,
        ],
        [6489 + 11188 + 24523 + 4086 + 1435 + 1406 - 9752 - 39375, 39375],
      ],
      backgroundColor: function (context: { dataset: any; dataIndex: number }) {
        const value = context.dataset.data[context.dataIndex];
        if (context.dataIndex === context.dataset.data.length - 1) {
          return "#B798C5"; // 마지막 항목은 보라색
        }
        return value[1] >= value[0] ? "#B8EFEF" : "#FBADB0"; // 양수는 파란색, 음수는 빨간색
      },

      // borderColor: "#000000",
      // borderWidth: 1,
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
      text: "Detailed Required Capital by Base Month",
    },
    datalabels: {
      color: "black", // 막대 안에서 읽기 쉽게 글자색을 흰색으로 설정
      anchor: "center", // 글자가 막대 안에서 중앙에 배치되도록 설정
      align: "center", // 가운데 정렬
      formatter: function (value: number[], context: any) {
        return (value[1] - value[0]).toLocaleString("en-US");
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
        font: {
          size: 6,
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 25000,
        callback: function (value) {
          const numValue = value as number;
          return `${formatNumberWithCommas(numValue)}M`;
        },
      },
    },
  },
};
