import busLinesMapping from "../data/busLinesMapping.json";

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
  id: keyof typeof busLinesMapping;
};
