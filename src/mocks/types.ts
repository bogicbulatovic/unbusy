import type { GeoJSON } from "geojson";

type Position = [number, number];

type LineString = {
  type: GeoJSON.LineString["type"];
  coordinates: Position[];
};

type Point = {
  type: GeoJSON.Point["type"];
  coordinates: Position;
};

type Geometry = LineString | Point;

interface Properties {
  name: string;
  type: string;
  id: number;
  line_id?: number;
}
interface Feature {
  type: GeoJSON.Feature["type"];
  properties: Properties;
  geometry: Geometry;
}

export interface BusLinesFeatureCollection {
  type: GeoJSON.FeatureCollection["type"];
  features: Feature[];
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
