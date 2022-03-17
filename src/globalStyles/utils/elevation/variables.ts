import { ElevationColorMap } from "./types";

const umbraMap: ElevationColorMap = {
  0: "0px 0px 0px 0px",
  1: "0px 1px 2px",
  2: "0px 1px 2px",
  3: "0px 4px 8px 3px",
  4: "0px 6px 10px 4px",
  5: "0px 8px 12px 6px"
} as const;

const penumbraMap: ElevationColorMap = {
  0: "0px 0px 0px 0px",
  1: "0px 1px 3px 1px",
  2: "0px 2px 6px 2px",
  3: "0px 1px 3px",
  4: "0px 2px 3px",
  5: "0px 4px 4px"
} as const;

const elevationColorMap: ElevationColorMap<number> = {
  0: 0,
  1: 0.05,
  2: 0.08,
  3: 0.11,
  4: 0.12,
  5: 0.14
} as const;

const umbraColorOpacityMap: ElevationColorMap<number> = {
  0: 0,
  1: 0.3,
  2: 0.3,
  3: 0.15,
  4: 0.15,
  5: 0.15
} as const;

const penumbraColorOpacityMap: ElevationColorMap<number> = {
  0: 0,
  1: 0.15,
  2: 0.15,
  3: 0.3,
  4: 0.3,
  5: 0.3
} as const;

export {
  umbraMap,
  penumbraMap,
  elevationColorMap,
  umbraColorOpacityMap,
  penumbraColorOpacityMap
};
