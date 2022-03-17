import { Breakpoints } from "./types";
import { breakpointsMap, breakpointsOrdered } from "./variables";

const breakpointsDown = (key: Breakpoints): string =>
  `(max-width:${breakpointsMap[key] - 0.02}px)`;

const breakpointsUp = (key: Breakpoints): string =>
  `(min-width:${breakpointsMap[key]}px)`;

const breakpointsBetween = (
  start: Breakpoints,
  end: Breakpoints
): string => {
  if (
    breakpointsOrdered.indexOf(start) >
    breakpointsOrdered.indexOf(end)
  ) {
    throw new Error("invalid parameters order");
  }

  return `(min-width:${breakpointsMap[start]}px) and (max-width:${
    breakpointsMap[end] - 0.02
  }px)`;
};

const breakpointsOnly = (key: Breakpoints): string => {
  const startKeyIndex = breakpointsOrdered.indexOf(key);

  const startBreakpoint =
    breakpointsMap[breakpointsOrdered[startKeyIndex]];

  if (startKeyIndex === breakpointsOrdered.length - 1) {
    return `(min-width:${startBreakpoint}px)`;
  }

  const endKeyIndex = startKeyIndex + 1;

  const endBreakpointKey = breakpointsOrdered[endKeyIndex];

  return breakpointsBetween(key, endBreakpointKey);
};

export {
  breakpointsBetween,
  breakpointsDown,
  breakpointsOnly,
  breakpointsUp
};
