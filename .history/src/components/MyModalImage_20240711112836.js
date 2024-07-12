import ModalImage from "react-modal-image";
import ".././styles/styles.css";
function MyModalImage({item}) {
    return(
        <ModalImage className="modal-image"
                        small={item}
                        large={item}
        />
    );
}
export default MyModalImage;