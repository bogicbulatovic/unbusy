import React, { useState } from "react";
import { BusStops } from "../BusStops/BusStops";
import { BusLines } from "../BusLines/BusLines";
import { LineId } from "../../../../mocks/types";
import { BusStopsProps } from "../BusStops/props";

const MapContent: React.FC = () => {
  const [activeLineId, setActiveLineId] = useState<LineId>();

  const handleLineIdChange: BusStopsProps["onLineIdChange"] = id => {
    setActiveLineId(id === activeLineId ? undefined : id);
  };

  return (
    <>
      <BusStops
        activeLineId={activeLineId}
        onLineIdChange={handleLineIdChange}
      />
      {activeLineId && <BusLines lineId={activeLineId} />}
    </>
  );
};

export { MapContent };
