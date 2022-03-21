import {
  FontFaceRule,
  StyleRule
} from "@vanilla-extract/css/dist/declarations/src/types";

type Src = {
  latinUrl: string;
  latinExtUrl?: string;
  locals?: string[];
};

export type FontSubset = "latin" | "latinExt";

export type FontFamilyFallback =
  | "sans-serif"
  | "serif"
  | "monospace"
  | "cursive"
  | "fantasy";

export type LoadFontProps = {
  src: Src;
  fontWeight: string;
  fontStyle: FontFaceRule["fontStyle"];
  fallback: FontFamilyFallback | FontFamilyFallback[];
};

export type LoadFontResponse = Pick<
  StyleRule,
  "fontFamily" | "fontWeight" | "fontStyle"
>;
