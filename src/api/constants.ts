import { BusLinesUrlParams } from "../mocks/types";

const apiPaths = {
  busLines: "/api/v1/bus-lines/",
  busSchedule: ({ id }: BusLinesUrlParams) =>
    `/api/v1/bus-lines/${id}/schedule`
} as const;

export { apiPaths };
