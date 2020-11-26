import React from "react";
import { FaQuestion } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-router-dom';

import "../css/Header.css";

const Header = () => {
    return (
        <header>
            <Link to="/map/help">
                <IconContext.Provider value= {{ size: "2em", color:"#fff", className:"Help"}}>
                    <FaQuestion></FaQuestion>
                </IconContext.Provider>
            </Link>
            <h3>St Vincent and the Grenadines Interactive Map</h3>
        </header>
    )
    
}

export default Header;