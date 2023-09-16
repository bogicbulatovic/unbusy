import { useQuery } from "react-query";
import { BusLinesUrlParams } from "../../mocks/types";
import { fetchBusSchedule } from "../../api/fetchBusSchedule/fetchBusSchedule";

const useBusSchedule = ({ id }: Partial<BusLinesUrlParams>) => {
  const enabled = typeof id === "string" && !!id;

  return useQuery(
    "bus_schedule_" + id,
    () => (enabled ? fetchBusSchedule({ id }) : undefined),
    { enabled }
  );
};

export { useBusSchedule };
