import { useEffect, useState } from "react";
import HotelCard from "../hotel/HotelCard";
import { getHotels } from "../../services/api";
import "./FeaturedHotels.css";

function FeaturedHotels() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadHotels() {
            try {
                const data = await getHotels();
                setHotels(data);
            } catch (error) {
                console.error("Error fetching hotels:", error);
            } finally {
                setLoading(false);
            }
        }

        loadHotels();
    }, []);

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

                    <p>
                        Hand-picked luxury stays selected for every traveler.
                    </p>
                </div>

                <button className="view-all-btn">
                    View All →
                </button>

            </div>

            <div className="hotel-grid">
                {hotels.slice(0, 6).map((hotel) => (
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