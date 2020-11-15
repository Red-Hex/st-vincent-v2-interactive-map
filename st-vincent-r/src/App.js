import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from "./components/Landing";
import Map from "./components/Map";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Route path="/map">
        <Nav></Nav>
        <Map></Map>
      </Route>
      <Route exact path="/">
        <div className="App">
          <Landing></Landing>
        </div>
      </Route>
    </Router>
  );
}



export default App;
