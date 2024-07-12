import ".././styles/BoardmemberCard.css";
function BoardmemberCard({image, name, position, description}) {
    return(
        <div class="boardmember-card">
            <img class="boardmember-picture" src={image} alt=""></img>
            <div class="boardmember-details shadow2">
                <h3 class="boardmember-name">
                    {name}
                </h3>
                <h3 class="boardmember-position">
                    {position}
                </h3>
                <p class="boardmember-description">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default BoardmemberCard;