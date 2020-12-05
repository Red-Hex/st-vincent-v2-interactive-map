import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import Header from "./components/Header";
import Map from "./components/Map";
import MarkerModal from "./components/MarkerModal";
import Nav from "./components/Nav";
import Help from "./components/Help";
import Login from './components/Login';
import Admin from "./components/Admin";

import './css/App.css';

function App() {
  const [showModal, setShowModal] = useState (false);
  const [modalLocation, setModalLocation] = useState (null);

  return (
    <Router>
      { modalLocation ? <MarkerModal modalLocation={modalLocation} setShowModal={setModalLocation}></MarkerModal>:null }
      { showModal ? <Help setShowModal={setShowModal}></Help>:null }
      <Header setShowModal={setShowModal}></Header>
      <Route exact path="/">
        <Landing></Landing>
      </Route>
      <Route path="/map">
        <Nav></Nav>
        <Map setShowModal={setModalLocation}></Map>
      </Route>
      <Route path="/login">
        <Login setShowModal={setShowModal}></Login>
      </Route>
      <Route path='/admin'>
        <Admin setShowModal={setShowModal}></Admin>
      </Route>
    </Router>
  );
}

export default App;
