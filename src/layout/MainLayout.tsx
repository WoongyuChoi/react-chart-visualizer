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
      <div
        style={{
          width: "80%",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "30px",
        }}
      >
        <ChartLayout />
      </div>
    </div>
  );
};

export default MainLayout;
