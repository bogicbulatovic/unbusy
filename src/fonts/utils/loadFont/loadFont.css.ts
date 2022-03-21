import { fontFace, globalFontFace } from "@vanilla-extract/css";
import {
  createFontFaceSrc,
  createFontFamily,
  subsetUnicodeMap
} from "./helpers";
import {
  LoadFontProps as Props,
  LoadFontResponse as Response
} from "./types";

const loadFont = ({
  fontStyle,
  fontWeight,
  src,
  fallback
}: Props): Response => {
  //
  const fontFamily = fontFace({
    src: createFontFaceSrc(src.latinUrl, src.locals),
    fontWeight,
    fontStyle,
    unicodeRange: subsetUnicodeMap.latin,
    fontDisplay: "swap"
  });

  if (src.latinExtUrl) {
    globalFontFace(fontFamily, {
      src: createFontFaceSrc(src.latinExtUrl, src.locals),
      fontWeight,
      fontStyle,
      unicodeRange: subsetUnicodeMap.latinExt,
      fontDisplay: "swap"
    });
  }

  return {
    fontFamily: createFontFamily(fontFamily, fallback),
    fontWeight: +fontWeight,
    fontStyle
  };
};

export { loadFont };
