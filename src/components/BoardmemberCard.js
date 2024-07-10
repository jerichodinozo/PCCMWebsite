import ".././styles/BoardmemberCard.css";
function BoardmemberCard({image, name, position, description}) {
    return(
        <div class="boardmember-card">
            <img class="boardmember-picture" src={image} alt=""></img>
            <div class="boardmember-details shadow2">
                <div class="boardmember-name">
                    {name}
                </div>
                <div class="boardmember-position">
                    {position}
                </div>
                <div class="boardmember-description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default BoardmemberCard;