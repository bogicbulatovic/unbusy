import { StyleRule } from "@vanilla-extract/css";

export type GridGaps = "sm" | "normal" | "md1" | "md2" | "lg" | "xl";
type JustifyItems = "start" | "center" | "end" | "stretch";
type AlignItems = "start" | "center" | "end";
type JustifyContent =
  | "start"
  | "center"
  | "end"
  | "between"
  | "evenly";
type AlignContent = "start" | "center" | "end";

export type GridStyleVariants = {
  justifyItems: Record<JustifyItems, StyleRule>;
  alignItems: Record<AlignItems, StyleRule>;
  justifyContent: Record<JustifyContent, StyleRule>;
  alignContent: Record<AlignContent, StyleRule>;
};
