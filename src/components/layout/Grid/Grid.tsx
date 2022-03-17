/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { fillColors } from "../../../globalStyles/theme/colors/fillColors/fillColors.css";
import { paddingH } from "../../../globalStyles/theme/padding/horizontal.css";
import { paddingV } from "../../../globalStyles/theme/padding/vertical.css";
import { createClassnames } from "../../../shared/createClassnames";
import { GridProps as Props } from "./props";
import * as s from "./styles/Grid.css";

const Grid = ({
  className,
  children,
  column,
  gap,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  component: Component = "div",
  paddingX,
  paddingY,
  fill,
  onFocus,
  onTransitionEnd,
  innerRef,
  fluidHeight,
  style
}: Props): ReturnType<React.FC<Props>> => {
  //

  const classnames = createClassnames({
    [s.root]: true,
    [className || ""]: !!className,
    [s.autoFlowColumn]: column,
    [s.gaps[gap!]]: !!gap,
    [s.justifyItems[justifyItems!]]: !!justifyItems,
    [s.alignItems[alignItems!]]: !!alignItems,
    [s.justifyContent[justifyContent!]]: !!justifyContent,
    [s.alignContent[alignContent!]]: !!alignContent,
    [paddingH[paddingX!]]: !!paddingX,
    [paddingV[paddingY!]]: !!paddingY,
    [fillColors[fill!]]: !!fill,
    [s.fluidHeight]: fluidHeight
  });

  if (typeof children === "function") {
    return children(classnames);
  }

  return (
    // @ts-ignore
    <Component
      // @ts-ignore
      ref={innerRef}
      className={classnames}
      style={style}
      onFocus={onFocus}
      onTransitionEnd={onTransitionEnd}
    >
      {children}
    </Component>
  );
};

export { Grid };
