import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Applayout from "./Pages/Applayout";
import List from "./components/List";
import FormLayout from "./Pages/FormLayout";
import { StockProvider } from "./contexts/StockContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route
          path="app"
          element={
            <StockProvider>
              <Applayout />
            </StockProvider>
          }
        >
          <Route index element={<Navigate replace to={"technicians"} />} />
          <Route path="/app/:technicians" element={<List />} />
        </Route>
        <Route path="form" element={<FormLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
