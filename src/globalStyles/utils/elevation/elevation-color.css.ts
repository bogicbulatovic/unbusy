import { styleVariants } from "@vanilla-extract/css";
import { lightThemeMap } from "../../theme/colors/variables/lightTheme";
import { elevationColor } from "./helpers";
import { CreateElevationColorVariants } from "./types";
import { elevationColorMap } from "./variables";

const createVariants: CreateElevationColorVariants = ({
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

const surfaceColorLevels = createVariants({
  // todo: insert real surface color here
  surfaceColorVal: lightThemeMap.primary,
  elevationColorVal: lightThemeMap.primary
});

export { surfaceColorLevels };
