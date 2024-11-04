import React, { useState } from "react";
import Loading from "../common/Loading";
import { SelectedTitle } from "../data/SelectedConstant";
import { MainLayoutContainer } from "../style/MainLayoutStyles";
import ButtonLayout from "./ButtonLayout";
import ChartLayout from "./ChartLayout";
import ThemeLayout from "./ThemeLayout";

const MainLayout = () => {
  const [selectedChart, setSelectedChart] = useState<SelectedTitle | undefined>(
    SelectedTitle.BAR_CHART_1 || undefined
  );

  return (
    <MainLayoutContainer>
      <ThemeLayout />
      <ButtonLayout setSelectedChart={setSelectedChart} />
      <ChartLayout selectedChart={selectedChart} />
      <Loading />
    </MainLayoutContainer>
  );
};

export default MainLayout;
