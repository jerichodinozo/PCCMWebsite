import pccm_picture from ".././assets/pccm-picture.png";
import ".././styles/AboutPreview.css";
import {Link} from "react-router-dom";
function AboutPreview() {
    return(
       
        
            <div class="about-preview wrapper section">
                <div class="img-container">
                    <img src={pccm_picture} class="pccm-pic"></img>
                </div>
                <div class="text-side">
                    <h2 class="main-text">
                    Philippine Canadian Centre of Manitoba
                    </h2>
                    <p class="body-text">
                    PCCM is the centre used for workshops, programs & services, arts, music, athletics, cultural activities, classroom for heritage language classes, banquets.
                    </p>
                    <Link to="/aboutus" class="button-1 button-shadow">
                        Learn More
                    </Link>
                </div>
            </div>
        
        
        
    );
}

export default AboutPreview;