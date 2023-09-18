import type { GeoJSON } from "geojson";

type CommonProperties = { name: string; id: number };
type BusLineProperties = { type: "bus-line" } & CommonProperties;
type BusStopProperties = { type: "bus-stop" } & CommonProperties & {
    line_id: number;
  };

type Position = [number, number];

type LineString = {
  type: GeoJSON.LineString["type"];
  coordinates: Position[];
};

type Point = {
  type: GeoJSON.Point["type"];
  coordinates: Position;
};

type BusLineFeature = {
  type: GeoJSON.Feature["type"];
  properties: BusLineProperties;
  geometry: LineString;
};

type BusStopFeature = {
  type: GeoJSON.Feature["type"];
  properties: BusStopProperties;
  geometry: Point;
};

type Feature = BusLineFeature | BusStopFeature;

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

//

type ById = Record<
  string,
  {
    coordinates: Position;
    name: string;
    id: number;
    busLineIds: string[];
  }
>;

export type BusStops = { byId: ById; allIds: number[] };
