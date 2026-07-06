import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HotelCard from "../hotel/HotelCard";
import { getHotels } from "../../services/api";
import "./FeaturedHotels.css";

function FeaturedHotels() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        async function loadHotels() {
            try {
                const data = await getHotels();
                setHotels(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadHotels();
    }, []);

    const sortedHotels = [...hotels];

    if (sortBy === "low") {
        sortedHotels.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high") {
        sortedHotels.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
        sortedHotels.sort((a, b) => b.rating - a.rating);
    }

    if (loading) {
        return (
            <section className="featured-hotels">
                <h2>Loading Hotels...</h2>
            </section>
        );
    }

    return (
        <section className="featured-hotels">

            <div className="section-title">

                <div>
                    <h2>Featured Hotels</h2>
                    <p>Hand-picked luxury stays selected for every traveler.</p>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="low">Price: Low → High</option>
                        <option value="high">Price: High → Low</option>
                        <option value="rating">Highest Rating</option>
                    </select>

                    <Link to="/hotels" className="view-all-btn">
                        View All →
                    </Link>

                </div>

            </div>

            <div className="hotel-grid">
                {sortedHotels.slice(0, 6).map((hotel) => (
                    <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                    />
                ))}
            </div>

        </section>
    );
}

export default FeaturedHotels;