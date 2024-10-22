import React, { ReactNode } from "react";
import { Chart as ChartJS, registerables } from "chart.js";

// 모든 기본 요소 등록
ChartJS.register(...registerables);

export const ChartProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default ChartProvider;
