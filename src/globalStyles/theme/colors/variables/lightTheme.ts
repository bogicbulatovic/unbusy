import { renameKeys } from "../../../../shared/renameKeys";
import { nameToHex } from "../../../utils/color/nameToHex";
import {
  LightThemeMap,
  LightThemeOnMap,
  LightThemeOnPrefixedMap
} from "../types";

const lightThemeMap: LightThemeMap = {
  primary: nameToHex("blue")
};

const lightThemeOnMap: LightThemeOnMap = {
  primary: nameToHex("white")
};

const prefixedlightThemeOnMap = renameKeys(
  lightThemeOnMap,
  key => `on_${key}`
);

const lightThemeFullMap: LightThemeMap & LightThemeOnPrefixedMap = {
  ...lightThemeMap,
  ...prefixedlightThemeOnMap
};

export { lightThemeMap, lightThemeOnMap, lightThemeFullMap };
