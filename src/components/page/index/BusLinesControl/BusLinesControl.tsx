import React from "react";
import * as s from "./styles";
import { stopPropagation } from "../../../../shared/stopPropagation";
import { useMap } from "react-leaflet";
import {
  busLines,
  busLinesReverseMapping
} from "../../../../data/bus-lines";
import { hasMouse } from "../../../../shared/hasMouse";
import { mapTimeRange } from "../../../../shared/time/mapTimeRange";
import { parseTime } from "../../../../shared/time/parseTime";
import { stringifyTime } from "../../../../shared/time/stringifyTime";
import { BusLinesControlProps as Props } from "./props";
import { useBusSchedule } from "../../../../hooks/useBusSchedule/useBusSchedule";

const BusLinesControl: React.FC<Props> = ({ value, onChange }) => {
  const map = useMap();

  const { data: schedule } = useBusSchedule({ id: value });

  return (
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
          value={value || ""}
          onChange={e => onChange(e.target.value)}
        >
          <option value="">Izaberi</option>
          {busLines.map((line, i) => (
            <option key={i} value={busLinesReverseMapping[line]}>
              {line}
            </option>
          ))}
        </s.Select>
        {value && !schedule && (
          <>
            {Array(6)
              .fill(true)
              .map((_v, i) => (
                <div key={i} className={s.placeholder}>
                  placeholder
                </div>
              ))}
          </>
        )}
        {schedule && (
          <s.ScheduleRoot>
            <p style={{ textAlign: "center" }}>Red vožnje:</p>
            <s.ScheduleTimeGrid>
              {mapTimeRange(
                parseTime(schedule.first_departure_time),
                parseTime(schedule.last_departure_time),
                schedule.interval_in_minutes,
                (t, i) => <p key={i}>{stringifyTime(t)}</p>
              ).reverse()}
            </s.ScheduleTimeGrid>
          </s.ScheduleRoot>
        )}
      </s.Container>
    </s.Root>
  );
};

export { BusLinesControl };
