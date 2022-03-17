import { hslToColorString, parseToHsl } from "polished";
import { ChangeColorOptions as Options } from "./types";
import { enforceRange } from "../../../shared/enforceRange";

const validateOptions = (options: Options): void => {
  if (options.alpha) {
    enforceRange(options.alpha, 0, 1);
  }
  if (options.lightness) {
    enforceRange(options.lightness, 0, 1);
  }
};

const changeColor = (color: string, options: Options): string => {
  const hsl = parseToHsl(color);

  validateOptions(options);

  return hslToColorString({ ...hsl, ...options });
};

const changeColorLightness = (
  color: string,
  lightness: number
): string => changeColor(color, { lightness });

const changeColorAlpha = (color: string, alpha: number): string =>
  changeColor(color, { alpha });

export { changeColor, changeColorLightness, changeColorAlpha };
