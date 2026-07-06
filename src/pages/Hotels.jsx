import { useEffect, useState } from "react";
import HotelCard from "../components/hotel/HotelCard";
import { getHotels } from "../services/api";

function Hotels() {

    const [hotels, setHotels] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchHotels(){

            try{

                const data = await getHotels();

                setHotels(data);

            }catch(err){

                console.log(err);

            }finally{

                setLoading(false);

            }

        }

        fetchHotels();

    },[]);

    if(loading){

        return <h2 style={{textAlign:"center"}}>Loading...</h2>

    }

    return(

        <div className="featured-hotels">

            <h1>All Hotels</h1>

            <div className="hotel-grid">

                {hotels.map(hotel=>

                    <HotelCard

                        key={hotel.id}

                        hotel={hotel}

                    />

                )}

            </div>

        </div>

    )

}

export default Hotels;