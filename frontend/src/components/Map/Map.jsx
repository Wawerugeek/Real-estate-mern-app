import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import GeoCoderMarker from "../GeoCoderMarker/GeoCoderMarker";

const Map = (address, city, country) => {
  const position = [53.35, 18.8];
  return (
    <MapContainer
      center={position}
      zoom={1}
      scrollWheelZoom={false}
      style={{
        height: "40vh",
        width: "100%",
        marginTop: "20px",
        zIndex: 0,
      }}
    >
      <TileLayer url='url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};

export default Map;
