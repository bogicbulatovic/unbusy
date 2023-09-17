import React, { useState } from "react";
import { BusLinesControl } from "../BusLinesControl/BusLinesControl";
import { Marker, Polyline } from "react-leaflet";
import { useBusLine } from "../../../../hooks/useBusLine/useBusLine";
import { useBusSchedule } from "../../../../hooks/useBusSchedule/useBusSchedule";

const BusLines: React.FC = () => {
  const [lineId, setLineId] = useState<string>("");

  const handleChange: React.ChangeEventHandler<
    HTMLSelectElement
  > = e => {
    setLineId(e.target.value);
    console.log({ e });
  };

  const { data: busLine } = useBusLine({
    id: lineId
  });

  const { data: busSchedule } = useBusSchedule({ id: lineId });

  return (
    <>
      <BusLinesControl
        value={lineId}
        onChange={handleChange}
        schedule={busSchedule}
      />
      {busLine &&
        busLine.features.map((f, i) => (
          <React.Fragment key={i}>
            {f.geometry.type === "Point" && (
              <Marker position={f.geometry.coordinates} />
            )}
            {f.geometry.type === "LineString" && (
              <Polyline positions={f.geometry.coordinates} />
            )}
          </React.Fragment>
        ))}
    </>
  );
};

export { BusLines };
