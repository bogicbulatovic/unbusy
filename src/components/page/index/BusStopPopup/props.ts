import { BusStops, LineId } from "../../../../mocks/types";

export type BusStopPopupProps = {
  lineIds: BusStops["byId"][string]["busLineIds"];
  onChange: (id: LineId) => void;
  activeLineId: LineId | undefined;
  name: string;
};
