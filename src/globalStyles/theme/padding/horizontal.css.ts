import { paddingMap } from "./constants";
import { styleVariants } from "@vanilla-extract/css";

const paddingH = styleVariants(paddingMap, size => ({
  paddingLeft: size,
  paddingRight: size
}));

export { paddingH };
