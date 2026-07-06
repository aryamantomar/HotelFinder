import { Link } from "react-router-dom";
import HeroStats from "./HeroStats";

function HeroLeft() {
    return (
        <div className="hero-left">

            <span className="hero-badge">
                ⭐ Trusted by 2 Million+ Travelers
            </span>

            <h1>
                Discover Your <br />
                Perfect Stay
            </h1>

            <p>
                Explore luxury hotels, resorts and villas around
                the world with the best prices guaranteed.
            </p>

            <div
                style={{
                    marginTop: "40px",
                    display: "flex",
                    gap: "20px",
                }}
            >

                <Link
                    to="/hotels"
                    style={{
                        textDecoration: "none",
                        background: "#f59e0b",
                        color: "#fff",
                        padding: "18px 40px",
                        borderRadius: "50px",
                        fontWeight: "700",
                        fontSize: "18px",
                        transition: ".3s",
                    }}
                >
                    Explore Hotels
                </Link>

                <Link
                    to="/hotels"
                    style={{
                        textDecoration: "none",
                        border: "2px solid white",
                        color: "#fff",
                        padding: "18px 40px",
                        borderRadius: "50px",
                        fontWeight: "700",
                        fontSize: "18px",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    Book Now
                </Link>

            </div>

            <HeroStats />

        </div>
    );
}

export default HeroLeft;