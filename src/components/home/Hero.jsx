import "./Hero.css";

import SearchBar from "../search/SearchBar";
import HeroStats from "./HeroStats";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-content">

                <h1>
                    Discover Your Perfect Stay
                </h1>

                <p>
                    Explore luxury hotels, resorts and apartments around the world.
                </p>

                <SearchBar />

                <HeroStats />

            </div>

        </section>

    );

}

export default Hero;