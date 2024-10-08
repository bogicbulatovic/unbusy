import { css, styled } from "../../../../styled";

const Root = styled("div", {
  position: "absolute",
  top: 10,
  right: 10,
  zIndex: 1000,
  borderRadius: 4,
  pointerEvents: "auto",
  border: "2px solid rgba(0,0,0,0.2)",
  backgroundColor: "white",
  maxWidth: "60%",
  maxHeight: "20%",
  overflowY: "auto"
});

const Container = styled("div", {
  padding: "10px 15px",
  display: "grid",
  gap: 10
});

const SelectLabel = styled("label", {
  fontSize: 16
});

const Select = styled("select", {
  fontSize: 16,
  paddingLeft: 10,
  paddingRight: 10,
  width: "100%",
  cursor: "pointer"
});

const placeholder = css({ visibility: "hidden" })();

const ScheduleRoot = styled("div", {
  display: "grid",
  gap: 5
});

const ScheduleTimeGrid = styled("div", {
  display: "grid",
  gap: "5",
  gridTemplateColumns: "auto auto auto",
  justifyItems: "center",
  justifyContent: "space-evenly"
});

export {
  Root,
  Container,
  SelectLabel,
  Select,
  placeholder,
  ScheduleRoot,
  ScheduleTimeGrid
};
