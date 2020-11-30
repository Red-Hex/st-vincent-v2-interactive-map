import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import Header from "./components/Header";
import Map from "./components/Map";
import Nav from "./components/Nav";
import Help from "./components/Help";
import Admin from "./components/Admin";

import './css/App.css';

function App() {
  const [showModal, setShowModal] = useState (false);

  return (
    <Router>
      { showModal ? <Help setShowModal={setShowModal}></Help>:null }
      <Header setShowModal={setShowModal}></Header>
      <Route exact path="/">
        <Landing></Landing>
      </Route>
      <Route path="/map">
        <Nav></Nav>
        <Map></Map>
      </Route>
      <Route path="/admin">
        <Admin setShowModal={setShowModal}></Admin>
      </Route>
    </Router>
  );
}

export default App;
