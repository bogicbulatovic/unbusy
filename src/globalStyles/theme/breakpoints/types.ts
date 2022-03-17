export type BreakpointsOrdered = readonly [
  "xxs",
  "xs",
  "sm",
  "md1",
  "md2",
  "lg",
  "xl"
];

export type Breakpoints = BreakpointsOrdered[number];

export type BreakpointsMap = Record<Breakpoints, number>;
