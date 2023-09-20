import { RequestHandler, rest } from "msw";
import {
  BusLinesFeatureCollection,
  BusLinesUrlParams,
  BusSchedule
} from "./types";

import busLinesMapping from "../data/busLinesMapping.json";

const busLines: RequestHandler = rest.get<
  undefined,
  BusLinesUrlParams,
  BusLinesFeatureCollection
>("/api/v1/bus-lines/:id", async (req, res, ctx) => {
  const { id } = req.params;

  const collection = await import(
    `../data/bus-lines-json/${
      busLinesMapping[id as keyof typeof busLinesMapping]
    }.json`
  );

  return res(ctx.json(collection as BusLinesFeatureCollection));
});

const busSchedule = rest.get<
  undefined,
  BusLinesUrlParams,
  BusSchedule
>("/api/v1/bus-lines/:id/schedule", (req, res, ctx) => {
  // const { id } = req.params;

  return res(
    ctx.json({
      direction_name: "Stari Aerodrom",
      first_departure_time: "06:00",
      last_departure_time: "22:00",
      day_type: "weekday",
      interval_in_minutes: 40
    })
  );
});

const handlers = [busLines, busSchedule];

export { handlers };
