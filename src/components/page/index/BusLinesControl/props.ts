import { LineId } from "../../../../mocks/types";

export type BusLinesControlProps = {
  value: LineId | undefined;
  onChange: (value: LineId) => void;
};
