import { styled } from "../../../../styled";
import { ButtonBase } from "../../../shared/ButtonBase/ButtonBase";

const Root = styled(ButtonBase, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  zIndex: 1000,
  left: "5vw",
  bottom: "5vw",
  backgroundColor: "white",
  borderRadius: "50%",
  border: "2px solid rgba(0, 0, 0, 0.2)",
  fontSize: 40,
  padding: 10,
  color: "Black"
});

export { Root };
