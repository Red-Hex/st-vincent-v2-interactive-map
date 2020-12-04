import React from 'react';
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import "../css/Help.css";

function MarkerModal ({setShowModal, modalLocation}) {
    return (
        <div class="help">
            <React.Fragment>
                <div onClick={() => setShowModal(null)}>
                    <IconContext.Provider value={{size:"2em", color:"#676BBC", className:"Cross"}}>
                        <FaTimes></FaTimes>
                    </IconContext.Provider>
                </div>
                <h2 class="title">{modalLocation.name}</h2>
                <p class="paragraph">{modalLocation.description}
                </p>
            </React.Fragment>
        </div>
    )
}

export default MarkerModal;