import ".././styles/Rental.css";
import banquethallpic from ".././assets/banquethall.jpg";
import { Link } from "react-router-dom";

function BanquetHall() {
    return (
        <div class="container">
            <div class="rental-section">
                


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
                            <li><p>lorem</p></li>
                            <li><p>occaecat cupidatat non proident</p></li>
                            <li><p>dolor sit amet, consectetur adipiscing eli</p></li>
                            <li><p>mollit anim id est laborum</p></li>
                        </ul>
                    </div>
                    <div class="rental-features-details-child" id="rates-section">
                        <h3>Rates</h3>
                        <ul>
                            <li><p>Mon - Thur (6AM - 8PM): $50 per hour</p></li>
                            <li><p>Fri-Sun  (6AM - 6PM): $50 per hour</p></li>
                            <li><p>Fri - Sun (6PM - 1AM): $100 per hour</p></li>
                        </ul>
                    </div>
                    <div class="rental-features-details-child" id="additionals-section">
                        <h3>Additional</h3>
                        <ul>
                            <li><p>Refundable damage deposit: $300</p></li>
                            <li><p>Set-up/cleaning: $150 daytime or $200 evening</p></li>
                            <li><p>Bartenders (2): $136 for 4 hours</p></li>
                            <li><p>Security guards (2): $160 for 4 hours</p></li>
                            <li><p>Social events fee/GST</p></li>
                        </ul>
                    </div>
                </div><button class="button-1" id="book-button">Book</h3></button>


            </div>
        </div>
    );
}

export default BanquetHall;