import React from "react";
import { FaQuestion, FaWrench } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import "../css/Header.css";

const Header = ({setShowModal}) => {
    let location = useLocation();

    if (location.pathname !== "/") { 
        return (
            <header>
                <h3>St Vincent and the Grenadines Interactive Map</h3>
                <div className="icons">
                    <div onClick={() => setShowModal(true)}>
                        <IconContext.Provider value= {{ size: "2em", color:"#009EFD", className:"Help"}} >
                            <FaQuestion></FaQuestion>
                        </IconContext.Provider>
                    </div>
                    <Link to="/admin">
                    <IconContext.Provider value= {{ size: "2em", color:"#009EFD", className:"Admin"}}>
                        <FaWrench></FaWrench>
                    </IconContext.Provider>
                    </Link>
                </div>
            </header>
    )} else {
        return (
            null
        )
    }
    
}

export default Header;