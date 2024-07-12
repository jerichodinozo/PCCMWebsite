import ".././styles/Rental.css";
import banquethallpic from ".././assets/banquethall.jpg"
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
            <div class="container rental-section wrapper">
                <div class="rental-selector">
                    <h3>Banquet Hall</h3>
                    <h3>Boardroom</h3>
                </div>
                <div class="rental-details">
                    <div class="rental-image-container">
                        <img class="rental-image" src={banquethallpic} alt="Image of the banquet hall."></img>
                    </div>
                    <div class="rental-description">
                        <h2>Banquet Hall</h2>
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
                            view rental agreement
                        </p>
                    </div>
                </div>
                <div class="rental-features-details">
                    <div class="rental-features">
                        <ul class="features-list">
                            <li>lorem</li>
                            <li>occaecat cupidatat non proident</li>
                            <li>dolor sit amet, consectetur adipiscing eli</li>
                            <li>mollit anim id est laborum</li>
                        </ul>
                    </div>
                    <div class="rental-rates">
                        <ul class="rates-list">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div class="rental-extras">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rental;