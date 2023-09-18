import { BusStops } from "../../../../mocks/types";

export type BusStopPopupProps = {
  lineIds: BusStops["byId"][string]["busLineIds"];
};
