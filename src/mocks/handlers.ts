import { RequestHandler, rest } from "msw";
import {
  BusLinesFeatureCollection,
  BusLinesUrlParams
} from "./types";

import busLinesMapping from "../data/busLinesMapping.json";

const busLines: RequestHandler = rest.get<
  undefined,
  BusLinesUrlParams,
  BusLinesFeatureCollection
>("/api/v1/bus-lines/:id", async (req, res, ctx) => {
  const { id } = req.params;

  const collection = await import(
    `../data/bus-lines-json/${busLinesMapping[id]}.json`
  );

  return res(ctx.json(collection as BusLinesFeatureCollection));
});

const handlers = [busLines];

export { handlers };
