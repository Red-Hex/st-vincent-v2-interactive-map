import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import Header from "./components/Header";
import Map from "./components/Map";
import Nav from "./components/Nav";
import Help from "./components/Help";
import Admin from "./components/Admin";

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
      <Route path="*/help">
        <Help></Help>
      </Route>
      <Route path="/admin">
        <Admin></Admin>
      </Route>
    </Router>
  );
}

export default App;
