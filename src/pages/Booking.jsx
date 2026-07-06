import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHotels } from "../services/api";

function Booking() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [hotel, setHotel] = useState(null);

    const [booking, setBooking] = useState({
        name: "",
        email: "",
        phone: "",
        guests: 2,
        roomType: "Deluxe Room",
        checkIn: "",
        checkOut: "",
        specialRequest: ""
    });

    useEffect(() => {

        async function loadHotel() {

            const hotels = await getHotels();

            const selected = hotels.find(
                h => h.id === Number(id)
            );

            setHotel(selected);

        }

        loadHotel();

    }, [id]);

    function handleChange(e) {

        setBooking({

            ...booking,

            [e.target.name]: e.target.value

        });

    }

    function calculateNights() {

        if (!booking.checkIn || !booking.checkOut)
            return 0;

        const start = new Date(booking.checkIn);

        const end = new Date(booking.checkOut);

        const diff = end - start;

        return diff > 0
            ? diff / (1000 * 60 * 60 * 24)
            : 0;

    }

    const nights = calculateNights();

    const totalPrice = hotel
        ? nights * Math.round(hotel.price)
        : 0;

    function confirmBooking(e) {

        e.preventDefault();

        if (
            !booking.name ||
            !booking.email ||
            !booking.phone ||
            !booking.checkIn ||
            !booking.checkOut
        ) {

            alert("Please fill all required fields.");

            return;

        }

        navigate("/booking-success", {

            state: {

                ...booking,

                hotelName: hotel.name,

                hotelLocation: hotel.location,

                hotelPrice: Math.round(hotel.price),

                hotelRating: hotel.rating,

                hotelImage: hotel.thumbnail,

                totalPrice,

                nights

            }

        });

    }

    if (!hotel) {

        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

    }

    return (

        <div
            style={{
                maxWidth: "1000px",
                margin: "40px auto",
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,.15)"
            }}
        >

            <div
                style={{
                    background: "#2563eb",
                    color: "#fff",
                    padding: "30px"
                }}
            >

                <h1>🏨 Book Your Stay</h1>

                <p>
                    Complete your booking details below.
                </p>

            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px",
                    padding: "35px"
                }}
            >

                <div>

                    <img

                        src={hotel.thumbnail}

                        alt={hotel.name}

                        style={{
                            width: "100%",
                            borderRadius: "15px",
                            height: "260px",
                            objectFit: "cover"
                        }}

                    />

                    <h2>{hotel.name}</h2>

                    <p>📍 {hotel.location}</p>

                    <p>⭐ {hotel.rating}</p>

                    <h3 style={{ color: "#2563eb" }}>
                        ₹{Math.round(hotel.price)} / night
                    </h3>

                    <hr />

                    <h3>Booking Summary</h3>

                    <p>Guests : {booking.guests}</p>

                    <p>Room : {booking.roomType}</p>

                    <p>Check In : {booking.checkIn || "-"}</p>

                    <p>Check Out : {booking.checkOut || "-"}</p>

                    <p>Nights : {nights}</p>

                    <h2
                        style={{
                            color: "#16a34a"
                        }}
                    >
                        Total ₹{totalPrice}
                    </h2>

                </div>

                <form onSubmit={confirmBooking}>

                    <input
                        name="name"
                        placeholder="Full Name"
                        value={booking.name}
                        onChange={handleChange}
                        style={input}
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={booking.email}
                        onChange={handleChange}
                        style={input}
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        value={booking.phone}
                        onChange={handleChange}
                        style={input}
                    />

                    <label>Check In</label>

                    <input
                        type="date"
                        name="checkIn"
                        value={booking.checkIn}
                        onChange={handleChange}
                        style={input}
                    />

                    <label>Check Out</label>

                    <input
                        type="date"
                        name="checkOut"
                        value={booking.checkOut}
                        onChange={handleChange}
                        style={input}
                    />

                    <label>Guests</label>

                    <input
                        type="number"
                        min="1"
                        name="guests"
                        value={booking.guests}
                        onChange={handleChange}
                        style={input}
                    />

                    <label>Room Type</label>

                    <select
                        name="roomType"
                        value={booking.roomType}
                        onChange={handleChange}
                        style={input}
                    >

                        <option>Standard Room</option>

                        <option>Deluxe Room</option>

                        <option>Executive Suite</option>

                        <option>Presidential Suite</option>

                    </select>

                    <textarea
                        name="specialRequest"
                        placeholder="Special Requests"
                        value={booking.specialRequest}
                        onChange={handleChange}
                        style={{
                            ...input,
                            height: "100px"
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "16px",
                            border: "none",
                            background: "#2563eb",
                            color: "#fff",
                            borderRadius: "10px",
                            fontSize: "17px",
                            cursor: "pointer"
                        }}
                    >
                        Confirm Booking
                    </button>

                </form>

            </div>

        </div>

    );

}

const input = {

    width: "100%",

    padding: "14px",

    marginBottom: "18px",

    borderRadius: "10px",

    border: "1px solid #ddd",

    fontSize: "15px",

    boxSizing: "border-box"

};

export default Booking;