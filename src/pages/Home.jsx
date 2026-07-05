import { useEffect } from "react";
import { getHotels } from "../services/api";

import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import FeaturedHotels from "../components/home/FeaturedHotels";
import PopularDestinations from "../components/home/PopularDestinations";
import WhyChooseUs from "../components/home/WhyChooseUs";

function Home() {

    useEffect(() => {

        async function loadHotels() {

            try {

                const hotels = await getHotels();

                console.log(hotels);

            } catch (error) {

                console.error(error);

            }

        }

        loadHotels();

    }, []);

    return (
        <Layout>
            <Hero />
            <FeaturedHotels />
            <PopularDestinations />
            <WhyChooseUs />
        </Layout>
    );
}

export default Home;