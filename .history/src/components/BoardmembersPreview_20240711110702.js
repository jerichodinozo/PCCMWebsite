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
                        name="Jane doe"
                        position="position"
                        description="President of the PCCM since June 13, 2019, to present. Virgie is also an adviser of the BIBAK Association of Manitoba.
                        "
                    />
                    <BoardmemberCard
                        name="Jane doe"
                        position="position"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <BoardmemberCard
                        name="Jane doe"
                        position="position"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <Link to="/aboutus" class="view-more board-members-view-more">View more</Link>
            </div>
        </div>
    );
}

export default BoardmembersPreview;