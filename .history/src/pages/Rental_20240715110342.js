
import ".././styles/Rental.css";
import banquethallpic from ".././assets/banquethall.jpg";
import BanquetHall from "../components/BanquetHall.js";
import { Link } from "react-router-dom";
import React, { useState } from "react";
function Rental() {
    const [active, setActive] = React.useState(1);
    const SetView = (active) => {
        setActive(active);
    };

    const ActiveView = () => {
        switch (active) {
            case 1:
                return <BanquetHall />;
            default:
                return <BanquetHall />;
        }
    };
    return (
        <div>
            <div class="container">
                <div class="rental-banner-container">
                    <div class="rental-banner">
                        <h1>Rental</h1>
                    </div>
                </div>
                <div class="rental-selector">
                    <button id="banquet-hall-button" onClick={() => SetView(1)} ><h3>Banquet Hall</h3></button>
                    <button id="boardroom-button" ><h3>Boardroom</h3></button>
                </div>

                <BanquetHall />
            </div>

        </div>
    );
}

export default Rental;