import "./DestinationCard.css";

function DestinationCard({ image, city, hotels }) {
    return (
        <div className="destination-card">

            <img src={image} alt={city} />

            <div className="destination-overlay">

                <h3>{city}</h3>

                <p>{hotels}+ Hotels</p>

            </div>

        </div>
    );
}

export default DestinationCard;