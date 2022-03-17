import { styleVariants } from "@vanilla-extract/css";
import { lightThemeFullMap } from "./variables/lightTheme";

const fgColors = styleVariants(lightThemeFullMap, color => ({
  color
}));

export { fgColors };
