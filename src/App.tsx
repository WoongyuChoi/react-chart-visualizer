import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from ".";
import "./App.css";
import ChartProvider from "./provider/ChartProvider";
import UsePlayingProvider from "./provider/UsePlayingProvider";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <UsePlayingProvider>
        <ChartProvider>
          <BrowserRouter>
            <SpeedInsights />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ChartProvider>
      </UsePlayingProvider>
    </QueryClientProvider>
  );
}

export default App;
