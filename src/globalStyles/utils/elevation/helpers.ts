import { styleVariants } from "@vanilla-extract/css";
import { enforceRange } from "../../../shared/enforceRange";
import { changeColorAlpha } from "../color/changeColor";
import { nameToHex } from "../color/nameToHex";
import {
  CreateElevationColorVariants,
  ElevationZValue
} from "./types";
import {
  elevationColorMap,
  penumbraMap,
  penumbraColorOpacityMap,
  umbraColorOpacityMap,
  umbraMap
} from "./variables";

const elevationColor = (
  zValue: ElevationZValue,
  color = nameToHex("white")
): string => {
  return changeColorAlpha(color, elevationColorMap[zValue]);
};

const elevationShadow = (
  zValue: ElevationZValue,
  color = nameToHex("black")
): string => {
  const umbraZValue = umbraMap[zValue];
  const pneumbraZValue = penumbraMap[zValue];

  const umbraColor = changeColorAlpha(
    color,
    umbraColorOpacityMap[zValue]
  );
  const pneumbraColor = changeColorAlpha(
    color,
    penumbraColorOpacityMap[zValue]
  );

  enforceRange(zValue, 0, 5);

  return `${umbraZValue} ${umbraColor},
    ${pneumbraZValue} ${pneumbraColor}`;
};

const createElevationColorVariants: CreateElevationColorVariants = ({
  surfaceColorVal,
  elevationColorVal
}) => {
  const variants = styleVariants(elevationColorMap, (_, z) => {
    const overlayColor = elevationColor(z, elevationColorVal);

    const overlay = `linear-gradient(0deg, ${overlayColor}, ${overlayColor})`;

    return {
      background: `${overlay}, ${surfaceColorVal}`
    };
  });

  return variants;
};

export {
  elevationShadow,
  elevationColor,
  createElevationColorVariants
};
