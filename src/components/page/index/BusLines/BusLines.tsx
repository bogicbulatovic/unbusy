import React from "react";
import { Polyline } from "react-leaflet";
import { useBusLine } from "../../../../hooks/useBusLine/useBusLine";
import { BusLinesProps as Props } from "./props";

const BusLines: React.FC<Props> = ({ lineId }) => {
  const { data: busLine } = useBusLine({
    id: lineId + ""
  });

  return (
    <>
      {busLine &&
        busLine.features.map(
          f =>
            f.geometry.type === "LineString" && (
              <Polyline
                key={f.properties.id}
                positions={f.geometry.coordinates}
              />
            )
        )}
    </>
  );
};

export { BusLines };
