import React from "react";
import { Link } from 'react-router-dom';


import "../css/Header.css";
import "../css/Admin.css";

const Admin = ()  => {
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