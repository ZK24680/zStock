import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Applayout from "./Pages/Applayout";
import List from "./components/List";
import { StockProvider } from "./contexts/StockContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index replace element={<Homepage />} />
        <Route
          path="app"
          element={
            <StockProvider>
              <Applayout />
            </StockProvider>
          }
        >
          <Route index element={<Navigate to={"technicians"} />} />
          <Route path="/app/:technicians" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
