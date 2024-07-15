
import ".././styles/Rental.css";
import banquethallpic from ".././assets/banquethall.jpg";
import BanquetHall from "../components/BanquetHall.js";
import { Link } from "react-router-dom";
import {useState} from "react-dom";
function Rental() {
    const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <View1 />;
      case 2:
        return <View2 />;
      default:
        return <View3 />;
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
                <BanquetHall />
            </div>
            
        </div>
    );
}

export default Rental;