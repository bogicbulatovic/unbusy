import { styleVariants } from "@vanilla-extract/css";
import { nameToHex } from "../color/nameToHex";
import { elevationShadow } from "./helpers";
import { umbraMap } from "./variables";

const elevationShadowVariant = styleVariants(umbraMap, (_, z) => ({
  boxShadow: elevationShadow(z, nameToHex("gray"))
}));

export { elevationShadowVariant };
