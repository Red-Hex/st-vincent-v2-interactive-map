import React from "react";
import { Link } from 'react-router-dom';


import "../css/Header.css";
import "../css/Admin.css";

const Admin = ()  => {
    return (
        <div class="admin">
            <React.Fragment>
                <Link to="/map">
                    <p className='backButton'>Back To Map</p>
                </Link>
                <h2 class="title">Admin Panel</h2>
                <p className='backButton'>Create Post</p>
                <h2 class="title">Posts</h2>
            </React.Fragment>
        </div>
    )
}

export default Admin;