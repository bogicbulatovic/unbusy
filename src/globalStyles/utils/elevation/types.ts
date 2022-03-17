export type ElevationZValue = 0 | 1 | 2 | 3 | 4 | 5;

export type ElevationColorMap<T extends string | number = string> =
  Record<ElevationZValue, T>;

export type CreateElevationColorVariants = (props: {
  surfaceColorVal: string;
  elevationColorVal: string;
}) => Record<ElevationZValue, string>;
