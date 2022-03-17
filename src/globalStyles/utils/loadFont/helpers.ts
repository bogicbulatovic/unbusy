import { FontFamilyFallback, FontSubset } from "./types";

const subsetUnicodeMap: Record<FontSubset, string> = {
  latin:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
  latinExt:
    "U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF"
};

const cssUrlWrap = (url: string): string => `url("${url}")`;
const cssLocalWrap = (s: string): string => `local("${s}")`;

const createFontFaceSrc = (
  url: string,
  locals?: string[]
): string => {
  if (locals) {
    return `${locals
      .map(local => cssLocalWrap(local))
      .join(",")},${cssUrlWrap(url)}`;
  }

  return cssUrlWrap(url);
};

const createFontFamily = (
  family: string,
  fallback?: FontFamilyFallback | FontFamilyFallback[]
): string => {
  if (!fallback) {
    return family;
  }

  return `${family},${
    typeof fallback === "string" ? fallback : fallback.join(",")
  }`;
};

export { subsetUnicodeMap, createFontFaceSrc, createFontFamily };
