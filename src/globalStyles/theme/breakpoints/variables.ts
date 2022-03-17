import { BreakpointsOrdered, BreakpointsMap } from "./types";

const breakpointsMap: BreakpointsMap = {
  xxs: 0,
  xs: 320,
  sm: 600,
  md1: 720,
  md2: 960,
  lg: 1280,
  xl: 1900
} as const;

const breakpointsOrdered: BreakpointsOrdered = [
  "xxs",
  "xs",
  "sm",
  "md1",
  "md2",
  "lg",
  "xl"
];

export { breakpointsMap, breakpointsOrdered };
