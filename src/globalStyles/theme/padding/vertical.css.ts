import { paddingMap } from "./constants";
import { styleVariants } from "@vanilla-extract/css";

const paddingV = styleVariants(paddingMap, size => ({
  paddingTop: size,
  paddingBottom: size
}));

export { paddingV };
