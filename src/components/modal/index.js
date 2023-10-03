import { useState } from "react";
import './style.css';

function Modal({isOpen}){
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    if (isOpen) {
        return(
            <div className="background-modal">
                <div className="modal">
                    modal
                </div> 
            </div>  
        );    
    }

    return null;
}

export default Modal