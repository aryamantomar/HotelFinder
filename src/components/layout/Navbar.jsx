import "./Navbar.css";

import { Link } from "react-router-dom";

import {
    FaHotel,
    FaSearch,
    FaHeart,
    FaUserCircle
} from "react-icons/fa";

function Navbar() {

    return (

        <header className="navbar">

            <div className="navbar-container">

                <Link to="/" className="logo">

                    <FaHotel />

                    <span>HotelFinder</span>

                </Link>

                <nav>

                    <Link to="/">Home</Link>

                    <Link to="/hotels">Hotels</Link>

                    <Link to="/">Destinations</Link>

                    <Link to="/">About</Link>

                </nav>

                <div className="navbar-icons">

                    <FaSearch />

                    <FaHeart />

                    <FaUserCircle />

                </div>

            </div>

        </header>

    );

}

export default Navbar;