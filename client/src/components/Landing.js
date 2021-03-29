import React from "react";
import { Link } from 'react-router-dom';

import "../css/Landing.css"

function Landing() {
    return (
        <div class="landing">
            <React.Fragment>
                <div class="wrap">
                    <h1 class="l-title">Welcome to the St Vincent and the Grenadines Interactive Map</h1>
                    <Link className="button" to="/map"><p>View Map</p></Link>
                    <p class="about">St. Vincent and the Grenadines is a southern Caribbean nation comprising a main island, St. Vincent, and a chain of smaller islands. With yacht-filled 
                        harbors, chic private isles and volcanic landscapes, it’s known for its major sailing destinations such as reef-lined Bequia Island off Admiralty Bay, 
                        bordered by white-sand beaches like Princess Margaret.
                    </p>
                </div>
            </React.Fragment>
        </div>
    )
}

export default Landing;