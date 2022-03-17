import { lightThemeMap } from "../../theme/colors/variables/lightTheme";
import { createElevationColorVariants } from "./helpers";

const surfaceColorLevels = createElevationColorVariants({
  // todo: insert real surface color here
  surfaceColorVal: lightThemeMap.primary,
  elevationColorVal: lightThemeMap.primary
});

export { surfaceColorLevels };
