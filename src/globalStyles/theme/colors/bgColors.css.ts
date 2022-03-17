import { styleVariants } from "@vanilla-extract/css";
import { lightThemeFullMap } from "./variables/lightTheme";

const bgColors = styleVariants(lightThemeFullMap, color => ({
  backgroundColor: color
}));

export { bgColors };
