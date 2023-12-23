import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import { compose, withProps } from "recompose";

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=VOTRE_CLE_API&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: VOTRE_LATITUDE, lng: VOTRE_LONGITUDE }}
  >
    <Marker position={{ lat: VOTRE_LATITUDE, lng: VOTRE_LONGITUDE }} />
  </GoogleMap>
));

const Map = () => (
  <div>
    <MapComponent isMarkerShown />
  </div>
);

export default Map;
