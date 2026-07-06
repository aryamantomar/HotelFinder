import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import NotFound from "./pages/NotFound";
import Hotels from "./pages/Hotels";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="*" element={<NotFound />} />
            <Route

                path="/hotels"

                element={<Hotels/>}

            />
        </Routes>

      </BrowserRouter>
  );
}

export default App;