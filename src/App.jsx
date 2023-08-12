import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Applayout from "./Pages/Applayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="app" element={<Applayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
