import { BusLinesUrlParams, BusSchedule } from "../../mocks/types";
import { apiPaths } from "../constants";
import { _fetch } from "../fetch";

const fetchBusSchedule = async ({
  id
}: BusLinesUrlParams): Promise<BusSchedule> => {
  const res = await _fetch(apiPaths.busSchedule({ id }));

  const data = await res.json();

  return data as BusSchedule;
};

export { fetchBusSchedule };
