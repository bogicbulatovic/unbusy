export interface BusLinesFeatureCollection {
  type: string;
  features: Feature[];
}

interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

interface Properties {
  name: string;
  type: string;
  id: number;
  line_id?: number;
}

interface Geometry {
  type: string;
  coordinates: [number, number][];
}

export type BusLinesUrlParams = {
  id: string | `${number}`;
};

// //

export type BusSchedule = {
  direction_name: string;
  first_departure_time: string;
  last_departure_time: string;
  day_type: "weekday";
  interval_in_minutes: number;
};
