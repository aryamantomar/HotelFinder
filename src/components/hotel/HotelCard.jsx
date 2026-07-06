import "./HotelCard.css";
import { Link } from "react-router-dom";

import {
    FaStar,
    FaMapMarkerAlt,
    FaHeart,
    FaWifi,
    FaSwimmingPool,
    FaUtensils
} from "react-icons/fa";

function HotelCard({ hotel }) {
    return (
        <div className="hotel-card">

            <div className="image-container">

                <img
                    src={hotel.thumbnail}
                    alt={hotel.name}
                    onError={(e) => {
                        e.target.src =
                            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800";
                    }}
                />

                <button className="favorite-btn">
                    <FaHeart />
                </button>

                <span className="rating-badge">
                    <FaStar />
                    {hotel.rating}
                </span>

            </div>

            <div className="hotel-content">

                <h3>{hotel.name}</h3>

                <p className="location">
                    <FaMapMarkerAlt />
                    {hotel.location}
                </p>

                <div className="amenities">

                    <span>
                        <FaSwimmingPool />
                        Pool
                    </span>

                    <span>
                        <FaWifi />
                        WiFi
                    </span>

                    <span>
                        <FaUtensils />
                        Breakfast
                    </span>

                </div>

                <div className="bottom-row">

                    <div>

                        <span className="price">
                            ₹{Math.round(hotel.price)}
                        </span>

                        <small>/ night</small>

                    </div>

                    <Link
                        to={`/hotel/${hotel.id}`}
                        className="details-btn"
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default HotelCard;