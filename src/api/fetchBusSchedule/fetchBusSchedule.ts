import { BusLinesUrlParams, BusSchedule } from "../../mocks/types";
import { apiPaths } from "../constants";
import { _fetch } from "../fetch";
import { tranformBusSchedule } from "./helpers";

const fetchBusSchedule = async ({
  id
}: BusLinesUrlParams): Promise<BusSchedule> => {
  const res = await _fetch(apiPaths.busSchedule({ id }));

  const data = (await res.json()) as BusSchedule;

  return tranformBusSchedule(data);
};

export { fetchBusSchedule };
