import React from "react";
import { FaQuestion } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useLocation } from 'react-router-dom';

import "../css/Header.css";

const Header = ({setShowModal}) => {
    let location = useLocation();

    if (location.pathname !== "/") { 
        return (
            <header>
                <div onClick={() => setShowModal(true)}>
                    <IconContext.Provider value= {{ size: "2em", color:"#fff", className:"Help"}} >
                        <FaQuestion></FaQuestion>
                    </IconContext.Provider>
                </div>
                <h3>St Vincent and the Grenadines Interactive Map</h3>
            </header>
    )} else {
        return (
            null
        )
    }
    
}

export default Header;