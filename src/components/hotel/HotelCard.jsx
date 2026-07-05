import "./HotelCard.css";

import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

function HotelCard({ hotel }) {
    return (
        <div className="hotel-card">

            <img
                src={hotel.thumbnail}
                alt={hotel.name}
                onError={(e) => {
                    e.target.src =
                        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800";
                }}
            />

            <div className="hotel-content">

                <div className="hotel-top">

                    <span className="rating">
                        <FaStar /> {hotel.rating}
                    </span>

                    <span className="price">
                        ₹{hotel.price} / night
                    </span>

                </div>

                <h3>{hotel.name}</h3>

                <p className="location">
                    <FaMapMarkerAlt /> {hotel.location}
                </p>

                <button>
                    View Details
                </button>

            </div>

        </div>
    );
}

export default HotelCard;