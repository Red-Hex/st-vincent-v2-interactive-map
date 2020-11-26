import React from "react";
import { FaQuestion } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div class="landing">
            <React.Fragment>
                <FaQuestion></FaQuestion>
                <h1>Welcome to the St Vincent and the Grenadines Interactive Map</h1>
                <Link to="/map">View Map</Link>
            </React.Fragment>
        </div>
    )
}

export default Landing;