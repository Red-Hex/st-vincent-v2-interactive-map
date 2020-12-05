import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Landing from "./components/Landing";
import Header from "./components/Header";
import Map from "./components/Map";
import MarkerModal from "./components/MarkerModal";
import Nav from "./components/Nav";
import Help from "./components/Help";
import Login from './components/Login';
import Admin from "./components/Admin";

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadAdmin } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './css/App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token);
};

const App = () => {
  const [showModal, setShowModal] = useState (false);
  const [modalLocation, setModalLocation] = useState (null);

  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
