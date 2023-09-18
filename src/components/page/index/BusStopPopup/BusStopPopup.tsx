import React, { useState } from "react";
import { BusStopPopupProps as Props } from "./props";
import * as s from "./styles";
import { Popup } from "react-leaflet";

const BusStopPopup: React.FC<Props> = ({ lineIds }) => {
  const [activeLineId, setActiveLineId] = useState<string>();

  return (
    <Popup>
      <s.Body>
        {lineIds.map(lineId => (
          <s.LineId
            key={lineId}
            active={lineId === activeLineId}
            className={lineIds.length === 1 ? s.spanAll : undefined}
            onClick={() =>
              setActiveLineId(
                lineId === activeLineId ? undefined : lineId
              )
            }
          >
            {lineId}
          </s.LineId>
        ))}
      </s.Body>
    </Popup>
  );
};

export { BusStopPopup };
