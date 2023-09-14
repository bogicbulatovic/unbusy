import React, { useState } from "react";
import * as s from "./styles";
import { stopPropagation } from "../../../../shared/stopPropagation";
import { useMap } from "react-leaflet";
import { busLines } from "../../../../data/bus-lines";

const BusLinesControl: React.FC = () => {
  const map = useMap();

  const [value, setValue] = useState<string>();

  const handleChange: React.ChangeEventHandler<
    HTMLSelectElement
  > = e => {
    setValue(e.target.value);
  };

  console.log({ value });

  return (
    <s.Root
      onTouchStart={stopPropagation}
      onTouchEnd={stopPropagation}
      onTouchMove={stopPropagation}
      onMouseEnter={e => {
        e.stopPropagation();
        map.scrollWheelZoom.disable();
      }}
      onMouseLeave={e => {
        e.stopPropagation();
        map.scrollWheelZoom.enable();
      }}
      onMouseMove={stopPropagation}
    >
      <s.Container>
        <s.SelectLabel htmlFor="bus_line_select">
          Autobuske linije
        </s.SelectLabel>
        <s.Select
          id="bus_line_select"
          value={value}
          onChange={handleChange}
        >
          {busLines.map((line, i) => (
            <option key={i} value={line}>
              {line}
            </option>
          ))}
        </s.Select>
      </s.Container>
    </s.Root>
  );
};

export { BusLinesControl };
