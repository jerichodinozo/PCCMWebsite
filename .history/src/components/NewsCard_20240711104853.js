import ".././styles/NewsCard.css";
import ".././styles/styles.css";
function NewsCard({image, title, date, description}) {
    return(
        <div class="news-card-container wrapper">
            <div class="news-card button-shadow">
                <div class="img-container">
                    <img class="news-picture" src={image} alt=""></img>
                </div>
                <div class="news-details">
                    <h3 class="news-title">
                        {title}
                    </h3>
                    <p class="news-date">
                        {date}
                    </p>
                    <p class="news-description">
                        {description}
                    </p>
                    <a class="news-link">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;