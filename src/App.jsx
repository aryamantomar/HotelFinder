import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;