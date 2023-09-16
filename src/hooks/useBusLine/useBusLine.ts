import { useQuery } from "react-query";
import { UseBusLineProps as Props } from "./props";
import { fetchBusLIne } from "../../api/fetchBusLine/fetchBusLIne";

const useBusLine = ({ id }: Props) => {
  return useQuery(
    "bus_line_" + id,
    () => (id !== undefined ? fetchBusLIne({ id }) : undefined),
    {
      enabled: typeof id !== undefined
    }
  );
};

export { useBusLine };
