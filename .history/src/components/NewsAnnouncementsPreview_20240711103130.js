import NewsCard from "./NewsCard";
import ".././styles/NewsAnnouncementsPreview.css"
import newsimage1 from ".././assets/news1.jpg";
import newsimage2 from ".././assets/news2.jpg";
import backgroundimage from ".././assets/newsannouncementspreview.png";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
function NewsAnnouncementsPreview() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false },)
    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])
    return (
        <div class="container section news-announcements-preview">
            <h2 class="section-title">
                News and Announcements
            </h2>
            <div class="desktop-news">

                <NewsCard
                    image={newsimage1}
                    title="lorem ipsum"
                    date="01/01/2024"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />

                <NewsCard
                    image={newsimage2}
                    title="lorem ipsum"
                    date="01/01/2024"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
            <div class="news-carousel">
                <div class="embla-events" ref={emblaRef}>
                    <div class="embla-events-container">
                        <div class="embla-event-slide first-item">
                            <NewsCard
                                image={newsimage1}
                                title="lorem ipsum"
                                date="01/01/2024"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                        </div>
                        <div class="embla-event-slide">
                            <NewsCard
                                image={newsimage2}
                                title="lorem ipsum"
                                date="01/01/2024"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                        </div>
                        <div class="embla-event-slide">
                            <NewsCard
                                image={newsimage2}
                                title="lorem ipsum"
                                date="01/01/2024"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Link className="view-more news-view-more" to="/news">
                View more
            </Link>
        </div>
    );
}

export default NewsAnnouncementsPreview;