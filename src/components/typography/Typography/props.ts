import { ForegroundColors } from "../../../globalStyles/theme/colors/types";

export interface TypographyProps {
  className?: string;
  children?: React.ReactNode;
  textCenter?: boolean;
  color?: ForegroundColors;
  id?: string;
  component?: keyof JSX.IntrinsicElements;
}
