import React, { useState } from "react";
import * as s from "./styles";
import { stopPropagation } from "../../../../shared/stopPropagation";
import { useMap } from "react-leaflet";
import {
  busLines,
  busLinesReverseMapping
} from "../../../../data/bus-lines";
import { useBusLine } from "../../../../hooks/useBusLine/useBusLine";
import { GeoJSON } from "react-leaflet";
import type { GeoJSON as GeoJSONType } from "geojson";
import { hasMouse } from "../../../../shared/hasMouse";
import { useBusSchedule } from "../../../../hooks/useBusSchedule/useBusSchedule";
import { mapTimeRange } from "../../../../shared/time/mapTimeRange";
import { parseTime } from "../../../../shared/time/parseTime";
import { stringifyTime } from "../../../../shared/time/stringifyTime";

const BusLinesControl: React.FC = () => {
  const map = useMap();

  const [lineId, setLineId] = useState<string>("");

  const handleChange: React.ChangeEventHandler<
    HTMLSelectElement
  > = e => {
    setLineId(e.target.value);
  };

  const { data: busLine } = useBusLine({
    id: lineId
  });

  const { data: busSchedule } = useBusSchedule({ id: lineId });

  return (
    <>
      <s.Root
        onTouchStart={stopPropagation}
        onTouchStartCapture={stopPropagation}
        onTouchEnd={stopPropagation}
        onTouchEndCapture={stopPropagation}
        onTouchMove={stopPropagation}
        onTouchMoveCapture={stopPropagation}
        onMouseEnter={e => {
          e.stopPropagation();
          hasMouse() && map.scrollWheelZoom.disable();
        }}
        onMouseLeave={e => {
          e.stopPropagation();
          hasMouse() && map.scrollWheelZoom.enable();
        }}
        onMouseMove={stopPropagation}
        onMouseMoveCapture={stopPropagation}
        onWheel={stopPropagation}
        onWheelCapture={stopPropagation}
        onClick={stopPropagation}
        onClickCapture={stopPropagation}
      >
        <s.Container>
          <s.SelectLabel htmlFor="bus_line_select">
            Autobuske linije
          </s.SelectLabel>
          <s.Select
            id="bus_line_select"
            value={lineId}
            onChange={handleChange}
          >
            <option value="">Izaberi</option>
            {busLines.map((line, i) => (
              <option key={i} value={busLinesReverseMapping[line]}>
                {line}
              </option>
            ))}
          </s.Select>
          {busSchedule && (
            <>
              <p>Red vožnje:</p>
              <div style={{ display: "grid", gap: 5 }}>
                <p>
                  {mapTimeRange(
                    parseTime(busSchedule.first_departure_time),
                    parseTime(busSchedule.last_departure_time),
                    busSchedule.interval_in_minutes,
                    (t, i) => <div key={i}>{stringifyTime(t)}</div>
                  ).reverse()}
                </p>
              </div>
            </>
          )}
        </s.Container>
      </s.Root>
      {busLine && (
        <GeoJSON key={lineId} data={busLine as GeoJSONType} />
      )}
    </>
  );
};

export { BusLinesControl };
