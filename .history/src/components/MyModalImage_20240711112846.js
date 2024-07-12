import ModalImage from "react-modal-image";
import ".././styles/styles.css";
function MyModalImage({item}) {
    return(
        <MyModalImage className="modal-image"
                        small={item}
                        large={item}
        />
    );
}
export default MyModalImage;