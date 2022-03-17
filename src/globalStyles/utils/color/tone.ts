/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getContrast } from "polished";
import { Tone } from "./types";
import toHex from "colornames";
import { changeColorAlpha } from "./changeColor";

// // https://github.com/material-components/material-components-web/blob/master/packages/mdc-theme/_theme-color.scss

const whiteHex = toHex("white")!;
const blackHex = toHex("black")!;

const tone = (color: string): Tone => {
  const minimumContrast = 4.5;

  const lightContrast = getContrast(color, whiteHex);
  const darkContrast = getContrast(
    color,
    changeColorAlpha(blackHex, 0.87)
  );

  if (
    lightContrast < minimumContrast &&
    darkContrast > lightContrast
  ) {
    return "light";
  }

  return "dark";
};

export { tone };
