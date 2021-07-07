import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

function MapComponent({ height, width }) {
  return (
    <div>
      <Map
        center={[19.09330249177836, 72.8567855885514]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: height, width: width }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </Map>
    </div>
  );
}

export default MapComponent;
