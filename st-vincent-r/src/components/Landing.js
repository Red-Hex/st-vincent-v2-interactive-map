import React from "react";
import { BrowserRouter as Link } from 'react-router-dom';

function Landing() {
    return (
        <div class="landing">
            <React.Fragment>
                <h1>Welcome to the St Vincent and the Grenadines Interactive Map</h1>
                <Link to="/map">View Map</Link>
            </React.Fragment>
        </div>
    )
}

export default Landing;