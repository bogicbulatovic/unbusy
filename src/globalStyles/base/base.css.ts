import { globalStyle } from "@vanilla-extract/css";
import { fontFamily } from "./variables";

globalStyle("*,*::before,*::after", { boxSizing: "border-box" });

globalStyle("html", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  fontSize: "100%",
  WebkitTapHighlightColor: "transparent",
  overflowX: "hidden",
  width: "100%"
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  fontFamily,
  lineHeight: "1.5"
});

globalStyle("img", { display: "block", border: "none" });

globalStyle(`[tabindex="-1"]`, { outline: "none" });

globalStyle(`[tabindex="-1"]:focus`, { outline: "0 !important" });

globalStyle("h1,h2,h3,h4,h5,h6,p", { margin: 0 });

globalStyle("address", { fontStyle: "inherit" });

globalStyle("input,button,select,optgroup,textarea", {
  margin: 0,
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit"
});

globalStyle("fieldset", {
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: "0"
});

globalStyle("a", { textDecoration: "inherit", color: "inherit" });
