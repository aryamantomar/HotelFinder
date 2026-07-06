import SearchBar from "../search/SearchBar";
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

            <SearchBar />

            <HeroStats />

        </div>
    );
}

export default HeroLeft;