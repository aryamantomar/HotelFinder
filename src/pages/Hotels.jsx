import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HotelCard from "../components/hotel/HotelCard";
import { getHotels } from "../services/api";

function Hotels() {

    const [searchParams] = useSearchParams();

    const city = searchParams.get("city") || "";

    const [hotels, setHotels] = useState([]);
    const [filteredHotels, setFilteredHotels] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState(city);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {

        async function fetchHotels() {

            try {

                const data = await getHotels();

                setHotels(data);

            } catch (err) {

                console.log(err);

            } finally {

                setLoading(false);

            }

        }

        fetchHotels();

    }, []);

    useEffect(() => {

        let list = [...hotels];

        if (search !== "") {

            list = list.filter((hotel) =>
                hotel.location
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );

        }

        if (sortBy === "low") {

            list.sort((a, b) => a.price - b.price);

        }

        if (sortBy === "high") {

            list.sort((a, b) => b.price - a.price);

        }

        if (sortBy === "rating") {

            list.sort((a, b) => b.rating - a.rating);

        }

        setFilteredHotels(list);

    }, [hotels, search, sortBy]);

    if (loading) {

        return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h2>;

    }

    return (

        <div
            style={{
                maxWidth: "1400px",
                margin: "50px auto",
                padding: "20px",
            }}
        >

            <h1 style={{ textAlign: "center" }}>
                Explore Hotels
            </h1>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    margin: "30px 0",
                    flexWrap: "wrap",
                }}
            >

                <input

                    value={search}

                    onChange={(e) =>
                        setSearch(e.target.value)
                    }

                    placeholder="Search city..."

                    style={{
                        padding: "12px",
                        width: "280px",
                        borderRadius: "10px",
                    }}

                />

                <select

                    value={sortBy}

                    onChange={(e) =>
                        setSortBy(e.target.value)
                    }

                    style={{
                        padding: "12px",
                        borderRadius: "10px",
                    }}

                >

                    <option value="">Sort By</option>
                    <option value="low">Price Low → High</option>
                    <option value="high">Price High → Low</option>
                    <option value="rating">Highest Rating</option>

                </select>

            </div>

            <h3>
                Showing {filteredHotels.length} Hotels
            </h3>

            <div className="hotel-grid">

                {

                    filteredHotels.map((hotel) => (

                        <HotelCard

                            key={hotel.id}

                            hotel={hotel}

                        />

                    ))

                }

            </div>

        </div>

    );

}

export default Hotels;