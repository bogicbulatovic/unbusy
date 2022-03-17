import { StyleRule, styleVariants } from "@vanilla-extract/css";
import { mapObject } from "../../../shared/mapObject";
import { renameKeys } from "../../../shared/renameKeys";
import { ZindexStyleVariant } from "./types";
import { zIndexMap } from "./variabless";

const variantMap = mapObject<typeof zIndexMap, StyleRule>(
  zIndexMap,
  zIndex => ({ zIndex })
);

const behindMap = renameKeys(zIndexMap, key => `behind_${key}`);

const behindVariantMap = mapObject<typeof behindMap, StyleRule>(
  behindMap,
  z => ({ zIndex: z - 1 })
);

const inFrontOfMap = renameKeys(
  zIndexMap,
  key => `in_front_of_${key}`
);

const inFrontOfVariantMap = mapObject<typeof inFrontOfMap, StyleRule>(
  inFrontOfMap,
  z => ({ zIndex: z + 1 })
);

const Zindex = styleVariants<ZindexStyleVariant>({
  ...variantMap,
  ...behindVariantMap,
  ...inFrontOfVariantMap
});

export { Zindex };
