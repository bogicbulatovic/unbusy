import { apiPaths } from "../constants";
import { _fetch } from "../fetch";
import {
  FetchBusLineProps as Props,
  FetchBusLineResponse as Response
} from "./types";

const fetchBusLIne = async ({ id }: Props): Promise<Response> => {
  const response = await _fetch(apiPaths.busLines + id);

  const data = await response.json();

  return data as Response;
};

export { fetchBusLIne };
