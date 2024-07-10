import ".././styles/Hero.css";
import heroimage from ".././assets/hero.jpg";
function Hero() {
    return(
        <div class="hero-container">
            <div class="hero-wrapper wrapper">
                <div class="hero">
                    <div class="hero-contents">
                        <h1 id="hero-primary-text">
                        Lorem Ipsum simply
                        </h1>
                        <p class="body-text" id="hero-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        </p>
                        <h3 class="button-2 button-shadow" id="hero-button">
                            Explore
                        </h3>  
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;