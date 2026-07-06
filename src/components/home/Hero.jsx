import "./Hero.css";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-container">

                <HeroLeft />

                <HeroRight />

            </div>

        </section>

    );

}

export default Hero;