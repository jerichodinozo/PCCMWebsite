import ".././styles/CTA.css";
import ctaimage from ".././assets/ctaimage.png";

function CTA() {
    return (
        <>
            <div class="call-to-action">
                <div class="cta-img-container">
                    <img class="cta-image" src={ctaimage}></img>
                </div>
                <div class="cta-description">
                    <h2 class="cta-title">Feel Free to Contact Us!</h2>
                    <p class="cta-description-contents">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                    <div class="cta-buttons">
                        <div class="button-1">Donate</div>
                        <div class="button-2">Join Today</div>
                    </div>
                </div>
            </div>
            <div class="custom-divider">

            </div>
        </>
    );
}

export default CTA;