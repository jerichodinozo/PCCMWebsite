import ".././styles/GalleryPreview.css";
import picture from ".././assets/featuredevent4.jpg";
import useEmblaCarousel from "embla-carousel-react"
import React, { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import ".././styles/NewsAnnouncementsPreview.css";
import {Link} from "react-router-dom";
import MyModalImage from "./MyModalImage";
import gallerypic1 from ".././assets/gallerypic1.jpg";
import gallerypic2 from ".././assets/gallerypic2.jpg";
import gallerypic3 from ".././assets/gallerypic3.jpg";
import gallerypic4 from ".././assets/gallerypic4.jpg";
import gallerypic5 from ".././assets/gallerypic5.jpg";
function GalleryPreview() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false },)
    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
        <div class="gallery-preview-container container section">
            <div class="gallery-preview">
                <h2 class="section-title">
                    Gallery
                </h2>
                <div class="gallery-section">
                    <div class="gallery-images">
                        <MyModalImage item={gallerypic1}/>
                        <MyModalImage item={gallerypic2}/>
                        <MyModalImage item={gallerypic3}/>
                        <MyModalImage item={gallerypic4}/>
                        <MyModalImage item={gallerypic5}/>
                        <a class="view-more-gallery">
                            view more
                        </a>
                    </div>

                </div>
                <div class="gallery-carousel">
                    <div class="embla-gallery" ref={emblaRef}>
                        <div class="embla-gallery-container">
                            <div class="embla-gallery-slide first-item">
                            <MyModalImage item={gallerypic1}/>
                            </div>
                            <div class="embla-gallery-slide">
                            <MyModalImage item={gallerypic1}/>
                            </div>
                            <div class="embla-event-slide">
                            <MyModalImage item={gallerypic1}/>
                            </div>
                            <div class="embla-event-slide">
                            <MyModalImage item={gallerypic1}/>
                            </div>
                            <div class="embla-event-slide">
                                <img src={picture} alt="" class="gallery-picture"></img>
                            </div>
                            <div class="embla-event-slide">
                                <Link to="/gallery"class="view-more-gallery">
                                    view more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="gallery-carousel">
                    <div class="embla-events" ref={emblaRef}>
                        <div class="embla-events-container">
                            <div class="embla-event-slide">
                                <img src={picture} alt="" class="gallery-picture"></img>
                            </div>
                            <div class="embla-event-slide">
                                <img src={picture} alt="" class="gallery-picture"></img>
                            </div>
                            <div class="embla-event-slide">
                                <img src={picture} alt="" class="gallery-picture"></img>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    );
}

export default GalleryPreview;