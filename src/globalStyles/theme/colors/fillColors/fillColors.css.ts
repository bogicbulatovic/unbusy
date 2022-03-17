import { StyleRule, styleVariants } from "@vanilla-extract/css";
import { mapObject } from "../../../../shared/mapObject";
import { renameKeys } from "../../../../shared/renameKeys";
import {
  lightThemeOnMap,
  lightThemeMap
} from "../variables/lightTheme";

const variant = styleVariants(lightThemeMap, (color, colorKey) => ({
  backgroundColor: color,
  color: lightThemeOnMap[colorKey]
}));

const onVariantMap = mapObject<typeof lightThemeOnMap, StyleRule>(
  lightThemeOnMap,
  (color, colorKey) => ({
    backgroundColor: color,
    color: lightThemeMap[colorKey]
  })
);

const onVariant = styleVariants(
  renameKeys(onVariantMap, key => `on_${key}`)
);

const fillColors = {
  ...variant,
  ...onVariant
};

export { fillColors };
