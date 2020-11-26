import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import Header from "./components/Header";
import Map from "./components/Map";
import Nav from "./components/Nav";

import './css/App.css';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Landing></Landing>
      </Route>
      <Route path="/map">
        <Header></Header>
        <Nav></Nav>
        <Map></Map>
      </Route>
    </Router>
  );
}

export default App;
