import React, { Fragment, useState, useEffect } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import axios from 'axios';


const Map = withScriptjs(withGoogleMap(({setShowModal}) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then((res) => {
        setLocations(res.data)
      })

  }, []);

  return (
    <Fragment>
      <GoogleMap 
        defaultMapTypeId='hybrid'
        defaultZoom={13} 
        defaultCenter={{ lat:13.169085, lng:-61.192851 }} 
      />
      {locations.map(location => {
        return (
         <Marker
            key={location.id}
            position={{ lat:location.lattitude, lng:location.longitude }}
            onClick={() => setShowModal(location)}
          />
      )})}
     
    </Fragment>
  );
}))

export default function App({setShowModal}) {
  return (
  <div>
    <Map 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
      libraries=geometry,drawing,places&key=AIzaSyAGCTYrqoUq5gDTru2NbotuYDPzVvGAYxY`} 
      loadingElement={<div style={{ height: "93vh" }} />}
      containerElement={<div style={{ height: "93vh" }} />}
      mapElement={<div style={{ height: "100%" }} />}
      setShowModal={setShowModal}
    />
  </div>
  );
}