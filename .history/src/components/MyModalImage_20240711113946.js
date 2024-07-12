import ModalImage from "react-modal-image";
import ".././styles/styles.css";
function MyModalImage({item}) {
    return(
        <ModalImage className="modal-image shadow"
                        small={item}
                        large={item}
        />
    );
}
export default MyModalImage;