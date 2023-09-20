import React from "react";
import b from "../../../../data/busStops.json";
import { Marker } from "react-leaflet";
import { BusStops as BusStopsType } from "../../../../mocks/types";
import { BusStopPopup } from "../BusStopPopup/BusStopPopup";
import { BusStopsProps as Props } from "./props";

const busStops = b as unknown as BusStopsType;

const BusStops: React.FC<Props> = ({
  activeLineId,
  onLineIdChange
}) => {
  return (
    <>
      {busStops.allIds.map(id =>
        activeLineId !== undefined &&
        !busStops.byId[id].busLineIds.includes(
          activeLineId
        ) ? null : (
          <Marker key={id} position={busStops.byId[id].coordinates}>
            <BusStopPopup
              name={busStops.byId[id].name}
              lineIds={busStops.byId[id].busLineIds}
              activeLineId={activeLineId}
              onChange={onLineIdChange}
            />
          </Marker>
        )
      )}
    </>
  );
};

export { BusStops };
