import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Map from "./components/Map";

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the St Vincent and the Grenadines Interactive Map</h1>
        <Link to="/map">View Map</Link>
      </div>
      <Route path="/map" component={Map} />
    </Router>
  );
}



export default App;
