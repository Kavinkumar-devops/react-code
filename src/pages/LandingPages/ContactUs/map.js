/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import Leaflet to use custom icons

// Import the default Leaflet marker and shadow icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MKBox from "components/MKBox";

// Set up the default Leaflet marker icon with custom attributes
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = ({ lat, lng }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Apply the custom marker icon */}
      <Marker position={[lat, lng]} icon={defaultIcon}>
        <Popup>
          Location: [{lat}, {lng}]
        </Popup>
      </Marker>
    </MapContainer>
  );
};

// PropTypes validation to ensure lat and lng are passed and are numbers
MapComponent.propTypes = {
  lat: PropTypes.number.isRequired, // Latitude should be a number and required
  lng: PropTypes.number.isRequired, // Longitude should be a number and required
};

export default MapComponent;
