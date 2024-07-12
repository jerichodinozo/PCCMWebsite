import ModalImage from "react-modal-image";
import ".././styles/styles.css";
function MyModalImage({item}) {
    return(
         <div class="modal-image-container">
            <ModalImage className="modal-image shadow2"
                            small={item}
                            large={item}
            />
         </div>
    );
}
export default MyModalImage;