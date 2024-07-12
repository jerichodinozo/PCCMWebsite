import ModalImage from "react-modal-image";
import ".././styles/styles.css";
function MyModalImage({item}) {
    return(
        <div>
        <ModalImage className="modal-image shadow2"
                        small={item}
                        large={item}
        />
    );
}
export default MyModalImage;