import { useEffect, useState } from "react";
import HotelCard from "../hotel/HotelCard";
import { getHotels } from "../../services/api";

function FeaturedHotels() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadHotels() {
            try {
                const data = await getHotels();

                console.log(data);
                console.log(data[0]);

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
            <section style={{ padding: "80px", textAlign: "center" }}>
                <h2>Loading Hotels...</h2>
            </section>
        );
    }

    return (
        <section style={{ padding: "80px" }}>
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "40px",
                }}
            >
                Featured Hotels
            </h2>


            <div className="hotel-grid">
                {hotels.map((hotel) => (
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