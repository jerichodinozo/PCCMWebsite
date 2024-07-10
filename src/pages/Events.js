import Hero from ".././components/Hero";
import ".././styles/Events.css";
import EventCard from ".././components/EventCard";
import featuredevent1 from ".././assets/featuredevent1.jpg";
import CTA from ".././components/CTA";
function Events() {
    return (
        <div class="events-page">
            <div class="container">
                <div class="events-banner-container">
                    <div class="events-banner">
                        <h1>Events</h1>
                    </div>
                </div>
            </div>
            <div class="section upcoming-events-container">
                <h2 class="section-title">Upcoming Events</h2>
                <div class="upcoming-events">
                    <EventCard
                        image={featuredevent1}
                        title="lorem ipsum"
                        date="01/01/2024"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <EventCard
                        image={featuredevent1}
                        title="lorem ipsum"
                        date="01/01/2024"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <EventCard
                        image={featuredevent1}
                        title="lorem ipsum"
                        date="01/01/2024"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <EventCard
                        image={featuredevent1}
                        title="lorem ipsum"
                        date="01/01/2024"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <EventCard
                        image={featuredevent1}
                        title="lorem ipsum"
                        date="01/01/2024"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <EventCard
                        image={featuredevent1}
                        title="lorem ipsum"
                        date="01/01/2024"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <EventCard
                        image={featuredevent1}
                        title="lorem ipsum"
                        date="01/01/2024"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <EventCard
                        image={featuredevent1}
                        title="lorem ipsum"
                        date="01/01/2024"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>
        </div>
    );
}

export default Events;