import React from "react";
import b from "../../../../data/busStops.json";
import { Marker } from "react-leaflet";
import { BusStops as BusStopsType } from "../../../../mocks/types";
import { BusStopPopup } from "../BusStopPopup/BusStopPopup";

const busStops = b as unknown as BusStopsType;

const BusStops: React.FC = () => {
  return (
    <>
      {busStops.allIds.map(id => (
        <Marker key={id} position={busStops.byId[id].coordinates}>
          <BusStopPopup lineIds={busStops.byId[id].busLineIds} />
        </Marker>
      ))}
    </>
  );
};

export { BusStops };
