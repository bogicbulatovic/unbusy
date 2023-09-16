import { BusLinesUrlParams } from "../mocks/types";

const apiPaths = {
  busLines: ({ id }: BusLinesUrlParams) => `/api/v1/bus-lines/${id}`,
  busSchedule: ({ id }: BusLinesUrlParams) =>
    `/api/v1/bus-lines/${id}/schedule`
} as const;

export { apiPaths };
