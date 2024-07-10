import ".././styles/Footer.css";
import pccmlogo from ".././assets/pccm_logo.png";
import instagramlogo from ".././assets/instagram-logo.png";
import facebooklogo from ".././assets/facebook-logo.png";
import {Link} from "reac"
function Footer() {
    return (
        <>
            <div class="footer-wrapper">
                <div class="footer">
                    <div class="footer-labels">
                        <div class="left-side">
                            <a href="/"><img class="footer-logo" src={pccmlogo} alt=""></img></a>
                            <div class="text-under-logo">
                                Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed diam nonu
                            </div>
                        </div>
                        <div class="right-side">
                            <ul class="footer-section">
                                <li class="footer-title">About</li>
                                <li><a href="/aboutus">Board Members</a></li>
                                <li><a href="/aboutus">Conditions & By-Laws</a></li>
                            </ul>
                            <ul class="footer-section">
                                <li class="footer-title">Community</li>
                                <li><a href="/events">Events</a></li>
                                <li><a href="/news">News</a></li>
                                <li><a href="/gallery">Gallery</a></li>
                                <li><a href="/memberships">Memberships</a></li>
                            </ul>
                            <ul class="footer-section">
                                <li class="footer-title">Contact</li>
                                <li>contact@thepccm.ca</li>
                                <li>&#40;204&#41; 775-4928</li>
                                <span class="footer-contacts">
                                    <li><a href="https://www.facebook.com/groups/3555107267913403/"><img src={facebooklogo} class="ig-logo"></img></a></li>
                                    <li><a href="https://www.facebook.com/groups/3555107267913403/"><img src={instagramlogo} class="ig-logo"></img></a></li>
                                </span>
                            </ul>
                        </div>
                    </div>
                    

                </div>
            </div>

            <div class="footer-copyright-wrapper">
                        <div class="footer-copyright copyright-section">
                            <div class="copyright">
                                ©2024 Philippine Canadian Centre of Manitoba. All rights reserved
                            </div>
                            <div class="privacy-terms">
                                <div class="privacy-policy">
                                    Privacy & Policy
                                </div>
                                <div class="terms-conditions">
                                    Terms & Conditions
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default Footer;