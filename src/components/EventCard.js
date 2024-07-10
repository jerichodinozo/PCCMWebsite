import ".././styles/EventCard.css";

function EventCard({image, title, date, description}) {
    return(
        <div class="event-card shadow2">
            <img class="event-picture button-shadow" src={image}>

            </img>
            <div class="event-details">
                <h3 class="event-title">
                    {title}
                </h3>
                <p class="event-date">
                    {date}
                </p>
                <p class="event-description">
                    {description}
                </p>
                <a class="learn-more">
                    learn more
                </a>
            </div>
        </div>
    );
}

export default EventCard;