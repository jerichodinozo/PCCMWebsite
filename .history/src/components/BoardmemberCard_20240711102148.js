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
                <div class="boardmember-description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default BoardmemberCard;