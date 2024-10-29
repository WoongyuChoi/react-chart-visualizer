import React, { useState } from "react";
import Loading from "../common/Loading";
import { SelectedTitle } from "../data/SelectedConstant";
import ButtonLayout from "./ButtonLayout";
import ChartLayout from "./ChartLayout";

const MainLayout = () => {
  const [selectedChart, setSelectedChart] = useState<SelectedTitle | undefined>(
    SelectedTitle.BAR_CHART_1 || undefined
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        width: "700px",
        backgroundColor: "#EAEAEA",
        padding: "20px",
      }}
    >
      <ButtonLayout setSelectedChart={setSelectedChart} />

      <ChartLayout selectedChart={selectedChart} />

      <Loading />
    </div>
  );
};

export default MainLayout;
