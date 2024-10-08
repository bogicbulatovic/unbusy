import React from "react";
import { BusStopPopupProps as Props } from "./props";
import * as s from "./styles";
import { Popup } from "react-leaflet";

const BusStopPopup: React.FC<Props> = ({
  lineIds,
  activeLineId,
  name,
  onChange
}) => {
  return (
    <Popup>
      <s.Heading>{name}</s.Heading>
      <s.Body>
        {lineIds.map(lineId => (
          <s.LineToggleButton
            key={lineId}
            active={lineId === activeLineId}
            className={lineIds.length === 1 ? s.spanAll : undefined}
            onClick={() => onChange(lineId)}
          >
            {lineId}
          </s.LineToggleButton>
        ))}
      </s.Body>
    </Popup>
  );
};

export { BusStopPopup };
