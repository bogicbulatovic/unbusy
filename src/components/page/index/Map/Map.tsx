import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import * as s from "./styles";
import { PodgoricaLatLng, zoom } from "./helpers";

const Map: React.FC = () => {
  if (typeof window === "undefined") {
    throw new Error("this is client only component");
  }

  return (
    <MapContainer
      center={PodgoricaLatLng}
      zoom={zoom}
      className={s.root}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
