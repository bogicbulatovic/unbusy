import { globalCss } from "../../styled";
import { fontFamily } from "./variables";

const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box"
  },

  html: {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    fontSize: "100%",
    "-webkit-tap-highlight-color": "transparent",
    overflowX: "hidden",
    width: "100%"
  },

  body: {
    margin: 0,
    padding: 0,
    fontFamily,
    lineHeight: "1.5"
  },

  img: {
    display: "block",
    border: "none"
  },

  [`[tabindex="-1"]`]: {
    outline: "none",
    "&:focus": {
      outline: "none !important"
    }
  },

  "h1,h2,h3,h4,h5,h6,p": {
    margin: 0
  },
  address: { fontStyle: "inherit" },

  "input,button,select,optgroup,textarea": {
    margin: 0,
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit"
  },

  fieldset: {
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0
  },

  a: { textDecoration: "inherit" }
});

const GlobalStyles: React.FC = () => {
  globalStyles();

  return null;
};

export { GlobalStyles };
