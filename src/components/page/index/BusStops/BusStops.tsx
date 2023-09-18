import React from "react";
import b from "../../../../data/busStops.json";
import { Marker } from "react-leaflet";
import { BusStops as BusStopsType } from "../../../../mocks/types";

const busStops = b as unknown as BusStopsType;

const BusStops: React.FC = () => {
  return (
    <>
      {busStops.allIds.map(id => (
        <Marker key={id} position={busStops.byId[id].coordinates} />
      ))}
    </>
  );
};

export { BusStops };
