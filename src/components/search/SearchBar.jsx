import "./SearchBar.css";

function SearchBar() {
    return (
        <div className="search-box">

            <div className="search-field">
                <label>Destination</label>

                <input
                    type="text"
                    placeholder="Where are you going?"
                />
            </div>

            <div className="search-field">
                <label>Check In</label>

                <input type="date" />
            </div>

            <div className="search-field">
                <label>Check Out</label>

                <input type="date" />
            </div>

            <div className="search-field">
                <label>Guests</label>

                <input
                    type="number"
                    min="1"
                    defaultValue="2"
                />
            </div>

            <button className="search-btn">
                Search Hotels
            </button>

        </div>
    );
}

export default SearchBar;