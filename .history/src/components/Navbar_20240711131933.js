import ".././styles/Navbar.css";
import { Link } from "react-router-dom";
import pccmlogo from ".././assets/pccm_logo.png";
import { slide as Menu } from 'react-burger-menu';
function Navbar() {

    return (
        <div class="navbar">
            <header class="wrapper header">
            <Menu right className="hamburger-button">
                        <Link to="/" className="menu-item" href="/">Home</Link>
                        <Link to="/aboutus" className="menu-item" href="/about">About</Link>
                        <Link to="/news" className="menu-item" href="/contact">Contact</Link>

                    </Menu>
                <a href="/">
                    <img src={pccmlogo} class="sml-logo" alt="pccm-logo"></img>
                </a>
                <nav >
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">About</Link>
                        </li>
                        <li>
                            <Link to="/news">News</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/rental">Rental</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/memberships">Memberships</Link>
                        </li>
                        <li>
                            <Link to="/advertise">Advertise</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>

                </nav>
                
                    <div class="button button-shadow">Donate</div>
                
            </header>
        </div>

    );
}

export default Navbar;