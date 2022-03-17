import { WithPrefix } from "../../../types/global";

export type Colors = "primary";
export type OnColors = WithPrefix<Colors, "on_">;

export type LightThemeMap = Record<Colors, string>;
export type LightThemeOnMap = Record<Colors, string>;
export type LightThemeOnPrefixedMap = Record<OnColors, string>;

export type ForegroundColors = Colors | OnColors;
export type BackgroundColors = Colors | OnColors;
export type FillColors = Colors | OnColors;
