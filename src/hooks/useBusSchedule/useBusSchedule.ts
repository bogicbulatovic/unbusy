import { useQuery } from "react-query";
import { BusLinesUrlParams } from "../../mocks/types";
import { fetchBusSchedule } from "../../api/fetchBusSchedule/fetchBusSchedule";

const useBusSchedule = ({ id }: Partial<BusLinesUrlParams>) => {
  return useQuery(
    "bus_schedule_" + id,
    () => (id !== undefined ? fetchBusSchedule({ id }) : undefined),
    { enabled: id !== undefined }
  );
};

export { useBusSchedule };
