import { useQuery } from "react-query";
import { UseBusLineProps as Props } from "./props";
import { fetchBusLIne } from "../../api/fetchBusLine/fetchBusLIne";

const useBusLine = ({ id }: Props) => {
  const enabled = typeof id === "string" && !!id;

  return useQuery(
    "bus_line_" + id,
    () => (enabled ? fetchBusLIne({ id }) : undefined),
    {
      enabled
    }
  );
};

export { useBusLine };
