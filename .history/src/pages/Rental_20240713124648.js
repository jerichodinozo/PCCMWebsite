import ".././styles/Rental.css";
import banquethallpic from ".././assets/banquethall.jpg"
import {Link} from "react-router-dom";
function Rental() {
    return (
        <div>
            <div class="container">
                <div class="rental-banner-container">
                    <div class="rental-banner">
                        <h1>Rental</h1>
                    </div>
                </div>
            </div>
            <div class="container"
            <div class="rental-section">

                <div class="rental-selector">
                    <span id="banquet-hall-button"><h3>Banquet Hall</h3></span>
                    <span id="boardroom-button"><h3>Boardroom</h3></span>
                </div>
                <div class="rental-details">
                    <div class="rental-image-container">
                        <img class="rental-image" src={banquethallpic} alt="Image of the banquet hall."></img>
                    </div>
                    <div class="rental-description">
                        <h2 class="rental-title">Banquet Hall</h2>
                        <p>
                            Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers
                            are made from 100% beef and are served on freshly baked buns.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <Link className="rental-agreement-btn">View Rental Agreement &#62;</Link>
                    </div>
                </div>
                <div class="rental-features-details">
                    <div class="rental-features-details-child">
                        <h3>Features</h3>
                        <ul>
                            <li>lorem</li>
                            <li>occaecat cupidatat non proident</li>
                            <li>dolor sit amet, consectetur adipiscing eli</li>
                            <li>mollit anim id est laborum</li>
                        </ul>
                    </div>
                    <div class="rental-features-details-child" id="rates-section">
                        <h3>Rates</h3>
                        <ul>
                            <li>Mon - Thur (6AM - 8PM): $50 per hour</li>
                            <li>Fri-Sun  (6AM - 6PM): $50 per hour</li>
                            <li>Fri - Sun (6PM - 1AM): $100 per hour</li>
                        </ul>
                    </div>
                    <div class="rental-features-details-child" id="additionals-section">
                        <h3>Additional</h3>
                        <ul>
                            <li>Refundable damage deposit: $300</li>
                            <li>Set-up/cleaning: $150 daytime or $200 evening</li>
                            <li>Bartenders (2): $136 for 4 hours</li>
                            <li>Security guards (2): $160 for 4 hours</li>
                            <li>Social events fee/GST</li>
                        </ul>
                    </div>
                </div><button class="button btn-shadow btn-shadow--blue" id="donate-button"> <span>Book</span> </button>

            </div>
        </div>
    );
}

export default Rental;