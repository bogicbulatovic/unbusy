import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";
import * as s from "./styles";

const Map: React.FC = () => {
  if (typeof window === "undefined") {
    throw new Error("this is client only component");
  }

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      className={s.root}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
