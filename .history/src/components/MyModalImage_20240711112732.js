import ModalImage from "react-modal-image";

function MyModalImage(item) {
    return(
        <ModalImage className="modal-image"
                        small={item}
                        large={item}
        />
    );
}