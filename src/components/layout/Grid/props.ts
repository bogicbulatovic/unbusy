import React from "react";
import { FillColors } from "../../../globalStyles/theme/colors/types";
import {
  HorizontalPadding,
  VerticalPadding
} from "../../../globalStyles/theme/padding/types";
import { GridGaps, GridStyleVariants } from "./styles/types";

export interface GridProps {
  className?: string;
  component?: keyof JSX.IntrinsicElements | React.FC;
  children?:
    | ((classnames: string) => React.ReactNode)
    | React.ReactNode;
  fluidHeight?: boolean;
  column?: boolean;
  gap?: GridGaps;
  justifyItems?: keyof GridStyleVariants["justifyItems"];
  justifyContent?: keyof GridStyleVariants["justifyContent"];
  alignItems?: keyof GridStyleVariants["alignItems"];
  alignContent?: keyof GridStyleVariants["alignContent"];
  onFocus?: React.DOMAttributes<Element>["onFocus"];
  paddingX?: HorizontalPadding;
  paddingY?: VerticalPadding;
  fill?: FillColors;
  onTransitionEnd?: React.DOMAttributes<Element>["onTransitionEnd"];
  innerRef?: React.ClassAttributes<HTMLElement>["ref"];
  style?: React.CSSProperties;
}
