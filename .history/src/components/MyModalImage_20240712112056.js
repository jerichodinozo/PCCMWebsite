import ModalImage from "react-modal-image";
import ".././styles/styles.css";
function MyModalImage({item}) {
    return(
         
            <ModalImage className="modal-image shadow2"
                            small={item}
                            large={item}
            />
         </div>
    );
}
export default MyModalImage;