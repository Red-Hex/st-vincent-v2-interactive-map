import React from "react";
import { FaQuestion } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-router-dom';
import Header from "./Header";

import "../css/Header.css";
import "../css/Admin.css";

const Admin = ({setShowModal})  => {
    return (
        <div class="admin">
            <React.Fragment>
                <Link to="/map">
                    <p>Back To Map</p>
                </Link>
            </React.Fragment>
        </div>
    )
}

export default Admin;