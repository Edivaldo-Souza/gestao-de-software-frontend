import { useState } from "react";
import './style.css';

function Modal({isOpen, setModalOpen, children}){
    
    if (isOpen) {
        return(
            <div className="background-modal">
                <div className="modal">
                    <div className="header-modal">
                        <img className="icon-modal" onClick={setModalOpen} src="images/close3.svg"/>
                    </div>
                    <div className="body-modal">
                    {children}
                    </div>
                </div> 
            </div>  
        );    
    }

    return null;
}

export default Modal