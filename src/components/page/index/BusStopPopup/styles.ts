import { toRem } from "../../../../globalStyles/utils/toRem";
import { css, styled } from "../../../../styled";
import { ButtonBase } from "../../../shared/ButtonBase/ButtonBase";

const Body = styled("div", {
  display: "grid",
  gap: 8,
  gridTemplateColumns: "1fr 1fr 1fr"
});

const spanAll = css({
  gridColumn: "1 / -1",
  justifySelf: "center"
})();

const LineToggleButton = styled(ButtonBase, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px 9px",
  border: "1px solid #5e6137",
  fontWeight: "bold",
  color: "#5e6137",
  letterSpacing: toRem(0.5),
  borderRadius: 4,
  variants: {
    active: {
      true: {
        backgroundColor: "#5e6137",
        color: "white"
      }
    }
  }
});

export { Body, spanAll, LineToggleButton };
