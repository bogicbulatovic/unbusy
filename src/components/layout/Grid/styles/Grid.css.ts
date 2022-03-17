import { style, styleVariants } from "@vanilla-extract/css";
import { toRem } from "../../../../globalStyles/utils/toRem";
import { GridGaps, GridStyleVariants } from "./types";

const gapsMap: Record<GridGaps, string> = {
  sm: toRem(8),
  normal: toRem(16),
  md1: toRem(24),
  md2: toRem(32),
  lg: toRem(48),
  xl: toRem(64)
} as const;

const root = style({ display: "grid" });

const fluidHeight = style({ height: "100%" });

const gaps = styleVariants(gapsMap, size => ({ gap: size }));

const autoFlowColumn = style({ gridAutoFlow: "column" });

const justifyItems = styleVariants<GridStyleVariants["justifyItems"]>(
  {
    start: { justifyItems: "start" },
    center: { justifyItems: "center" },
    end: { justifyItems: "end" },
    stretch: { justifyItems: "stretch" }
  }
);

const alignItems = styleVariants<GridStyleVariants["alignItems"]>({
  start: { alignItems: "start" },
  center: { alignItems: "center" },
  end: { alignItems: "end" }
});

const justifyContent = styleVariants<
  GridStyleVariants["justifyContent"]
>({
  start: { justifyContent: "start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "end" },
  between: { justifyContent: "space-between" },
  evenly: { justifyContent: "space-evenly" }
});

const alignContent = styleVariants<GridStyleVariants["alignContent"]>(
  {
    start: { alignContent: "start" },
    center: { alignContent: "center" },
    end: { alignContent: "end" }
  }
);

export {
  gapsMap as gridGapsMap,
  root,
  fluidHeight,
  gaps,
  autoFlowColumn,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent
};
