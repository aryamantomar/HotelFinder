import "./PopularDestinations.css";

import DestinationCard from "./DestinationCard";

function PopularDestinations() {

    const destinations = [

        {
            city:"Goa",
            image:"/images/goa.jpg",
            hotels:325
        },

        {
            city:"Dubai",
            image:"/images/dubai.jpg",
            hotels:521
        },

        {
            city:"Bali",
            image:"/images/bali.jpg",
            hotels:412
        },

        {
            city:"Mumbai",
            image:"/images/mumbai.jpg",
            hotels:288
        },

        {
            city:"Jaipur",
            image:"/images/jaipur.jpg",
            hotels:184
        },

        {
            city:"Kerala",
            image:"/images/kerala.jpg",
            hotels:236
        }

    ];

    return (

        <section className="destinations">

            <div className="section-header">

                <div>

                    <h2>Popular Destinations</h2>

                    <p>
                        Explore the world's most loved travel destinations.
                    </p>

                </div>

                <button>View All →</button>

            </div>

            <div className="destination-grid">

                {destinations.map((item) => (

                    <DestinationCard

                        key={item.city}

                        {...item}

                    />

                ))}

            </div>

        </section>

    );

}

export default PopularDestinations;