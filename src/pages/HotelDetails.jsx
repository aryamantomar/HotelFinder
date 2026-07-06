import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getHotels } from "../services/api";

function HotelDetails() {
    const { id } = useParams();

    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadHotel() {
            try {
                const hotels = await getHotels();

                const selectedHotel = hotels.find(
                    (hotel) => hotel.id === Number(id)
                );

                setHotel(selectedHotel);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadHotel();
    }, [id]);

    if (loading) {
        return (
            <div
                style={{
                    textAlign: "center",
                    padding: "80px",
                }}
            >
                <h2>Loading Hotel...</h2>
            </div>
        );
    }

    if (!hotel) {
        return (
            <div
                style={{
                    textAlign: "center",
                    padding: "80px",
                }}
            >
                <h2>Hotel Not Found</h2>

                <Link to="/">
                    Go Back Home
                </Link>
            </div>
        );
    }

    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "40px auto",
                padding: "20px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <img
                src={hotel.thumbnail}
                alt={hotel.name}
                style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "20px",
                }}
                onError={(e) => {
                    e.target.src =
                        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200";
                }}
            />

            <h1
                style={{
                    marginTop: "30px",
                }}
            >
                {hotel.name}
            </h1>

            <h3>📍 {hotel.location}</h3>

            <p
                style={{
                    fontSize: "20px",
                }}
            >
                ⭐ {hotel.rating}
            </p>

            <h2
                style={{
                    color: "#2563eb",
                }}
            >
                ₹{Math.round(hotel.price)} / night
            </h2>

            <p
                style={{
                    marginTop: "20px",
                    lineHeight: "1.8",
                }}
            >
                {hotel.description}
            </p>

            <h2
                style={{
                    marginTop: "40px",
                }}
            >
                Amenities
            </h2>

            <ul
                style={{
                    lineHeight: "2",
                    fontSize: "18px",
                }}
            >
                <li>🏊 Swimming Pool</li>
                <li>📶 Free WiFi</li>
                <li>🍽 Complimentary Breakfast</li>
                <li>🅿 Free Parking</li>
                <li>❄ Air Conditioning</li>
                <li>🛎 24×7 Room Service</li>
            </ul>

            <div
                style={{
                    marginTop: "40px",
                }}
            >
                <Link
                    to="/hotels"
                    style={{
                        textDecoration: "none",
                        padding: "14px 28px",
                        background: "#2563eb",
                        color: "#fff",
                        borderRadius: "10px",
                        marginRight: "15px",
                    }}
                >
                    ← Back to Hotels
                </Link>

                <button
                    style={{
                        padding: "14px 28px",
                        background: "#f59e0b",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                    }}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
}

export default HotelDetails;