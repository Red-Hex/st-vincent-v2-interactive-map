import React from "react";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-router-dom';

import "../css/Help.css";

function Help ({setShowModal}) {
    return (
        <div class="help">
            <React.Fragment>
                <div onClick={() => setShowModal(false)}>
                    <IconContext.Provider value={{size:"2em", color:"#676BBC", className:"Cross"}}>
                        <FaTimes></FaTimes>
                    </IconContext.Provider>
                </div>
                <h2 class="title">Help</h2>
                <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </React.Fragment>
        </div>
    )
}

export default Help;