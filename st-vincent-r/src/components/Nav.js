import React from "react";
import { FaWrench } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-router-dom';

import "../css/Nav.css";

const Nav = () => {
    return (
        <React.Fragment>
            <ul className="Nav">
                <li><a href=""></a>History</li>
                <li><a href=""></a>Garifuna</li>
                <li><a href=""></a>Contemporary</li>
                <li><a href=""></a>Ethnobotony</li>
                <li><a href=""></a>Contribute</li>
                <Link to="/admin">
                <IconContext.Provider value= {{ size: "3em", color:"#2EA31B", className:"Admin"}}>
                    <FaWrench></FaWrench>
                </IconContext.Provider>
                </Link>
            </ul>
        </React.Fragment>
    )
}

export default Nav;