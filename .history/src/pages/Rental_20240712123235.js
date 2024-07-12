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
            <div class="container rental-section">
                <div class="rental-selector">
                    <h3>Banquet Hall</h3>
                    <h3>Boardroom</h3>
                </div>
                <div class="rental-details">
                    <div class="img-container rental-image">
                        <img class="rent-image" src={banquethallpic} alt="Image of the banquet hall."></img>
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
            </div>
        </div>
    );
}

export default Rental;