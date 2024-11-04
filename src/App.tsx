import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from ".";
import "./App.css";
import ChartProvider from "./provider/ChartProvider";
import UsePlayingProvider from "./provider/UsePlayingProvider";
import useThemeStore from "./store/theme";
import { darkTheme, lightTheme } from "./store/theme";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <QueryClientProvider client={queryClient}>
        {/* <UsePlayingProvider> */}
        <ChartProvider>
          <BrowserRouter>
            <SpeedInsights />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ChartProvider>
        {/* </UsePlayingProvider> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
