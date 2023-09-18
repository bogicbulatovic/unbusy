import React from "react";

import b from "../../../../data/busStops.json";
const busStops = b as unknown as BusStops;

import { Marker } from "react-leaflet";
import { BusStops } from "../../../../mocks/types";

const MapContent: React.FC = () => {
  return (
    <>
      {busStops.allIds.map(id => (
        <Marker key={id} position={busStops.byId[id].coordinates} />
      ))}
    </>
  );
};

export { MapContent };
