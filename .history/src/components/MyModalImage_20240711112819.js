import ModalImage from "react-modal-image";
import 
function MyModalImage({item}) {
    return(
        <ModalImage className="modal-image"
                        small={item}
                        large={item}
        />
    );
}