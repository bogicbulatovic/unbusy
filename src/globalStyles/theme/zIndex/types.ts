import { StyleRule } from "@vanilla-extract/css";
import { WithPrefix } from "../../../types/global";

export type ZIndexComponents =
  | "ripple"
  | "stateOverlay"
  | "menu"
  | "snackbar"
  | "dialog";

export type ZIndexMap = Record<ZIndexComponents, number>;

export type ZindexStyleVariant = Record<
  | ZIndexComponents
  | WithPrefix<ZIndexComponents, "behind_">
  | WithPrefix<ZIndexComponents, "in_front_of_">,
  StyleRule
>;
