import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from ".";
import "./App.css";
import ChartProvider from "./provider/ChartProvider";

function App() {
  return (
    <ChartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChartProvider>
  );
}

export default App;
