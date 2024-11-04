import React from "react";
import { useThemeStore } from "../store/theme";

const ThemeLayout = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          fontSize: "1.5rem",
          cursor: "pointer",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "20px",
          backgroundColor: isDarkMode ? "#A8A8A8" : "#f0f0f0",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        {isDarkMode ? "🌚" : "🌝"}
      </button>
    </div>
  );
};

export default ThemeLayout;
