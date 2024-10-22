import React, { useState } from "react";
import ChartLayout from "./ChartLayout";
import ButtonLayout from "./ButtonLayout";

const MainLayout = () => {
  const [selectedChart, setSelectedChart] = useState(1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        width: "600px",
        backgroundColor: "#EAEAEA",
        padding: "20px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <ButtonLayout setSelectedChart={setSelectedChart} />
      </div>
      
      <ChartLayout selectedChart={selectedChart} />
    </div>
  );
};

export default MainLayout;
