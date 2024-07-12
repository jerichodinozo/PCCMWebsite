import ".././styles/FeaturedEvents.css";
import EventCard from "../components/EventCard.js";
import featuredevent1 from ".././assets/featuredevent1.jpg";
import featuredevent2 from ".././assets/featuredevent2.jpg";
import featuredevent3 from ".././assets/featuredevent3.jpg";
import featuredevent4 from ".././assets/featuredevent4.jpg";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
function FeaturedEvents() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, )
    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])
    return (
        <div class="event-wrapper">
        <div class="featured-events container section">
            <h2 class="section-title">
                Featured Events
            </h2>
            <div class="events-section">
                <EventCard 
                    image={featuredevent1}
                    title="lorem ipsum"
                    date="01/01/2024"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <EventCard 
                    image={featuredevent2}
                    title="lorem ipsum"
                    date="01/01/2024"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <EventCard 
                    image={featuredevent3}
                    title="lorem ipsum"
                    date="01/01/2024"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <EventCard 
                    image={featuredevent4}
                    title="lorem ipsum"
                    date="01/01/2024"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
            <div class="carousel-events">
            <div class="embla-events" ref={emblaRef}>
                    <div class="embla-events-container">
                        <div class="embla-event-slide first-item"> 
                            <EventCard 
                                image={featuredevent1}
                                title="lorem ipsum"
                                date="01/01/2024"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                        </div>
                        <div class="embla-event-slide"> 
                            <EventCard 
                                image={featuredevent2}
                                title="lorem ipsum"
                                date="01/01/2024"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                        </div>
                        <div class="embla-event-slide"> 
                            <EventCard 
                                image={featuredevent3}
                                title="lorem ipsum"
                                date="01/01/2024"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Link class="view-more events-view-more" to="/events">
                View more
            </Link>
        </div>
        <div></div>
    );
}

export default FeaturedEvents;