/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { fgColors } from "../../../globalStyles/theme/colors/fgColors.css";
import { createClassnames } from "../../../shared/createClassnames";
import { TypographyProps as Props } from "./props";
import * as s from "./styles/Typography.css";

const Typography: React.FC<Props> = ({
  className,
  textCenter,
  color,
  id,
  component: Component = "span",
  children
}) => {
  const classnames = createClassnames({
    [s.textCenter]: textCenter,
    [fgColors[color!]]: !!color,
    [className || ""]: !!className
  });

  return (
    <Component className={classnames} id={id}>
      {children}
    </Component>
  );
};

export { Typography };
