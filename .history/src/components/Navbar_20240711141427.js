import ".././styles/Navbar.css";
import { Link } from "react-router-dom";
import pccmlogo from ".././assets/pccm_logo.png";
import { slide as Menu } from 'react-burger-menu';
function Navbar() {

    return (
        <div class="navbar">
            <header class="wrapper header">
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
                        <li>
                        <div>
                        <div class="button button-shadow">Donate</div>
                    </div>
                        </li>

                    </ul>

                </nav>
                <div id="nav-buttons">
                    
                    <div id="outer-container">
                        <Menu width={"50%"} right>
                            <Link to="/" className="menu-item" href="/"><h3>Home</h3></Link>
                            <Link to="/aboutus" className="menu-item" href="/about"><h3>About</h3></Link>
                            <Link to="/news" className="menu-item" href="/contact"><h3>News</h3></Link>
                            <Link to="/events" className="menu-item" href="/contact"><h3>Events</h3></Link>
                            <Link to="/rental" className="menu-item" href="/contact"><h3>Rental</h3></Link>
                            <Link to="/gallery" className="menu-item" href="/contact"><h3>Gallery</h3></Link>
                            <Link to="/memberships" className="menu-item" href="/contact"><h3>Memberships</h3></Link>
                            <Link to="/advertise" className="menu-item" href="/contact"><h3>Advertise</h3></Link>
                            <Link to="/contact" className="menu-item" href="/contact"><h3>Contact</h3></Link>
                        </Menu>
                    </div>
                </div>
            </header>
        </div>

    );
}

export default Navbar;