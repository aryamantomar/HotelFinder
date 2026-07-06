import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/hotels" element={<Hotels />} />

                <Route path="/hotel/:id" element={<HotelDetails />} />

                <Route path="/booking/:id" element={<Booking />} />

                <Route
                    path="/booking-success"
                    element={<BookingSuccess />}
                />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;