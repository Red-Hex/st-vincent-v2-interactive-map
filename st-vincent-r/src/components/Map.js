import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap 
      defaultMapTypeId='hybrid'
      defaultZoom={13} 
      defaultCenter={{ lat:13.169085, lng:-61.192851 }} 
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
  <div>
    <WrappedMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
      libraries=geometry,drawing,places&key=AIzaSyAGCTYrqoUq5gDTru2NbotuYDPzVvGAYxY`} 
      loadingElement={<div style={{ height: "93vh" }} />}
      containerElement={<div style={{ height: "93vh" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  </div>
  );
}