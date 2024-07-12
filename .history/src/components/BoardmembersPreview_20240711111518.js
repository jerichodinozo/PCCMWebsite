import ".././styles/BoardmembersPreview.css";
import BoardmemberCard from "./BoardmemberCard";
import {Link} from "react-router-dom";
function BoardmembersPreview() {
    return (
        <div class="boardmembers-preview-container container section">
            <div class="boardmembers-preview wrapper">
                <h2 class="section-title">
                    Our Board Members
                </h2>
                <div class="boardmembers-section">
                    <BoardmemberCard
                        name="Gerard Madarang"
                        position="Vice President"
                        description="Gerard joined the PCCM in 2021. Prior to immigrating to Canada in 2016, 
                                    he served as a public health physician for nine years in the Philippines."
                    />
                    <BoardmemberCard
                        name="Virgie Gayot"
                        position="President"
                        description="Virgie has been the president of the PCCM since June 13, 2019.
                                    She graduated with a Bachelor of Science in Civil Engineering, St. Louis University in Baguio City, Philippines."
                    />
                    <BoardmemberCard
                        name="Rodrigo Lopez"
                        position="Secretary"
                        description="Rodrigo [Rodge] has been with the PCCM since 2014.
                                        Rodge volunteers at various community events and organizations such as Cancer Care Manitoba,
                                        the Winnipeg Consular office."
                    />
                </div>
                <Link to="/aboutus" class="view-more board-members-view-more">View more</Link>
            </div>
        </div>
    );
}

export default BoardmembersPreview;