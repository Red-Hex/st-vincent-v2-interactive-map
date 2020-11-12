import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap 
      defaultZoom={13} 
      defaultCenter={{ lat:13.169085, lng:-61.192851 }} 
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
  <div style={{width: '100vw', height: '100vh'}}>
    <WrappedMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
      libraries=geometry,drawing,places&key=AIzaSyAGCTYrqoUq5gDTru2NbotuYDPzVvGAYxY`} 
      loadingElement={<div style={{ height: "100%" }} />}
      containerElement={<div style={{ height: "100%" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  </div>
  );
}