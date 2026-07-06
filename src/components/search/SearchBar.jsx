import "./SearchBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {

    const navigate = useNavigate();

    const [destination, setDestination] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(2);

    function handleSearch() {

        const params = new URLSearchParams();

        if (destination)
            params.append("city", destination);

        if (checkIn)
            params.append("checkIn", checkIn);

        if (checkOut)
            params.append("checkOut", checkOut);

        params.append("guests", guests);

        navigate(`/hotels?${params.toString()}`);
    }

    return (
        <div className="search-box">

            <div className="search-field">

                <label>Destination</label>

                <input
                    type="text"
                    placeholder="Where are you going?"
                    value={destination}
                    onChange={(e) =>
                        setDestination(e.target.value)
                    }
                />

            </div>

            <div className="search-field">

                <label>Check In</label>

                <input
                    type="date"
                    value={checkIn}
                    onChange={(e) =>
                        setCheckIn(e.target.value)
                    }
                />

            </div>

            <div className="search-field">

                <label>Check Out</label>

                <input
                    type="date"
                    value={checkOut}
                    onChange={(e) =>
                        setCheckOut(e.target.value)
                    }
                />

            </div>

            <div className="search-field">

                <label>Guests</label>

                <input
                    type="number"
                    min="1"
                    value={guests}
                    onChange={(e) =>
                        setGuests(e.target.value)
                    }
                />

            </div>

            <button
                className="search-btn"
                onClick={handleSearch}
            >
                Search Hotels
            </button>

        </div>
    );
}

export default SearchBar;