import ChartLayout from "./ChartLayout";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        width: "600px",
        backgroundColor: "#EAEAEA",
        padding: "20px",
      }}
    >
      <ChartLayout />
    </div>
  );
};

export default MainLayout;
